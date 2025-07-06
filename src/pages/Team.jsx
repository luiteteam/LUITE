import React from 'react';
import { Box, Typography, Container, Grid, Card, CardContent, Avatar, IconButton } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const executiveTeam = [
  {
    name: 'Mahil Sonowal',
    role: 'Executive Director',
    img: '/mahil.jpg',
    // linkedin: '',
  },
];

const developmentTeam = [
  {
    name: 'Viraj Sonowal',
    role: 'Full Stack Developer',
    
    // linkedin: '',
  },
  {
    name: 'Siddhartha Sonowal',
    role: 'Frontend Developer',
    // img: '',
    // linkedin: '',
  },
];

const clientTeam = [
  {
    name: 'Niraj Nil Dutta',
    role: 'Client Manager',
    img: '/niraj.jpg',
    // linkedin: '',
  },
  {
    name: 'Hiruj Boruah',
    role: 'Client Manager',
    // img: '',
    // linkedin: '',
  },
];

function TeamCard({ member }) {
  return (
    <Card sx={{ textAlign: 'center', p: 2, boxShadow: 2, borderRadius: 4, maxWidth: 320, mx: 'auto' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', pt: 3 }}>
        {member.img ? (
          <Avatar src={member.img} alt={member.name} sx={{ width: 160, height: 160, mb: 2, borderRadius: 4 }} />
        ) : (
          <Avatar sx={{ width: 160, height: 160, mb: 2, bgcolor: 'primary.main', fontSize: 48 }}>
            {member.name.split(' ').map((n) => n[0]).join('').toUpperCase()}
          </Avatar>
        )}
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 1 }}>
          <Typography variant="h6" sx={{ fontWeight: 700, mr: 1 }}>
            {member.name}
          </Typography>
          {member.linkedin && (
            <IconButton
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              size="small"
              sx={{ color: '#0A66C2' }}
            >
              <LinkedInIcon fontSize="medium" />
            </IconButton>
          )}
        </Box>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
          {member.role}
        </Typography>
      </Box>
    </Card>
  );
}

function TeamSection({ title, subtitle, members }) {
  return (
    <Box sx={{ mb: 8 }}>
      <Typography variant="h3" align="center" sx={{ fontWeight: 700, mb: 1 }}>
        {title}
      </Typography>
      {subtitle && (
        <Typography align="center" variant="h6" sx={{ mb: 6, fontWeight: 400 }}>
          {subtitle}
        </Typography>
      )}
      <Grid container spacing={4} justifyContent="center">
        {members.map((member, idx) => (
          <Grid item xs={12} sm={6} md={4} key={idx}>
            <TeamCard member={member} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

function Team() {
  return (
    <Box>
      <Container sx={{ pt: 8, pb: 4 }}>
        <TeamSection
          title={<><Box component="span" sx={{ color: 'primary.main', display: 'inline' }}>Executive</Box> Team</>}
          members={executiveTeam}
        />
        <TeamSection
          title={<><Box component="span" sx={{ color: 'primary.main', display: 'inline' }}>Development</Box> Team</>}
          members={developmentTeam}
        />
        <TeamSection
          title={<><Box component="span" sx={{ color: 'primary.main', display: 'inline' }}>Client</Box> Team</>}
          subtitle="Empowering success through seamless coordination and support."
          members={clientTeam}
        />
      </Container>
    </Box>
  );
}

export default Team;
