/**
 * WALUNJ BROTHER'S RMC - CENTRAL BUSINESS CONFIGURATION
 * 
 * All company details, contact information, addresses, service regions,
 * and social channels are managed here. Update this file to change
 * business contact information site-wide.
 */

export const business = {
  name: "Walunj Brother's RMC",
  tagline: "Concrete That Builds Confidence",
  businessType: "Ready-Mix Concrete (RMC) Supplier",
  description: "Walunj Brother's RMC provides ready-mix concrete supply and transportation for construction requirements across Wagholi, Pune and surrounding areas.",
  email: "walunjbrathers@gmail.com",
  
  // Official phone & WhatsApp contact numbers
  phone: "+91 92733 89035",
  whatsapp: "+91 92733 89035",

  // Formatted display labels
  phoneDisplay: "+91 92733 89035",
  whatsappDisplay: "+91 92733 89035",
  
  address: {
    line1: "Gate No. 218, Lonikand Lohagaon Road",
    line2: "Bhawadi Post, Wagholi",
    line3: "Haveli, Pune, Maharashtra",
    country: "India",
    pinCode: "412207",
    full: "Gate No. 218, Lonikand Lohagaon Road, Bhawadi Post, Wagholi, Haveli, Pune, Maharashtra, India"
  },

  // Direct Google Maps link using the official business address
  googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent("Gate No. 218, Lonikand Lohagaon Road, Bhawadi Post, Wagholi, Haveli, Pune, Maharashtra, India"),

  // Instagram profile link (configurable)
  instagram: "",

  // Key service areas around Pune
  serviceAreas: [
    { name: "Wagholi", highlight: true, note: "Primary Plant & Base Location" },
    { name: "Lonikand", highlight: true, note: "Lonikand Lohagaon Corridor" },
    { name: "Bhawadi", highlight: true, note: "Immediate Vicinity & Surrounds" },
    { name: "Kharadi", highlight: true, note: "Major IT & Residential Hub" },
    { name: "Pune City", highlight: false, note: "Urban & Sub-urban Projects" },
    { name: "Haveli", highlight: false, note: "Regional Construction Belt" },
    { name: "Viman Nagar & Nagar Road", highlight: false, note: "Commercial Infrastructure" },
    { name: "Bakori & Perne", highlight: false, note: "Fast-developing Residential Hubs" }
  ],

  // Core Trust Badges
  trustPoints: [
    { title: "Quality Concrete", desc: "Formulated to precise mix standards" },
    { title: "Timely Delivery", desc: "Punctual batching to preserve slump and freshness" },
    { title: "Reliable Transport", desc: "Dedicated transit mixer fleet coordination" },
    { title: "Site Support", desc: "Attentive coordination for hassle-free pour" }
  ]
};

export default business;
