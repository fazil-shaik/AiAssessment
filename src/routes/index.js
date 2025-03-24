const express = require('express');
const router = express.Router();
const jobController = require('../controllers/jobController');
const interviewController = require('../controllers/interviewController');
const authController = require('../controllers/authController');
const { protect } = require('../middleware/auth');
const validateRequest = require('../middleware/validate');
const { userSchema, submissionSchema, loginSchema } = require('../validation/schemas');
const { apiLimiter, authLimiter } = require('../middleware/rateLimiter');

// Auth routes
router.post('/register', authLimiter, validateRequest(userSchema), authController.register);
router.post('/login', authLimiter, validateRequest(loginSchema), authController.login);

// Protected routes
router.use(protect);

// Job routes
router.get('/jobs', apiLimiter, jobController.getAllJobs);
router.get('/jobs/:id', apiLimiter, jobController.getJobById);

// Interview routes
router.post('/submissions', 
  apiLimiter,
  validateRequest(submissionSchema),
  interviewController.submitCode
);

router.post('/ai-feedback', interviewController.getAIFeedback);

module.exports = router; 