import PageHero from "@/components/ui/PageHero";
import WhatsAppForm from "@/components/forms/WhatsAppForm";

export const metadata = { title: "Book a Consultation", description: "Request a personal Vedic astrology consultation via WhatsApp." };
export default async function BookConsultationPage({ searchParams }) { const service = (await searchParams)?.service || ""; return <><PageHero title="Book Consultation" titleHindi="परामर्श बुक करें" description="Share the basic details below. Your message will open in WhatsApp so you can review it before sending." /><section className="section"><div className="container"><WhatsAppForm defaultService={service} /><p className="sample-note">The WhatsApp number, consultation duration, availability and fees are placeholders until the business confirms them.</p></div></section></>; }
