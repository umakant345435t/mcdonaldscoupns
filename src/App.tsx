import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import CookieBanner from './components/CookieBanner';
import CouponCard from './components/CouponCard';
import Home from './pages/Home';
import CategoryPage from './pages/CategoryPage';
import Blog from './pages/Blog';
import Legal from './pages/Legal';
import NotFound from './pages/NotFound';
import PdfDownloads from './pages/PdfDownloads';
import { Coupon } from './types';
import { McDonaldCoupons } from './data/coupons';
import { BlogPosts } from './data/blog';

export default function App() {
  // Sync router state using path location
  const [currentPath, setCurrentPath] = useState<string>(() => {
    const path = window.location.pathname;
    return path || '/';
  });

  const [searchQuery, setSearchQuery] = useState('');

  // Spar-Rechner (Savings Calculator) Cart tray
  const [calcItems, setCalcItems] = useState<{ coupon: Coupon; quantity: number }[]>(() => {
    try {
      const saved = localStorage.getItem('spar-rechner-items');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Persist calc state on changes
  useEffect(() => {
    localStorage.setItem('spar-rechner-items', JSON.stringify(calcItems));
  }, [calcItems]);

  // Listen to popstate changes in browser to support native Back/Forward buttons and deep links!
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname || '/');
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Update path when path changed programmatically
  const setPath = (path: string) => {
    // Clear search query on page change for neat UX
    setSearchQuery('');
    
    // Normalize path to always start with /
    let targetPath = path;
    if (!targetPath.startsWith('/')) {
      targetPath = '/' + targetPath;
    }
    
    window.history.pushState(null, '', targetPath);
    setCurrentPath(targetPath);
  };

  // Canonical slug redirection (old German slugs redirect to new English slugs requested by user)
  useEffect(() => {
    const norm = currentPath.endsWith('/') ? currentPath : `${currentPath}/`;
    if (norm === '/datenschutz/' || norm === '/privacy/') {
      window.history.replaceState(null, '', '/privacy-policy/');
      setCurrentPath('/privacy-policy/');
    } else if (norm === '/kontakt/' || norm === '/contact-us/') {
      window.history.replaceState(null, '', '/contact/');
      setCurrentPath('/contact/');
    } else if (norm === '/ueber-uns/' || norm === '/about/') {
      window.history.replaceState(null, '', '/about-us/');
      setCurrentPath('/about-us/');
    }
  }, [currentPath]);

  // Dynamic SEO Page Meta title & Canonical write
  useEffect(() => {
    let title = "McDonald's Gutscheine 2026 – Aktuelle Coupons & Angebote Deutschland";
    let desc = "Tagesaktuelle McDonald's Gutscheine, Coupons und Angebote für Deutschland. Spare bei Burgern, Menüs, McFlurry & mit Uber Eats Liefercode MCD2X10.";

    const norm = currentPath.endsWith('/') ? currentPath : `${currentPath}/`;

    if (norm === '/' || norm === '/index.html/') {
      title = "McDonald's Gutscheine 2026 – Aktuelle Coupons & Angebote Deutschland";
      desc = "Finde aktuelle McDonald's Gutscheine, Coupons und Angebote für Deutschland. Spare bei Burgern, Menüs, McFlurry und mit Uber Eats Code MCD2X10.";
    } else if (norm === '/gutscheine/') {
      title = "McDonald's Gutscheine 2026 – Alle Coupons & Sparcodes";
      desc = "Vollständige Übersicht aller einlösbaren McDonald's Gutscheincodes und Kassen-PLUs in Deutschland.";
    } else if (norm === '/app-gutscheine/') {
      title = "McDonald's App Coupons – Exklusive Smartphone-Rabatte";
      desc = "Spare bis zu 50% mit exklusiven App-Coupons und unserem MyMcDonald's Treuepunkte Guide.";
    } else if (norm === '/happy-meal-angebote/') {
      title = "Happy Meal Angebote & Spielzeuge – Familientarife";
      desc = "Entdecke das Happy Meal mit günstigen Kombi-Vorteilen und Preisnachlässen für Familien.";
    } else if (norm === '/burger-angebote/') {
      title = "McDonald's Burger Angebote & Coupons im Einzelkauf";
      desc = "Spare bei Big Mac, Double Cheeseburger, Royal Käse und weiteren Klassikern.";
    } else if (norm === '/fruehstueck-angebote/') {
      title = "McDonald's Frühstück Angebote (Morgen-Gutscheine)";
      desc = "Günstige Heißgetränke und McMuffins vor 10:30 Uhr einlösen.";
    } else if (norm === '/mccafe-angebote/') {
      title = "McCafé Angebote, Kuchen & Heißgetränke Gutscheine";
      desc = "Kombipreise für Muffins, Cookies, Donuts und aromatischen Café Latte Macchiato.";
    } else if (norm === '/angebote/') {
      title = "McDonald's Angebote & Rabattaktionen diese Woche";
      desc = "Wöchentliche Sonderaktionen, Ostercodes und Rabattpyramiden.";
    } else if (norm.startsWith('/blog/')) {
      title = "Sparportal Blog – Expertenratgeber für McDonald's Deutschland";
      desc = "Lese echte Praxistests und nützliche Hacks, um bei der McDonald's Bestellung Geld zu sparen.";
    } else if (norm === '/about-us/' || norm === '/ueber-uns/' || norm === '/about/') {
      title = "Über Uns – mcdonaldsgutscheine.de";
      desc = "Über mcdonaldsgutscheine.de: Unabhängiges Verbraucherportal und Spartipps für McDonald's Deutschland.";
    } else if (norm === '/contact/' || norm === '/kontakt/' || norm === '/contact-us/') {
      title = "Kontakt & Support – mcdonaldsgutscheine.de";
      desc = "Kontaktiere unser Redaktionsteam bei Fragen, Feedback oder Hinweisen zu neuen Gutscheincodes für McDonald's Deutschland.";
    } else if (norm === '/impressum/' || norm === '/imprint/') {
      title = "Impressum gem. § 5 TMG – mcdonaldsgutscheine.de";
      desc = "Gesetzliches Impressum mit allen Angaben nach § 5 TMG für mcdonaldsgutscheine.de.";
    } else if (norm === '/privacy-policy/' || norm === '/datenschutz/' || norm === '/privacy/') {
      title = "Datenschutzerklärung – mcdonaldsgutscheine.de";
      desc = "Ausführliche Datenschutzerklärung (DSGVO & Google AdSense Programm-Richtlinien) für unser Sparportal.";
    } else if (norm === '/cookies/') {
      title = "Cookie-Richtlinie – mcdonaldsgutscheine.de";
      desc = "Informationen über die Verwendung von Cookies und Werbeeinstellungen.";
    } else if (norm === '/gutscheine-pdf-download/') {
      title = "McDonald's Gutscheine PDF-Download & Bonusbuch 2026";
      desc = "Lade das offizielle McDonald's Bonusbuch & Coupon-Heft 2026 (A4 PDF) herunter und spare offline!";
    }

    document.title = title;

    // Inject dynamic meta description if existing, or overwrite
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', desc);

    // Compute canonical path
    let canonicalPath = norm;
    if (norm === '/datenschutz/' || norm === '/privacy/') canonicalPath = '/privacy-policy/';
    if (norm === '/kontakt/' || norm === '/contact-us/') canonicalPath = '/contact/';
    if (norm === '/ueber-uns/' || norm === '/about/') canonicalPath = '/about-us/';
    if (norm === '/imprint/') canonicalPath = '/impressum/';

    // Inject or update canonical link
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', `https://www.mcdonaldsgutscheine.de${canonicalPath}`);
  }, [currentPath]);

  // Shopping cart helper logic for Calculator tray
  const handleAddToCalc = (coupon: Coupon) => {
    setCalcItems((prev) => {
      const existing = prev.find((item) => item.coupon.id === coupon.id);
      if (existing) {
        return prev.map((item) =>
          item.coupon.id === coupon.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { coupon, quantity: 1 }];
    });

    // Scroll to the calculator block on home, or toast notice
    const calcEl = document.getElementById('spar-rechner-scroll-anchor');
    if (calcEl) {
      calcEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleRemoveFromCalc = (id: string) => {
    setCalcItems((prev) => prev.filter((item) => item.coupon.id !== id));
  };

  const handleUpdateCalcQty = (id: string, qty: number) => {
    if (qty <= 0) {
      handleRemoveFromCalc(id);
      return;
    }
    setCalcItems((prev) =>
      prev.map((item) =>
        item.coupon.id === id ? { ...item, quantity: qty } : item
      )
    );
  };

  const handleClearCalc = () => {
    setCalcItems([]);
  };

  // Determine active view to render
  const renderPage = () => {
    // Validate routing first
    const isPathValid = (path: string): boolean => {
      const normalized = path.endsWith('/') ? path : `${path}/`;
      
      const staticValidPaths = [
        '/',
        '/index.html',
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
        '/cookies/',
        '/haftungsausschluss/',
        '/disclaimer/',
        '/nutzungsbedingungen/',
        '/terms/',
        '/gutscheine-pdf-download/'
      ];

      if (staticValidPaths.includes(normalized) || staticValidPaths.includes(path)) {
        return true;
      }

      // Check dynamic blog posts
      if (path.startsWith('/blog/')) {
        const slug = path.replace('/blog/', '').replace(/\/$/, '');
        return BlogPosts.some(post => post.slug === slug);
      }

      return false;
    };

    if (!isPathValid(currentPath)) {
      return <NotFound setPath={setPath} />;
    }

    const norm = currentPath.endsWith('/') ? currentPath : `${currentPath}/`;

    // Check if we are viewing a search query
    if (searchQuery.trim().length > 0) {
      const searchLower = searchQuery.toLowerCase();
      const searchMatches = McDonaldCoupons.filter(
        (c) =>
          c.title.toLowerCase().includes(searchLower) ||
          c.description.toLowerCase().includes(searchLower) ||
          (c.code && c.code.toLowerCase().includes(searchLower))
      );

      return (
        <div className="font-sans text-gray-900 bg-gray-50/50 pb-16 min-h-screen">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
            <h1 className="text-2xl font-black text-gray-900">
              Suchergebnisse für: <span className="text-red-600">"{searchQuery}"</span>
            </h1>
            <p className="text-xs text-gray-400 mt-1">Gefundene Rabattvorteile: {searchMatches.length}</p>

            <div className="mt-8">
              {searchMatches.length === 0 ? (
                <div className="bg-white rounded-2xl border border-gray-100 py-16 text-center">
                  <p className="text-gray-500 font-bold">Keine Coupons mit diesem Suchbegriff gefunden.</p>
                  <button
                    onClick={() => setSearchQuery('')}
                    className="mt-4 px-4 py-2 bg-red-600 hover:bg-red-750 text-white rounded-xl text-xs font-bold transition-all"
                  >
                    Suche zurücksetzen
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {searchMatches.map((coupon) => (
                    <CouponCard
                      key={coupon.id}
                      coupon={coupon}
                      onAddToCalc={handleAddToCalc}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      );
    }

    // Standard Router selection
    if (norm === '/' || norm === '/index.html/') {
      return (
        <Home
          setPath={setPath}
          onAddToCalc={handleAddToCalc}
          calcItems={calcItems}
          onRemoveFromCalc={handleRemoveFromCalc}
          onUpdateCalcQty={handleUpdateCalcQty}
          onClearCalc={handleClearCalc}
        />
      );
    }

    // Category Routes
    if (
      norm === '/gutscheine/' ||
      norm === '/app-gutscheine/' ||
      norm === '/happy-meal-angebote/' ||
      norm === '/fruehstueck-angebote/' ||
      norm === '/burger-angebote/' ||
      norm === '/mccafe-angebote/' ||
      norm === '/angebote/'
    ) {
      const slug = norm.replace(/^\//, '').replace(/\/$/, '');
      return (
        <CategoryPage
          categorySlug={slug}
          onAddToCalc={handleAddToCalc}
          setPath={setPath}
        />
      );
    }

    // Blog Routes
    if (norm === '/blog/' || norm.startsWith('/blog/')) {
      return <Blog currentPath={currentPath} setPath={setPath} />;
    }

    // Legal Routes
    if (norm === '/about-us/' || norm === '/ueber-uns/' || norm === '/about/') {
      return <Legal pageType="about-us" setPath={setPath} />;
    }
    if (norm === '/contact/' || norm === '/kontakt/' || norm === '/contact-us/') {
      return <Legal pageType="contact" setPath={setPath} />;
    }
    if (norm === '/privacy-policy/' || norm === '/datenschutz/' || norm === '/privacy/') {
      return <Legal pageType="privacy-policy" setPath={setPath} />;
    }
    if (norm === '/impressum/' || norm === '/imprint/') {
      return <Legal pageType="impressum" setPath={setPath} />;
    }
    if (norm === '/cookies/') {
      return <Legal pageType="cookies" setPath={setPath} />;
    }
    if (norm === '/haftungsausschluss/' || norm === '/disclaimer/') {
      return <Legal pageType="haftungsausschluss" setPath={setPath} />;
    }
    if (norm === '/nutzungsbedingungen/' || norm === '/terms/') {
      return <Legal pageType="nutzungsbedingungen" setPath={setPath} />;
    }

    if (norm === '/gutscheine-pdf-download/') {
      return <PdfDownloads setPath={setPath} />;
    }

    // Catch-all SPA fallback: Home Page
    return (
      <Home
        setPath={setPath}
        onAddToCalc={handleAddToCalc}
        calcItems={calcItems}
        onRemoveFromCalc={handleRemoveFromCalc}
        onUpdateCalcQty={handleUpdateCalcQty}
        onClearCalc={handleClearCalc}
      />
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-between selection:bg-red-600 selection:text-white">
      {/* Dynamic Navigation Header */}
      <Header
        currentPath={currentPath}
        setPath={setPath}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      {/* Main Screen Layout Container */}
      <main className="flex-grow">
        {renderPage()}
      </main>

      {/* Dynamic Legal & Informative Footer */}
      <Footer setPath={setPath} currentPath={currentPath} />

      {/* DSGVO Consent manager popover */}
      <CookieBanner />
    </div>
  );
}
