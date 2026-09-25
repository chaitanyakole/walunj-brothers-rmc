import { Truck, Building2, HardHat, Home, Factory, Route, Construction } from 'lucide-react';
import { images } from './images';

export const services = [
  {
    id: "01",
    code: "rmc-supply",
    title: "Ready-Mix Concrete Supply",
    shortDesc: "Supply ready-mix concrete for different construction requirements.",
    detailedDesc: "Custom batching of fresh concrete mixed under controlled conditions to meet specified site performance standards.",
    icon: Construction,
    image: images.pouring,
    tag: "Core Supply"
  },
  {
    id: "02",
    code: "rmc-transportation",
    title: "RMC Transportation",
    shortDesc: "Transportation of ready-mix concrete from plant to construction site.",
    detailedDesc: "Agitated transit mixer trucks preserving concrete slump, workability, and moisture content throughout transit.",
    icon: Truck,
    image: images.transport,
    tag: "Logistics Fleet"
  },
  {
    id: "03",
    code: "site-delivery",
    title: "Construction Site Delivery",
    shortDesc: "Coordinate concrete delivery according to project requirements.",
    detailedDesc: "Site-aligned dispatch scheduling to keep pace with your pouring teams, pump operators, and shuttering schedules.",
    icon: HardHat,
    image: images.hero,
    tag: "Site Coordination"
  },
  {
    id: "04",
    code: "residential",
    title: "Residential Projects",
    shortDesc: "RMC supply for houses, apartments and residential construction.",
    detailedDesc: "Dependable concrete supply for individual bungalows, apartment slabs, plinths, and residential housing developments.",
    icon: Home,
    image: images.residential,
    tag: "Housing"
  },
  {
    id: "05",
    code: "commercial",
    title: "Commercial Projects",
    shortDesc: "Concrete supply for commercial buildings and developments.",
    detailedDesc: "Engineered concrete batches tailored for multi-story office spaces, retail complexes, and commercial towers.",
    icon: Building2,
    image: images.commercial,
    tag: "Commercial"
  },
  {
    id: "06",
    code: "industrial",
    title: "Industrial Projects",
    shortDesc: "RMC support for industrial construction requirements.",
    detailedDesc: "Heavy-duty concrete formulations engineered for industrial flooring, warehouses, factories, and equipment foundations.",
    icon: Factory,
    image: images.industrial,
    tag: "Industrial"
  },
  {
    id: "07",
    code: "infrastructure",
    title: "Infrastructure Projects",
    shortDesc: "Concrete supply for roads, structures and infrastructure-related construction.",
    detailedDesc: "High-grade structural concrete for roads, drainage networks, bridges, culverts, and municipal infrastructure.",
    icon: Route,
    image: images.infrastructure,
    tag: "Civil Works"
  }
];

export default services;
