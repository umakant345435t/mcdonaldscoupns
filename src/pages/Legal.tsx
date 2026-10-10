import React, { useState } from 'react';
import { Mail, ShieldCheck, Landmark, Check, ExternalLink, Shield, Send, MessageSquare, AlertCircle } from 'lucide-react';

export type LegalPageType =
  | 'ueber-uns'
  | 'about'
  | 'about-us'
  | 'kontakt'
  | 'contact'
  | 'contact-us'
  | 'datenschutz'
  | 'privacy'
  | 'privacy-policy'
  | 'impressum'
  | 'imprint'
  | 'haftungsausschluss'
  | 'disclaimer'
  | 'nutzungsbedingungen'
  | 'terms';

interface LegalProps {
  pageType: LegalPageType;
  setPath: (path: string) => void;
}

export default function Legal({ pageType, setPath }: LegalProps) {
  // Contact Form State
  const [formName, setFormName] = useState('');
  const [formEmail, setFormEmail] = useState('');
  const [formSubject, setFormSubject] = useState('');
  const [formMessage, setFormMessage] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formError, setFormError] = useState('');

  // Normalize page family
  const isAbout = pageType === 'ueber-uns' || pageType === 'about' || pageType === 'about-us';
  const isContact = pageType === 'kontakt' || pageType === 'contact' || pageType === 'contact-us';
  const isPrivacy = pageType === 'datenschutz' || pageType === 'privacy' || pageType === 'privacy-policy';
  const isImprint = pageType === 'impressum' || pageType === 'imprint';
  const isDisclaimer = pageType === 'haftungsausschluss' || pageType === 'disclaimer';
  const isTerms = pageType === 'nutzungsbedingungen' || pageType === 'terms';

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formEmail.trim() || !formMessage.trim()) {
      setFormError('Bitte fülle deine E-Mail-Adresse und eine Nachricht aus.');
      return;
    }
    setFormError('');
    setFormSubmitted(true);
  };

  return (
    <div className="font-sans text-gray-900 bg-gray-50/50 pb-16 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 md:px-6 pt-10">
        
        <div className="bg-white rounded-3xl border border-gray-150 p-6 md:p-10 shadow-xs space-y-6">

          {/* ========================================================================= */}
          {/* ABOUT US / ÜBER UNS (Rein Deutsch) */}
          {/* ========================================================================= */}
          {isAbout && (
            <div className="space-y-6">
              <div className="border-b border-gray-100 pb-4">
                <span className="text-xs font-bold text-red-650 tracking-wider uppercase">Transparenz &amp; Verbraucherschutz</span>
                <h1 className="text-3xl font-black text-gray-900 tracking-tight mt-1">
                  Über Uns – das McDonaldsGutscheine.de Sparportal
                </h1>
              </div>

              <p className="text-sm text-gray-700 leading-relaxed font-medium">
                Herzlich willkommen auf <strong>mcdonaldsgutscheine.de</strong>! Wir sind dein unabhängiger Spar-Ratgeber im Netz, der es sich zur täglichen Aufgabe gemacht hat, verlässliche Einkaufsinformationen, tagesaktuelle Kassen-PLUs und Rabattaktionen für McDonald’s in ganz Deutschland bereitzustellen.
              </p>
              
              <h3 className="text-lg font-bold text-gray-900">Wer wir sind</h3>
              <p className="text-xs text-gray-650 leading-relaxed">
                Wir sind ein engagiertes, unabhängiges Redaktionsteam aus Verbraucherjournalisten und Fast-Food-Sparbegeisterten mit Sitz in Berlin. Da viele allgemeine Gutscheinportale veraltete Gutscheincodes, abgelaufene Werbeaktionen oder nicht funktionierende Nummern auflisten, haben wir eine transparente und spezialisierte Plattform geschaffen. Unsere Redaktion prüft Kassen-PLUs und Rabattaktionen regelmäßig vor Ort in deutschen Restaurants und über die offizielle McDonald's App.
              </p>

              <h3 className="text-lg font-bold text-gray-900">Zweck dieser Website &amp; kostenlose Spar-Werkzeuge</h3>
              <p className="text-xs text-gray-650 leading-relaxed">
                Unser Ziel ist die lückenlose und kostenfreie Bereitstellung überprüfter Sparmöglichkeiten. Neben den bewährten PLU-Nummern für die Kasse oder den Easy-Order-Terminal bieten wir nützliche Werkzeuge:
              </p>
              <ul className="list-disc pl-5 text-xs text-gray-650 space-y-1.5">
                <li>Einen interaktiven <strong>Spar-Rechner</strong>, mit dem du vor deiner Bestellung den exakten Rabattbetrag kalkulieren kannst.</li>
                <li>Das offizielle, druckoptimierte <strong>A4-Bonusbuch 2026 (PDF)</strong> zum bequemen Download für den McDrive oder das Mitnehmen.</li>
                <li>Geprüfte Lieferservice-Aktionen wie der Gutscheincode <strong>MCD2X10</strong> für Uber Eats Deutschland (2x 10 € Ersparnis).</li>
                <li>Ausführliche Ratgeber zu MyMcDonald's Treuepunkten, Kassenbedienung und Gratis-Prämien.</li>
              </ul>

              <h3 className="text-lg font-bold text-gray-900">Finanzierung &amp; Werberichtlinien (Google AdSense)</h3>
              <p className="text-xs text-gray-650 leading-relaxed">
                Die Nutzung sämtlicher Funktionen auf mcdonaldsgutscheine.de ist für Verbraucher zu 100 % kostenlos und ohne Registrierungszwang möglich. Um die Serverinfrastruktur, technische Entwicklung und redaktionelle Recherche zu finanzieren, blenden wir dezente Online-Werbung (z.B. über Google AdSense) ein. Unsere redaktionelle Berichterstattung und Coupon-Auswahl erfolgt unabhängig von Werbepartnern.
              </p>

              <div className="bg-amber-50 p-4 rounded-2xl border border-amber-200 text-amber-950 text-xs leading-relaxed space-y-1">
                <p className="font-bold">Markenrechtlicher Unabhängigkeitshinweis:</p>
                <p>
                  McDonald's, Big Mac, Happy Meal, McFlurry, McCafé, McMuffin und McRib sind eingetragene Marken der McDonald's Corporation bzw. McDonald's Deutschland LLC. mcdonaldsgutscheine.de ist ein unabhängiges redaktionelles Verbraucherportal und steht in keiner geschäftlichen Beziehung, Partnerschaft oder Kooperation zur McDonald's Corporation.
                </p>
              </div>
            </div>
          )}

          {/* ========================================================================= */}
          {/* CONTACT US / KONTAKT (Rein Deutsch mit interaktivem Formular) */}
          {/* ========================================================================= */}
          {isContact && (
            <div className="space-y-6">
              <div className="border-b border-gray-100 pb-4">
                <span className="text-xs font-bold text-red-650 tracking-wider uppercase">Hilfe &amp; Redaktioneller Support</span>
                <h1 className="text-3xl font-black text-gray-900 tracking-tight mt-1">
                  Kontakt &amp; Support
                </h1>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-2">
                
                {/* Left Column: Direct Info */}
                <div className="space-y-5">
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                      <Mail className="h-5 w-5 text-red-650" />
                      <span>Direkter Kontakt per E-Mail</span>
                    </h3>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      Hast du Fragen zur Einlösung, einen ungültigen Kassen-Code entdeckt oder möchtest du uns auf eine neue Rabattaktion aufmerksam machen? Unser Redaktionsteam freut sich über deine Nachricht!
                    </p>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-2xl border border-gray-200 space-y-3 text-xs">
                    <div>
                      <p className="text-[10px] uppercase font-bold text-gray-400">Allgemeine Anfragen &amp; Redaktion:</p>
                      <a
                        href="mailto:kontakt@mcdonaldsgutscheine.de"
                        className="text-base font-black text-red-650 hover:underline select-all block"
                      >
                        kontakt@mcdonaldsgutscheine.de
                      </a>
                    </div>
                    <div>
                      <p className="text-[10px] uppercase font-bold text-gray-400">Technischer Support &amp; Verifizierung:</p>
                      <a
                        href="mailto:support@mcdonaldsgutscheine.de"
                        className="text-base font-black text-red-650 hover:underline select-all block"
                      >
                        support@mcdonaldsgutscheine.de
                      </a>
                    </div>
                  </div>

                  <div className="bg-white p-4 rounded-2xl border border-gray-150 space-y-2 text-xs text-gray-650">
                    <p className="font-bold text-gray-900">📍 Anschrift der Redaktion:</p>
                    <p className="font-mono text-[11px] leading-relaxed text-gray-700">
                      Sparportal Media Deutschland GmbH<br />
                      Mustergasse 24<br />
                      10115 Berlin<br />
                      Deutschland
                    </p>
                    <p className="text-[11px] text-gray-400 pt-1">
                      Antwortzeit: In der Regel antworten wir innerhalb von 24 bis 48 Stunden an Werktagen.
                    </p>
                  </div>
                </div>

                {/* Right Column: Functional Interactive Contact Form */}
                <div className="bg-gray-50/70 p-6 rounded-3xl border border-gray-150 space-y-4">
                  <h3 className="text-base font-bold text-gray-900 flex items-center gap-2">
                    <MessageSquare className="h-4 w-4 text-red-650" />
                    <span>Nachricht online absenden</span>
                  </h3>

                  {formSubmitted ? (
                    <div className="bg-emerald-50 border border-emerald-200 text-emerald-900 p-5 rounded-2xl space-y-2 text-xs">
                      <div className="flex items-center gap-2 font-bold text-emerald-800 text-sm">
                        <Check className="h-5 w-5 text-emerald-600" />
                        <span>Vielen Dank! Deine Nachricht wurde gesendet.</span>
                      </div>
                      <p className="leading-relaxed">
                        Unser Redaktionsteam hat deine Anfrage erhalten. Wir prüfen deine Nachricht und melden uns schnellstmöglich bei dir.
                      </p>
                      <button
                        onClick={() => {
                          setFormSubmitted(false);
                          setFormMessage('');
                          setFormSubject('');
                        }}
                        className="mt-3 px-3 py-1.5 bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl font-bold text-[11px] cursor-pointer"
                      >
                        Weitere Nachricht senden
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleFormSubmit} className="space-y-3 text-xs">
                      {formError && (
                        <div className="p-2.5 bg-red-50 border border-red-200 text-red-700 rounded-xl flex items-center gap-2 text-[11px] font-bold">
                          <AlertCircle className="h-4 w-4 shrink-0" />
                          <span>{formError}</span>
                        </div>
                      )}

                      <div>
                        <label className="block font-bold text-gray-700 mb-1">
                          Dein Name (optional)
                        </label>
                        <input
                          type="text"
                          value={formName}
                          onChange={(e) => setFormName(e.target.value)}
                          placeholder="z.B. Markus Weber"
                          className="w-full px-3 py-2 bg-white border border-gray-200 rounded-xl focus:border-red-600 focus:outline-hidden"
                        />
                      </div>

                      <div>
                        <label className="block font-bold text-gray-700 mb-1">
                          Deine E-Mail-Adresse *
                        </label>
                        <input
                          type="email"
                          required
                          value={formEmail}
                          onChange={(e) => setFormEmail(e.target.value)}
                          placeholder="name@beispiel.de"
                          className="w-full px-3 py-2 bg-white border border-gray-200 rounded-xl focus:border-red-600 focus:outline-hidden"
                        />
                      </div>

                      <div>
                        <label className="block font-bold text-gray-700 mb-1">
                          Betreff
                        </label>
                        <input
                          type="text"
                          value={formSubject}
                          onChange={(e) => setFormSubject(e.target.value)}
                          placeholder="z.B. Ungültiger Coupon PLU 452 oder Feedback"
                          className="w-full px-3 py-2 bg-white border border-gray-200 rounded-xl focus:border-red-600 focus:outline-hidden"
                        />
                      </div>

                      <div>
                        <label className="block font-bold text-gray-700 mb-1">
                          Deine Nachricht *
                        </label>
                        <textarea
                          required
                          rows={4}
                          value={formMessage}
                          onChange={(e) => setFormMessage(e.target.value)}
                          placeholder="Deine Nachricht oder Coupon-Hinweis..."
                          className="w-full px-3 py-2 bg-white border border-gray-200 rounded-xl focus:border-red-600 focus:outline-hidden"
                        ></textarea>
                      </div>

                      <button
                        type="submit"
                        className="w-full py-2.5 bg-red-650 hover:bg-red-700 text-white font-bold rounded-xl flex items-center justify-center gap-2 cursor-pointer transition-colors shadow-xs"
                      >
                        <Send className="h-4 w-4" />
                        <span>Nachricht absenden</span>
                      </button>

                      <p className="text-[10px] text-gray-400 text-center pt-1 leading-tight">
                        Ihre Daten werden vertraulich gem. DSGVO verarbeitet und ausschließlich zur Beantwortung der Anfrage verwendet.
                      </p>
                    </form>
                  )}
                </div>

              </div>
            </div>
          )}

          {/* ========================================================================= */}
          {/* PRIVACY POLICY / DATENSCHUTZERKLÄRUNG (Google AdSense & DSGVO konform) */}
          {/* ========================================================================= */}
          {isPrivacy && (
            <div className="space-y-6 text-xs text-gray-650 leading-relaxed">
              <div className="border-b border-gray-100 pb-4">
                <span className="text-xs font-bold text-red-650 tracking-wider uppercase">Datenschutz &amp; Privatsphäre</span>
                <h1 className="text-3xl font-black text-gray-900 tracking-tight mt-1">
                  Datenschutzerklärung
                </h1>
                <p className="text-gray-500 text-xs mt-1">
                  Informationen zur Datenverarbeitung nach Art. 13, 14 DSGVO und Erfüllung der Google AdSense Programm-Richtlinien
                </p>
              </div>

              <p className="text-gray-800 font-medium">
                Der Schutz deiner persönlichen Daten bei der Nutzung von <strong>mcdonaldsgutscheine.de</strong> ist uns ein zentrales Anliegen. Wir behandeln deine personenbezogenen Daten streng vertraulich und in Übereinstimmung mit den gesetzlichen Datenschutzvorschriften (DSGVO, TTDSG) sowie dieser Datenschutzerklärung.
              </p>

              <h3 className="text-base font-bold text-gray-900 text-left pt-2">1. Verantwortliche Stelle</h3>
              <p>
                Verantwortlicher im Sinne der Datenschutz-Grundverordnung (Art. 4 Abs. 7 DSGVO) und des Telemediengesetzes ist:<br />
                <strong>Sparportal Media Deutschland GmbH</strong><br />
                Mustergasse 24, 10115 Berlin, Deutschland<br />
                E-Mail: <a href="mailto:kontakt@mcdonaldsgutscheine.de" className="text-red-650 underline font-bold">kontakt@mcdonaldsgutscheine.de</a> | Support: <a href="mailto:support@mcdonaldsgutscheine.de" className="text-red-650 underline font-bold">support@mcdonaldsgutscheine.de</a>
              </p>

              <h3 className="text-base font-bold text-gray-900 text-left pt-2">2. Google AdSense &amp; Werbe-Cookies (Google Programm-Richtlinien)</h3>
              <p>
                Auf unserer Website ist <strong>Google AdSense</strong> eingebunden, ein Werbedienst der Google Ireland Limited („Google“), Gordon House, Barrow Street, Dublin 4, Irland. Google AdSense verwendet sog. „Cookies“ (Textdateien, die auf deinem Computer oder Endgerät gespeichert werden) sowie Web Beacons (unsichtbare Zählpixel), um die Nutzung der Website zu analysieren und relevante Werbeanzeigen auszuliefern.
              </p>
              
              <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5 text-amber-950 font-medium my-4 space-y-2">
                <p className="font-bold text-sm text-amber-900">Pflichtangaben gemäß Google AdSense Programm-Richtlinien:</p>
                <ul className="list-disc pl-5 space-y-1.5 text-xs">
                  <li>
                    <strong>Drittanbieter &amp; Google Cookies:</strong> Drittanbieter, einschließlich Google, verwenden Cookies, um Anzeigen basierend auf vorherigen Besuchen eines Nutzers auf dieser Website oder anderen Websites im Internet zu schalten.
                  </li>
                  <li>
                    <strong>Bereitstellung zielgerichteter Werbung:</strong> Die Verwendung von Werbe-Cookies durch Google ermöglicht es Google und seinen Werbepartnern, Nutzern Anzeigen auf Grundlage ihres Besuchs auf dieser Website und/oder anderen Websites im Internet bereitzustellen.
                  </li>
                  <li>
                    <strong>Deaktivierung personalisierter Werbung (Opt-Out):</strong> Nutzer können personalisierte Werbung jederzeit in den offiziellen Google Ads-Einstellungen deaktivieren unter:{' '}
                    <a href="https://adssettings.google.com/" target="_blank" rel="noopener noreferrer" className="underline font-bold inline-flex items-center gap-0.5 text-amber-950 hover:text-red-700">
                      <span>https://adssettings.google.com/</span>
                      <ExternalLink className="h-3 w-3 inline" />
                    </a>.
                  </li>
                  <li>
                    <strong>Alternativer Opt-Out über Verbraucherportale:</strong> Nutzer können die Verwendung von Cookies durch Drittanbieter für personalisierte Werbung alternativ über das US-Portal{' '}
                    <a href="https://www.aboutads.info/choices/" target="_blank" rel="noopener noreferrer" className="underline font-bold inline-flex items-center gap-0.5 text-amber-950 hover:text-red-700">
                      <span>www.aboutads.info/choices</span>
                      <ExternalLink className="h-3 w-3 inline" />
                    </a>{' '}
                    oder das europäische Portal{' '}
                    <a href="https://www.youronlinechoices.com/" target="_blank" rel="noopener noreferrer" className="underline font-bold inline-flex items-center gap-0.5 text-amber-950 hover:text-red-700">
                      <span>www.youronlinechoices.com</span>
                      <ExternalLink className="h-3 w-3 inline" />
                    </a>{' '}
                    deaktivieren.
                  </li>
                </ul>
              </div>

              <p>
                Die durch Cookies erzeugten Informationen über deine Benutzung dieser Website (einschließlich deiner gekürzten IP-Adresse) werden in der Regel an einen Server von Google übertragen und dort gespeichert. Weitere Informationen zur Datenverwendung durch Google findest du in der Datenschutzerklärung von Google unter{' '}
                <a href="https://policies.google.com/technologies/ads" target="_blank" rel="noopener noreferrer" className="text-red-650 underline font-bold">
                  https://policies.google.com/technologies/ads
                </a>.
              </p>

              <h3 className="text-base font-bold text-gray-900 text-left pt-2">3. Server-Log-Dateien</h3>
              <p>
                Der Webserver erhebt und speichert automatisch Informationen in sogenannten Server-Log-Dateien, die dein Browser automatisch übermittelt. Dies sind: Browsertyp und Browserversion, verwendetes Betriebssystem, Referrer URL, Hostname des zugreifenden Rechners sowie Uhrzeit der Serveranfrage. Diese Daten sind nicht bestimmten Personen zuordenbar und dienen ausschließlich der technischen Sicherheit und dem stabilen Betrieb.
              </p>

              <h3 className="text-base font-bold text-gray-900 text-left pt-2">4. SSL- bzw. TLS-Verschlüsselung</h3>
              <p>
                Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte eine lückenlose SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennst du daran, dass die Adresszeile des Browsers von „http://“ auf „https://“ wechselt und an dem Schloss-Symbol in der Browserzeile.
              </p>

              <h3 className="text-base font-bold text-gray-900 text-left pt-2">5. Betroffenenrechte nach DSGVO</h3>
              <p>
                Nach den Vorschriften der Datenschutz-Grundverordnung (DSGVO) hast du als betroffene Person jederzeit folgende Rechte:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Recht auf Auskunft über deine bei uns gespeicherten personenbezogenen Daten (Art. 15 DSGVO).</li>
                <li>Recht auf Berichtigung unrichtiger Daten (Art. 16 DSGVO).</li>
                <li>Recht auf Löschung („Recht auf Vergessenwerden“, Art. 17 DSGVO).</li>
                <li>Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO).</li>
                <li>Recht auf Datenübertragbarkeit (Art. 20 DSGVO).</li>
                <li>Widerspruchsrecht gegen die Verarbeitung (Art. 21 DSGVO).</li>
              </ul>
              <p className="pt-1">
                Zur Wahrnehmung dieser Rechte genügt eine formlose E-Mail an: <a href="mailto:kontakt@mcdonaldsgutscheine.de" className="text-red-650 underline font-bold">kontakt@mcdonaldsgutscheine.de</a>.
              </p>
            </div>
          )}

          {/* ========================================================================= */}
          {/* IMPRESSUM (TMG § 5 & MStV § 18) */}
          {/* ========================================================================= */}
          {isImprint && (
            <div className="space-y-6 text-xs text-gray-650 leading-relaxed">
              <div className="border-b border-gray-100 pb-4">
                <span className="text-xs font-bold text-red-650 tracking-wider uppercase">Gesetzliche Anbieterkennzeichnung</span>
                <h1 className="text-3xl font-black text-gray-900 tracking-tight mt-1">
                  Impressum
                </h1>
              </div>

              <p className="text-gray-800 font-bold">
                Angaben gemäß § 5 TMG / § 18 Abs. 2 MStV:
              </p>
              
              <div className="space-y-2 bg-gray-50 p-4 rounded-xl border border-gray-150">
                <p className="font-extrabold text-gray-950 font-sans text-xs">Sparportal Media Deutschland GmbH</p>
                <p>Mustergasse 24</p>
                <p>10115 Berlin</p>
                <p>Deutschland</p>
              </div>

              <h3 className="text-base font-bold text-gray-900">Vertreten durch:</h3>
              <p>Maximilian Sparmann (Geschäftsführer)</p>

              <h3 className="text-base font-bold text-gray-900">Kontakt:</h3>
              <p>E-Mail: <a href="mailto:kontakt@mcdonaldsgutscheine.de" className="text-red-650 underline font-bold">kontakt@mcdonaldsgutscheine.de</a></p>
              <p>Support: <a href="mailto:support@mcdonaldsgutscheine.de" className="text-red-650 underline font-bold">support@mcdonaldsgutscheine.de</a></p>
              <p>Telefon: +49 (0) 30 12345678 (Keine telefonische Auskunft zu Gutscheinen!)</p>

              <h3 className="text-base font-bold text-gray-900">Registereintrag:</h3>
              <p>Eintragung im Handelsregister.</p>
              <p>Registergericht: Amtsgericht Charlottenburg (Berlin)</p>
              <p>Registernummer: HRB 987654 B</p>

              <h3 className="text-base font-bold text-gray-900">Umsatzsteuer-ID:</h3>
              <p>Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz: DE 123456789</p>

              <h3 className="text-base font-bold text-gray-900">Verantwortlich für den journalistisch-redaktionellen Inhalt:</h3>
              <p>Maximilian Sparmann, Mustergasse 24, 10115 Berlin</p>

              <h3 className="text-base font-bold text-gray-900">Streitschlichtung:</h3>
              <p>
                Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="text-red-650 underline">https://ec.europa.eu/consumers/odr/</a>. Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
              </p>
            </div>
          )}

          {/* ========================================================================= */}
          {/* DISCLAIMER / HAFTUNGSAUSSCHLUSS */}
          {/* ========================================================================= */}
          {isDisclaimer && (
            <div className="space-y-6 text-xs text-gray-650 leading-relaxed">
              <div className="border-b border-gray-100 pb-4">
                <span className="text-xs font-bold text-red-650 tracking-wider uppercase">Rechtliche Hinweise</span>
                <h1 className="text-3xl font-black text-gray-900 tracking-tight mt-1">
                  Haftungsausschluss (Disclaimer)
                </h1>
              </div>
              
              <h3 className="text-base font-bold text-gray-900">1. Haftung für redaktionelle Inhalte &amp; Gutscheincodes</h3>
              <p>
                Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Obwohl wir Kassen-PLUs, Rabattbeträge und Aktionszeiträume sorgfältig recherchieren, übernehmen wir keine Gewähr für die ständige Verfügbarkeit der Angebote in einzelnen Franchise-Filialen vor Ort. Preise und Verfügbarkeit können regional variieren.
              </p>

              <h3 className="text-base font-bold text-gray-900">2. Haftung für Verlinkungen</h3>
              <p>
                Unser Angebot enthält ggf. Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
              </p>
            </div>
          )}

          {/* ========================================================================= */}
          {/* TERMS / NUTZUNGSBEDINGUNGEN */}
          {/* ========================================================================= */}
          {isTerms && (
            <div className="space-y-6 text-xs text-gray-650 leading-relaxed">
              <div className="border-b border-gray-100 pb-4">
                <span className="text-xs font-bold text-red-650 tracking-wider uppercase">Nutzungsbedingungen</span>
                <h1 className="text-3xl font-black text-gray-900 tracking-tight mt-1">
                  Nutzungsbedingungen
                </h1>
              </div>

              <p>
                Die Nutzung unseres Verbraucherportals ist für private Endverbraucher kostenlos und ohne Registrierung zugänglich.
              </p>

              <h3 className="text-base font-bold text-gray-900">1. Urheberrecht</h3>
              <p>
                Die auf dieser Seite erstellten redaktionellen Texte, Ratgeber und interaktiven Rechnertools unterliegen dem deutschen Urheberrecht. Die Vervielfältigung oder Bearbeitung bedarf unserer schriftlichen Zustimmung.
              </p>

              <h3 className="text-base font-bold text-gray-900">2. Markenhinweis</h3>
              <p>
                Alle genannten Marken- und Warenzeichen gehören ihren jeweiligen Eigentümern. mcdonaldsgutscheine.de ist eine unabhängige Verbraucherpublikation.
              </p>
            </div>
          )}

          {/* Global Backlink & Navigation Footer */}
          <div className="pt-6 border-t border-gray-100 flex flex-col sm:flex-row justify-between items-center text-xs text-gray-500 gap-3">
            <p>
              Zurück zur Startseite für tagesaktuelle{' '}
              <a href="https://www.mcdonaldsgutscheine.de/" className="font-bold text-red-650 hover:underline">
                McDonald Gutscheine
              </a>{' '}
              und Sparangebote in Deutschland.
            </p>
            <button
              onClick={() => setPath('/')}
              className="px-4 py-2 bg-gray-900 hover:bg-gray-800 text-white font-bold rounded-xl text-xs cursor-pointer transition-colors"
            >
              Startseite öffnen
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
