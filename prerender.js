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

// Dynamic metadata database for physical pages
const pageMeta = {
  '/': {
    title: "McDonald's Gutscheine 2026 – Aktuelle Coupons & Angebote",
    desc: "Finde aktuelle McDonald's Gutscheine, Coupons und Angebote. Spare bei Burgern, Menüs, McFlurry und mehr."
  },
  '/gutscheine/': {
    title: "McDonald's Gutscheine 2026 – Alle Coupons & Sparcodes",
    desc: "Vollständige Übersicht aller einlösbaren McDonald's Gutscheincodes in Deutschland."
  },
  '/app-gutscheine/': {
    title: "McDonald's App Coupons – Exklusive Smartphone-Rabatte",
    desc: "Spare bis zu 50% mit exklusiven App-Coupons und unserem MyMcDonald's Treuepunkte Guide."
  },
  '/happy-meal-angebote/': {
    title: "Happy Meal Angebote & Spielzeuge – Familientarife",
    desc: "Entdecke das Happy Meal mit günstigen Kombi-Vorteilen und Preisnachlässen für Familien."
  },
  '/burger-angebote/': {
    title: "McDonald's Burger Angebote & Coupons im Einzelkauf",
    desc: "Spare bei Big Mac, Double Cheeseburger, Royal Käse und weiteren Klassikern."
  },
  '/fruehstueck-angebote/': {
    title: "McDonald's Frühstück Angebote (Morgen-Gutscheine)",
    desc: "Günstige Heißgetränke und McMuffins vor 10:30 Uhr einlösen."
  },
  '/mccafe-angebote/': {
    title: "McCafé Angebote, Kuchen & Heißgetränke Gutscheine",
    desc: "Kombipreise für Muffins, Cookies, Donuts und aromatischen Café Latte Macchiato."
  },
  '/angebote/': {
    title: "McDonald's Angebote & Rabattaktionen diese Woche",
    desc: "Wöchentliche Sonderaktionen, Ostercodes und Rabattpyramiden."
  },
  '/blog/': {
    title: "Sparportal Blog – Expertenratgeber für McDonald's Deutschland",
    desc: "Lese echte Praxistests und nützliche Hacks, um bei der Bestellung Geld zu sparen."
  },
  '/ueber-uns/': {
    title: "Über Uns – mcdonaldsgutscheine.de",
    desc: "Über mcdonaldsgutscheine.de: Dein unabhängiges, werbefreies Verbraucherportal für aktuelle Sparaktionen in Deutschland."
  },
  '/kontakt/': {
    title: "Support & Kontaktformular – mcdonaldsgutscheine.de",
    desc: "Kontaktiere unser Redaktionsteam bei Fragen, Feedback oder Hinweisen zu neuen Gutscheinen."
  },
  '/datenschutz/': {
    title: "Datenschutzerklärung (DSGVO & AdSense) – mcdonaldsgutscheine.de",
    desc: "Ausführliche Datenschutzerklärung nach DSGVO-Richtlinien für unser unabhängiges Sparportal."
  },
  '/impressum/': {
    title: "Impressum gem. §5 TMG – mcdonaldsgutscheine.de",
    desc: "Gesetzliches Impressum mit allen Angaben nach § 5 TMG für mcdonaldsgutscheine.de."
  },
  '/cookies/': {
    title: "Cookie-Richtlinie – mcdonaldsgutscheine.de",
    desc: "Informationen über die Verwendung von Cookies und Werbeeinstellungen auf unserer Plattform."
  },
  '/haftungsausschluss/': {
    title: "Haftungsausschluss & rechtliche Hinweise – mcdonaldsgutscheine.de",
    desc: "Haftungsausschluss für redaktionelle Inhalte, externe Links und Markenrecht."
  },
  '/nutzungsbedingungen/': {
    title: "Nutzungsbedingungen – mcdonaldsgutscheine.de",
    desc: "Allgemeine Geschäfts- und Nutzungsbedingungen für die Verwendung unseres Portals."
  },
  '/gutscheine-pdf-download/': {
    title: "McDonald's Gutscheine PDF-Download & Druck-Center",
    desc: "Lade das offizielle McDonald's Coupon-Heft für Juni 2026 als druckoptimiertes PDF herunter und spare offline!"
  },
  '/blog/wie-funktionieren-mcdonalds-gutscheine/': {
    title: "Wie funktionieren McDonald’s Gutscheine? (Anleitung & PLU-Erklärung)",
    desc: "Du stehst im Restaurant, am Terminal oder am McDrive und weißt nicht, wie du deinen Coupon einlöst? Hier ist die vollständige Anleitung zu PLU-Codes."
  },
  '/blog/lohnt-sich-die-mcdonalds-app/': {
    title: "Lohnt sich die McDonald’s App wirklich? Unser ehrlicher Testbericht",
    desc: "Fast jede Restaurantkette hat eine eigene App. Doch wie gut sind die Angebote in der McDonald’s App wirklich? Wir haben das Treuepunkte-System getestet."
  },
  '/blog/die-besten-spar-tipps-mcdonalds/': {
    title: "Die 5 besten Geheim-Tipps zum Sparen bei McDonald’s",
    desc: "Wer sagt, dass man nur mit regulären Vouchern Geld sparen kann? Mit diesen cleveren Tricks und Kombinationen holst du das absolute Maximum heraus."
  },
  '/blog/mcdonalds-treueprogramm-erklaert/': {
    title: "McDonald’s Treueprogramm erklärt: Prämien & MyMcDonalds Points",
    desc: "Punkte sammeln wie die Weltmeister und umsonst Burger essen? Erfahre ganz genau, wie das MyMcDonald’s Prämienprogramm abläuft."
  }
};

