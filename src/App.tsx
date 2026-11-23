import { Header } from './components/Header';
import { Hero } from './sections/Hero';
import { Experience } from './sections/Experience';
import { Projects } from './sections/Projects';
import { Skills } from './sections/Skills';
import { Education } from './sections/Education';
import { Footer } from './sections/Footer';

export default function App() {
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <Header />
      <main id="main" className="container">
        <Hero />
        <Experience />
        <Projects />
        <Skills />
        <Education />
      </main>
      <Footer />
    </>
  );
}
