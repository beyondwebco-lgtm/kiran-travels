'use client';

import React, { useState } from 'react';
import { MessageCircle, Calendar, MapPin, Users, Car, User, Phone, CheckCircle, AlertCircle } from 'lucide-react';
import { BUSINESS_INFO, POPULAR_ROUTES } from '@/data/travelData';
import styles from './QuickBookingForm.module.css';

interface FormData {
  pickup: string;
  drop: string;
  date: string;
  journeyType: string;
  passengers: string;
  vehicle: string;
  name: string;
  phone: string;
}

export default function QuickBookingForm() {
  const [formData, setFormData] = useState<FormData>({
    pickup: 'Chilakaluripeta',
    drop: '',
    date: '',
    journeyType: 'Round trip',
    passengers: '1-4 Passengers',
    vehicle: 'Maruti Suzuki Swift Dzire (4+1 AC)',
    name: '',
    phone: '',
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [submitted, setSubmitted] = useState(false);

  // Set minimum date to today
  const todayDateString = new Date().toISOString().split('T')[0];

  const handleQuickRouteSelect = (from: string, to: string) => {
    setFormData((prev) => ({
      ...prev,
      pickup: from,
      drop: to,
    }));
    // Clear validation error on drop if previously flagged
    if (errors.drop) {
      setErrors((prev) => {
        const updated = { ...prev };
        delete updated.drop;
        return updated;
      });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const updated = { ...prev };
        delete updated[name];
        return updated;
      });
    }
  };

  const validate = (): boolean => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.pickup.trim()) {
      newErrors.pickup = 'Please provide a pickup location';
    }
    if (!formData.drop.trim()) {
      newErrors.drop = 'Please provide a destination';
    }
    if (!formData.date) {
      newErrors.date = 'Please pick a travel date';
    }
    if (!formData.name.trim()) {
      newErrors.name = 'Please provide your name';
    }
    const cleanPhone = formData.phone.replace(/\D/g, '');
    if (!cleanPhone || cleanPhone.length < 10) {
      newErrors.phone = 'Please enter a valid 10-digit phone number';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    // Build human-friendly formatted WhatsApp message
    const message = `Namaste Kiran Travels,
I would like to inquire about cab availability and get an exact fare quote:

📍 Pickup: ${formData.pickup}
🏁 Destination: ${formData.drop}
📅 Travel Date: ${formData.date}
🔄 Journey Type: ${formData.journeyType}
👥 Passengers: ${formData.passengers}
🚗 Preferred Car: ${formData.vehicle}

👤 Customer Name: ${formData.name}
📱 Contact: ${formData.phone}

Please confirm car availability, route fare, and applicable toll/allowance details. Thank you!`;

    setSubmitted(true);

    // Open WhatsApp
    const waUrl = BUSINESS_INFO.whatsappUrl(message);
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className={styles.bookingSection} id="booking-form">
      <div className="container">
        <div className={styles.bookingContainer}>
          {/* Top Panel Header */}
          <div className={styles.panelHeader}>
            <div className={styles.headerLeft}>
              <span className={styles.badge}>QUICK RIDE ESTIMATE</span>
              <h2 className={styles.heading}>Plan Your Journey &amp; Connect on WhatsApp</h2>
              <p className={styles.subheading}>
                Share your trip details below. We instantly prepare your inquiry so you can confirm availability and final fare directly with Kiran Travels.
              </p>
            </div>
            <div className={styles.headerRight}>
              <div className={styles.rateHighlight}>
                <span className={styles.rateFrom}>One-Way Starting Rate</span>
                <span className={styles.rateValue}>₹13<small>/km*</small></span>
                <span className={styles.rateNote}>Subject to route confirmation</span>
              </div>
            </div>
          </div>

          {/* Quick Route Shortcuts */}
          <div className={styles.shortcutsRow}>
            <span className={styles.shortcutsLabel}>Popular routes:</span>
            <div className={styles.pillsList}>
              {POPULAR_ROUTES.map((route) => (
                <button
                  key={route.id}
                  type="button"
                  className={styles.shortcutPill}
                  onClick={() => handleQuickRouteSelect(route.from, route.to)}
                  title={`Select ${route.from} to ${route.to} (${route.price})`}
                >
                  <span>{route.from} ➔ {route.to}</span>
                  <strong className={styles.pillPrice}>{route.price}*</strong>
                </button>
              ))}
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className={styles.bookingForm} noValidate>
            <div className={styles.formGrid}>
              {/* Pickup Location */}
              <div className={styles.formGroup}>
                <label htmlFor="pickup" className={styles.formLabel}>
                  <MapPin size={15} className={styles.fieldIcon} />
                  <span>Pickup Location *</span>
                </label>
                <input
                  id="pickup"
                  type="text"
                  name="pickup"
                  value={formData.pickup}
                  onChange={handleChange}
                  placeholder="e.g. Chilakaluripeta Bus Stand / Home"
                  className={`${styles.formInput} ${errors.pickup ? styles.inputError : ''}`}
                  required
                />
                {errors.pickup && (
                  <span className={styles.errorMsg}>
                    <AlertCircle size={12} /> {errors.pickup}
                  </span>
                )}
              </div>

              {/* Destination Drop Location */}
              <div className={styles.formGroup}>
                <label htmlFor="drop" className={styles.formLabel}>
                  <MapPin size={15} className={styles.fieldIcon} />
                  <span>Destination / Drop *</span>
                </label>
                <input
                  id="drop"
                  type="text"
                  name="drop"
                  value={formData.drop}
                  onChange={handleChange}
                  placeholder="e.g. Srisailam, Hyderabad, Chennai"
                  className={`${styles.formInput} ${errors.drop ? styles.inputError : ''}`}
                  required
                />
                {errors.drop && (
                  <span className={styles.errorMsg}>
                    <AlertCircle size={12} /> {errors.drop}
                  </span>
                )}
              </div>

              {/* Journey Date */}
              <div className={styles.formGroup}>
                <label htmlFor="date" className={styles.formLabel}>
                  <Calendar size={15} className={styles.fieldIcon} />
                  <span>Journey Date *</span>
                </label>
                <input
                  id="date"
                  type="date"
                  name="date"
                  min={todayDateString}
                  value={formData.date}
                  onChange={handleChange}
                  className={`${styles.formInput} ${errors.date ? styles.inputError : ''}`}
                  required
                />
                {errors.date && (
                  <span className={styles.errorMsg}>
                    <AlertCircle size={12} /> {errors.date}
                  </span>
                )}
              </div>

              {/* Journey Type */}
              <div className={styles.formGroup}>
                <label htmlFor="journeyType" className={styles.formLabel}>
                  <span>Journey Type</span>
                </label>
                <select
                  id="journeyType"
                  name="journeyType"
                  value={formData.journeyType}
                  onChange={handleChange}
                  className={styles.formSelect}
                >
                  <option value="One-way">One-Way Drop</option>
                  <option value="Round trip">Round Trip (Same or Multi-Day)</option>
                  <option value="Local rental">Local Rental (Hourly/Day)</option>
                </select>
              </div>

              {/* Number of Passengers */}
              <div className={styles.formGroup}>
                <label htmlFor="passengers" className={styles.formLabel}>
                  <Users size={15} className={styles.fieldIcon} />
                  <span>Passengers</span>
                </label>
                <select
                  id="passengers"
                  name="passengers"
                  value={formData.passengers}
                  onChange={handleChange}
                  className={styles.formSelect}
                >
                  <option value="1-4 Passengers">1 - 4 Passengers (Sedan)</option>
                  <option value="5-7 Passengers">5 - 7 Passengers (MPV / Ertiga)</option>
                  <option value="8+ Group">8+ Group (Requires Multiple / Large)</option>
                </select>
              </div>

              {/* Preferred Vehicle */}
              <div className={styles.formGroup}>
                <label htmlFor="vehicle" className={styles.formLabel}>
                  <Car size={15} className={styles.fieldIcon} />
                  <span>Preferred Vehicle</span>
                </label>
                <select
                  id="vehicle"
                  name="vehicle"
                  value={formData.vehicle}
                  onChange={handleChange}
                  className={styles.formSelect}
                >
                  <option value="Maruti Suzuki Swift Dzire (4+1 AC)">Maruti Suzuki Swift Dzire (4+1 AC Sedan)</option>
                  <option value="Maruti Suzuki Ertiga (6+1 AC)">Maruti Suzuki Ertiga (6+1 AC Family MPV)</option>
                  <option value="Either Swift Dzire or Ertiga">Either Swift Dzire or Ertiga (Best Match)</option>
                </select>
              </div>

              {/* Customer Name */}
              <div className={styles.formGroup}>
                <label htmlFor="name" className={styles.formLabel}>
                  <User size={15} className={styles.fieldIcon} />
                  <span>Your Name *</span>
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. Ramesh Reddy"
                  className={`${styles.formInput} ${errors.name ? styles.inputError : ''}`}
                  required
                />
                {errors.name && (
                  <span className={styles.errorMsg}>
                    <AlertCircle size={12} /> {errors.name}
                  </span>
                )}
              </div>

              {/* Phone Number */}
              <div className={styles.formGroup}>
                <label htmlFor="phone" className={styles.formLabel}>
                  <Phone size={15} className={styles.fieldIcon} />
                  <span>WhatsApp / Phone *</span>
                </label>
                <input
                  id="phone"
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="e.g. 98765 43210"
                  className={`${styles.formInput} ${errors.phone ? styles.inputError : ''}`}
                  required
                />
                {errors.phone && (
                  <span className={styles.errorMsg}>
                    <AlertCircle size={12} /> {errors.phone}
                  </span>
                )}
              </div>
            </div>

            {/* Bottom Actions and Transparency Note */}
            <div className={styles.formBottomBar}>
              <div className={styles.transparencyDisclaimer}>
                <span>🔒 <strong>Zero Spam Guarantee:</strong> Your trip details will directly open on WhatsApp with Kiran Travels (+91 9398961766). Rates remain indicative until mutually confirmed.</span>
              </div>

              <button type="submit" className={`btn btn-whatsapp ${styles.submitButton}`}>
                <MessageCircle size={20} />
                <span>Continue on WhatsApp</span>
              </button>
            </div>

            {submitted && (
              <div className={styles.successBanner}>
                <CheckCircle size={18} />
                <span>WhatsApp conversation initiated! If it did not open automatically, <a href={BUSINESS_INFO.whatsappUrl(`Inquiry from ${formData.name} for ${formData.pickup} to ${formData.drop}`)} target="_blank" rel="noopener noreferrer">click here to chat</a>.</span>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
