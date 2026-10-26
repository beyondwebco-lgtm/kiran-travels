'use client';

import React from 'react';
import Image from 'next/image';
import { Mountain, Compass, Palmtree, Building2, Heart, ArrowUpRight, MessageCircle } from 'lucide-react';
import { BUSINESS_INFO } from '@/data/travelData';
import styles from './TravelInspiration.module.css';

const destinations = [
  {
    id: 'srisailam-hills',
    title: 'Scenic Mountain & Ghat Roads',
    subtitle: 'Srisailam Forest Passes & Western Ghats',
    image: '/images/dest-mountains.jpg',
    tag: 'Ghat Specialists',
    icon: Mountain,
    span: 'wide',
  },
  {
    id: 'temples',
    title: 'Sacred Temple Pilgrimages',
    subtitle: 'Srisailam, Tirupati, Kanaka Durga & Vijayawada',
    image: '/images/dest-temple.jpg',
    tag: 'Devotional Yatra',
    icon: Compass,
    span: 'tall',
  },
  {
    id: 'beaches',
    title: 'Coastal Andhra & Beach Highways',
    subtitle: 'Bapatla Suryalanka, Chirala & Bay of Bengal routes',
    image: '/images/dest-beach.jpg',
    tag: 'Weekend Gateways',
    icon: Palmtree,
    span: 'standard',
  },
  {
    id: 'cities',
    title: 'Intercity Expressway Travel',
    subtitle: 'Hyderabad, Chennai, Bangalore & Guntur-Vijayawada',
    image: '/images/dest-city.jpg',
    tag: 'Smooth Highway',
    icon: Building2,
    span: 'standard',
  },
  {
    id: 'family-road-trip',
    title: 'Joyful Family Road Trips',
    subtitle: 'Custom routes, holiday leisure & peaceful family milestones',
    image: '/images/dest-family.jpg',
    tag: 'Family Memories',
    icon: Heart,
    span: 'wide',
  },
];

export default function TravelInspiration() {
  const getWhatsAppDestinationUrl = (title: string) => {
    return BUSINESS_INFO.whatsappUrl(
      `Hello Kiran Travels, I am planning a trip for "${title}". Can you please suggest the best vehicle and give me an estimated fare from Chilakaluripeta?`
    );
  };

  return (
    <section className="section" id="destinations">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="eyebrow">DESTINATION INSPIRATION</div>
          <h2 className="section-title">
            Where Will Your Next <span className="gold-gradient-text">Journey Lead?</span>
          </h2>
          <div className="gold-divider"></div>
          <p className="section-subtitle">
            From misty temple ghats of the Nallamala hills to coastal Andhra breeze and seamless metro highways, travel wherever your heart aspires. (Custom itineraries curated on request).
          </p>
        </div>

        {/* Staggered Mosaic Grid */}
        <div className={styles.mosaicGrid}>
          {destinations.map((dest) => {
            const Icon = dest.icon;
            return (
              <div
                key={dest.id}
                className={`${styles.mosaicItem} ${styles[dest.span]}`}
              >
                <div className={styles.imageBox}>
                  <Image
                    src={dest.image}
                    alt={`${dest.title} - ${dest.subtitle}`}
                    width={800}
                    height={600}
                    className={styles.mosaicImg}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
                  />
                  <div className={styles.itemGradientOverlay}></div>
                </div>

                <div className={styles.itemContent}>
                  <div className={styles.tagRow}>
                    <span className={styles.itemTag}>
                      <Icon size={12} />
                      <span>{dest.tag}</span>
                    </span>
                  </div>

                  <h3 className={styles.itemTitle}>{dest.title}</h3>
                  <p className={styles.itemSubtitle}>{dest.subtitle}</p>

                  <a
                    href={getWhatsAppDestinationUrl(dest.title)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.planTripBtn}
                  >
                    <span>Plan this Journey</span>
                    <ArrowUpRight size={16} />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Note on customized itineraries */}
        <div className={styles.mosaicFooterNote}>
          <p>
            * Destinations shown are inspirations for road travel. Kiran Travels provides customized car hire services for these and any other accessible destination across India. Final schedules and vehicle availability are confirmed directly by the owner.
          </p>
        </div>
      </div>
    </section>
  );
}
