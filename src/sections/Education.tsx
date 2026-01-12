import { CardContent, Grow, Stack, Typography } from '@mui/material';
import { School } from '@mui/icons-material';
import { Section } from '../components/Section';
import { GlassCard } from '../components/GlassCard';
import { PROFILE } from '../data/profile';

export const Education = () => (
  <Section title="Education">
    <Grow in timeout={1000}>
      <div>
        <GlassCard hover={false}>
          <CardContent>
            <Stack direction="row" alignItems="center" spacing={1} mb={1}>
              <School sx={{ color: '#3b82f6', fontSize: 20 }} />
              <Typography variant="h6" color="white">{PROFILE.education.degree}</Typography>
            </Stack>
            <Typography sx={{ color: '#3b82f6', fontWeight: 'bold' }}>{PROFILE.education.school}</Typography>
            <Stack direction="row" spacing={2} mt={1}>
              <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.5)' }}>{PROFILE.education.period}</Typography>
              <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>CGPA: {PROFILE.education.cgpa}</Typography>
            </Stack>
          </CardContent>
        </GlassCard>
      </div>
    </Grow>
  </Section>
);
