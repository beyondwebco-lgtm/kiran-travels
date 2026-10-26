import React from 'react';
import { Award, Smile, HeartHandshake, ShieldCheck, BadgePercent, Route as RouteIcon } from 'lucide-react';
import { TRUST_FEATURES } from '@/data/travelData';
import styles from './WhyChooseUs.module.css';

const iconMap: { [key: string]: React.ElementType } = {
  Award,
  Smile,
  HeartHandshake,
  ShieldCheck,
  BadgePercent,
  Route: RouteIcon,
};

export default function WhyChooseUs() {
  return (
    <section className="section" id="why-us">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="eyebrow">THE KIRAN TRAVELS ADVANTAGE</div>
          <h2 className="section-title">
            Built on Trust, Care &amp; <span className="gold-gradient-text">Genuine Hospitality</span>
          </h2>
          <div className="gold-divider"></div>
          <p className="section-subtitle">
            We believe a good road trip begins long before you buckle your seatbelt. Here is why travelers in Chilakaluripeta and Guntur district choose Kiran Travels.
          </p>
        </div>

        {/* 6 Trust Grid */}
        <div className={styles.trustGrid}>
          {TRUST_FEATURES.map((feature, index) => {
            const Icon = iconMap[feature.icon] || ShieldCheck;
            return (
              <div key={feature.id} className={styles.trustCard}>
                <div className={styles.cardHeader}>
                  <div className={styles.iconBox}>
                    <Icon size={24} />
                  </div>
                  <span className={styles.cardNumber}>0{index + 1}</span>
                </div>
                <h3 className={styles.cardTitle}>{feature.title}</h3>
                <p className={styles.cardDesc}>{feature.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Metric Bar */}
        <div className={styles.metricBar}>
          <div className={styles.metricItem}>
            <span className={styles.metricValue}>4<small>+</small></span>
            <span className={styles.metricLabel}>Years Serving Travelers</span>
          </div>
          <div className={styles.metricDivider}></div>
          <div className={styles.metricItem}>
            <span className={styles.metricValue}>₹13</span>
            <span className={styles.metricLabel}>Starting Advertised Rate / km</span>
          </div>
          <div className={styles.metricDivider}></div>
          <div className={styles.metricItem}>
            <span className={styles.metricValue}>100<small>%</small></span>
            <span className={styles.metricLabel}>Direct Owner Communication</span>
          </div>
          <div className={styles.metricDivider}></div>
          <div className={styles.metricItem}>
            <span className={styles.metricValue}>AP &amp; All-India</span>
            <span className={styles.metricLabel}>Local &amp; Outstation Reach</span>
          </div>
        </div>
      </div>
    </section>
  );
}
