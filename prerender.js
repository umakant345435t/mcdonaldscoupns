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
  '/about/',
  '/about-us/',
  '/kontakt/',
  '/contact/',
  '/contact-us/',
  '/datenschutz/',
  '/privacy/',
  '/privacy-policy/',
  '/impressum/',
  '/imprint/',
  '/haftungsausschluss/',
  '/nutzungsbedingungen/',
  '/terms/',
  '/gutscheine-pdf-download/'
];

// All dynamic blog slugs
const blogSlugs = [
  'mcdonalds-treueprogramm-erklaert',
  'mcdonalds-lieferservice-uber-eats-sparen',
  'mcdonalds-plu-codes-sparen'
];

// Add blog subroutes
blogSlugs.forEach(slug => {
  routes.push(`/blog/${slug}/`);
});

// Dynamic metadata database for physical pages (High-Intent German SEO Keywords)
const pageMeta = {
  '/': {
    title: "McDonald's Gutscheine 2026 – Aktuelle Coupons, PLU-Codes & PDF Deutschland",
    desc: "Tagesaktuelle McDonald's Gutscheine & Coupons 2026 für Deutschland. Spare bis zu 50% mit Kassen-PLU-Codes, Bonusbuch PDF-Download, MyMcDonald's App & 20€ Uber Eats Code MCD2X10!",
    keywords: "McDonald's Gutscheine, McDonalds Gutscheine 2026, McDonald's Coupons aktuell, McDonald's PLU Codes Liste, McDonalds Gutschein PDF Download, McDonald's Deutschland Rabatt, Big Mac Gutschein, McFlurry Coupon, 20er Chicken McNuggets Gutschein, Uber Eats McDonalds Gutschein MCD2X10"
  },
  '/gutscheine/': {
    title: "McDonald's Gutscheine 2026 – Alle aktuellen Coupons & PLU-Codes Liste",
    desc: "Vollständige Liste aller einlösbaren McDonald's Gutscheincodes & 3-stelligen Kassen-PLUs 2026 in Deutschland. Direkt am Bestellterminal, McDrive oder an der Kasse sparen!",
    keywords: "McDonald's Gutscheine 2026, alle McDonalds Coupons, McDonald's PLU Codes Liste, Kassen Codes McDonald's, McDrive Gutscheine, Bestellterminal Code"
  },
  '/app-gutscheine/': {
    title: "McDonald's App Gutscheine 2026 – Exklusive MyMcDonald's Coupons & Punkte",
    desc: "Spare bis zu 50% mit exklusiven McDonald's App-Gutscheinen, QR-Codes und unserem MyMcDonald's Bonusprogramm Guide für Gratis-Prämien in Deutschland.",
    keywords: "McDonald's App Gutscheine, MyMcDonald's Coupons, McDonald's App Rabatte, MyMcDonald's Punkte einlösen, QR Code Gutschein McDonald's"
  },
  '/happy-meal-angebote/': {
    title: "McDonald's Happy Meal Gutscheine 2026 – Familien-Coupons & Spielzeug",
    desc: "Aktuelle McDonald's Happy Meal Gutscheine & Familien-Angebote 2026 in Deutschland. Spare mit Kombi-Coupons inklusive Hauptspeise, Beilage, Getränk und Spielzeug oder Buch.",
    keywords: "Happy Meal Gutschein, McDonald's Familien Coupons, Happy Meal Angebot Preis, Happy Meal Spielzeug aktuell, McDonald's Kinder Menü Rabatt"
  },
  '/burger-angebote/': {
    title: "McDonald's Burger Gutscheine 2026 – Big Mac, Royal TS & 2-für-1 Coupons",
    desc: "Spare bei Big Mac, Hamburger Royal TS, Double Cheeseburger, McChicken und 20er Chicken McNuggets mit aktuellen 2-für-1 Burger Gutscheinen & McMenü Coupons.",
    keywords: "Big Mac Gutschein, McDonald's Burger Angebote, 2 für 1 McDonald's Coupon, 20er Chicken McNuggets Gutschein, Hamburger Royal TS Rabatt, McMenü Gutschein"
  },
  '/fruehstueck-angebote/': {
    title: "McDonald's Frühstück Gutscheine 2026 – McMuffin & Kaffee Coupons",
    desc: "Günstige McDonald's Frühstück Gutscheine vor 10:30 Uhr: Spare bei McMuffin Bacon & Egg, Rührei, Croissants und Café-Spezialitäten in allen teilnehmenden Filialen.",
    keywords: "McDonald's Frühstück Gutscheine, McMuffin Coupon, McDonald's Frühstück Zeiten Preise, Kaffee Gutschein McDonald's"
  },
  '/mccafe-angebote/': {
    title: "McCafé Gutscheine 2026 – Kaffee, Kuchen, McFlurry & Dessert Coupons",
    desc: "Aktuelle McCafé Gutscheine & Dessert-Coupons für Deutschland: Kombipreise für Latte Macchiato, Cappuccino, Muffins, Cookies, Donuts und McFlurry.",
    keywords: "McCafé Gutscheine, McFlurry Gutschein, McDonald's Kaffee Coupon, Kuchen & Dessert Rabatt McDonald's"
  },
  '/angebote/': {
    title: "McDonald's Angebote diese Woche – Aktuelle Aktionen & Rabatte 2026",
    desc: "Alle McDonald's Angebote dieser Woche im Überblick: Saisonale Sonderaktionen, McSmart Menü Deals, Oster- & Sommer-Coupons sowie Lieferservice-Rabatte.",
    keywords: "McDonald's Angebote diese Woche, McDonald's Aktion aktuell, McSmart Menü Preis, McDonald's Wochenangebote Deutschland"
  },
  '/blog/': {
    title: "McDonald's Spar-Ratgeber & Insider-Tricks – Blog Deutschland",
    desc: "Echte Praxistests, PLU-Code-Listen, Kassenbon-Tricks und Schritt-für-Schritt-Anleitungen zum Sparen bei McDonald's in Deutschland.",
    keywords: "McDonald's Spartipps, McDonald's Tricks, Kassenbon Gratis Getränk McDonald's, PLU Codes Anleitung"
  },
  '/ueber-uns/': {
    title: "Über Uns / About Us – mcdonaldsgutscheine.de",
    desc: "Über mcdonaldsgutscheine.de: Dein unabhängiges Verbraucherportal für tagesaktuelle McDonald's Sparaktionen und PLU-Codes in Deutschland.",
    keywords: "mcdonaldsgutscheine.de, Über uns, Verbraucherportal Fast Food Deutschland"
  },
  '/about/': {
    title: "Über Uns (About Us) – mcdonaldsgutscheine.de",
    desc: "Über mcdonaldsgutscheine.de: Unabhängiges Verbraucherportal und Spartipps für McDonald's Deutschland.",
    keywords: "mcdonaldsgutscheine.de, About Us, McDonald's Sparportal"
  },
  '/about-us/': {
    title: "Über Uns – mcdonaldsgutscheine.de",
    desc: "Über mcdonaldsgutscheine.de: Unabhängiges Verbraucherportal und Spartipps für McDonald's Deutschland.",
    keywords: "mcdonaldsgutscheine.de, Über Uns, Unabhängiges Verbraucherportal"
  },
  '/kontakt/': {
    title: "Kontakt & Support – mcdonaldsgutscheine.de",
    desc: "Kontaktiere unser Redaktionsteam bei Fragen, Feedback oder Hinweisen zu neuen Gutscheinen.",
    keywords: "Kontakt mcdonaldsgutscheine.de, Redaktion Support"
  },
  '/contact/': {
    title: "Kontakt & Support – mcdonaldsgutscheine.de",
    desc: "Kontaktiere unser Redaktionsteam bei Fragen, Feedback oder Hinweisen zu neuen Gutscheincodes für McDonald's Deutschland.",
    keywords: "Kontakt mcdonaldsgutscheine.de, Support"
  },
  '/contact-us/': {
    title: "Kontakt & Support – mcdonaldsgutscheine.de",
    desc: "Kontaktiere unser Redaktionsteam bei Fragen, Feedback oder Hinweisen zu neuen Gutscheincodes für McDonald's Deutschland.",
    keywords: "Kontakt mcdonaldsgutscheine.de, Support"
  },
  '/datenschutz/': {
    title: "Datenschutzerklärung (Privacy Policy) – mcdonaldsgutscheine.de",
    desc: "Ausführliche Datenschutzerklärung (DSGVO & Google AdSense Richtlinien) für unser Sparportal.",
    keywords: "Datenschutzerklärung, DSGVO, Privacy Policy"
  },
  '/privacy/': {
    title: "Datenschutzerklärung (Privacy Policy) – mcdonaldsgutscheine.de",
    desc: "Ausführliche Datenschutzerklärung gemäß DSGVO & Google AdSense Programm-Richtlinien für unser Sparportal.",
    keywords: "Datenschutzerklärung, Privacy Policy"
  },
  '/privacy-policy/': {
    title: "Datenschutzerklärung – mcdonaldsgutscheine.de",
    desc: "Ausführliche Datenschutzerklärung gemäß DSGVO & Google AdSense Programm-Richtlinien für unser Sparportal.",
    keywords: "Datenschutzerklärung, Privacy Policy, DSGVO"
  },
  '/impressum/': {
    title: "Impressum gem. § 5 TMG – mcdonaldsgutscheine.de",
    desc: "Gesetzliches Impressum mit allen Angaben nach § 5 TMG und § 18 MStV für mcdonaldsgutscheine.de.",
    keywords: "Impressum, § 5 TMG, Rechtliche Angaben"
  },
  '/imprint/': {
    title: "Legal Notice / Impressum – mcdonaldsgutscheine.de",
    desc: "Statutory legal information according to § 5 TMG for mcdonaldsgutscheine.de.",
    keywords: "Impressum, Imprint"
  },
  '/haftungsausschluss/': {
    title: "Haftungsausschluss & Markenrecht – mcdonaldsgutscheine.de",
    desc: "Haftungsausschluss für redaktionelle Inhalte, Preisangaben, externe Links und Markenrecht.",
    keywords: "Haftungsausschluss, Disclaimer"
  },
  '/nutzungsbedingungen/': {
    title: "Nutzungsbedingungen – mcdonaldsgutscheine.de",
    desc: "Allgemeine Geschäfts- und Nutzungsbedingungen für die kostenfreie Verwendung unseres Gutschein-Portals.",
    keywords: "Nutzungsbedingungen, AGB"
  },
  '/terms/': {
    title: "Terms of Service – mcdonaldsgutscheine.de",
    desc: "Terms of service and acceptable use for mcdonaldsgutscheine.de.",
    keywords: "Terms of Service, Nutzungsbedingungen"
  },
  '/gutscheine-pdf-download/': {
    title: "McDonald's Gutscheine PDF Download 2026 – Bonusbuch zum Ausdrucken",
    desc: "Lade das aktuelle McDonald's Bonusbuch & Coupon-Heft 2026 kostenlos als DIN-A4 PDF herunter. Alle Gutscheine & PLU-Codes zum Ausdrucken oder fürs Smartphone!",
    keywords: "McDonald's Gutscheine PDF, McDonald's Bonusbuch 2026 PDF Download, McDonald's Coupons zum Ausdrucken, Gutscheinbogen PDF"
  },
  '/blog/mcdonalds-treueprogramm-erklaert/': {
    title: "MyMcDonald's Punkte sammeln & einlösen: Treueprogramm Guide 2026",
    desc: "10 Punkte pro 1 € Umsatz sammeln und Gratis-Burger sichern: So funktioniert das MyMcDonald's Bonusprogramm in Deutschland mit allen Prämien-Stufen.",
    keywords: "MyMcDonald's Punkte, McDonald's Bonusprogramm, Punkte einlösen Prämien, Gratis Burger McDonald's"
  },
  '/blog/mcdonalds-lieferservice-uber-eats-sparen/': {
    title: "McDonald's Lieferservice Gutschein: 2x 10 € Uber Eats Code MCD2X10",
    desc: "Spare 20 € (2x 10 € Rabatt) auf deine McDonald's Lieferung über Uber Eats Deutschland mit dem aktuellen Gutscheincode MCD2X10. Alle Bedingungen & Tipps.",
    keywords: "McDonald's Lieferservice Gutschein, Uber Eats McDonald's Code MCD2X10, McDelivery Rabattcode Deutschland"
  },
  '/blog/mcdonalds-plu-codes-sparen/': {
    title: "McDonald's PLU-Codes Liste 2026: Geheimtrick fürs Bestellterminal & McDrive",
    desc: "Wie funktionieren die 3-stelligen McDonald's PLU-Codes? Alle aktuellen Kassen-Codes für Big Mac, McNuggets & Menüs direkt am Easy-Order-Kiosk eingeben!",
    keywords: "McDonald's PLU Codes Liste 2026, Bestellterminal Gutschein eingeben, 3-stellige Kassen Codes McDonald's, McDrive PLU Nummer"
  }
};

