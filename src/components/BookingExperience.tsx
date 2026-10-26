import React from 'react';
import { Send, CheckCircle, Car, ArrowRight } from 'lucide-react';
import { BOOKING_STEPS } from '@/data/travelData';
import styles from './BookingExperience.module.css';

const stepIcons = [Send, CheckCircle, Car];

export default function BookingExperience() {
  return (
    <section className="section" id="how-it-works">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="eyebrow">SIMPLE &amp; TRANSPARENT BOOKING</div>
          <h2 className="section-title">
            How It Works — <span className="gold-gradient-text">3 Seamless Steps</span>
          </h2>
          <div className="gold-divider"></div>
          <p className="section-subtitle">
            No complex signups or robotic dispatch algorithms. Experience warm, human travel coordination directly with Kiran Travels.
          </p>
        </div>

        {/* Steps Container */}
        <div className={styles.stepsWrapper}>
          <div className={styles.connectorLine}></div>

          <div className={styles.stepsGrid}>
            {BOOKING_STEPS.map((step, index) => {
              const Icon = stepIcons[index];
              return (
                <div key={step.step} className={styles.stepCard}>
                  <div className={styles.stepBadgeWrapper}>
                    <div className={styles.iconCircle}>
                      <Icon size={24} />
                    </div>
                    <span className={styles.stepNumberBadge}>{step.step}</span>
                  </div>

                  <h3 className={styles.stepTitle}>{step.title}</h3>
                  <p className={styles.stepDescription}>{step.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Action Prompt */}
        <div className={styles.stepActionPrompt}>
          <span>Ready to share your travel dates?</span>
          <a href="#booking-form" className="btn btn-outline-gold">
            <span>Start Quick Inquiry</span>
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
