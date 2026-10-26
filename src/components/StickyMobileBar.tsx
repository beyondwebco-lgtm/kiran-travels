'use client';

import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, ArrowUp } from 'lucide-react';
import { BUSINESS_INFO } from '@/data/travelData';
import styles from './StickyMobileBar.module.css';

export default function StickyMobileBar() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', checkScroll, { passive: true });
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const whatsappInquiryUrl = BUSINESS_INFO.whatsappUrl(
    'Hello Kiran Travels, I am visiting your website and would like to quickly check car availability and rates.'
  );

  return (
    <>
      {/* Floating Desktop / Tablet WhatsApp Widget */}
      <div className={styles.floatingWidgetGroup}>
        {showScrollTop && (
          <button
            type="button"
            className={styles.scrollTopBtn}
            onClick={scrollToTop}
            aria-label="Scroll to top of page"
            title="Back to Top"
          >
            <ArrowUp size={18} />
          </button>
        )}

        <a
          href={whatsappInquiryUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`${styles.floatingWhatsAppBtn} pulse-badge`}
          aria-label="Chat on WhatsApp with Kiran Travels"
          title="Direct WhatsApp with Kiran Travels"
        >
          <MessageCircle size={28} />
          <span className={styles.floatingTooltip}>Chat on WhatsApp</span>
        </a>
      </div>

      {/* Mobile Sticky Bottom Bar (Visible on mobile viewports only) */}
      <div className={styles.mobileStickyBar} role="navigation" aria-label="Mobile Quick Actions">
        <div className={styles.mobileBarInner}>
          <a
            href={BUSINESS_INFO.callUrl}
            className={styles.mobileCallBtn}
            aria-label="Call Kiran Travels directly"
          >
            <Phone size={18} />
            <span>Call Now</span>
          </a>

          <a
            href={whatsappInquiryUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.mobileWhatsAppBtn}
            aria-label="Book ride on WhatsApp"
          >
            <MessageCircle size={18} />
            <span>Book on WhatsApp</span>
          </a>
        </div>
      </div>
    </>
  );
}
