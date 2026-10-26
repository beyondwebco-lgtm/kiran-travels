export interface RouteFare {
  id: string;
  from: string;
  to: string;
  price: string;
  priceNumeric: number;
  distanceApprox: string;
  popularFor: string;
  highlights: string[];
}

export interface VehicleCategory {
  id: string;
  name: string;
  badge: string;
  tagline: string;
  image: string;
  seats: string;
  luggage: string;
  acType: string;
  bestFor: string;
  ratePerKmStarting: string;
  statusNote: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  icon: string;
  image: string;
  tag: string;
}

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://kirantravels.com';

export const BUSINESS_INFO = {
  name: 'Kiran Travels',
  legalName: 'Kiran Travels Car Rental Service',
  ownerContact: '+91 9398961766',
  rawPhone: '919398961766',
  displayPhone: '+91 9398961766',
  location: 'Chilakaluripeta, Andhra Pradesh, India',
  region: 'Andhra Pradesh & All India Outstation',
  experience: '4 Years',
  primaryTagline: 'Your Journey • Our Priority',
  secondaryTagline: 'Travel with Comfort',
  brandMessage: 'Safe Ride, Happy Journey',
  oneWayRateDisplay: '₹13/km',
  oneWayRateNote: 'Advertised starting rate for one-way car travel, subject to route confirmation.',
  
  // Standardized WhatsApp URL generator
  whatsappUrl: (message: string) =>
    `https://wa.me/919398961766?text=${encodeURIComponent(message)}`,
  callUrl: 'tel:+919398961766',

  // Prefilled WhatsApp Enquiry Templates
  templates: {
    general: 'Hello Kiran Travels, I would like to enquire about your car rental services. Please help me with route options, availability, fares and booking terms.',
    oneWay: 'Hello Kiran Travels, I am interested in a one-way trip. Please confirm the fare at ₹13/km for my route, applicable toll charges and any other conditions.',
    roundTrip: 'Hello Kiran Travels, I would like a round-trip quotation. Please confirm the total fare and clarify the inclusions, toll charges, driver allowance and applicable permits.',
    cancellation: 'Hello Kiran Travels, I have a query regarding cancellation, rescheduling or refunds for a booking.',
    vehicleDzire: 'Hello Kiran Travels, I would like to inquire about booking the Maruti Suzuki Swift Dzire (4+1 AC). Please confirm availability and rates.',
    vehicleErtiga: 'Hello Kiran Travels, I would like to inquire about booking the Maruti Suzuki Ertiga (6+1 AC). Please confirm availability and rates.',
    customRoute: 'Hello Kiran Travels, I have a custom destination in mind. Please share a personalized fare estimate starting from your ₹13/km one-way advertised rate.',
  },

  // Mandatory Customer Note
  pricingClarificationNote:
    'Have a question about pricing, tolls, driver allowance, permits, trip duration or cancellation? Contact Kiran Travels directly on WhatsApp for clarification and a confirmed quotation.',

  cancellationPolicyNotice:
    'For cancellation, rescheduling or refund-related questions, please contact Kiran Travels on WhatsApp. Applicable terms will be clarified before booking.',

  generalQuestionsNotice:
    'For any questions about fares, route availability, vehicle options, tolls, driver allowance, permits or cancellation, message Kiran Travels directly on WhatsApp.',
};

// Helper for exact client-specified route prefilled message
export const getRouteWhatsAppUrl = (from: string, to: string, price: string) => {
  const message = `Hello Kiran Travels, I want to enquire about a trip from ${from} to ${to}. The website shows an indicative fare of ${price}. Please confirm availability, the final fare and applicable charges.`;
  return BUSINESS_INFO.whatsappUrl(message);
};

