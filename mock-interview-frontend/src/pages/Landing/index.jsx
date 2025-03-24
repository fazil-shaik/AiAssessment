// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import Typewriter from 'typewriter-effect';
// import { motion } from 'framer-motion';
// import { styled } from '@mui/material/styles';
// import {
//   Box,
//   Container,
//   Typography,
//   Button,
//   Card,
//   CardContent,
//   Grid,
//   useTheme,
//   IconButton
// } from '@mui/material';
// import { 
//   FaCode, 
//   FaLightbulb, 
//   FaBrain,
//   FaRocket,
//   FaMoon,
//   FaSun 
// } from 'react-icons/fa';

// const StyledCard = styled(Card)(({ theme }) => ({
//   height: '100%',
//   display: 'flex',
//   flexDirection: 'column',
//   transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
//   background: theme.palette.mode === 'dark' 
//     ? 'linear-gradient(145deg, #1a237e 0%, #0d47a1 100%)'
//     : 'linear-gradient(145deg, #bbdefb 0%, #e3f2fd 100%)',
//   '&:hover': {
//     transform: 'translateY(-10px)',
//     boxShadow: theme.palette.mode === 'dark'
//       ? '0 20px 30px rgba(0, 0, 0, 0.3)'
//       : '0 20px 30px rgba(33, 150, 243, 0.3)',
//   }
// }));

// const features = [
//   {
//     icon: <FaCode size={30} />,
//     title: 'Real-time Coding',
//     description: 'Practice coding with our interactive editor supporting multiple programming languages.'
//   },
//   {
//     icon: <FaLightbulb size={30} />,
//     title: 'AI-Powered Feedback',
//     description: 'Get instant, intelligent feedback on your code from our advanced AI system.'
//   },
//   {
//     icon: <FaBrain size={30} />,
//     title: 'Interview Preparation',
//     description: 'Prepare for technical interviews with real-world coding challenges.'
//   },
//   {
//     icon: <FaRocket size={30} />,
//     title: 'Career Growth',
//     description: 'Enhance your coding skills and advance your career in technology.'
//   }
// ];

// const GradientBackground = styled(Box)(({ theme }) => ({
//   minHeight: '100vh',
//   background: theme.palette.mode === 'dark'
//     ? 'linear-gradient(135deg, #1a237e 0%, #0d47a1 50%, #1a237e 100%)'
//     : 'linear-gradient(135deg, #bbdefb 0%, #e3f2fd 50%, #bbdefb 100%)',
//   color: theme.palette.mode === 'dark' ? '#fff' : '#000',
//   transition: 'background 0.3s ease'
// }));

// const AnimatedButton = styled(Button)(({ theme }) => ({
//   background: theme.palette.mode === 'dark'
//     ? 'linear-gradient(45deg, #5c6bc0 30%, #3f51b5 90%)'
//     : 'linear-gradient(45deg, #42a5f5 30%, #2196f3 90%)',
//   color: theme.palette.mode === 'dark' ? '#fff' : '#fff',
//   padding: '12px 30px',
//   '&:hover': {
//     transform: 'scale(1.05)',
//     boxShadow: '0 10px 20px rgba(0,0,0,0.2)'
//   },
//   transition: 'all 0.3s ease'
// }));

// function Landing() {
//   const navigate = useNavigate();
//   const theme = useTheme();
//   const [isDark, setIsDark] = useState(theme.palette.mode === 'dark');

