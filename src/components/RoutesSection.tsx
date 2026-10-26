'use client';

import React from 'react';
import { MessageCircle, ArrowRight, Info, MapPin, Calendar, CheckCircle } from 'lucide-react';
import { POPULAR_ROUTES, BUSINESS_INFO, getRouteWhatsAppUrl } from '@/data/travelData';
import styles from './RoutesSection.module.css';

export default function RoutesSection() {
  const oneWayOfferWhatsAppUrl = BUSINESS_INFO.whatsappUrl(
    'Hello Kiran Travels, I am planning a one-way trip across India. Please provide a route-specific quotation based on your advertised ₹13/km rate and confirm availability.'
  );

  return (
    <section className="section" id="routes">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="eyebrow">FREQUENT CONNECTING ROUTES</div>
          <h2 className="section-title">
            Indicative Route Fares &amp; <span className="gold-gradient-text">Verified Fares</span>
          </h2>
          <div className="gold-divider"></div>
          <p className="section-subtitle">
            Client-confirmed indicative route fares connecting Guntur, Chilakaluripeta, Vijayawada, Srisailam, and Hyderabad. Fares are indicative and subject to confirmation by Kiran Travels.
          </p>
        </div>

        {/* 4 Prominent Route Cards in 2x2 Layout */}
        <div className={styles.routesGrid}>
          {POPULAR_ROUTES.map((route) => {
            const routeWaUrl = getRouteWhatsAppUrl(route.from, route.to, route.price);

            return (
              <div key={route.id} className={styles.routeCard}>
                <div className={styles.routeHeader}>
                  <div className={styles.fromToBadge}>
                    <MapPin size={15} className={styles.pinIcon} />
                    <span>{route.from}</span>
                    <span className={styles.arrowIcon}>➔</span>
                    <span className={styles.toDestination}>{route.to}</span>
                  </div>
                  <div className={styles.approxDistance}>{route.distanceApprox}</div>
                </div>

                <div className={styles.routePricingBox}>
                  <span className={styles.priceLead}>Indicative Route Fare</span>
                  <div className={styles.priceRow}>
                    <span className={styles.currencySymbol}>₹</span>
                    <span className={styles.priceAmount}>{route.priceNumeric.toLocaleString('en-IN')}</span>
                    <span className={styles.priceAsterisk}>*</span>
                  </div>
                  <span className={styles.priceType}>Subject to confirmation by Kiran Travels</span>
                </div>

                <div className={styles.routeMeta}>
                  <div className={styles.popularForTitle}>Trip Highlights &amp; Uses:</div>
                  <p className={styles.popularForText}>{route.popularFor}</p>

                  <ul className={styles.highlightsList}>
                    {route.highlights.map((h, i) => (
                      <li key={i} className={styles.highlightItem}>
                        <CheckCircle size={14} className={styles.checkIcon} />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>

                  <div className={styles.routeClarification}>
                    <span>💡 Indicative route fare subject to confirmation by Kiran Travels. Toll charges separate.</span>
                  </div>
                </div>

                <div className={styles.cardActions}>
                  <a
                    href={routeWaUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`btn btn-primary ${styles.bookRouteBtn}`}
                  >
                    <Calendar size={16} />
                    <span>Book This Route</span>
                  </a>

                  <a
                    href={routeWaUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`btn btn-whatsapp ${styles.checkFareBtn}`}
                  >
                    <MessageCircle size={16} />
                    <span>Check Fare on WhatsApp</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Section 2: One-Way Trips Across India Offer Banner */}
        <div className={styles.offerBanner}>
          <div className={styles.bannerLeft}>
            <div className={styles.bannerTag}>ONE-WAY TRIPS ACROSS INDIA</div>
            <h3 className={styles.bannerHeading}>Advertised fares from ₹13/km*</h3>
            <p className={styles.bannerSub}>
              Planning a one-way journey to another city? Contact Kiran Travels for a route-specific quotation and confirmation. Available for eligible destinations across India in our well-maintained Swift Dzire and Ertiga vehicles.
            </p>
            <div className={styles.bannerPricingRules}>
              <span>• ₹13/km applies to eligible one-way trips, subject to confirmation.</span>
              <span>• Not a universal round-trip rate; round-trip packages include driver allowance and stay-related permit charges (tolls separate).</span>
              <span>• The four specified route prices above are separate indicative quotations.</span>
            </div>
          </div>
          <div className={styles.bannerRight}>
            <a
              href={oneWayOfferWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              <MessageCircle size={18} />
              <span>Ask for One-Way Quote</span>
            </a>
          </div>
        </div>

        {/* Section 3: Trip Charges Clarification Box */}
        <div className={styles.disclaimerBox}>
          <Info size={22} className={styles.infoIcon} />
          <div className={styles.disclaimerContent}>
            <h4 className={styles.disclaimerHeading}>Trip Charges &amp; Transparency Policy</h4>
            
            <div className={styles.termsColumns}>
              <div className={styles.termCol}>
                <strong>One-way trips:</strong>
                <p>Advertised rate: ₹13/km for eligible routes. Confirm the final fare and applicable charges directly with Kiran Travels before departure.</p>
              </div>

              <div className={styles.termCol}>
                <strong>Round trips:</strong>
                <p>Driver allowance and the applicable stay-related permit/charges specified by the owner are included in the relevant confirmed round-trip quotation. Toll charges are separate and payable additionally. Inclusions are confirmed per trip.</p>
              </div>
            </div>

            <div className={styles.policyNotesGroup}>
              <p className={styles.mandatoryNoteText}>
                <strong>Cancellation:</strong> “For cancellation, rescheduling or refund-related questions, please contact Kiran Travels on WhatsApp. Applicable terms will be clarified before booking.”
              </p>
              <p className={styles.mandatoryNoteText}>
                <strong>Questions:</strong> “For any questions about fares, route availability, vehicle options, tolls, driver allowance, permits or cancellation, message Kiran Travels directly on WhatsApp.”
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
