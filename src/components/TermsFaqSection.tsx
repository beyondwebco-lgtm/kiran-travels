'use client';

import React, { useState } from 'react';
import { ChevronDown, ChevronUp, FileText, X, AlertTriangle, ShieldCheck, CheckCircle } from 'lucide-react';
import { FAQ_LIST, BUSINESS_INFO } from '@/data/travelData';
import styles from './TermsFaqSection.module.css';

export default function TermsFaqSection() {
  const [openFaqId, setOpenFaqId] = useState<string | null>('faq-1');
  const [isTermsModalOpen, setIsTermsModalOpen] = useState(false);

  const toggleFaq = (id: string) => {
    setOpenFaqId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="section" id="faq">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="eyebrow">HELP &amp; TRAVEL POLICIES</div>
          <h2 className="section-title">
            Frequently Asked <span className="gold-gradient-text">Questions</span>
          </h2>
          <div className="gold-divider"></div>
          <p className="section-subtitle">
            Everything you need to know about booking, fare calculation, minimum kilometres, allowances, and cancellation. Clear and upfront.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className={styles.faqList}>
          {FAQ_LIST.map((faq) => {
            const isOpen = openFaqId === faq.id;
            return (
              <div
                key={faq.id}
                className={`${styles.faqItem} ${isOpen ? styles.faqItemOpen : ''}`}
              >
                <button
                  type="button"
                  className={styles.faqQuestionBtn}
                  onClick={() => toggleFaq(faq.id)}
                  aria-expanded={isOpen}
                >
                  <span className={styles.questionText}>{faq.question}</span>
                  <div className={styles.iconCircle}>
                    {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                  </div>
                </button>

                {isOpen && (
                  <div className={styles.faqAnswerWrapper}>
                    <p className={styles.faqAnswer}>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* View Full Terms & Conditions Trigger */}
        <div className={styles.termsBanner}>
          <div className={styles.termsBannerLeft}>
            <FileText size={28} className={styles.termsFileIcon} />
            <div>
              <h3 className={styles.termsBannerTitle}>Official Booking Policies &amp; Terms</h3>
              <p className={styles.termsBannerSub}>
                Review complete fare calculation clauses, toll/permit provisions, cancellation guidelines, and passenger conduct policies.
              </p>
            </div>
          </div>
          <button
            type="button"
            className="btn btn-outline-gold"
            onClick={() => setIsTermsModalOpen(true)}
          >
            <span>Read Booking Terms &amp; Policies</span>
          </button>
        </div>
      </div>

      {/* Terms & Conditions Modal */}
      {isTermsModalOpen && (
        <div
          className={styles.modalOverlay}
          onClick={() => setIsTermsModalOpen(false)}
        >
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="terms-modal-title"
          >
            <div className={styles.modalHeader}>
              <div>
                <h3 id="terms-modal-title" className={styles.modalTitle}>
                  Kiran Travels — Booking Terms &amp; Conditions
                </h3>
                <span className={styles.modalSubtitle}>
                  Chilakaluripeta, Andhra Pradesh • Effective Reference
                </span>
              </div>
              <button
                type="button"
                className={styles.modalCloseBtn}
                onClick={() => setIsTermsModalOpen(false)}
                aria-label="Close Terms Modal"
              >
                <X size={22} />
              </button>
            </div>

            <div className={styles.modalBody}>
              {/* Owner Confirmation Notice Banner */}
              <div className={styles.auditNotice}>
                <AlertTriangle size={20} className={styles.alertIcon} />
                <div>
                  <strong>Customer Transparency Flag:</strong>
                  <p>
                    Specific numerical policies (such as exact percentage of advance deposit, minimum daily kilometre threshold, or cancellation fees) are subject to prior confirmation with Kiran Travels owner before final dispatch. Unverified clauses below are highlighted with <em>[Requires Owner Confirmation]</em>.
                  </p>
                </div>
              </div>

              {/* Policy Item 1 */}
              <div className={styles.policySection}>
                <h4>1. Booking Request &amp; Trip Confirmation</h4>
                <p>
                  1.1 Submitting an inquiry through this website or messaging on WhatsApp constitutes an expression of interest and does not represent a confirmed reservation.
                </p>
                <p>
                  1.2 A booking is deemed confirmed only after Kiran Travels explicitly confirms vehicle availability, driver assignment, agreed departure schedule, and applicable advance payment receipt.
                </p>
              </div>

              {/* Policy Item 2 */}
              <div className={styles.policySection}>
                <h4>2. Pricing &amp; Fare Calculations</h4>
                <p>
                  2.1 The advertised rate of ₹13 per kilometre applies to one-way trips, including eligible destinations across India, subject to route confirmation with Kiran Travels.
                </p>
                <p>
                  2.2 Fixed route estimates (e.g., Chilakaluripeta to Srisailam: ₹5,000; Chilakaluripeta to Hyderabad: ₹8,000; Guntur to Chennai: ₹8,000) are indicative starting figures subject to confirmation, vehicle choice (Swift Dzire vs. Ertiga), and travel dates.
                </p>
                <p>
                  2.3 Customers can contact Kiran Travels on WhatsApp to clarify route details, exact fare calculations, or any specific trip inquiries.
                </p>
              </div>

              {/* Policy Item 3 */}
              <div className={styles.policySection}>
                <h4>3. Tolls, Parking, Permits &amp; Driver Allowances</h4>
                <p>
                  3.1 For specified round-trip arrangements, driver allowance and applicable stay-related permits or charges described by the owner are included in the quoted fare.
                </p>
                <p>
                  3.2 Highway FASTag tolls and local parking fees are separate and payable additionally at actuals.
                </p>
                <p>
                  3.3 Inclusions are confirmed for each trip before departure via WhatsApp quotation.
                </p>
              </div>

              {/* Policy Item 4 */}
              <div className={styles.policySection}>
                <h4>4. Waiting Time, Stops &amp; Route Alterations</h4>
                <p>
                  4.1 Reasonable meal, tea, and short temple breaks are included in round-trip and tour bookings.
                </p>
                <p>
                  4.2 Extended waiting beyond scheduled departures or deviations exceeding the agreed destination are calculated based on additional distance and waiting arrangements mutually agreed with Kiran Travels.
                </p>
              </div>

              {/* Policy Item 5 */}
              <div className={styles.policySection}>
                <h4>5. Rescheduling, Cancellations &amp; Refunds</h4>
                <p>
                  5.1 For cancellation, rescheduling and refund-related queries, please contact Kiran Travels directly on WhatsApp. Applicable terms will be communicated and confirmed before booking.
                </p>
              </div>

              {/* Policy Item 6 */}
              <div className={styles.policySection}>
                <h4>6. Unforeseen Delays, Road Conditions &amp; Vehicle Care</h4>
                <p>
                  6.1 Kiran Travels is not liable for travel delays caused by unavoidable circumstances such as traffic gridlocks, highway construction, inclement weather, landslides, or state road closures.
                </p>
                <p>
                  6.2 In the rare event of mechanical failure during transit, Kiran Travels will endeavor to arrange alternate mobility or assist passengers safely.
                </p>
              </div>

              {/* Policy Item 7 */}
              <div className={styles.policySection}>
                <h4>7. Passenger Conduct &amp; Luggage Guidelines</h4>
                <p>
                  7.1 Passengers are requested to respect vehicle cleanliness. Smoking, alcohol consumption, and carriage of illegal substances or hazardous contraband in the vehicle is strictly prohibited.
                </p>
                <p>
                  7.2 Luggage weight and volume must adhere to vehicle boot limits to prevent overloading and ensure passenger safety.
                </p>
              </div>

              {/* Policy Item 8 */}
              <div className={styles.policySection}>
                <h4>8. Privacy Policy &amp; Customer Information</h4>
                <p>
                  8.1 Customer names, phone numbers, and travel details are used strictly to coordinate your travel booking and will never be sold, rented, or distributed to third-party marketing companies.
                </p>
              </div>
            </div>

            <div className={styles.modalFooter}>
              <span className={styles.footerNote}>
                Direct inquiries: +91 9398961766 | Chilakaluripeta, AP
              </span>
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => setIsTermsModalOpen(false)}
              >
                <span>I Understand &amp; Close</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
