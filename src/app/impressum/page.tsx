import type { Metadata } from 'next';
import Link from 'next/link';
import styles from '../legal.module.css';

export const metadata: Metadata = {
    title: 'Impressum',
    description: 'Impressum und rechtliche Angaben von Sylwester Hulboj - Garten & Hausmeisterservice',
};

export default function Impressum() {
    return (
        <main className={styles.page}>
            <div className={styles.container}>
                <Link href="/" className={styles.backLink}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <line x1="19" y1="12" x2="5" y2="12" />
                        <polyline points="12 19 5 12 12 5" />
                    </svg>
                    Zurück zur Startseite
                </Link>

                <h1>Impressum</h1>

                <section className={styles.section}>
                    <h2>Angaben gemäß § 5 TMG</h2>
                    <p>
                        <strong>Sylwester Hulboj</strong><br />
                        Gebäudereinigung - Garten - Hausmeisterservice<br />
                        Sprengerstr. 4/2<br />
                        71686 Remseck am Neckar<br />
                        Deutschland
                    </p>
                </section>

                <section className={styles.section}>
                    <h2>Kontakt</h2>
                    <p>
                        Telefon: <a href="tel:+4915750720150">015750720150</a><br />
                        E-Mail: <a href="mailto:hulboj-garten-hausmeisterservice@gmx.net">hulboj-garten-hausmeisterservice@gmx.net</a>
                    </p>
                </section>

                <section className={styles.section}>
                    <h2>Steuernummer</h2>
                    <p>
                        Steuernummer: 71119/62178<br />
                        Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
                        DE 82 537 191 043
                    </p>
                </section>

                <section className={styles.section}>
                    <h2>Registereintrag</h2>
                    <p>
                        Amtsgericht: Stuttgart<br />
                        Inhaber: Sylwester Hulboj
                    </p>
                </section>

                <section className={styles.section}>
                    <h2>Bankverbindung</h2>
                    <p>
                        Bank: Postbank<br />
                        Kontonummer: 618361139<br />
                        IBAN: DE84 1001 0010 0618 3611 39<br />
                        BIC: PBNKDEFF
                    </p>
                </section>

                <section className={styles.section}>
                    <h2>Berufsbezeichnung</h2>
                    <p>
                        Berufsbezeichnung: Garten- und Landschaftsbauer, Gebäudereiniger, Hausmeister<br />
                        Tätigkeitsbereich: Baden-Württemberg, Deutschland
                    </p>
                </section>

                <section className={styles.section}>
                    <h2>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
                    <p>
                        Sylwester Hulboj<br />
                        Sprengerstr. 4/2<br />
                        71686 Remseck am Neckar
                    </p>
                </section>

                <section className={styles.section}>
                    <h2>EU-Streitschlichtung</h2>
                    <p>
                        Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{' '}
                        <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer">
                            https://ec.europa.eu/consumers/odr/
                        </a>
                    </p>
                    <p>Unsere E-Mail-Adresse finden Sie oben im Impressum.</p>
                </section>

                <section className={styles.section}>
                    <h2>Verbraucherstreitbeilegung / Universalschlichtungsstelle</h2>
                    <p>
                        Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
                        Verbraucherschlichtungsstelle teilzunehmen.
                    </p>
                </section>

                <section className={styles.section}>
                    <h2>Haftung für Inhalte</h2>
                    <p>
                        Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den
                        allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht
                        verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen
                        zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
                    </p>
                    <p>
                        Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen
                        Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der
                        Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden
                        Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
                    </p>
                </section>

                <section className={styles.section}>
                    <h2>Haftung für Links</h2>
                    <p>
                        Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben.
                        Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der
                        verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten
                        Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte
                        waren zum Zeitpunkt der Verlinkung nicht erkennbar.
                    </p>
                    <p>
                        Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer
                        Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links
                        umgehend entfernen.
                    </p>
                </section>

                <section className={styles.section}>
                    <h2>Urheberrecht</h2>
                    <p>
                        Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen
                        Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
                        Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
                        Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
                    </p>
                    <p>
                        Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter
                        beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine
                        Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei
                        Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
                    </p>
                </section>
            </div>
        </main>
    );
}
