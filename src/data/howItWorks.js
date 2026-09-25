import { MessageSquare, ClipboardList, Calculator, Truck, CheckCircle2 } from 'lucide-react';

export const steps = [
  {
    step: "01",
    title: "SEND ENQUIRY",
    description: "Customer contacts the business through WhatsApp, call or the online quote form.",
    icon: MessageSquare,
    badge: "Contact"
  },
  {
    step: "02",
    title: "SHARE REQUIREMENT",
    description: "Customer shares project location, estimated quantity, concrete grade and delivery schedule.",
    icon: ClipboardList,
    badge: "Specification"
  },
  {
    step: "03",
    title: "GET QUOTE",
    description: "Business reviews the requirement and provides a clear quotation based on the project specifications.",
    icon: Calculator,
    badge: "Quotation"
  },
  {
    step: "04",
    title: "CONCRETE DISPATCH",
    description: "RMC is batched with precision and transported to the construction site in transit mixers.",
    icon: Truck,
    badge: "Dispatch"
  },
  {
    step: "05",
    title: "SITE DELIVERY",
    description: "Fresh concrete reaches the construction site ready for pump placement or crane discharge.",
    icon: CheckCircle2,
    badge: "Placement"
  }
];

export default steps;
