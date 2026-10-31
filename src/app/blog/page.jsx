import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import ConsultationCTA from "@/components/ui/ConsultationCTA";
import { blogPosts } from "@/data/content";

export const metadata = { title: "Astrology Blog", description: "Approachable guides to Vedic astrology, compatibility and Vastu." };

const topics = [["कुंडली · Kundli", "Understand birth-chart basics, houses, planets and the details needed for a reading."], ["रिश्ते · Relationships", "Explore compatibility questions with care, context and respect for both people."], ["वास्तु · Vastu", "Learn simple principles for observing movement, light and balance in everyday spaces."]];

export default function BlogPage() {
  return <><PageHero title="Astrology Journal" titleHindi="ज्योतिष लेख" description="Clear explanations of traditional astrology concepts for curious everyday readers." />
    <section className="section"><div className="container"><SectionHeading title="Featured Guides" titleHindi="प्रमुख लेख" description="Starter topics for a practical astrology knowledge library." /><div className="post-grid">{blogPosts.map((post) => <article className="post-card" key={post.slug}><div className="meta">{post.category} · {post.readTime}</div><h2>{post.titleHindi}<span className="hindi-sub">{post.title}</span></h2><p>{post.excerpt}</p><span className="text-link">लेख शीघ्र उपलब्ध होगा · Coming soon</span></article>)}</div><p className="sample-note">These are starter article topics. Add reviewed long-form content before enabling article links.</p></div></section>
    <section className="section section-soft"><div className="container"><SectionHeading title="Explore by Topic" titleHindi="विषय के अनुसार पढ़ें" /><div className="info-grid">{topics.map(([title, description]) => <article className="info-panel" key={title}><h3>{title}</h3><p>{description}</p></article>)}</div></div></section>
    <section className="section"><div className="container"><SectionHeading title="Reading Astrology Responsibly" titleHindi="ज्योतिष को समझदारी से पढ़ें" /><p className="intro-note">Astrology articles are best used for learning and reflection. They should never be used to diagnose illness, replace qualified advice or create fear about the future.</p><div className="faq-list"><article className="faq-item"><h3>क्या सामान्य लेख मेरी कुंडली का परिणाम बताते हैं?</h3><p>No. General articles explain concepts. Personal interpretation requires accurate birth details and a focused question.</p></article><article className="faq-item"><h3>क्या हर उपाय सभी के लिए सही होता है?</h3><p>No. Avoid applying remedies or gemstones only because a general article mentions them; suitability depends on context.</p></article></div></div></section><ConsultationCTA /></>;
}
