// Génère une page HTML statique et complète par route, après `vite build`.
// Les robots (Google, AWS Activate, aperçus de liens…) lisent ainsi le contenu
// sans exécuter JavaScript ; dans le navigateur, React reprend la main normalement.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dist = path.join(root, 'dist');
const routes = ['/', '/carrieres', '/investisseurs', '/presse', '/confidentialite', '/privacy', '/terms'];

const template = fs.readFileSync(path.join(dist, 'index.html'), 'utf-8');
const { render } = await import(pathToFileURL(path.join(root, 'dist-ssr', 'entry-server.js')).href);

// Balises de <head> qu'une page peut redéfinir (via le composant SEO).
const HEAD_TAG = /<title[^>]*>[\s\S]*?<\/title>|<meta\b[^>]*>|<link\b[^>]*rel="canonical"[^>]*>/g;
const keyOf = (tag) => {
  if (/^<title/.test(tag)) return 'title';
  const m = tag.match(/\b(name|property|rel)="([^"]+)"/);
  return m ? `${m[1]}=${m[2]}` : null;
};

function mergeHead(html, tags) {
  for (const tag of tags) {
    const key = keyOf(tag);
    if (!key) continue;
    let replaced = false;
    if (key === 'title') {
      html = html.replace(/<title[^>]*>[\s\S]*?<\/title>/, () => { replaced = true; return tag; });
    } else {
      const [attr, val] = [key.slice(0, key.indexOf('=')), key.slice(key.indexOf('=') + 1)];
      const re = new RegExp(`<(meta|link)\\b[^>]*\\b${attr}="${val.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}"[^>]*>`);
      html = html.replace(re, () => { replaced = true; return tag; });
    }
    if (!replaced) html = html.replace('</head>', `    ${tag}\n  </head>`);
  }
  return html;
}

let count = 0;
for (const url of routes) {
  const { html: appHtml, helmet } = render(url);
  // react-helmet-async peut fournir les balises via son contexte, ou React 19 peut
  // les laisser dans le corps : on gère les deux cas.
  let body = appHtml;
  let headTags = [];
  if (helmet) {
    headTags = ['title', 'meta', 'link']
      .map((k) => (helmet[k] ? helmet[k].toString() : ''))
      .join('')
      .match(HEAD_TAG) || [];
  }
  const inline = body.match(HEAD_TAG) || [];
  if (inline.length) {
    headTags = headTags.concat(inline);
    body = body.replace(HEAD_TAG, '');
  }
  let page = mergeHead(template, headTags.map((t) => t.replace(/\sdata-rh="true"/g, '')));
  if (!page.includes('<div id="root"></div>')) throw new Error('Élément #root introuvable dans dist/index.html');
  page = page.replace('<div id="root"></div>', `<div id="root">${body}</div>`);
  const file = url === '/' ? 'index.html' : `${url.slice(1)}.html`;
  fs.writeFileSync(path.join(dist, file), page);
  count++;
  console.log(`prerender: ${url} -> dist/${file} (${Math.round(page.length / 1024)} Ko)`);
}
fs.rmSync(path.join(root, 'dist-ssr'), { recursive: true, force: true });
console.log(`prerender: ${count} pages générées`);
