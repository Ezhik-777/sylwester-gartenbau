"use client";

import { motion } from 'framer-motion';
import styles from './coming-soon.module.css';

const services = [
  'Gartengestaltung',
  'Pflasterarbeiten',
  'Zaun & Sichtschutz',
  'Gartenpflege',
  'Hausmeisterservice',
  'Gebäudereinigung',
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.11, delayChildren: 0.25 },
  },
};

const item = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.75, ease: "easeOut" as const } },
};

export default function Home() {
  return (
    <div className={styles.page}>
      <div className={styles.bg} aria-hidden="true" />
      <div className={styles.noise} aria-hidden="true" />

      <div className={styles.layout}>
        {/* Left: Text content */}
        <motion.div
          className={styles.content}
          variants={container}
          initial="hidden"
          animate="show"
        >
          {/* Badge */}
          <motion.div variants={item} className={styles.badge}>
            <span className={styles.badgeDot} />
            Neue Website — demnächst verfügbar
          </motion.div>

          {/* Name & Title */}
          <motion.div variants={item} className={styles.headline}>
            <span className={styles.nameSmall}>Sylwester</span>
            <span className={styles.nameLarge}>Hulboj</span>
            <p className={styles.tagline}>Garten- & Hausmeisterservice</p>
            <p className={styles.location}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              Remseck am Neckar &amp; Region Stuttgart
            </p>
          </motion.div>

          <motion.div variants={item} className={styles.divider} />

          {/* Services */}
          <motion.div variants={item} className={styles.servicesBlock}>
            <p className={styles.servicesLabel}>Unsere Leistungen</p>
            <ul className={styles.servicesList}>
              {services.map((s, i) => (
                <motion.li
                  key={s}
                  className={styles.serviceItem}
                  initial={{ opacity: 0, x: -14 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.75 + i * 0.07, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                >
                  <span className={styles.serviceCheck} aria-hidden="true">✓</span>
                  {s}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div variants={item} className={styles.contactBlock}>
            <a href="tel:+4915750720150" className={styles.contactLink} aria-label="Jetzt anrufen: 0157 507 20150">
              <span className={styles.contactIcon} aria-hidden="true">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </span>
              <span className={styles.contactText}>
                <span className={styles.contactLabel}>Jetzt anrufen</span>
                <span className={styles.contactValue}>0157 507 20150</span>
              </span>
            </a>

            <a href="mailto:hulboj-garten-hausmeisterservice@gmx.net" className={styles.contactLink} aria-label="E-Mail schreiben">
              <span className={styles.contactIcon} aria-hidden="true">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </span>
              <span className={styles.contactText}>
                <span className={styles.contactLabel}>E-Mail schreiben</span>
                <span className={styles.contactValue}>hulboj-garten-hausmeisterservice@gmx.net</span>
              </span>
            </a>
          </motion.div>

          <motion.p variants={item} className={styles.footnote}>
            Wir arbeiten bereits — unsere neue Website ist in Vorbereitung.
            <br />In der Zwischenzeit sind wir telefonisch & per E-Mail für Sie da.
          </motion.p>
        </motion.div>

        {/* Right: Botanical illustration */}
        <motion.div
          className={styles.decoration}
          initial={{ opacity: 0, scale: 0.88, rotate: -8 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          aria-hidden="true"
        >
          <BotanicalIllustration />
          <motion.div
            className={styles.ring}
            animate={{ rotate: 360 }}
            transition={{ duration: 80, repeat: Infinity, ease: 'linear' }}
          />
          <motion.div
            className={styles.ring2}
            animate={{ rotate: -360 }}
            transition={{ duration: 120, repeat: Infinity, ease: 'linear' }}
          />
          <motion.div
            className={styles.ring3}
            animate={{ rotate: 360 }}
            transition={{ duration: 50, repeat: Infinity, ease: 'linear' }}
          />
        </motion.div>
      </div>
    </div>
  );
}

function BotanicalIllustration() {
  const dotRingInner = Array.from({ length: 8 }, (_, i) => i * 45);
  const dotRingOuter = Array.from({ length: 16 }, (_, i) => i * 22.5);

  return (
    <svg
      viewBox="0 0 520 520"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={styles.botanicalSvg}
    >
      {/* Outer rings */}
      <circle cx="260" cy="260" r="244" stroke="rgba(210,180,140,0.1)" strokeWidth="0.8" />
      <circle cx="260" cy="260" r="228" stroke="rgba(210,180,140,0.07)" strokeWidth="0.5" strokeDasharray="3 9" />

      {/* Major cardinal leaves */}
      {/* Top */}
      <path d="M260 48 C308 98 325 168 260 215 C195 168 212 98 260 48Z" fill="rgba(44,94,64,0.65)" />
      <line x1="260" y1="48" x2="260" y2="215" stroke="rgba(210,180,140,0.45)" strokeWidth="1" />
      {/* Lateral ribs top leaf */}
      <path d="M260 90 C280 108 295 130 260 148" stroke="rgba(210,180,140,0.2)" strokeWidth="0.8" fill="none" />
      <path d="M260 90 C240 108 225 130 260 148" stroke="rgba(210,180,140,0.2)" strokeWidth="0.8" fill="none" />

      {/* Bottom */}
      <path d="M260 472 C308 422 325 352 260 305 C195 352 212 422 260 472Z" fill="rgba(44,94,64,0.65)" />
      <line x1="260" y1="472" x2="260" y2="305" stroke="rgba(210,180,140,0.45)" strokeWidth="1" />
      <path d="M260 430 C280 412 295 390 260 372" stroke="rgba(210,180,140,0.2)" strokeWidth="0.8" fill="none" />
      <path d="M260 430 C240 412 225 390 260 372" stroke="rgba(210,180,140,0.2)" strokeWidth="0.8" fill="none" />

      {/* Left */}
      <path d="M48 260 C98 212 168 195 215 260 C168 325 98 308 48 260Z" fill="rgba(44,94,64,0.65)" />
      <line x1="48" y1="260" x2="215" y2="260" stroke="rgba(210,180,140,0.45)" strokeWidth="1" />

      {/* Right */}
      <path d="M472 260 C422 212 352 195 305 260 C352 325 422 308 472 260Z" fill="rgba(44,94,64,0.65)" />
      <line x1="472" y1="260" x2="305" y2="260" stroke="rgba(210,180,140,0.45)" strokeWidth="1" />

      {/* Diagonal secondary leaves */}
      <path d="M110 110 C138 134 148 176 115 192 C98 162 96 128 110 110Z" fill="rgba(44,94,64,0.42)" />
      <line x1="110" y1="110" x2="115" y2="192" stroke="rgba(210,180,140,0.3)" strokeWidth="0.7" />

      <path d="M410 110 C382 134 372 176 405 192 C422 162 424 128 410 110Z" fill="rgba(44,94,64,0.42)" />
      <line x1="410" y1="110" x2="405" y2="192" stroke="rgba(210,180,140,0.3)" strokeWidth="0.7" />

      <path d="M110 410 C138 386 148 344 115 328 C98 358 96 392 110 410Z" fill="rgba(44,94,64,0.42)" />
      <line x1="110" y1="410" x2="115" y2="328" stroke="rgba(210,180,140,0.3)" strokeWidth="0.7" />

      <path d="M410 410 C382 386 372 344 405 328 C422 358 424 392 410 410Z" fill="rgba(44,94,64,0.42)" />
      <line x1="410" y1="410" x2="405" y2="328" stroke="rgba(210,180,140,0.3)" strokeWidth="0.7" />

      {/* Tertiary small accent leaves near center */}
      <path d="M260 176 C272 190 276 212 260 222 C244 212 248 190 260 176Z" fill="rgba(156,175,136,0.75)" />
      <path d="M260 344 C272 330 276 308 260 298 C244 308 248 330 260 344Z" fill="rgba(156,175,136,0.75)" />
      <path d="M176 260 C190 248 212 244 222 260 C212 276 190 272 176 260Z" fill="rgba(156,175,136,0.75)" />
      <path d="M344 260 C330 248 308 244 298 260 C308 276 330 272 344 260Z" fill="rgba(156,175,136,0.75)" />

      {/* Inner ring */}
      <circle cx="260" cy="260" r="100" stroke="rgba(210,180,140,0.18)" strokeWidth="0.8" fill="none" />
      <circle cx="260" cy="260" r="72" stroke="rgba(210,180,140,0.14)" strokeWidth="0.6" strokeDasharray="2 6" fill="none" />

      {/* Center medallion */}
      <circle cx="260" cy="260" r="46" fill="rgba(26,71,42,0.55)" stroke="rgba(210,180,140,0.3)" strokeWidth="1" />
      <circle cx="260" cy="260" r="30" fill="rgba(26,71,42,0.7)" stroke="rgba(210,180,140,0.22)" strokeWidth="0.7" />
      <circle cx="260" cy="260" r="14" fill="rgba(44,94,64,0.9)" />
      <circle cx="260" cy="260" r="6" fill="rgba(210,180,140,0.7)" />
      <circle cx="260" cy="260" r="2" fill="rgba(245,245,240,0.9)" />

      {/* Petal dividers from center */}
      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => {
        const rad = (angle * Math.PI) / 180;
        const x1 = 260 + 46 * Math.cos(rad);
        const y1 = 260 + 46 * Math.sin(rad);
        const x2 = 260 + 100 * Math.cos(rad);
        const y2 = 260 + 100 * Math.sin(rad);
        return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="rgba(210,180,140,0.15)" strokeWidth="0.7" />;
      })}

      {/* Inner dot ring */}
      {dotRingInner.map((angle, i) => {
        const rad = (angle * Math.PI) / 180;
        const x = 260 + 180 * Math.cos(rad);
        const y = 260 + 180 * Math.sin(rad);
        return <circle key={i} cx={x} cy={y} r="3.5" fill="rgba(210,180,140,0.35)" />;
      })}

      {/* Outer dot ring */}
      {dotRingOuter.map((angle, i) => {
        const rad = (angle * Math.PI) / 180;
        const x = 260 + 232 * Math.cos(rad);
        const y = 260 + 232 * Math.sin(rad);
        return <circle key={i} cx={x} cy={y} r="1.8" fill="rgba(210,180,140,0.2)" />;
      })}

      {/* Tiny cross marks at midpoints */}
      {[22.5, 67.5, 112.5, 157.5, 202.5, 247.5, 292.5, 337.5].map((angle, i) => {
        const rad = (angle * Math.PI) / 180;
        const cx = 260 + 180 * Math.cos(rad);
        const cy = 260 + 180 * Math.sin(rad);
        return (
          <g key={i}>
            <line x1={cx - 4} y1={cy} x2={cx + 4} y2={cy} stroke="rgba(210,180,140,0.25)" strokeWidth="0.8" />
            <line x1={cx} y1={cy - 4} x2={cx} y2={cy + 4} stroke="rgba(210,180,140,0.25)" strokeWidth="0.8" />
          </g>
        );
      })}
    </svg>
  );
}
