#!/usr/bin/env node
/**
 * Macle OpenDoc — Automated XML Sitemap & Robots.txt Generator
 * Generates SEO-compliant sitemap.xml with multilingual hreflang support for all
 * Macle documentation pages used in Telebirr MiniApp development.
 */

const fs = require('fs');
const path = require('path');

const BASE_DOMAIN = process.env.BASE_DOMAIN || 'https://macle-opendoc.vercel.app';
const BASE_PATH = '/openplatform/macledocs';
const DIST_DIR = path.join(__dirname, '../../dist');

function getPriority(topPath, subPath) {
  if (topPath === '/guide' && (subPath === '/installDevtool' || subPath === '/start')) return '1.0';
  if (topPath === '/component' || topPath === '/maui-component') return '0.9';
  if (topPath === '/api') return '0.9';
  if (topPath === '/framework' || topPath === '/devtools') return '0.8';
  if (topPath === '/extended' || topPath === '/sdk') return '0.7';
  if (topPath === '/changelog') return '0.5';
  return '0.8';
}

function getChangeFreq(topPath) {
  if (topPath === '/api' || topPath === '/component' || topPath === '/maui-component') return 'weekly';
  if (topPath === '/guide' || topPath === '/framework') return 'weekly';
  if (topPath === '/changelog') return 'daily';
  return 'monthly';
}

function walkMenu(items, category = '') {
  let leaves = [];
  for (const item of items) {
    if (item.child && Array.isArray(item.child)) {
      leaves = leaves.concat(walkMenu(item.child, item.name));
    } else if (item.path) {
      leaves.push({
        name: item.name,
        path: item.path,
        data: item.data,
        category: category
      });
    }
  }
  return leaves;
}

function generate() {
  console.log('Generating SEO XML Sitemap and robots.txt...');

  const enTopPath = path.join(DIST_DIR, 'data/menu/top/en/index.json');
  const zhTopPath = path.join(DIST_DIR, 'data/menu/top/index.json');

  if (!fs.existsSync(enTopPath)) {
    console.error('Error: Top menu file not found:', enTopPath);
    process.exit(1);
  }

  const enTop = JSON.parse(fs.readFileSync(enTopPath, 'utf8'));
  const zhTop = fs.existsSync(zhTopPath) ? JSON.parse(fs.readFileSync(zhTopPath, 'utf8')) : [];

  const pages = [];
  const today = new Date().toISOString().split('T')[0];

  // 1. Root and Landing URLs
  pages.push({
    canonical: `${BASE_DOMAIN}${BASE_PATH}/`,
    enUrl: `${BASE_DOMAIN}${BASE_PATH}/#/guide/installDevtool?locale=en_US`,
    zhUrl: `${BASE_DOMAIN}${BASE_PATH}/#/guide/installDevtool?locale=zh_CN`,
    priority: '1.0',
    changefreq: 'daily',
    lastmod: today
  });

  // 2. Iterate through all categories
  for (let i = 0; i < enTop.length; i++) {
    const topItem = enTop[i];
    const topPath = topItem.path;
    const leftFilePath = path.join(DIST_DIR, topItem.data);

    if (!fs.existsSync(leftFilePath)) continue;

    const leftData = JSON.parse(fs.readFileSync(leftFilePath, 'utf8'));
    const leaves = walkMenu(leftData);

    for (const leaf of leaves) {
      const canonical = `${BASE_DOMAIN}${BASE_PATH}/#${topPath}${leaf.path}?locale=en_US`;
      const enUrl = `${BASE_DOMAIN}${BASE_PATH}/#${topPath}${leaf.path}?locale=en_US`;
      const zhUrl = `${BASE_DOMAIN}${BASE_PATH}/#${topPath}${leaf.path}?locale=zh_CN`;

      pages.push({
        canonical,
        enUrl,
        zhUrl,
        topPath,
        subPath: leaf.path,
        name: leaf.name,
        category: leaf.category,
        priority: getPriority(topPath, leaf.path),
        changefreq: getChangeFreq(topPath),
        lastmod: today
      });
    }
  }

  console.log(`Indexed ${pages.length} total indexable routes.`);

  // 3. Build XML Sitemap
  let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
  xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"\n`;
  xml += `        xmlns:xhtml="http://www.w3.org/1999/xhtml">\n`;

  for (const p of pages) {
    xml += `  <url>\n`;
    xml += `    <loc>${p.canonical}</loc>\n`;
    xml += `    <xhtml:link rel="alternate" hreflang="en" href="${p.enUrl}" />\n`;
    xml += `    <xhtml:link rel="alternate" hreflang="zh" href="${p.zhUrl}" />\n`;
    xml += `    <xhtml:link rel="alternate" hreflang="x-default" href="${p.canonical}" />\n`;
    xml += `    <lastmod>${p.lastmod}</lastmod>\n`;
    xml += `    <changefreq>${p.changefreq}</changefreq>\n`;
    xml += `    <priority>${p.priority}</priority>\n`;
    xml += `  </url>\n`;
  }

  xml += `</urlset>\n`;

  const sitemapDistPath = path.join(DIST_DIR, 'sitemap.xml');
  fs.writeFileSync(sitemapDistPath, xml, 'utf8');
  console.log(`Saved ${sitemapDistPath} (${(Buffer.byteLength(xml) / 1024).toFixed(1)} KB)`);

  // 4. Build robots.txt
  const robots = `# ==============================================================================
# Macle Open Platform — Official Developer Documentation for Telebirr MiniApps
# Google SEO & Web Crawler Configuration
# ==============================================================================

User-agent: *
Allow: /
Allow: /openplatform/macledocs/
Allow: /openplatform/macledocs/img/
Allow: /openplatform/macledocs/css/
Allow: /openplatform/macledocs/js/
Allow: /openplatform/macledocs/data/
Allow: /data/
Allow: /img/
Allow: /css/
Allow: /js/

# Disallow internal simulator runtime and live-runner compiler endpoints
Disallow: /api/compile-snippet
Disallow: /_simulator/
Disallow: /openplatform/macledocs/_simulator/
Disallow: /miniapp/root/
Disallow: /miniapp-taro/root/
Disallow: /tmp/
Disallow: /store/

# Sitemaps declaration
Sitemap: ${BASE_DOMAIN}/sitemap.xml
Sitemap: ${BASE_DOMAIN}${BASE_PATH}/sitemap.xml
`;

  const robotsDistPath = path.join(DIST_DIR, 'robots.txt');
  fs.writeFileSync(robotsDistPath, robots, 'utf8');
  console.log(`Saved ${robotsDistPath}`);

  // 5. Generate JSON Sitemap for client-side discoverability & audit
  const jsonSitemapPath = path.join(DIST_DIR, 'sitemap.json');
  fs.writeFileSync(jsonSitemapPath, JSON.stringify(pages, null, 2), 'utf8');
  console.log(`Saved ${jsonSitemapPath}`);

  return pages.length;
}

if (require.main === module) {
  generate();
}

module.exports = { generate };

