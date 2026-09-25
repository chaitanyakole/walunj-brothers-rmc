/**
 * WALUNJ BROTHER'S RMC - CENTRAL IMAGE CONFIGURATION
 * 
 * Keep all image references in one place so that real photographs
 * can easily replace these assets whenever new site photos become available.
 */

export const images = {
  hero: "/images/hero.jpg",
  about: "/images/plant.jpg",
  plant: "/images/plant.jpg",
  pouring: "/images/pouring.jpg",
  residential: "/images/residential.jpg",
  commercial: "/images/commercial.jpg",
  infrastructure: "/images/infrastructure.jpg",
  industrial: "/images/industrial.jpg",
  transport: "/images/transport.jpg",
  qualityTest: "/images/quality_test.jpg",
};

export const galleryItems = [
  {
    id: 1,
    title: "Modern RMC Batching Plant",
    category: "Plant & Facility",
    image: images.plant,
    description: "Silo storage, computerized aggregate batching bins, and automated conveyor system."
  },
  {
    id: 2,
    title: "Transit Mixer Fleet & Dispatch",
    category: "Logistics",
    image: images.hero,
    description: "Transit mixer coordinating fresh ready-mix concrete dispatch for high-rise slab pour."
  },
  {
    id: 3,
    title: "Precision Slab Pouring",
    category: "Site Operations",
    image: images.pouring,
    description: "Concrete boom pump pouring fresh mix onto reinforced raft foundation under civil supervision."
  },
  {
    id: 4,
    title: "Highway Transit Coordination",
    category: "Logistics",
    image: images.transport,
    description: "Transit mixer moving smoothly across Pune regional corridors for timely delivery."
  },
  {
    id: 5,
    title: "Quality Slump & Cube Testing",
    category: "Quality Control",
    image: images.qualityTest,
    description: "Site laboratory slump cone and compression test cube preparation to monitor concrete workability."
  },
  {
    id: 6,
    title: "Commercial Multi-Story Project",
    category: "Commercial",
    image: images.commercial,
    description: "Coordinated boom pump pour for multi-story commercial complex columns and floor slabs."
  },
  {
    id: 7,
    title: "Industrial Floor Slab Casting",
    category: "Industrial",
    image: images.industrial,
    description: "Large industrial warehouse floor slab casting with mechanized power trowel finishing."
  },
  {
    id: 8,
    title: "Infrastructure & Flyover Deck Pour",
    category: "Infrastructure",
    image: images.infrastructure,
    description: "Heavy-duty structural concrete delivery for highway bridge piers and viaduct deck."
  },
  {
    id: 9,
    title: "Residential Apartment Slab Casting",
    category: "Residential",
    image: images.residential,
    description: "Residential residential housing project receiving uniform high-slump ready-mix concrete."
  }
];

export default images;
