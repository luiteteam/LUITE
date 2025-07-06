import React from 'react';
import { Box, Typography, Button, Grid, Card, CardContent, CardMedia, Container } from '@mui/material';
import { Code, Web, PhoneAndroid, Brush, Business, Speed } from '@mui/icons-material';

const services = [
  {
    icon: <Web sx={{ fontSize: 40, color: 'primary.main' }} />,
    title: 'Web Development',
    description: 'Custom websites and web applications built with modern technologies.'
  },
  {
    icon: <PhoneAndroid sx={{ fontSize: 40, color: 'primary.main' }} />,
    title: 'Mobile Apps',
    description: 'Native and cross-platform mobile applications for iOS and Android.'
  },
  {
    icon: <Brush sx={{ fontSize: 40, color: 'primary.main' }} />,
    title: 'UI/UX Design',
    description: 'Beautiful and intuitive user interfaces that enhance user experience.'
  },
  {
    icon: <Business sx={{ fontSize: 40, color: 'primary.main' }} />,
    title: 'E-commerce',
    description: 'Complete online store solutions with payment integration.'
  },
  {
    icon: <Speed sx={{ fontSize: 40, color: 'primary.main' }} />,
    title: 'Performance',
    description: 'Optimized applications for speed and scalability.'
  },
  {
    icon: <Code sx={{ fontSize: 40, color: 'primary.main' }} />,
    title: 'Custom Solutions',
    description: 'Tailored software solutions for your specific business needs.'
  }
];

const projects = [
  {
    title: 'E-commerce Platform',
    description: 'Modern online store with payment integration',
    image: 'https://via.placeholder.com/300x200/589bfb/ffffff?text=E-commerce',
    category: 'Web Development'
  },
  {
    title: 'Mobile Banking App',
    description: 'Secure banking application for iOS and Android',
    image: 'https://via.placeholder.com/300x200/282828/ffffff?text=Banking+App',
    category: 'Mobile Development'
  },
  {
    title: 'Corporate Website',
    description: 'Professional website for a Fortune 500 company',
    image: 'https://via.placeholder.com/300x200/eef3f9/282828?text=Corporate+Site',
    category: 'Web Design'
  }
];

function Home() {
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
            We Build Digital Experiences
          </Typography>
          <Typography variant="h5" sx={{ mb: 4, opacity: 0.9 }}>
            Transform your business with cutting-edge web and mobile solutions
          </Typography>
          <Button
            variant="contained"
            size="large"
            sx={{
              bgcolor: 'white',
              color: 'primary.main',
              px: 4,
              py: 1.5,
              fontSize: '1.1rem',
              '&:hover': {
                bgcolor: 'grey.100'
              }
            }}
          >
            Get Started
          </Button>
        </Container>
      </Box>

      {/* Services Section */}
      <Box sx={{ mb: 6 }}>
        <Typography variant="h2" textAlign="center" gutterBottom>
          Our Services
        </Typography>
        <Typography variant="h6" textAlign="center" color="text.secondary" sx={{ mb: 4 }}>
          We offer comprehensive digital solutions to help your business grow
        </Typography>
        <Grid container spacing={3}>
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card sx={{ height: '100%', textAlign: 'center' }}>
                <CardContent sx={{ py: 3 }}>
                  <Box sx={{ mb: 2 }}>
                    {service.icon}
                  </Box>
                  <Typography variant="h6" gutterBottom>
                    {service.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {service.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Portfolio Section */}
      <Box sx={{ mb: 6 }}>
        <Typography variant="h2" textAlign="center" gutterBottom>
          Recent Projects
        </Typography>
        <Typography variant="h6" textAlign="center" color="text.secondary" sx={{ mb: 4 }}>
          Check out some of our latest work
        </Typography>
        <Grid container spacing={3}>
          {projects.map((project, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card>
                <CardMedia
                  component="img"
                  height="200"
                  image={project.image}
                  alt={project.title}
                />
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    {project.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                    {project.description}
                  </Typography>
                  <Typography variant="caption" color="primary.main">
                    {project.category}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* About Section */}
      <Box sx={{ mb: 6 }}>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography variant="h2" gutterBottom>
              About Our Agency
            </Typography>
            <Typography variant="body1" paragraph>
              We are a team of passionate developers, designers, and digital strategists 
              dedicated to creating exceptional digital experiences that drive business growth.
            </Typography>
            <Typography variant="body1" paragraph>
              With years of experience in web development, mobile apps, and digital marketing, 
              we help businesses of all sizes establish a strong online presence and achieve 
              their digital goals.
            </Typography>
            <Button variant="contained" size="large">
              Learn More
            </Button>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                height: 400,
                background: 'linear-gradient(45deg, #eef3f9 30%, #589bfb 90%)',
                borderRadius: 2,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <Typography variant="h4" color="white" textAlign="center">
                Your Vision,<br />Our Expertise
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>

      {/* Contact CTA Section */}
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
          Let's discuss how we can help bring your ideas to life
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
          Contact Us
        </Button>
      </Box>
    </Box>
  );
}

export default Home;
