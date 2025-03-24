/* eslint-disable no-undef */
/* eslint-disable react/jsx-no-undef */
// import { useState } from 'react';
// import { useParams } from 'react-router-dom';
// import {
//   Container,
//   Grid,
//   Paper,
//   Typography,
//   Select,
//   MenuItem,
//   Button,
//   Box,
//   Divider,
//   Alert,
//   CircularProgress
// } from '@mui/material';
// import Editor from '@monaco-editor/react';
// import { mockQuestions } from '../../services/api';
// import axios from 'axios';

// const languageOptions = [
//   { value: 'javascript', label: 'JavaScript', id: 63 },
//   { value: 'python', label: 'Python', id: 71 },
//   { value: 'java', label: 'Java', id: 62 },
//   { value: 'cpp', label: 'C++', id: 54 }
// ];

// const defaultCode = {
//   javascript: `function twoSum(nums, target) {
//     // Write your solution here
// }`,
//   python: `def two_sum(nums, target):
//     # Write your solution here
//     pass`,
//   java: `public class Solution {
//     public int[] twoSum(int[] nums, int target) {
//         // Write your solution here
//     }
// }`,
//   cpp: `class Solution {
// public:
//     vector<int> twoSum(vector<int>& nums, int target) {
//         // Write your solution here
//     }
// };`
// };

// function Interview() {
//   const { jobId } = useParams();
//   const [language, setLanguage] = useState('javascript');
//   const [code, setCode] = useState(defaultCode.javascript);
//   const [output, setOutput] = useState(null);
//   const [feedback, setFeedback] = useState(null);
//   const [submitting, setSubmitting] = useState(false);
//   const [error, setError] = useState(null);
//   const question = mockQuestions[jobId];

//   const compileCode = async () => {
//     try {
//       // First API call to create submission
//       const createResponse = await axios.post('https://judge0-ce.p.rapidapi.com/submissions', {
//         source_code: code,
//         language_id: languageOptions.find(l => l.value === language).id,
//         stdin: '[2,7,11,15]\n9'  // Example input for Two Sum
//       }, {
//         headers: {
//           'content-type': 'application/json',
//           'X-RapidAPI-Key': 'da11562cbmsh1e4118b1babc88fp15f77bjsn253f047ab09e',
//           'X-RapidAPI-Host': 'judge0-ce.p.rapidapi.com'
//         }
//       });

//       const token = createResponse.data.token;

//       // Wait for 2 seconds before checking the result
//       await new Promise(resolve => setTimeout(resolve, 2000));

//       // Second API call to get the result
//       const resultResponse = await axios.get(`https://judge0-ce.p.rapidapi.com/submissions/${token}`, {
//         headers: {
//           'X-RapidAPI-Key': 'da11562cbmsh1e4118b1babc88fp15f77bjsn253f047ab09e',
//           'X-RapidAPI-Host': 'judge0-ce.p.rapidapi.com'
//         }
//       });

//       return resultResponse.data;
//     } catch (error) {
//       console.error('Compilation error:', error);
//       throw new Error('Failed to compile code. Please try again.');
//     }
//   };

//   const getAIFeedback = async (executionResult) => {
//     try {
//       const response = await axios.post('http://localhost:8000/api/ai-feedback', {
//         code,
//         language,
//         output: executionResult.stdout || '',
//         executionResult: {
//           status: { description: executionResult.status.description },
//           time: executionResult.time,
//           memory: executionResult.memory
//         },
//         question: question.title
//       });
//       return response.data.feedback;
//     } catch (error) {
//       throw new Error('Failed to get AI feedback');
//     }
//   };

//   const handleSubmit = async () => {
//     setSubmitting(true);
//     setError(null);
//     setOutput(null);
//     setFeedback(null);

//     try {
//       // Step 1: Compile and run code
//       const executionResult = await compileCode();
      
