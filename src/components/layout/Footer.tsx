import Link from 'next/link';
import Image from 'next/image';
import styles from './Footer.module.css';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className={styles.footer} role="contentinfo" aria-label="Fußzeile">
            <div className={styles.container}>
                <div className={styles.column}>
                    <div className={styles.logoContainer}>
                        <Image
                            src="/logo.png"
                            alt="Sylwester Hulboj Logo"
                            width={60}
                            height={60}
                            className={styles.logoImage}
                        />
                        <h3>Sylwester Hulboj</h3>
                    </div>
                    <p>Garten & Hausmeisterservice</p>
                    <p className={styles.address}>
                        Sprengerstr. 4/2<br />
                        71686 Remseck am Neckar
                    </p>
                </div>

                <div className={styles.column}>
                    <h3>Leistungen</h3>
                    <ul className={styles.linkList}>
                        <li><Link href="#services">Pflasterarbeiten</Link></li>
                        <li><Link href="#services">Gartengestaltung</Link></li>
                        <li><Link href="#services">Zaunbau</Link></li>
                        <li><Link href="#services">Gartenpflege</Link></li>
                    </ul>
                </div>

                <div className={styles.column}>
                    <h3>Kontakt</h3>
                    <ul className={styles.linkList}>
                        <li>
                            <a href="tel:+4915750720150">0157 507 20150</a>
                        </li>
                        <li>
                            <a href="mailto:hulboj-garten-hausmeisterservice@gmx.net">E-Mail senden</a>
                        </li>
                    </ul>
                </div>

                <div className={styles.column}>
                    <h3>Rechtliches</h3>
                    <ul className={styles.linkList}>
                        <li><Link href="/impressum">Impressum</Link></li>
                        <li><Link href="/datenschutz">Datenschutz</Link></li>
                        <li><Link href="/barrierefreiheit">Barrierefreiheit</Link></li>
                    </ul>
                </div>
            </div>

            <div className={styles.bottom}>
                <p>&copy; {currentYear} Sylwester Hulboj. Alle Rechte vorbehalten.</p>
            </div>
        </footer>
    );
}
