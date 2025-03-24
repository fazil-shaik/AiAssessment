const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  difficulty: {
    type: String,
    enum: ['easy', 'medium', 'hard'],
    required: true
  },
  testCases: [{
    input: String,
    output: String
  }],
  sampleSolution: String,
  tags: [String]
}, { timestamps: true });

module.exports = mongoose.model('Question', questionSchema); 