//       setOutput({
//         status: executionResult.status.description,
//         stdout: executionResult.stdout,
//         stderr: executionResult.stderr,
//         compile_output: executionResult.compile_output,
//         time: executionResult.time,
//         memory: executionResult.memory
//       });

//       // Step 2: Get AI feedback if compilation was successful
//       if (executionResult.status.id === 3) { // 3 means Accepted
//         const aiFeedback = await getAIFeedback(executionResult);
//         setFeedback(aiFeedback);
//       }
//     } catch (err) {
//       setError(err.message);
//     } finally {
//       setSubmitting(false);
//     }
//   };

//   return (
//     <Container maxWidth="xl" sx={{ mt: 4, mb: 4 }}>
//       <Grid container spacing={2} sx={{ height: 'calc(100vh - 150px)' }}>
//         {/* Question Panel */}
//         <Grid item xs={12} md={4}>
//           <Paper sx={{ p: 3, height: '100%', overflow: 'auto' }}>
//             <Typography variant="h5" gutterBottom color="primary">
//               {question?.title}
//             </Typography>
            
//             <Divider sx={{ my: 2 }} />
            
//             <Typography variant="body1" sx={{ whiteSpace: 'pre-wrap' }}>
//               {question?.description}
//             </Typography>

//             <Box sx={{ mt: 3 }}>
//               <Typography variant="h6" gutterBottom>
//                 Example Test Cases:
//               </Typography>
//               {question?.testCases.map((testCase, index) => (
//                 <Paper key={index} sx={{ p: 2, my: 1, bgcolor: 'grey.50' }}>
//                   <Typography variant="body2" component="pre">
//                     Input: {testCase.input}
//                   </Typography>
//                   <Typography variant="body2" component="pre">
//                     Output: {testCase.output}
//                   </Typography>
//                 </Paper>
//               ))}
//             </Box>
//           </Paper>
//         </Grid>

//         {/* Code Editor Panel */}
//         <Grid item xs={12} md={8}>
//           <Paper sx={{ p: 3, height: '100%', display: 'flex', flexDirection: 'column' }}>
//             <Box sx={{ mb: 2, display: 'flex', gap: 2, alignItems: 'center' }}>
//               <Select
//                 value={language}
//                 onChange={(e) => {
//                   setLanguage(e.target.value);
//                   setCode(defaultCode[e.target.value]);
//                 }}
//                 size="small"
//                 sx={{ minWidth: 150 }}
//               >
//                 {languageOptions.map(option => (
//                   <MenuItem key={option.value} value={option.value}>
//                     {option.label}
//                   </MenuItem>
//                 ))}
//               </Select>
              
//               <Button
//                 variant="contained"
//                 color="primary"
//                 onClick={handleSubmit}
//                 disabled={submitting}
//                 startIcon={submitting && <CircularProgress size={20} color="inherit" />}
//               >
//                 {submitting ? 'Running...' : 'Run Code'}
//               </Button>
//             </Box>

//             <Box sx={{ flexGrow: 1, mb: 2 }}>
//               <Editor
//                 height="100%"
//                 language={language}
//                 value={code}
//                 onChange={setCode}
//                 theme="vs-dark"
//                 options={{
//                   minimap: { enabled: false },
//                   fontSize: 14,
//                   wordWrap: 'on',
//                   automaticLayout: true,
//                   lineNumbers: 'on',
//                   scrollBeyondLastLine: false,
//                   tabSize: 2,
//                 }}
//               />
//             </Box>

//             {error && (
//               <Alert severity="error" sx={{ mb: 2 }}>
//                 {error}
//               </Alert>
//             )}

