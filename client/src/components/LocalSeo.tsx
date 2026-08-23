/** Telangana Feast Editorial: precise, human-readable local business facts are also exposed as structured data for search and AI retrieval systems. */
import { BUSINESS } from "@/components/SiteChrome";
import { ASSETS } from "@/lib/assets";

export const LOCAL_FAQS = [
  { question: "What size events can Dhruva Catering Services support?", answer: "Dhruva Catering Services caters for intimate family occasions from 50 guests through to large weddings and corporate gatherings of 5,000 guests or more." },
  { question: "Which areas does Dhruva Catering Services serve?", answer: "Dhruva Catering Services is based in Hanamkonda and serves events in Hanamkonda, Warangal, and across Telangana." },
  { question: "Which types of catering are available?", answer: "Dhruva offers wedding and reception banquets, birthdays and private parties, live counter experiences, and corporate catering, with Telangana, South Indian, and North Indian menu directions." },
  { question: "How can I request a catering menu or quote?", answer: "Call +91 98494 93933 or start a WhatsApp enquiry to share the event date, estimated guest count, and menu preferences." },
];

export function LocalSeo() {
  const siteUrl = window.location.origin;
  const businessSchema = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "CateringService"],
    "@id": `${siteUrl}/#dhruva-catering`,
    name: "Dhruva Catering Services",
    description: "Event catering and cooking services in Hanamkonda for weddings, receptions, private parties, live counters, and corporate gatherings from 50 to 5,000+ guests.",
    url: siteUrl,
    telephone: "+91 98494 93933",
    priceRange: "₹₹",
    image: ASSETS.hero,
    address: { "@type": "PostalAddress", streetAddress: "Lead India School, Hunter Rd, Dwaraka Nagar, Shyampet", addressLocality: "Hanamkonda", addressRegion: "Telangana", postalCode: "506001", addressCountry: "IN" },
    openingHoursSpecification: { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], opens: "00:00", closes: "23:59" },
    areaServed: ["Hanamkonda", "Warangal", "Telangana"],
    contactPoint: { "@type": "ContactPoint", telephone: "+91 98494 93933", contactType: "customer service", availableLanguage: ["English", "Telugu", "Hindi"] },
    aggregateRating: { "@type": "AggregateRating", ratingValue: "4.8", reviewCount: "136" },
    hasOfferCatalog: { "@type": "OfferCatalog", name: "Dhruva Catering Services", itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Wedding and Reception Catering" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Private Party Catering" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Live Counter Catering" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Corporate Catering" } },
    ] },
  };
  const websiteSchema = { "@context": "https://schema.org", "@type": "WebSite", "@id": `${siteUrl}/#website`, url: siteUrl, name: "Dhruva Catering Services", inLanguage: "en-IN", publisher: { "@id": `${siteUrl}/#dhruva-catering` } };
  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: LOCAL_FAQS.map((item) => ({ "@type": "Question", name: item.question, acceptedAnswer: { "@type": "Answer", text: item.answer } })) };

  return <>{[businessSchema, websiteSchema, faqSchema].map((schema, index) => <script key={index} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />)}</>;
}
