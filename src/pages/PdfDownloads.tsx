import React from 'react';
import { FileText, Download, Printer, Share2, HelpCircle, ArrowLeft, Shield, Check, Info } from 'lucide-react';

interface PdfDownloadsProps {
  setPath: (path: string) => void;
}

export default function PdfDownloads({ setPath }: PdfDownloadsProps) {
  const pdfList = [
    {
      id: 'pdf-complete',
      title: "McDonald's Coupon-Heft Juni 2026 (Komplett)",
      description: "Das gesamte gedruckte Spar-Heft mit allen Coupon-Bögen im handlichen, druckoptimierten DIN-A4-Format. Enthält alle Doppelpacks, Nuggets, Desserts und Snacking-Deals.",
      fileSize: "1.2 MB",
      pages: 2,
      featuredCoupons: ["Doppelpack 226", "Doppelpack 344", "Doppelpack 338", "Klassiker Doppelpack 350", "XL Doppelpack 351", "Doppelpack 318", "20er Nuggets 499", "Snacking 305", "Dessert 209"],
      downloadUrl: "/mcdonalds_gutscheine_juni_2026.pdf",
      fileName: "mcdonalds_gutscheine_juni_2026_komplett.pdf"
    },
    {
      id: 'pdf-doublepacks',
      title: "Doppelpack & Burger-Upgrades (Sonderauszug)",
      description: "Spezieller, hochauflösender Auszug der beliebten Doppelpack-Aktionen. Ideal für den schnellen Einkauf zu zweit oder für den extragroßen Hunger.",
      fileSize: "650 KB",
      pages: 1,
      featuredCoupons: ["Doppelpack 226", "Doppelpack 344", "Doppelpack 338", "Klassiker Doppelpack 350", "XL Doppelpack 351"],
      downloadUrl: "/mcdonalds_gutscheine_juni_2026.pdf",
      fileName: "mcdonalds_gutscheine_doppelpack_deals.pdf"
    },
    {
      id: 'pdf-family',
      title: "Familien, Kids & Happy Meal® PDF-Gutscheine",
      description: "Perfekt für den Ausflug mit der Familie. Beinhaltet alle Happy Meal Kombinationen, Familien-Menüs sowie spielerische Spar-Kombis.",
      fileSize: "380 KB",
      pages: 1,
      featuredCoupons: ["Happy Meal + Klassiker Deal 309", "Happy Meal + Nuggets Deal 307", "Happy Meal + McChicken Deal 215"],
      downloadUrl: "/mcdonalds_gutscheine_juni_2026.pdf",
      fileName: "mcdonalds_gutscheine_familien_deals.pdf"
    },
    {
      id: 'pdf-snacks',
      title: "Snacks, Beilagen & Dessert Coupons",
      description: "Für den kleinen Hunger zwischendurch. Beinhaltet Gutscheine für Heißgetränke, McCafé Kuchen, Cookies, Milchshakes, Chili Cheese Snackers und Chicken Wings.",
      fileSize: "480 KB",
      pages: 1,
      featuredCoupons: ["Red Chili Cheese Snackers 305", "Heiße Tasche nach Wahl 201", "5 Chicken Wings 306", "Dessert McFlurry 167", "Milchshake 0,4l 209"],
      downloadUrl: "/mcdonalds_gutscheine_juni_2026.pdf",
      fileName: "mcdonalds_gutscheine_snacks_desserts.pdf"
    }
  ];

  const pdfFaqs = [
    {
      q: "Muss ich die PDF-Gutscheine zwingend ausdrucken?",
      a: "Nein, das ist nicht notwendig! Sie können das PDF einfach auf Ihrem Smartphone speichern und den Barcode oder den PLU-Code (z. B. PLU 226) direkt am Bestellterminal (Easy Order Kiosk), an der Kasse oder an der McDrive-Sprechsäule vorzeigen bzw. eintippen."
    },
    {
      q: "Sind die PDF-Coupons in jedem McDonald's in Deutschland gültig?",
      a: "Grundsätzlich gelten die nationalen Coupons in allen teilnehmenden Restaurants in Deutschland. Einzelne, meist inhabergeführte Franchise-Filialen oder Bahnhöfe/Flughäfen behalten sich jedoch das Recht vor, nicht an allen Spar-Aktionen teilzunehmen. Im Zweifelsfall empfiehlt es sich, vor der Bestellung kurz nachzufragen."
    },
    {
      q: "Müssen die Gutscheine farbig ausgedruckt werden?",
      a: "Nein. Falls Sie die Coupons lieber in Papierform nutzen möchten, reicht ein einfacher Schwarz-Weiß-Ausdruck völlig aus. Wichtig ist nur, dass die PLU-Nummern (Kassencodes) gut lesbar sind."
    },
    {
      q: "Benötige ich die McDonald's App, um die PDF-Gutscheine einzulösen?",
      a: "Nein! Das ist der größte Vorteil der PDF-Variante: Sie benötigen kein Nutzerkonto, müssen keine Registrierung durchführen und geben keine persönlichen Daten preis. Die Gutscheine sind vollkommen anmeldungsfrei einlösbar."
    }
  ];

  return (
    <div className="font-sans text-gray-900 bg-gray-50/50 pb-20 pt-10 min-h-screen">
      <div className="max-w-5xl mx-auto px-4 md:px-6">
        
        {/* Navigation Breadcrumb */}
        <button
          onClick={() => setPath('/')}
          className="inline-flex items-center space-x-1.5 text-xs font-bold text-gray-500 hover:text-red-600 transition-colors mb-6 cursor-pointer"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Zurück zur Startseite</span>
        </button>

        {/* Hero Header Section */}
        <div className="bg-gradient-to-br from-red-700 via-red-650 to-amber-600 rounded-3xl p-6 md:p-10 text-white shadow-xl mb-10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full blur-3xl pointer-events-none"></div>
          <div className="max-w-3xl space-y-4 relative z-10">
            <span className="inline-flex items-center space-x-1 bg-yellow-400 text-gray-950 text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-wider">
              Aktuell: Juni 2026 PDF
            </span>
            <h1 className="text-3xl md:text-4xl font-black tracking-tight leading-tight">
              McDonald's Gutscheine PDF-Download &amp; Druck-Center
            </h1>
            <p className="text-sm md:text-base text-red-100 max-w-2xl leading-relaxed font-medium">
              Laden Sie sich die aktuellen gedruckten Coupon-Blätter bequem als PDF-Datei herunter. Speichern Sie diese auf Ihrem Handy für den schnellen Offline-Abruf im Restaurant oder drucken Sie sie zu Hause aus, um an Kiosk &amp; Kasse bares Geld zu sparen!
            </p>
          </div>
        </div>

        {/* Informational Warning / Transparency Box */}
        <div className="bg-white rounded-2xl border border-gray-150/80 p-5 shadow-xs mb-8 flex items-start space-x-3 text-xs text-gray-600">
          <Info className="h-5 w-5 text-amber-500 shrink-0 mt-0.5" />
          <div className="space-y-1">
            <p className="font-bold text-gray-900">Information zur Unabhängigkeit &amp; rechtliche Hinweise</p>
            <p className="leading-relaxed">
              Dieses Download-Center ist ein redaktionelles Serviceangebot unseres unabhängigen Sparportals. Die hier gelisteten Couponcodes und Angaben basieren auf den offiziellen nationalen Verbandswerten von McDonald's Deutschland für Juni 2026. Wir hosten keine urheberrechtlich geschützten Markenzeichen oder urheberrechtlich geschützte Bilddateien. Alle Downloads werden als nützliche Textzusammenfassungen und druckoptimierte PDF-Referenzbögen bereitgestellt.
            </p>
          </div>
        </div>

        {/* PDF Download Grid */}
        <div className="space-y-6">
          <h2 className="text-xl md:text-2xl font-black text-gray-900 tracking-tight flex items-center space-x-2">
            <FileText className="h-6 w-6 text-red-600" />
            <span>Verfügbare PDF-Couponbögen zum Herunterladen</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pdfList.map((pdf) => (
              <div
                key={pdf.id}
                className="bg-white rounded-3xl border border-gray-150/75 p-6 shadow-sm flex flex-col justify-between hover:border-red-200 transition-all group relative overflow-hidden"
              >
                {/* Decorative border bar */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gray-100 group-hover:bg-red-500 transition-colors"></div>

                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <div className="p-3 bg-red-50 text-red-600 rounded-2xl">
                      <FileText className="h-6 w-6" />
                    </div>
                    <span className="text-[10px] font-mono bg-gray-100 text-gray-500 font-bold px-2 py-1 rounded-md">
                      {pdf.fileSize} • {pdf.pages} {pdf.pages === 1 ? 'Seite' : 'Seiten'}
                    </span>
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-black text-gray-900 text-base md:text-lg leading-tight group-hover:text-red-600 transition-colors">
                      {pdf.title}
                    </h3>
                    <p className="text-xs text-gray-500 leading-relaxed">
                      {pdf.description}
                    </p>
                  </div>

                  {/* Featured coupons badge chips */}
                  <div className="space-y-1.5">
                    <p className="text-[10px] uppercase font-bold tracking-wider text-gray-400">Enthaltene Top-Gutscheine:</p>
                    <div className="flex flex-wrap gap-1.5">
                      {pdf.featuredCoupons.map((coupon, i) => (
                        <span
                          key={i}
                          className="text-[10px] bg-red-50/50 hover:bg-red-50 text-red-700 font-bold px-2 py-0.5 rounded-full border border-red-100/50"
                        >
                          {coupon}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-gray-50 mt-6 flex flex-col sm:flex-row gap-3">
                  <a
                    href={pdf.downloadUrl}
                    download={pdf.fileName}
                    className="flex-1 text-center px-4 py-3 bg-yellow-400 hover:bg-yellow-500 text-gray-950 font-black rounded-xl text-xs cursor-pointer transition-all flex items-center justify-center space-x-1.5"
                  >
                    <Download className="h-4 w-4" />
                    <span>Jetzt herunterladen (PDF)</span>
                  </a>
                  <button
                    onClick={() => {
                      if (navigator.share) {
                        navigator.share({
                          title: pdf.title,
                          text: `Lade dir hier die aktuellen McDonald's Gutscheine für Juni 2026 herunter!`,
                          url: window.location.href
                        }).catch(() => {});
                      } else {
                        navigator.clipboard.writeText(window.location.href);
                        alert("Link kopiert! Sende das PDF-Center an deine Freunde.");
                      }
                    }}
                    className="px-4 py-3 bg-gray-50 hover:bg-gray-100 text-gray-700 font-bold rounded-xl text-xs cursor-pointer transition-all flex items-center justify-center space-x-1.5 border border-gray-200"
                  >
                    <Share2 className="h-4 w-4" />
                    <span>Teilen</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Usage instructions section */}
        <div className="bg-white rounded-3xl border border-gray-150/75 p-6 md:p-8 mt-12 space-y-6">
          <h2 className="text-lg md:text-xl font-black text-gray-900 tracking-tight uppercase flex items-center space-x-2">
            <Printer className="h-5 w-5 text-red-600" />
            <span>Anleitung: Wie löse ich gedruckte PDF-Gutscheine ein?</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-gray-600 leading-relaxed">
            <div className="space-y-2 p-4 bg-gray-50 rounded-2xl border border-gray-100">
              <span className="inline-flex items-center justify-center w-8 h-8 bg-yellow-400 text-gray-950 font-black rounded-full text-sm mb-1">1</span>
              <p className="font-bold text-gray-900">PDF auf Handy speichern</p>
              <p>Laden Sie die gewünschte PDF-Datei auf Ihr Smartphone herunter. Alternativ können Sie den Bogen auch ganz klassisch auf einem DIN-A4-Blatt ausdrucken.</p>
            </div>
            <div className="space-y-2 p-4 bg-gray-50 rounded-2xl border border-gray-100">
              <span className="inline-flex items-center justify-center w-8 h-8 bg-yellow-400 text-gray-950 font-black rounded-full text-sm mb-1">2</span>
              <p className="font-bold text-gray-900">PLU-Code eintippen oder nennen</p>
              <p>Nutzen Sie den PLU-Sparcode (z. B. <strong>PLU 226</strong> für den Doppelpack). Tippen Sie diesen einfach im Terminal unter "Gutscheine" ein oder nennen Sie ihn beim McDrive.</p>
            </div>
            <div className="space-y-2 p-4 bg-gray-50 rounded-2xl border border-gray-100">
              <span className="inline-flex items-center justify-center w-8 h-8 bg-yellow-400 text-gray-950 font-black rounded-full text-sm mb-1">3</span>
              <p className="font-bold text-gray-900">Günstiger genießen</p>
              <p>Der reduzierte Aktionspreis wird automatisch auf Ihrer Rechnung verbucht. Sie sparen bei jedem qualifizierten Menü-Produkt bares Geld!</p>
            </div>
          </div>
        </div>

        {/* Advantages of PDFs vs App */}
        <div className="bg-red-50/40 border border-red-100 rounded-3xl p-6 md:p-8 mt-8 space-y-4">
          <h3 className="text-base md:text-lg font-black text-red-950 flex items-center space-x-2">
            <Shield className="h-5 w-5 text-red-600" />
            <span>Die Vorteile von PDF-Gutscheinen gegenüber der App</span>
          </h3>
          <p className="text-xs text-gray-650 leading-relaxed">
            Die offizielle App verlangt oft eine aufwendige Registrierung, sammelt Standortdaten und bricht bei instabiler Internetverbindung in den Filialen zusammen. Das PDF-Heft bietet echte Erleichterung:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-semibold text-gray-700">
            <div className="flex items-center space-x-2 bg-white px-4 py-3 rounded-xl border border-red-100/50">
              <Check className="h-4 w-4 text-emerald-600 shrink-0" />
              <span>100% Offline-Verfügbarkeit im Restaurant</span>
            </div>
            <div className="flex items-center space-x-2 bg-white px-4 py-3 rounded-xl border border-red-100/50">
              <Check className="h-4 w-4 text-emerald-600 shrink-0" />
              <span>Keine Angabe persönlicher Daten/Registrierung</span>
            </div>
            <div className="flex items-center space-x-2 bg-white px-4 py-3 rounded-xl border border-red-100/50">
              <Check className="h-4 w-4 text-emerald-600 shrink-0" />
              <span>Einfaches Teilen mit Freunden über Messenger</span>
            </div>
            <div className="flex items-center space-x-2 bg-white px-4 py-3 rounded-xl border border-red-100/50">
              <Check className="h-4 w-4 text-emerald-600 shrink-0" />
              <span>Schnellere Abwicklung am Easy-Order Terminal</span>
            </div>
          </div>
        </div>

        {/* FAQ list for PDFs */}
        <div className="bg-white rounded-3xl border border-gray-150/75 p-6 md:p-8 mt-8 space-y-6">
          <div className="text-center">
            <HelpCircle className="h-8 w-8 text-red-500 mx-auto mb-2" />
            <h2 className="text-lg md:text-xl font-black text-gray-900 tracking-tight uppercase">FAQ - Häufig gestellte Fragen zu PDF-Gutscheinen</h2>
            <p className="text-xs text-gray-500 max-w-lg mx-auto mt-1">Hier finden Sie alle Antworten rund um die Einlösung und Gültigkeit von gedruckten Gutscheinen an der Kasse.</p>
          </div>
          <div className="divide-y divide-gray-100 space-y-5">
            {pdfFaqs.map((faq, index) => (
              <div key={index} className="pt-4 first:pt-0">
                <h4 className="font-bold text-xs sm:text-sm text-gray-900 leading-snug flex items-start gap-2">
                  <span className="text-red-600 font-mono text-sm">F:</span>
                  <span>{faq.q}</span>
                </h4>
                <p className="text-xs text-gray-500 mt-2 pl-5 leading-relaxed bg-gray-50/50 p-3 rounded-xl border border-gray-100/60">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
