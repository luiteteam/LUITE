import React from 'react';
import { Box, Typography, Grid, Card, CardContent, Avatar, Container } from '@mui/material';
import { Business, EmojiEvents, Group, TrendingUp } from '@mui/icons-material';

const team = [
  {
    name: 'John Smith',
    role: 'CEO & Founder',
    avatar: 'https://via.placeholder.com/150/589bfb/ffffff?text=JS',
    bio: '10+ years of experience in digital strategy and business development.'
  },
  {
    name: 'Sarah Johnson',
    role: 'Lead Developer',
    avatar: 'https://via.placeholder.com/150/282828/ffffff?text=SJ',
    bio: 'Full-stack developer with expertise in React, Node.js, and cloud technologies.'
  },
  {
    name: 'Mike Chen',
    role: 'UI/UX Designer',
    avatar: 'https://via.placeholder.com/150/eef3f9/282828?text=MC',
    bio: 'Creative designer focused on user-centered design and brand identity.'
  },
  {
    name: 'Emily Davis',
    role: 'Project Manager',
    avatar: 'https://via.placeholder.com/150/589bfb/ffffff?text=ED',
    bio: 'Experienced in managing complex projects and client relationships.'
  }
];

const values = [
  {
    icon: <Business sx={{ fontSize: 40, color: 'primary.main' }} />,
    title: 'Innovation',
    description: 'We stay ahead of the curve with cutting-edge technologies and creative solutions.'
  },
  {
    icon: <EmojiEvents sx={{ fontSize: 40, color: 'primary.main' }} />,
    title: 'Excellence',
    description: 'We strive for excellence in every project, delivering quality that exceeds expectations.'
  },
  {
    icon: <Group sx={{ fontSize: 40, color: 'primary.main' }} />,
    title: 'Collaboration',
    description: 'We work closely with our clients to ensure their vision becomes reality.'
  },
  {
    icon: <TrendingUp sx={{ fontSize: 40, color: 'primary.main' }} />,
    title: 'Growth',
    description: 'We\'re committed to helping our clients grow their business through digital solutions.'
  }
];

function About() {
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
            About Our Agency
          </Typography>
          <Typography variant="h5" sx={{ opacity: 0.9 }}>
            We're passionate about creating digital experiences that make a difference
          </Typography>
        </Container>
      </Box>

      {/* Company Story */}
      <Box sx={{ mb: 6 }}>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography variant="h2" gutterBottom>
              Our Story
            </Typography>
            <Typography variant="body1" paragraph>
              Founded in 2020, our agency was born from a simple belief: that great digital 
              experiences have the power to transform businesses and connect people.
            </Typography>
            <Typography variant="body1" paragraph>
              What started as a small team of passionate developers has grown into a 
              full-service digital agency, serving clients across various industries 
              and helping them achieve their digital goals.
            </Typography>
            <Typography variant="body1" paragraph>
              Today, we continue to push the boundaries of what's possible in digital 
              development, always staying true to our core values of innovation, 
              excellence, and client success.
            </Typography>
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
                Building the Future,<br />One Project at a Time
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>

      {/* Our Values */}
      <Box sx={{ mb: 6 }}>
        <Typography variant="h2" textAlign="center" gutterBottom>
          Our Values
        </Typography>
        <Typography variant="h6" textAlign="center" color="text.secondary" sx={{ mb: 4 }}>
          The principles that guide everything we do
        </Typography>
        <Grid container spacing={3}>
          {values.map((value, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card sx={{ height: '100%', textAlign: 'center' }}>
                <CardContent sx={{ py: 3 }}>
                  <Box sx={{ mb: 2 }}>
                    {value.icon}
                  </Box>
                  <Typography variant="h6" gutterBottom>
                    {value.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {value.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Team Section */}
      <Box sx={{ mb: 6 }}>
        <Typography variant="h2" textAlign="center" gutterBottom>
          Meet Our Team
        </Typography>
        <Typography variant="h6" textAlign="center" color="text.secondary" sx={{ mb: 4 }}>
          The talented people behind our success
        </Typography>
        <Grid container spacing={3}>
          {team.map((member, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card sx={{ height: '100%', textAlign: 'center' }}>
                <CardContent sx={{ py: 3 }}>
                  <Avatar
                    src={member.avatar}
                    sx={{ width: 100, height: 100, mx: 'auto', mb: 2 }}
                  />
                  <Typography variant="h6" gutterBottom>
                    {member.name}
                  </Typography>
                  <Typography variant="body2" color="primary.main" sx={{ mb: 2 }}>
                    {member.role}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {member.bio}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Stats Section */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, #282828 0%, #424242 100%)',
          color: 'white',
          py: 6,
          borderRadius: 2
        }}
      >
        <Grid container spacing={4} textAlign="center">
          <Grid item xs={6} md={3}>
            <Typography variant="h3" gutterBottom>
              50+
            </Typography>
            <Typography variant="h6">
              Projects Completed
            </Typography>
          </Grid>
          <Grid item xs={6} md={3}>
            <Typography variant="h3" gutterBottom>
              25+
            </Typography>
            <Typography variant="h6">
              Happy Clients
            </Typography>
          </Grid>
          <Grid item xs={6} md={3}>
            <Typography variant="h3" gutterBottom>
              3+
            </Typography>
            <Typography variant="h6">
              Years Experience
            </Typography>
          </Grid>
          <Grid item xs={6} md={3}>
            <Typography variant="h3" gutterBottom>
              100%
            </Typography>
            <Typography variant="h6">
              Client Satisfaction
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default About;
