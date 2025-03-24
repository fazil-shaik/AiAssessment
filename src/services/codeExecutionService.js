const axios = require('axios');

exports.executeCode = async (code, language) => {
  try {
    console.log('Creating submission with code:', code.substring(0, 100) + '...');
    console.log('Language:', language);
    
    // First create a submission
    const submissionResponse = await axios.post(
      `${process.env.SPHERE_ENGINE_ENDPOINT}/submissions`, 
      {
        source: code,
        compilerId: getCompilerId(language),
        input: '' // Add input if needed
      },
      {
        params: {
          access_token: process.env.SPHERE_ENGINE_TOKEN
        },
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );

    console.log('Submission created:', submissionResponse.data);
    const submissionId = submissionResponse.data.id;

    // Wait for the result with retries
    const result = await getSubmissionResult(submissionId);
    console.log('Execution result:', result);

    return {
      status: getStatusDescription(result.status.code),
      output: result.output || result.cmpinfo || '',
      error: result.error,
      time: result.time,
      memory: result.memory
    };
  } catch (error) {
    console.error('Code execution error details:', {
      message: error.message,
      response: error.response?.data,
      status: error.response?.status
    });
    
    if (error.response?.status === 401) {
      throw new Error('Authentication failed with Sphere Engine. Please check API credentials.');
    } else if (error.response?.status === 402) {
      throw new Error('Subscription expired or API quota exceeded.');
    } else if (error.response?.status === 400) {
      throw new Error('Invalid request: ' + (error.response.data.message || 'Please check your code'));
    }
    
    throw new Error('Failed to execute code: ' + (error.response?.data?.message || error.message));
  }
};

async function getSubmissionResult(submissionId, maxRetries = 10, delay = 2000) {
  console.log('Checking submission result for ID:', submissionId);
  
  for (let i = 0; i < maxRetries; i++) {
    try {
      console.log(`Attempt ${i + 1}/${maxRetries}`);
      
      const response = await axios.get(
        `${process.env.SPHERE_ENGINE_ENDPOINT}/submissions/${submissionId}`,
        {
          params: {
            access_token: process.env.SPHERE_ENGINE_TOKEN,
            withSource: false,
            withInput: false,
            withOutput: true,
            withStderr: true,
            withCmpinfo: true
          }
        }
      );

      const result = response.data;
      console.log('Status code:', result.status.code);

      // Check if execution is complete
      if (result.status.code !== 11) { // 11 is "Processing" status
        return result;
      }

      // Wait before next retry
      await new Promise(resolve => setTimeout(resolve, delay));
    } catch (error) {
      console.error('Error checking submission status:', {
        attempt: i + 1,
        error: error.message,
        response: error.response?.data
      });
      
      if (i === maxRetries - 1) {
        throw new Error('Failed to get submission result after multiple attempts');
      }
      
      // Wait before retry on error
      await new Promise(resolve => setTimeout(resolve, delay));
    }
  }

  throw new Error('Submission timeout: Maximum retries reached');
}

function getCompilerId(language) {
  // Updated Sphere Engine compiler IDs
  const compilerMap = {
    'python': 116,    // Python 3.9.7
    'javascript': 56, // Node.js 12.14.0
    'java': 10,       // JDK 17.0.1
    'cpp': 44,        // G++ 9.4.0
  };
  
  const compilerId = compilerMap[language.toLowerCase()];
  if (!compilerId) {
    throw new Error(`Unsupported language: ${language}`);
  }
  
  return compilerId;
}

function getStatusDescription(statusCode) {
  const statusMap = {
    0: 'Success',
    1: 'Compilation Error',
    2: 'Runtime Error',
    3: 'Time Limit Exceeded',
    4: 'Wrong Answer',
    5: 'Internal Error',
    11: 'Processing',
    12: 'In Queue'
  };
  return statusMap[statusCode] || `Unknown Status (${statusCode})`;
} 