//             {output && (
//               <Paper sx={{ p: 2, mb: 2, bgcolor: 'grey.50' }}>
//                 <Typography variant="h6" gutterBottom>
//                   Execution Results
//                 </Typography>
//                 <Divider sx={{ mb: 1 }} />
//                 <Typography variant="body2">Status: {output.status}</Typography>
//                 {output.stdout && (
//                   <Box sx={{ mt: 1 }}>
//                     <Typography variant="subtitle2">Output:</Typography>
//                     <Paper sx={{ p: 1, bgcolor: 'background.paper' }}>
//                       <pre style={{ margin: 0, whiteSpace: 'pre-wrap' }}>
//                         {output.stdout}
//                       </pre>
//                     </Paper>
//                   </Box>
//                 )}
//                 {(output.stderr || output.compile_output) && (
//                   <Box sx={{ mt: 1 }}>
//                     <Typography variant="subtitle2" color="error">
//                       Error:
//                     </Typography>
//                     <Paper sx={{ p: 1, bgcolor: 'background.paper' }}>
//                       <pre style={{ margin: 0, whiteSpace: 'pre-wrap', color: 'red' }}>
//                         {output.stderr || output.compile_output}
//                       </pre>
//                     </Paper>
//                   </Box>
//                 )}
//                 <Box sx={{ mt: 1 }}>
//                   <Typography variant="body2">
//                     Execution Time: {output.time || 0} seconds
//                   </Typography>
//                   <Typography variant="body2">
//                     Memory Used: {output.memory || 0} KB
//                   </Typography>
//                 </Box>
//               </Paper>
//             )}

//             {feedback && (
//               <Paper sx={{ p: 2, bgcolor: 'grey.50' }}>
//                 <Typography variant="h6" gutterBottom color="primary">
//                   AI Feedback
//                 </Typography>
//                 <Divider sx={{ mb: 2 }} />
//                 <Typography variant="body2" sx={{ whiteSpace: 'pre-wrap' }}>
//                   {feedback}
//                 </Typography>
//               </Paper>
//             )}
//           </Paper>
//         </Grid>
//       </Grid>
//     </Container>
//   );
// }

// // export default Interview; 



// import { useState } from 'react';
// import { useParams } from 'react-router-dom';
// import {
//   Container,
//   Grid,
//   Paper,
//   Typography,
//   Select,
//   MenuItem,
//   Button,
//   Box,
//   Divider,
//   Alert,
//   CircularProgress
// } from '@mui/material';
// import Editor from '@monaco-editor/react';
// import { mockQuestions } from '../../services/api';
// import axios from 'axios';

// const languageOptions = [
//   { value: 'javascript', label: 'JavaScript', id: 63 },
//   { value: 'python', label: 'Python', id: 71 },
//   { value: 'java', label: 'Java', id: 62 },
//   { value: 'cpp', label: 'C++', id: 54 }
// ];

// const defaultCode = {
//   javascript: `function twoSum(nums, target) {
//     // Write your solution here
// }`,
//   python: `def two_sum(nums, target):
//     # Write your solution here
//     pass`,
//   java: `public class Solution {
//     public int[] twoSum(int[] nums, int target) {
//         // Write your solution here
//     }
// }`,
//   cpp: `class Solution {
// public:
//     vector<int> twoSum(vector<int>& nums, int target) {
//         // Write your solution here
//     }
// };`
// };

// function Interview() {
//   const { jobId } = useParams();
//   const [language, setLanguage] = useState('javascript');
//   const [code, setCode] = useState(defaultCode.javascript);
//   const [output, setOutput] = useState(null);
//   const [feedback, setFeedback] = useState(null);
//   const [submitting, setSubmitting] = useState(false);
//   const [error, setError] = useState(null);
//   const question = mockQuestions[jobId];

//   const compileCode = async () => {
//     try {
//       // First API call to create submission
//       const createResponse = await axios.post('https://judge0-ce.p.rapidapi.com/submissions', {
//         source_code: code,
//         language_id: languageOptions.find(l => l.value === language).id,
//         stdin: '[2,7,11,15]\n9'  // Example input for Two Sum
//       }, {
//         headers: {
//           'content-type': 'application/json',
//           'X-RapidAPI-Key': 'da11562cbmsh1e4118b1babc88fp15f77bjsn253f047ab09e',
//           'X-RapidAPI-Host': 'judge0-ce.p.rapidapi.com'
//         }
//       });

