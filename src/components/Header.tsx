import React, { useState, useEffect } from 'react';
import { Menu, X, Flame, Smartphone, Calendar, Search, Coffee, Gift, Tag, Award, HelpCircle } from 'lucide-react';

interface HeaderProps {
  currentPath: string;
  setPath: (path: string) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export default function Header({ currentPath, setPath, searchQuery, setSearchQuery }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Freeze page scrolling behind the mobile menu dropdown when it is visible
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [mobileMenuOpen]);

  const navItems = [
    { name: 'Startseite', path: '/', icon: Flame },
    { name: 'Gutscheine', path: '/gutscheine/', icon: Tag },
    { name: 'Angebote', path: '/angebote/', icon: Gift },
    { name: 'App Coupons', path: '/app-gutscheine/', icon: Smartphone },
    { name: 'Happy Meal', path: '/happy-meal-angebote/', icon: Award },
    { name: 'Burger', path: '/burger-angebote/', icon: Flame },
    { name: 'Frühstück', path: '/fruehstueck-angebote/', icon: Calendar },
    { name: 'McCafé', path: '/mccafe-angebote/', icon: Coffee },
    { name: 'Blog & Tipps', path: '/blog/', icon: HelpCircle },
  ];

  const handleNavClick = (path: string) => {
    setPath(path);
    setMobileMenuOpen(false);
    // Scroll smoothly to top on page change
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-xs">
      {/* Disclaimer Top Bar (Rechtlich & Transparenz) */}
      <div className="bg-amber-50 text-amber-900 border-b border-amber-100 text-[11px] py-1.5 px-4 text-center font-medium">
        <span>⚠️ <strong>Inoffizielles Sparportal:</strong> Wir stehen in keinerlei Verbindung oder Kooperation mit McDonald’s Deutschland oder der McDonald’s Corporation. Alle Produktnamen sind geschützte Marken.</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo / Brand */}
          <div className="flex items-center space-x-2 cursor-pointer" onClick={() => handleNavClick('/')}>
            <div className="bg-red-600 p-2.5 rounded-xl shadow-md shadow-red-200 flex items-center justify-center">
              <span className="text-white font-extrabold text-lg tracking-tight font-sans">M</span>
            </div>
            <div>
              <span className="text-lg font-black tracking-tight text-gray-900 font-sans">
                McDonalds<span className="text-yellow-500">Gutscheine</span>
                <span className="text-xs text-gray-400 font-medium ml-1">.de</span>
              </span>
              <p className="text-[9px] text-gray-500 font-mono tracking-wider uppercase -mt-1 font-bold">Unabhängiges Sparportal</p>
            </div>
          </div>

          {/* Desktop Search Bar */}
          <div className="hidden md:flex flex-1 max-w-xs mx-6">
            <div className="relative w-full">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-4 w-4 text-gray-400" />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Gutscheine oder Tipps suchen..."
                className="block w-full pl-9 pr-3 py-1.5 bg-gray-50 hover:bg-gray-100/50 focus:bg-white text-gray-900 placeholder:text-gray-400 text-sm border border-gray-200 rounded-xl focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all outline-hidden"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-xs text-gray-400 hover:text-gray-600"
                >
                  Leeren
                </button>
              )}
            </div>
          </div>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex space-x-1">
            {navItems.slice(0, 5).map((item) => {
              const Icon = item.icon;
              const isActive = currentPath === item.path;
              return (
                <button
                  key={item.path}
                  onClick={() => handleNavClick(item.path)}
                  className={`flex items-center space-x-1.5 px-3 py-2 text-sm font-medium rounded-xl transition-all cursor-pointer ${
                    isActive
                      ? 'bg-red-50 text-red-700'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                  }`}
                >
                  <Icon className={`h-4 w-4 ${isActive ? 'text-red-600' : 'text-gray-400'}`} />
                  <span>{item.name}</span>
                </button>
              );
            })}
          </nav>

          {/* Extra Category Shortcuts for Desktop */}
          <div className="hidden lg:flex items-center space-x-1 ml-4 border-l pl-4 border-gray-100">
            <button
              onClick={() => handleNavClick('/burger-angebote/')}
              className={`px-2.5 py-1.5 text-xs font-semibold rounded-lg ${
                currentPath === '/burger-angebote/' ? 'bg-amber-100 text-amber-800' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              🍔 Burger
            </button>
            <button
              onClick={() => handleNavClick('/mccafe-angebote/')}
              className={`px-2.5 py-1.5 text-xs font-semibold rounded-lg ${
                currentPath === '/mccafe-angebote/' ? 'bg-amber-100 text-amber-800' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              ☕ McCafé
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center space-x-2 lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-xl text-gray-500 hover:text-gray-900 hover:bg-gray-100 focus:outline-hidden"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu & Search */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 transition-all duration-200 max-h-[calc(100vh-6.5rem)] overflow-y-auto shadow-inner pb-6">
          <div className="p-4 border-b border-gray-100">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-4 w-4 text-gray-400" />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Gutscheine suchen..."
                className="block w-full pl-9 pr-3 py-2 bg-gray-50 text-gray-950 placeholder:text-gray-500 text-sm border border-gray-200 rounded-xl focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all outline-hidden"
              />
            </div>
          </div>
          <div className="px-2 pt-2 pb-4 space-y-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = currentPath === item.path;
              return (
                <button
                  key={item.path}
                  onClick={() => handleNavClick(item.path)}
                  className={`flex items-center space-x-3 w-full px-4 py-2.5 text-base font-semibold rounded-xl text-left transition-all ${
                    isActive
                      ? 'bg-red-50 text-red-700'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                  }`}
                >
                  <Icon className={`h-5 w-5 ${isActive ? 'text-red-600' : 'text-gray-400'}`} />
                  <span>{item.name}</span>
                </button>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}
