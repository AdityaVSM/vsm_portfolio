import { Box, CardContent, Grow, Stack, Typography } from '@mui/material';
import { Work } from '@mui/icons-material';
import { Section } from '../components/Section';
import { GlassCard } from '../components/GlassCard';
import { PROFILE } from '../data/profile';

export const Experience = () => (
  <Section title="Experience">
    <Stack spacing={2}>
      {PROFILE.experience.map((exp, index) => (
        <Grow in timeout={600 + index * 150} key={exp.company}>
          <div>
            <GlassCard sx={{ '&:hover': { transform: 'translateY(-3px)' } }}>
              <CardContent>
                <Stack direction="row" alignItems="center" spacing={1} mb={1}>
                  <Work sx={{ color: '#a855f7', fontSize: 20 }} />
                  <Typography variant="h6" color="white">{exp.role}</Typography>
                </Stack>
                <Typography sx={{ color: '#a855f7', fontWeight: 'bold' }}>{exp.company}</Typography>
                <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.5)', mb: 1 }}>{exp.period}</Typography>
                <Box component="ul" sx={{ m: 0, pl: 2, color: 'rgba(255, 255, 255, 0.7)' }}>
                  {exp.highlights.map((h) => (
                    <li key={h}><Typography variant="body2">{h}</Typography></li>
                  ))}
                </Box>
              </CardContent>
            </GlassCard>
          </div>
        </Grow>
      ))}
    </Stack>
  </Section>
);
