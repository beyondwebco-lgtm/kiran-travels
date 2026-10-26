import type { Metadata, Viewport } from 'next';
import { Plus_Jakarta_Sans, Outfit } from 'next/font/google';
import '@/styles/globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import StickyMobileBar from '@/components/StickyMobileBar';
import { SITE_URL } from '@/data/travelData';

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-sans',
  display: 'swap',
});

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['600', '700', '800', '900'],
  variable: '--font-display',
  display: 'swap',
});

export const viewport: Viewport = {
  themeColor: '#050811',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'Kiran Travels | Car Rental & Outstation Cabs in Chilakaluripeta',
  description:
    'Book local rides and outstation car travel with Kiran Travels, Chilakaluripeta. Explore one-way trips from ₹13/km and enquire directly on WhatsApp.',
  keywords: [
    'Kiran Travels Chilakaluripeta',
    'Car rental in Chilakaluripeta',
    'Taxi service in Chilakaluripeta',
    'Outstation cab from Chilakaluripeta',
    'Chilakaluripeta to Hyderabad cab',
    'Chilakaluripeta to Srisailam taxi',
    'Guntur to Chennai cab',
    'One-way car rental from Chilakaluripeta',
    'Long-distance car travel in Andhra Pradesh',
    'Swift Dzire rental Chilakaluripeta',
    'Ertiga car rental Chilakaluripeta',
  ],
  authors: [{ name: 'Kiran Travels' }],
  creator: 'Kiran Travels',
  publisher: 'Kiran Travels',
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
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: SITE_URL,
    siteName: 'Kiran Travels',
    title: 'Kiran Travels | Car Rental & Outstation Cabs in Chilakaluripeta',
    description:
      'Book local rides and outstation car travel with Kiran Travels, Chilakaluripeta. Explore one-way trips from ₹13/km and enquire directly on WhatsApp.',
    images: [
      {
        url: `${SITE_URL}/images/hero-car.jpg`,
        width: 1200,
        height: 630,
        alt: 'Kiran Travels Maruti Suzuki Swift Dzire and Ertiga car rental service in Chilakaluripeta',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kiran Travels | Car Rental & Outstation Cabs in Chilakaluripeta',
    description:
      'Book local rides and outstation car travel with Kiran Travels, Chilakaluripeta. Explore one-way trips from ₹13/km and enquire directly on WhatsApp.',
    images: [`${SITE_URL}/images/hero-car.jpg`],
  },
  icons: {
    icon: '/images/logo.png',
    shortcut: '/images/logo.png',
    apple: '/images/logo.png',
  },
  alternates: {
    canonical: SITE_URL,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Schema.org Structured Data using verified details strictly (No fake ratings, NO operating hours)
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'TaxiService',
    name: 'Kiran Travels',
    legalName: 'Kiran Travels Car Rental Service',
    description:
      'Car rental and outstation cab travel service based in Chilakaluripeta, Andhra Pradesh. Specializing in Swift Dzire and Ertiga vehicles for local travel and outstation destinations across India.',
    url: SITE_URL,
    telephone: '+919398961766',
    areaServed: [
      { '@type': 'AdministrativeArea', name: 'Chilakaluripeta' },
      { '@type': 'AdministrativeArea', name: 'Guntur' },
      { '@type': 'AdministrativeArea', name: 'Andhra Pradesh' },
      { '@type': 'AdministrativeArea', name: 'Hyderabad' },
      { '@type': 'AdministrativeArea', name: 'Srisailam' },
      { '@type': 'AdministrativeArea', name: 'Chennai' },
    ],
    provider: {
      '@type': 'LocalBusiness',
      name: 'Kiran Travels',
      image: `${SITE_URL}/images/hero-car.jpg`,
      logo: `${SITE_URL}/images/logo.png`,
      telephone: '+919398961766',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Chilakaluripeta',
        addressRegion: 'Andhra Pradesh',
        addressCountry: 'IN',
      },
    },
  };

  return (
    <html lang="en" className={`${jakarta.variable} ${outfit.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body>
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
        <StickyMobileBar />
      </body>
    </html>
  );
}