//   const containerVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.6,
//         staggerChildren: 0.2
//       }
//     }
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: {
//       opacity: 1,
//       y: 0
//     }
//   };

//   return (
//     <GradientBackground>
//       <Container maxWidth="lg">
//         <Box sx={{ position: 'absolute', right: 20, top: 20 }}>
//           <IconButton 
//             onClick={() => setIsDark(!isDark)}
//             sx={{ color: isDark ? '#fff' : '#000' }}
//           >
//             {isDark ? <FaSun size={24} /> : <FaMoon size={24} />}
//           </IconButton>
//         </Box>

//         <motion.div
//           initial="hidden"
//           animate="visible"
//           variants={containerVariants}
//         >
//           {/* Hero Section */}
//           <Box sx={{ 
//             textAlign: 'center', 
//             py: 12,
//             background: 'rgba(255,255,255,0.1)',
//             borderRadius: '20px',
//             backdropFilter: 'blur(10px)',
//             mt: 4
//           }}>
//             <Typography variant="h2" component="h1" gutterBottom>
//               <Typewriter
//                 options={{
//                   strings: ['Ace Your Technical Interviews', 'Master Coding Challenges', 'Get AI-Powered Feedback'],
//                   autoStart: true,
//                   loop: true,
//                 }}
//               />
//             </Typography>
//             <Typography variant="h5" sx={{ mb: 4, opacity: 0.9 }}>
//               Practice coding interviews with real-time AI feedback
//             </Typography>
//             <AnimatedButton
//               variant="contained"
//               size="large"
//               onClick={() => navigate('/login')}
//             >
//               Get Started
//             </AnimatedButton>
//           </Box>

//           {/* Features Section */}
//           <Grid container spacing={4} sx={{ mt: 8 }}>
//             {features.map((feature, index) => (
//               <Grid item xs={12} md={6} key={index}>
//                 <motion.div
//                   variants={itemVariants}
//                   whileHover={{ scale: 1.03 }}
//                 >
//                   <StyledCard>
//                     <CardContent sx={{ textAlign: 'center', p: 4 }}>
//                       <Box sx={{ mb: 2, color: theme.palette.primary.main }}>
//                         {feature.icon}
//                       </Box>
//                       <Typography variant="h5" component="h2" gutterBottom>
//                         {feature.title}
//                       </Typography>
//                       <Typography variant="body1" color="text.secondary">
//                         {feature.description}
//                       </Typography>
//                     </CardContent>
//                   </StyledCard>
//                 </motion.div>
//               </Grid>
//             ))}
//           </Grid>

//           {/* Stats Section */}
//           <Box sx={{ 
//             textAlign: 'center', 
//             mt: 12, 
//             p: 4,
//             background: 'rgba(255,255,255,0.1)',
//             borderRadius: '20px',
//             backdropFilter: 'blur(10px)'
//           }}>
//             <Grid container spacing={4}>
//               <Grid item xs={12} md={4}>
//                 <motion.div
//                   whileHover={{ scale: 1.1 }}
//                   transition={{ type: "spring", stiffness: 400, damping: 10 }}
//                 >
//                   <Typography variant="h3" color="primary">500+</Typography>
//                   <Typography variant="h6">Coding Challenges</Typography>
//                 </motion.div>
//               </Grid>
//               <Grid item xs={12} md={4}>
//                 <motion.div
//                   whileHover={{ scale: 1.1 }}
//                   transition={{ type: "spring", stiffness: 400, damping: 10 }}
//                 >
//                   <Typography variant="h3" color="primary">10K+</Typography>
//                   <Typography variant="h6">Active Users</Typography>
//                 </motion.div>
//               </Grid>
//               <Grid item xs={12} md={4}>
//                 <motion.div
//                   whileHover={{ scale: 1.1 }}
//                   transition={{ type: "spring", stiffness: 400, damping: 10 }}
//                 >
//                   <Typography variant="h3" color="primary">98%</Typography>
//                   <Typography variant="h6">Success Rate</Typography>
//                 </motion.div>
//               </Grid>
//             </Grid>
//           </Box>
//         </motion.div>
//       </Container>
//     </GradientBackground>
//   );
// }

// export default Landing;

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Typewriter from 'typewriter-effect';
import { motion } from 'framer-motion';
import { styled } from '@mui/material/styles';
import {
  Box,
  Container,
  Typography,
  Button,
  Card,
  CardContent,
  Grid,
  useTheme,
  IconButton
} from '@mui/material';
import { 
  FaCode, 
  FaLightbulb, 
  FaBrain,
  FaRocket,
  FaMoon,
  FaSun 
} from 'react-icons/fa';

const StyledCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
  background: theme.palette.mode === 'dark' 
    ? 'linear-gradient(145deg, #1a237e 0%, #0d47a1 100%)'
    : 'linear-gradient(145deg, #bbdefb 0%, #e3f2fd 100%)',
  '&:hover': {
    transform: 'translateY(-10px)',
    boxShadow: theme.palette.mode === 'dark'
      ? '0 20px 30px rgba(0, 0, 0, 0.3)'
      : '0 20px 30px rgba(33, 150, 243, 0.3)',
  }
}));

const features = [
  {
    icon: <FaCode size={30} />,
    title: 'Real-time Coding',
    description: 'Practice coding with our interactive editor supporting multiple programming languages.'
  },
  {
    icon: <FaLightbulb size={30} />,
    title: 'AI-Powered Feedback',
    description: 'Get instant, intelligent feedback on your code from our advanced AI system.'
  },
  {
    icon: <FaBrain size={30} />,
    title: 'Interview Preparation',
    description: 'Prepare for technical interviews with real-world coding challenges.'
  },
  {
    icon: <FaRocket size={30} />,
    title: 'Career Growth',
    description: 'Enhance your coding skills and advance your career in technology.'
  }
];

