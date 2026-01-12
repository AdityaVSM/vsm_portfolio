import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';
import { GitHub, LinkedIn, Email } from '@mui/icons-material';
import { PROFILE } from '../data/profile';

export const Navbar = () => (
  <AppBar position="static" sx={{ background: 'rgba(15, 12, 41, 0.8)', backdropFilter: 'blur(10px)' }}>
    <Toolbar>
      <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: 'bold' }}>
        {PROFILE.name}
      </Typography>
      <IconButton color="inherit" href={PROFILE.links.github} target="_blank" sx={{ '&:hover': { color: '#a855f7' } }}>
        <GitHub />
      </IconButton>
      <IconButton color="inherit" href={PROFILE.links.linkedin} target="_blank" sx={{ '&:hover': { color: '#3b82f6' } }}>
        <LinkedIn />
      </IconButton>
      <IconButton color="inherit" href={PROFILE.links.email} sx={{ '&:hover': { color: '#ec4899' } }}>
        <Email />
      </IconButton>
    </Toolbar>
  </AppBar>
);
