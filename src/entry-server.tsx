import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router';
import App from './App.tsx';

// Used at build time only (scripts/prerender.mjs): renders a route to HTML so the shipped
// index.html already holds the page's words and pictures.
export const render = (url: string) =>
  renderToString(
    <StaticRouter location={url}>
      <App />
    </StaticRouter>,
  );
