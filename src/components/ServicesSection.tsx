'use client';

import React from 'react';
import Image from 'next/image';
import {
  MapPin,
  Compass,
  ArrowRightCircle,
  Repeat,
  Sparkles,
  Users,
  Plane,
  MessageCircle,
  CheckCircle,
} from 'lucide-react';
import { SERVICES_LIST, BUSINESS_INFO } from '@/data/travelData';
import styles from './ServicesSection.module.css';

const iconMap: { [key: string]: React.ElementType } = {
  MapPin,
  Compass,
  ArrowRightCircle,
  Repeat,
  Sparkles,
  Users,
  Plane,
};

export default function ServicesSection() {
  const getWhatsAppServiceInquiry = (serviceTitle: string) => {
    return BUSINESS_INFO.whatsappUrl(
      `Hello Kiran Travels, I would like to inquire about your "${serviceTitle}" service. Please share availability, vehicle options, and fare estimates.`
    );
  };

  // Featured service vs standard grid cards
  const featuredService = SERVICES_LIST[1]; // Outstation Trips
  const secondaryServices = SERVICES_LIST.filter((s) => s.id !== 'outstation');

  return (
    <section className="section" id="services">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="eyebrow">TAILORED ROAD MOBILITY</div>
          <h2 className="section-title">
            Travel Solutions Crafted for <span className="gold-gradient-text">Every Mile</span>
          </h2>
          <div className="gold-divider"></div>
          <p className="section-subtitle">
            From quick town errands around Chilakaluripeta to sacred temple yatras and long-distance intercity touring, travel with clean cars and experienced highway chauffeurs.
          </p>
        </div>

        {/* Featured Editorial Banner — Outstation Journeys */}
        <div className={styles.featuredServiceCard}>
          <div className={styles.featuredImageWrapper}>
            <Image
              src={featuredService.image}
              alt="Long distance outstation highway travel by Kiran Travels"
              width={800}
              height={500}
              className={styles.featuredImage}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className={styles.featuredBadge}>FEATURED SPECIALTY</div>
          </div>
          <div className={styles.featuredContent}>
            <span className={styles.featuredTag}>{featuredService.tag}</span>
            <h3 className={styles.featuredTitle}>{featuredService.title}</h3>
            <p className={styles.featuredDescription}>{featuredService.fullDesc}</p>

            <div className={styles.featuredPoints}>
              <div className={styles.pointItem}>
                <CheckCircle size={16} className={styles.pointIcon} />
                <span>Intercity journeys across AP, Telangana, Tamil Nadu &amp; Karnataka</span>
              </div>
              <div className={styles.pointItem}>
                <CheckCircle size={16} className={styles.pointIcon} />
                <span>One-way advertised base rate starting from ₹13/km*</span>
              </div>
              <div className={styles.pointItem}>
                <CheckCircle size={16} className={styles.pointIcon} />
                <span>Rest-stop flexibility &amp; experienced highway navigation</span>
              </div>
            </div>

            <div className={styles.featuredActions}>
              <a
                href={getWhatsAppServiceInquiry(featuredService.title)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
              >
                <MessageCircle size={18} />
                <span>Inquire Outstation Travel</span>
              </a>
              <a href="#routes" className="btn btn-secondary">
                <span>View Popular Routes</span>
              </a>
            </div>
          </div>
        </div>

        {/* Varied Grid for Remaining Services */}
        <div className={styles.servicesGrid}>
          {secondaryServices.map((service, index) => {
            const IconComponent = iconMap[service.icon] || MapPin;
            const isWide = index === 0 || index === 3; // creates editorial visual variety

            return (
              <div
                key={service.id}
                className={`${styles.serviceCard} ${isWide ? styles.wideCard : ''}`}
              >
                <div className={styles.cardHeader}>
                  <div className={styles.iconCircle}>
                    <IconComponent size={22} />
                  </div>
                  <span className={styles.serviceTag}>{service.tag}</span>
                </div>

                <div className={styles.cardBody}>
                  <h3 className={styles.cardTitle}>{service.title}</h3>
                  <p className={styles.cardDesc}>{service.shortDesc}</p>
                </div>

                <div className={styles.cardFooter}>
                  <a
                    href={getWhatsAppServiceInquiry(service.title)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.inquireLink}
                  >
                    <span>Inquire via WhatsApp</span>
                    <MessageCircle size={15} />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
