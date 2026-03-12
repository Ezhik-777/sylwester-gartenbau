import type { Metadata } from 'next';
import Link from 'next/link';
import styles from '../legal.module.css';

export const metadata: Metadata = {
    title: 'Barrierefreiheit',
    description: 'Erklärung zur Barrierefreiheit von Sylwester Hulboj - Garten & Hausmeisterservice gemäß BITV 2.0',
};

export default function Barrierefreiheit() {
    const currentDate = new Date().toLocaleDateString('de-DE', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    return (
        <main className={styles.page}>
            <div className={styles.container}>
                <Link href="/" className={styles.backLink}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                        <line x1="19" y1="12" x2="5" y2="12" />
                        <polyline points="12 19 5 12 12 5" />
                    </svg>
                    Zurück zur Startseite
                </Link>

                <h1>Erklärung zur Barrierefreiheit</h1>

                <section className={styles.section}>
                    <p>
                        <strong>Sylwester Hulboj - Garten &amp; Hausmeisterservice</strong> ist bemüht, seine Website
                        im Einklang mit den nationalen Rechtsvorschriften zur Umsetzung der Richtlinie (EU) 2016/2102
                        des Europäischen Parlaments und des Rates barrierefrei zugänglich zu machen.
                    </p>
                    <p>
                        Diese Erklärung zur Barrierefreiheit gilt für die Website{' '}
                        <a href="https://sylwester-gartenbau.de">sylwester-gartenbau.de</a>.
                    </p>
                </section>

                <section className={styles.section}>
                    <h2>Stand der Vereinbarkeit mit den Anforderungen</h2>
                    <p>
                        Diese Website ist <strong>weitgehend vereinbar</strong> mit der Barrierefreie-Informationstechnik-Verordnung (BITV 2.0)
                        sowie den Web Content Accessibility Guidelines (WCAG) 2.1 Level AA.
                    </p>
                </section>

                <section className={styles.section}>
                    <h2>Erstellung dieser Erklärung zur Barrierefreiheit</h2>
                    <p>
                        Diese Erklärung wurde am {currentDate} erstellt.
                    </p>
                    <p>
                        Die Bewertung basiert auf einer Selbsteinschätzung.
                    </p>
                </section>

                <section className={styles.section}>
                    <h2>Barrierefreie Funktionen dieser Website</h2>
                    <ul className={styles.featureList}>
                        <li>
                            <strong>Tastaturnavigation:</strong> Alle interaktiven Elemente sind mit der Tastatur erreichbar und bedienbar.
                        </li>
                        <li>
                            <strong>Sprunglink:</strong> Ein &quot;Zum Hauptinhalt springen&quot;-Link ermöglicht das Überspringen der Navigation.
                        </li>
                        <li>
                            <strong>Semantische Struktur:</strong> Überschriften sind hierarchisch korrekt strukturiert (H1, H2, H3).
                        </li>
                        <li>
                            <strong>Alternativtexte:</strong> Alle informativen Bilder haben beschreibende Alternativtexte.
                        </li>
                        <li>
                            <strong>Kontrastverhältnis:</strong> Text und Hintergrund haben ein Kontrastverhältnis von mindestens 4.5:1 (WCAG AA).
                        </li>
                        <li>
                            <strong>Formulare:</strong> Alle Formularfelder haben sichtbare Beschriftungen und sind mit Screenreadern kompatibel.
                        </li>
                        <li>
                            <strong>Fokusanzeige:</strong> Der Tastaturfokus ist deutlich sichtbar.
                        </li>
                        <li>
                            <strong>Responsive Design:</strong> Die Website ist auf allen Geräten und Bildschirmgrößen nutzbar.
                        </li>
                        <li>
                            <strong>Reduzierte Bewegung:</strong> Animationen werden deaktiviert, wenn &quot;Reduzierte Bewegung&quot; im System aktiviert ist.
                        </li>
                        <li>
                            <strong>Hoher Kontrast:</strong> Die Website unterstützt den Windows-Modus für hohen Kontrast.
                        </li>
                    </ul>
                </section>

                <section className={styles.section}>
                    <h2>Nicht barrierefreie Inhalte</h2>
                    <p>
                        Folgende Inhalte sind derzeit noch nicht vollständig barrierefrei:
                    </p>
                    <ul>
                        <li>
                            Einige dekorative Animationen könnten für manche Nutzer störend sein.
                            Diese können durch die Systemeinstellung &quot;Reduzierte Bewegung&quot; deaktiviert werden.
                        </li>
                        <li>
                            Die Vorher/Nachher-Slider in der Portfolio-Sektion erfordern Mausbedienung.
                            Alternative Darstellungen werden geprüft.
                        </li>
                    </ul>
                </section>

                <section className={styles.section}>
                    <h2>Feedback und Kontakt</h2>
                    <p>
                        Wenn Sie Barrieren auf unserer Website feststellen oder Informationen zu nicht barrierefreien
                        Inhalten benötigen, kontaktieren Sie uns bitte:
                    </p>
                    <address style={{ fontStyle: 'normal', marginTop: '1rem' }}>
                        <strong>Sylwester Hulboj</strong><br />
                        Sprengerstr. 4/2<br />
                        71686 Remseck am Neckar<br /><br />
                        Telefon: <a href="tel:+4915750720150">0157 507 20150</a><br />
                        E-Mail: <a href="mailto:hulboj-garten-hausmeisterservice@gmx.net">hulboj-garten-hausmeisterservice@gmx.net</a>
                    </address>
                    <p style={{ marginTop: '1rem' }}>
                        Wir werden Ihre Anfrage prüfen und uns bemühen, festgestellte Mängel zu beheben.
                    </p>
                </section>

                <section className={styles.section}>
                    <h2>Durchsetzungsverfahren</h2>
                    <p>
                        Sollten Sie der Ansicht sein, dass wir auf Ihre Mitteilung oder Anfrage nicht zufriedenstellend
                        reagiert haben, können Sie sich an die zuständige Durchsetzungsstelle wenden:
                    </p>
                    <address style={{ fontStyle: 'normal', marginTop: '1rem' }}>
                        <strong>Landesbehindertenbeauftragte Baden-Württemberg</strong><br />
                        Else-Josenhans-Str. 6<br />
                        70173 Stuttgart<br /><br />
                        Telefon: <a href="tel:+497111231011">0711 123-1011</a><br />
                        E-Mail: <a href="mailto:Poststelle@bfbmb.bwl.de">Poststelle@bfbmb.bwl.de</a><br />
                        Website: <a href="https://sozialministerium.baden-wuerttemberg.de/de/ministerium/beauftragte/landes-behindertenbeauftragte/" target="_blank" rel="noopener noreferrer">
                            sozialministerium.baden-wuerttemberg.de
                        </a>
                    </address>
                </section>

                <section className={styles.section}>
                    <h2>Technische Informationen</h2>
                    <p>
                        Diese Website wurde unter Berücksichtigung folgender Standards entwickelt:
                    </p>
                    <ul>
                        <li>WCAG 2.1 (Web Content Accessibility Guidelines) Level AA</li>
                        <li>BITV 2.0 (Barrierefreie-Informationstechnik-Verordnung)</li>
                        <li>EN 301 549 (Europäische Norm für barrierefreie IKT)</li>
                    </ul>
                    <p style={{ marginTop: '1rem' }}>
                        Verwendete Technologien: HTML5, CSS3, JavaScript (React/Next.js), WAI-ARIA
                    </p>
                </section>
            </div>
        </main>
    );
}
