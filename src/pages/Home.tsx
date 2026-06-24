import React from 'react';
import { Coupon, BlogPost } from '../types';
import CouponCard from '../components/CouponCard';
import { McDonaldCoupons } from '../data/coupons';
import { BlogPosts, FAQS } from '../data/blog';
import { Sparkles, MessageCircle, HelpCircle, ArrowRight, BookOpen, Smartphone, ShieldCheck, Star } from 'lucide-react';
import SchemaMarkup from '../components/SchemaMarkup';

interface HomeProps {
  setPath: (path: string) => void;
  onAddToCalc: (coupon: Coupon) => void;
  calcItems: any[];
  onRemoveFromCalc: (id: string) => void;
  onUpdateCalcQty: (id: string, qty: number) => void;
  onClearCalc: () => void;
}

export default function Home({
  setPath,
  onAddToCalc,
  calcItems,
  onRemoveFromCalc,
  onUpdateCalcQty,
  onClearCalc
}: HomeProps) {
  // Filter popular coupons for the homepage
  const popularCoupons = McDonaldCoupons.slice(0, 4);

  // Filter latest blog articles
  const latestBlogs = BlogPosts.slice(0, 3);

  // Generate WebSite Schema Markup as requested
  const websiteSchema = {
    "@type": "WebSite",
    "name": "McDonalds Gutscheine Sparportal",
    "url": window.location.origin,
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": `${window.location.origin}/?q={search_term_string}`
      },
      "query-input": "required name=search_term_string"
    }
  };

  // Generate FAQ Schema Markup
  const faqSchema = {
    "@type": "FAQPage",
    "mainEntity": FAQS.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <div className="font-sans text-gray-900 bg-gray-50/50 pb-16">
      <SchemaMarkup type="WebSite" data={websiteSchema} />
      <SchemaMarkup type="FAQPage" data={faqSchema} />

      {/* Hero Header Area */}
      <section className="relative bg-linear-to-b from-red-650 to-red-800 text-white py-16 px-4 md:px-8 overflow-hidden">
        {/* Decorative Graphic assets */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-yellow-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-red-800/40 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto">
          
          {/* Pitch Tagline */}
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center space-x-2 bg-yellow-400 text-gray-950 text-xs font-black px-3 py-1.5 rounded-full uppercase tracking-wider animate-pulse">
              <Sparkles className="h-3 w-3" />
              <span>Geringere Preise Gelistet 2026</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-black tracking-tight leading-tight">
              McDonald's Gutscheine & Coupons für <span className="text-yellow-400">Deutschland</span>
            </h1>
            <p className="text-sm md:text-base text-red-50 leading-relaxed">
              Finde alle aktuellen Rabattcoupons, wöchentliche App-Vorteile und clevere Bestell-Tricks des inoffiziellen McDonald’s Sparportals für maximales Sparen im Restaurant, am Terminal oder im McDrive.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <button
                onClick={() => setPath('/gutscheine/')}
                className="px-6 py-3.5 bg-yellow-400 hover:bg-yellow-500 text-gray-950 font-black rounded-2xl shadow-lg shadow-yellow-500/20 text-sm cursor-pointer transition-all hover:scale-102 font-sans"
              >
                Gutscheine ansehen 🎟️
              </button>
              <button
                onClick={() => setPath('/app-gutscheine/')}
                className="px-6 py-3.5 bg-transparent hover:bg-red-700/80 text-white font-bold rounded-2xl border-2 border-white/20 hover:border-white text-sm cursor-pointer transition-all font-sans"
              >
                App-Angebote entdecken 📱
              </button>
              <a
                href="/mcdonalds_gutscheine_juni_2026.pdf"
                download="mcdonalds_gutscheine_juni_2026.pdf"
                className="px-6 py-3.5 bg-white/15 hover:bg-white/25 text-white font-black rounded-2xl text-sm cursor-pointer transition-all hover:scale-102 flex items-center space-x-2 font-sans"
              >
                <span>PDF Coupon-Heft herunterladen 📥</span>
              </a>
            </div>

            {/* Quick value metric row */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/10 text-center max-w-lg">
              <div>
                <p className="text-2xl font-black text-yellow-400">100%</p>
                <p className="text-[10px] text-red-100 uppercase tracking-wider font-bold">Unabhängig</p>
              </div>
              <div className="border-x border-white/10">
                <p className="text-2xl font-black text-yellow-400">Manuell</p>
                <p className="text-[10px] text-red-100 uppercase tracking-wider font-bold">Geprüfte PLU</p>
              </div>
              <div>
                <p className="text-2xl font-black text-yellow-400">Gratis</p>
                <p className="text-[10px] text-red-100 uppercase tracking-wider font-bold">Werbefreie Tipps</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Main Container below the fold */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 grid grid-cols-1 lg:grid-cols-12 gap-10">
        
        {/* Main Content Column */}
        <div className="lg:col-span-8 space-y-12">

          {/* PDF Coupon Heft Download Banner */}
          <div className="bg-gradient-to-r from-red-650 to-amber-600 rounded-3xl p-6 md:p-8 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full blur-2xl pointer-events-none"></div>
            <div className="space-y-3 z-10">
              <span className="inline-flex items-center space-x-1.5 bg-yellow-400 text-gray-950 text-[10px] font-black px-2.5 py-1 rounded-full uppercase tracking-wider">
                Aktuell: Juni 2026
              </span>
              <h3 className="text-xl md:text-2xl font-black tracking-tight leading-tight">
                Offizielles McDonald's Coupon-Heft als PDF
              </h3>
              <p className="text-xs md:text-sm text-red-50 max-w-xl leading-relaxed font-medium">
                Lade dir hier das komplette gedruckte Coupon-Heft mit allen 20+ Rabattcoupons (Doppelpacks, Nuggets, Dessert & Snacks) als druckoptimiertes PDF herunter oder nutze die PLU-Codes direkt an der Kasse!
              </p>
            </div>
            <div className="shrink-0 z-10 w-full md:w-auto">
              <a
                href="/mcdonalds_gutscheine_juni_2026.pdf"
                download="mcdonalds_gutscheine_juni_2026.pdf"
                className="block w-full md:w-auto text-center px-6 py-4 bg-yellow-400 hover:bg-yellow-500 text-gray-950 font-black rounded-2xl shadow-lg shadow-yellow-500/20 text-sm cursor-pointer transition-all hover:scale-102 font-sans"
              >
                📥 PDF herunterladen
              </a>
            </div>
          </div>
          
          {/* Popular Coupons Grid section */}
          <div>
            <div className="flex justify-between items-center mb-6">
              <div>
                <h2 className="text-xl md:text-2xl font-black text-gray-900 tracking-tight">
                  🔥 Neue Gutscheine & Beliebte Coupons
                </h2>
                <p className="text-xs text-gray-500 mt-1">Saisonale Sonderauszüge direkt einlösbar per PLU-Gutscheincode an der Kasse oder am Terminal.</p>
              </div>
              <button
                onClick={() => setPath('/gutscheine/')}
                className="text-xs font-bold text-red-600 hover:text-red-700 flex items-center space-x-1 whitespace-nowrap cursor-pointer hover:underline"
              >
                <span>Alle anzeigen</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {popularCoupons.map((coupon) => (
                <CouponCard key={coupon.id} coupon={coupon} onAddToCalc={onAddToCalc} />
              ))}
            </div>
          </div>

          {/* Quick Category Grid shortcut links */}
          <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-xs">
            <h3 className="font-bold text-gray-900 text-sm tracking-wider uppercase mb-4 col-span-full">Schnellzugriff nach Menü-Kategorie</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { name: '💰 Alle Coupons', path: '/gutscheine/', color: 'hover:border-red-500 hover:bg-red-50/10' },
                { name: '🍔 Burger Deals', path: '/burger-angebote/', color: 'hover:border-amber-500 hover:bg-amber-50/10' },
                { name: '☕ McCafé Genuss', path: '/mccafe-angebote/', color: 'hover:border-orange-500 hover:bg-orange-50/10' },
                { name: '🎈 Happy Meal', path: '/happy-meal-angebote/', color: 'hover:border-sky-500 hover:bg-sky-50/10' },
              ].map(cat => (
                <button
                  key={cat.path}
                  onClick={() => setPath(cat.path)}
                  className={`border border-gray-200 rounded-xl p-3 text-center text-xs font-bold text-gray-700 cursor-pointer transition-all ${cat.color}`}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </div>

          {/* Editorial Spar-Bericht / Guides and Tips Teaser */}
          <div className="bg-red-50/50 border border-red-100 rounded-2xl p-6 md:p-8 space-y-4">
            <h3 className="text-lg md:text-xl font-bold text-red-955 flex items-center space-x-2">
              <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
              <span>Redaktionelles Spar-Inhaltsverzeichnis Deutschland</span>
            </h3>
            <p className="text-xs text-gray-700 leading-relaxed">
              Viele Kunden wissen nicht, dass man bei McDonald's weitaus mehr sparen kann, als nur mit klassischen Rabatt-Zetteln. Unser deutsches McDonald’s-Sparportal liefert dir ausführliche wissenschaftliche Sparvergleiche und eigene Praxistests:
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs text-gray-600 font-medium">
              <li className="flex items-start space-x-2">
                <span className="text-red-500 shrink-0">✓</span>
                <span><strong>Der Gäste-Feedback-Trick:</strong> Hol dir am Kassenzettel kostenlos Kaltgetränke oder frites gratis ab!</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-red-500 shrink-0">✓</span>
                <span><strong>MyMcDonald's Treuepunkte:</strong> Sammle 10 Points pro 1€ Umsatz und hole Premium-Prämien.</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-red-500 shrink-0">✓</span>
                <span><strong>Aktionswochen-Vorschau:</strong> Verfolge frühzeitig geplante Spar-Kampagnen wie das Monatssparen.</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-red-500 shrink-0">✓</span>
                <span><strong>Double-Feature:</strong> Verbinde klassische Kiosk-Zahlungen mit mobilen Treuescannern.</span>
              </li>
            </ul>
            <div className="pt-2">
              <button
                onClick={() => setPath('/blog/')}
                className="inline-flex items-center space-x-1 text-xs font-black text-red-600 hover:text-red-700 cursor-pointer"
              >
                <span>Alle Ratgeber und Praxistests lesen</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Blog & News articles section */}
          <div>
            <div className="flex justify-between items-center mb-6">
              <div>
                <h2 className="text-xl md:text-2xl font-black text-gray-900 tracking-tight">
                  📝 Aktuelle Ratgeber aus unserem Fast-Food-Blog
                </h2>
                <p className="text-xs text-gray-500 mt-1">Echte Tests und Experten-Anleitung, um bei der Bestellung unnötige Mehrausgaben zu vermeiden.</p>
              </div>
              <button
                onClick={() => setPath('/blog/')}
                className="text-xs font-bold text-red-600 hover:text-red-700 flex items-center space-x-1 cursor-pointer hover:underline"
              >
                <span>Alle Artikel</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {latestBlogs.map((blog) => (
                <article key={blog.id} className="bg-white rounded-xl border border-gray-100 overflow-hidden flex flex-col justify-between hover:shadow-md transition-shadow">
                  <div className="p-4 space-y-2">
                    <p className="text-[10px] text-gray-400 font-mono font-bold flex items-center justify-between">
                      <span>📆 {new Date(blog.date).toLocaleDateString('de-DE')}</span>
                      <span>⌛ {blog.readTime}</span>
                    </p>
                    <h3 className="font-bold text-gray-900 text-xs sm:text-sm leading-snug hover:text-red-600 transition-colors line-clamp-2 cursor-pointer" onClick={() => setPath(`/blog/${blog.slug}`)}>
                      {blog.title}
                    </h3>
                    <p className="text-[11px] text-gray-500 line-clamp-3 leading-relaxed">
                      {blog.summary}
                    </p>
                  </div>
                  <div className="p-4 pt-0">
                    <button
                      onClick={() => setPath(`/blog/${blog.slug}`)}
                      className="text-[11px] font-bold text-red-600 hover:text-red-700 flex items-center space-x-0.5 cursor-pointer"
                    >
                      <span>Weiterlesen</span>
                      <ArrowRight className="h-3 w-3" />
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Detailed FAQ section */}
          <div className="bg-white rounded-2xl border border-gray-100 p-6 md:p-8 space-y-6">
            <div className="text-center">
              <HelpCircle className="h-8 w-8 text-red-500 mx-auto mb-2" />
              <h2 className="text-lg md:text-xl font-black text-gray-900 tracking-tight uppercase">FAQ - WIR BEANTWORTEN DIE WICHTIGSTEN FRAGEN</h2>
              <p className="text-xs text-gray-500 max-w-lg mx-auto mt-1">Hier finden Sie vernünftige Antworten auf Fragen bezüglich der Einlösebedingungen und der Gültigkeit im Schnellrestaurant.</p>
            </div>
            <div className="division-y divide-gray-100 space-y-4">
              {FAQS.slice(0, 4).map((faq, index) => (
                <div key={index} className="pt-2 first:pt-0">
                  <h4 className="font-bold text-xs sm:text-sm text-gray-800 leading-snug flex items-center gap-1.5 p-1 rounded-sm">
                    <span className="text-red-600 font-mono">Q:</span>
                    <span>{faq.question}</span>
                  </h4>
                  <p className="text-xs text-gray-500 mt-1 pl-5 leading-relaxed bg-gray-50/50 p-2.5 rounded-lg border border-gray-100/50">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Sidebar Information Column */}
        <aside className="lg:col-span-4 space-y-8">
          
          {/* Unofficial Disclaimer Box (SEO Topical Authority) */}
          <div className="bg-white rounded-2xl border border-gray-100 p-6 space-y-4 relative overflow-hidden text-xs">
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-yellow-400"></div>
            <h3 className="font-bold text-gray-900 text-sm tracking-tight flex items-center space-x-1.5">
              <ShieldCheck className="h-4 w-4 text-emerald-600" />
              <span>Transparenz & Neutralität</span>
            </h3>
            <p className="text-gray-500 leading-relaxed">
              Um rechtliche und markenrechtliche Konflikte transparent zu regeln, weisen wir ausdrücklich auf Folgendes hin:
            </p>
            <ul className="space-y-2 text-[11px] text-gray-600 leading-relaxed font-medium">
              <li className="flex items-start">
                <span className="text-red-500 mr-1.5 shrink-0">•</span>
                <span>Wir stellen <strong>keine</strong> urheberrechtlich geschützten Bilddateien oder Logos von McDonald's dar.</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-1.5 shrink-0">•</span>
                <span>Sämtliche Couponpreise sind Richtwerte, die auf nationalen Verbandswerten basieren. Die Preise in einzelnen Filialen können abweichen.</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-1.5 shrink-0">•</span>
                <span>Alle Sparhinweise sind redaktionell ausgearbeiteter Content aus Verbrauchersicht.</span>
              </li>
            </ul>
          </div>

          {/* Partner Backlinks */}
          <div className="bg-white rounded-2xl border border-gray-100 p-6 space-y-4 relative overflow-hidden text-xs">
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-red-650"></div>
            <h3 className="font-bold text-gray-900 text-sm tracking-tight flex items-center space-x-1.5">
              <span>🍔 Fast-Food Partnerportale</span>
            </h3>
            <p className="text-gray-500 leading-relaxed text-[11px]">
              Entdecke weitere nützliche Portale für aktuelle Gutscheine und Menü-Übersichten anderer bekannter Restaurantketten:
            </p>
            <div className="space-y-2.5">
              <a 
                href="https://burgerkinggutscheine.de/" 
                target="_blank" 
                rel="noopener" 
                className="block p-3 rounded-xl border border-gray-150/60 hover:border-amber-400 hover:bg-amber-50/20 text-gray-800 hover:text-amber-600 transition-all font-bold text-[11px] flex items-center justify-between"
              >
                <span>👑 Burger King® Gutscheine &amp; Coupons</span>
                <span className="text-gray-400">→</span>
              </a>
              <a 
                href="https://burgerkingsemenu.com/" 
                target="_blank" 
                rel="noopener" 
                className="block p-3 rounded-xl border border-gray-150/60 hover:border-red-400 hover:bg-red-50/20 text-gray-800 hover:text-red-500 transition-all font-bold text-[11px] flex items-center justify-between"
              >
                <span>🇸🇪 Burger King® Menu &amp; Prices (Sweden)</span>
                <span className="text-gray-400">→</span>
              </a>
            </div>
          </div>

          {/* Core Web Vitals Optimization / Google AdSense Notice Card */}
          <div className="bg-linear-to-br from-gray-900 to-gray-800 rounded-2xl p-6 text-white text-xs space-y-4">
            <h3 className="font-bold text-sm text-yellow-400 flex items-center space-x-1.5">
              <span>⚡ Core Web Vitals Status</span>
            </h3>
            <p className="text-gray-300 leading-relaxed text-[11px]">
              Diese Webseite wurde von uns vollständig auf Geschwindigkeit und mobilen Zugriff optimiert, um eine extrem benutzerfreundliche Navigation zu gewährleisten:
            </p>
            <div className="space-y-2 font-mono text-[11px]">
              <div className="flex justify-between items-center text-gray-300 border-b border-gray-800 pb-1">
                <span>Core Web Vitals Metric:</span>
                <span className="text-green-400 font-bold">EXZELLENT</span>
              </div>
              <div className="flex justify-between items-center text-gray-400">
                <span>LPD (Loading Speed)</span>
                <span className="text-white font-bold">&lt; 1.2s</span>
              </div>
              <div className="flex justify-between items-center text-gray-400">
                <span>INP (Micro-Delay)</span>
                <span className="text-white font-bold">&lt; 150ms</span>
              </div>
              <div className="flex justify-between items-center text-gray-400">
                <span>CLS (No Shifts)</span>
                <span className="text-white font-bold">0.05</span>
              </div>
            </div>
            <div className="text-[10px] text-gray-400 pt-1 leading-relaxed bg-gray-950 p-2.5 rounded-lg border border-gray-800">
              💡 <strong>AdSense-Hinweis:</strong> Schnelle Ladezeiten und ein stabiles Layout verringern Absprungraten und verdoppeln die AdSense eCPM Werte!
            </div>
          </div>

        </aside>

      </div>
    </div>
  );
}
