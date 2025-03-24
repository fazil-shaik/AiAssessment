// // /* eslint-disable no-unused-vars */
// // import { useState } from 'react';
// // import { useNavigate } from 'react-router-dom';
// // import {
// //   Container,
// //   Grid,
// //   Card,
// //   CardContent,
// //   CardActions,
// //   Typography,
// //   Button,
// //   Box,
// //   Chip,
// //   IconButton,
// //   TextField,
// //   InputAdornment
// // } from '@mui/material';
// // import { mockJobs } from '../../services/api';
// // import LocationOnIcon from '@mui/icons-material/LocationOn';
// // import WorkIcon from '@mui/icons-material/Work';
// // import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
// // import SearchIcon from '@mui/icons-material/Search';
// // import { motion } from 'framer-motion';

// // function JobList() {
// //   const navigate = useNavigate();
// //   const [searchTerm, setSearchTerm] = useState('');
// //   const [jobs] = useState(mockJobs);

// //   const filteredJobs = jobs.filter(job => 
// //     job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
// //     job.company.toLowerCase().includes(searchTerm.toLowerCase())
// //   );

// //   return (
// //     <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
// //       {/* Search Bar */}
// //       <Box sx={{ mb: 4 }}>
// //         <TextField
// //           fullWidth
// //           variant="outlined"
// //           placeholder="Search by job title or company..."
// //           value={searchTerm}
// //           onChange={(e) => setSearchTerm(e.target.value)}
// //           InputProps={{
// //             startAdornment: (
// //               <InputAdornment position="start">
// //                 <SearchIcon />
// //               </InputAdornment>
// //             ),
// //           }}
// //           sx={{
// //             '& .MuiOutlinedInput-root': {
// //               borderRadius: 2,
// //               backgroundColor: 'background.paper',
// //             }
// //           }}
// //         />
// //       </Box>

// //       <Grid container spacing={3}>
// //         {filteredJobs.map((job) => (
// //           <Grid item xs={12} md={6} key={job._id}>
// //             <motion.div
// //               initial={{ opacity: 0, y: 20 }}
// //               animate={{ opacity: 1, y: 0 }}
// //               transition={{ duration: 0.3 }}
// //             >
// //               <Card 
// //                 sx={{ 
// //                   height: '100%',
// //                   display: 'flex',
// //                   flexDirection: 'column',
// //                   transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
// //                   '&:hover': {
// //                     transform: 'translateY(-5px)',
// //                     boxShadow: 6
// //                   }
// //                 }}
// //               >
// //                 <CardContent sx={{ flexGrow: 1 }}>
// //                   <Typography variant="h5" gutterBottom color="primary" sx={{ fontWeight: 600 }}>
// //                     {job.title}
// //                   </Typography>
                  
// //                   <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
// //                     <WorkIcon sx={{ mr: 1, color: 'text.secondary' }} />
// //                     <Typography variant="subtitle1" color="text.secondary">
// //                       {job.company}
// //                     </Typography>
// //                   </Box>

// //                   <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
// //                     <LocationOnIcon sx={{ mr: 1, color: 'text.secondary' }} />
// //                     <Typography variant="subtitle1" color="text.secondary">
// //                       {job.location}
// //                     </Typography>
// //                   </Box>

// //                   <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
// //                     <MonetizationOnIcon sx={{ mr: 1, color: 'text.secondary' }} />
// //                     <Typography variant="subtitle1" color="text.secondary">
// //                       {job.salary}
// //                     </Typography>
// //                   </Box>

// //                   <Typography variant="body2" paragraph>
// //                     {job.description}
// //                   </Typography>

// //                   <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
// //                     {job.requirements.map((req, index) => (
// //                       <Chip 
// //                         key={index}
// //                         label={req}
// //                         size="small"
// //                         color="primary"
// //                         variant="outlined"
// //                       />
// //                     ))}
// //                   </Box>
// //                 </CardContent>

