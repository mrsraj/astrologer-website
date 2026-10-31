export default function SectionHeading({ title, titleHindi, description }) {
  return <div className="section-heading"><h2>{titleHindi}<span className="hindi-sub">{title}</span></h2><div className="ornament">✦</div>{description ? <p>{description}</p> : null}</div>;
}
