import Link from "next/link";

const symbols = { chart: "⌘", rings: "◎", growth: "↗", home: "⌂", calendar: "▦", gem: "◇" };

export default function ServiceCard({ service }) {
  return <article className="service-card"><div className="service-icon" aria-hidden="true">{symbols[service.icon]}</div><h3>{service.titleHindi}</h3><div className="hi">{service.title}</div><p>{service.short}</p><Link className="text-link" href={`/services/${service.slug}`}>जानें · Explore <span aria-hidden="true">→</span></Link></article>;
}
