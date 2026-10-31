import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="home-hero">
      <Image className="hero-image" src="/images/astrology-hero.png" alt="Traditional Vedic zodiac wheel over a golden mountain sunrise" fill priority sizes="100vw" />
      <div className="container hero-inner">
        <div className="hero-copy">
          <h1>आपके जीवन की दिशा,<br />सितारों की भाषा में</h1>
          <p className="hero-lead">Clarity for life, relationships, career and new beginnings through traditional Vedic astrology.</p>
          <div className="hero-rule">✦</div>
          <p>प्राचीन वैदिक ज्योतिष की परंपरा के माध्यम से जीवन के महत्वपूर्ण निर्णयों के लिए स्पष्ट मार्गदर्शन पाएँ।</p>
          <div className="hero-actions"><Link className="btn btn-primary" href="/book-consultation">परामर्श बुक करें · Book Consultation →</Link><Link className="btn btn-secondary" href="/services">सेवाएँ देखें · Explore Services</Link></div>
        </div>
      </div>
    </section>
  );
}
