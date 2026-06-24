import React from 'react';
import { Coupon } from '../types';
import { Trash2, ShoppingBag, ArrowRight, Share2, Calculator, Sparkles } from 'lucide-react';

interface CartItem {
  coupon: Coupon;
  quantity: number;
}

interface SavingsCalculatorProps {
  items: CartItem[];
  onRemove: (id: string) => void;
  onUpdateQty: (id: string, qty: number) => void;
  onClear: () => void;
}

export default function SavingsCalculator({ items, onRemove, onUpdateQty, onClear }: SavingsCalculatorProps) {
  const totalOriginal = items.reduce((sum, item) => {
    return sum + (item.coupon.originalPrice || item.coupon.couponPrice || 0) * item.quantity;
  }, 0);

  const totalCoupons = items.reduce((sum, item) => {
    return sum + (item.coupon.couponPrice || 0) * item.quantity;
  }, 0);

  const totalSavings = totalOriginal - totalCoupons;
  const savingsPercent = totalOriginal > 0 ? Math.round((totalSavings / totalOriginal) * 100) : 0;

  const handleShareOnWhatsApp = () => {
    const text = `Schau mal, ich spare gerade ${totalSavings.toFixed(2)}€ bei McDonald’s mit der Sparhilfe auf mcdonaldsgutscheine.de! Meine Coupon-Zusammenstellung: ${items.map(i => `${i.quantity}x ${i.coupon.title}`).join(', ')}`;
    window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 text-white font-sans shadow-xl relative overflow-hidden">
      
      {/* Decorative Background Glow */}
      <div className="absolute -right-16 -top-16 w-36 h-36 bg-red-600/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -left-16 -bottom-16 w-36 h-36 bg-yellow-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="flex items-center justify-between border-b border-gray-800 pb-4 mb-4">
        <div className="flex items-center space-x-2">
          <Calculator className="h-5 w-5 text-yellow-400" />
          <h2 className="font-bold text-base sm:text-lg tracking-tight">McDonald’s Spar-Rechner</h2>
        </div>
        {items.length > 0 && (
          <button
            onClick={onClear}
            className="text-[11px] text-gray-400 hover:text-red-500 font-semibold uppercase tracking-wider transition-colors cursor-pointer"
          >
            Leeren
          </button>
        )}
      </div>

      {items.length === 0 ? (
        <div className="py-8 text-center px-4">
          <ShoppingBag className="h-10 w-10 text-gray-600 mx-auto mb-3 animate-bounce" />
          <p className="font-bold text-sm text-gray-300">Dein Spar-Rechner ist leer</p>
          <p className="text-[11px] text-gray-400 mt-1 max-w-xs mx-auto leading-relaxed">
            Klicke bei den Coupon-Karten einfach auf <strong className="text-yellow-400">"Verrechnen"</strong>, um deine Lieblingsburger hinzuzufügen und deine Live-Umsatzersparnis zu kalkulieren!
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {/* List of active items */}
          <div className="max-h-60 overflow-y-auto pr-1 space-y-2 division-y divide-gray-800/50">
            {items.map((item) => (
              <div key={item.coupon.id} className="flex items-center justify-between text-xs py-2 bg-gray-800/40 px-3 rounded-lg border border-gray-800">
                <div className="flex-1 min-w-0 pr-2">
                  <p className="font-semibold text-gray-100 truncate">{item.coupon.title}</p>
                  <p className="text-[10px] text-gray-400">
                    Einzelpreis: {item.coupon.couponPrice?.toFixed(2)}€ 
                    {item.coupon.originalPrice && (
                      <span className="line-through text-gray-500 ml-1">({item.coupon.originalPrice.toFixed(2)}€)</span>
                    )}
                  </p>
                </div>

                <div className="flex items-center space-x-2">
                  {/* Quantity adjustments */}
                  <div className="flex items-center bg-gray-800 border border-gray-700 rounded-md">
                    <button
                      onClick={() => onUpdateQty(item.coupon.id, item.quantity - 1)}
                      className="px-2 py-0.5 hover:bg-gray-700 transition-colors text-gray-300 font-bold"
                    >
                      -
                    </button>
                    <span className="px-1.5 py-0.5 text-[11px] font-mono font-bold text-yellow-400">{item.quantity}</span>
                    <button
                      onClick={() => onUpdateQty(item.coupon.id, item.quantity + 1)}
                      className="px-2 py-0.5 hover:bg-gray-700 transition-colors text-gray-300 font-bold"
                    >
                      +
                    </button>
                  </div>

                  {/* Remove Button */}
                  <button
                    onClick={() => onRemove(item.coupon.id)}
                    className="p-1 text-gray-500 hover:text-red-500 transition-colors cursor-pointer"
                    title="Entfernen"
                  >
                    <Trash2 className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Pricing summary */}
          <div className="bg-gray-800/80 p-4 rounded-xl border border-gray-700 space-y-2 mt-4 font-mono text-xs">
            <div className="flex justify-between text-gray-400">
              <span>Normaler Filialpreis:</span>
              <span className="line-through">{totalOriginal.toFixed(2)} €</span>
            </div>
            <div className="flex justify-between text-yellow-400 font-bold">
              <span>Coupon-Sparpreis:</span>
              <span>{totalCoupons.toFixed(2)} €</span>
            </div>
            
            {/* Live Savings display with dynamic celebration look */}
            <div className="flex justify-between items-center pt-2 border-t border-gray-700/80 text-sm">
              <span className="text-gray-200 font-sans flex items-center gap-1">
                <Sparkles className="h-3.5 w-3.5 text-emerald-400" />
                <strong>Deine Ersparnis:</strong>
              </span>
              <span className="text-emerald-400 font-black tracking-tight text-right">
                {totalSavings.toFixed(2)} € <span className="bg-emerald-500/20 text-emerald-300 text-[10px] px-1.5 py-0.5 rounded-sm ml-1">-{savingsPercent}%</span>
              </span>
            </div>
          </div>

          {/* Share savings actions */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2">
            <button
              onClick={handleShareOnWhatsApp}
              className="px-3 py-2 bg-[#25D366] hover:bg-[#128C7E] text-white rounded-xl text-xs font-black flex items-center justify-center space-x-1.5 cursor-pointer transition-colors"
            >
              <Share2 className="h-3.5 w-3.5" />
              <span>Auf WhatsApp teilen</span>
            </button>
            <button
              className="px-3 py-2 bg-red-600 hover:bg-red-700 text-white rounded-xl text-xs font-black flex items-center justify-center space-x-1 cursor-pointer transition-colors"
              onClick={() => alert(`Am Terminal oder Schalter legst du ganz einfach die genutzten PLU-Codes vor: \n\n${items.map(i => `➡️ ${i.quantity}x ${i.coupon.title} (Code: ${i.coupon.code || 'App'})`).join('\n')}\n\nGuten Appetit!`)}
            >
              <span>Bestell-Ansicht</span>
              <ArrowRight className="h-3 w-3" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