// //                 <CardActions sx={{ p: 2, pt: 0 }}>
// //                   <Button
// //                     variant="contained"
// //                     fullWidth
// //                     color="primary"
// //                     onClick={() => navigate(`/interview/${job._id}`)}
// //                     sx={{ 
// //                       py: 1,
// //                       textTransform: 'none',
// //                       fontWeight: 600,
// //                       '&:hover': {
// //                         transform: 'scale(1.02)'
// //                       }
// //                     }}
// //                   >
// //                     Start Mock Interview
// //                   </Button>
// //                 </CardActions>
// //               </Card>
// //             </motion.div>
// //           </Grid>
// //         ))}
// //       </Grid>
// //     </Container>
// //   );
// // }

// // export default JobList; 

// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import {
//   Container,
//   Grid,
//   Card,
//   CardContent,
//   CardActions,
//   Typography,
//   Button,
//   Box,
//   Chip
// } from '@mui/material';
// import { mockJobs } from '../../services/api';
// import LocationOnIcon from '@mui/icons-material/LocationOn';
// import WorkIcon from '@mui/icons-material/Work';
// import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';

// function JobList() {
//   const navigate = useNavigate();
//   const [jobs] = useState(mockJobs);

//   return (
//     <Container maxWidth="lg" sx={{ mt: 4 }}>
//       <Typography variant="h4" gutterBottom sx={{ mb: 4 }}>
//         Mock Interview Opportunities
//       </Typography>
//       <Grid container spacing={3}>
//         {jobs.map((job) => (
//           <Grid item xs={12} md={6} key={job._id}>
//             <Card sx={{ 
//               height: '100%', 
//               display: 'flex', 
//               flexDirection: 'column',
//               '&:hover': {
//                 boxShadow: 6
//               }
//             }}>
//               <CardContent sx={{ flexGrow: 1 }}>
//                 <Typography variant="h5" gutterBottom color="primary">
//                   {job.title}
//                 </Typography>
                
//                 <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
//                   <WorkIcon sx={{ mr: 1, color: 'text.secondary' }} />
//                   <Typography color="text.secondary">
//                     {job.company}
//                   </Typography>
//                 </Box>

//                 <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
//                   <LocationOnIcon sx={{ mr: 1, color: 'text.secondary' }} />
//                   <Typography color="text.secondary">
//                     {job.location}
//                   </Typography>
//                 </Box>

//                 <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
//                   <MonetizationOnIcon sx={{ mr: 1, color: 'text.secondary' }} />
//                   <Typography color="text.secondary">
//                     {job.salary}
//                   </Typography>
//                 </Box>

//                 <Chip 
//                   label="Take Mock Interview" 
//                   color="primary" 
//                   variant="outlined"
//                   size="small"
//                 />
//               </CardContent>
//               <CardActions sx={{ p: 2 }}>
//                 <Button
//                   variant="contained"
//                   color="primary"
//                   fullWidth
//                   onClick={() => navigate(`/interview/${job._id}`)}
//                   sx={{ 
//                     textTransform: 'none',
//                     '&:hover': {
//                       transform: 'translateY(-2px)',
//                       transition: 'transform 0.2s'
//                     }
//                   }}
//                 >
//                   Start Interview
//                 </Button>
//               </CardActions>
//             </Card>
//           </Grid>
//         ))}
//       </Grid>
//     </Container>
//   );
// }

// export default JobList;


// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import {
//   Container,
//   Grid,
//   Card,
//   CardContent,
//   CardActions,
//   Typography,
//   Button,
//   Box,
//   Chip,
//   TextField,
//   InputAdornment
// } from '@mui/material';
// import { mockJobs } from '../../services/api';
// import LocationOnIcon from '@mui/icons-material/LocationOn';
// import WorkIcon from '@mui/icons-material/Work';
// import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
// import SearchIcon from '@mui/icons-material/Search';
// import { motion } from 'framer-motion';

// function JobList() {
//   const navigate = useNavigate();
//   const [searchTerm, setSearchTerm] = useState('');
//   const [jobs] = useState(mockJobs);

//   const filteredJobs = jobs.filter(job => 
//     job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     job.company.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
//       {/* Search Bar */}
//       <Box sx={{ mb: 4 }}>
//         <TextField
//           fullWidth
//           variant="outlined"
//           placeholder="Search by job title or company..."
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//           InputProps={{
//             startAdornment: (
//               <InputAdornment position="start">
//                 <SearchIcon />
//               </InputAdornment>
//             ),
//           }}
//           sx={{
//             '& .MuiOutlinedInput-root': {
//               borderRadius: 2,
//               backgroundColor: 'background.paper',
//             }
//           }}
//         />
//       </Box>

