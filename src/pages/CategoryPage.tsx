import React, { useState, useMemo } from 'react';
import { Coupon } from '../types';
import CouponCard from '../components/CouponCard';
import { McDonaldCoupons } from '../data/coupons';
import { Tag, Sparkles, Filter, CreditCard, ChevronRight, HelpCircle } from 'lucide-react';
import SchemaMarkup from '../components/SchemaMarkup';

interface CategoryPageProps {
  categorySlug: string; // e.g. 'gutscheine', 'angebote', 'app-gutscheine', 'happy-meal-angebote', etc.
  onAddToCalc: (coupon: Coupon) => void;
  setPath: (path: string) => void;
}

export default function CategoryPage({ categorySlug, onAddToCalc, setPath }: CategoryPageProps) {
  const [filterVerified, setFilterVerified] = useState(false);
  const [sortBy, setSortBy] = useState<'default' | 'price-asc' | 'price-desc' | 'popular'>('default');

  // Map slugs to standard data model categories
  const mappedCategory = useMemo(() => {
    switch (categorySlug) {
      case 'gutscheine': return 'all';
      case 'angebote': return 'gutscheine'; // All coupon offers
      case 'app-gutscheine': return 'app';
      case 'happy-meal-angebote': return 'happy';
      case 'fruehstueck-angebote': return 'fruehstueck';
      case 'burger-angebote': return 'burger';
      case 'mccafe-angebote': return 'mccafe';
      default: return 'all';
    }
  }, [categorySlug]);

  // Page Metas & Redaktional descriptions depending on Category URL block
  const pageMeta = useMemo(() => {
    const meta: { title: string; subtitle: string; description: string; longText: string } = {
      title: "McDonald's Gutscheine 2026 – Aktuelle Coupons & Angebote",
      subtitle: "Die größte Übersicht aller Rabatte für Burger, Menüs, Fritten und Desserts.",
      description: "Finde aktuelle McDonald's Gutscheine, Coupons und Angebote. Spare bei Burgern, Menüs, McFlurry und mehr mit den neuesten Rabatten.",
      longText: "Hier findest du eine vollständige Zusammenfassung aller derzeit bekannten McDonald’s Gutscheine für deine Filialbestellungen oder den McDrive in Deutschland. Fast täglich prüfen wir die Gültigkeit der PLU-Nummern und korrigieren fehlerhafte Einträge."
    };

    if (categorySlug === 'app-gutscheine') {
      meta.title = "McDonald's App Gutscheine & Coupons (MyMcDonald's)";
      meta.subtitle = "Hochexklusive Rabatte, die ausschließlich digital am Smartphone eingelöst werden können.";
      meta.description = "Aktuelle McDonald's App Coupons. Entdecke Rabatte von bis zu 50% und profitiere von unserem Treuepunkte-Prämien Guide.";
      meta.longText = "Die MyMcDonald’s App ist die digitale Ergänzung zum Papiergutschein. Die hier gesammelten Coupons sind meist personalisiert oder regional beschränkt. Um diese einzulösen, musst du den Coupon vorab in deiner offiziellen App aktivieren und den Scancode am Bestell-Kiosk vorlegen.";
    } else if (categorySlug === 'happy-meal-angebote') {
      meta.title = "Happy Meal Angebote & aktuelle Spielzeuge 2026";
      meta.subtitle = "Günstige Kombinationen für Familien, inklusive Spielzeug oder Leselektüre.";
      meta.description = "Entdecke das Happy Meal mit günstigen Kombi-Vorteilen und Preisnachlässen für Familien. Inklusive Spielzeug-Guides.";
      meta.longText = "Das Happy Meal ist das Herzstück für Familien bei McDonald's. Neben nahrhaften Beilagen wie Äpfeln bieten wir in dieser Übersicht clevere Kombi-Coupons an, mit denen Eltern ein erwachsenes McMenu zusammen mit dem Happy Meal für das Kind zu drastisch verringerten Gesamtpreisen buchen können.";
    } else if (categorySlug === 'fruehstueck-angebote') {
      meta.title = "McDonald's Frühstück Angebote (Morgen-Gutscheine)";
      meta.subtitle = "Starte deinen Tag günstiger mit McMuffins, Croissants und duftendem McCafé Kaffee.";
      meta.description = "Aktuelle Frühstücks-Coupons bei McDonald's. Günstige Angebote für McMuffins, Heißgetränke und Croissants vor 10:30 Uhr.";
      meta.longText = "Achtung Langschläfer: Die Frühstücks-Gutscheine gelten ausschließlich während der Frühstückszeiten (in der Regel von 6:00 Uhr morgens bis 10:30 Uhr, an Sonn- und Feiertagen bis 11:30 Uhr). Hier sparst du vor allem bei Heißgetränken der Größe M und den kultigen McMuffin Varianten.";
    } else if (categorySlug === 'burger-angebote') {
      meta.title = "Günstige Burger Angebote & Coupons von McDonald's";
      meta.subtitle = "Satte Rabatte auf Klassiker wie Big Mac, Cheeseburger, McRib und Co.";
      meta.description = "Spare bei Burgern mit unseren aktuellen Gutscheincodes. Double Cheeseburger, Royal Käse, McMenu und mehr zum Sonderpreis.";
      meta.longText = "Egal ob Huhn, Rindfleisch oder vegetarische Alternativen wie der McPlant: In dieser Liste fassen wir alle aktiven Einzelburger-Rabatte und Menü-Ersparnisse zusammen. Perfekt kombinierbar an jedem deutschen Bestellkiosk.";
    } else if (categorySlug === 'mccafe-angebote') {
      meta.title = "McCafé Angebote, Kuchen & Heißgetränke Rabatte";
      meta.subtitle = "Gemütliche Auszeiten mit Latte Macchiato, cremigen Donuts und leckeren Muffins zum Sonderpreis.";
      meta.description = "Aktuelle McCafé Gutscheine für Kaffee-Spezialitäten und Kuchen. Hole das meiste aus der Stempelkarte.";
      meta.longText = "Am McCafé Schalter gelten oft gesonderte Coupons, die nicht auf dem klassischen Plakat oder dem Standardbeleg stehen. Hier erfährst du, wie du süße Teigwaren wie Donuts oder Cookies im Duo-Vorteil kaufst oder Heißgetränke im Kombipaket abgreifst.";
    } else if (categorySlug === 'angebote') {
      meta.title = "McDonald’s Angebote & Rabattaktionen diese Woche";
      meta.subtitle = "Temporäre Specials wie Rabatt-Pyramiden, Monatsaktionen oder das Oster-Sparen.";
      meta.description = "Aktuelle Rabattaktionen und Wochenangebote von McDonald’s Deutschland. Verpasse keine regionalen Aktionen mehr.";
      meta.longText = "Neben den ganzjährigen Coupons gibt es bei McDonald’s regelmäßig zeitlich begrenzte Aktionskampagnen. Hierzu gehören die beliebten Ostercodes, Rabattpyramiden ('Mehr kaufen, mehr sparen') oder zeitweilige Kooperationen mit Liefer-Apps.";
    }

    return meta;
  }, [categorySlug]);

  // Filter coupons depending on mapped Category
  const filteredCoupons = useMemo(() => {
    let result = McDonaldCoupons;

    if (mappedCategory !== 'all') {
      result = result.filter(coupon => coupon.category === mappedCategory);
    }

    if (filterVerified) {
      result = result.filter(coupon => coupon.verified);
    }

    // Sort coupons
    if (sortBy === 'price-asc') {
      result = [...result].sort((a, b) => (a.couponPrice || 0) - (b.couponPrice || 0));
    } else if (sortBy === 'price-desc') {
      result = [...result].sort((a, b) => (b.couponPrice || 0) - (a.couponPrice || 0));
    } else if (sortBy === 'popular') {
      result = [...result].sort((a, b) => b.likes - a.likes);
    }

    return result;
  }, [mappedCategory, filterVerified, sortBy]);

  // Create breadcrumb list schema
  const breadcrumbSchema = {
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Startseite",
        "item": window.location.origin
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": pageMeta.title,
        "item": `${window.location.origin}/${categorySlug}/`
      }
    ]
  };

  // Create list of offers schema for SEO optimization (OfferSchema)
  const offerSchema = {
    "@type": "ItemList",
    "numberOfItems": filteredCoupons.length,
    "itemListElement": filteredCoupons.map((coupon, idx) => ({
      "@type": "ListItem",
      "position": idx + 1,
      "item": {
        "@type": "Offer",
        "name": coupon.title,
        "description": coupon.description,
        "price": coupon.couponPrice || 0,
        "priceCurrency": "EUR",
        "validThrough": coupon.expiryDate,
        "priceSpecification": {
          "@type": "UnitPriceSpecification",
          "priceType": "https://schema.org/SalePrice",
          "price": coupon.couponPrice || 0,
          "priceCurrency": "EUR"
        }
      }
    }))
  };

  return (
    <div className="font-sans text-gray-900 bg-gray-50/50 pb-16 min-h-screen">
      <SchemaMarkup type="BreadcrumbList" data={breadcrumbSchema} />
      <SchemaMarkup type="Offer" data={offerSchema} />

      {/* Breadcrumb row */}
      <div className="bg-white border-b border-gray-100 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-xs font-medium text-gray-500 flex items-center space-x-1.5 flex-wrap">
          <button onClick={() => setPath('/')} className="hover:text-red-600 transition-colors cursor-pointer">Startseite</button>
          <ChevronRight className="h-3 w-3 text-gray-400" />
          <span className="text-gray-800 font-semibold truncate capitalize">{categorySlug.replace('-', ' ')}</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        
        {/* Title area */}
        <div className="space-y-3 max-w-3xl">
          <div className="inline-flex items-center space-x-1 bg-red-100 text-red-800 px-3 py-1 rounded-lg text-xs font-black uppercase tracking-wider">
            <Tag className="h-3 w-3" />
            <span>Aktiver Spar-Katalog 2026</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight leading-tight">
            {pageMeta.title}
          </h1>
          <p className="text-sm text-gray-500 leading-relaxed font-medium">
            {pageMeta.subtitle}
          </p>
        </div>

        {/* Filter bar and toolbar */}
        <div className="mt-8 bg-white rounded-2xl border border-gray-100 p-4 shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          
          {/* Active category details and badge count */}
          <div className="flex items-center space-x-2 text-xs text-gray-500 font-medium">
            <Filter className="h-4 w-4 text-gray-400 shrink-0" />
            <span>Gutscheine geladen: <strong className="text-gray-900 font-bold">{filteredCoupons.length}</strong></span>
          </div>

          {/* Filters controls */}
          <div className="flex flex-wrap gap-2 items-center w-full sm:w-auto justify-end">
            
            {/* Toggle Verified Vouchers */}
            <label className="flex items-center space-x-1.5 px-3 py-1.5 border border-gray-200 rounded-xl text-xs font-semibold cursor-pointer select-none hover:bg-gray-50">
              <input
                type="checkbox"
                checked={filterVerified}
                onChange={(e) => setFilterVerified(e.target.checked)}
                className="rounded-sm text-red-500 border-gray-300 focus:ring-0"
              />
              <span>Manuell Geprüfte</span>
            </label>

            {/* Sorting Selector */}
            <select
              value={sortBy}
              onChange={(e: any) => setSortBy(e.target.value)}
              className="px-3 py-1.5 border border-gray-200 rounded-xl text-xs font-semibold bg-white select-none focus:outline-hidden focus:border-red-500"
            >
              <option value="default">Standard-Sortierung</option>
              <option value="popular">Beliebtheit (Likes)</option>
              <option value="price-asc">Günstigster Preis zuerst</option>
              <option value="price-desc">Höchster Preis zuerst</option>
            </select>

          </div>

        </div>

        {/* Major Coupons Grid */}
        <div className="mt-8">
          {filteredCoupons.length === 0 ? (
            <div className="bg-white rounded-2xl border border-gray-100 py-16 text-center shadow-xs">
              <Tag className="h-12 w-12 text-gray-400 mx-auto mb-3 animate-spin" />
              <h3 className="font-bold text-gray-900 text-lg">Keine passenden Gutscheine gefunden</h3>
              <p className="text-xs text-gray-500 mt-1 max-w-sm mx-auto">Versuche deine Verifizierungs-Filter zurückzusetzen, um alle verfügbaren Rabattcoupons einzusehen.</p>
              <button
                onClick={() => { setFilterVerified(false); setSortBy('default'); }}
                className="mt-4 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-xl text-xs font-black cursor-pointer shadow-xs transition-colors"
              >
                Zurücksetzen
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {filteredCoupons.map((coupon) => (
                <CouponCard key={coupon.id} coupon={coupon} onAddToCalc={onAddToCalc} />
              ))}
            </div>
          )}
        </div>

        {/* Comprehensive Editorial SEO article block below fold (AdSense validation) */}
        <div className="mt-16 bg-white rounded-2xl border border-gray-100 p-6 md:p-8 space-y-6 shadow-xs max-w-4xl">
          <div className="flex items-center space-x-2 text-red-700">
            <Sparkles className="h-5 w-5 fill-red-100" />
            <h2 className="text-lg md:text-xl font-bold tracking-tight text-gray-900">
              Redaktioneller Spar-Ratgeber & Hintergrundwissen zu dieser Kategorie
            </h2>
          </div>
          
          <p className="text-xs text-gray-600 leading-relaxed">
            {pageMeta.longText}
          </p>

          <div className="border-t border-gray-100 pt-6 grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-gray-500">
            <div className="space-y-2">
              <h4 className="font-bold text-gray-800 flex items-center gap-1">
                <span>📍 Wie löse ich diese Coupons ein?</span>
              </h4>
              <p className="leading-relaxed">
                Nenne die auf der Karte abgebildete <strong>PLU-Nummer</strong> an der Kasse oder tippe sie am großflächigen Bestellterminal (Kiosk) manuell ein. Bei App-Angeboten startest du einfach den mobilen Timer und lässt das Tablet scannen.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="font-bold text-gray-800 flex items-center gap-1">
                <span>💡 Geld-Zurück-Prämie mit Coupons kombinieren?</span>
              </h4>
              <p className="leading-relaxed">
                Ja, das ist möglich! Scanne zuerst deinen Treuecode deiner MyMcDonald’s App am Kassenbildschirm ein, um Punkte für deine Gutscheinbestellung zu sammeln. So sparst du doppelt!
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
