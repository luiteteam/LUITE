import React, { useState } from 'react';
import { Box, Typography, Grid, Card, CardContent, TextField, Button, Container, Alert, Snackbar } from '@mui/material';
import { Email, Phone, LocationOn, AccessTime } from '@mui/icons-material';

const contactInfo = [
  {
    icon: <Email sx={{ fontSize: 40, color: 'primary.main' }} />,
    title: 'Email Us',
    details: 'hello@luite.com',
    description: 'Send us an email anytime'
  },
  {
    icon: <Phone sx={{ fontSize: 40, color: 'primary.main' }} />,
    title: 'Call Us',
    details: '+1 (555) 123-4567',
    description: 'Mon-Fri from 8am to 6pm'
  },
  {
    icon: <LocationOn sx={{ fontSize: 40, color: 'primary.main' }} />,
    title: 'Visit Us',
    details: '123 Business St, City, State 12345',
    description: 'Come say hello at our office'
  },
  {
    icon: <AccessTime sx={{ fontSize: 40, color: 'primary.main' }} />,
    title: 'Business Hours',
    details: 'Monday - Friday: 8:00 AM - 6:00 PM',
    description: 'Weekend: By appointment only'
  }
];

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    projectType: '',
    budget: '',
    message: ''
  });

  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success'
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // TODO: Integrate with Appwrite here
    // For now, just show success message
    setSnackbar({
      open: true,
      message: 'Thank you for your message! We\'ll get back to you soon.',
      severity: 'success'
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      projectType: '',
      budget: '',
      message: ''
    });
  };

  const handleCloseSnackbar = () => {
    setSnackbar(prev => ({ ...prev, open: false }));
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
            Get In Touch
          </Typography>
          <Typography variant="h5" sx={{ opacity: 0.9 }}>
            Ready to start your project? Let's discuss how we can help
          </Typography>
        </Container>
      </Box>

      {/* Contact Information */}
      <Box sx={{ mb: 6 }}>
        <Typography variant="h2" textAlign="center" gutterBottom>
          Contact Information
        </Typography>
        <Typography variant="h6" textAlign="center" color="text.secondary" sx={{ mb: 4 }}>
          Multiple ways to reach us
        </Typography>
        <Grid container spacing={3}>
          {contactInfo.map((info, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card sx={{ height: '100%', textAlign: 'center' }}>
                <CardContent sx={{ py: 3 }}>
                  <Box sx={{ mb: 2 }}>
                    {info.icon}
                  </Box>
                  <Typography variant="h6" gutterBottom>
                    {info.title}
                  </Typography>
                  <Typography variant="body1" sx={{ mb: 1, fontWeight: 500 }}>
                    {info.details}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {info.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Contact Form and Map */}
      <Box sx={{ mb: 6 }}>
        <Grid container spacing={4}>
          {/* Contact Form */}
          <Grid item xs={12} md={6}>
            <Typography variant="h3" gutterBottom>
              Send Us a Message
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
              Fill out the form below and we'll get back to you within 24 hours
            </Typography>
            
            <Box component="form" onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Full Name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Email Address"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Phone Number"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Project Type"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleInputChange}
                    select
                    SelectProps={{ native: true }}
                    variant="outlined"
                  >
                    <option value="">Select Project Type</option>
                    <option value="web-development">Web Development</option>
                    <option value="mobile-app">Mobile App</option>
                    <option value="ui-ux-design">UI/UX Design</option>
                    <option value="e-commerce">E-commerce</option>
                    <option value="custom-software">Custom Software</option>
                    <option value="other">Other</option>
                  </TextField>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Budget Range"
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                    select
                    SelectProps={{ native: true }}
                    variant="outlined"
                  >
                    <option value="">Select Budget Range</option>
                    <option value="under-5k">Under $5,000</option>
                    <option value="5k-10k">$5,000 - $10,000</option>
                    <option value="10k-25k">$10,000 - $25,000</option>
                    <option value="25k-50k">$25,000 - $50,000</option>
                    <option value="over-50k">Over $50,000</option>
                  </TextField>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Project Details"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    multiline
                    rows={4}
                    required
                    variant="outlined"
                    placeholder="Tell us about your project, goals, and any specific requirements..."
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    type="submit"
                    variant="contained"
                    size="large"
                    fullWidth
                    sx={{
                      py: 1.5,
                      fontSize: '1.1rem'
                    }}
                  >
                    Send Message
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Grid>

          {/* Map Placeholder */}
          <Grid item xs={12} md={6}>
            <Typography variant="h3" gutterBottom>
              Our Location
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
              Visit our office or schedule a meeting
            </Typography>
            
            <Box
              sx={{
                height: 400,
                background: 'linear-gradient(45deg, #eef3f9 30%, #589bfb 90%)',
                borderRadius: 2,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              <Box
                sx={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  textAlign: 'center',
                  color: 'white'
                }}
              >
                <LocationOn sx={{ fontSize: 60, mb: 2 }} />
                <Typography variant="h5" gutterBottom>
                  Interactive Map
                </Typography>
                <Typography variant="body1">
                  Map integration coming soon
                </Typography>
              </Box>
            </Box>

            <Box sx={{ mt: 3 }}>
              <Typography variant="h6" gutterBottom>
                Office Address
              </Typography>
              <Typography variant="body1" paragraph>
                123 Business Street<br />
                Suite 100<br />
                City, State 12345<br />
                United States
              </Typography>
              
              <Typography variant="h6" gutterBottom>
                Getting Here
              </Typography>
              <Typography variant="body1" paragraph>
                We're located in the heart of the business district, 
                easily accessible by public transportation and with 
                plenty of parking available.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>

      {/* FAQ Section */}
      <Box sx={{ mb: 6 }}>
        <Typography variant="h2" textAlign="center" gutterBottom>
          Frequently Asked Questions
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  How long does a typical project take?
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Project timelines vary depending on complexity. A simple website might take 2-4 weeks, 
                  while a complex application could take 3-6 months. We'll provide a detailed timeline 
                  during our initial consultation.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  What is your typical project cost?
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Project costs range from $3,000 for simple websites to $50,000+ for complex applications. 
                  We provide detailed quotes after understanding your specific requirements and goals.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Do you provide ongoing support?
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Yes, we offer various support packages including maintenance, updates, hosting, 
                  and technical support. We can customize a support plan that fits your needs and budget.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Can you work with our existing systems?
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Absolutely! We have experience integrating with various systems and platforms. 
                  We'll assess your current setup and recommend the best approach for integration.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>

      {/* Success/Error Snackbar */}
      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      >
        <Alert 
          onClose={handleCloseSnackbar} 
          severity={snackbar.severity}
          sx={{ width: '100%' }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
}

export default Contact;
