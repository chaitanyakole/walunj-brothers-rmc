import { business } from '../config/business';

/**
 * Builds a formatted WhatsApp message based on user's quotation requirement
 */
export function buildQuoteWhatsAppMessage(data = {}) {
  const lines = [
    `Hello ${business.name},`,
    `I would like to enquire about RMC supply for my construction project.`,
    ``,
    `📋 *Enquiry Details:*`,
    `• *Name:* ${data.name || 'Not specified'}`,
    `• *Mobile:* ${data.phone || 'Not specified'}`,
    data.email ? `• *Email:* ${data.email}` : null,
    `• *Project Type:* ${data.projectType || 'Not specified'}`,
    `• *Site Location:* ${data.location || 'Wagholi / Pune area'}`,
    `• *RMC Grade:* ${data.grade || 'M20 / Standard'}`,
    `• *Estimated Quantity:* ${data.quantity ? `${data.quantity} m³` : 'To be discussed'}`,
    `• *Required Date:* ${data.deliveryDate || 'As soon as possible'}`,
    data.notes ? `• *Additional Notes:* ${data.notes}` : null,
    ``,
    `Please share the quotation and availability.`,
    `Thank you!`
  ].filter(Boolean);

  return lines.join('\n');
}

/**
 * Generates direct WhatsApp URL with pre-filled message
 */
export function getWhatsAppUrl(customText) {
  const defaultText = `Hello ${business.name}, I would like to enquire about Ready-Mix Concrete supply for my construction project in Pune.`;
  const message = customText || defaultText;
  const encoded = encodeURIComponent(message);
  
  const rawNumber = business.whatsapp ? business.whatsapp.replace(/[^0-9]/g, '') : '';
  
  if (rawNumber) {
    return `https://wa.me/${rawNumber}?text=${encoded}`;
  }
  // If no specific phone number is configured yet, WhatsApp send API lets user choose recipient
  return `https://api.whatsapp.com/send?text=${encoded}`;
}

/**
 * Generates direct mailto URL for quote request backup
 */
export function getQuoteMailtoUrl(data = {}) {
  const subject = encodeURIComponent(`RMC Quote Request - ${data.name || 'Construction Project'} - ${data.grade || 'RMC'}`);
  const body = encodeURIComponent(buildQuoteWhatsAppMessage(data));
  return `mailto:${business.email}?subject=${subject}&body=${body}`;
}
