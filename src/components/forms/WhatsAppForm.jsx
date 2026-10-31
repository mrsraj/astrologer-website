"use client";
import { useState } from "react";
import { services } from "@/data/services";
import { site } from "@/data/site";
import { buildConsultationMessage, buildWhatsAppUrl } from "@/lib/whatsapp";

export default function WhatsAppForm({ mode = "booking", defaultService = "" }) {
  const [status, setStatus] = useState("");
  const selectedService = services.find((item) => item.slug === defaultService)?.title || defaultService;
  function submit(event) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = data.get("name")?.toString().trim();
    const phone = data.get("phone")?.toString().trim();
    const question = data.get("question")?.toString().trim();
    if (!name || !phone || !question) { setStatus("कृपया नाम, फ़ोन और प्रश्न भरें · Please complete your name, phone and question."); return; }
    const service = data.get("service") || "General enquiry";
    const birth = data.get("birth") || "Not provided";
    const city = data.get("city") || "Not provided";
    const message = mode === "booking" ? buildConsultationMessage({ name, phone, service, birth, city, question }) : `Namaste, I have a website enquiry.\nName: ${name}\nPhone: ${phone}\nQuestion: ${question}`;
    const url = buildWhatsAppUrl(site.phone, message);
    setStatus("Opening WhatsApp with your message…");
    const popup = window.open(url, "_blank");
    if (popup) popup.opener = null;
    else window.location.href = url;
  }
  return <form className="form-shell" onSubmit={submit}><div className="form-grid"><div className="field"><label htmlFor="name">नाम · Full name *</label><input id="name" name="name" autoComplete="name" required /></div><div className="field"><label htmlFor="phone">फ़ोन · Phone *</label><input id="phone" name="phone" autoComplete="tel" inputMode="tel" required /></div>{mode === "booking" ? <><div className="field"><label htmlFor="service">सेवा · Service</label><select id="service" name="service" defaultValue={selectedService}><option value="">Select a service</option>{services.map((item) => <option key={item.slug} value={item.title}>{item.titleHindi} · {item.title}</option>)}</select></div><div className="field"><label htmlFor="city">शहर · City</label><input id="city" name="city" autoComplete="address-level2" /></div><div className="field field-full"><label htmlFor="birth">जन्म विवरण · Birth date, time and place</label><input id="birth" name="birth" placeholder="DD/MM/YYYY, time, place" /></div></> : null}<div className="field field-full"><label htmlFor="question">आपका प्रश्न · Your question *</label><textarea id="question" name="question" required placeholder="Tell us briefly what you would like guidance about." /></div><div className="field-full"><button className="btn btn-primary" type="submit">WhatsApp पर भेजें · Send via WhatsApp →</button><p className="form-note">This opens WhatsApp with your details. Nothing is stored on this website.</p>{status ? <p className="form-status" role="status">{status}</p> : null}</div></div></form>;
}
