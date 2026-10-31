import { services } from "@/data/services";
import SectionHeading from "@/components/ui/SectionHeading";
import ServiceCard from "@/components/ui/ServiceCard";

export default function Services() {
  return <section className="section"><div className="container"><SectionHeading title="Our Astrology Services" titleHindi="हमारी सेवाएँ" description="Guidance for the important aspects of life, grounded in traditional Vedic astrology and explained in clear language." /><div className="service-grid">{services.map((service) => <ServiceCard key={service.slug} service={service} />)}</div></div></section>;
}
