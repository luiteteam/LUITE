import React from 'react';
import { Box, Typography, Button, Container, Grid, Card, CardContent } from '@mui/material';

const values = [
  {
    title: 'Innovation',
    description: 'We embrace new ideas and technologies to deliver cutting-edge solutions.'
  },
  {
    title: 'Excellence',
    description: 'We strive for the highest quality in everything we do.'
  },
  {
    title: 'Integrity',
    description: 'We act with honesty, transparency, and respect.'
  },
  {
    title: 'Collaboration',
    description: 'We believe the best results come from working together.'
  },
  {
    title: 'Customer Success',
    description: 'We are dedicated to helping our clients achieve their goals.'
  },
];

function Overview() {
  return (
    <Box>
      {/* About LUITE with Slogan and CTA */}
      <Box
        sx={{
          position: 'relative',
          background: 'url(https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&q=80) center/cover no-repeat',
          color: 'white',
          py: { xs: 8, md: 12 },
          textAlign: 'center',
          mb: 8,
          borderRadius: 2,
          overflow: 'hidden',
        }}
      >
        <Box sx={{ position: 'absolute', inset: 0, bgcolor: 'rgba(40,40,40,0.6)' }} />
        <Container sx={{ position: 'relative', zIndex: 1 }}>
          <Typography variant="h2" sx={{ fontWeight: 700, mb: 2 }}>
            About LUITE
          </Typography>
          <Typography variant="h4" sx={{ mb: 4, fontWeight: 400, opacity: 0.95 }}>
            "Empowering Digital Transformation."
          </Typography>
          <Button
            variant="contained"
            color="primary"
            size="large"
            href="/contact"
            sx={{ fontWeight: 600, px: 5, py: 1.5 }}
          >
            Contact Us
          </Button>
        </Container>
      </Box>

      {/* Our Story Section */}
      <Container sx={{ mb: 8 }}>
        <Typography variant="h3" sx={{ fontWeight: 600, mb: 2 }}>
          Our Story
        </Typography>
        <Typography variant="body1" sx={{ mb: 2, maxWidth: 800 }}>
          At LUITE, we believe in the transformative power of software to redefine what's possible for businesses and communities. Our journey began with a vision: to create digital solutions that not only solve problems, but also inspire growth, innovation, and connection. We are passionate about building technology that empowers people, streamlines operations, and unlocks new opportunities.
        </Typography>
        <Typography variant="body1" sx={{ maxWidth: 800 }}>
          What do we do? We design, develop, and deliver custom software, web, and mobile applications for ambitious organizations. Our team combines technical expertise with creative thinking to turn your ideas into reality—on time, on budget, and with measurable impact.
        </Typography>
      </Container>

      {/* Our Values Section */}
      <Box sx={{ bgcolor: 'background.paper', py: 8, mb: 8 }}>
        <Container>
          <Typography variant="h3" sx={{ fontWeight: 600, mb: 4 }} align="center">
            Our Values
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            {values.map((value, idx) => (
              <Grid item xs={12} sm={6} md={4} key={idx}>
                <Card sx={{ height: '100%', textAlign: 'center', boxShadow: 2 }}>
                  <CardContent>
                    <Typography variant="h5" sx={{ fontWeight: 700, mb: 1 }}>
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
        </Container>
      </Box>

      {/* Careers Section */}
      <Container sx={{ mb: 8 }}>
        <Box sx={{ textAlign: 'center', mb: 4 }}>
          <Typography variant="h3" sx={{ fontWeight: 600, mb: 2 }}>
            Careers at LUITE
          </Typography>
          <Typography variant="h6" sx={{ mb: 3, maxWidth: 700, mx: 'auto' }}>
            Seeking exceptional talent to elevate our software development teams. We value skilled, inspired self-starters who thrive in collaborative, high-pressure environments.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            size="large"
            href="/career"
            sx={{ fontWeight: 600, px: 5, py: 1.5 }}
          >
            Join Us
          </Button>
        </Box>
      </Container>

      {/* Final Contact Section */}
      <Box sx={{ bgcolor: 'grey.900', color: 'white', py: 6, textAlign: 'center', borderRadius: 2 }}>
        <Typography variant="h5" sx={{ fontWeight: 700, mb: 1 }}>
          LUITE
        </Typography>
        <Typography variant="body1">
          Email: hello@luite.com
        </Typography>
      </Box>
    </Box>
  );
}

export default Overview;