const GradientBackground = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  background: theme.palette.mode === 'dark'
    ? 'linear-gradient(135deg, #1a237e 0%, #0d47a1 50%, #1a237e 100%)'
    : 'linear-gradient(135deg, #bbdefb 0%, #e3f2fd 50%, #bbdefb 100%)',
  color: theme.palette.mode === 'dark' ? '#fff' : '#000',
  transition: 'background 0.3s ease'
}));

const AnimatedButton = styled(Button)(({ theme }) => ({
  background: theme.palette.mode === 'dark'
    ? 'linear-gradient(45deg, #5c6bc0 30%, #3f51b5 90%)'
    : 'linear-gradient(45deg, #42a5f5 30%, #2196f3 90%)',
  color: theme.palette.mode === 'dark' ? '#fff' : '#fff',
  padding: '12px 30px',
  '&:hover': {
    transform: 'scale(1.05)',
    boxShadow: '0 10px 20px rgba(0,0,0,0.2)'
  },
  transition: 'all 0.3s ease'
}));

function Landing() {
  const navigate = useNavigate();
  const theme = useTheme();
  const [isDark, setIsDark] = useState(theme.palette.mode === 'dark');

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0
    }
  };

  return (
    <GradientBackground>
      <Container maxWidth="lg">
        <Box sx={{ position: 'absolute', right: 20, top: 20 }}>
          <IconButton 
            onClick={() => setIsDark(!isDark)}
            sx={{ color: isDark ? '#fff' : '#000' }}
          >
            {isDark ? <FaSun size={24} /> : <FaMoon size={24} />}
          </IconButton>
        </Box>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {/* Hero Section */}
          <Box sx={{ 
            textAlign: 'center', 
            py: 12,
            background: 'rgba(255,255,255,0.1)',
            borderRadius: '20px',
            backdropFilter: 'blur(10px)',
            mt: 4
          }}>
            <Typography variant="h2" component="h1" gutterBottom>
              <Typewriter
                options={{
                  strings: ['Ace Your Technical Interviews', 'Master Coding Challenges', 'Get AI-Powered Feedback'],
                  autoStart: true,
                  loop: true,
                }}
              />
            </Typography>
            <Typography variant="h5" sx={{ mb: 4, opacity: 0.9 }}>
              Practice coding interviews with real-time AI feedback
            </Typography>
            <AnimatedButton
              variant="contained"
              size="large"
              onClick={() => navigate('/login')}
            >
              Get Started
            </AnimatedButton>
          </Box>

          {/* Features Section */}
          <Grid container spacing={4} sx={{ mt: 8 }}>
            {features.map((feature, index) => (
              <Grid item xs={12} md={6} key={index}>
                <motion.div
                  variants={itemVariants}
                  whileHover={{ scale: 1.03 }}
                >
                  <StyledCard>
                    <CardContent sx={{ textAlign: 'center', p: 4 }}>
                      <Box sx={{ mb: 2, color: theme.palette.primary.main }}>
                        {feature.icon}
                      </Box>
                      <Typography variant="h5" component="h2" gutterBottom>
                        {feature.title}
                      </Typography>
                      <Typography variant="body1" color="text.secondary">
                        {feature.description}
                      </Typography>
                    </CardContent>
                  </StyledCard>
                </motion.div>
              </Grid>
            ))}
          </Grid>

          {/* Stats Section */}
          <Box sx={{ 
            textAlign: 'center', 
            mt: 12, 
            p: 4,
            background: 'rgba(255,255,255,0.1)',
            borderRadius: '20px',
            backdropFilter: 'blur(10px)'
          }}>
            <Grid container spacing={4}>
              <Grid item xs={12} md={4}>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Typography variant="h3" color="primary">500+</Typography>
                  <Typography variant="h6">Coding Challenges</Typography>
                </motion.div>
              </Grid>
              <Grid item xs={12} md={4}>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Typography variant="h3" color="primary">10K+</Typography>
                  <Typography variant="h6">Active Users</Typography>
                </motion.div>
              </Grid>
              <Grid item xs={12} md={4}>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Typography variant="h3" color="primary">98%</Typography>
                  <Typography variant="h6">Success Rate</Typography>
                </motion.div>
              </Grid>
            </Grid>
          </Box>
        </motion.div>
      </Container>
    </GradientBackground>
  );
}

export default Landing;