//       const token = createResponse.data.token;

//       // Wait for 2 seconds before checking the result
//       await new Promise(resolve => setTimeout(resolve, 2000));

//       // Second API call to get the result
//       const resultResponse = await axios.get(`https://judge0-ce.p.rapidapi.com/submissions/${token}`, {
//         headers: {
//           'X-RapidAPI-Key': 'da11562cbmsh1e4118b1babc88fp15f77bjsn253f047ab09e',
//           'X-RapidAPI-Host': 'judge0-ce.p.rapidapi.com'
//         }
//       });

//       return resultResponse.data;
//     } catch (error) {
//       console.error('Compilation error:', error);
//       throw new Error('Failed to compile code. Please try again.');
//     }
//   };

//   const getAIFeedback = async (executionResult) => {
//     try {
//       const response = await axios.post('http://localhost:8000/api/ai-feedback', {
//         code,
//         language,
//         output: executionResult.stdout || '',
//         executionResult: {
//           status: { description: executionResult.status.description },
//           time: executionResult.time,
//           memory: executionResult.memory
//         },
//         question: question.title
//       });
//       return response.data.feedback;
//     } catch (error) {
//       throw new Error('Failed to get AI feedback');
//     }
//   };

//   const handleSubmit = async () => {
//     setSubmitting(true);
//     setError(null);
//     setOutput(null);
//     setFeedback(null);

//     try {
//       // Step 1: Compile and run code
//       const executionResult = await compileCode();
      
//       setOutput({
//         status: executionResult.status.description,
//         stdout: executionResult.stdout,
//         stderr: executionResult.stderr,
//         compile_output: executionResult.compile_output,
//         time: executionResult.time,
//         memory: executionResult.memory
//       });

//       // Step 2: Get AI feedback if compilation was successful
//       if (executionResult.status.id === 3) { // 3 means Accepted
//         const aiFeedback = await getAIFeedback(executionResult);
//         setFeedback(aiFeedback);
//       }
//     } catch (err) {
//       setError(err.message);
//     } finally {
//       setSubmitting(false);
//     }
//   };

//   return (
//     <Container maxWidth="xl" sx={{ mt: 4, mb: 4 }}>
//       <Grid container spacing={2} sx={{ height: 'calc(100vh - 150px)' }}>
//         {/* Question Panel */}
//         <Grid item xs={12} md={4}>
//           <Paper sx={{ p: 3, height: '100%', overflow: 'auto' }}>
//             <Typography variant="h5" gutterBottom color="primary">
//               {question?.title}
//             </Typography>
            
//             <Divider sx={{ my: 2 }} />
            
//             <Typography variant="body1" sx={{ whiteSpace: 'pre-wrap' }}>
//               {question?.description}
//             </Typography>

//             <Box sx={{ mt: 3 }}>
//               <Typography variant="h6" gutterBottom>
//                 Example Test Cases:
//               </Typography>
//               {question?.testCases.map((testCase, index) => (
//                 <Paper key={index} sx={{ p: 2, my: 1, bgcolor: 'grey.50' }}>
//                   <Typography variant="body2" component="pre">
//                     Input: {testCase.input}
//                   </Typography>
//                   <Typography variant="body2" component="pre">
//                     Output: {testCase.output}
//                   </Typography>
//                 </Paper>
//               ))}
//             </Box>
//           </Paper>
//         </Grid>

//         {/* Code Editor Panel */}
//         <Grid item xs={12} md={8}>
//           <Paper sx={{ p: 3, height: '100%', display: 'flex', flexDirection: 'column' }}>
//             <Box sx={{ mb: 2, display: 'flex', gap: 2, alignItems: 'center' }}>
//               <Select
//                 value={language}
//                 onChange={(e) => {
//                   setLanguage(e.target.value);
//                   setCode(defaultCode[e.target.value]);
//                 }}
//                 size="small"
//                 sx={{ minWidth: 150 }}
//               >
//                 {languageOptions.map(option => (
//                   <MenuItem key={option.value} value={option.value}>
//                     {option.label}
//                   </MenuItem>
//                 ))}
//               </Select>
              
