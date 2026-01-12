import { Box, Container } from '@mui/material';
import { AnimatedBackground } from './components/AnimatedBackground';
import { Navbar } from './components/Navbar';
import { Hero } from './sections/Hero';
import { Skills } from './sections/Skills';
import { Experience } from './sections/Experience';
import { Projects } from './sections/Projects';
import { Education } from './sections/Education';

export default function App() {
  return (
    <Box sx={{ minHeight: '100vh', position: 'relative' }}>
      <AnimatedBackground />
      <Navbar />
      <Container maxWidth="md" sx={{ py: 4, position: 'relative', zIndex: 1 }}>
        <Hero />
        <Skills />
        <Experience />
        <Projects />
        <Education />
      </Container>
    </Box>
  );
}
