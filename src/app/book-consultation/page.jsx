import PageHero from "@/components/ui/PageHero";
import WhatsAppForm from "@/components/forms/WhatsAppForm";
import { site } from "@/data/site";

export const metadata = { title: "Book a Consultation", description: "Request a personal Vedic astrology consultation via WhatsApp." };
export default async function BookConsultationPage({ searchParams }) { const service = (await searchParams)?.service || ""; return <><PageHero title="Book Consultation" titleHindi="परामर्श बुक करें" description="Share the basic details below. Your message will open in WhatsApp so you can review it before sending." /><section className="section"><div className="container"><div className="consultation-form-column"><WhatsAppForm defaultService={service} /><a className="btn call-button" style={{backgroundColor:"#198754",color:"#ffffff",borderColor:"#146c43"}} href={`tel:${site.phone}`} aria-label={`Call ${site.nameEnglish} at ${site.phoneDisplay}`}>☎ अभी कॉल करें · Call Now</a></div><p className="sample-note">Form submit करने पर आपकी जानकारी WhatsApp में खुलेगी। Message भेजने से पहले आप उसे देख सकते हैं।</p></div></section></>; }
