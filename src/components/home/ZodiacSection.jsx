import Link from "next/link";
import { zodiacSigns } from "@/data/content";
import SectionHeading from "@/components/ui/SectionHeading";

export default function ZodiacSection() {
  return <section className="section"><div className="container"><SectionHeading title="The Zodiac Signs" titleHindi="12 राशियाँ" description="अपनी राशि पर क्लिक करें और आज का संक्षिप्त राशिफल पढ़ें।" /><div className="zodiac-grid">{zodiacSigns.map((sign) => <Link className="zodiac-item" href={`/horoscope#${sign.slug}`} key={sign.slug}><span className="zodiac-symbol" aria-hidden="true">{sign.symbol}</span><strong>{sign.hindi}</strong><small>{sign.name}</small></Link>)}</div></div></section>;
}
