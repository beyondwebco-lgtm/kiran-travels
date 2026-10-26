'use client';

import React from 'react';
import { MessageCircle, ArrowRight, Route as RouteIcon, Info, MapPin } from 'lucide-react';
import { POPULAR_ROUTES, BUSINESS_INFO } from '@/data/travelData';
import styles from './RoutesSection.module.css';

export default function RoutesSection() {
  const getWhatsAppRouteInquiry = (route: typeof POPULAR_ROUTES[0]) => {
    const text = `Hello Kiran Travels, I am interested in booking the "${route.from} to ${route.to}" route (Advertised Indicative Rate: ${route.price}). Please check vehicle availability, trip options (one-way vs round-trip), and confirm total fare.`;
    return BUSINESS_INFO.whatsappUrl(text);
  };

  const customQuoteUrl = BUSINESS_INFO.whatsappUrl(
    `Hello Kiran Travels, I have a custom destination in mind outside your listed popular routes. Can you please provide a personalized fare quotation based on your ₹13/km starting rate?`
  );

  return (
    <section className="section" id="routes">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="eyebrow">POPULAR CONNECTING CORRIDORS</div>
          <h2 className="section-title">
            Advertised Routes &amp; <span className="gold-gradient-text">Indicative Fares</span>
          </h2>
          <div className="gold-divider"></div>
          <p className="section-subtitle">
            Transparent estimates for high-frequency travel routes from Chilakaluripeta and Guntur. Fares are indicative starting rates subject to vehicle model and trip type.
          </p>
        </div>

        {/* 3 Prominent Route Cards */}
        <div className={styles.routesGrid}>
          {POPULAR_ROUTES.map((route) => (
            <div key={route.id} className={styles.routeCard}>
              <div className={styles.routeHeader}>
                <div className={styles.fromToBadge}>
                  <MapPin size={14} className={styles.pinIcon} />
                  <span>{route.from}</span>
                  <span className={styles.arrowIcon}>➔</span>
                  <span className={styles.toDestination}>{route.to}</span>
                </div>
                <div className={styles.approxDistance}>{route.distanceApprox}</div>
              </div>

              <div className={styles.routePricingBox}>
                <span className={styles.priceLead}>Indicative Starting Fare</span>
                <div className={styles.priceRow}>
                  <span className={styles.currencySymbol}>₹</span>
                  <span className={styles.priceAmount}>{route.priceNumeric.toLocaleString('en-IN')}</span>
                  <span className={styles.priceAsterisk}>*</span>
                </div>
                <span className={styles.priceType}>Standard Sedan / Route Basis</span>
              </div>

              <div className={styles.routeMeta}>
                <div className={styles.popularForTitle}>Ideal For:</div>
                <p className={styles.popularForText}>{route.popularFor}</p>

                <ul className={styles.highlightsList}>
                  {route.highlights.map((h, i) => (
                    <li key={i} className={styles.highlightItem}>
                      <span className={styles.checkDot}>•</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className={styles.cardAction}>
                <a
                  href={getWhatsAppRouteInquiry(route)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp"
                  style={{ width: '100%', justifyContent: 'center' }}
                >
                  <MessageCircle size={18} />
                  <span>Check Fare on WhatsApp</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Premium Fare Banner */}
        <div className={styles.offerBanner}>
          <div className={styles.bannerLeft}>
            <div className={styles.bannerTag}>ONE-WAY ADVERTISED RATE</div>
            <h3 className={styles.bannerHeading}>Explore More. Worry Less. One-Way Trips from ₹13/km*.</h3>
            <p className={styles.bannerSub}>
              Planning a trip to Tirupati, Bangalore, Vijayawada, Vizag, or another destination? We provide dependable Swift Dzire and Ertiga car travel with clear one-way per-kilometre billing.
            </p>
          </div>
          <div className={styles.bannerRight}>
            <a
              href={customQuoteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              <span>Get a Personalized Quote</span>
              <ArrowRight size={18} />
            </a>
          </div>
        </div>

        {/* Customer-Friendly Booking & Inclusions Clarification */}
        <div className={styles.disclaimerBox}>
          <Info size={20} className={styles.infoIcon} />
          <div className={styles.disclaimerContent}>
            <p className={styles.disclaimerText}>
              <strong>Fare &amp; Inclusions Terms:</strong> The ₹13/km rate is the advertised starting rate for one-way trips, subject to route confirmation. For round trips, driver allowance and applicable stay-related permits/charges described by the owner are included in the quoted fare, while toll charges are separate and payable additionally. Fares for popular routes are indicative starting rates subject to confirmation with Kiran Travels.
            </p>
            <p className={styles.mandatoryNoteText}>
              💡 <em>“{BUSINESS_INFO.pricingClarificationNote}”</em>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
