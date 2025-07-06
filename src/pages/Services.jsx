import React from 'react';
import { Box, Typography, Grid, Card, CardContent, List, ListItem, ListItemIcon, ListItemText, Container, Chip } from '@mui/material';
import { Check, Web, PhoneAndroid, Brush, Business, Speed, Code, Support } from '@mui/icons-material';

const services = [
  {
    icon: <Web sx={{ fontSize: 40, color: 'primary.main' }} />,
    title: 'Web Development',
    description: 'Custom websites and web applications built with modern technologies.',
    features: [
      'Responsive design for all devices',
      'SEO optimization',
      'Content management systems',
      'E-commerce integration',
      'Performance optimization',
      'Security implementation'
    ],
    price: 'Starting from $3,000'
  },
  {
    icon: <PhoneAndroid sx={{ fontSize: 40, color: 'primary.main' }} />,
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile applications for iOS and Android.',
    features: [
      'iOS and Android development',
      'Cross-platform solutions',
      'App store optimization',
      'Push notifications',
      'Offline functionality',
      'Performance monitoring'
    ],
    price: 'Starting from $5,000'
  },
  {
    icon: <Brush sx={{ fontSize: 40, color: 'primary.main' }} />,
    title: 'UI/UX Design',
    description: 'Beautiful and intuitive user interfaces that enhance user experience.',
    features: [
      'User research and analysis',
      'Wireframing and prototyping',
      'Visual design and branding',
      'User testing and feedback',
      'Design systems',
      'Accessibility compliance'
    ],
    price: 'Starting from $2,500'
  },
  {
    icon: <Business sx={{ fontSize: 40, color: 'primary.main' }} />,
    title: 'E-commerce Solutions',
    description: 'Complete online store solutions with payment integration.',
    features: [
      'Shopping cart functionality',
      'Payment gateway integration',
      'Inventory management',
      'Order processing',
      'Customer accounts',
      'Analytics and reporting'
    ],
    price: 'Starting from $4,000'
  },
  {
    icon: <Speed sx={{ fontSize: 40, color: 'primary.main' }} />,
    title: 'Performance Optimization',
    description: 'Optimized applications for speed and scalability.',
    features: [
      'Code optimization',
      'Database optimization',
      'CDN implementation',
      'Caching strategies',
      'Load testing',
      'Monitoring setup'
    ],
    price: 'Starting from $1,500'
  },
  {
    icon: <Code sx={{ fontSize: 40, color: 'primary.main' }} />,
    title: 'Custom Software',
    description: 'Tailored software solutions for your specific business needs.',
    features: [
      'Requirements analysis',
      'Custom development',
      'API integration',
      'Third-party integrations',
      'Testing and quality assurance',
      'Documentation and training'
    ],
    price: 'Starting from $8,000'
  }
];

const process = [
  {
    step: '01',
    title: 'Discovery',
    description: 'We start by understanding your business goals, target audience, and project requirements.'
  },
  {
    step: '02',
    title: 'Planning',
    description: 'We create a detailed project plan, timeline, and technical specifications.'
  },
  {
    step: '03',
    title: 'Design',
    description: 'Our designers create wireframes, mockups, and prototypes for your approval.'
  },
  {
    step: '04',
    title: 'Development',
    description: 'Our developers build your project using the latest technologies and best practices.'
  },
  {
    step: '05',
    title: 'Testing',
    description: 'We thoroughly test your project to ensure it meets all requirements and standards.'
  },
  {
    step: '06',
    title: 'Launch',
    description: 'We deploy your project and provide ongoing support and maintenance.'
  }
];

