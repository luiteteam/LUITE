import React from 'react';
import { Box, Typography, Container, Grid, Avatar, IconButton } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';

const teamMembers = [
  {
    name: 'Mahil Sonowal',
    role: 'Frontend Developer',
    img: '/mahil.jpg',
    linkedin: '',
    instagram: '',
    facebook: '',
    x: '',
    team: 'Engineering Team',
  },
  {
    name: 'Viraj Sonowal',
    role: 'Full Stack Developer',
    img: '/viraj.jpg',
    // linkedin: '',
    team: 'Engineering Team',
  },
  {
    name: 'Siddhartha Sonowal',
    role: 'Frontend Developer',
    img: '/siddhartha.jpg',
    // linkedin: '',
    team: 'Engineering Team',
  },
  {
    name: 'Gaurav Debnath',
    role: 'Project Manager',
    img: '/gaurav.jpg',
    linkedin: '',
    instagram: '',
    facebook: '',
    x: '',
    team: 'Engineering Team',
  },
  {
    name: 'Niraj Nil Dutta',
    role: 'Client Manager',
    img: '/niraj.jpg',
    // linkedin: '',
  },
  {
    name: 'Hiruj Boruah',
    role: 'Client Manager',
    img: '/hiruj.jpg',
    // linkedin: '',
  },
];

function TeamCard({ member }) {
  return (
    <Box sx={{ textAlign: 'center', p: 0, background: 'none' }}>
      <Avatar
        src={member.img}
        alt={member.name}
        sx={{ width: 160, height: 160, mx: 'auto', mb: 2, mt: 0, boxShadow: 0, border: '8px solid #f3f3f3' }}
      />
      <Typography variant="h6" sx={{ fontWeight: 700, mb: 0.5 }}>
        {member.name}
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
        {member.role}
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1 }}>
        {member.x && (
          <IconButton href={member.x} target="_blank" rel="noopener noreferrer" size="small" sx={{ color: '#222' }}>
            <XIcon fontSize="small" />
          </IconButton>
        )}
        {member.linkedin && (
          <IconButton href={member.linkedin} target="_blank" rel="noopener noreferrer" size="small" sx={{ color: '#0A66C2' }}>
            <LinkedInIcon fontSize="small" />
          </IconButton>
        )}
        {member.instagram && (
          <IconButton href={member.instagram} target="_blank" rel="noopener noreferrer" size="small" sx={{ color: '#E4405F' }}>
            <InstagramIcon fontSize="small" />
          </IconButton>
        )}
        {member.facebook && (
          <IconButton href={member.facebook} target="_blank" rel="noopener noreferrer" size="small" sx={{ color: '#1877F3' }}>
            <FacebookIcon fontSize="small" />
          </IconButton>
        )}
      </Box>
    </Box>
  );
}

function Team() {
  return (
    <Box>
      <Container sx={{ pt: 8, pb: 4 }}>
        <Typography variant="h3" align="center" sx={{ fontWeight: 700, mb: 1 }}>
          Our{' '}
          <Box component="span" sx={{ color: 'primary.main', display: 'inline' }}>
            Team
          </Box>
        </Typography>
        <Typography align="center" variant="h6" sx={{ mb: 6, fontWeight: 400 }}>
          Meet our outstanding team – a synergy of talent, creativity, and dedication, crafting success together.
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {teamMembers.map((member, idx) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={member.name + idx}>
              <TeamCard member={member} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default Team;
