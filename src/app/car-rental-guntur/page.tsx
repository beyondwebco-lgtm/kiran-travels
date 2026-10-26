import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, Phone, MessageCircle, Calendar, ShieldCheck, Award, ArrowRight, CheckCircle2, ChevronRight, Info } from 'lucide-react';
import { BUSINESS_INFO, POPULAR_ROUTES, getRouteWhatsAppUrl, SITE_URL } from '@/data/travelData';
import styles from '@/styles/LocalLanding.module.css';

export const metadata: Metadata = {
  title: 'Car Rental in Guntur | Outstation Cabs & Taxi Service — Kiran Travels',
  description:
    'Book outstation cabs and car rental from Guntur with Kiran Travels. Indicative fares: Guntur to Srisailam (₹7,000*), Guntur to Hyderabad (₹7,999*), and one-way drops from ₹13/km. Swift Dzire & Ertiga.',
  keywords: [
    'Car rental in Guntur',
    'Guntur outstation cab service',
    'Guntur to Srisailam cab',
    'Guntur to Hyderabad taxi',
    'One-way cabs from Guntur',
    'Chilakaluripeta to Guntur taxi',
    'Outstation car rental in Andhra Pradesh',
  ],
  alternates: {
    canonical: `${SITE_URL}/car-rental-guntur`,
  },
  openGraph: {
    title: 'Car Rental in Guntur | Outstation Cabs & Taxi Service — Kiran Travels',
    description:
      'Book outstation cabs and car rental from Guntur with Kiran Travels. Indicative fares: Guntur to Srisailam (₹7,000*), Guntur to Hyderabad (₹7,999*), and one-way drops from ₹13/km.',
    url: `${SITE_URL}/car-rental-guntur`,
    siteName: 'Kiran Travels',
    type: 'website',
  },
};

