/**
 * WALUNJ BROTHER'S RMC - CONCRETE GRADES DATA
 * 
 * Configurable list of standard concrete grades.
 * Note: These grades represent standard industry reference mixes and sample content.
 * Grade availability for specific sites and volumes is confirmed upon enquiry.
 */

export const rmcGrades = [
  {
    grade: "M10",
    name: "M10 Grade Concrete",
    characteristicStrength: "10 N/mm² (at 28 days)",
    application: "Commonly used for non-structural bedding, levelling courses, and mass concrete foundation filling.",
    commonUses: ["PCC Bedding", "Levelling Course", "Foundation Fills", "Pathway Base"],
    tag: "Lean Concrete"
  },
  {
    grade: "M15",
    name: "M15 Grade Concrete",
    characteristicStrength: "15 N/mm² (at 28 days)",
    application: "Suitable for plain cement concrete (PCC), pathways, small boundary retaining works, and lightweight bedding.",
    commonUses: ["PCC Works", "Pavement Bedding", "Boundary Walls", "Floor Sub-bases"],
    tag: "Standard PCC"
  },
  {
    grade: "M20",
    name: "M20 Grade Concrete",
    characteristicStrength: "20 N/mm² (at 28 days)",
    application: "Commonly used for residential and general construction applications including slabs, beams, and columns.",
    commonUses: ["Residential Slabs", "Beams & Columns", "Staircases", "General RCC"],
    isPopular: true,
    tag: "Most Requested"
  },
  {
    grade: "M25",
    name: "M25 Grade Concrete",
    characteristicStrength: "25 N/mm² (at 28 days)",
    application: "Standard engineered grade for heavy reinforced concrete structures, structural columns, footings, and multi-story slabs.",
    commonUses: ["High-Load Slabs", "Raft Foundations", "Structural Columns", "Commercial RCC"],
    isPopular: true,
    tag: "Structural Standard"
  },
  {
    grade: "M30",
    name: "M30 Grade Concrete",
    characteristicStrength: "30 N/mm² (at 28 days)",
    application: "High-strength mix designed for commercial structures, heavy-load floor slabs, and water-retaining structures.",
    commonUses: ["Commercial Towers", "Heavy Industrial Floors", "Basement Retaining Walls", "Water Tanks"],
    tag: "High Strength"
  },
  {
    grade: "M35",
    name: "M35 Grade Concrete",
    characteristicStrength: "35 N/mm² (at 28 days)",
    application: "Heavy-duty concrete engineered for high-rise load-bearing members, heavy commercial foundations, and precast works.",
    commonUses: ["High-Rise Structures", "Heavy Foundations", "Prestressed Concrete", "Industrial Plants"],
    tag: "High Performance"
  },
  {
    grade: "M40+",
    name: "M40 & Specialized Grades",
    characteristicStrength: "40+ N/mm² (at 28 days)",
    application: "Heavy structural applications, bridges, highway pavements, flyovers, and specialized engineering requirements.",
    commonUses: ["Infrastructure Piers", "Heavy Deck Slabs", "Highway Pavements", "Specialized Civil Works"],
    tag: "Specialized Mix"
  }
];

export default rmcGrades;
