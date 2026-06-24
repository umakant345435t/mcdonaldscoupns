import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import CookieBanner from './components/CookieBanner';
import CouponCard from './components/CouponCard';
import Home from './pages/Home';
import CategoryPage from './pages/CategoryPage';
import Blog from './pages/Blog';
import Legal from './pages/Legal';
import { Coupon } from './types';
import { McDonaldCoupons } from './data/coupons';

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

  // Dynamic SEO Page Meta title write
  useEffect(() => {
    let title = "McDonald's Gutscheine 2026 – Aktuelle Coupons & Angebote";
    let desc = "Spare clever bei Burgern, Menüs und Desserts.";

    if (currentPath === '/') {
      title = "McDonald's Gutscheine 2026 – Aktuelle Coupons & Angebote";
      desc = "Finde aktuelle McDonald's Gutscheine, Coupons und Angebote. Spare bei Burgern, Menüs, McFlurry und mehr.";
    } else if (currentPath === '/gutscheine/') {
      title = "McDonald's Gutscheine 2026 – Alle Coupons & Sparcodes";
      desc = "Vollständige Übersicht aller einlösbaren McDonald's Gutscheincodes in Deutschland.";
    } else if (currentPath === '/app-gutscheine/') {
      title = "McDonald's App Coupons – Exklusive Smartphone-Rabatte";
      desc = "Spare bis zu 50% mit exklusiven App-Coupons und unserem MyMcDonald's Treuepunkte Guide.";
    } else if (currentPath === '/happy-meal-angebote/') {
      title = "Happy Meal Angebote & Spielzeuge – Familientarife";
      desc = "Entdecke das Happy Meal mit günstigen Kombi-Vorteilen und Preisnachlässen für Familien.";
    } else if (currentPath === '/burger-angebote/') {
      title = "McDonald's Burger Angebote & Coupons im Einzelkauf";
      desc = "Spare bei Big Mac, Double Cheeseburger, Royal Käse und weiteren Klassikern.";
    } else if (currentPath === '/fruehstueck-angebote/') {
      title = "McDonald's Frühstück Angebote (Morgen-Gutscheine)";
      desc = "Günstige Heißgetränke und McMuffins vor 10:30 Uhr einlösen.";
    } else if (currentPath === '/mccafe-angebote/') {
      title = "McCafé Angebote, Kuchen & Heißgetränke Gutscheine";
      desc = "Kombipreise für Muffins, Cookies, Donuts und aromatischen Café Latte Macchiato.";
    } else if (currentPath === '/angebote/') {
      title = "McDonald's Angebote & Rabattaktionen diese Woche";
      desc = "Wöchentliche Sonderaktionen, Ostercodes und Rabattpyramiden.";
    } else if (currentPath.startsWith('/blog/')) {
      title = "Sparportal Blog – Expertenratgeber für McDonald's Deutschland";
      desc = "Lese echte Praxistests und nützliche Hacks, um bei der Bestellung Geld zu sparen.";
    } else if (currentPath === '/ueber-uns/') {
      title = "Über Uns – mcdonaldsgutscheine.de";
    } else if (currentPath === '/kontakt/') {
      title = "Support & Kontaktformular – mcdonaldsgutscheine.de";
    } else if (currentPath === '/impressum/') {
      title = "Impressum gem. §5 TMG – mcdonaldsgutscheine.de";
    } else if (currentPath === '/datenschutz/') {
      title = "Datenschutzerklärung (DSGVO & AdSense) – mcdonaldsgutscheine.de";
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
    if (currentPath === '/') {
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
      currentPath === '/gutscheine/' ||
      currentPath === '/app-gutscheine/' ||
      currentPath === '/happy-meal-angebote/' ||
      currentPath === '/fruehstueck-angebote/' ||
      currentPath === '/burger-angebote/' ||
      currentPath === '/mccafe-angebote/' ||
      currentPath === '/angebote/'
    ) {
      const slug = currentPath.replace(/^\//, '').replace(/\/$/, '');
      return (
        <CategoryPage
          categorySlug={slug}
          onAddToCalc={handleAddToCalc}
          setPath={setPath}
        />
      );
    }

    // Blog Routes
    if (currentPath === '/blog/' || currentPath.startsWith('/blog/')) {
      return <Blog currentPath={currentPath} setPath={setPath} />;
    }

    // Legal Routes
    if (currentPath === '/ueber-uns/') {
      return <Legal pageType="ueber-uns" setPath={setPath} />;
    }
    if (currentPath === '/kontakt/') {
      return <Legal pageType="kontakt" setPath={setPath} />;
    }
    if (currentPath === '/datenschutz/') {
      return <Legal pageType="datenschutz" setPath={setPath} />;
    }
    if (currentPath === '/impressum/') {
      return <Legal pageType="impressum" setPath={setPath} />;
    }
    if (currentPath === '/cookies/') {
      return <Legal pageType="cookies" setPath={setPath} />;
    }
    if (currentPath === '/haftungsausschluss/') {
      return <Legal pageType="haftungsausschluss" setPath={setPath} />;
    }
    if (currentPath === '/nutzungsbedingungen/') {
      return <Legal pageType="nutzungsbedingungen" setPath={setPath} />;
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
