require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Error details:', {
    message: err.message,
    stack: err.stack,
    details: err.response?.data
  });
  
  res.status(500).json({
    status: 'error',
    message: err.message,
    details: process.env.NODE_ENV === 'development' ? err.stack : undefined
  });
});

// Routes
app.use('/api', routes);

app.get('/',(req,res)=>{
  res.send("server working fine")
})

// Database connection
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

// Start server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}); 