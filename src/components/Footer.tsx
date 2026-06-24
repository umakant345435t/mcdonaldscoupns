import React from 'react';
import { Tag, ShieldAlert, Heart, Calendar, Smartphone, Landmark } from 'lucide-react';

interface FooterProps {
  setPath: (path: string) => void;
  currentPath: string;
}

export default function Footer({ setPath, currentPath }: FooterProps) {
  const handleNavClick = (path: string) => {
    setPath(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-400 font-sans border-t border-gray-800">
      {/* Upper informational bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid grid-cols-1 md:grid-cols-3 gap-8 border-b border-gray-800">
        <div>
          <div className="flex items-center space-x-2 text-white mb-3">
            <span className="bg-red-600 px-2 py-1 rounded-md text-sm font-black">M</span>
            <span className="font-bold text-base tracking-tight">McDonaldsGutscheine.de</span>
          </div>
          <p className="text-xs text-gray-400 leading-relaxed mb-4">
            Dein unabhängiges Ratgeber- und Sparportal rund um Vouchercodes, App-Coupons und lohnende Menü-Konfigurationen bei McDonald’s Deutschland. Spare clever bei jedem Schnellrestaurant-Besuch!
          </p>
          <div className="text-[11px] bg-gray-800/50 p-3 rounded-lg border border-gray-800/80 text-gray-400">
            <strong>Markenrechtlicher Ausschluss:</strong> Diese Webseite steht in keinem Zusammenhang mit McDonald's Deutschland LLC oder der McDonald’s Corporation. Sämtliche Markenrechte liegen bei den jeweiligen Rechteinhabern. Und wir werben niemals mit unautorisierten Codes.
          </div>
        </div>

        <div>
          <h4 className="text-gray-200 font-semibold text-sm tracking-wider uppercase mb-3">Beliebte Kategorien</h4>
          <ul className="space-y-2 text-xs">
            <li>
              <button onClick={() => handleNavClick('/gutscheine/')} className="hover:text-amber-400 transition-colors cursor-pointer text-left">
                🎟️ Alle Aktuellen Gutscheine 2026
              </button>
            </li>
            <li>
              <button onClick={() => handleNavClick('/app-gutscheine/')} className="hover:text-amber-400 transition-colors cursor-pointer text-left">
                📱 Offizielle App Coupons & Sparcode
              </button>
            </li>
            <li>
              <button onClick={() => handleNavClick('/burger-angebote/')} className="hover:text-amber-400 transition-colors cursor-pointer text-left">
                🍔 Klassische Burger Angebote & Deals
              </button>
            </li>
            <li>
              <button onClick={() => handleNavClick('/happy-meal-angebote/')} className="hover:text-amber-400 transition-colors cursor-pointer text-left">
                🎈 Happy Meal Kombinationen & Spielzeug
              </button>
            </li>
            <li>
              <button onClick={() => handleNavClick('/fruehstueck-angebote/')} className="hover:text-amber-400 transition-colors cursor-pointer text-left">
                🍳 Frühstück Angebote (McMuffin & Kaffee)
              </button>
            </li>
            <li>
              <button onClick={() => handleNavClick('/mccafe-angebote/')} className="hover:text-amber-400 transition-colors cursor-pointer text-left">
                ☕ McCafé Kuchen & Heißgetränk Sparpack
              </button>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-gray-200 font-semibold text-sm tracking-wider uppercase mb-3">Sicher & AdSense Konform</h4>
          <p className="text-xs text-gray-400 leading-relaxed mb-3">
            Wir stellen ausschließlich legal einlösbare PLU-Nummern und redaktionelle Testberichte / Vergleiche bereit. Alle Vouchercodes werden redaktionell geprüft und wöchentlich manuell verifiziert.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="bg-gray-800 text-[10px] text-gray-300 font-mono px-2.5 py-1 rounded-sm border border-gray-700 font-semibold">✓ DSGVO Konform</span>
            <span className="bg-gray-800 text-[10px] text-gray-300 font-mono px-2.5 py-1 rounded-sm border border-gray-700 font-semibold">✓ AdSense Approved Ready</span>
            <span className="bg-gray-800 text-[10px] text-gray-300 font-mono px-2.5 py-1 rounded-sm border border-gray-700 font-semibold">✓ SSL Verschlüsselt</span>
          </div>
        </div>
      </div>

      {/* Footer legal menu links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium">
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-2">
            <button
              onClick={() => handleNavClick('/ueber-uns/')}
              className={`hover:text-white transition-all cursor-pointer ${currentPath === '/ueber-uns/' ? 'text-yellow-400 font-bold' : ''}`}
            >
              Über Uns
            </button>
            <button
              onClick={() => handleNavClick('/kontakt/')}
              className={`hover:text-white transition-all cursor-pointer ${currentPath === '/kontakt/' ? 'text-yellow-400 font-bold' : ''}`}
            >
              Kontakt
            </button>
            <button
              onClick={() => handleNavClick('/impressum/')}
              className={`hover:text-white transition-all cursor-pointer ${currentPath === '/impressum/' ? 'text-yellow-400 font-bold' : ''}`}
            >
              Impressum
            </button>
            <button
              onClick={() => handleNavClick('/datenschutz/')}
              className={`hover:text-white transition-all cursor-pointer ${currentPath === '/datenschutz/' ? 'text-yellow-400 font-bold' : ''}`}
            >
              Datenschutzerklärung
            </button>
            <button
              onClick={() => handleNavClick('/cookies/')}
              className={`hover:text-white transition-all cursor-pointer ${currentPath === '/cookies/' ? 'text-yellow-400 font-bold' : ''}`}
            >
              Cookie-Richtlinie
            </button>
            <button
              onClick={() => handleNavClick('/nutzungsbedingungen/')}
              className={`hover:text-white transition-all cursor-pointer ${currentPath === '/nutzungsbedingungen/' ? 'text-yellow-400 font-bold' : ''}`}
            >
              Nutzungsbedingungen
            </button>
            <button
              onClick={() => handleNavClick('/haftungsausschluss/')}
              className={`hover:text-white transition-all cursor-pointer ${currentPath === '/haftungsausschluss/' ? 'text-yellow-400 font-bold' : ''}`}
            >
              Haftungsausschluss
            </button>
          </div>

          <p className="text-[11px] text-gray-500 text-center md:text-right">
            &copy; {currentYear} mcdonaldsgutscheine.de. Alle Rechte vorbehalten. Made with <Heart className="inline h-3 w-3 text-red-500 mx-0.5 fill-red-500" /> in Germany.
          </p>
        </div>
      </div>
    </footer>
  );
}
