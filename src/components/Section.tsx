import { Box, Fade, Typography } from '@mui/material';
import type { ReactNode } from 'react';

interface SectionProps {
  title: string;
  children: ReactNode;
}

export const Section = ({ title, children }: SectionProps) => (
  <Fade in timeout={1000}>
    <Box sx={{ my: 4 }}>
      <Typography variant="h5" gutterBottom fontWeight="bold" color="white">
        {title}
      </Typography>
      {children}
    </Box>
  </Fade>
);
