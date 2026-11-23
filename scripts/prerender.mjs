// Writes the rendered home page into dist/index.html, so search engines, link previews and
// readers without JavaScript get the full page. The browser then renders the same markup again.
import fs from 'node:fs';
import { render } from '../dist-ssr/entry-server.js';

const file = new URL('../dist/index.html', import.meta.url);
const html = fs.readFileSync(file, 'utf8');
const marker = '<body>';
if (!html.includes(marker)) throw new Error('prerender: no <body> in dist/index.html');
fs.writeFileSync(file, html.replace(marker, marker + render('/')));
console.log('prerender: wrote the home page into dist/index.html');
