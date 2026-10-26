# Kiran Travels — Premium Car Rental & Outstation Cab Service

> Official website and booking platform for **Kiran Travels**, based in Chilakaluripeta, Palnadu / Guntur District, Andhra Pradesh, India. Built with Next.js (App Router), Vanilla CSS, responsive mobile-first architecture, and Google Technical SEO standards.

![Kiran Travels Logo](public/images/logo.png)

---

## 🚕 Business Information

- **Business Name:** Kiran Travels
- **Location:** Chilakaluripeta, Palnadu / Guntur District, Andhra Pradesh, India
- **Primary Contact / Phone:** [+91 9398961766](tel:+919398961766)
- **WhatsApp Direct Booking:** [https://wa.me/919398961766](https://wa.me/919398961766)
- **Experience:** 4+ Years of Dependable Regional & All-India Highway Travel
- **Brand Tagline:** *Your Journey • Our Priority*
- **Secondary Tagline:** *Travel with Comfort | Safe Ride, Happy Journey*
- **Brand Colors:** Midnight Navy (`#050811`, `#0A1020`), Golden Yellow (`#FACC15`, `#F7B928`), White & Slate

---

## 🚗 Fleet Details (Exclusively Featured)

1. **Maruti Suzuki Swift Dzire**
   - **Type:** Premium Chilled AC Sedan
   - **Capacity:** 4 Passengers + Chauffeur (4+1)
   - **Best For:** One-way intercity drops, executive appointments, local airport transfers, couples & small family trips.
2. **Maruti Suzuki Ertiga**
   - **Type:** Spacious Chilled AC Family MPV
   - **Capacity:** 6–7 Passengers + Chauffeur (6+1)
   - **Best For:** Temple pilgrimages (Srisailam, Tirupati), family vacations, outstation group road trips with luggage.

---

## 📋 Verified Fares & Booking Policies

- **One-Way Journeys:** Advertised starting base rate from **₹13 per kilometre** (applicable to one-way trips, subject to route confirmation).
- **Round-Trip Journeys:** Driver allowance and stay-related permit/charges are included in the quoted fare. Toll charges are separate and payable additionally.
- **Indicative Route Fares:**
  - **Chilakaluripeta ➔ Srisailam:** ₹5,000*
  - **Chilakaluripeta ➔ Hyderabad:** ₹8,000*
  - **Guntur ➔ Chennai:** ₹8,000*
- **Pricing Transparency Note:**
  > *"Have a question about pricing, tolls, driver allowance, permits, trip duration or cancellation? Contact Kiran Travels directly on WhatsApp for clarification and a confirmed quotation."*
- **Cancellation Policy:**
  > *"For cancellation, rescheduling and refund-related queries, please contact Kiran Travels directly on WhatsApp. Applicable terms will be communicated and confirmed before booking."*
- **Operating Hours:** In accordance with business rules, operating hours are not published publicly.

---

## 🔍 Technical SEO & Performance

- **Framework:** Next.js 15 (App Router, Static Generation)
- **XML Sitemap:** Generated dynamically via Next.js metadata API at `/sitemap.xml` with canonical absolute URLs.
- **Robots.txt:** Optimized crawler instructions at `/robots.txt` ensuring full accessibility for Googlebot without blocking essential scripts or styles.
- **Canonical URLs:** Strict HTTPS canonical URL declarations on every page to prevent duplicate content indexing.
- **Structured Data:** Valid JSON-LD `TaxiService` and `LocalBusiness` schema with verified business name, phone number, location, and official logo URL.
- **Mobile First:** Audited and tested across 9 standard viewports (320px, 360px, 375px, 390px, 430px, 768px, 1024px, 1280px, 1440px) with zero horizontal overflow.
- **Core Web Vitals:** Pre-rendered static pages with minimal JS bundle (~129 kB First Load JS) and optimized image delivery with `next/image`.

---

## 🛠️ Project Structure

```
kiran-travels/
├── public/
│   └── images/
│       ├── logo.png             # Official Kiran Travels brand logo
│       ├── fleet-sedan.jpg      # Maruti Suzuki Swift Dzire
│       ├── fleet-mpv.jpg        # Maruti Suzuki Ertiga
│       ├── hero-car.jpg         # Hero showcase
│       └── ...                  # Destination photography
├── src/
│   ├── app/
│   │   ├── layout.tsx           # Global HTML, metadata, JSON-LD Schema
│   │   ├── page.tsx             # Homepage combining all sections
│   │   ├── not-found.tsx        # Branded 404 error page
│   │   ├── robots.ts            # Native robots.txt generator
│   │   └── sitemap.ts           # Native sitemap.xml generator
│   ├── components/
│   │   ├── Navbar.tsx           # Sticky glassmorphism header & mobile drawer
│   │   ├── Hero.tsx             # Value proposition & quick action CTA
│   │   ├── QuickBookingForm.tsx # WhatsApp inquiry generator
│   │   ├── ServicesSection.tsx  # Outstation, pilgrimage, airport rides
│   │   ├── RoutesSection.tsx    # Popular routes and transparent rates
│   │   ├── FleetSection.tsx     # Dzire & Ertiga 2-car showcase
│   │   ├── WhyChooseUs.tsx      # Trust factors & road experience metrics
│   │   ├── AboutSection.tsx     # 4 years experience story & direct booking
│   │   ├── TravelInspiration.tsx# Destination gallery (Ghats, Temples, etc.)
│   │   ├── ReviewComponent.tsx  # Verified feedback policy
│   │   ├── TermsFaqSection.tsx  # Fares, terms, FAQs, policy modal
│   │   ├── ContactCtaSection.tsx# Direct call & WhatsApp actions
│   │   ├── Footer.tsx           # Brand info, navigation, privacy policy
│   │   └── StickyMobileBar.tsx  # Mobile sticky call/WhatsApp bar
│   ├── data/
│   │   └── travelData.ts        # Single source of truth for business data
│   └── styles/
│       └── globals.css          # Design system tokens and responsive utilities
├── package.json
├── tsconfig.json
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18.17+ or 20+
- npm or yarn

### Installation
```bash
# Clone the repository
git clone https://github.com/beyondwebco-lgtm/kiran-travels.git

# Enter project directory
cd kiran-travels

# Install dependencies
npm install
```

### Development
```bash
npm run dev
# Open http://localhost:3000 in your browser
```

### Production Build
```bash
npm run build
npm run start
```

---

## 📄 License & Ownership
Copyright © 2026 **Kiran Travels**. All rights reserved.
Developed for Kiran Travels, Chilakaluripeta, Andhra Pradesh, India.