//               <Button
//                 variant="contained"
//                 color="primary"
//                 onClick={handleSubmit}
//                 disabled={submitting}
//                 startIcon={submitting && <CircularProgress size={20} color="inherit" />}
//               >
//                 {submitting ? 'Running...' : 'Run Code'}
//               </Button>
//             </Box>

//             <Box sx={{ flexGrow: 1, mb: 2 }}>
//               <Editor
//                 height="100%"
//                 language={language}
//                 value={code}
//                 onChange={setCode}
//                 theme="vs-dark"
//                 options={{
//                   minimap: { enabled: false },
//                   fontSize: 14,
//                   wordWrap: 'on',
//                   automaticLayout: true,
//                   lineNumbers: 'on',
//                   scrollBeyondLastLine: false,
//                   tabSize: 2,
//                 }}
//               />
//             </Box>

//             {error && (
//               <Alert severity="error" sx={{ mb: 2 }}>
//                 {error}
//               </Alert>
//             )}

//             {output && (
//               <Paper sx={{ p: 2, mb: 2, bgcolor: 'grey.50' }}>
//                 <Typography variant="h6" gutterBottom>
//                   Execution Results
//                 </Typography>
//                 <Divider sx={{ mb: 1 }} />
//                 <Typography variant="body2">Status: {output.status}</Typography>
//                 {output.stdout && (
//                   <Box sx={{ mt: 1 }}>
//                     <Typography variant="subtitle2">Output:</Typography>
//                     <Paper sx={{ p: 1, bgcolor: 'background.paper' }}>
//                       <pre style={{ margin: 0, whiteSpace: 'pre-wrap' }}>
//                         {output.stdout}
//                       </pre>
//                     </Paper>
//                   </Box>
//                 )}
//                 {(output.stderr || output.compile_output) && (
//                   <Box sx={{ mt: 1 }}>
//                     <Typography variant="subtitle2" color="error">
//                       Error:
//                     </Typography>
//                     <Paper sx={{ p: 1, bgcolor: 'background.paper' }}>
//                       <pre style={{ margin: 0, whiteSpace: 'pre-wrap', color: 'red' }}>
//                         {output.stderr || output.compile_output}
//                       </pre>
//                     </Paper>
//                   </Box>
//                 )}
//                 <Box sx={{ mt: 1 }}>
//                   <Typography variant="body2">
//                     Execution Time: {output.time || 0} seconds
//                   </Typography>
//                   <Typography variant="body2">
//                     Memory Used: {output.memory || 0} KB
//                   </Typography>
//                 </Box>
//               </Paper>
//             )}

//             {feedback && (
//               <Paper sx={{ p: 2, bgcolor: 'grey.50' }}>
//                 <Typography variant="h6" gutterBottom color="primary">
//                   AI Feedback
//                 </Typography>
//                 <Divider sx={{ mb: 2 }} />
//                 <Typography variant="body2" sx={{ whiteSpace: 'pre-wrap' }}>
//                   {feedback}
//                 </Typography>
//               </Paper>
//             )}
//           </Paper>
//         </Grid>
//       </Grid>
//     </Container>
//   );
// }

// export default Interview;

import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
  Container,
  Grid,
  Paper,
  Typography,
  Select,
  MenuItem,
  Button,
  Box,
  CircularProgress,
  Alert,
  Divider
} from '@mui/material';
import Editor from '@monaco-editor/react';
import axios from 'axios';
import { mockQuestions } from '../../services/api';

const languageOptions = [
  { value: 'python', label: 'Python' },
  { value: 'javascript', label: 'JavaScript' },
  { value: 'java', label: 'Java' },
  { value: 'cpp', label: 'C++' }
];