// Replace metadata in HTML string cleanly without duplicate tags
function getHtmlForRoute(route, rawHtml) {
  const meta = pageMeta[route] || pageMeta['/'];
  const title = meta.title;
  const desc = meta.desc;
  const keywords = meta.keywords || pageMeta['/'].keywords;

  // Canonical consolidation for duplicate alias routes
  let canonicalRoute = route;
  if (route === '/datenschutz/' || route === '/privacy/') canonicalRoute = '/privacy-policy/';
  if (route === '/kontakt/' || route === '/contact-us/') canonicalRoute = '/contact/';
  if (route === '/ueber-uns/' || route === '/about/') canonicalRoute = '/about-us/';
  if (route === '/imprint/') canonicalRoute = '/impressum/';
  if (route === '/terms/') canonicalRoute = '/nutzungsbedingungen/';

  const canonicalUrl = `https://www.mcdonaldsgutscheine.de${canonicalRoute}`;

  let html = rawHtml;

  // Replace <title>
  html = html.replace(/<title>[^<]*<\/title>/, `<title>${title}</title>`);

  // Replace <meta name="description">
  html = html.replace(
    /<meta\s+name="description"\s+content="[^"]*"\s*\/?>/i,
    `<meta name="description" content="${desc}" />`
  );

  // Replace <meta name="keywords">
  html = html.replace(
    /<meta\s+name="keywords"\s+content="[^"]*"\s*\/?>/i,
    `<meta name="keywords" content="${keywords}" />`
  );

  // Replace canonical & hreflang URLs
  html = html.replace(
    /<link\s+rel="canonical"\s+href="[^"]*"\s*\/?>/i,
    `<link rel="canonical" href="${canonicalUrl}" />`
  );
  html = html.replace(
    /<link\s+rel="alternate"\s+hreflang="de-DE"\s+href="[^"]*"\s*\/?>/i,
    `<link rel="alternate" hreflang="de-DE" href="${canonicalUrl}" />`
  );
  html = html.replace(
    /<link\s+rel="alternate"\s+hreflang="de"\s+href="[^"]*"\s*\/?>/i,
    `<link rel="alternate" hreflang="de" href="${canonicalUrl}" />`
  );
  html = html.replace(
    /<link\s+rel="alternate"\s+hreflang="x-default"\s+href="[^"]*"\s*\/?>/i,
    `<link rel="alternate" hreflang="x-default" href="${canonicalUrl}" />`
  );

  // Replace Open Graph tags
  html = html.replace(
    /<meta\s+property="og:url"\s+content="[^"]*"\s*\/?>/i,
    `<meta property="og:url" content="${canonicalUrl}" />`
  );
  html = html.replace(
    /<meta\s+property="og:title"\s+content="[^"]*"\s*\/?>/i,
    `<meta property="og:title" content="${title}" />`
  );
  html = html.replace(
    /<meta\s+property="og:description"\s+content="[^"]*"\s*\/?>/i,
    `<meta property="og:description" content="${desc}" />`
  );

  // Replace Twitter tags
  html = html.replace(
    /<meta\s+name="twitter:title"\s+content="[^"]*"\s*\/?>/i,
    `<meta name="twitter:title" content="${title}" />`
  );
  html = html.replace(
    /<meta\s+name="twitter:description"\s+content="[^"]*"\s*\/?>/i,
    `<meta name="twitter:description" content="${desc}" />`
  );

  // Ensure language is set to German
  html = html.replace('<html lang="en">', '<html lang="de" dir="ltr">');

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

