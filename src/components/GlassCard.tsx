import { Card, type SxProps, type Theme } from '@mui/material';
import type { ReactNode } from 'react';

interface GlassCardProps {
  children: ReactNode;
  sx?: SxProps<Theme>;
  hover?: boolean;
}

export const GlassCard = ({ children, sx, hover = true }: GlassCardProps) => (
  <Card
    sx={{
      background: 'rgba(255, 255, 255, 0.1)',
      backdropFilter: 'blur(20px)',
      border: '1px solid rgba(255, 255, 255, 0.2)',
      transition: 'all 0.3s ease',
      ...(hover && {
        '&:hover': {
          transform: 'translateY(-5px)',
          boxShadow: '0 12px 40px rgba(102, 126, 234, 0.3)',
          border: '1px solid rgba(102, 126, 234, 0.5)',
        },
      }),
      ...sx,
    }}
  >
    {children}
  </Card>
);
