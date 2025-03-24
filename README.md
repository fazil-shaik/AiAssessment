# Mock Interview Platform

This project is a mock interview platform that allows users to practice coding interviews with real-time code execution and AI-powered feedback. The platform supports multiple programming languages and provides a user-friendly interface for coding challenges.

## Features

- **Real-time Code Execution**: Execute code in multiple languages using Sphere Engine.
- **AI-Powered Feedback**: Get feedback on your code from OpenAI's GPT-4 model.
- **Multiple Language Support**: Supports Python, JavaScript, Java, and C++.
- **User Authentication**: Secure login and registration system.
- **Responsive Design**: User-friendly interface with a responsive design.

## Technologies Used

- **Frontend**: React, Material-UI, Monaco Editor
- **Backend**: Node.js, Express, MongoDB
- **Code Execution**: Sphere Engine API
- **AI Feedback**: OpenAI GPT-4 API

## Prerequisites

- Node.js and npm
- MongoDB
- Sphere Engine API credentials
- OpenAI API credentials

## Setup Instructions

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/mock-interview-platform.git
   cd mock-interview-platform
   ```

2. **Install backend dependencies**:
   ```bash
   cd mock-interview-backend
   npm install
   ```

3. **Set up environment variables**:
   Create a `.env` file in the `mock-interview-backend` directory with the following content:
   ```plaintext
   PORT=8000
   MONGODB_URI=your_mongodb_uri
   OPENAI_API_KEY=your_openai_api_key
   SPHERE_ENGINE_ENDPOINT=your_sphere_engine_endpoint
   SPHERE_ENGINE_TOKEN=your_sphere_engine_token
   JWT_SECRET=your_jwt_secret
   ```

4. **Start the backend server**:
   ```bash
   npm start
   ```

5. **Install frontend dependencies**:
   ```bash
   cd ../mock-interview-frontend
   npm install
   ```

6. **Set up frontend environment variables**:
   Create a `.env` file in the `mock-interview-frontend` directory with the following content:
   ```plaintext
   REACT_APP_API_URL=http://localhost:8000/api
   ```

7. **Start the frontend server**:
   ```bash
   npm start
   ```

## Usage

- **Access the platform**: Open your browser and go to `http://localhost:3000`.
- **Register/Login**: Create an account or log in with your credentials.
- **Select a Job**: Choose a job to start a mock interview.
- **Code and Submit**: Write your code in the editor and submit it for execution and feedback.

## API Endpoints

- **POST /api/submissions**: Submit code for execution and feedback.
- **GET /api/test-sphere-engine**: Test connection to Sphere Engine.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

For any questions or support, please contact [your-email@example.com]. 