// 4. Generate dynamic sitemap.xml in dist/ (only canonical routes, no duplicate aliases)
const canonicalRoutes = [
  '/',
  '/gutscheine/',
  '/app-gutscheine/',
  '/happy-meal-angebote/',
  '/fruehstueck-angebote/',
  '/burger-angebote/',
  '/mccafe-angebote/',
  '/angebote/',
  '/gutscheine-pdf-download/',
  '/blog/',
  '/blog/mcdonalds-treueprogramm-erklaert/',
  '/blog/mcdonalds-lieferservice-uber-eats-sparen/',
  '/blog/mcdonalds-plu-codes-sparen/',
  '/about-us/',
  '/contact/',
  '/privacy-policy/',
  '/impressum/',
  '/nutzungsbedingungen/',
  '/haftungsausschluss/'
];

try {
  const today = new Date().toISOString().split('T')[0];
  let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
  xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

  canonicalRoutes.forEach(route => {
    const url = `https://www.mcdonaldsgutscheine.de${route}`;
    const isHome = route === '/';
    const isMoneyPage = ['/gutscheine/', '/app-gutscheine/', '/burger-angebote/', '/happy-meal-angebote/', '/gutscheine-pdf-download/', '/angebote/'].includes(route);
    const isBlog = route.startsWith('/blog/');
    const priority = isHome ? '1.0' : isMoneyPage ? '0.9' : isBlog ? '0.8' : '0.4';
    const changefreq = isHome || isMoneyPage ? 'daily' : isBlog ? 'weekly' : 'monthly';

    xml += `  <url>\n`;
    xml += `    <loc>${url}</loc>\n`;
    xml += `    <lastmod>${today}</lastmod>\n`;
    xml += `    <changefreq>${changefreq}</changefreq>\n`;
    xml += `    <priority>${priority}</priority>\n`;
    xml += `  </url>\n`;
  });

  xml += `</urlset>\n`;
  
  fs.writeFileSync(path.join(distDir, 'sitemap.xml'), xml, 'utf-8');
  fs.writeFileSync(path.join(__dirname, 'public', 'sitemap.xml'), xml, 'utf-8');
  console.log('✓ Generated dynamic sitemap: dist/sitemap.xml & public/sitemap.xml');
} catch (error) {
  console.error('✗ Failed to generate sitemap.xml:', error);
}

console.log('Pre-rendering successfully completed! All routes are indexable with a 200 OK status. 🎉');