//       <Grid container spacing={3}>
//         {filteredJobs.map((job) => (
//           <Grid item xs={12} md={6} key={job._id}>
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.3 }}
//             >
//               <Card 
//                 sx={{ 
//                   height: '100%',
//                   display: 'flex',
//                   flexDirection: 'column',
//                   transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
//                   '&:hover': {
//                     transform: 'translateY(-5px)',
//                     boxShadow: 6
//                   }
//                 }}
//               >
//                 <CardContent sx={{ flexGrow: 1 }}>
//                   <Typography variant="h5" gutterBottom color="primary" sx={{ fontWeight: 600 }}>
//                     {job.title}
//                   </Typography>
                  
//                   <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
//                     <WorkIcon sx={{ mr: 1, color: 'text.secondary' }} />
//                     <Typography variant="subtitle1" color="text.secondary">
//                       {job.company}
//                     </Typography>
//                   </Box>

//                   <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
//                     <LocationOnIcon sx={{ mr: 1, color: 'text.secondary' }} />
//                     <Typography variant="subtitle1" color="text.secondary">
//                       {job.location}
//                     </Typography>
//                   </Box>

//                   <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
//                     <MonetizationOnIcon sx={{ mr: 1, color: 'text.secondary' }} />
//                     <Typography variant="subtitle1" color="text.secondary">
//                       {job.salary}
//                     </Typography>
//                   </Box>

//                   <Typography variant="body2" paragraph>
//                     {job.description}
//                   </Typography>

//                   <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
//                     {job.requirements.map((req, index) => (
//                       <Chip 
//                         key={index}
//                         label={req}
//                         size="small"
//                         color="primary"
//                         variant="outlined"
//                       />
//                     ))}
//                   </Box>
//                 </CardContent>

//                 <CardActions sx={{ p: 2, pt: 0 }}>
//                   <Button
//                     variant="contained"
//                     fullWidth
//                     color="primary"
//                     onClick={() => navigate(`/interview/${job._id}`)}
//                     sx={{ 
//                       py: 1,
//                       textTransform: 'none',
//                       fontWeight: 600,
//                       '&:hover': {
//                         transform: 'scale(1.02)'
//                       }
//                     }}
//                   >
//                     Start Mock Interview
//                   </Button>
//                 </CardActions>
//               </Card>
//             </motion.div>
//           </Grid>
//         ))}
//       </Grid>
//     </Container>
//   );
// }

// export default JobList;

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  Grid,
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
  Box,
  Chip
} from '@mui/material';
import { mockJobs } from '../../services/api';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import WorkIcon from '@mui/icons-material/Work';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';

function JobList() {
  const navigate = useNavigate();
  const [jobs] = useState(mockJobs);

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom sx={{ mb: 4 }}>
        Mock Interview Opportunities
      </Typography>
      <Grid container spacing={3}>
        {jobs.map((job) => (
          <Grid item xs={12} md={6} key={job._id}>
            <Card sx={{ 
              height: '100%', 
              display: 'flex', 
              flexDirection: 'column',
              '&:hover': {
                boxShadow: 6
              }
            }}>
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h5" gutterBottom color="primary">
                  {job.title}
                </Typography>
                
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                  <WorkIcon sx={{ mr: 1, color: 'text.secondary' }} />
                  <Typography color="text.secondary">
                    {job.company}
                  </Typography>
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                  <LocationOnIcon sx={{ mr: 1, color: 'text.secondary' }} />
                  <Typography color="text.secondary">
                    {job.location}
                  </Typography>
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <MonetizationOnIcon sx={{ mr: 1, color: 'text.secondary' }} />
                  <Typography color="text.secondary">
                    {job.salary}
                  </Typography>
                </Box>

                <Chip 
                  label="Take Mock Interview" 
                  color="primary" 
                  variant="outlined"
                  size="small"
                />
              </CardContent>
              <CardActions sx={{ p: 2 }}>
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  onClick={() => navigate(`/interview/${job._id}`)}
                  sx={{ 
                    textTransform: 'none',
                    '&:hover': {
                      transform: 'translateY(-2px)',
                      transition: 'transform 0.2s'
                    }
                  }}
                >
                  Start Interview
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default JobList;