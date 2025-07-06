import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Box } from '@mui/material';

function Layout({ children }) {
  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      <Box sx={{ flex: 1 }}>{children}</Box>
      <Footer />
    </Box>
  );
}

export default Layout;