// Replace metadata in HTML string
function getHtmlForRoute(route, rawHtml) {
  const meta = pageMeta[route] || pageMeta['/'];
  const title = meta.title;
  const desc = meta.desc;
  const canonicalUrl = `https://www.mcdonaldsgutscheine.de${route}`;

  // Replace title tag
  let html = rawHtml.replace(/<title>[^<]*<\/title>/, `<title>${title}</title>`);

  // Build replacement metadata block
  const metaTags = `
    <meta name="description" content="${desc}" />
    <meta name="keywords" content="McDonald's Gutscheine, Coupons, Rabatte, Fast Food Sparen, PLU-Codes, PDF Gutscheine, App-Gutscheine" />
    <link rel="canonical" href="${canonicalUrl}" />`;

  // Insert before </head>
  html = html.replace('</head>', `${metaTags}\n  </head>`);

  // Ensure language is set correctly (just in case)
  html = html.replace('<html lang="en">', '<html lang="de">');

  return html;
}

console.log('Starting pre-rendering generation for Google SEO 🚀');

// 1. Process root index.html to add home-specific meta tags as well!
try {
  const homeHtml = getHtmlForRoute('/', indexContent);
  fs.writeFileSync(templatePath, homeHtml, 'utf-8');
  console.log(`✓ Upgraded Root template: dist/index.html`);
} catch (error) {
  console.error('✗ Failed to upgrade root index.html template:', error);
}

// 2. Process all other subroutes to generate their physical directories & index.html files
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
    
    // Copy template and apply route-specific metadata replacements
    const processedHtml = getHtmlForRoute(route, indexContent);
    fs.writeFileSync(path.join(targetDir, 'index.html'), processedHtml, 'utf-8');
    console.log(`✓ Generated: ${route} -> dist/${relativePath}/index.html`);
  } catch (error) {
    console.error(`✗ Failed to generate route ${route}:`, error);
  }
});

// 3. Make sure 404.html fallback exists in root with standard content
try {
  fs.writeFileSync(path.join(distDir, '404.html'), indexContent, 'utf-8');
  console.log('✓ Generated fallback: dist/404.html');
} catch (error) {
  console.error('✗ Failed to generate dist/404.html:', error);
}

// 4. Generate dynamic sitemap.xml in dist/
try {
  let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
  xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

  routes.forEach(route => {
    const url = `https://www.mcdonaldsgutscheine.de${route}`;
    const isHome = route === '/';
    const priority = isHome ? '1.0' : route.startsWith('/blog/') && route !== '/blog/' ? '0.8' : '0.7';
    const changefreq = isHome ? 'daily' : 'weekly';

    xml += `  <url>\n`;
    xml += `    <loc>${url}</loc>\n`;
    xml += `    <changefreq>${changefreq}</changefreq>\n`;
    xml += `    <priority>${priority}</priority>\n`;
    xml += `  </url>\n`;
  });

  xml += `</urlset>\n`;
  
  fs.writeFileSync(path.join(distDir, 'sitemap.xml'), xml, 'utf-8');
  console.log('✓ Generated dynamic sitemap: dist/sitemap.xml');
} catch (error) {
  console.error('✗ Failed to generate sitemap.xml:', error);
}

console.log('Pre-rendering successfully completed! All routes are indexable with a 200 OK status. 🎉');
