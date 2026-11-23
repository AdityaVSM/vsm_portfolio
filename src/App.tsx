import { Route, Routes, useLocation } from 'react-router';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { ExperienceDetail } from './pages/ExperienceDetail';
import { ProjectDetail } from './pages/ProjectDetail';
import { PostDetail } from './pages/PostDetail';
import { NotFound } from './pages/NotFound';

// Pages link to each other with plain <a> tags (full page loads), so the design kit's scripts
// start fresh on every page.
export default function App() {
  const { pathname } = useLocation();
  const onHome = pathname === '/' || pathname === '/index.html';
  return (
    <>
      <Header onHome={onHome} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/index.html" element={<Home />} />
        <Route path="/experience/:slug" element={<ExperienceDetail />} />
        <Route path="/projects/:slug" element={<ProjectDetail />} />
        <Route path="/writing/:slug" element={<PostDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer onHome={onHome} />
    </>
  );
}
