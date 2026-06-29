#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const BASE_URL = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';

const routes = [
  { path: '/', changefreq: 'weekly', priority: 1.0 },
  { path: '/blog', changefreq: 'daily', priority: 0.8 },
  { path: '/shop', changefreq: 'daily', priority: 0.8 },
];

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${routes.map(route => `
  <url>
    <loc>${BASE_URL}${route.path}</loc>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>
`).join('')}
</urlset>`;

const outputPath = path.join(process.cwd(), 'public', 'sitemap.xml');
fs.writeFileSync(outputPath, xml);
console.log('✅ Sitemap generated');
