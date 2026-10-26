import React from 'react';
import Image from 'next/image';
import { ShieldCheck, MapPin, Phone, MessageCircle, Heart, Calendar } from 'lucide-react';
import { BUSINESS_INFO } from '@/data/travelData';
import styles from './AboutSection.module.css';

export default function AboutSection() {
  return (
    <section className="section" id="about">
      <div className="container">
        <div className={styles.aboutGrid}>
          {/* Left Column: Visual Storytelling */}
          <div className={styles.visualCol}>
            <div className={styles.imageStack}>
              <div className={styles.primaryImgWrapper}>
                <Image
                  src="/images/fleet-mpv.jpg"
                  alt="Maruti Suzuki Ertiga and Swift Dzire outstation travel by Kiran Travels"
                  width={600}
                  height={450}
                  className={styles.aboutImage}
                  sizes="(max-width: 768px) 100vw, 45vw"
                />
              </div>

              {/* Heritage Poster Floating Card */}
              <div className={styles.posterPreviewCard}>
                <div className={styles.posterBadge}>ORIGINAL PROMOTIONAL IDENTITY</div>
                <div className={styles.posterThumb}>
                  <Image
                    src="/images/kiran-poster.jpg"
                    alt="Kiran Travels official brand poster reference"
                    width={220}
                    height={320}
                    className={styles.posterImage}
                  />
                </div>
                <div className={styles.posterCaption}>
                  <span>Chilakaluripeta AP</span>
                  <strong>From ₹13/km</strong>
                </div>
              </div>

              {/* Experience badge */}
              <div className={styles.experienceTag}>
                <span className={styles.expNumber}>4</span>
                <span className={styles.expText}>Years of Dependable Road Travel</span>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative */}
          <div className={styles.narrativeCol}>
            <div className="eyebrow">ABOUT KIRAN TRAVELS</div>
            <h2 className={styles.aboutHeading}>
              Your Local Travel Partner for Journeys <span className="gold-gradient-text">Near and Far.</span>
            </h2>
            <div className="gold-divider" style={{ margin: '16px 0' }}></div>

            <p className={styles.leadParagraph}>
              Kiran Travels, based in Chilakaluripeta, helps customers plan convenient journeys for local travel, outstation trips, pilgrimages, and long-distance destinations across India.
            </p>

            <p className={styles.bodyParagraph}>
              With four years of experience on regional highways and ghat sections, our focus is on making every booking straightforward, every fare clear, and every journey comfortable. We recognize that whether you are traveling for a sacred temple darshan, an essential business visit, or a joyful family road trip, punctuality, clean vehicles, and respectful drivers make all the difference.
            </p>

            {/* Core Values Pill Grid */}
            <div className={styles.valuesGrid}>
              <div className={styles.valueItem}>
                <MapPin className={styles.valueIcon} size={18} />
                <div>
                  <strong>Rooted in Chilakaluripeta</strong>
                  <span>Serving local families, wedding guests &amp; travelers</span>
                </div>
              </div>

              <div className={styles.valueItem}>
                <ShieldCheck className={styles.valueIcon} size={18} />
                <div>
                  <strong>Transparent Communication</strong>
                  <span>No sudden surprises. Clear fare discussion before departure</span>
                </div>
              </div>

              <div className={styles.valueItem}>
                <Heart className={styles.valueIcon} size={18} />
                <div>
                  <strong>Passenger Comfort First</strong>
                  <span>Hygienic interiors, working AC, and attentive road driving</span>
                </div>
              </div>

              <div className={styles.valueItem}>
                <Calendar className={styles.valueIcon} size={18} />
                <div>
                  <strong>Flexible Travel Coordination</strong>
                  <span>Direct phone &amp; WhatsApp communication with the owner</span>
                </div>
              </div>
            </div>

            {/* Contact Callout */}
            <div className={styles.directContactBox}>
              <div className={styles.contactDetails}>
                <span className={styles.directLabel}>Direct Owner Booking Line:</span>
                <a href={BUSINESS_INFO.callUrl} className={styles.phoneLink}>
                  +91 9398961766
                </a>
              </div>
              <a
                href={BUSINESS_INFO.whatsappUrl('Hello Kiran Travels, I would like to speak regarding an upcoming road trip.')}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
              >
                <MessageCircle size={18} />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
