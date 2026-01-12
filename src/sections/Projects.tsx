import { CardContent, Grow, Stack, Typography } from '@mui/material';
import { Section } from '../components/Section';
import { GlassCard } from '../components/GlassCard';
import { PROFILE } from '../data/profile';

export const Projects = () => (
  <Section title="Projects">
    <Stack spacing={2}>
      {PROFILE.projects.map((project, index) => (
        <Grow in timeout={800 + index * 200} key={project.title}>
          <div>
            <GlassCard>
              <CardContent>
                <Typography variant="h6" color="white">{project.title}</Typography>
                <Typography sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>{project.description}</Typography>
              </CardContent>
            </GlassCard>
          </div>
        </Grow>
      ))}
    </Stack>
  </Section>
);
