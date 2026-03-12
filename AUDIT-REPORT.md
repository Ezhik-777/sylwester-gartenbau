# Website Audit Report
## Sylwester Hulboj - Garten & Hausmeisterservice

**Datum:** 04.02.2026
**Version:** 1.0

---

## Inhaltsverzeichnis

1. [Executive Summary](#1-executive-summary)
2. [Architektur & Code-Qualität](#2-architektur--code-qualität)
3. [SEO & Metadaten](#3-seo--metadaten)
4. [Performance](#4-performance)
5. [Barrierefreiheit (WCAG/BITV)](#5-barrierefreiheit-wcagbitv)
6. [Sicherheit](#6-sicherheit)
7. [Mobile Responsiveness](#7-mobile-responsiveness)
8. [Bilder & Assets](#8-bilder--assets)
9. [Verbesserungsvorschläge](#9-verbesserungsvorschläge)
10. [Priorisierte Maßnahmen](#10-priorisierte-maßnahmen)

---

## 1. Executive Summary

### Gesamtbewertung: 8.2/10

| Kategorie | Bewertung | Status |
|-----------|-----------|--------|
| Architektur | 9/10 | Sehr gut |
| SEO | 9/10 | Sehr gut |
| Performance | 7/10 | Gut |
| Barrierefreiheit | 8/10 | Gut |
| Sicherheit | 8/10 | Gut |
| Mobile | 8/10 | Gut |
| Assets | 7/10 | Verbesserungsbedarf |

### Stärken
- Moderne Next.js 16.1.6 Architektur mit React 19
- Umfassende SEO-Implementierung mit JSON-LD Schema
- Gute Barrierefreiheit nach BITV 2.0
- Solide Sicherheitsmaßnahmen im Kontaktformular

### Kritische Punkte
- Bilder nicht optimal komprimiert
- Fehlende Content Security Policy (CSP)
- Google Verification fehlt
- Favicon sollte .ico Format haben

---

## 2. Architektur & Code-Qualität

### Technologie-Stack
- **Framework:** Next.js 16.1.6 (Turbopack)
- **React:** 19.2.3
- **Styling:** CSS Modules
- **Animation:** Framer Motion 12.31.0
- **Smooth Scroll:** Lenis 1.3.17
- **Validation:** Zod 4.3.6
- **Email:** Resend 6.9.1

### Positiv

**Komponenten-Architektur:**
- Klare Trennung: `/sections`, `/layout`, `/ui`, `/providers`
- Wiederverwendbare Komponenten (WaveDivider, AnimatedCounter, BeforeAfterSlider)
- TypeScript für Typsicherheit

**CSS Organisation:**
- CSS Variables für konsistentes Design
- Mobile-first Approach
- `prefers-reduced-motion` Support
- High Contrast Mode Support

**Code-Beispiel (gut):**
```tsx
// Klare Typdefinition in Contact.tsx:18
interface FormData {
    name: string;
    email: string;
    service: string;
    message: string;
    website: string; // Honeypot field
}
```

### Verbesserungsbedarf

1. **`page.tsx:10` - Doppeltes `<main>` Element:**
   ```tsx
   // layout.tsx hat bereits <main id="main-content">
   // page.tsx:10 hat nochmal <main>
   export default function Home() {
     return (
       <main>  // <- Entfernen, da redundant
   ```

2. **Fehlende Error Boundaries:**
   - Nur `error.tsx` vorhanden, keine granularen Error Boundaries

3. **`SmoothScroll.tsx` nicht gelesen, aber:**
   - Prüfen ob Lenis korrekt in React 19 integriert ist

---

## 3. SEO & Metadaten

### Positiv

**Hervorragende Meta-Implementierung (`layout.tsx:16-96`):**
- OpenGraph vollständig
- Twitter Cards konfiguriert
- Geo-Tags für lokales SEO
- Canonical URL gesetzt
- robots.txt vorhanden
- sitemap.ts dynamisch

**JSON-LD Schema (`layout.tsx:99-212`):**
- LocalBusiness Schema komplett
- Öffnungszeiten
- Servicebereich (Remseck, Stuttgart, etc.)
- Angebotskatalog mit allen Services

**robots.txt:**
```
User-agent: *
Allow: /
Sitemap: https://sylwester-gartenbau.de/sitemap.xml
Disallow: /api/
```

### Verbesserungsbedarf

1. **Google Verification fehlt (`layout.tsx:85`):**
   ```tsx
   verification: {
     // google: 'your-google-verification-code', // <- Aktivieren!
   },
   ```

2. **Twitter Handle existiert vermutlich nicht:**
   ```tsx
   // layout.tsx:70-71
   creator: '@sylwesterhulboj',
   site: '@sylwesterhulboj',
   ```
   -> Entfernen oder echten Account erstellen

3. **Fehlende Keywords-Erweiterung:**
   - "Winterdienst" hinzufügen falls angeboten
   - "Baumfällung", "Rodung" falls relevant

4. **Sitemap-Erweiterung:**
   - Dedizierte Serviceseiten würden SEO verbessern

---

## 4. Performance

### Positiv

**Next.js Image Optimierung (`next.config.ts:4-9`):**
```typescript
images: {
  formats: ['image/avif', 'image/webp'],
  deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
  minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days
}
```

**Experimental CSS Optimierung:**
```typescript
experimental: {
  optimizeCss: true,
}
```

**Hero Image:**
- `priority` Flag gesetzt
- `quality={90}` für scharfe Darstellung

### Verbesserungsbedarf

1. **Bildgrößen zu groß:**

   | Bild | Größe | Empfehlung |
   |------|-------|------------|
   | hero-bg.jpg | 228 KB | ~100 KB |
   | og-image.jpg | 228 KB | ~100 KB |
   | project-garten-2.jpg | 212 KB | ~80 KB |
   | project-*.jpg | 100-130 KB | ~50-70 KB |

2. **Framer Motion Bundle:**
   - ~100KB gzipped
   - Alternative: CSS-only Animationen für einfache Effekte

3. **Fonts:**
   - Outfit Font lädt gut mit `display: swap`
   - Subset auf `latin` begrenzt - gut!

4. **FloatingLeaves Animation:**
   - Prüfen ob auf Mobile deaktiviert (Performance)

5. **Fehlende Preconnect für externe Ressourcen:**
   ```html
   <link rel="preconnect" href="https://fonts.googleapis.com">
   <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
   ```

---

## 5. Barrierefreiheit (WCAG/BITV)

### Positiv

**Skip-Link implementiert (`layout.tsx:229`):**
```tsx
<a href="#main-content" className="skip-link">
  Zum Hauptinhalt springen
</a>
```

**Sprache korrekt (`layout.tsx:220`):**
```tsx
<html lang="de" ...>
```

**ARIA-Attribute (`Contact.tsx`):**
- `aria-label` auf Kontaktliste
- `aria-hidden` auf dekorativen Icons
- `aria-live="assertive"` für Fehler
- `aria-required` auf Pflichtfeldern
- `role="alert"` für Fehlermeldungen

**Kontrastmodus (`globals.css:398-427`):**
```css
@media (prefers-contrast: high) { ... }
@media (forced-colors: active) { ... }
```

**Reduced Motion (`globals.css:335-347`):**
```css
@media (prefers-reduced-motion: reduce) {
  animation-duration: 0.01ms !important;
}
```

### Verbesserungsbedarf

1. **Portfolio Filter-Buttons (`Portfolio.tsx:72-85`):**
   - `role="tablist"` korrekt
   - Fehlt: `tabindex` Management für Tastatur-Navigation

2. **Fehlende `aria-current="page"` in Navigation:**
   ```tsx
   // Header.tsx - navLinks sollten aktiven Zustand anzeigen
   aria-current={isActive ? "page" : undefined}
   ```

3. **Bilder-Alt-Texte könnten beschreibender sein:**
   ```tsx
   // Portfolio.tsx:108
   alt={project.title}  // -> besser: alt={project.description}
   ```

4. **BeforeAfterSlider:**
   - Prüfen ob Slider per Tastatur bedienbar ist
   - `aria-valuenow`, `aria-valuemin`, `aria-valuemax` hinzufügen

5. **Formular-Validierung:**
   - Native HTML5 validation + JS (gut)
   - Inline-Fehler pro Feld fehlen (nur globaler Fehler)

---

## 6. Sicherheit

### Positiv

**Security Headers (`next.config.ts:20-51`):**
```typescript
'X-Content-Type-Options': 'nosniff',
'X-Frame-Options': 'SAMEORIGIN',
'X-XSS-Protection': '1; mode=block',
'Referrer-Policy': 'strict-origin-when-cross-origin',
'Permissions-Policy': 'camera=(), microphone=(), geolocation=()',
```

**Kontaktformular (`route.ts`):**
- Rate Limiting (5 req/h pro IP)
- Zod Validation
- Honeypot-Feld gegen Bots
- HTML Sanitization
- Input Length Limits

**Code-Beispiel (sehr gut):**
```typescript
// route.ts:33-54
const contactSchema = z.object({
  name: z.string()
    .min(2)
    .max(100)
    .regex(/^[a-zA-ZäöüÄÖÜßÀ-ÿ\s\-'.]+$/),
  // ...
});
```

### Verbesserungsbedarf

1. **Content Security Policy (CSP) fehlt:**
   ```typescript
   // next.config.ts headers() hinzufügen:
   {
     key: 'Content-Security-Policy',
     value: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' https://fonts.gstatic.com;"
   }
   ```

2. **Rate Limiter nutzt In-Memory Map:**
   ```typescript
   // route.ts:5 - Bei Serverless problematisch
   const rateLimitMap = new Map<...>();
   // -> In Produktion: Redis oder KV Store
   ```

3. **CSRF-Token fehlt:**
   - Für Kontaktformular nicht kritisch
   - Bei authentifizierten Routen wichtig

4. **Strict-Transport-Security (HSTS) fehlt:**
   ```typescript
   {
     key: 'Strict-Transport-Security',
     value: 'max-age=31536000; includeSubDomains'
   }
   ```

5. **API Route ohne CORS-Schutz:**
   - Akzeptiert Requests von jedem Origin
   - Für öffentliches Formular OK, aber dokumentieren

---

## 7. Mobile Responsiveness

### Positiv

**Responsive Breakpoints:**
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

**Fluid Typography (`Hero.module.css`, `About.module.css`):**
```css
font-size: clamp(2rem, 5vw, 3rem);
```

**Touch-Targets:**
- Buttons haben ausreichende Größe (min 44x44px)

**Mobile Navigation:**
- Hamburger-Menü mit Animation
- Body-Scroll blockiert wenn offen
- Touch-freundliche Links

### Verbesserungsbedarf

1. **Services Cards auf Mobile:**
   - Sticky-Effekt kann auf Mobile verwirrend sein
   - `top: calc(12vh + ${index * 25}px)` prüfen

2. **BeforeAfterSlider:**
   - Touch-Swipe Gesten hinzufügen

3. **Footer Columns:**
   - Auf sehr kleinen Screens (< 375px) prüfen

4. **Landscape-Modus:**
   - Hero-Section Höhe testen auf Smartphones im Querformat

---

## 8. Bilder & Assets

### Aktueller Zustand

| Asset | Größe | Format | Optimiert? |
|-------|-------|--------|------------|
| hero-bg.jpg | 228 KB | JPEG | Nein |
| og-image.jpg | 228 KB | JPEG | Nein |
| logo.png | 40 KB | PNG | Ja |
| logo.jpeg | 181 KB | JPEG | Nein (Backup?) |
| project-*.jpg | 100-215 KB | JPEG | Teilweise |
| portfolio/* | ~100-215 KB | JPEG | Teilweise |

### Verbesserungsbedarf

1. **Favicon Format:**
   ```tsx
   // layout.tsx:44-47
   icons: {
     icon: '/logo.png',  // -> /favicon.ico
     shortcut: '/logo.png',
     apple: '/apple-touch-icon.png',  // 180x180px erstellen
   },
   ```

2. **WebP/AVIF Quellen:**
   - Next.js konvertiert automatisch
   - Aber: Original-Quellen sollten hochauflösend sein

3. **Bildkomprimierung empfohlen:**
   ```bash
   # Mit ImageOptim, Squoosh oder CLI:
   npx @squoosh/cli --webp auto hero-bg.jpg -d ./optimized
   ```

4. **Responsive Images in Portfolio:**
   - `sizes` Attribut ist korrekt gesetzt
   - srcSet wird automatisch generiert

5. **Nicht verwendete Assets entfernen:**
   - `file.svg`, `globe.svg`, `next.svg`, `vercel.svg`, `window.svg`
   - `logo.jpeg` (wenn logo.png genutzt wird)

---

## 9. Verbesserungsvorschläge

### Funktionale Erweiterungen

1. **Google Maps Integration:**
   - Standortkarte im Kontaktbereich
   - Lazy-Load für Performance

2. **Bewertungen/Testimonials:**
   - Google Reviews Widget
   - Eigene Testimonials-Sektion

3. **Service-Detailseiten:**
   - `/leistungen/pflasterarbeiten`
   - `/leistungen/gartengestaltung`
   - Besseres SEO durch mehr Content

4. **Blog/Ratgeber:**
   - Saisonale Gartentipps
   - Keyword-Targeting
   - Content-Marketing

5. **Online-Terminbuchung:**
   - Calendly oder eigene Lösung
   - Reduziert Telefon-Anfragen

### Technische Erweiterungen

1. **Analytics:**
   ```tsx
   // Datenschutzkonform mit Consent:
   import { Analytics } from '@vercel/analytics/react';
   // oder Plausible/Fathom für DSGVO
   ```

2. **Structured Data erweitern:**
   - FAQ Schema für häufige Fragen
   - Review Schema wenn Bewertungen vorhanden

3. **PWA Features:**
   - `manifest.json` für App-Installation
   - Service Worker für Offline-Caching

4. **Bildergalerie Lightbox:**
   - Portfolio-Bilder vergrößerbar machen

5. **Cookie-Banner:**
   - Falls Analytics eingesetzt wird
   - DSGVO/TTDSG-konform

---

## 10. Priorisierte Maßnahmen

### Sofort (Kritisch)

| # | Maßnahme | Aufwand | Impact |
|---|----------|---------|--------|
| 1 | Bilder komprimieren (alle .jpg) | 30 min | Hoch |
| 2 | CSP Header hinzufügen | 15 min | Hoch |
| 3 | HSTS Header hinzufügen | 5 min | Mittel |
| 4 | Google Search Console verifizieren | 10 min | Hoch |
| 5 | Favicon.ico erstellen | 10 min | Niedrig |

### Kurzfristig (1-2 Wochen)

| # | Maßnahme | Aufwand | Impact |
|---|----------|---------|--------|
| 6 | Apple Touch Icon erstellen | 10 min | Niedrig |
| 7 | Doppeltes `<main>` Element entfernen | 5 min | Niedrig |
| 8 | Twitter Tags entfernen (wenn kein Account) | 5 min | Niedrig |
| 9 | Nicht genutzte SVGs entfernen | 5 min | Niedrig |
| 10 | BeforeAfterSlider Accessibility | 2 h | Mittel |

### Mittelfristig (1-2 Monate)

| # | Maßnahme | Aufwand | Impact |
|---|----------|---------|--------|
| 11 | Service-Detailseiten erstellen | 1-2 Tage | Hoch |
| 12 | Analytics einrichten (DSGVO) | 2-4 h | Mittel |
| 13 | Google Maps einbinden | 2-4 h | Mittel |
| 14 | Testimonials-Sektion | 4-8 h | Mittel |
| 15 | PWA Manifest | 2 h | Niedrig |

### Langfristig

| # | Maßnahme | Aufwand | Impact |
|---|----------|---------|--------|
| 16 | Blog/Ratgeber-Bereich | 1-2 Wochen | Hoch |
| 17 | Online-Terminbuchung | 1 Woche | Mittel |
| 18 | Rate Limiter auf Redis umstellen | 4-8 h | Niedrig |

---

## Fazit

Die Website ist **technisch sehr gut umgesetzt** mit modernem Stack und solider Grundstruktur. Die wichtigsten Verbesserungen betreffen:

1. **Performance:** Bildoptimierung bringt den größten Gewinn
2. **Sicherheit:** CSP und HSTS Headers ergänzen
3. **SEO:** Google Verification und evtl. Serviceseiten

Mit den vorgeschlagenen Sofort-Maßnahmen erreicht die Site eine **Bewertung von 9/10**.

---

*Erstellt von Claude Code am 04.02.2026*
