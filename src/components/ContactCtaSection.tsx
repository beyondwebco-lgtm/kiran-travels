import React from 'react';
import { Phone, MessageCircle, MapPin, Award, ArrowUp, Navigation } from 'lucide-react';
import { BUSINESS_INFO } from '@/data/travelData';
import styles from './ContactCtaSection.module.css';

export default function ContactCtaSection() {
  const quickWhatsAppText = `Hello Kiran Travels, I would like to book a car from Chilakaluripeta. Please contact me with availability and rate details.`;

  return (
    <section className="section" id="contact">
      <div className="container">
        <div className={styles.ctaCard}>
          {/* Ambient Glow */}
          <div className={styles.ambientGlow}></div>

          <div className={styles.ctaGrid}>
            {/* Left Content */}
            <div className={styles.ctaContent}>
              <div className="eyebrow">GET IN TOUCH TODAY</div>
              <h2 className={styles.ctaTitle}>
                Your Next Journey <span className="gold-gradient-text">Starts Here.</span>
              </h2>
              <p className={styles.ctaSubtitle}>
                From nearby destinations across Chilakaluripeta and Guntur district to long-distance outstation road trips anywhere in India, let us plan a comfortable, safe ride for you and your family.
              </p>

              {/* Action Buttons */}
              <div className={styles.buttonRow}>
                <a
                  href={BUSINESS_INFO.callUrl}
                  className="btn btn-primary"
                  title="Call Kiran Travels"
                >
                  <Phone size={18} />
                  <span>Call Now (+91 9398961766)</span>
                </a>

                <a
                  href={BUSINESS_INFO.whatsappUrl(quickWhatsAppText)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp"
                >
                  <MessageCircle size={18} />
                  <span>Book on WhatsApp</span>
                </a>

                <a href="#booking-form" className="btn btn-secondary">
                  <span>Get a Fare Estimate</span>
                </a>
              </div>
            </div>

            {/* Right Information Card */}
            <div className={styles.infoBoxWrapper}>
              <div className={styles.infoBox}>
                <h3 className={styles.infoBoxTitle}>Quick Business Information</h3>

                <div className={styles.infoList}>
                  <div className={styles.infoRow}>
                    <div className={styles.infoIconCol}>
                      <Navigation size={18} />
                    </div>
                    <div>
                      <span className={styles.infoLabel}>Business Name</span>
                      <strong className={styles.infoVal}>{BUSINESS_INFO.name}</strong>
                    </div>
                  </div>

                  <div className={styles.infoRow}>
                    <div className={styles.infoIconCol}>
                      <MapPin size={18} />
                    </div>
                    <div>
                      <span className={styles.infoLabel}>Base Location</span>
                      <strong className={styles.infoVal}>{BUSINESS_INFO.location}</strong>
                      <small className={styles.infoHint}>Serving all surrounding towns &amp; highways</small>
                    </div>
                  </div>

                  <div className={styles.infoRow}>
                    <div className={styles.infoIconCol}>
                      <Phone size={18} />
                    </div>
                    <div>
                      <span className={styles.infoLabel}>Direct Contact Phone</span>
                      <a href={BUSINESS_INFO.callUrl} className={styles.phoneVal}>
                        {BUSINESS_INFO.ownerContact}
                      </a>
                    </div>
                  </div>

                  <div className={styles.infoRow}>
                    <div className={styles.infoIconCol}>
                      <Award size={18} />
                    </div>
                    <div>
                      <span className={styles.infoLabel}>Industry Experience</span>
                      <strong className={styles.infoVal}>4 Years Serving Travelers</strong>
                    </div>
                  </div>
                </div>

                <div className={styles.customerNoticeBox}>
                  <p>{BUSINESS_INFO.pricingClarificationNote}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
