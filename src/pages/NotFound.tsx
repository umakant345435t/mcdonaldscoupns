import React from 'react';
import { Home, ArrowLeft, HelpCircle } from 'lucide-react';

interface NotFoundProps {
  setPath: (path: string) => void;
}

export default function NotFound({ setPath }: NotFoundProps) {
  return (
    <div className="font-sans text-gray-900 bg-gray-50/50 pb-20 pt-16 md:pt-24 min-h-screen flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white rounded-3xl border border-gray-100 p-8 md:p-10 text-center shadow-xl relative overflow-hidden">
        {/* Abstract background circles */}
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-yellow-400/10 rounded-full blur-2xl pointer-events-none"></div>
        <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-red-600/10 rounded-full blur-2xl pointer-events-none"></div>

        <div className="relative z-10 space-y-6">
          {/* Big 404 Badge */}
          <div className="inline-flex items-center justify-center w-20 h-20 bg-red-50 text-red-600 rounded-3xl mb-2">
            <span className="text-4xl font-black">404</span>
          </div>

          <div className="space-y-2">
            <h1 className="text-2xl md:text-3xl font-black text-gray-900 tracking-tight">
              Hoppla! Seite nicht gefunden 🍟
            </h1>
            <p className="text-sm text-gray-500 leading-relaxed">
              Die von Ihnen aufgerufene Seite oder der gewünschte Gutschein existiert leider nicht (mehr) oder die URL ist fehlerhaft.
            </p>
          </div>

          {/* Prompt options */}
          <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100 text-left space-y-3">
            <h4 className="text-xs font-bold text-gray-700 uppercase tracking-wider flex items-center space-x-1.5">
              <HelpCircle className="h-3.5 w-3.5 text-yellow-500" />
              <span>Suchen Sie etwas Bestimmtes?</span>
            </h4>
            <ul className="text-xs text-gray-500 space-y-1.5 list-disc list-inside">
              <li>Aktuelle McDonald's Gutscheine & Rabatte</li>
              <li>Exklusive tägliche Smartphone App-Angebote</li>
              <li>Wichtige Spar-Tipps für die Kasse & Kiosk</li>
            </ul>
          </div>

          {/* Navigation Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <button
              onClick={() => setPath('/')}
              className="flex-1 px-5 py-3.5 bg-yellow-400 hover:bg-yellow-500 text-gray-950 font-black rounded-2xl shadow-md text-xs cursor-pointer transition-all hover:scale-102 flex items-center justify-center space-x-2"
            >
              <Home className="h-4 w-4" />
              <span>Zur Startseite</span>
            </button>
            <button
              onClick={() => setPath('/gutscheine/')}
              className="flex-1 px-5 py-3.5 bg-gray-900 hover:bg-gray-800 text-white font-bold rounded-2xl text-xs cursor-pointer transition-all hover:scale-102 flex items-center justify-center space-x-2"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Gutscheine ansehen</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
