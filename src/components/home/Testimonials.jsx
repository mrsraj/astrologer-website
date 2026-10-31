import { testimonials } from "@/data/testimonials";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Testimonials() {
  return <section className="section section-soft"><div className="container"><SectionHeading title="Client Experiences" titleHindi="परामर्श का अनुभव" description="Examples showing how future client stories can appear on this website." /><div className="testimonial-grid">{testimonials.map((item) => <blockquote className="testimonial" key={item.id}><span className="quote-mark">“</span><p>{item.quoteHindi}</p><p className="english">{item.quote}</p><cite>{item.name}<span>{item.role}</span></cite></blockquote>)}</div><p className="sample-note">These are illustrative samples, not claims from verified clients. Replace them before launch.</p></div></section>;
}