const defaultCode = {
  python: `# Python 3
def solution(nums, target):
    # Write your solution here
    # Example: Two Sum Problem
    seen = {}
    for i, num in enumerate(nums):
        complement = target - num
        if complement in seen:
            return [seen[complement], i]
        seen[num] = i
    return []

# Test your solution
nums = [2, 7, 11, 15]
target = 9
print(solution(nums, target))`,

  javascript: `// JavaScript
function solution(nums, target) {
    // Write your solution here
    // Example: Two Sum Problem
    const seen = new Map();
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (seen.has(complement)) {
            return [seen.get(complement), i];
        }
        seen.set(nums[i], i);
    }
    return [];
}

// Test your solution
const nums = [2, 7, 11, 15];
const target = 9;
console.log(solution(nums, target));`,

  java: `// Java
public class Main {
    public static int[] solution(int[] nums, int target) {
        // Write your solution here
        // Example: Two Sum Problem
        java.util.Map<Integer, Integer> seen = new java.util.HashMap<>();
        for (int i = 0; i < nums.length; i++) {
            int complement = target - nums[i];
            if (seen.containsKey(complement)) {
                return new int[] { seen.get(complement), i };
            }
            seen.put(nums[i], i);
        }
        return new int[] {};
    }

    public static void main(String[] args) {
        int[] nums = {2, 7, 11, 15};
        int target = 9;
        int[] result = solution(nums, target);
        System.out.println(java.util.Arrays.toString(result));
    }
}`,

  cpp: `// C++
#include <iostream>
#include <vector>
#include <unordered_map>
using namespace std;

vector<int> solution(vector<int>& nums, int target) {
    // Write your solution here
    // Example: Two Sum Problem
    unordered_map<int, int> seen;
    for (int i = 0; i < nums.size(); i++) {
        int complement = target - nums[i];
        if (seen.count(complement)) {
            return {seen[complement], i};
        }
        seen[nums[i]] = i;
    }
    return {};
}

int main() {
    vector<int> nums = {2, 7, 11, 15};
    int target = 9;
    vector<int> result = solution(nums, target);
    cout << "[" << result[0] << "," << result[1] << "]" << endl;
    return 0;
}`
};

