// ============================================================
// BUSINESS DATA — Single Source of Truth
// All business facts are centralized here. Never hardcode
// business data directly in components.
// ============================================================

export const BUSINESS = {
  name: "Rajeev Spoken English Classes",
  associatedBrand: "XTREME EDUCATION",
  tagline: "Speak English with Confidence",
  description:
    "Transform your spoken English skills with expert-led, offline classes in Jabalpur. Join a trusted institute with a proven track record of results.",

  // Contact
  phone1: "9406647081",
  phone2: "7724991771",
  whatsappNumber: "7724991771", // Primary WhatsApp number

  // Location
  address: {
    line1: "Pushpak Nagar, GCF",
    line2: "Near Shri Ram Marriage Garden",
    area: "Adhartal",
    city: "Jabalpur",
    pincode: "482004",
    state: "Madhya Pradesh",
    country: "IN",
  },

  // Social Proof
  rating: 4.9,
  totalReviews: 74,
  reviewSource: "Justdial",
  marketingPhrase: "100% RESULT",

  // Links (generated)
  get fullAddress() {
    return `${this.address.line1}, ${this.address.line2}, ${this.address.area}, ${this.address.city} – ${this.address.pincode}, ${this.address.state}`;
  },
  get phoneLink1() {
    return `tel:+91${this.phone1}`;
  },
  get phoneLink2() {
    return `tel:+91${this.phone2}`;
  },
  get whatsappLink() {
    return `https://wa.me/91${this.whatsappNumber}?text=${encodeURIComponent(
      "Hi! I'm interested in joining Rajeev Spoken English Classes. Please share more details."
    )}`;
  },
  get directionsLink() {
    return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      "Rajeev Spoken English Classes, Pushpak Nagar, GCF, Near Shri Ram Marriage Garden, Adhartal, Jabalpur 482004"
    )}`;
  },
  get mapsEmbedUrl() {
    return `https://www.google.com/maps?q=${encodeURIComponent(
      "Rajeev Spoken English Classes, Pushpak Nagar, Adhartal, Jabalpur 482004"
    )}&output=embed`;
  },
} as const;

// ============================================================
// NAVIGATION
// ============================================================
export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Classes", href: "#classes" },
  { label: "Experience", href: "#experience" },
  { label: "Gallery", href: "#gallery" },
  { label: "Reviews", href: "#reviews" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
] as const;

// ============================================================
// FAQ DATA — Only factual, verifiable answers
// ============================================================
export const FAQ_DATA = [
  {
    question: "Where are the classes located?",
    answer: `Our classes are held at ${BUSINESS.address.line1}, ${BUSINESS.address.line2}, ${BUSINESS.address.area}, ${BUSINESS.address.city} – ${BUSINESS.address.pincode}, ${BUSINESS.address.state}.`,
  },
  {
    question: "Are the classes online or offline?",
    answer:
      "We offer offline (in-person) spoken English classes only. This ensures direct interaction, real-time feedback, and a more effective learning environment.",
  },
  {
    question: "How can I enquire about joining?",
    answer: `You can reach us by calling ${BUSINESS.phone1} or ${BUSINESS.phone2}, or send us a message on WhatsApp for a quick response.`,
  },
  {
    question: "What is the rating of the institute?",
    answer: `We are rated ${BUSINESS.rating} out of 5 stars based on ${BUSINESS.totalReviews} reviews on ${BUSINESS.reviewSource}.`,
  },
  {
    question: "Is the institute suitable for beginners?",
    answer:
      "Absolutely! Our classes are designed for learners at all levels — from complete beginners to those looking to refine their fluency and confidence.",
  },
  {
    question: "What areas of English are covered?",
    answer:
      "Our spoken English classes focus on conversational fluency, pronunciation, vocabulary building, grammar fundamentals, and confidence in public speaking.",
  },
] as const;

// ============================================================
// CLASSES / SKILL AREAS — What students learn
// ============================================================
export const SKILL_AREAS = [
  {
    title: "Conversational Fluency",
    description:
      "Build the confidence to speak naturally in everyday situations — from casual conversations to professional interactions.",
    icon: "MessageCircle" as const,
  },
  {
    title: "Pronunciation & Accent",
    description:
      "Master clear pronunciation and develop a neutral, confident accent that makes your English easy to understand.",
    icon: "Mic" as const,
  },
  {
    title: "Vocabulary Building",
    description:
      "Expand your active vocabulary with practical words and phrases you'll actually use in daily life.",
    icon: "BookOpen" as const,
  },
  {
    title: "Grammar Fundamentals",
    description:
      "Understand essential grammar rules that form the backbone of clear, correct English communication.",
    icon: "PenTool" as const,
  },
  {
    title: "Public Speaking & GD",
    description:
      "Overcome stage fear and learn to express ideas clearly — essential for Group Discussions (GDs), presentations, and seminars.",
    icon: "Presentation" as const,
  },
  {
    title: "Interview Preparation",
    description:
      "Specialized coaching for high-stakes interviews including SSB (Services Selection Board), UPSC/IAS panels, and top corporate placements.",
    icon: "Briefcase" as const,
  },
] as const;

// ============================================================
// EXPERIENCE FEATURES — Classroom experience highlights
// ============================================================
export const EXPERIENCE_FEATURES = [
  {
    title: "Small Batch Sizes",
    description: "Personalized attention in every session",
    icon: "Users" as const,
  },
  {
    title: "Practice-Oriented",
    description: "More speaking, less textbook",
    icon: "MessagesSquare" as const,
  },
  {
    title: "Supportive Environment",
    description: "Learn without fear of judgement",
    icon: "Heart" as const,
  },
  {
    title: "Real-World Scenarios",
    description: "Practice with real conversations",
    icon: "Globe" as const,
  },
] as const;

// ============================================================
// JSON-LD STRUCTURED DATA
// ============================================================
export const JSON_LD_SCHEMA = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "EducationalOrganization"],
  name: BUSINESS.name,
  description: BUSINESS.description,
  url: "https://rajeevspokenenglish.vercel.app",
  telephone: `+91${BUSINESS.phone1}`,
  address: {
    "@type": "PostalAddress",
    streetAddress: `${BUSINESS.address.line1}, ${BUSINESS.address.line2}`,
    addressLocality: BUSINESS.address.city,
    addressRegion: BUSINESS.address.state,
    postalCode: BUSINESS.address.pincode,
    addressCountry: BUSINESS.address.country,
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 23.1815,
    longitude: 79.9864,
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: BUSINESS.rating.toString(),
    reviewCount: BUSINESS.totalReviews.toString(),
    bestRating: "5",
  },
  areaServed: {
    "@type": "City",
    name: "Jabalpur",
  },
  priceRange: "₹",
  openingHoursSpecification: [],
};
