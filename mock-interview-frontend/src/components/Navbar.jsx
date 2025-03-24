// import { AppBar, Toolbar, Typography, Button, Box, Container } from '@mui/material';
// import { useNavigate } from 'react-router-dom';
// import { useAuth } from '../contexts/AuthContext';

// const Navbar = () => {
//   const navigate = useNavigate();
//   const { user, logout } = useAuth();

//   const handleLogout = () => {
//     logout();
//     navigate('/login');
//   };

//   return (
//     <AppBar position="static" color="primary">
//       <Container maxWidth="xl">
//         <Toolbar disableGutters>
//           <Typography
//             variant="h6"
//             component="div"
//             sx={{ 
//               flexGrow: 1, 
//               cursor: 'pointer',
//               fontWeight: 700
//             }}
//             onClick={() => navigate('/')}
//           >
//             Mock Interview Platform
//           </Typography>

//           <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
//             {user ? (
//               <>
//                 <Typography variant="body1" sx={{ mr: 2 }}>
//                   Welcome, {user.name}
//                 </Typography>
//                 <Button 
//                   color="inherit" 
//                   onClick={handleLogout}
//                   variant="outlined"
//                   sx={{ 
//                     borderColor: 'white',
//                     '&:hover': {
//                       borderColor: 'white',
//                       backgroundColor: 'rgba(255, 255, 255, 0.1)'
//                     }
//                   }}
//                 >
//                   Logout
//                 </Button>
//               </>
//             ) : (
//               <>
//                 <Button 
//                   color="inherit"
//                   onClick={() => navigate('/login')}
//                 >
//                   Login
//                 </Button>
//                 <Button 
//                   color="inherit"
//                   variant="outlined"
//                   onClick={() => navigate('/register')}
//                   sx={{ 
//                     borderColor: 'white',
//                     '&:hover': {
//                       borderColor: 'white',
//                       backgroundColor: 'rgba(255, 255, 255, 0.1)'
//                     }
//                   }}
//                 >
//                   Register
//                 </Button>
//               </>
//             )}
//           </Box>
//         </Toolbar>
//       </Container>
//     </AppBar>
//   );
// };

// export default Navbar; 

import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

function Navbar() {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography 
          variant="h6" 
          component="div" 
          sx={{ 
            flexGrow: 1, 
            cursor: 'pointer' 
          }}
          onClick={() => navigate('/jobs')}
        >
          Mock Interview Platform
        </Typography>
        
        <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
          {user && (
            <>
              <Typography variant="body1">
                Welcome, {user.name}
              </Typography>
              <Button color="inherit" onClick={handleLogout}>
                Logout
              </Button>
            </>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar; 