export default function CarRentalGunturPage() {
  const pageCanonicalUrl = `${SITE_URL}/car-rental-guntur`;

  // Filter routes relevant to Guntur
  const gunturRoutes = POPULAR_ROUTES.filter(
    (r) => r.from === 'Guntur' || r.to === 'Guntur'
  );

  const gunturWhatsAppUrl = BUSINESS_INFO.whatsappUrl(
    'Hello Kiran Travels, I am in Guntur and would like to enquire about outstation car rental availability, fares and booking terms.'
  );

  const oneWayWhatsAppUrl = BUSINESS_INFO.whatsappUrl(
    'Hello Kiran Travels, I want to enquire about a one-way trip from Guntur. Please provide a quotation based on your advertised ₹13/km rate and confirm availability.'
  );

  // LocalBusiness schema for Guntur service page (strictly verified business base with service area)
  const gunturSchema = {
    '@context': 'https://schema.org',
    '@type': 'TaxiService',
    name: 'Kiran Travels - Guntur Outstation Service',
    description:
      'Outstation car rental and taxi service connecting Guntur with Srisailam, Hyderabad, Chilakaluripeta, and all-India destinations from ₹13/km.',
    url: pageCanonicalUrl,
    telephone: '+919398961766',
    provider: {
      '@type': 'LocalBusiness',
      name: 'Kiran Travels',
      telephone: '+919398961766',
      image: `${SITE_URL}/images/hero-car.jpg`,
      logo: `${SITE_URL}/images/logo.png`,
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Chilakaluripeta',
        addressRegion: 'Andhra Pradesh',
        addressCountry: 'IN',
      },
    },
    areaServed: [
      { '@type': 'City', name: 'Guntur' },
      { '@type': 'AdministrativeArea', name: 'Tenali' },
      { '@type': 'AdministrativeArea', name: 'Mangalagiri' },
      { '@type': 'AdministrativeArea', name: 'Ponnur' },
      { '@type': 'AdministrativeArea', name: 'Sattenapalle' },
      { '@type': 'AdministrativeArea', name: 'Amaravati' },
      { '@type': 'State', name: 'Andhra Pradesh' },
    ],
  };

  return (
    <div className={styles.localPage}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(gunturSchema) }}
      />

      <div className="container">
        {/* Breadcrumb Navigation */}
        <nav className={styles.breadcrumb} aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <ChevronRight size={14} />
          <span>Services</span>
          <ChevronRight size={14} />
          <span className={styles.breadcrumbCurrent}>Car Rental in Guntur</span>
        </nav>

        {/* Local Hero Header */}
        <div className={styles.localHero}>
          <span className={styles.badge}>GUNTUR &amp; SURROUNDING DISTRICT REGIONS</span>
          <h1 className={styles.h1Title}>
            Car Rental in Guntur &amp; <span className="gold-gradient-text">Outstation Cab Service</span>
          </h1>
          <p className={styles.leadText}>
            Dependable outstation car hire with clean <strong>Maruti Suzuki Swift Dzire</strong> sedans and <strong>Ertiga</strong> 7-seater MPVs. Whether you are planning a pilgrimage to Srisailam, an airport transit to Hyderabad, or a business trip across Andhra Pradesh, travel comfortably with verified highway chauffeurs.
          </p>

          <div className={styles.heroActions}>
            <a
              href={gunturWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp"
            >
              <MessageCircle size={18} />
              <span>Enquire on WhatsApp</span>
            </a>
            <a href={BUSINESS_INFO.callUrl} className="btn btn-primary">
              <Phone size={18} />
              <span>Call +91 9398961766</span>
            </a>
          </div>

          <div className={styles.heroTrustRow}>
            <div className={styles.trustItem}>
              <Award className={styles.trustIcon} size={16} />
              <span>4 Years Experience</span>
            </div>
            <div className={styles.trustItem}>
              <ShieldCheck className={styles.trustIcon} size={16} />
              <span>Doorstep Pickup Across Guntur</span>
            </div>
            <div className={styles.trustItem}>
              <CheckCircle2 className={styles.trustIcon} size={16} />
              <span>Advertised Base Rate: ₹13/km*</span>
            </div>
          </div>
        </div>

        {/* Operational Scope & Transparency Notice */}
        <div className={styles.scopeCard}>
          <h2 className={styles.scopeHeading}>How Outstation Cab Service Works in Guntur</h2>
          <p className={styles.scopeText}>
            Kiran Travels coordinates outstation car travel and intercity transfers for passengers located in Guntur and surrounding areas. Our vehicles are dispatched directly from our regional operational base in Chilakaluripeta (Palnadu / Guntur district) to provide punctual doorstep pickup at your residence, hotel, hospital, or commercial landmark in Guntur.
          </p>
          <p className={styles.scopeText}>
            We also serve customers in nearby surrounding communities when travel is confirmed in advance:
          </p>
          <div className={styles.areasTagsRow}>
            <span className={styles.areaTag}>Guntur City</span>
            <span className={styles.areaTag}>Tenali</span>
            <span className={styles.areaTag}>Mangalagiri</span>
            <span className={styles.areaTag}>Amaravati</span>
            <span className={styles.areaTag}>Ponnur</span>
            <span className={styles.areaTag}>Sattenapalle</span>
          </div>
        </div>

        {/* Indicative Route Fares for Guntur */}
        <div className={styles.sectionHeader}>
          <div className="eyebrow">CONFIRMED INDICATIVE ROUTE FARES</div>
          <h2 className={styles.sectionTitle}>
            Popular Outstation Routes <span className="gold-gradient-text">from Guntur</span>
          </h2>
          <p className={styles.sectionSubtitle}>
            Indicative route fares subject to confirmation by Kiran Travels based on travel date, vehicle choice, and trip type.
          </p>
        </div>

        <div className={styles.routesGrid}>
          {gunturRoutes.map((route) => {
            const routeWaUrl = getRouteWhatsAppUrl(route.from, route.to, route.price);

            return (
              <div key={route.id} className={styles.routeCard}>
                <div>
                  <div className={styles.routeFromTo}>
                    <MapPin size={16} color="var(--color-gold-400)" />
                    <span>{route.from} ➔ {route.to}</span>
                  </div>
                  <div className={styles.routeDistance}>{route.distanceApprox}</div>

                  <div className={styles.routeFareBox}>
                    <span className={styles.fareLabel}>Indicative Route Fare</span>
                    <div className={styles.fareAmount}>{route.price}*</div>
                    <span className={styles.fareSub}>Subject to confirmation by Kiran Travels</span>
                  </div>

                  <p className={styles.routeClarification}>
                    Ideal for: {route.popularFor}. Driver allowance and stay-related permit charges are included for round trips (tolls separate).
                  </p>
                </div>

                <div className={styles.routeActions}>
                  <a
                    href={routeWaUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                  >
                    <Calendar size={16} />
                    <span>Book This Route</span>
                  </a>
                  <a
                    href={routeWaUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-whatsapp"
                  >
                    <MessageCircle size={16} />
                    <span>Check Fare on WhatsApp</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Section 2: One-Way Trips Across India Offer */}
        <div className={styles.offerCard}>
          <div className={styles.offerLeft}>
            <span className={styles.offerTag}>ONE-WAY TRIPS ACROSS INDIA</span>
            <h3 className={styles.offerTitle}>Advertised fares from ₹13/km*</h3>
            <p className={styles.offerText}>
              Planning a one-way journey to another city from Guntur? Contact Kiran Travels for a route-specific quotation and confirmation. Available for eligible destinations across India in our well-maintained Swift Dzire and Ertiga vehicles.
            </p>
            <div className={styles.offerRules}>
              <div>• ₹13/km applies to eligible one-way trips, subject to confirmation.</div>
              <div>• Not a universal round-trip rate; round-trip arrangements include driver allowance and stay-related permit charges (tolls separate).</div>
              <div>• The specified route prices are separate indicative quotations.</div>
            </div>
          </div>
          <div>
            <a
              href={oneWayWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              <MessageCircle size={18} />
              <span>Ask for One-Way Quote</span>
            </a>
          </div>
        </div>

        {/* Section 3: Trip Charges Transparency */}
        <div className={styles.tripChargesCard}>
          <h3 className={styles.scopeHeading}>Trip Charges &amp; Booking Terms</h3>
          <div className={styles.chargesGrid}>
            <div className={styles.chargeItem}>
              <strong>One-way trips:</strong>
              <p>Advertised rate: ₹13/km for eligible routes. Confirm the final fare and applicable charges directly with Kiran Travels.</p>
            </div>
            <div className={styles.chargeItem}>
              <strong>Round trips:</strong>
              <p>Driver allowance and the applicable stay-related permit/charges specified by the owner are included in the relevant confirmed round-trip quotation. Toll charges are separate and payable additionally.</p>
            </div>
          </div>
          <div className={styles.policyNotice}>
            <strong>Cancellation Policy:</strong> “For cancellation, rescheduling or refund-related questions, please contact Kiran Travels on WhatsApp. Applicable terms will be clarified before booking.”
          </div>
          <div className={styles.policyNotice} style={{ marginTop: '8px' }}>
            <strong>Questions:</strong> “For any questions about fares, route availability, vehicle options, tolls, driver allowance, permits or cancellation, message Kiran Travels directly on WhatsApp.”
          </div>
        </div>

        {/* Local FAQs */}
        <div className={styles.faqSection}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Frequently Asked Questions — Guntur Car Rental</h2>
          </div>
          <div className={styles.faqList}>
            <div className={styles.faqCard}>
              <h3 className={styles.faqQuestion}>Can I book an outstation cab with doorstep pickup in Guntur?</h3>
              <p className={styles.faqAnswer}>
                Yes. Kiran Travels provides direct doorstep pickup across Guntur, including Arundelpet, Brodipet, Collectorate area, inner ring road, and surrounding suburbs. Please confirm your exact pickup address and scheduled departure on WhatsApp.
              </p>
            </div>
            <div className={styles.faqCard}>
              <h3 className={styles.faqQuestion}>What is the indicative fare from Guntur to Srisailam or Hyderabad?</h3>
              <p className={styles.faqAnswer}>
                Our indicative starting fare is ₹7,000* for Guntur to Srisailam and ₹7,999* for Guntur to Hyderabad. These fares are indicative starting estimates subject to confirmation with Kiran Travels based on vehicle model (Swift Dzire vs Ertiga) and trip requirements.
              </p>
            </div>
            <div className={styles.faqCard}>
              <h3 className={styles.faqQuestion}>How does one-way car rental from Guntur work?</h3>
              <p className={styles.faqAnswer}>
                We offer one-way drops starting from our advertised ₹13/km base rate for eligible intercity routes across Andhra Pradesh, Telangana, and other states. Connect on WhatsApp (+91 9398961766) to receive an exact quotation.
              </p>
            </div>
          </div>
        </div>

        {/* Interlinking to other local service pages & homepage */}
        <div className={styles.interlinksCard}>
          <h3 className={styles.interlinksHeading}>Explore More Services &amp; Nearby Service Locations</h3>
          <div className={styles.linksList}>
            <Link href="/" className={styles.internalLink}>
              <span>Main Website Homepage</span>
            </Link>
            <Link href="/chilakaluripeta-car-rental" className={styles.internalLink}>
              <span>Chilakaluripeta Car Rental (Headquarters)</span>
            </Link>
            <Link href="/outstation-cabs-vijayawada" className={styles.internalLink}>
              <span>Vijayawada Outstation Cabs</span>
            </Link>
            <Link href="/#routes" className={styles.internalLink}>
              <span>View All 4 Route Fares</span>
            </Link>
            <Link href="/#fleet" className={styles.internalLink}>
              <span>Our Fleet (Dzire &amp; Ertiga)</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
