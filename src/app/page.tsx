import React from 'react';
import Hero from '@/components/Hero';
import QuickBookingForm from '@/components/QuickBookingForm';
import ServicesSection from '@/components/ServicesSection';
import RoutesSection from '@/components/RoutesSection';
import FleetSection from '@/components/FleetSection';
import WhyChooseUs from '@/components/WhyChooseUs';
import BookingExperience from '@/components/BookingExperience';
import AboutSection from '@/components/AboutSection';
import TravelInspiration from '@/components/TravelInspiration';
import ReviewComponent from '@/components/ReviewComponent';
import TermsFaqSection from '@/components/TermsFaqSection';
import ContactCtaSection from '@/components/ContactCtaSection';

export default function HomePage() {
  return (
    <>
      {/* SECTION B: HERO EXPERIENCE */}
      <Hero />

      {/* SECTION C: QUICK BOOKING FORM */}
      <QuickBookingForm />

      {/* SECTION D: OUR SERVICES */}
      <ServicesSection />

      {/* SECTION E: POPULAR ROUTES & FARES */}
      <RoutesSection />

      {/* SECTION F: OUR FLEET */}
      <FleetSection />

      {/* SECTION G: WHY TRAVEL WITH KIRAN TRAVELS */}
      <WhyChooseUs />

      {/* SECTION H: THE BOOKING EXPERIENCE (01, 02, 03) */}
      <BookingExperience />

      {/* SECTION I: ABOUT KIRAN TRAVELS */}
      <AboutSection />

      {/* SECTION J: TRAVEL INSPIRATION (PHOTOGRAPHIC MOSAIC) */}
      <TravelInspiration />

      {/* SECTION K: CUSTOMER REVIEWS (VERIFIED REVIEWS POLICY) */}
      <ReviewComponent />

      {/* SECTION L: TERMS, BOOKING POLICIES AND FAQ */}
      <TermsFaqSection />

      {/* SECTION M: CONTACT AND FINAL CTA */}
      <ContactCtaSection />
    </>
  );
}
