import React from 'react';
import { Mail, ShieldCheck, Landmark, Flame, Check, HelpCircle, ExternalLink, Shield } from 'lucide-react';

interface LegalProps {
  pageType: 'ueber-uns' | 'kontakt' | 'datenschutz' | 'impressum' | 'cookies' | 'haftungsausschluss' | 'nutzungsbedingungen';
  setPath: (path: string) => void;
}

export default function Legal({ pageType, setPath }: LegalProps) {
  return (
    <div className="font-sans text-gray-900 bg-gray-50/50 pb-16 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 md:px-6 pt-10">

        <div className="bg-white rounded-3xl border border-gray-100 p-6 md:p-10 shadow-xs space-y-6">

          {/* Render - Über Uns (Who we are, objective, transparency) */}
          {pageType === 'ueber-uns' && (
            <div className="space-y-6">
              <h1 className="text-3xl font-black text-gray-900 tracking-tight border-b pb-4">Über Uns – das McDonaldsGutscheine.de Sparportal</h1>
              <p className="text-sm text-gray-700 leading-relaxed font-medium">
                Herzlich willkommen auf <strong>mcdonaldsgutscheine.de</strong>! Wir sind dein unabhängiger Spar-Ratgeber im Netz, der es sich zur leidenschaftlichen Aufgabe gemacht hat, Licht ins Coupon-Chaos bei McDonald’s zu bringen.
              </p>
              
              <h3 className="text-lg font-bold text-gray-900">Wer wir sind</h3>
              <p className="text-xs text-gray-650 leading-relaxed">
                Wir sind ein ungebundenes Team aus Verbraucherjournalisten und leidenschaftlichen App-Sonderprüfern mit Sitz in Deutschland. Da viele traditionelle Gutscheinportale nur automatisierten oder gar abgelaufenen Datenmüll listen, wollten wir eine qualitativ hochwertige Alternative erschaffen. Wir testen Coupons wöchentlich selbst.
              </p>

              <h3 className="text-lg font-bold text-gray-900">Zweck dieser Website</h3>
              <p className="text-xs text-gray-650 leading-relaxed">
                Unser Ziel ist die lückenlose Bereitstellung verlässlicher Einkaufsinformationen für Fast-Food-Kunden. Neben den einfachen PLU-Kassennummern analysieren wir Kombiwochen, decken fehlerhafte Filialtarife auf und bieten einen interaktiven <strong>"Spar-Rechner"</strong>, womit Kunden ihren Belegwert im Vorhinein optimieren können.
              </p>

              <h3 className="text-lg font-bold text-gray-900">Transparenz – Unabhängig & Ehrlich</h3>
              <p className="text-xs text-gray-650 leading-relaxed">
                Wir sind zu 100% unabhängig. Das bedeutet: Wir werden nicht von McDonald's bezahlt, gesponsert oder instruiert. Alle Bewertungen und Praxistests geben unsere ehrliche redaktionelle Meinung wieder. Wir finanzieren diesen kostenfreien Service über Werbeanzeigen (z.B. Google AdSense), um den Serverbetrieb und die regelmäßige Datenpflege zu decken.
              </p>
            </div>
          )}

          {/* Render - Kontakt (ONLY Email, no forms) */}
          {pageType === 'kontakt' && (
            <div className="space-y-6">
              <h1 className="text-3xl font-black text-gray-900 tracking-tight border-b pb-4">Kontakt & Support</h1>
              
              <div className="max-w-2xl mx-auto text-center py-8 px-4 bg-gray-50/50 rounded-3xl border border-gray-100 space-y-6">
                <div className="mx-auto w-16 h-16 bg-red-100 rounded-full flex items-center justify-center text-red-600">
                  <Mail className="h-8 w-8" />
                </div>
                
                <div className="space-y-2">
                  <h2 className="text-xl font-bold text-gray-900">Schreibe uns direkt per E-Mail</h2>
                  <p className="text-xs text-gray-500 max-w-md mx-auto">
                    Wir verzichten bewusst auf fehleranfällige Kontaktformulare. Du kannst uns ganz einfach, direkt und unkompliziert per E-Mail erreichen.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-gray-200/60 shadow-xs inline-block max-w-md w-full">
                  <p className="text-[11px] uppercase tracking-wider font-bold text-gray-450 mb-1">E-Mail-Adresse für Support & Feedback</p>
                  <a 
                    href="mailto:kontakt@mcdonaldsgutscheine.de" 
                    className="text-lg md:text-xl font-black text-red-650 hover:text-red-750 transition-colors select-all break-all block"
                  >
                    kontakt@mcdonaldsgutscheine.de
                  </a>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left max-w-md mx-auto pt-2">
                  <div className="bg-white p-4 rounded-xl border border-gray-100 space-y-1">
                    <span className="text-sm">⏳</span>
                    <h4 className="font-bold text-xs text-gray-900">Antwortzeit</h4>
                    <p className="text-[11px] text-gray-500">In der Regel antworten wir innerhalb von 24 Stunden an Werktagen.</p>
                  </div>
                  <div className="bg-white p-4 rounded-xl border border-gray-100 space-y-1">
                    <span className="text-sm">📝</span>
                    <h4 className="font-bold text-xs text-gray-900">Coupon-Fehler</h4>
                    <p className="text-[11px] text-gray-500">Sende uns gerne abfotografierte, freigegebene PLU-Werte von Coupons ein.</p>
                  </div>
                </div>

                <hr className="border-gray-200/60 max-w-md mx-auto" />

                <div className="text-[11px] text-gray-400 max-w-md mx-auto leading-relaxed">
                  <strong>Rechtlicher Hinweis:</strong> Es werden von uns keine personenbezogenen Daten über ein Formular auf diesem Server gespeichert. Deine E-Mail an uns wird vertraulich im Rahmen der gesetzlichen Aufbewahrungsfristen behandelt.
                </div>
              </div>
            </div>
          )}

          {/* Render - Datenschutzerklärung (Google AdSense paragraph, DSGVO, Cookies) */}
          {pageType === 'datenschutz' && (
            <div className="space-y-6 text-xs text-gray-650 leading-relaxed">
              <h1 className="text-3xl font-black text-gray-900 tracking-tight border-b pb-4">Datenschutzerklärung (Privacy Policy)</h1>
              <p className="text-gray-800 font-medium">
                Personenbezogene Daten (nachfolgend zumeist nur „Daten“ genannt) werden von uns nur im Rahmen der Erforderlichkeit sowie zum Zwecke der Bereitstellung eines funktionsfähigen und nutzerfreundlichen Internetauftritts verarbeitet.
              </p>

              <h3 className="text-base font-bold text-gray-900 text-left pt-2">1. Allgemeine Informationen & Verantwortlicher</h3>
              <p>
                Verantwortlicher im Sinne der Datenschutz-Grundverordnung (DSGVO) und anderer nationaler Datenschutzgesetze der Mitgliedsstaaten sowie sonstiger datenschutzrechtlicher Bestimmungen ist der im <button onClick={() => setPath('/impressum/')} className="text-red-650 underline hover:text-red-700 cursor-pointer font-bold">Impressum</button> genannte Webseitenbetreiber. Bei Fragen zum Datenschutz und zur Wahrnehmung deiner Rechte kannst du uns jederzeit per E-Mail unter <a href="mailto:kontakt@mcdonaldsgutscheine.de" className="text-red-650 underline font-bold">kontakt@mcdonaldsgutscheine.de</a> kontaktieren.
              </p>

              <h3 className="text-base font-bold text-gray-900 text-left pt-2">2. Google AdSense (Deutschland & EU Richtlinien)</h3>
              <p>
                Diese Website nutzt <strong>Google AdSense</strong>, einen Online-Werbedienst der Google Ireland Limited („Google“), Gordon House, Barrow Street, Dublin 4, Irland. Google AdSense verwendet sog. „Cookies“, Textdateien, die auf deinem Computer gespeichert werden und die eine Analyse der Benutzung der Website ermöglichen. Zudem nutzt Google AdSense auch sogenannte „Web Beacons“ (unsichtbare Grafiken), über die Informationen wie der Besucherverkehr auf diesen Seiten ausgewertet werden können.
              </p>
              <p>
                Die durch Cookies und Web Beacons erzeugten Informationen über die Benutzung dieser Website (einschließlich deiner IP-Adresse) und Auslieferung von Werbeformaten werden an einen Server von Google verarbeitet. Google wird diese Informationen benutzen, um deine Nutzung der Website im Hinblick auf die Anzeigen auszuwerten, um Reports über die Websiteaktivitäten und Anzeigen für die Websitebetreiber zusammenzustellen und um weitere mit der Websitenutzung und der Internetnutzung verbundene Dienstleistungen zu erbringen. Auch wird Google diese Informationen gegebenenfalls an Dritte übertragen, sofern dies gesetzlich vorgeschrieben ist oder soweit Dritte diese Daten im Auftrag von Google verarbeiten.
              </p>
              <p className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-amber-900 font-medium my-3">
                <strong>Anzeigenpersonalisierung deaktivieren:</strong> Du kannst die Speicherung von Cookies auf deiner Festplatte und die Anzeige von Web Beacons verhindern bzw. die personalisierte Werbung deaktivieren. Wähle dazu in deinen Browser-Einstellungen „keine Cookies akzeptieren“ oder passe deine Präferenzen für Werbung direkt über die offizielle Google-Ads-Präferenzseite an: <a href="https://adssettings.google.com/" target="_blank" rel="noopener noreferrer" className="underline font-bold inline-flex items-center space-x-0.5 text-amber-950"><span>Google Ads Einstellungen</span><ExternalLink className="h-3 w-3 inline" /></a>.
              </p>

              <h3 className="text-base font-bold text-gray-900 text-left pt-2">3. Erhebung von Server-Logfiles</h3>
              <p>
                Der Provider unserer Seiten erhebt und speichert automatisch Informationen in sogenannten Server-Log-Dateien, die dein Browser automatisch an uns übermittelt. Dies sind:
              </p>
              <ul className="list-disc pl-5 space-y-1 my-2 font-mono text-[11px]">
                <li>Browsertyp und Browserversion / Betriebssystem</li>
                <li>Referrer URL (die zuvor besuchte Seite)</li>
                <li>Hostname des zugreifenden Rechners / IP-Adresse</li>
                <li>Uhrzeit und Datum der Serveranfrage</li>
              </ul>
              <p>
                Diese Daten sind nicht bestimmten Personen zuordenbar. Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen. Wir behalten uns vor, diese Daten nachträglich zu prüfen, wenn uns konkrete Anhaltspunkte für eine rechtswidrige Nutzung bekannt werden (Rechtsgrundlage Art. 6 Abs. 1 lit. f DSGVO).
              </p>

              <h3 className="text-base font-bold text-gray-900 text-left pt-2">4. SSL- bzw. TLS-Verschlüsselung</h3>
              <p>
                Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte eine SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennst du daran, dass die Adresszeile des Browsers von „http://“ auf „https://“ wechselt und an dem Schloss-Symbol in deiner Browserzeile.
              </p>

              <h3 className="text-base font-bold text-gray-950 text-left pt-2">5. Betroffenenrechte (Auskunft, Löschung, Sperrung)</h3>
              <p>
                Du hast im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf unentgeltliche Auskunft über deine gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung und ggf. ein Recht auf Berichtigung, Sperrung oder Löschung dieser Daten. Hierzu sowie zu weiteren Fragen zum Thema personenbezogene Daten kannst du dich jederzeit über die im Impressum oder auf der Kontaktseite stehende E-Mail-Adresse an uns wenden.
              </p>
            </div>
          )}

          {/* Render - Impressum (German TMG §5 legally required) */}
          {pageType === 'impressum' && (
            <div className="space-y-6 text-xs text-gray-650 leading-relaxed">
              <h1 className="text-3xl font-black text-gray-900 tracking-tight border-b pb-4">Impressum</h1>
              <p className="text-gray-800 font-bold">Angaben gemäß § 5 TMG:</p>
              
              <div className="space-y-3 bg-gray-50 p-4 rounded-xl border border-gray-100">
                <p className="font-extrabold text-gray-950 font-sans text-xs">Sparportal Media Deutschland GmbH</p>
                <p>Mustergasse 24</p>
                <p>10115 Berlin</p>
                <p>Deutschland</p>
              </div>

              <h3 className="text-base font-bold text-gray-900">Vertreten durch:</h3>
              <p>Maximilian Sparmann (Geschäftsführer)</p>

              <h3 className="text-base font-bold text-gray-900">Kontakt:</h3>
              <p>E-Mail: kontakt@mcdonaldsgutscheine.de</p>
              <p>Telefon: +49 (0) 30 12345678 (Keine telefonische Gutscheinauskunft!)</p>

              <h3 className="text-base font-bold text-gray-900">Registereintrag:</h3>
              <p>Eintragung im Handelsregister.</p>
              <p>Registergericht: Amtsgericht Charlottenburg</p>
              <p>Registernummer: HRB 987654 B</p>

              <h3 className="text-base font-bold text-gray-900">Umsatzsteuer-ID:</h3>
              <p>Umsatzsteuer-Identifikationsnummer gemäß §27 a Umsatzsteuergesetz: DE 123456789</p>

              <h3 className="text-base font-bold text-gray-900">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:</h3>
              <p>Maximilian Sparmann, Mustergasse 24, 10115 Berlin</p>
            </div>
          )}

          {/* Render - Cookies (GDPR & AdSense Details) */}
          {pageType === 'cookies' && (
            <div className="space-y-6 text-xs text-gray-650 leading-relaxed">
              <h1 className="text-3xl font-black text-gray-900 tracking-tight border-b pb-4">Cookie-Richtlinie</h1>
              <p>
                Diese Richtlinie gilt für die Nutzung von Cookies und ähnlicher Technologien auf mcdonaldsgutscheine.de.
              </p>

              <h3 className="text-base font-bold text-gray-900">Was sind Cookies?</h3>
              <p>
                Cookies sind kleine Textdateien, die beim Besuch einer Internetseite auf Ihrem Endgerät gespeichert werden. Sie dienen dazu, Funktionalitäten bereitzustellen (z.B. Ihre Auswahl im Coupon-Sparrechner temporär zu speichern) und Werbenetzwerken das Verhalten anonymisiert zu signalisieren.
              </p>

              <h3 className="text-base font-bold text-gray-900">Änderung der Einstellungen</h3>
              <p>
                Du kannst die Cookie-Einwilligung jederzeit erneuern oder einschränken, indem du deinen Browser-Cache löschst. Unser Einverständnis-Banner wird daraufhin automatisch erneut beim Seitenaufruf gestartet.
              </p>
            </div>
          )}

          {/* Render - Haftungsausschluss (Disclaimer) */}
          {pageType === 'haftungsausschluss' && (
            <div className="space-y-6 text-xs text-gray-650 leading-relaxed">
              <h1 className="text-3xl font-black text-gray-900 tracking-tight border-b pb-4">Haftungsausschluss (Disclaimer)</h1>
              
              <h3 className="text-base font-bold text-gray-900">1. Haftung für Inhalte</h3>
              <p>
                Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen. Wir übernehmen keine Garantie oder Haftung für die Richtigkeit, Aktualität und Gültigkeit der auf dieser Website abgebildeten McDonald's Gutscheine, da Franchise-Nehmer die Akzeptanz von Coupons ablehnen können.
              </p>

              <h3 className="text-base font-bold text-gray-900">2. Haftung für Links</h3>
              <p>
                Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
              </p>
            </div>
          )}

          {/* Render - Nutzungsbedingungen (Terms of Use) */}
          {pageType === 'nutzungsbedingungen' && (
            <div className="space-y-6 text-xs text-gray-650 leading-relaxed">
              <h1 className="text-3xl font-black text-gray-900 tracking-tight border-b pb-4">Nutzungsbedingungen</h1>
              <p>
                Die Nutzung des Portals mcdonaldsgutscheine.de ist für Endverbraucher vollkommen kostenfrei.
              </p>

              <h3 className="text-base font-bold text-gray-900">1. Urheberrecht & geistiges Eigentum</h3>
              <p>
                Die durch uns erstellten redaktionellen Texte und Rechner-Modatools auf diesen Webseiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
              </p>

              <h3 className="text-base font-bold text-gray-900">2. Markenrechtlicher Hinweis</h3>
              <p>
                McDonald's, Big Mac, McMuffin, McRip, Happy Meal, McFlurry und McCafé sind eingetragene Schutzmarken der McDonald's Corporation oder ihrer deutschen Tochtergesellschaften. Diese Website steht in keiner geschäftlichen Beziehung zu diesen Marken und agiert als unabhängiges Verbraucherportal.
              </p>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
