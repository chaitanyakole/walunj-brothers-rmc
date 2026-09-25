import { images } from './images';

export const projectTypes = [
  {
    id: "residential",
    title: "Residential Construction",
    subtitle: "Houses, Row Villas & High-Rise Apartments",
    description: "Reliable concrete batching for foundation plinths, slabs, columns, and architectural structures across Pune residential developments.",
    image: images.residential,
    features: ["Foundation Rafts", "Roof Slabs & Beams", "Waterproofing Blends", "Continuous Pours"]
  },
  {
    id: "commercial",
    title: "Commercial Construction",
    subtitle: "Office Complexes, Malls & Tech Parks",
    description: "High-spec concrete mixes supplied for large multi-story towers, commercial basements, podiums, and heavy structural frames.",
    image: images.commercial,
    features: ["High-Load Columns", "Retaining Walls", "Podium Decks", "High Slump Retention"]
  },
  {
    id: "industrial",
    title: "Industrial Construction",
    subtitle: "Warehouses, Sheds & Manufacturing Plants",
    description: "Durable concrete engineered to resist heavy machinery vibrations, forklift wheel loads, and abrasion on industrial flooring.",
    image: images.industrial,
    features: ["Tremix / Power Trowel Finish", "Abrasion Resistance", "Heavy Floor Slabs", "Equipment Plinths"]
  },
  {
    id: "infrastructure",
    title: "Infrastructure Projects",
    subtitle: "Roads, Bridges, Flyovers & Public Works",
    description: "Rigorous grade concrete supplied for flyover piers, concrete road pavements, drainage channels, and civil structures.",
    image: images.infrastructure,
    features: ["Pavement Quality Concrete", "Flyover Pier Castings", "Drainage Culverts", "Strict Mix Consistency"]
  }
];

export default projectTypes;
