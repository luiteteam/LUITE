import React from 'react';
import { Box, Typography, Button, Container, Grid, Card, CardContent, CardMedia, Avatar } from '@mui/material';

// Sample data (from other pages)
const services = [
  {
    icon: '🌐',
    title: 'Web Development',
    description: 'Custom websites and web applications built with modern technologies.'
  },
  {
    icon: '📱',
    title: 'Mobile Apps',
    description: 'Native and cross-platform mobile applications for iOS and Android.'
  },
  {
    icon: '🎨',
    title: 'UI/UX Design',
    description: 'Beautiful and intuitive user interfaces that enhance user experience.'
  }
];

const projects = [
  {
    title: 'E-commerce Platform',
    description: 'A modern e-commerce platform built with React and Node.js.',
    image: 'https://via.placeholder.com/400x300/589bfb/ffffff?text=E-commerce+Platform'
  },
  {
    title: 'Mobile Banking App',
    description: 'A secure mobile banking application for iOS and Android.',
    image: 'https://via.placeholder.com/400x300/282828/ffffff?text=Mobile+Banking+App'
  },
  {
    title: 'Corporate Website Redesign',
    description: 'Complete redesign of a Fortune 500 company website.',
    image: 'https://via.placeholder.com/400x300/eef3f9/282828?text=Corporate+Website'
  }
];

const teamMembers = [
  {
    name: 'Mahil Sonowal',
    role: 'Executive Director',
    img: '/mahil.jpg',
  },
  {
    name: 'Viraj Sonowal',
    role: 'Full Stack Developer',
    img: '/viraj.jpg',
  },
  {
    name: 'Siddhartha Sonowal',
    role: 'Frontend Developer',
    img: '/siddhartha.jpg',
  }
];

function Home() {
  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          position: 'relative',
          backgroundImage: 'url(/hero1.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          color: 'white',
          py: { xs: 8, md: 35 },
          textAlign: 'center',
          mb: 8,
          height: { xs: '100vh', md: '100vh' },
          minHeight: { xs: '70vh', md: '100vh' },
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {/* Overlay */}
        <Box sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 1,
        }} />
        {/* Content */}
        <Box sx={{
          position: 'relative',
          zIndex: 2,
          width: '100%',
          maxWidth: { xs: '95vw', sm: 500, md: 700 },
          mx: 'auto',
          textAlign: { xs: 'left', md: 'left' },
          px: { xs: 2, sm: 3, md: 0 },
        }}>
          <Typography variant="subtitle1" sx={{ color: 'green', fontWeight: 700, mb: 2, letterSpacing: 1, fontSize: { xs: '0.75rem', sm: '1.1rem' } }}>
            EMPOWERING DIGITAL INNOVATION
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 700,
              mb: 2,
              color: 'black',
              fontSize: { xs: '2rem', sm: '2.5rem', md: '3.5rem' },
              lineHeight: 1.1,
            }}
          >
            Your vision.<br />Our expertise.<br />Let's build the future together.
          </Typography>
          <Typography
            variant="body1"
            sx={{
              mb: 4,
              color: 'black',
              fontSize: { xs: '1rem', sm: '1.1rem', md: '1.25rem' },
              maxWidth: { xs: '100%', sm: 500 },
              mx: { xs: 'auto', md: 0 },
            }}
          >
            At LUITE, we make digital transformation simple. Our team helps you turn ideas into reality with custom software, web, and mobile solutions tailored to your goals.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            size="large"
            href="/contact"
            sx={{
              fontWeight: 600,
              px: { xs: 0, sm: 5 },
              py: 1.5,
              width: { xs: '100%', sm: 'auto' },
              fontSize: { xs: '1rem', sm: '1.1rem' },
              mt: { xs: 2, sm: 0 },
            }}
          >
            Let's Get Started
          </Button>
        </Box>
      </Box>

      {/* About/Overview Section */}
      <Container sx={{ mb: 8 }}>
        <Typography variant="h3" sx={{ fontWeight: 600, mb: 2 }}>
          About Us
        </Typography>
        <Typography variant="body1" sx={{ mb: 2, maxWidth: 800 }}>
          At LUITE, we believe in the transformative power of software to redefine what's possible for businesses and communities. We design, develop, and deliver custom software, web, and mobile applications for ambitious organizations.
        </Typography>
      </Container>

      {/* Services Preview Section */}
      <Box sx={{ bgcolor: 'background.paper', py: 8, mb: 8 }}>
        <Container>
          <Typography variant="h3" sx={{ fontWeight: 600, mb: 4 }} align="center">
            Our Services
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            {services.map((service, idx) => (
              <Grid item xs={12} sm={6} md={4} key={idx}>
                <Card sx={{ height: '100%', textAlign: 'center', boxShadow: 2 }}>
                  <CardContent>
                    <Typography variant="h2" sx={{ mb: 1 }}>
                      {service.icon}
                    </Typography>
                    <Typography variant="h5" sx={{ fontWeight: 700, mb: 1 }}>
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
        </Container>
      </Box>

      {/* Portfolio Preview Section */}
      <Container sx={{ mb: 8 }}>
        <Typography variant="h3" sx={{ fontWeight: 600, mb: 4 }} align="center">
          Featured Projects
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {projects.map((project, idx) => (
            <Grid item xs={12} sm={6} md={4} key={idx}>
              <Card sx={{ height: '100%' }}>
                <CardMedia
                  component="img"
                  height="180"
                  image={project.image}
                  alt={project.title}
                />
                <CardContent>
                  <Typography variant="h6" sx={{ fontWeight: 700 }}>
                    {project.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {project.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Team Preview Section */}
      <Box sx={{ bgcolor: 'background.paper', py: 8, mb: 8 }}>
        <Container>
          <Typography variant="h3" sx={{ fontWeight: 600, mb: 4 }} align="center">
            Meet the Team
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            {teamMembers.map((member, idx) => (
              <Grid item xs={12} sm={6} md={4} key={idx}>
                <Box sx={{ textAlign: 'center' }}>
                  <Avatar
                    src={member.img}
                    alt={member.name}
                    sx={{ width: 120, height: 120, mx: 'auto', mb: 2, border: '6px solid #f3f3f3' }}
                  />
                  <Typography variant="h6" sx={{ fontWeight: 700, mb: 0.5 }}>
                    {member.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {member.role}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Contact Call-to-Action Section */}
      <Box sx={{ bgcolor: 'grey.900', color: 'white', py: 6, textAlign: 'center', borderRadius: 2, mb: 8 }}>
        <Container>
          <Typography variant="h5" sx={{ fontWeight: 700, mb: 1 }}>
            Ready to start your project?
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            Let's build something amazing together. Contact us today!
          </Typography>
          <Button
            variant="contained"
            color="primary"
            size="large"
            href="/contact"
            sx={{ fontWeight: 600, px: 5, py: 1.5 }}
          >
            Get in Touch
          </Button>
        </Container>
      </Box>
    </Box>
  );
}

export default Home;
