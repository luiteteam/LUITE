import React, { useState } from 'react';
import { Box, Typography, Grid, Card, CardContent, CardMedia, Chip, Container, Button, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import { Web, PhoneAndroid, Brush, Business } from '@mui/icons-material';

const projects = [
  {
    id: 1,
    title: 'E-commerce Platform',
    description: 'A modern e-commerce platform built with React and Node.js, featuring advanced product management, secure payment processing, and comprehensive analytics.',
    image: 'https://via.placeholder.com/400x300/589bfb/ffffff?text=E-commerce+Platform',
    category: 'Web Development',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    client: 'Fashion Retailer',
    duration: '3 months',
    features: [
      'Product catalog with advanced filtering',
      'Shopping cart and checkout system',
      'Payment gateway integration',
      'Admin dashboard for inventory management',
      'Customer account management',
      'Analytics and reporting'
    ]
  },
  {
    id: 2,
    title: 'Mobile Banking App',
    description: 'A secure mobile banking application for iOS and Android, providing users with comprehensive financial management tools and real-time transaction monitoring.',
    image: 'https://via.placeholder.com/400x300/282828/ffffff?text=Mobile+Banking+App',
    category: 'Mobile Development',
    technologies: ['React Native', 'Firebase', 'Node.js', 'AWS'],
    client: 'Regional Bank',
    duration: '6 months',
    features: [
      'Secure authentication and biometric login',
      'Account balance and transaction history',
      'Bill payments and transfers',
      'Investment portfolio tracking',
      'Push notifications for transactions',
      'Offline functionality'
    ]
  },
  {
    id: 3,
    title: 'Corporate Website Redesign',
    description: 'Complete redesign of a Fortune 500 company website, focusing on modern design, improved user experience, and better conversion rates.',
    image: 'https://via.placeholder.com/400x300/eef3f9/282828?text=Corporate+Website',
    category: 'Web Design',
    technologies: ['React', 'Next.js', 'Tailwind CSS', 'Contentful'],
    client: 'Fortune 500 Company',
    duration: '2 months',
    features: [
      'Responsive design for all devices',
      'Content management system',
      'SEO optimization',
      'Performance optimization',
      'Analytics integration',
      'A/B testing capabilities'
    ]
  },
  {
    id: 4,
    title: 'Restaurant Management System',
    description: 'Comprehensive restaurant management solution including order processing, inventory management, and customer relationship management.',
    image: 'https://via.placeholder.com/400x300/589bfb/ffffff?text=Restaurant+System',
    category: 'Custom Software',
    technologies: ['Vue.js', 'Laravel', 'MySQL', 'Redis'],
    client: 'Restaurant Chain',
    duration: '4 months',
    features: [
      'Order management and tracking',
      'Inventory and supplier management',
      'Customer loyalty program',
      'Staff scheduling and payroll',
      'Real-time analytics dashboard',
      'Mobile app for staff'
    ]
  },
  {
    id: 5,
    title: 'Educational Platform',
    description: 'Online learning platform with video streaming, interactive quizzes, and progress tracking for educational institutions.',
    image: 'https://via.placeholder.com/400x300/282828/ffffff?text=Educational+Platform',
    category: 'Web Development',
    technologies: ['Angular', 'Django', 'PostgreSQL', 'AWS'],
    client: 'University',
    duration: '5 months',
    features: [
      'Video streaming and content management',
      'Interactive quizzes and assessments',
      'Progress tracking and analytics',
      'Discussion forums and messaging',
      'Mobile-responsive design',
      'Integration with LMS systems'
    ]
  },
  {
    id: 6,
    title: 'Healthcare Management App',
    description: 'Mobile application for healthcare providers to manage patient records, appointments, and medical workflows.',
    image: 'https://via.placeholder.com/400x300/eef3f9/282828?text=Healthcare+App',
    category: 'Mobile Development',
    technologies: ['Flutter', 'Firebase', 'Node.js', 'HIPAA Compliant'],
    client: 'Healthcare Network',
    duration: '7 months',
    features: [
      'Patient record management',
      'Appointment scheduling',
      'Prescription management',
      'Secure messaging system',
      'Medical imaging integration',
      'Compliance with healthcare regulations'
    ]
  }
];

const categories = ['All', 'Web Development', 'Mobile Development', 'Web Design', 'Custom Software'];

function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setSelectedProject(null);
  };

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Web Development':
        return <Web />;
      case 'Mobile Development':
        return <PhoneAndroid />;
      case 'Web Design':
        return <Brush />;
      case 'Custom Software':
        return <Business />;
      default:
        return <Web />;
    }
  };

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, #589bfb 0%, #7bb3fc 100%)',
          color: 'white',
          py: 8,
          textAlign: 'center',
          borderRadius: 2,
          mb: 6
        }}
      >
        <Container maxWidth="md">
          <Typography variant="h1" gutterBottom>
            Our Portfolio
          </Typography>
          <Typography variant="h5" sx={{ opacity: 0.9 }}>
            Showcasing our best work and successful projects
          </Typography>
        </Container>
      </Box>

      {/* Filter Buttons */}
      <Box sx={{ mb: 4, textAlign: 'center' }}>
        <Typography variant="h6" gutterBottom>
          Filter by Category
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 1 }}>
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? 'contained' : 'outlined'}
              onClick={() => setSelectedCategory(category)}
              sx={{ mb: 1 }}
            >
              {category}
            </Button>
          ))}
        </Box>
      </Box>

      {/* Projects Grid */}
      <Box sx={{ mb: 6 }}>
        <Grid container spacing={3}>
          {filteredProjects.map((project) => (
            <Grid item xs={12} md={6} lg={4} key={project.id}>
              <Card 
                sx={{ 
                  height: '100%', 
                  cursor: 'pointer',
                  transition: 'transform 0.2s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-4px)'
                  }
                }}
                onClick={() => handleProjectClick(project)}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image={project.image}
                  alt={project.title}
                />
                <CardContent>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                    {getCategoryIcon(project.category)}
                    <Chip 
                      label={project.category} 
                      size="small" 
                      color="primary" 
                      variant="outlined"
                      sx={{ ml: 1 }}
                    />
                  </Box>
                  <Typography variant="h6" gutterBottom>
                    {project.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                    {project.description.substring(0, 100)}...
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                    {project.technologies.slice(0, 3).map((tech, index) => (
                      <Chip 
                        key={index} 
                        label={tech} 
                        size="small" 
                        variant="outlined"
                      />
                    ))}
                    {project.technologies.length > 3 && (
                      <Chip 
                        label={`+${project.technologies.length - 3} more`} 
                        size="small" 
                        variant="outlined"
                      />
                    )}
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Project Details Dialog */}
      <Dialog 
        open={openDialog} 
        onClose={handleCloseDialog}
        maxWidth="md"
        fullWidth
      >
        {selectedProject && (
          <>
            <DialogTitle>
              <Typography variant="h5" gutterBottom>
                {selectedProject.title}
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Chip label={selectedProject.category} color="primary" />
                <Typography variant="body2" color="text.secondary">
                  Client: {selectedProject.client}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Duration: {selectedProject.duration}
                </Typography>
              </Box>
            </DialogTitle>
            <DialogContent>
              <Box sx={{ mb: 3 }}>
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title}
                  style={{ width: '100%', borderRadius: 8 }}
                />
              </Box>
              <Typography variant="body1" paragraph>
                {selectedProject.description}
              </Typography>
              
              <Typography variant="h6" gutterBottom>
                Technologies Used
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 3 }}>
                {selectedProject.technologies.map((tech, index) => (
                  <Chip key={index} label={tech} color="primary" variant="outlined" />
                ))}
              </Box>

              <Typography variant="h6" gutterBottom>
                Key Features
              </Typography>
              <Box component="ul" sx={{ pl: 2 }}>
                {selectedProject.features.map((feature, index) => (
                  <Typography component="li" key={index} variant="body2" sx={{ mb: 0.5 }}>
                    {feature}
                  </Typography>
                ))}
              </Box>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleCloseDialog}>Close</Button>
              <Button variant="contained" onClick={handleCloseDialog}>
                View Live Demo
              </Button>
            </DialogActions>
          </>
        )}
      </Dialog>

      {/* CTA Section */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, #282828 0%, #424242 100%)',
          color: 'white',
          py: 6,
          textAlign: 'center',
          borderRadius: 2
        }}
      >
        <Typography variant="h3" gutterBottom>
          Ready to Start Your Project?
        </Typography>
        <Typography variant="h6" sx={{ mb: 4, opacity: 0.9 }}>
          Let's create something amazing together
        </Typography>
        <Button
          variant="contained"
          size="large"
          sx={{
            bgcolor: 'primary.main',
            px: 4,
            py: 1.5,
            fontSize: '1.1rem'
          }}
        >
          Get Started
        </Button>
      </Box>
    </Box>
  );
}

export default Portfolio;
