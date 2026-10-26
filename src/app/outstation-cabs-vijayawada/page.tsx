import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, Phone, MessageCircle, Calendar, ShieldCheck, Award, CheckCircle2, ChevronRight, Plane } from 'lucide-react';
import { BUSINESS_INFO, POPULAR_ROUTES, getRouteWhatsAppUrl, SITE_URL } from '@/data/travelData';
import styles from '@/styles/LocalLanding.module.css';

export const metadata: Metadata = {
  title: 'Outstation Cabs in Vijayawada | Car Rental & Airport Transfers — Kiran Travels',
  description:
    'Book outstation cabs and airport taxi transfers in Vijayawada with Kiran Travels. Indicative fares: Chilakaluripeta to Vijayawada (₹2,999*), and one-way drops across India from ₹13/km in Swift Dzire & Ertiga. Call +91 9398961766.',
  keywords: [
    'Vijayawada outstation cabs',
    'Outstation cab service in Vijayawada',
    'Chilakaluripeta to Vijayawada cab',
    'Vijayawada to nearby destinations cab service',
    'Car rental in Vijayawada',
    'Vijayawada airport taxi transfer',
    'One-way cabs from Vijayawada',
  ],
  alternates: {
    canonical: `${SITE_URL}/outstation-cabs-vijayawada`,
  },
  openGraph: {
    title: 'Outstation Cabs in Vijayawada | Car Rental & Airport Transfers — Kiran Travels',
    description:
      'Book outstation cabs and airport taxi transfers in Vijayawada with Kiran Travels. Indicative fares: Chilakaluripeta to Vijayawada (₹2,999*), and one-way drops across India from ₹13/km in Swift Dzire & Ertiga.',
    url: `${SITE_URL}/outstation-cabs-vijayawada`,
    siteName: 'Kiran Travels',
    type: 'website',
  },
};

