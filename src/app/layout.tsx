import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/providers/SmoothScroll";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://sylwester-gartenbau.de';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Sylwester Hulboj | Garten & Hausmeisterservice Remseck",
    template: "%s | Sylwester Hulboj Gartenbau",
  },
  description: "Ihr Experte für Gartengestaltung, Pflasterarbeiten, Gebäudereinigung und Hausmeisterservice in Remseck am Neckar und Region Stuttgart. Über 10 Jahre Erfahrung.",
  keywords: [
    "Gartenbau Remseck",
    "Gartengestaltung Stuttgart",
    "Pflasterarbeiten",
    "Hausmeisterservice",
    "Gebäudereinigung",
    "Zaunbau",
    "Gartenpflege",
    "Remseck am Neckar",
    "Ludwigsburg",
    "Landschaftsbau",
  ],
  authors: [{ name: "Sylwester Hulboj" }],
  creator: "Sylwester Hulboj",
  publisher: "Sylwester Hulboj",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    shortcut: '/favicon-32x32.png',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    url: siteUrl,
    siteName: 'Sylwester Hulboj - Garten & Hausmeisterservice',
    title: 'Sylwester Hulboj | Garten & Hausmeisterservice Remseck',
    description: 'Professionelle Gartengestaltung, Pflasterarbeiten, Gebäudereinigung und Hausmeisterservice in Remseck am Neckar und Region Stuttgart.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Sylwester Hulboj - Garten & Hausmeisterservice',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sylwester Hulboj | Garten & Hausmeisterservice',
    description: 'Professionelle Gartengestaltung, Pflasterarbeiten und Hausmeisterservice in Remseck am Neckar.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // google: 'your-google-verification-code',
  },
  alternates: {
    canonical: siteUrl,
  },
  manifest: '/manifest.json',
  other: {
    'geo.region': 'DE-BW',
    'geo.placename': 'Remseck am Neckar',
    'geo.position': '48.8761;9.2699',
    'ICBM': '48.8761, 9.2699',
  },
};

// JSON-LD Schema for Local Business
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': siteUrl,
  name: 'Sylwester Hulboj - Garten & Hausmeisterservice',
  description: 'Professionelle Gartengestaltung, Pflasterarbeiten, Gebäudereinigung und Hausmeisterservice in Remseck am Neckar und Region Stuttgart.',
  url: siteUrl,
  telephone: '+4915750720150',
  email: 'hulboj-garten-hausmeisterservice@gmx.net',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Sprengerstr. 4/2',
    addressLocality: 'Remseck am Neckar',
    postalCode: '71686',
    addressRegion: 'Baden-Württemberg',
    addressCountry: 'DE',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 48.8761,
    longitude: 9.2699,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '07:00',
      closes: '18:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Saturday',
      opens: '08:00',
      closes: '14:00',
    },
  ],
  priceRange: '$$',
  image: `${siteUrl}/og-image.jpg`,
  logo: `${siteUrl}/logo.png`,
  sameAs: [],
  areaServed: [
    {
      '@type': 'City',
      name: 'Remseck am Neckar',
    },
    {
      '@type': 'City',
      name: 'Stuttgart',
    },
    {
      '@type': 'City',
      name: 'Ludwigsburg',
    },
    {
      '@type': 'City',
      name: 'Fellbach',
    },
    {
      '@type': 'City',
      name: 'Waiblingen',
    },
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Garten & Hausmeisterservice',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Pflasterarbeiten',
          description: 'Hochwertige Pflasterungen für Einfahrten, Wege und Terrassen.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Gartengestaltung',
          description: 'Individuelle Planung und Neuanlage Ihres Traumgartens.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Zaun & Sichtschutz',
          description: 'Privatsphäre und Sicherheit mit stilvollen Zaunsystemen.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Gartenpflege',
          description: 'Professionelle Pflege für Ihren Garten das ganze Jahr über.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Hausmeisterservice',
          description: 'Zuverlässiger Hausmeisterservice und Gebäudereinigung.',
        },
      },
    ],
  },
  founder: {
    '@type': 'Person',
    name: 'Sylwester Hulboj',
  },
  taxID: 'DE 82 537 191 043',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={outfit.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="canonical" href={siteUrl} />
      </head>
      <body>
        <a href="#main-content" className="skip-link">
          Zum Hauptinhalt springen
        </a>
        <SmoothScroll>
          <Header />
          <main id="main-content">{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
