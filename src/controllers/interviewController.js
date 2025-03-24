const Question = require('../models/Question');
const Submission = require('../models/Submission');
const { executeCode } = require('../services/codeExecutionService');
const openai = require('../services/openaiService');
const axios = require('axios');

exports.submitCode = async (req, res) => {
  try {
    console.log('Received submission request:', {
      language: req.body.language,
      codeLength: req.body.code?.length
    });

    const { code, language } = req.body;

    if (!code || !language) {
      return res.status(400).json({
        status: 'error',
        message: 'Code and language are required'
      });
    }

    // Execute code using Sphere Engine
    console.log('Executing code with Sphere Engine...');
    const executionResult = await executeCode(code, language);
    console.log('Execution result:', executionResult);

    // Get AI feedback
    console.log('Getting AI feedback...');
    const completion = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [
        {
          role: "system",
          content: "You are a senior software engineer reviewing code submissions."
        },
        {
          role: "user",
          content: `Please review this ${language} code:
          
Code:
${code}

Execution Result:
Status: ${executionResult.status}
Output: ${executionResult.output}
Time: ${executionResult.time}ms
Memory: ${executionResult.memory}KB

Please provide feedback on:
1. Code correctness
2. Time and space complexity
3. Code style and best practices
4. Potential improvements
5. Edge cases to consider`
        }
      ]
    });
    console.log('AI feedback received');

    return res.json({
      status: 'success',
      executionResult,
      feedback: completion.choices[0].message.content
    });
  } catch (error) {
    console.error('Submission error:', {
      message: error.message,
      stack: error.stack,
      details: error.response?.data
    });

    // Send appropriate error response
    const statusCode = error.response?.status || 500;
    return res.status(statusCode).json({
      status: 'error',
      message: error.message,
      details: process.env.NODE_ENV === 'development' ? {
        error: error.response?.data,
        stack: error.stack
      } : undefined
    });
  }
};

exports.getAIFeedback = async (req, res, next) => {
  try {
    const { code, language, output, executionResult, question } = req.body;

    const completion = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [
        {
          role: "system",
          content: "You are a senior software engineer reviewing code submissions."
        },
        {
          role: "user",
          content: `Please review this ${language} code solution for the problem "${question}".
          
Code:
${code}

Execution Result:
Status: ${executionResult.status.description}
Output: ${output}
Time: ${executionResult.time}ms
Memory: ${executionResult.memory}KB

Please provide feedback on:
1. Code correctness
2. Time and space complexity
3. Code style and best practices
4. Potential improvements
5. Edge cases to consider`
        }
      ]
    });

    res.json({
      feedback: completion.choices[0].message.content
    });
  } catch (error) {
    next(error);
  }
};

exports.testSphereEngine = async (req, res) => {
  try {
    const response = await axios.get(
      `${process.env.SPHERE_ENGINE_ENDPOINT}/test`,
      {
        params: {
          access_token: process.env.SPHERE_ENGINE_TOKEN
        }
      }
    );

    return res.json({
      status: 'success',
      message: 'Sphere Engine connection successful',
      data: response.data
    });
  } catch (error) {
    console.error('Sphere Engine test error:', {
      message: error.message,
      response: error.response?.data
    });

    return res.status(500).json({
      status: 'error',
      message: 'Failed to connect to Sphere Engine',
      details: error.response?.data
    });
  }
}; 