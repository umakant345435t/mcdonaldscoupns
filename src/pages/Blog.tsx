import React, { useState, useMemo } from 'react';
import { BlogPost } from '../types';
import { BlogPosts } from '../data/blog';
import { ArrowLeft, BookOpen, Clock, User, Calendar, Share2, Sparkles, ChevronRight, Check } from 'lucide-react';
import SchemaMarkup from '../components/SchemaMarkup';

interface BlogProps {
  currentPath: string;
  setPath: (path: string) => void;
}

export default function Blog({ currentPath, setPath }: BlogProps) {
  const [copiedLink, setCopiedLink] = useState(false);

  // Match if a specific article slug is opened
  const activeSlug = useMemo(() => {
    if (currentPath.startsWith('/blog/') && currentPath !== '/blog/') {
      return currentPath.replace('/blog/', '').replace(/\/$/, '');
    }
    return null;
  }, [currentPath]);

  const activeArticle = useMemo(() => {
    if (!activeSlug) return null;
    return BlogPosts.find(post => post.slug === activeSlug);
  }, [activeSlug]);

  const handleShareArticle = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  // Generate dynamic Article Schema for SEO
  const articleSchema = useMemo(() => {
    if (!activeArticle) return null;
    return {
      "@type": "Article",
      "headline": activeArticle.title,
      "datePublished": activeArticle.date,
      "dateModified": activeArticle.date,
      "author": {
        "@type": "Person",
        "name": activeArticle.author
      },
      "publisher": {
        "@type": "Organization",
        "name": "McDonalds Gutscheine Sparportal"
      },
      "description": activeArticle.summary
    };
  }, [activeArticle]);

  // If viewing a single article details
  if (activeArticle) {
    return (
      <div className="font-sans text-gray-900 bg-gray-50/50 pb-16 min-h-screen">
        {articleSchema && <SchemaMarkup type="Article" data={articleSchema} />}

        {/* Breadcrumb line */}
        <div className="bg-white border-b border-gray-100 py-3">
          <div className="max-w-4xl mx-auto px-4 md:px-6 text-xs font-medium text-gray-500 flex items-center space-x-1.5 flex-wrap">
            <button onClick={() => setPath('/')} className="hover:text-red-650 cursor-pointer">Startseite</button>
            <ChevronRight className="h-3 w-3 text-gray-400" />
            <button onClick={() => setPath('/blog/')} className="hover:text-red-650 cursor-pointer">Blog</button>
            <ChevronRight className="h-3 w-3 text-gray-400" />
            <span className="text-gray-800 font-semibold truncate max-w-xs">{activeArticle.title}</span>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 md:px-6 mt-8">
          {/* Back button */}
          <button
            onClick={() => setPath('/blog/')}
            className="inline-flex items-center space-x-1.5 text-xs font-bold text-gray-600 hover:text-red-600 cursor-pointer mb-6"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Zurück zur Übersicht</span>
          </button>

          {/* Article Full Box */}
          <article className="bg-white rounded-3xl border border-gray-100 p-6 md:p-10 shadow-xs space-y-6">
            
            {/* Meta header labels */}
            <div className="flex flex-wrap items-center gap-3 text-xs text-gray-500 font-medium">
              <span className="px-2.5 py-1 bg-red-50 text-red-700 font-extrabold rounded-lg uppercase tracking-wider text-[10px]">
                McDonald's Spar-Guide
              </span>
              <span className="flex items-center space-x-1">
                <Calendar className="h-3.5 w-3.5" />
                <span>{new Date(activeArticle.date).toLocaleDateString('de-DE')}</span>
              </span>
              <span className="flex items-center space-x-1">
                <Clock className="h-3.5 w-3.5" />
                <span>{activeArticle.readTime}</span>
              </span>
              <span className="flex items-center space-x-1">
                <User className="h-3.5 w-3.5" />
                <span>Von {activeArticle.author}</span>
              </span>
            </div>

            {/* Title */}
            <h1 className="text-2xl md:text-4xl font-black tracking-tight leading-tight text-gray-900">
              {activeArticle.title}
            </h1>

            {/* Quick summary box */}
            <p className="text-sm md:text-base text-gray-600 italic bg-gray-50 rounded-xl p-4 border-l-4 border-yellow-400 leading-relaxed font-medium">
              "{activeArticle.summary}"
            </p>

            {/* Paragraphs iterating content */}
            <div className="text-sm md:text-base text-gray-700 leading-relaxed space-y-5 pt-4">
              {activeArticle.content.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>

            {/* Share and Interne Verlinkung footer row */}
            <div className="border-t border-gray-100 pt-8 mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              <div className="flex items-center space-x-2">
                <button
                  onClick={handleShareArticle}
                  className="inline-flex items-center justify-center space-x-1.5 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-xl text-xs font-black transition-all cursor-pointer"
                >
                  {copiedLink ? (
                    <>
                      <Check className="h-3.5 w-3.5 text-emerald-600" />
                      <span className="text-emerald-700">Link kopiert!</span>
                    </>
                  ) : (
                    <>
                      <Share2 className="h-3.5 w-3.5" />
                      <span>Ratgeber teilen</span>
                    </>
                  )}
                </button>
              </div>

              {/* Related Category linking */}
              <div className="text-right">
                <p className="text-xs text-gray-400 font-medium">Sofort sparen mit:</p>
                <div className="flex justify-end gap-2 mt-1.5 flex-wrap">
                  <button onClick={() => setPath('/burger-angebote/')} className="px-2.5 py-1.5 bg-red-50 hover:bg-red-100 text-red-700 rounded-lg text-xs font-bold shrink-0">
                    🍔 Burger
                  </button>
                  <button onClick={() => setPath('/app-gutscheine/')} className="px-2.5 py-1.5 bg-yellow-50 hover:bg-yellow-100 text-yellow-800 rounded-lg text-xs font-bold shrink-0">
                    📱 App-Coupons
                  </button>
                </div>
              </div>
            </div>

          </article>
        </div>
      </div>
    );
  }

  // Else, show standard Blog Index
  return (
    <div className="font-sans text-gray-900 bg-gray-50/50 pb-16 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        
        {/* Title row */}
        <div className="space-y-3 max-w-3xl">
          <div className="inline-flex items-center space-x-1.5 bg-red-100 text-red-800 px-3 py-1 rounded-lg text-xs font-black uppercase tracking-wider">
            <BookOpen className="h-3.5 w-3.5" />
            <span>Verbraucher-Information & Ratgeber</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight leading-tight">
            Praxistests & McDonald’s Sparfibel
          </h1>
          <p className="text-sm text-gray-500 leading-relaxed font-semibold">
            Lerne mit unseren detaillierten Analysen, wie du bei jedem Besuch den maximalen Wert erzielen kannst.
          </p>
        </div>

        {/* Grid index */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
          {BlogPosts.map((post) => (
            <article key={post.id} className="bg-white rounded-2xl border border-gray-100 shadow-xs hover:shadow-md transition-all duration-200 overflow-hidden flex flex-col justify-between">
              <div className="p-6 space-y-4">
                
                {/* Metas inside grid */}
                <div className="flex items-center space-x-3 text-xs text-gray-400 font-medium font-mono">
                  <span className="flex items-center space-x-1">
                    <Calendar className="h-3.5 w-3.5 text-gray-300" />
                    <span>{new Date(post.date).toLocaleDateString('de-DE')}</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <Clock className="h-3.5 w-3.5 text-gray-300" />
                    <span>{post.readTime}</span>
                  </span>
                </div>

                <h3
                  onClick={() => setPath(`/blog/${post.slug}`)}
                  className="font-extrabold text-gray-900 text-lg hover:text-red-600 transition-colors leading-snug cursor-pointer"
                >
                  {post.title}
                </h3>
                
                <p className="text-xs text-gray-500 leading-relaxed line-clamp-3">
                  {post.summary}
                </p>

              </div>

              {/* Action row footer */}
              <div className="p-6 pt-0 border-t border-gray-50 flex justify-between items-center bg-gray-50/20">
                <span className="text-[11px] text-gray-400 font-semibold font-mono">By {post.author.split(' ')[0]}</span>
                
                <button
                  onClick={() => setPath(`/blog/${post.slug}`)}
                  className="px-3.5 py-1.5 bg-red-600 hover:bg-red-700 text-white rounded-lg text-xs font-black cursor-pointer transition-colors"
                >
                  Ratgeber lesen
                </button>
              </div>

            </article>
          ))}
        </div>

        {/* Interne Verlinkung Hub below loop */}
        <div className="bg-white rounded-3xl border border-gray-150 p-6 md:p-8 mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 shadow-xs">
          <div className="space-y-2">
            <h3 className="font-bold text-gray-900 text-sm">🎟️ Aktuelle Coupons</h3>
            <p className="text-xs text-gray-500">Gelange direkt in unseren vollwertigen Coupon-Katalog hinein.</p>
            <button onClick={() => setPath('/gutscheine/')} className="text-xs font-bold text-red-600 cursor-pointer">Zu den Gutscheinen &gt;</button>
          </div>
          <div className="space-y-2 md:border-x border-gray-100 md:px-6">
            <h3 className="font-bold text-gray-900 text-sm">📱 Offizielle App</h3>
            <p className="text-xs text-gray-500">Alles zum Treuesystem für zusätzliche Points und Präsente.</p>
            <button onClick={() => setPath('/app-gutscheine/')} className="text-xs font-bold text-red-600 cursor-pointer">Zu den App-Coupons &gt;</button>
          </div>
          <div className="space-y-2 md:pl-6">
            <h3 className="font-bold text-gray-900 text-sm">🎈 Happy Meal</h3>
            <p className="text-xs text-gray-500">Aktuelle Spielzeuge, Kinder-Bücher und Familien-Menü-Preise.</p>
            <button onClick={() => setPath('/happy-meal-angebote/')} className="text-xs font-bold text-red-600 cursor-pointer">Zu den Kinder-Codes &gt;</button>
          </div>
        </div>

      </div>
    </div>
  );
}