function Interview() {
  const { jobId } = useParams();
  const [code, setCode] = useState(defaultCode.python);
  const [language, setLanguage] = useState('python');
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [output, setOutput] = useState(null);
  const [feedback, setFeedback] = useState(null);
  const [question, setQuestion] = useState(null);

  useEffect(() => {
    // Get question details
    setQuestion(mockQuestions[jobId]);
  }, [jobId]);

  const handleSubmit = async () => {
    setSubmitting(true);
    setError(null);
    setOutput(null);
    setFeedback(null);

    try {
      const response = await axios.post('http://localhost:8000/api/submissions', {
        code,
        language,
        questionId: jobId
      }, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      });

      if (response.data.executionResult) {
        const result = response.data.executionResult;
        setOutput({
          status: result.status,
          stdout: result.output || '',
          stderr: result.error || '',
          time: result.time + 'ms',
          memory: (result.memory / 1024).toFixed(2) + ' MB'
        });
      }

      if (response.data.feedback) {
        setFeedback(response.data.feedback);
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to execute code');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Container maxWidth="xl" sx={{ mt: 4, mb: 4 }}>
      <Grid container spacing={2} sx={{ height: 'calc(100vh - 150px)' }}>
        {/* Question Panel */}
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 3, height: '100%', overflow: 'auto' }}>
            <Typography variant="h5" gutterBottom color="primary">
              {question?.title || 'Two Sum Problem'}
            </Typography>
            
            <Divider sx={{ my: 2 }} />
            
            <Typography variant="body1" sx={{ whiteSpace: 'pre-wrap' }}>
              {question?.description || `Given an array of integers nums and an integer target, return indices of the two numbers in nums such that they add up to target.

Example:
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].`}
            </Typography>

            <Box sx={{ mt: 3 }}>
              <Typography variant="h6" gutterBottom>
                Example Test Cases:
              </Typography>
              {(question?.testCases || [
                { input: 'nums = [2,7,11,15], target = 9', output: '[0,1]' },
                { input: 'nums = [3,2,4], target = 6', output: '[1,2]' }
              ]).map((testCase, index) => (
                <Paper key={index} sx={{ p: 2, my: 1, bgcolor: 'grey.50' }}>
                  <Typography variant="body2" component="pre">
                    Input: {testCase.input}
                  </Typography>
                  <Typography variant="body2" component="pre">
                    Output: {testCase.output}
                  </Typography>
                </Paper>
              ))}
            </Box>
          </Paper>
        </Grid>

        {/* Code Editor Panel */}
        <Grid item xs={12} md={8}>
          <Paper sx={{ p: 3, height: '100%', display: 'flex', flexDirection: 'column' }}>
            <Box sx={{ mb: 2, display: 'flex', gap: 2, alignItems: 'center' }}>
              <Select
                value={language}
                onChange={(e) => {
                  setLanguage(e.target.value);
                  setCode(defaultCode[e.target.value]);
                }}
                size="small"
                sx={{ minWidth: 150 }}
              >
                {languageOptions.map(option => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </Select>
              
              <Button
                variant="contained"
                color="primary"
                onClick={handleSubmit}
                disabled={submitting}
                startIcon={submitting && <CircularProgress size={20} color="inherit" />}
              >
                {submitting ? 'Running...' : 'Run Code'}
              </Button>
            </Box>

            <Box sx={{ flexGrow: 1, mb: 2 }}>
              <Editor
                height="100%"
                language={language}
                value={code}
                onChange={setCode}
                theme="vs-dark"
                options={{
                  minimap: { enabled: false },
                  fontSize: 14,
                  wordWrap: 'on',
                  automaticLayout: true,
                  lineNumbers: 'on',
                  scrollBeyondLastLine: false,
                  tabSize: 2,
                }}
              />
            </Box>

            {error && (
              <Alert severity="error" sx={{ mb: 2 }}>
                {error}
              </Alert>
            )}

            {output && (
              <Paper sx={{ p: 2, mb: 2, bgcolor: 'grey.50' }}>
                <Typography variant="h6" gutterBottom>
                  Execution Results
                </Typography>
                <Divider sx={{ mb: 1 }} />
                <Typography variant="body2">Status: {output.status}</Typography>
                {output.stdout && (
                  <Box sx={{ mt: 1 }}>
                    <Typography variant="subtitle2">Output:</Typography>
                    <Paper sx={{ p: 1, bgcolor: 'background.paper' }}>
                      <pre style={{ margin: 0, whiteSpace: 'pre-wrap' }}>
                        {output.stdout}
                      </pre>
                    </Paper>
                  </Box>
                )}
                {(output.stderr || output.compile_output) && (
                  <Box sx={{ mt: 1 }}>
                    <Typography variant="subtitle2" color="error">
                      Error:
                    </Typography>
                    <Paper sx={{ p: 1, bgcolor: 'background.paper' }}>
                      <pre style={{ margin: 0, whiteSpace: 'pre-wrap', color: 'red' }}>
                        {output.stderr || output.compile_output}
                      </pre>
                    </Paper>
                  </Box>
                )}
                <Box sx={{ mt: 1 }}>
                  <Typography variant="body2">
                    Execution Time: {output.time || 0} seconds
                  </Typography>
                  <Typography variant="body2">
                    Memory Used: {output.memory || 0} KB
                  </Typography>
                </Box>
              </Paper>
            )}

            {feedback && (
              <Paper sx={{ p: 2, bgcolor: 'grey.50' }}>
                <Typography variant="h6" gutterBottom color="primary">
                  AI Feedback
                </Typography>
                <Divider sx={{ mb: 2 }} />
                <Typography variant="body2" sx={{ whiteSpace: 'pre-wrap' }}>
                  {feedback}
                </Typography>
              </Paper>
            )}
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Interview; 