'use client';

import React from 'react';
import Image from 'next/image';
import { Users, Snowflake, Briefcase, MessageCircle, AlertCircle, ShieldCheck } from 'lucide-react';
import { VEHICLE_FLEET, BUSINESS_INFO } from '@/data/travelData';
import styles from './FleetSection.module.css';

export default function FleetSection() {
  const getWhatsAppFleetInquiry = (carName: string) => {
    return BUSINESS_INFO.whatsappUrl(
      `Hello Kiran Travels, I would like to inquire about booking the "${carName}" category. Please let me know current availability, luggage fit, and applicable route rates.`
    );
  };

  const generalFleetInquiryUrl = BUSINESS_INFO.whatsappUrl(
    `Hello Kiran Travels, I am unsure which car is best suited for my upcoming travel plan. Can you please guide me on the right vehicle based on passenger count and luggage?`
  );

  return (
    <section className="section" id="fleet">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="eyebrow">OUR RIDE CATALOG</div>
          <h2 className="section-title">
            Carefully Maintained <span className="gold-gradient-text">Vehicle Fleet</span>
          </h2>
          <div className="gold-divider"></div>
          <p className="section-subtitle">
            Travel in sanitized, air-conditioned comfort. Whether you need an economical sedan for city runs or a spacious MPV for a multi-generational family tour, we have the right option.
          </p>
        </div>

        {/* Fleet Grid */}
        <div className={styles.fleetGrid}>
          {VEHICLE_FLEET.map((vehicle) => (
            <div key={vehicle.id} className={styles.fleetCard}>
              {/* Image Preview */}
              <div className={styles.imageContainer}>
                <Image
                  src={vehicle.image}
                  alt={`Kiran Travels ${vehicle.name}`}
                  width={640}
                  height={380}
                  className={styles.carImage}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <span className={styles.categoryBadge}>{vehicle.badge}</span>
                <span className={styles.startingRateBadge}>{vehicle.ratePerKmStarting}</span>
              </div>

              {/* Card Details */}
              <div className={styles.cardContent}>
                <h3 className={styles.carName}>{vehicle.name}</h3>
                <p className={styles.carTagline}>{vehicle.tagline}</p>

                {/* Specs Grid */}
                <div className={styles.specsGrid}>
                  <div className={styles.specBox}>
                    <Users size={16} className={styles.specIcon} />
                    <span className={styles.specLabel}>Capacity</span>
                    <strong className={styles.specValue}>{vehicle.seats}</strong>
                  </div>

                  <div className={styles.specBox}>
                    <Snowflake size={16} className={styles.specIcon} />
                    <span className={styles.specLabel}>Climate</span>
                    <strong className={styles.specValue}>{vehicle.acType}</strong>
                  </div>

                  <div className={styles.specBox}>
                    <Briefcase size={16} className={styles.specIcon} />
                    <span className={styles.specLabel}>Luggage</span>
                    <strong className={styles.specValue}>{vehicle.luggage}</strong>
                  </div>
                </div>

                <div className={styles.bestForSection}>
                  <span className={styles.bestForLabel}>Best Suited For:</span>
                  <p className={styles.bestForText}>{vehicle.bestFor}</p>
                </div>

                {/* Transparency verification note */}
                <div className={styles.verificationNote}>
                  <ShieldCheck size={14} className={styles.verifyIcon} />
                  <span>{vehicle.statusNote}</span>
                </div>

                {/* CTA */}
                <div className={styles.cardAction}>
                  <a
                    href={getWhatsAppFleetInquiry(vehicle.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-whatsapp"
                    style={{ width: '100%', justifyContent: 'center' }}
                  >
                    <MessageCircle size={17} />
                    <span>Inquire for {vehicle.id === 'swift-dzire' ? 'Swift Dzire' : 'Ertiga'}</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Find the Right Car Banner */}
        <div className={styles.guideBanner}>
          <div className={styles.guideLeft}>
            <h3 className={styles.guideHeading}>Unsure which car suits your family or luggage?</h3>
            <p className={styles.guideDesc}>
              Tell us your passenger count, elder travel preferences, and bag requirements. Kiran Travels will recommend the most comfortable and budget-friendly vehicle.
            </p>
          </div>
          <div className={styles.guideRight}>
            <a
              href={generalFleetInquiryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              <MessageCircle size={18} />
              <span>Find the Right Car on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
