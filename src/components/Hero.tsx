import React from 'react';
import Image from 'next/image';
import { ShieldCheck, Award, Sparkles, MessageCircle, ArrowRight, CheckCircle2 } from 'lucide-react';
import { BUSINESS_INFO } from '@/data/travelData';
import styles from './Hero.module.css';

export default function Hero() {
  const whatsappHeroText = `Hello Kiran Travels, I would like to inquire about booking a ride from Chilakaluripeta. Please share vehicle availability and fare details.`;

  return (
    <section className={styles.heroSection} id="home">
      {/* Background ambient lighting */}
      <div className={styles.ambientGlowTop}></div>
      <div className={styles.ambientGlowBottom}></div>

      <div className="container">
        <div className={styles.heroGrid}>
          {/* Left Text / Editorial Column */}
          <div className={styles.heroContent}>
            {/* Location & Service Eyebrow */}
            <div className={styles.eyebrowBadge}>
              <span className={styles.pulseDot}></span>
              <span>CHILAKALURIPETA • LOCAL &amp; OUTSTATION TRAVEL</span>
            </div>

            {/* Main Punchy Headline */}
            <h1 className={styles.heroTitle}>
              Every Journey Deserves a{' '}
              <span className="gold-gradient-text">Better Ride.</span>
            </h1>

            {/* Supporting Copy */}
            <p className={styles.heroSubtitle}>
              Comfortable, dependable, and affordable car travel with pristine <strong>Maruti Suzuki Swift Dzire</strong> and <strong>Ertiga</strong> for your everyday journeys,
              sacred family pilgrimages, and outstation destinations across Andhra Pradesh and India.
            </p>

            {/* Prominent Offer Badge & Pill */}
            <div className={styles.fareOfferCard}>
              <div className={styles.offerBadge}>MAIN ADVERTISED RATE</div>
              <div className={styles.fareRow}>
                <span className={styles.fareLabel}>Travel Across India From</span>
                <span className={styles.farePrice}>₹13<span className={styles.perKm}>/km*</span></span>
              </div>
              <div className={styles.taglineSub}>
                Swift Dzire &amp; Ertiga &nbsp;|&nbsp; Your Journey • Our Priority &nbsp;|&nbsp; Safe Ride, Happy Journey
              </div>
            </div>

            {/* CTA Group */}
            <div className={styles.ctaGroup}>
              <a href="#booking-form" className={`btn btn-primary ${styles.mainCta}`}>
                <span>Book Your Ride</span>
                <ArrowRight size={18} />
              </a>

              <a
                href={BUSINESS_INFO.whatsappUrl(whatsappHeroText)}
                target="_blank"
                rel="noopener noreferrer"
                className={`btn btn-whatsapp ${styles.whatsappCta}`}
              >
                <MessageCircle size={18} />
                <span>WhatsApp Quote</span>
              </a>

              <a href="#fleet" className={`btn btn-secondary ${styles.serviceCta}`}>
                <span>View Dzire &amp; Ertiga</span>
              </a>
            </div>

            {/* Reassurance & Experience Trust Bar */}
            <div className={styles.trustBar}>
              <div className={styles.trustItem}>
                <Award className={styles.trustIcon} size={18} />
                <span><strong>4 Years</strong> Experience</span>
              </div>
              <div className={styles.trustDivider}></div>
              <div className={styles.trustItem}>
                <CheckCircle2 className={styles.trustIcon} size={18} />
                <span>Swift Dzire &amp; Ertiga</span>
              </div>
              <div className={styles.trustDivider}></div>
              <div className={styles.trustItem}>
                <ShieldCheck className={styles.trustIcon} size={18} />
                <span>Verified Chauffeurs</span>
              </div>
            </div>
          </div>

          {/* Right Image / Vehicle Spotlight Column */}
          <div className={styles.heroVisualWrapper}>
            <div className={styles.imageCard}>
              <div className={styles.imageInner}>
                <Image
                  src="/images/hero-car.jpg"
                  alt="Kiran Travels pristine white Maruti Suzuki Dzire sedan on scenic highway road trip"
                  width={1280}
                  height={720}
                  priority={true}
                  className={styles.heroImage}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 620px"
                />
                <div className={styles.imageOverlayGradient}></div>

                {/* Floating badge over image */}
                <div className={styles.floatingVehicleBadge}>
                  <div className={styles.vehicleBadgeIcon}>
                    <Sparkles size={16} />
                  </div>
                  <div>
                    <div className={styles.vehicleBadgeTitle}>Swift Dzire &amp; Ertiga Fleet</div>
                    <div className={styles.vehicleBadgeSub}>Maruti Suzuki • Chilled AC</div>
                  </div>
                </div>

                {/* Floating Rate Tag */}
                <div className={styles.floatingRateBadge}>
                  <div className={styles.floatRateNum}>₹13</div>
                  <div className={styles.floatRateUnit}>/km starting</div>
                </div>
              </div>

              {/* Quick Route Teasers at bottom of visual */}
              <div className={styles.quickRoutesTeaser}>
                <div className={styles.quickRouteItem}>
                  <span className={styles.routeCity}>Srisailam</span>
                  <span className={styles.routeFare}>From ₹5,000*</span>
                </div>
                <div className={styles.quickRouteDivider}></div>
                <div className={styles.quickRouteItem}>
                  <span className={styles.routeCity}>Hyderabad</span>
                  <span className={styles.routeFare}>From ₹8,000*</span>
                </div>
                <div className={styles.quickRouteDivider}></div>
                <div className={styles.quickRouteItem}>
                  <span className={styles.routeCity}>Chennai</span>
                  <span className={styles.routeFare}>From ₹8,000*</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
