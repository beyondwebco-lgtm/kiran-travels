'use client';

import React from 'react';
import { MessageSquarePlus, Star, ShieldCheck, HeartHandshake, CheckCircle2 } from 'lucide-react';
import { BUSINESS_INFO } from '@/data/travelData';
import styles from './ReviewComponent.module.css';

export default function ReviewComponent() {
  const submitReviewUrl = BUSINESS_INFO.whatsappUrl(
    `Hello Kiran Travels, I recently traveled with your service and would like to share my feedback and review:

Travel Date: 
Route: 
Feedback: `
  );

  return (
    <section className="section" id="reviews">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="eyebrow">PASSENGER TESTIMONIALS</div>
          <h2 className="section-title">
            Verified Experiences from <span className="gold-gradient-text">Our Travelers</span>
          </h2>
          <div className="gold-divider"></div>
          <p className="section-subtitle">
            We value genuine relationships and authentic travel stories. We never publish fabricated reviews or artificial rating scores.
          </p>
        </div>

        {/* Reusable Review Container with Neutral Honest Reassurance */}
        <div className={styles.reviewContainer}>
          <div className={styles.reassuranceCard}>
            <div className={styles.reassuranceHeader}>
              <div className={styles.shieldIconWrapper}>
                <ShieldCheck size={28} />
              </div>
              <div>
                <h3 className={styles.cardHeading}>100% Genuine, Verified Feedback Policy</h3>
                <span className={styles.cardSub}>Kiran Travels Customer Transparency Commitment</span>
              </div>
            </div>

            <p className={styles.cardBody}>
              At Kiran Travels, we honor our travelers by displaying only verified feedback from real journeys completed across Chilakaluripeta, Guntur, Srisailam, Hyderabad, and other outstation destinations. Customer testimonials are collected post-trip and added with explicit passenger consent.
            </p>

            <div className={styles.commitmentGrid}>
              <div className={styles.commitItem}>
                <CheckCircle2 size={16} className={styles.commitIcon} />
                <span>Zero invented customer names, fake photos, or inflated ratings</span>
              </div>
              <div className={styles.commitItem}>
                <CheckCircle2 size={16} className={styles.commitIcon} />
                <span>Honest reflection of our 4 years of regional travel experience</span>
              </div>
              <div className={styles.commitItem}>
                <CheckCircle2 size={16} className={styles.commitIcon} />
                <span>Direct accountability and feedback channels to owner Kiran</span>
              </div>
            </div>
          </div>

          {/* Invitation Callout to Recent Passengers */}
          <div className={styles.inviteCard}>
            <div className={styles.inviteStarRow}>
              <Star size={20} className={styles.goldStar} />
              <Star size={20} className={styles.goldStar} />
              <Star size={20} className={styles.goldStar} />
              <Star size={20} className={styles.goldStar} />
              <Star size={20} className={styles.goldStar} />
            </div>

            <h3 className={styles.inviteTitle}>Have You Traveled With Us Recently?</h3>
            <p className={styles.inviteText}>
              Your journey experience helps fellow travelers in Andhra Pradesh choose the right ride. Share your thoughts or suggestions directly on WhatsApp.
            </p>

            <a
              href={submitReviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-gold"
              style={{ width: '100%', justifyContent: 'center' }}
            >
              <MessageSquarePlus size={18} />
              <span>Share Your Travel Experience</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
