'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Phone, MessageCircle, MapPin, ShieldCheck, Heart } from 'lucide-react';
import { BUSINESS_INFO, POPULAR_ROUTES, SERVICES_LIST } from '@/data/travelData';
import styles from './Footer.module.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [privacyModalOpen, setPrivacyModalOpen] = useState(false);

  return (
    <footer className={styles.footer} role="contentinfo">
      <div className="container">
        {/* Main Footer Grid */}
        <div className={styles.footerGrid}>
          {/* Brand Col */}
          <div className={styles.brandCol}>
            <div className={styles.footerLogo}>
              <Image
                src="/images/logo.png"
                alt="Kiran Travels Logo"
                width={160}
                height={60}
                className={styles.footerLogoImg}
              />
              <span className={styles.brandTagline}>Your Journey • Our Priority</span>
            </div>

            <p className={styles.brandDescription}>
              Chilakaluripeta’s dependable car rental and travel partner. Specializing in comfortable local travel, outstation road trips, and sacred temple pilgrimages across Andhra Pradesh and all-India destinations from ₹13/km.
            </p>

            <div className={styles.brandTrustBadges}>
              <span className={styles.trustPill}>4 Years Experience</span>
              <span className={styles.trustPill}>Safe Ride, Happy Journey</span>
            </div>
          </div>

          {/* Quick Links Col */}
          <div className={styles.linksCol}>
            <h4 className={styles.colTitle}>Navigation</h4>
            <ul className={styles.linkList}>
              <li><a href="#home" className={styles.footerLink}>Home</a></li>
              <li><a href="#booking-form" className={styles.footerLink}>Book Your Ride</a></li>
              <li><a href="#services" className={styles.footerLink}>Our Services</a></li>
              <li><a href="#routes" className={styles.footerLink}>Routes &amp; Fares</a></li>
              <li><a href="#fleet" className={styles.footerLink}>Vehicle Fleet</a></li>
              <li><a href="#why-us" className={styles.footerLink}>Why Choose Us</a></li>
              <li><a href="#about" className={styles.footerLink}>About Us</a></li>
              <li><a href="#faq" className={styles.footerLink}>FAQs &amp; Terms</a></li>
            </ul>
          </div>

          {/* Popular Routes Col */}
          <div className={styles.linksCol}>
            <h4 className={styles.colTitle}>Featured Routes</h4>
            <ul className={styles.linkList}>
              {POPULAR_ROUTES.map((r) => (
                <li key={r.id}>
                  <a
                    href={BUSINESS_INFO.whatsappUrl(`Inquiry for ${r.from} to ${r.to}`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.footerLink}
                  >
                    <span>{r.from} ➔ {r.to}</span>
                    <strong className={styles.routeFarePill}>{r.price}*</strong>
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={BUSINESS_INFO.whatsappUrl('Inquiry for all India outstation starting at ₹13/km')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.footerLink}
                >
                  <span>All-India Outstation</span>
                  <strong className={styles.routeFarePill}>₹13/km*</strong>
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Col */}
          <div className={styles.contactCol}>
            <h4 className={styles.colTitle}>Get in Touch</h4>
            <div className={styles.contactItems}>
              <div className={styles.contactItem}>
                <MapPin size={17} className={styles.contactIcon} />
                <span>Chilakaluripeta, Palnadu / Guntur District, Andhra Pradesh, India</span>
              </div>

              <div className={styles.contactItem}>
                <Phone size={17} className={styles.contactIcon} />
                <a href={BUSINESS_INFO.callUrl} className={styles.contactLink}>
                  +91 9398961766
                </a>
              </div>

              <div className={styles.contactItem}>
                <MessageCircle size={17} className={styles.contactIcon} />
                <a
                  href={BUSINESS_INFO.whatsappUrl('Hello Kiran Travels')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.contactLink}
                >
                  WhatsApp: +91 9398961766
                </a>
              </div>
            </div>

            <div className={styles.footerCtaBox}>
              <span className={styles.footerCtaTitle}>Fastest Booking:</span>
              <a
                href={BUSINESS_INFO.whatsappUrl('Hello Kiran Travels, I would like to book a ride.')}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
                style={{ width: '100%', justifyContent: 'center', padding: '10px 16px', fontSize: '0.85rem' }}
              >
                <MessageCircle size={16} />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={styles.footerBottom}>
          <div className={styles.copyrightText}>
            © {currentYear} <strong>Kiran Travels</strong>. All rights reserved. Registered travel provider in Chilakaluripeta, Andhra Pradesh.
          </div>

          <div className={styles.bottomLinks}>
            <a href="#faq" className={styles.policyLink}>
              Terms &amp; Conditions
            </a>
            <span className={styles.dotSeparator}>•</span>
            <button
              type="button"
              className={styles.policyButton}
              onClick={() => setPrivacyModalOpen(true)}
            >
              Privacy Policy
            </button>
          </div>
        </div>
      </div>

      {/* Privacy Policy Modal */}
      {privacyModalOpen && (
        <div
          className={styles.privacyOverlay}
          onClick={() => setPrivacyModalOpen(false)}
        >
          <div
            className={styles.privacyModal}
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className={styles.privacyTitle}>Privacy Policy — Kiran Travels</h3>
            <p className={styles.privacyText}>
              At Kiran Travels, we respect your privacy. We collect customer names, phone numbers, and pickup/drop coordinates solely for the operational fulfillment of your car rental reservation and communicating with the assigned driver.
            </p>
            <p className={styles.privacyText}>
              We do not sell, rent, or monetize personal data. Your contact details are stored securely and accessed exclusively by the business owner and operational coordination staff. For any inquiries regarding personal data, please contact +91 9398961766.
            </p>
            <button
              type="button"
              className="btn btn-primary"
              style={{ marginTop: '16px', width: '100%', justifyContent: 'center' }}
              onClick={() => setPrivacyModalOpen(false)}
            >
              Close Privacy Policy
            </button>
          </div>
        </div>
      )}
    </footer>
  );
}
