"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Menu, X } from "lucide-react";
import { NAV } from "@/lib/constants";

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="ent-header">
      <div className="ent-header-inner">
        <Link href="/" className="ent-brand">
          <Image src="/entrora_logo.jpg" alt="" width={200} height={200} priority className="ent-brand-mark" />
          <span className="ent-brand-text">
            <strong>Entrora</strong>
            <em>Legal Engineering</em>
          </span>
        </Link>

        <nav className="ent-nav">
          {NAV.map((n) => <a key={n.href} href={n.href}>{n.label}</a>)}
        </nav>

        <Link href="/#contact" className="ent-pill ent-pill-solid ent-header-cta">
          Get in touch <ArrowRight size={13} strokeWidth={2} />
        </Link>

        <button type="button" className="ent-burger" aria-expanded={open} aria-label="Menu" onClick={() => setOpen(!open)}>
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {open && (
        <nav className="ent-nav-mobile">
          {NAV.map((n) => <a key={n.href} href={n.href} onClick={() => setOpen(false)}>{n.label}</a>)}
          <Link href="/#contact" onClick={() => setOpen(false)}>Get in touch</Link>
        </nav>
      )}
    </header>
  );
}
