import { Box, Chip, Grow, Stack, Typography } from '@mui/material';
import { Section } from '../components/Section';
import { PROFILE } from '../data/profile';

export const Skills = () => (
  <Section title="Skills">
    {Object.entries(PROFILE.skills).map(([category, skills]) => (
      <Box key={category} sx={{ mb: 2 }}>
        <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.5)', mb: 1, textTransform: 'capitalize' }}>
          {category.replace(/([A-Z])/g, ' $1')}
        </Typography>
        <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
          {skills.map((skill, index) => (
            <Grow in timeout={500 + index * 100} key={skill}>
              <Chip
                label={skill}
                size="small"
                sx={{
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  color: 'white',
                  fontWeight: 'bold',
                  '&:hover': { transform: 'scale(1.1)', boxShadow: '0 4px 15px rgba(102, 126, 234, 0.5)' },
                  transition: 'all 0.3s ease',
                }}
              />
            </Grow>
          ))}
        </Stack>
      </Box>
    ))}
  </Section>
);
