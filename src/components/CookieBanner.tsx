import React, { useState, useEffect } from 'react';
import { ShieldCheck, X, ChevronRight } from 'lucide-react';

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState({
    necessary: true,
    ads: true,
    analytics: true
  });

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem('cookie-consent', JSON.stringify({
      necessary: true,
      ads: true,
      analytics: true
    }));
    setIsVisible(false);
  };

  const handleRejectAll = () => {
    localStorage.setItem('cookie-consent', JSON.stringify({
      necessary: true,
      ads: false,
      analytics: false
    }));
    setIsVisible(false);
  };

  const handleSaveCustom = () => {
    localStorage.setItem('cookie-consent', JSON.stringify(preferences));
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-gray-900 text-white font-sans border-t border-red-500 shadow-2xl">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        
        {/* Consent Column */}
        <div className="flex-1">
          <div className="flex items-center space-x-2 text-yellow-400 font-bold mb-1 text-sm sm:text-base">
            <ShieldCheck className="h-5 w-5 text-yellow-400 shrink-0" />
            <span>Cookie- & AdSense Einstellungen (DSGVO konform)</span>
          </div>
          <p className="text-xs text-gray-300 leading-relaxed max-w-3xl">
            Um mcdonaldsgutscheine.de optimal betreiben zu können, nutzen wir Cookies, Webspeicher und Analyse-Tools. Außerdem schalten wir Google AdSense Anzeigen, um diese kostenfreien Spartipps zur Verfügung zu stellen. Hierbei können personalisierte Daten (z.B. IP-Adressen) verarbeitet werden.
          </p>

          {showSettings && (
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3 bg-gray-800 p-3 rounded-lg border border-gray-700">
              <label className="flex items-center space-x-2 text-xs cursor-pointer">
                <input
                  type="checkbox"
                  checked={preferences.necessary}
                  disabled
                  className="rounded-sm bg-gray-700 border-gray-600 text-red-500 focus:ring-0"
                />
                <div>
                  <span className="font-semibold block">Notwendig</span>
                  <span className="text-[10px] text-gray-400">Seitennavigation (Immer aktiv)</span>
                </div>
              </label>

              <label className="flex items-center space-x-2 text-xs cursor-pointer">
                <input
                  type="checkbox"
                  checked={preferences.ads}
                  onChange={(e) => setPreferences({ ...preferences, ads: e.target.checked })}
                  className="rounded-sm bg-gray-700 border-gray-600 text-red-500 focus:ring-0 cursor-pointer"
                />
                <div>
                  <span className="font-semibold block text-amber-300">Google AdSense</span>
                  <span className="text-[10px] text-gray-400">Relevante Angebote & Werbung</span>
                </div>
              </label>

              <label className="flex items-center space-x-2 text-xs cursor-pointer">
                <input
                  type="checkbox"
                  checked={preferences.analytics}
                  onChange={(e) => setPreferences({ ...preferences, analytics: e.target.checked })}
                  className="rounded-sm bg-gray-700 border-gray-600 text-red-500 focus:ring-0 cursor-pointer"
                />
                <div>
                  <span className="font-semibold block">Analytics</span>
                  <span className="text-[10px] text-gray-400">Besucherstatistiken & Ladezeit</span>
                </div>
              </label>
            </div>
          )}
        </div>

        {/* Buttons Action Group */}
        <div className="flex flex-wrap gap-2 items-center justify-end w-full md:w-auto shrink-0">
          <button
            onClick={() => setShowSettings(!showSettings)}
            className="px-3 py-2 bg-gray-800 hover:bg-gray-700 text-gray-300 rounded-lg text-xs font-semibold cursor-pointer transition-colors"
          >
            {showSettings ? 'Auswahl zuklappen' : 'Cookie-Einstellungen anpassen'}
          </button>
          
          {showSettings ? (
            <button
              onClick={handleSaveCustom}
              className="px-4 py-2 bg-amber-500 hover:bg-amber-600 text-gray-950 rounded-lg text-xs font-black cursor-pointer transition-colors"
            >
              Auswahl bestätigen
            </button>
          ) : (
            <>
              <button
                onClick={handleRejectAll}
                className="px-3.5 py-2 bg-gray-800 hover:bg-gray-700 text-gray-300 rounded-lg text-xs font-semibold cursor-pointer transition-colors"
              >
                Nur Notwendige
              </button>
              <button
                onClick={handleAcceptAll}
                className="px-5 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg text-xs font-black cursor-pointer transition-colors flex items-center space-x-1 shadow-sm"
              >
                <span>Alle akzeptieren</span>
                <ChevronRight className="h-3.5 w-3.5" />
              </button>
            </>
          )}
        </div>

      </div>
    </div>
  );
}
