// import axios from 'axios';

// const api = axios.create({
//   baseURL: 'http://localhost:8000/api'
// });

// // Add token to all requests
// api.interceptors.request.use((config) => {
//   const token = localStorage.getItem('token');
//   if (token) {
//     config.headers.Authorization = `Bearer ${token}`;
//   }
//   return config;
// });

// // Mock data for jobs
// export const mockJobs = [
//   {
//     _id: '1',
//     title: 'Senior Frontend Developer',
//     company: 'Google',
//     salary: '₹35L - ₹45L PA',
//     location: 'Bangalore',
//     description: 'Join our dynamic team to build next-gen web applications',
//     requirements: ['React', 'TypeScript', 'Node.js']
//   },
//   {
//     _id: '2',
//     title: 'Backend Engineer',
//     company: 'Microsoft',
//     salary: '₹30L - ₹40L PA',
//     location: 'Hyderabad',
//     description: 'Build scalable backend services for cloud platforms',
//     requirements: ['Java', 'Spring Boot', 'AWS']
//   },
//   {
//     _id: '3',
//     title: 'Full Stack Developer',
//     company: 'Amazon',
//     salary: '₹28L - ₹38L PA',
//     location: 'Mumbai',
//     description: 'Work on end-to-end development of e-commerce solutions',
//     requirements: ['MERN Stack', 'Python', 'DevOps']
//   },
//   {
//     _id: '4',
//     title: 'ML Engineer',
//     company: 'Meta',
//     salary: '₹40L - ₹50L PA',
//     location: 'Bangalore',
//     description: 'Develop AI/ML solutions for social media platforms',
//     requirements: ['Python', 'TensorFlow', 'PyTorch']
//   }
// ];

// export default api; 


import axios from 'axios';

const api = axios.create({
  baseURL: 'https://aiassessment.onrender.com/api'
});

// Add token to all requests
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Mock data for jobs
export const mockJobs = [
  {
    _id: '1',
    title: 'Senior Frontend Developer',
    company: 'Tech Corp',
    salary: '₹25L - ₹35L PA',
    location: 'Bangalore',
    questionId: '1'
  },
  {
    _id: '2',
    title: 'Backend Engineer',
    company: 'Innovation Labs',
    salary: '₹20L - ₹30L PA',
    location: 'Hyderabad',
    questionId: '2'
  },
  {
    _id: '3',
    title: 'Full Stack Developer',
    company: 'Digital Solutions',
    salary: '₹18L - ₹28L PA',
    location: 'Mumbai',
    questionId: '3'
  },
  {
    _id: '4',
    title: 'React Native Developer',
    company: 'Mobile Tech',
    salary: '₹22L - ₹32L PA',
    location: 'Delhi',
    questionId: '4'
  }
];

// Mock questions for interviews
export const mockQuestions = {
  '1': {
    title: 'Two Sum Problem',
    description: `Given an array of integers nums and an integer target, return indices of the two numbers in nums such that they add up to target.
    
Example:
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].`,
    testCases: [
      { input: 'nums = [2,7,11,15], target = 9', output: '[0,1]' },
      { input: 'nums = [3,2,4], target = 6', output: '[1,2]' }
    ]
  },
  '2': {
    title: 'String Reversal',
    description: `Write a function that reverses a string without using built-in reverse methods.
    
Example:
Input: "hello"
Output: "olleh"`,
    testCases: [
      { input: '"hello"', output: '"olleh"' },
      { input: '"world"', output: '"dlrow"' }
    ]
  }
};

export default api;