import Link from "next/link";
import { Brand } from "./Header";
import { navigation, site } from "@/data/site";
import { services } from "@/data/services";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand"><Brand /><p className="footer-copy">Traditional Vedic astrology guidance shared with clarity, care and respect for personal choice.</p></div>
          <div className="footer-col"><h3>Explore · देखें</h3><ul className="footer-links">{navigation.map((item) => <li key={item.href}><Link href={item.href}>{item.label} · {item.hindi}</Link></li>)}</ul></div>
          <div className="footer-col"><h3>Services · सेवाएँ</h3><ul className="footer-links">{services.slice(0, 5).map((item) => <li key={item.slug}><Link href={`/services/${item.slug}`}>{item.titleHindi}</Link></li>)}</ul></div>
          <div className="footer-col"><h3>Contact · संपर्क</h3><ul className="footer-links"><li><a href={`tel:${site.phone}`}>{site.phoneDisplay}</a></li><li><a href={`mailto:${site.email}`}>{site.email}</a></li><li>{site.address}</li><li>{site.hours}</li><li><small>Demo contact details · नमूना संपर्क विवरण</small></li></ul></div>
        </div>
        <div className="footer-bottom"><span>© {new Date().getFullYear()} {site.nameEnglish}. All rights reserved.</span><span>Astrology guidance is interpretive and does not replace professional advice.</span></div>
      </div>
    </footer>
  );
}
