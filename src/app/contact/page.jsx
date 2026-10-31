import PageHero from "@/components/ui/PageHero";
import WhatsAppForm from "@/components/forms/WhatsAppForm";
import { site } from "@/data/site";

export const metadata = { title: "Contact", description: "Contact Shri Jyotish Seva for astrology consultation enquiries." };
export default function ContactPage() { return <><PageHero title="Contact Us" titleHindi="संपर्क करें" description="Send your question and we will respond with the next available consultation options." /><section className="section"><div className="container contact-grid"><aside className="contact-details"><h2>बात करें · Get in touch</h2><p>Choose phone, email or the WhatsApp form. Replace these demonstration details before publishing.</p><div className="contact-item"><strong>Phone / WhatsApp</strong><a href={`tel:${site.phone}`}>{site.phoneDisplay}</a></div><div className="contact-item"><strong>Email</strong><a href={`mailto:${site.email}`}>{site.email}</a></div><div className="contact-item"><strong>Location</strong><span>{site.address}</span></div><div className="contact-item"><strong>Consultation hours</strong><span>{site.hours}</span></div></aside><WhatsAppForm mode="contact" /></div></section></>; }
