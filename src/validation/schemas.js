const Joi = require('joi');

exports.userSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
  name: Joi.string().required()
});

exports.submissionSchema = Joi.object({
  questionId: Joi.string().required(),
  code: Joi.string().required(),
  language: Joi.string().valid('python', 'javascript', 'java', 'cpp').required()
});

exports.loginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required()
}); 