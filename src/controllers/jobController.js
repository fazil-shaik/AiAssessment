const Job = require('../models/Job');

exports.getAllJobs = async (req, res, next) => {
  try {
    const jobs = await Job.find().populate('relatedQuestions');
    res.json(jobs);
  } catch (error) {
    next(error);
  }
};

exports.getJobById = async (req, res, next) => {
  try {
    const job = await Job.findById(req.params.id).populate('relatedQuestions');
    if (!job) {
      return res.status(404).json({ message: 'Job not found' });
    }
    res.json(job);
  } catch (error) {
    next(error);
  }
}; 