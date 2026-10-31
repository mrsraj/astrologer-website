import Link from "next/link";

export default function PageHero({ title, titleHindi, description }) {
  return <section className="page-hero"><div className="container"><div className="breadcrumb"><Link href="/">Home</Link> · {title}</div><h1>{titleHindi}<span className="hindi-sub">{title}</span></h1><div className="ornament">✦</div>{description ? <p>{description}</p> : null}</div></section>;
}
