import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { flushSync } from 'react-dom';
import { BrowserRouter } from 'react-router';
import './page.css';
import App from './App.tsx';

// Render synchronously so the page's markup is in the DOM before the design kit's scripts run:
// they read the DOM once on start (nav sheet, hover layer, hero entrance, scroll moments).
// The page renders straight into <body> (header, main, footer as its children, as the kit expects).
const root = createRoot(document.body);
flushSync(() =>
  root.render(
    <StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StrictMode>,
  ),
);

for (const src of ['/assets/system.js', '/assets/motion/motion.js', '/assets/layout/layout.js']) {
  const s = document.createElement('script');
  s.type = 'module';
  s.src = src;
  document.body.appendChild(s);
}