export const POPULAR_ROUTES: RouteFare[] = [
  {
    id: 'guntur-srisailam',
    from: 'Guntur',
    to: 'Srisailam',
    price: '₹7,000',
    priceNumeric: 7000,
    distanceApprox: '~220 km (Scenic Ghat Road)',
    popularFor: 'Sri Mallikarjuna Swamy Temple Pilgrimage',
    highlights: ['Sacred Jyotirlinga Darshan', 'Ghat Highway Chauffeur', 'Temple Darshan Wait Time'],
  },
  {
    id: 'guntur-hyderabad',
    from: 'Guntur',
    to: 'Hyderabad',
    price: '₹7,999',
    priceNumeric: 7999,
    distanceApprox: '~270 km (NH 65 Express Corridor)',
    popularFor: 'Intercity Commute, Airport Drops & Metro Transit',
    highlights: ['Fast Highway Transit', 'RGIA Airport Drop Available', 'Swift Dzire & Ertiga Available'],
  },
  {
    id: 'chilakaluripeta-vijayawada',
    from: 'Chilakaluripeta',
    to: 'Vijayawada',
    price: '₹2,999',
    priceNumeric: 2999,
    distanceApprox: '~85 km (NH 16 Highway Corridor)',
    popularFor: 'Gannavaram Airport, Kanaka Durga Temple & City Commute',
    highlights: ['Direct 4-Lane NH 16 Drive', 'Airport & Railway Station Drop', 'Doorstep Pickup'],
  },
  {
    id: 'chilakaluripeta-guntur',
    from: 'Chilakaluripeta',
    to: 'Guntur',
    price: '₹1,799',
    priceNumeric: 1799,
    distanceApprox: '~45 km (Smooth 4-Lane Highway)',
    popularFor: 'Hospital & Medical Visits, Business & District Commute',
    highlights: ['Quick 45-Minute Trip', 'Door-to-Door Service', 'Clean AC Car'],
  },
];

export const SERVICE_AREAS = [
  { name: 'Chilakaluripeta', slug: '/chilakaluripeta-car-rental', role: 'Registered Headquarters & Home Base' },
  { name: 'Guntur', slug: '/car-rental-guntur', role: 'Primary Outstation Hub' },
  { name: 'Vijayawada', slug: '/outstation-cabs-vijayawada', role: 'Commercial & Airport Corridor' },
  { name: 'Tenali', slug: '/car-rental-guntur', role: 'Regional Service Area' },
  { name: 'Narasaraopet', slug: '/chilakaluripeta-car-rental', role: 'Regional Service Area' },
  { name: 'Sattenapalle', slug: '/car-rental-guntur', role: 'Regional Service Area' },
  { name: 'Bapatla', slug: '/chilakaluripeta-car-rental', role: 'Coastal Service Area' },
  { name: 'Ponnur', slug: '/car-rental-guntur', role: 'Regional Service Area' },
  { name: 'Mangalagiri', slug: '/car-rental-guntur', role: 'Temple & Highway Corridor' },
  { name: 'Amaravati', slug: '/outstation-cabs-vijayawada', role: 'Capital Region Service Area' },
];

