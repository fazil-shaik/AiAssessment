/* eslint-disable react/prop-types */
// import { useState } from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { ThemeProvider } from '@mui/material/styles';
// import CssBaseline from '@mui/material/CssBaseline';
// import { getTheme } from './theme';

// // Pages
// import Landing from './pages/Landing';
// import Login from './pages/Login';
// import Register from './pages/Register';
// import JobList from './pages/JobList';
// import Interview from './pages/Interview';
// import Navbar from './components/Navbar';

// function App() {
//   const [mode, setMode] = useState('light');
//   const theme = getTheme(mode);

//   const toggleTheme = () => {
//     setMode(prevMode => prevMode === 'light' ? 'dark' : 'light');
//   };

//   return (
//     <ThemeProvider theme={theme}>
//       <CssBaseline />
//       <Router>
//         <Routes>
//           {/* Public routes */}
//           <Route path="/" element={<Landing toggleTheme={toggleTheme} mode={mode} />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/register" element={<Register />} />
          
//           {/* Protected routes */}
//           <Route path="/jobs" element={
//             <>
//               <Navbar />
//               <JobList />
//             </>
//           } />
//           <Route path="/interview/:jobId" element={
//             <>
//               <Navbar />
//               <Interview />
//             </>
//           } />
//         </Routes>
//       </Router>
//     </ThemeProvider>
//   );
// }

// export default App;


import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { getTheme } from './theme';
import { useAuth } from './contexts/AuthContext';

// Pages
import Landing from './pages/Landing';
import Login from './pages/Login';
import Register from './pages/Register';
import JobList from './pages/JobList';
import Interview from './pages/Interview';
import Navbar from './components/Navbar';

// Protected Route Component
const ProtectedRoute = ({ children }) => {
  const { token } = useAuth();
  if (!token) {
    return <Navigate to="/login" />;
  }
  return children;
};

function App() {
  const [mode, setMode] = useState('light');
  const theme = getTheme(mode);

  const toggleTheme = () => {
    setMode(prevMode => prevMode === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes>
          {/* Public routes */}
          <Route path="/" element={<Landing toggleTheme={toggleTheme} mode={mode} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          
          {/* Protected routes */}
          <Route path="/jobs" element={
            <ProtectedRoute>
              <Navbar />
              <JobList />
            </ProtectedRoute>
          } />
          <Route path="/interview/:jobId" element={
            <ProtectedRoute>
              <Navbar />
              <Interview />
            </ProtectedRoute>
          } />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App; 