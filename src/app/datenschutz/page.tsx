import type { Metadata } from 'next';
import Link from 'next/link';
import styles from '../legal.module.css';

export const metadata: Metadata = {
    title: 'Datenschutzerklärung',
    description: 'Datenschutzerklärung von Sylwester Gartenbau - Informationen zum Umgang mit Ihren Daten',
};

export default function Datenschutz() {
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

                <h1>Datenschutzerklärung</h1>

                <section className={styles.section}>
                    <h2>1. Datenschutz auf einen Blick</h2>
                    <h3>Allgemeine Hinweise</h3>
                    <p>
                        Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen
                        Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen
                        Sie persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz
                        entnehmen Sie unserer unter diesem Text aufgeführten Datenschutzerklärung.
                    </p>

                    <h3>Datenerfassung auf dieser Website</h3>
                    <p><strong>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong></p>
                    <p>
                        Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten
                        können Sie dem Impressum dieser Website entnehmen.
                    </p>

                    <p><strong>Wie erfassen wir Ihre Daten?</strong></p>
                    <p>
                        Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z.B.
                        um Daten handeln, die Sie in ein Kontaktformular eingeben.
                    </p>
                    <p>
                        Andere Daten werden automatisch beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind
                        vor allem technische Daten (z.B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs). Die
                        Erfassung dieser Daten erfolgt automatisch, sobald Sie diese Website betreten.
                    </p>

                    <p><strong>Wofür nutzen wir Ihre Daten?</strong></p>
                    <p>
                        Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten.
                        Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.
                    </p>

                    <p><strong>Welche Rechte haben Sie bezüglich Ihrer Daten?</strong></p>
                    <p>
                        Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer
                        gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung
                        oder Löschung dieser Daten zu verlangen. Hierzu sowie zu weiteren Fragen zum Thema Datenschutz
                        können Sie sich jederzeit unter der im Impressum angegebenen Adresse an uns wenden. Des Weiteren
                        steht Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.
                    </p>
                </section>

                <section className={styles.section}>
                    <h2>2. Hosting</h2>
                    <p>
                        Diese Website wird extern gehostet. Die personenbezogenen Daten, die auf dieser Website erfasst
                        werden, werden auf den Servern des Hosters gespeichert. Hierbei kann es sich v.a. um IP-Adressen,
                        Kontaktanfragen, Meta- und Kommunikationsdaten, Vertragsdaten, Kontaktdaten, Namen,
                        Webseitenzugriffe und sonstige Daten, die über eine Website generiert werden, handeln.
                    </p>
                    <p>
                        Das externe Hosting erfolgt zum Zwecke der Vertragserfüllung gegenüber unseren potenziellen und
                        bestehenden Kunden (Art. 6 Abs. 1 lit. b DSGVO) und im Interesse einer sicheren, schnellen und
                        effizienten Bereitstellung unseres Online-Angebots durch einen professionellen Anbieter (Art. 6 Abs. 1
                        lit. f DSGVO).
                    </p>
                </section>

                <section className={styles.section}>
                    <h2>3. Allgemeine Hinweise und Pflichtinformationen</h2>
                    <h3>Datenschutz</h3>
                    <p>
                        Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln
                        Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften
                        sowie dieser Datenschutzerklärung.
                    </p>
                    <p>
                        Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben.
                        Personenbezogene Daten sind Daten, mit denen Sie persönlich identifiziert werden können. Die
                        vorliegende Datenschutzerklärung erläutert, welche Daten wir erheben und wofür wir sie nutzen. Sie
                        erläutert auch, wie und zu welchem Zweck das geschieht.
                    </p>

                    <h3>Hinweis zur verantwortlichen Stelle</h3>
                    <p>Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:</p>
                    <p>
                        Sylwester Hulboj<br />
                        Gebäudereinigung - Garten - Hausmeisterservice<br />
                        Sprengerstr. 4/2<br />
                        71686 Remseck am Neckar<br />
                        <br />
                        Telefon: <a href="tel:+4915750720150">015750720150</a><br />
                        E-Mail: <a href="mailto:hulboj-garten-hausmeisterservice@gmx.net">hulboj-garten-hausmeisterservice@gmx.net</a>
                    </p>
                    <p>
                        Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam mit anderen
                        über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten (z.B. Namen,
                        E-Mail-Adressen o. Ä.) entscheidet.
                    </p>

                    <h3>Speicherdauer</h3>
                    <p>
                        Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt wurde, verbleiben
                        Ihre personenbezogenen Daten bei uns, bis der Zweck für die Datenverarbeitung entfällt. Wenn Sie ein
                        berechtigtes Löschersuchen geltend machen oder eine Einwilligung zur Datenverarbeitung widerrufen,
                        werden Ihre Daten gelöscht, sofern wir keine anderen rechtlich zulässigen Gründe für die Speicherung
                        Ihrer personenbezogenen Daten haben (z.B. steuer- oder handelsrechtliche Aufbewahrungsfristen); im
                        letztgenannten Fall erfolgt die Löschung nach Fortfall dieser Gründe.
                    </p>

                    <h3>Widerruf Ihrer Einwilligung zur Datenverarbeitung</h3>
                    <p>
                        Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. Sie können
                        eine bereits erteilte Einwilligung jederzeit widerrufen. Die Rechtmäßigkeit der bis zum Widerruf
                        erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.
                    </p>

                    <h3>Beschwerderecht bei der zuständigen Aufsichtsbehörde</h3>
                    <p>
                        Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein Beschwerderecht bei einer
                        Aufsichtsbehörde, insbesondere in dem Mitgliedstaat ihres gewöhnlichen Aufenthalts, ihres
                        Arbeitsplatzes oder des Orts des mutmaßlichen Verstoßes zu. Das Beschwerderecht besteht unbeschadet
                        anderweitiger verwaltungsrechtlicher oder gerichtlicher Rechtsbehelfe.
                    </p>

                    <h3>Recht auf Datenübertragbarkeit</h3>
                    <p>
                        Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung oder in Erfüllung eines Vertrags
                        automatisiert verarbeiten, an sich oder an einen Dritten in einem gängigen, maschinenlesbaren Format
                        aushändigen zu lassen. Sofern Sie die direkte Übertragung der Daten an einen anderen Verantwortlichen
                        verlangen, erfolgt dies nur, soweit es technisch machbar ist.
                    </p>

                    <h3>Auskunft, Löschung und Berichtigung</h3>
                    <p>
                        Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf unentgeltliche
                        Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den
                        Zweck der Datenverarbeitung und ggf. ein Recht auf Berichtigung oder Löschung dieser Daten. Hierzu
                        sowie zu weiteren Fragen zum Thema personenbezogene Daten können Sie sich jederzeit unter der im
                        Impressum angegebenen Adresse an uns wenden.
                    </p>

                    <h3>Recht auf Einschränkung der Verarbeitung</h3>
                    <p>
                        Sie haben das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.
                        Hierzu können Sie sich jederzeit unter der im Impressum angegebenen Adresse an uns wenden.
                    </p>
                </section>

                <section className={styles.section}>
                    <h2>4. Datenerfassung auf dieser Website</h2>
                    <h3>Kontaktformular</h3>
                    <p>
                        Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem
                        Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der
                        Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne
                        Ihre Einwilligung weiter.
                    </p>
                    <p>
                        Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre
                        Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher
                        Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf unserem berechtigten
                        Interesse an der effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO)
                        oder auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) sofern diese abgefragt wurde.
                    </p>
                    <p>
                        Die von Ihnen im Kontaktformular eingegebenen Daten verbleiben bei uns, bis Sie uns zur Löschung
                        auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für die Datenspeicherung
                        entfällt (z.B. nach abgeschlossener Bearbeitung Ihrer Anfrage). Zwingende gesetzliche Bestimmungen –
                        insbesondere Aufbewahrungsfristen – bleiben unberührt.
                    </p>

                    <h3>Anfrage per E-Mail, Telefon oder Telefax</h3>
                    <p>
                        Wenn Sie uns per E-Mail, Telefon oder Telefax kontaktieren, wird Ihre Anfrage inklusive aller daraus
                        hervorgehenden personenbezogenen Daten (Name, Anfrage) zum Zwecke der Bearbeitung Ihres Anliegens
                        bei uns gespeichert und verarbeitet. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
                    </p>
                </section>

                <section className={styles.section}>
                    <h2>5. Plugins und Tools</h2>
                    <h3>Google Fonts (lokales Hosting)</h3>
                    <p>
                        Diese Seite nutzt zur einheitlichen Darstellung von Schriftarten so genannte Google Fonts, die lokal
                        installiert sind. Eine Verbindung zu Servern von Google findet dabei nicht statt.
                    </p>
                </section>

                <p className={styles.lastUpdated}>Stand: Februar 2024</p>
            </div>
        </main>
    );
}