export const VEHICLE_FLEET: VehicleCategory[] = [
  {
    id: 'swift-dzire',
    name: 'Maruti Suzuki Swift Dzire',
    badge: 'Comfort Sedan (4+1)',
    tagline: 'Fuel-efficient, smooth, and perfect for couples, solo travelers, and small families',
    image: '/images/fleet-sedan.jpg',
    seats: '4 + 1 Passengers',
    luggage: '2-3 Medium Bags',
    acType: 'Chilled Climate AC',
    bestFor: 'Local city errands, outstation drops, fast intercity travel',
    ratePerKmStarting: 'From ₹13/km* (One-Way)',
    statusNote: 'Verified vehicle model with Kiran Travels as featured on official promotional material.',
  },
  {
    id: 'maruti-ertiga',
    name: 'Maruti Suzuki Ertiga',
    badge: 'Family MPV (6+1)',
    tagline: 'Spacious 7-seater MPV with 3-row seating, generous boot space, and smooth highway ride',
    image: '/images/fleet-mpv.jpg',
    seats: '6 + 1 Passengers',
    luggage: '3-4 Large Bags',
    acType: 'Dual Zone AC (Roof Vents)',
    bestFor: 'Family temple pilgrimages, group vacations, long-distance interstate tours',
    ratePerKmStarting: 'Quote on WhatsApp',
    statusNote: 'Verified family vehicle with Kiran Travels. Advance confirmation recommended.',
  },
];

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: 'local-city',
    title: 'Local City Travel',
    tag: 'Daily & Short Trips',
    shortDesc: 'Stress-free car travel for shopping, local visits, appointments, and town commutes in and around Chilakaluripeta.',
    fullDesc: 'Skip the hassle of local public transit. Book a clean Swift Dzire or Ertiga for hours or full days to complete local errands, medical appointments, social visits, or shopping across Chilakaluripeta, Narasaraopet, and Guntur district.',
    icon: 'MapPin',
    image: '/images/dest-city.jpg',
  },
  {
    id: 'outstation',
    title: 'Outstation Trips',
    tag: 'Long Distance',
    shortDesc: 'Dependable long-distance car hire across Andhra Pradesh, Telangana, Tamil Nadu, Karnataka, and beyond.',
    fullDesc: 'Whether visiting family across state borders or exploring scenic holiday destinations, Kiran Travels provides seasoned highway drivers and well-maintained cars designed for long hours of comfortable touring.',
    icon: 'Compass',
    image: '/images/fleet-mpv.jpg',
  },
  {
    id: 'one-way',
    title: 'One-Way Drops',
    tag: 'Point-to-Point',
    shortDesc: 'Convenient one-way taxi drops to Hyderabad, Vijayawada, Chennai, Bangalore, and major destinations from ₹13/km.',
    fullDesc: 'Need only a point-to-point drop without paying for unnecessary return days? We offer verified one-way transfers at our advertised ₹13/km starting rate, subject to route confirmation.',
    icon: 'ArrowRightCircle',
    image: '/images/dest-family.jpg',
  },
  {
    id: 'round-trip',
    title: 'Round-Trip Travel',
    tag: 'Flexible Return',
    shortDesc: 'Complete peace of mind with dedicated round-trip arrangements for single-day or multi-day journeys.',
    fullDesc: 'Retain your assigned driver and car throughout the duration of your trip. Driver allowance and stay-related charges described by the owner are included in the quoted round-trip fare, with tolls charged separately.',
    icon: 'Repeat',
    image: '/images/dest-mountains.jpg',
  },
  {
    id: 'pilgrimage',
    title: 'Temple & Pilgrimage Trips',
    tag: 'Sacred Destinations',
    shortDesc: 'Dedicated spiritual journeys to holy shrines including Srisailam, Tirupati, Vijayawada Kanaka Durga, and more.',
    fullDesc: 'Pilgrimage trips require patience, safe hill driving, and respect for prayer schedules. Kiran Travels specializes in peaceful temple tours with drivers experienced in ghat sections and holy shrine protocols.',
    icon: 'Sparkles',
    image: '/images/dest-temple.jpg',
  },
  {
    id: 'family-group',
    title: 'Family & Group Travel',
    tag: 'Spacious Comfort',
    shortDesc: 'Tailored vehicle recommendations for joint families, weddings, vacations, and group reunions in our 7-seater Ertiga.',
    fullDesc: 'Travel together comfortably. We guide you to the right car choice—our compact Swift Dzire for up to 4 passengers or our spacious Ertiga MPV for up to 6-7 passengers with luggage.',
    icon: 'Users',
    image: '/images/dest-beach.jpg',
  },
  {
    id: 'airport',
    title: 'Airport Transfers',
    tag: 'Punctual Transfers',
    shortDesc: 'Punctual pickup and drop-off to Vijayawada Airport (Gannavaram) and Hyderabad (RGIA).',
    fullDesc: 'Flight schedules leave no room for delay. Book your airport commute in advance to enjoy stress-free, timely arrivals with driver assistance for luggage and smooth highway transit.',
    icon: 'Plane',
    image: '/images/fleet-sedan.jpg',
  },
];

export const TRUST_FEATURES = [
  {
    id: 'experience',
    title: '4 Years of Travel Experience',
    desc: 'Serving Chilakaluripeta and regional travelers with consistent highway expertise and customer satisfaction.',
    icon: 'Award',
  },
  {
    id: 'comfort',
    title: 'Comfortable Journeys',
    desc: 'Clean, well-maintained Swift Dzire and Ertiga vehicles with functioning air conditioning and pleasant interiors.',
    icon: 'Smile',
  },
  {
    id: 'family',
    title: 'Family-Friendly Travel',
    desc: 'Courteous driving habits, safe speed discipline, and utmost care for children, seniors, and luggage.',
    icon: 'HeartHandshake',
  },
  {
    id: 'dependable',
    title: 'Dependable Service',
    desc: 'Honest communication regarding pickup schedules, car availability, and confirmed travel routes.',
    icon: 'ShieldCheck',
  },
  {
    id: 'clear-fares',
    title: 'Clear Fare Communication',
    desc: 'Transparent pricing discussions before departure, with clear breakdown of rate per km and trip details.',
    icon: 'BadgePercent',
  },
  {
    id: 'all-india',
    title: 'Local & Long-Distance Reach',
    desc: 'From short visits across Chilakaluripeta & Guntur to all-India outstation destinations at ₹13/km advertised one-way rates.',
    icon: 'Route',
  },
];

