import React, { useState, useEffect } from 'react';
import { Coupon } from '../types';
import { ThumbsUp, ThumbsDown, Copy, Check, Smartphone, Flame, Clock, Plus, Tag } from 'lucide-react';

interface CouponCardProps {
  coupon: Coupon;
  onAddToCalc: (coupon: Coupon) => void;
  key?: string;
}

export default function CouponCard({ coupon, onAddToCalc }: CouponCardProps) {
  const [copied, setCopied] = useState(false);
  const [likes, setLikes] = useState(coupon.likes);
  const [dislikes, setDislikes] = useState(coupon.dislikes);
  const [userVote, setUserVote] = useState<'like' | 'dislike' | null>(null);
  
  // App activation countdown state
  const [isActivated, setIsActivated] = useState(false);
  const [countdown, setCountdown] = useState(600); // 10 minutes in seconds

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isActivated && countdown > 0) {
      timer = setInterval(() => {
        setCountdown((prev) => prev - 1);
      }, 1000);
    } else if (countdown === 0) {
      setIsActivated(false);
      setCountdown(600);
    }
    return () => clearInterval(timer);
  }, [isActivated, countdown]);

  const handleCopyCode = () => {
    if (coupon.code) {
      navigator.clipboard.writeText(coupon.code.replace('PLU ', ''));
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleLike = () => {
    if (userVote === 'like') {
      setLikes((prev) => prev - 1);
      setUserVote(null);
    } else {
      if (userVote === 'dislike') {
        setDislikes((prev) => prev - 1);
      }
      setLikes((prev) => prev + 1);
      setUserVote('like');
    }
  };

  const handleDislike = () => {
    if (userVote === 'dislike') {
      setDislikes((prev) => prev - 1);
      setUserVote(null);
    } else {
      if (userVote === 'like') {
        setLikes((prev) => prev - 1);
      }
      setDislikes((prev) => prev + 1);
      setUserVote('dislike');
    }
  };

  const formatTime = (secs: number) => {
    const mins = Math.floor(secs / 60);
    const remainingSecs = secs % 60;
    return `${mins}:${remainingSecs < 10 ? '0' : ''}${remainingSecs}`;
  };

  const isExpiringSoon = () => {
    const today = new Date();
    const expiry = new Date(coupon.expiryDate);
    const diffTime = Math.abs(expiry.getTime() - today.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays <= 12;
  };

  return (
    <div id={`coupon-card-${coupon.id}`} className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col overflow-hidden relative group">
      
      {/* Category Tag Header */}
      <div className="absolute top-3 left-3 z-10 flex gap-1 items-center">
        <span className={`px-2.5 py-1 text-[10px] font-black rounded-lg uppercase tracking-wide shadow-xs ${
          coupon.category === 'burger' ? 'bg-red-500 text-white' :
          coupon.category === 'app' ? 'bg-amber-500 text-gray-950' :
          coupon.category === 'happy' ? 'bg-sky-500 text-white' :
          coupon.category === 'fruehstueck' ? 'bg-orange-400 text-white' :
          coupon.category === 'mccafe' ? 'bg-amber-800 text-white' :
          'bg-gray-700 text-white'
        }`}>
          {coupon.category === 'burger' && '🍔 Burger'}
          {coupon.category === 'app' && '📱 App Special'}
          {coupon.category === 'happy' && '🎈 Happy Meal'}
          {coupon.category === 'fruehstueck' && '🍳 Frühstück'}
          {coupon.category === 'mccafe' && '☕ McCafé'}
          {coupon.category === 'gutscheine' && '🎟️ Gutschein'}
        </span>
        {coupon.isAppRequired && (
          <span className="bg-amber-100 text-amber-800 p-1 rounded-lg" title="Exklusiver App-Coupon">
            <Smartphone className="h-3.5 w-3.5" />
          </span>
        )}
      </div>

      {/* Savings Percentage Badge */}
      {coupon.discountValue && (
        <div className="absolute top-3 right-3 z-10 bg-emerald-500 text-white text-xs font-black px-2 py-1 rounded-lg flex items-center space-x-0.5 shadow-xs">
          <Flame className="h-3 w-3 fill-white" />
          <span>{coupon.discountValue}</span>
        </div>
      )}

      {/* Main Coupon Content */}
      <div className="p-5 pt-12 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="font-bold text-gray-900 text-base leading-snug group-hover:text-red-600 transition-colors">
            {coupon.title}
          </h3>
          <p className="text-xs text-gray-500 mt-2 line-clamp-3 leading-relaxed">
            {coupon.description}
          </p>

          {/* Pricing Row */}
          <div className="flex items-baseline mt-4 space-x-2">
            {coupon.couponPrice !== undefined ? (
              <>
                <span className="text-2xl font-black text-gray-900 tracking-tight">
                  {coupon.couponPrice.toFixed(2)}€
                </span>
                {coupon.originalPrice && (
                  <span className="text-xs font-semibold text-gray-400 line-through">
                    {coupon.originalPrice.toFixed(2)}€
                  </span>
                )}
              </>
            ) : (
              <span className="text-lg font-extrabold text-emerald-600 tracking-tight">
                Gratis / Aktions-Auszug
              </span>
            )}
          </div>
        </div>

        <div className="mt-5 pt-4 border-t border-gray-50/80">
          {/* Expiry Bar */}
          <div className="flex items-center justify-between text-[11px] mb-3">
            <span className="text-gray-400">Gültig bis:</span>
            <span className={`font-mono font-bold ${isExpiringSoon() ? 'text-red-500 font-extrabold' : 'text-gray-600'}`}>
              {new Date(coupon.expiryDate).toLocaleDateString('de-DE')}
              {isExpiringSoon() && ' (Bald vorbei!)'}
            </span>
          </div>

          {/* Interaction Area: Upvote, Downvote, Add to savings calc */}
          <div className="flex items-center justify-between gap-2 bg-gray-50/80 p-2 rounded-xl mb-3">
            <div className="flex items-center space-x-1.5">
              <button
                onClick={handleLike}
                className={`p-1.5 rounded-lg flex items-center space-x-1 transition-colors cursor-pointer ${
                  userVote === 'like' ? 'bg-emerald-100 text-emerald-800' : 'hover:bg-gray-100 text-gray-500'
                }`}
                title="Gutschein hat funktioniert"
              >
                <ThumbsUp className="h-3.5 w-3.5" />
                <span className="text-[10px] font-bold">{likes}</span>
              </button>
              
              <button
                onClick={handleDislike}
                className={`p-1.5 rounded-lg flex items-center space-x-1 transition-colors cursor-pointer ${
                  userVote === 'dislike' ? 'bg-red-100 text-red-800' : 'hover:bg-gray-100 text-gray-500'
                }`}
                title="Gutschein abgelaufen oder ungültig"
              >
                <ThumbsDown className="h-3.5 w-3.5" />
                <span className="text-[10px] font-bold">{dislikes}</span>
              </button>
            </div>

            {/* Direct Calculator integration */}
            <button
              onClick={() => onAddToCalc(coupon)}
              className="flex items-center space-x-1 px-2.5 py-1 bg-white hover:bg-red-50 border border-gray-200 hover:border-red-200 text-gray-700 hover:text-red-700 rounded-lg text-[10px] font-bold transition-all cursor-pointer shadow-xs"
              title="Zum Sparrechner hinzufügen, um Menüpreis zu optimieren"
            >
              <Plus className="h-3 w-3 shrink-0" />
              <span>Verrechnen</span>
            </button>
          </div>

          {/* App slider / PLU code action trigger */}
          {coupon.isAppRequired ? (
            <div>
              {isActivated ? (
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-2.5 flex flex-col items-center">
                  <div className="flex items-center space-x-1.5 text-amber-800 text-xs font-bold animate-pulse">
                    <Clock className="h-3.5 w-3.5" />
                    <span>TIMER LÄUFT: {formatTime(countdown)}</span>
                  </div>
                  <p className="text-[10px] text-amber-700 text-center mt-1">Code an der Kasse oder am Terminal vorzeigen!</p>
                  <p className="text-sm font-black tracking-widest text-amber-950 font-mono mt-1 select-all bg-amber-100 px-3 py-1 rounded border border-amber-200/50">
                    {coupon.code}
                  </p>
                </div>
              ) : (
                <button
                  onClick={() => setIsActivated(true)}
                  className="w-full flex items-center justify-center space-x-2 py-2 px-4 bg-amber-500 hover:bg-amber-600 text-amber-950 rounded-xl text-xs font-black shadow-xs cursor-pointer transition-colors"
                >
                  <Smartphone className="h-3.5 w-3.5" />
                  <span>Jetzt in der Simulator-App aktivieren!</span>
                </button>
              )}
            </div>
          ) : (
            <div className="flex items-center space-x-2">
              <div className="bg-gray-100 flex-1 px-3 py-2 rounded-xl border border-gray-200/50 text-center font-mono text-xs font-black text-gray-800 selection:bg-red-100">
                {coupon.code ? coupon.code : 'KEIN CODE NÖTIG'}
              </div>
              {coupon.code && (
                <button
                  onClick={handleCopyCode}
                  className="p-2.5 bg-red-600 hover:bg-red-700 text-white rounded-xl transition-all shadow-xs cursor-pointer"
                  title="PLU-Nummer kopieren"
                >
                  {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                </button>
              )}
            </div>
          )}
        </div>

      </div>

      {/* Verified seal overlay */}
      {coupon.verified && (
        <span className="absolute bottom-1 right-2.5 text-[9px] text-emerald-600 font-mono font-bold uppercase select-none opacity-80 flex items-center space-x-0.5">
          <span>✓ Redaktionell verifiziert</span>
        </span>
      )}
    </div>
  );
}
