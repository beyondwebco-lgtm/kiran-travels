'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Phone, MessageCircle, Menu, X } from 'lucide-react';
import { BUSINESS_INFO } from '@/data/travelData';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setMobileMenuOpen(false);

  const quickInquiryText = `Hello Kiran Travels, I am visiting your website and would like to inquire about booking a Swift Dzire or Ertiga ride.`;

  return (
    <>
      <header
        className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}
        id="site-header"
      >
        <div className="container">
          <div className={styles.navRow}>
            {/* Official Brand Logo */}
            <a href="#home" className={styles.logoLink} onClick={closeMenu} aria-label="Kiran Travels - Home">
              <Image
                src="/images/logo.png"
                alt="Kiran Travels Chilakaluripeta Logo"
                width={132}
                height={50}
                priority
                className={styles.brandLogoImg}
              />
            </a>

            {/* Desktop Navigation Links — Streamlined & Elegant */}
            <nav className={styles.desktopNav} aria-label="Main Navigation">
              <a href="#home" className={styles.navLink}>Home</a>
              <a href="#services" className={styles.navLink}>Services</a>
              <a href="#routes" className={styles.navLink}>Routes &amp; Fares</a>
              <a href="#fleet" className={styles.navLink}>Our Fleet</a>
              <a href="#about" className={styles.navLink}>About</a>
              <a href="#faq" className={styles.navLink}>FAQs</a>
              <a href="#contact" className={styles.navLink}>Contact</a>
            </nav>

            {/* Desktop Actions */}
            <div className={styles.desktopActions}>
              <a
                href={BUSINESS_INFO.callUrl}
                className={styles.callLink}
                title="Call Kiran Travels directly"
              >
                <div className={styles.phoneIconCircle}>
                  <Phone size={13} />
                </div>
                <span className={styles.phoneText}>+91 9398961766</span>
              </a>

              <a
                href={BUSINESS_INFO.whatsappUrl(quickInquiryText)}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.bookBtn}
              >
                <MessageCircle size={15} />
                <span>Book Ride</span>
              </a>
            </div>

            {/* Mobile Controls */}
            <div className={styles.mobileControls}>
              <a
                href={BUSINESS_INFO.callUrl}
                className={styles.mobileCallIcon}
                aria-label="Call Kiran Travels"
              >
                <Phone size={17} />
              </a>

              <button
                type="button"
                className={styles.menuToggle}
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-expanded={mobileMenuOpen}
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      <div
        className={`${styles.mobileDrawerOverlay} ${
          mobileMenuOpen ? styles.drawerOpen : ''
        }`}
        onClick={closeMenu}
      >
        <div
          className={styles.mobileDrawer}
          onClick={(e) => e.stopPropagation()}
        >
          <div className={styles.drawerHeader}>
            <Image
              src="/images/logo.png"
              alt="Kiran Travels Logo"
              width={140}
              height={53}
              className={styles.drawerLogoImg}
            />
            <button
              type="button"
              className={styles.drawerCloseBtn}
              onClick={closeMenu}
              aria-label="Close menu"
            >
              <X size={20} />
            </button>
          </div>

          <div className={styles.rateHighlightBanner}>
            <span className={styles.rateBadge}>SWIFT DZIRE &amp; ERTIGA</span>
            <span className={styles.rateText}>All-India starting from <strong>₹13/km</strong></span>
          </div>

          <nav className={styles.mobileNavLinks}>
            <a href="#home" className={styles.mobileLink} onClick={closeMenu}>
              Home
            </a>
            <a href="#booking-form" className={styles.mobileLink} onClick={closeMenu}>
              Quick Fare Estimate
            </a>
            <a href="#services" className={styles.mobileLink} onClick={closeMenu}>
              Our Services
            </a>
            <a href="#routes" className={styles.mobileLink} onClick={closeMenu}>
              Popular Routes &amp; Fares
            </a>
            <a href="#fleet" className={styles.mobileLink} onClick={closeMenu}>
              Our Fleet (Dzire &amp; Ertiga)
            </a>
            <a href="#why-us" className={styles.mobileLink} onClick={closeMenu}>
              Why Travel With Us
            </a>
            <a href="#about" className={styles.mobileLink} onClick={closeMenu}>
              About Kiran Travels
            </a>
            <a href="#faq" className={styles.mobileLink} onClick={closeMenu}>
              Policies &amp; FAQs
            </a>
            <a href="#contact" className={styles.mobileLink} onClick={closeMenu}>
              Contact &amp; Location
            </a>
          </nav>

          <div className={styles.drawerActions}>
            <a
              href={BUSINESS_INFO.whatsappUrl(quickInquiryText)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp"
              style={{ width: '100%', justifyContent: 'center' }}
              onClick={closeMenu}
            >
              <MessageCircle size={18} />
              <span>Book on WhatsApp</span>
            </a>
            <a
              href={BUSINESS_INFO.callUrl}
              className="btn btn-secondary"
              style={{ width: '100%', justifyContent: 'center', marginTop: '10px' }}
              onClick={closeMenu}
            >
              <Phone size={18} />
              <span>Call +91 9398961766</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