export const BOOKING_STEPS = [
  {
    step: '01',
    title: 'Share Your Journey',
    desc: 'Tell us your pickup location, destination, travel date, passenger count, and preferred car type (Swift Dzire or Ertiga) through our quick form or on WhatsApp.',
  },
  {
    step: '02',
    title: 'Confirm Your Fare & Route',
    desc: 'Discuss the exact route, applicable toll/permit details, return schedules, vehicle availability, and receive a confirmed upfront quotation from Kiran Travels.',
  },
  {
    step: '03',
    title: 'Travel with Comfort',
    desc: 'Once your ride is confirmed with the owner, pack your bags and experience a safe, courteous, and comfortable journey.',
  },
];

export const FAQ_LIST = [
  {
    id: 'faq-1',
    question: 'How do I request and confirm a cab booking with Kiran Travels?',
    answer: 'Booking is simple and fast. Fill out our quick enquiry form on this website or click "Book on WhatsApp". Your trip details (pickup, drop, date, passengers, vehicle preference) will open directly in WhatsApp with owner Kiran (+91 9398961766). You will discuss car availability and receive a clear price quotation. The ride is confirmed once you and the owner mutually agree on the travel details and advance requirements.',
  },
  {
    id: 'faq-2',
    question: 'How is the ₹13/km advertised rate applied to trips?',
    answer: 'The ₹13 per kilometre rate is the advertised starting rate for one-way car travel, including eligible destinations across India, subject to route confirmation. It applies to our standard Swift Dzire sedan running. For round trips, driver allowance and stay-related permit/charges described by the owner are included in the quoted fare, while highway tolls are payable separately. Always confirm the exact rate calculation for your route with Kiran Travels before booking.',
  },
  {
    id: 'faq-3',
    question: 'Are advertised route fares (like Guntur to Srisailam ₹7,000 or Hyderabad ₹7,999) fixed or indicative?',
    answer: 'All advertised route prices on our website (Guntur to Srisailam ₹7,000, Guntur to Hyderabad ₹7,999, Chilakaluripeta to Vijayawada ₹2,999, and Chilakaluripeta to Guntur ₹1,799) are indicative starting quotations subject to confirmation by Kiran Travels. The exact final fare is confirmed directly through WhatsApp based on your exact pickup point, vehicle choice (Swift Dzire vs Ertiga), travel date, and journey type.',
  },
  {
    id: 'faq-4',
    question: 'Are tolls, driver allowance, and stay permits included in round-trip fares?',
    answer: 'For confirmed round-trip arrangements, driver allowance and the applicable stay-related permit or charges specified by the owner are included in the relevant confirmed round-trip quotation. Highway toll charges are separate and payable additionally. Inclusions for one-way journeys are confirmed upfront. Contact Kiran Travels on WhatsApp for trip-specific clarification.',
  },
  {
    id: 'faq-5',
    question: 'Are there minimum kilometre requirements for outstation trips?',
    answer: 'Kiran Travels discusses fare calculation transparently based on your specific destination, one-way versus round-trip requirements, and travel duration. Please contact Kiran Travels on WhatsApp with your travel itinerary to receive an exact quotation without any arbitrary hidden rules.',
  },
  {
    id: 'faq-6',
    question: 'What is the cancellation and rescheduling policy?',
    answer: 'For cancellation, rescheduling or refund-related questions, please contact Kiran Travels on WhatsApp. Applicable terms will be clarified before booking.',
  },
  {
    id: 'faq-7',
    question: 'Can we request intermediate stops during temple or family tours?',
    answer: 'Yes! Round-trip and pilgrimage packages are designed for flexibility. You can coordinate food breaks, temple darshan queues, and scenic rest stops with the driver. For extended delays or unannounced route deviations, nominal waiting charges may be agreed with the owner.',
  },
  {
    id: 'faq-8',
    question: 'Which payment methods are accepted by Kiran Travels?',
    answer: 'Payments can typically be made via UPI (Google Pay, PhonePe, Paytm), bank transfer, or cash. For long-distance or high-season bookings, a nominal advance payment may be requested to lock in vehicle availability.',
  },
];