function Services() {
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
            Our Services
          </Typography>
          <Typography variant="h5" sx={{ opacity: 0.9 }}>
            Comprehensive digital solutions to help your business grow
          </Typography>
        </Container>
      </Box>

      {/* Services Grid */}
      <Box sx={{ mb: 6 }}>
        <Typography variant="h2" textAlign="center" gutterBottom>
          What We Offer
        </Typography>
        <Typography variant="h6" textAlign="center" color="text.secondary" sx={{ mb: 4 }}>
          From concept to launch, we handle every aspect of your digital project
        </Typography>
        <Grid container spacing={3}>
          {services.map((service, index) => (
            <Grid item xs={12} md={6} lg={4} key={index}>
              <Card sx={{ height: '100%' }}>
                <CardContent sx={{ py: 3 }}>
                  <Box sx={{ textAlign: 'center', mb: 2 }}>
                    {service.icon}
                  </Box>
                  <Typography variant="h5" gutterBottom textAlign="center">
                    {service.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }} textAlign="center">
                    {service.description}
                  </Typography>
                  <Chip 
                    label={service.price} 
                    color="primary" 
                    variant="outlined" 
                    sx={{ mb: 2, width: '100%' }}
                  />
                  <List dense>
                    {service.features.map((feature, featureIndex) => (
                      <ListItem key={featureIndex} sx={{ py: 0.5 }}>
                        <ListItemIcon sx={{ minWidth: 30 }}>
                          <Check sx={{ color: 'primary.main', fontSize: 20 }} />
                        </ListItemIcon>
                        <ListItemText 
                          primary={feature} 
                          primaryTypographyProps={{ variant: 'body2' }}
                        />
                      </ListItem>
                    ))}
                  </List>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Process Section */}
      <Box sx={{ mb: 6 }}>
        <Typography variant="h2" textAlign="center" gutterBottom>
          Our Process
        </Typography>
        <Typography variant="h6" textAlign="center" color="text.secondary" sx={{ mb: 4 }}>
          A proven methodology that ensures successful project delivery
        </Typography>
        <Grid container spacing={3}>
          {process.map((step, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card sx={{ height: '100%', textAlign: 'center' }}>
                <CardContent sx={{ py: 3 }}>
                  <Box
                    sx={{
                      width: 60,
                      height: 60,
                      borderRadius: '50%',
                      bgcolor: 'primary.main',
                      color: 'white',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mx: 'auto',
                      mb: 2,
                      fontSize: '1.5rem',
                      fontWeight: 'bold'
                    }}
                  >
                    {step.step}
                  </Box>
                  <Typography variant="h6" gutterBottom>
                    {step.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {step.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Support Section */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, #282828 0%, #424242 100%)',
          color: 'white',
          py: 6,
          borderRadius: 2
        }}
      >
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography variant="h3" gutterBottom>
              Ongoing Support
            </Typography>
            <Typography variant="h6" sx={{ mb: 3, opacity: 0.9 }}>
              We don't just build your project - we support it for the long term
            </Typography>
            <List>
              <ListItem sx={{ color: 'white' }}>
                <ListItemIcon>
                  <Support sx={{ color: 'primary.main' }} />
                </ListItemIcon>
                <ListItemText primary="24/7 technical support" />
              </ListItem>
              <ListItem sx={{ color: 'white' }}>
                <ListItemIcon>
                  <Support sx={{ color: 'primary.main' }} />
                </ListItemIcon>
                <ListItemText primary="Regular maintenance and updates" />
              </ListItem>
              <ListItem sx={{ color: 'white' }}>
                <ListItemIcon>
                  <Support sx={{ color: 'primary.main' }} />
                </ListItemIcon>
                <ListItemText primary="Performance monitoring" />
              </ListItem>
              <ListItem sx={{ color: 'white' }}>
                <ListItemIcon>
                  <Support sx={{ color: 'primary.main' }} />
                </ListItemIcon>
                <ListItemText primary="Security updates and patches" />
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                height: 300,
                background: 'linear-gradient(45deg, #589bfb 30%, #7bb3fc 90%)',
                borderRadius: 2,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <Typography variant="h4" textAlign="center">
                We're Here for You<br />Every Step of the Way
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default Services;
