import { Avatar, Grow, Typography } from '@mui/material';
import { GlassCard } from '../components/GlassCard';
import { PROFILE } from '../data/profile';

export const Hero = () => (
  <Grow in timeout={800}>
    <div>
      <GlassCard hover={false} sx={{ mb: 4, textAlign: 'center', py: 4, boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)' }}>
        <Avatar
          sx={{
            width: 120,
            height: 120,
            mx: 'auto',
            mb: 2,
            fontSize: 48,
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            boxShadow: '0 4px 20px rgba(102, 126, 234, 0.5)',
          }}
        >
          {PROFILE.name.charAt(0)}
        </Avatar>
        <Typography variant="h4" fontWeight="bold" color="white">
          {PROFILE.name}
        </Typography>
        <Typography variant="h6" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
          {PROFILE.title}
        </Typography>
        <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.5)', mt: 0.5 }}>
          📍 {PROFILE.location}
        </Typography>
        <Typography sx={{ mt: 2, px: 4, color: 'rgba(255, 255, 255, 0.8)' }}>
          {PROFILE.bio}
        </Typography>
      </GlassCard>
    </div>
  </Grow>
);