export default function OutstationCabsVijayawadaPage() {
  const pageCanonicalUrl = `${SITE_URL}/outstation-cabs-vijayawada`;

  const vjaWhatsAppUrl = BUSINESS_INFO.whatsappUrl(
    'Hello Kiran Travels, I am in Vijayawada and would like to enquire about outstation cab availability, airport transfers, fares and booking terms.'
  );

  const oneWayWhatsAppUrl = BUSINESS_INFO.whatsappUrl(
    'Hello Kiran Travels, I want to enquire about a one-way trip from Vijayawada. Please provide a quotation based on your advertised ₹13/km rate and confirm availability.'
  );

  // LocalBusiness schema for Vijayawada service page
  const vjaSchema = {
    '@context': 'https://schema.org',
    '@type': 'TaxiService',
    name: 'Kiran Travels - Vijayawada Outstation & Airport Service',
    description:
      'Outstation car rental and airport transfer service connecting Vijayawada and Gannavaram with Chilakaluripeta, Guntur, Hyderabad, and all-India destinations from ₹13/km.',
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
      { '@type': 'City', name: 'Vijayawada' },
      { '@type': 'AdministrativeArea', name: 'Gannavaram' },
      { '@type': 'AdministrativeArea', name: 'Amaravati' },
      { '@type': 'AdministrativeArea', name: 'Mangalagiri' },
      { '@type': 'State', name: 'Andhra Pradesh' },
    ],
  };

  return (
    <div className={styles.localPage}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(vjaSchema) }}
      />

      <div className="container">
        {/* Breadcrumb Navigation */}
        <nav className={styles.breadcrumb} aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <ChevronRight size={14} />
          <span>Services</span>
          <ChevronRight size={14} />
          <span className={styles.breadcrumbCurrent}>Outstation Cabs Vijayawada</span>
        </nav>

        {/* Local Hero Header */}
        <div className={styles.localHero}>
          <span className={styles.badge}>VIJAYAWADA &amp; CAPITAL REGION CONNECTIVITY</span>
          <h1 className={styles.h1Title}>
            Outstation Cabs in Vijayawada &amp; <span className="gold-gradient-text">Intercity Car Rental</span>
          </h1>
          <p className={styles.leadText}>
            Comfortable highway travel connecting Vijayawada, Gannavaram Airport, and Amaravati with Chilakaluripeta, Guntur, and intercity corridors across Andhra Pradesh and Telangana. Travel in clean, chilled AC <strong>Maruti Suzuki Swift Dzire</strong> sedans and <strong>Ertiga</strong> 7-seater MPVs.
          </p>

          <div className={styles.heroActions}>
            <a
              href={vjaWhatsAppUrl}
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
              <span>4 Years Highway Experience</span>
            </div>
            <div className={styles.trustItem}>
              <Plane className={styles.trustIcon} size={16} />
              <span>Gannavaram Airport Drops</span>
            </div>
            <div className={styles.trustItem}>
              <CheckCircle2 className={styles.trustIcon} size={16} />
              <span>Advertised Starting Rate: ₹13/km*</span>
            </div>
          </div>
        </div>

        {/* Operational Scope in Vijayawada */}
        <div className={styles.scopeCard}>
          <h2 className={styles.scopeHeading}>Outstation Travel &amp; Airport Transit in Vijayawada</h2>
          <p className={styles.scopeText}>
            Kiran Travels provides scheduled outstation car hire for passengers traveling between Vijayawada and the Palnadu/Guntur district, as well as onward long-distance journeys across South India. With operations coordinated directly by owner Kiran (+91 9398961766), our chauffeurs provide reliable pickup for flight arrivals at Vijayawada Airport (Gannavaram), Kanaka Durga Temple darshan visits, and intercity corporate commutes.
          </p>
          <p className={styles.scopeText}>
            Service is coordinated across key pickup zones in the Vijayawada metropolitan area:
          </p>
          <div className={styles.areasTagsRow}>
            <span className={styles.areaTag}>Vijayawada Central &amp; Benz Circle</span>
            <span className={styles.areaTag}>Gannavaram Airport (VGA)</span>
            <span className={styles.areaTag}>Kanaka Durga Temple Area</span>
            <span className={styles.areaTag}>Amaravati Capital Region</span>
            <span className={styles.areaTag}>Mangalagiri Highway</span>
            <span className={styles.areaTag}>Ibrahimpatnam</span>
          </div>
        </div>

        {/* Indicative Route Fares Connecting Vijayawada */}
        <div className={styles.sectionHeader}>
          <div className="eyebrow">CONFIRMED INDICATIVE ROUTE FARES</div>
          <h2 className={styles.sectionTitle}>
            Key Connecting Corridors <span className="gold-gradient-text">for Vijayawada</span>
          </h2>
          <p className={styles.sectionSubtitle}>
            Indicative route fares subject to confirmation by Kiran Travels based on travel date, vehicle choice, and trip type.
          </p>
        </div>

        <div className={styles.routesGrid}>
          {POPULAR_ROUTES.map((route) => {
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
              Planning a one-way journey to another city from Vijayawada? Contact Kiran Travels for a route-specific quotation and confirmation. Available for eligible destinations across India in our well-maintained Swift Dzire and Ertiga vehicles.
            </p>
            <div className={styles.offerRules}>
              <div>• ₹13/km applies to eligible one-way trips, subject to confirmation.</div>
              <div>• Not a universal round-trip rate; round-trip packages include driver allowance and stay-related permit charges (tolls separate).</div>
              <div>• The four specified route prices are separate indicative quotations.</div>
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
              <p>Advertised rate: ₹13/km for eligible routes. Confirm the final fare and applicable charges directly with Kiran Travels before travel.</p>
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
            <h2 className={styles.sectionTitle}>Frequently Asked Questions — Vijayawada Outstation</h2>
          </div>
          <div className={styles.faqList}>
            <div className={styles.faqCard}>
              <h3 className={styles.faqQuestion}>Can I book an airport taxi from Vijayawada (Gannavaram) to Chilakaluripeta or Guntur?</h3>
              <p className={styles.faqAnswer}>
                Yes. We offer pre-scheduled airport pickups at Vijayawada Airport (Gannavaram) with direct transit to Chilakaluripeta, Guntur, Narasaraopet, and surrounding towns. Connect on WhatsApp in advance with your flight arrival details.
              </p>
            </div>
            <div className={styles.faqCard}>
              <h3 className={styles.faqQuestion}>What is the indicative fare between Chilakaluripeta and Vijayawada?</h3>
              <p className={styles.faqAnswer}>
                Our indicative starting fare is ₹2,999* for Chilakaluripeta to Vijayawada. This is an indicative starting estimate subject to confirmation by Kiran Travels based on vehicle choice (Swift Dzire vs Ertiga) and specific drop coordinates.
              </p>
            </div>
            <div className={styles.faqCard}>
              <h3 className={styles.faqQuestion}>Do you provide outstation cabs from Vijayawada to Hyderabad or Srisailam?</h3>
              <p className={styles.faqAnswer}>
                Yes. We provide intercity outstation cabs connecting the Vijayawada-Guntur region to Srisailam (indicative fare from Guntur: ₹7,000*) and Hyderabad (indicative fare from Guntur: ₹7,999*). Fares are confirmed upfront directly on WhatsApp.
              </p>
            </div>
          </div>
        </div>

        {/* Interlinking */}
        <div className={styles.interlinksCard}>
          <h3 className={styles.interlinksHeading}>Explore More Services &amp; Nearby Service Locations</h3>
          <div className={styles.linksList}>
            <Link href="/" className={styles.internalLink}>
              <span>Main Website Homepage</span>
            </Link>
            <Link href="/car-rental-guntur" className={styles.internalLink}>
              <span>Car Rental in Guntur</span>
            </Link>
            <Link href="/chilakaluripeta-car-rental" className={styles.internalLink}>
              <span>Chilakaluripeta Car Rental (Headquarters)</span>
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
