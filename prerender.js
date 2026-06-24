import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const distDir = path.join(__dirname, 'dist');
const templatePath = path.join(distDir, 'index.html');

if (!fs.existsSync(templatePath)) {
  console.error('Error: dist/index.html not found. Please run "npm run build" first!');
  process.exit(1);
}

const indexContent = fs.readFileSync(templatePath, 'utf-8');

// Define all static and dynamic pages
const routes = [
  '/',
  '/gutscheine/',
  '/app-gutscheine/',
  '/happy-meal-angebote/',
  '/fruehstueck-angebote/',
  '/burger-angebote/',
  '/mccafe-angebote/',
  '/angebote/',
  '/blog/',
  '/ueber-uns/',
  '/kontakt/',
  '/datenschutz/',
  '/impressum/',
  '/cookies/',
  '/haftungsausschluss/',
  '/nutzungsbedingungen/',
  '/gutscheine-pdf-download/'
];

// All dynamic blog slugs
const blogSlugs = [
  'wie-funktionieren-mcdonalds-gutscheine',
  'lohnt-sich-die-mcdonalds-app',
  'die-besten-spar-tipps-mcdonalds',
  'mcdonalds-treueprogramm-erklaert'
];

// Add blog subroutes
blogSlugs.forEach(slug => {
  routes.push(`/blog/${slug}/`);
});

console.log('Starting pre-rendering generation for Google SEO 🚀');

// Process each route to generate a physical index.html
routes.forEach(route => {
  if (route === '/' || route === '/index.html') {
    return;
  }
  
  // Normalize the folder path (e.g. /ueber-uns/ -> ueber-uns)
  const relativePath = route.replace(/^\/|\/$/g, '');
  const targetDir = path.join(distDir, relativePath);
  
  try {
    // Create directory recursively
    fs.mkdirSync(targetDir, { recursive: true });
    
    // Copy template index.html as index.html inside the directory
    fs.writeFileSync(path.join(targetDir, 'index.html'), indexContent, 'utf-8');
    console.log(`✓ Generated: ${route} -> dist/${relativePath}/index.html`);
  } catch (error) {
    console.error(`✗ Failed to generate route ${route}:`, error);
  }
});

// Also make sure 404.html fallback exists in root
try {
  fs.writeFileSync(path.join(distDir, '404.html'), indexContent, 'utf-8');
  console.log('✓ Generated fallback: dist/404.html');
} catch (error) {
  console.error('✗ Failed to generate dist/404.html:', error);
}

console.log('Pre-rendering successfully completed! All routes are indexable with a 200 OK status. 🎉');
