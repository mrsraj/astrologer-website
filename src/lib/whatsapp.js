export function buildWhatsAppUrl(phone, message) {
  const normalizedPhone = phone.replace(/\D/g, "");
  return `https://wa.me/${normalizedPhone}?text=${encodeURIComponent(message)}`;
}

export function buildConsultationMessage({ name, phone, service, birth, city, question }) {
  return `Namaste, I would like to request a consultation.\nName: ${name}\nPhone: ${phone}\nService: ${service || "General consultation"}\nBirth details: ${birth || "Not provided"}\nCity: ${city || "Not provided"}\nQuestion: ${question}`;
}
