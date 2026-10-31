import { notFound } from "next/navigation";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import ConsultationCTA from "@/components/ui/ConsultationCTA";
import { getServiceBySlug, services } from "@/data/services";

export function generateStaticParams() { return services.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }) { const service = getServiceBySlug((await params).slug); return service ? { title: service.title, description: service.short } : {}; }
export default async function ServiceDetailPage({ params }) {
  const service = getServiceBySlug((await params).slug);
  if (!service) notFound();
  return <><PageHero title={service.title} titleHindi={service.titleHindi} description={service.short} /><section className="section"><div className="container split"><div className="content-block"><div className="eyebrow">Personal consultation · व्यक्तिगत परामर्श</div><h2>{service.titleHindi}<span className="hindi-sub">What this consultation covers</span></h2><p className="lead">{service.shortHindi}</p><p>{service.description}</p><div className="detail-list">{service.includes.map((item) => <div key={item}>{item}</div>)}</div><Link className="btn btn-primary" href={`/book-consultation?service=${service.slug}`}>इस सेवा के लिए बुक करें · Book This Service</Link></div><aside className="form-shell"><h2 style={{color:"var(--maroon)",fontFamily:"var(--font-heading)",fontSize:"2rem",marginTop:0}}>परामर्श से पहले</h2><p>Keep your correct birth date, birth time, birth place and main questions ready. Some services may need details from more than one person.</p><ul className="check-list"><li>Choose a quiet time for the conversation</li><li>Verify birth details before submitting</li><li>Write your most important question first</li><li>Keep notes during the consultation</li></ul><p className="form-note">Specific timing, duration and fees should be updated before launch.</p></aside></div></section><ConsultationCTA /></>;
}
