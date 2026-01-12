import { Box } from '@mui/material';
import { keyframes } from '@emotion/react';

const float = keyframes`
  0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.7; }
  50% { transform: translateY(-20px) rotate(180deg); opacity: 1; }
`;

const gradientMove = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

interface FloatingShapeProps {
  size: number;
  top: string;
  left: string;
  delay: number;
  color: string;
}

const FloatingShape = ({ size, top, left, delay, color }: FloatingShapeProps) => (
  <Box
    sx={{
      position: 'absolute',
      width: size,
      height: size,
      borderRadius: '50%',
      background: color,
      top,
      left,
      animation: `${float} ${4 + delay}s ease-in-out infinite`,
      animationDelay: `${delay}s`,
      filter: 'blur(1px)',
      zIndex: 0,
    }}
  />
);

export const AnimatedBackground = () => (
  <Box
    sx={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      overflow: 'hidden',
      background: 'linear-gradient(-45deg, #0f0c29, #302b63, #24243e, #1a1a2e)',
      backgroundSize: '400% 400%',
      animation: `${gradientMove} 15s ease infinite`,
      zIndex: -1,
    }}
  >
    <FloatingShape size={60} top="10%" left="10%" delay={0} color="rgba(99, 102, 241, 0.3)" />
    <FloatingShape size={40} top="20%" left="80%" delay={1} color="rgba(139, 92, 246, 0.3)" />
    <FloatingShape size={80} top="60%" left="15%" delay={2} color="rgba(236, 72, 153, 0.2)" />
    <FloatingShape size={50} top="70%" left="70%" delay={0.5} color="rgba(59, 130, 246, 0.3)" />
    <FloatingShape size={30} top="40%" left="50%" delay={1.5} color="rgba(168, 85, 247, 0.4)" />
    <FloatingShape size={70} top="85%" left="40%" delay={2.5} color="rgba(99, 102, 241, 0.2)" />
    <FloatingShape size={45} top="30%" left="25%" delay={3} color="rgba(236, 72, 153, 0.3)" />
  </Box>
);
