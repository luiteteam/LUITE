import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Box, Container } from '@mui/material';

function Layout({ children }) {
  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      <Container maxWidth="lg" sx={{ flex: 1, py: 4 }}>
        {children}
      </Container>
      <Footer />
    </Box>
  );
}

export default Layout;
