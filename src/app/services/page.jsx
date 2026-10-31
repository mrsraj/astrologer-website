import PageHero from "@/components/ui/PageHero";
import ServiceCard from "@/components/ui/ServiceCard";
import ConsultationCTA from "@/components/ui/ConsultationCTA";
import { services } from "@/data/services";

export const metadata = { title: "Astrology Services", description: "Explore Kundli, marriage, career, Vastu, Muhurat and gemstone guidance." };

export default function ServicesPage() {
  return <><PageHero title="Astrology Services" titleHindi="ज्योतिष सेवाएँ" description="Choose the consultation that best matches your question. If you are unsure, contact us and we will help you select." /><section className="section"><div className="container"><div className="service-grid">{services.map((service) => <ServiceCard key={service.slug} service={service} />)}</div></div></section><ConsultationCTA /></>;
}
