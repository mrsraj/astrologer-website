"use client";

import { useState } from "react";
import Link from "next/link";
import { navigation, site } from "@/data/site";

function Brand() {
  return (
    <Link className="brand" href="/" aria-label={`${site.nameEnglish} home`}>
      <span className="brand-mark" aria-hidden="true">☀</span>
      <span><strong>{site.nameHindi}</strong><span>{site.nameEnglish}</span></span>
    </Link>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Brand />
        <nav className="desktop-nav" aria-label="Primary navigation">
          {navigation.map((item) => <Link className="nav-link" href={item.href} key={item.href}>{item.label}<span>{item.hindi}</span></Link>)}
        </nav>
        <Link className="btn btn-primary header-cta" href="/book-consultation">परामर्श बुक करें</Link>
        <button className="menu-button" type="button" aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen((value) => !value)}>{open ? "×" : "☰"}</button>
      </div>
      <nav className={`mobile-nav ${open ? "open" : ""}`} aria-label="Mobile navigation">
        {navigation.map((item) => <Link className="nav-link" href={item.href} key={item.href} onClick={close}>{item.label}<span>{item.hindi}</span></Link>)}
        <Link className="btn btn-primary" href="/book-consultation" onClick={close}>परामर्श बुक करें · Book Consultation</Link>
      </nav>
    </header>
  );
}

export { Brand };
