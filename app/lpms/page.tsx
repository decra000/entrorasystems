import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Eyebrow } from "@/components/Eyebrow";
import { DemoForm } from "@/components/DemoForm";

export const metadata: Metadata = {
  title: "Entrora LPMS, the Legal Practice Management System",
  description:
    "Entrora LPMS is the flagship product of Entrora Systems: an event-driven, engine-powered legal practice management system with standard and custom workflows, practical templates, and one stable journey from enquiry to invoice.",
};

const PILLARS = [
  {
    t: "Event-driven",
    b: "Every action sets the next one in motion. A deadline, a payment, a signed document: each triggers what should happen next, so nothing depends on someone remembering.",
  },
  {
    t: "Engine-powered",
    b: "Beneath the screens is a collection of engines running pipelines. The logic that clears, routes, schedules and bills is built once and applied the same way to every matter.",
  },
  {
    t: "Standard and custom workflows",
    b: "Start with proven standard workflows for how matters normally move, then shape custom ones around how your practice actually runs, without rebuilding anything.",
  },
  {
    t: "Practical, diverse templates",
    b: "Templates for the documents, matters and tasks a practice really handles, across different kinds of work. Ready on day one, and yours to adapt.",
  },
];

const JOURNEY = [
  { t: "Enquiry", b: "Captured once, whichever way it arrives." },
  { t: "Clearance", b: "Checked before it is accepted, not after." },
  { t: "Matter", b: "Opened with the right workflow, team and templates." },
  { t: "Work", b: "Tasks, deadlines and documents move through the pipeline." },
  { t: "Invoice", b: "Time and work flow straight into billing." },
];

export default function LpmsPage() {
  return (
    <div className="ent-page ent-lpms">
      <Header />

      {/* ── Hero ── */}
      <section className="lp-hero">
        <div className="ent-wrap">
          <Eyebrow text="Flagship product" />
          <h1 className="lp-h1">
            Entrora LPMS.<br />
            <span className="ent-accent">One system, end to end.</span>
          </h1>
          <p className="ent-body lp-lead">
            An event-driven, engine-powered system for running a legal practice, from the first enquiry
            to the final invoice.
          </p>
          <div className="ent-cta-row">
            <a href="#demo" className="ent-pill ent-pill-solid">
              Book a demo <ArrowRight size={13} strokeWidth={2} />
            </a>
            <Link href="/#contact" className="ent-pill ent-pill-ghost">Talk to us first</Link>
          </div>
        </div>
      </section>

      {/* ── Product shot ── */}
      <section className="ent-section">
        <div className="ent-wrap">
          <div className="ent-shot">
            <Image
              src="/entrora-lpms-dashboard.png"
              alt="The Entrora LPMS dashboard, showing matters, clients, documents and billable hours"
              width={1536} height={1024} className="ent-shot-img"
            />
          </div>
        </div>
      </section>

      {/* ── What it is ── */}
      <section className="ent-section ent-tint">
        <div className="ent-wrap">
          <Eyebrow text="What it is" />
          <h2 className="ent-h2">Built on how work actually moves.</h2>
          <p className="ent-body ent-measure">
            A practice is a series of things that have to happen, in order, on time. LPMS treats it that
            way: the system carries the work forward, and people step in where judgement is needed.
          </p>

          <div className="lp-features">
            {PILLARS.map((p) => (
              <div key={p.t} className="lp-feature">
                <h3>{p.t}</h3>
                <p>{p.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── The journey ── */}
      <section className="ent-section">
        <div className="ent-wrap">
          <Eyebrow text="The journey" />
          <h2 className="ent-h2">One stable journey, enquiry to invoice.</h2>
          <p className="ent-body ent-measure">
            The path is the same every time, whatever the matter. What changes is the workflow inside it,
            not the way the practice runs around it.
          </p>

          <div className="lp-pipeline">
            {JOURNEY.map((p, i) => (
              <div key={p.t} className="lp-pipe-step">
                <div className="lp-pipe-head">
                  <span className="lp-pipe-num">{String(i + 1).padStart(2, "0")}</span>
                  <h3>{p.t}</h3>
                </div>
                <p>{p.b}</p>
                {i < JOURNEY.length - 1 && <span aria-hidden className="lp-pipe-arrow"><ArrowRight size={16} strokeWidth={2} /></span>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Book a demo ── */}
      <section className="ent-section ent-tint" id="demo">
        <div className="ent-wrap lp-cta">
          <div>
            <Eyebrow text="See it running" />
            <h2 className="ent-h2">Book a demo.</h2>
            <p className="ent-body ent-measure">
              Thirty minutes, real screens, no slide deck. Bring your own matters. If it doesn&apos;t fit
              how your practice runs, you&apos;ll know before the call ends.
            </p>
          </div>
          <DemoForm />
        </div>
      </section>

      <Footer />

      <style>{`
        .lp-hero{ padding: clamp(3rem, 7vw, 5.5rem) 0 clamp(2rem, 5vw, 3rem); }
        .lp-h1{
          font-family: var(--font-serif); font-weight: 500;
          font-size: clamp(2.4rem, 5.8vw, 4rem); line-height: 1.08;
          letter-spacing: -0.01em; color: var(--c-ink); margin-bottom: 1.5rem;
        }
        .lp-lead{ max-width: 36rem; font-size: clamp(0.95rem, 1.2vw, 1.05rem); margin-bottom: 2rem; }

        .lp-pipeline{
          margin-top: 3rem; display: grid;
          grid-template-columns: repeat(auto-fit, minmax(13rem, 1fr));
          gap: 2rem 1.5rem;
        }
        .lp-pipe-step{ position: relative; }
        .lp-pipe-head{ display: flex; align-items: baseline; gap: 0.6rem; margin-bottom: 0.6rem; }
        .lp-pipe-num{ font-family: var(--font-manjari); font-weight: 700; font-size: 0.7rem; letter-spacing: 0.1em; color: var(--ent-accent); }
        .lp-pipe-step h3{ font-family: var(--font-sans); font-weight: 600; font-size: 0.98rem; color: var(--c-ink); }
        .lp-pipe-step p{ font-family: var(--font-sans); font-size: 0.82rem; line-height: 1.65; color: var(--c-ink-muted); }
        .lp-pipe-arrow{
          display: none; position: absolute; top: 0.15rem; right: -1.25rem;
          color: var(--ent-accent); opacity: 0.5;
        }
        @media(min-width: 821px){
          .lp-pipeline{ grid-template-columns: repeat(5, 1fr); }
          .lp-pipe-arrow{ display: block; }
        }

        .lp-features{
          margin-top: 3rem; display: grid;
          grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));
          gap: 1px; background: var(--c-border); border: 1px solid var(--c-border);
          border-radius: 14px; overflow: hidden;
        }
        .lp-feature{ background: var(--c-bg); padding: 1.75rem; }
        .lp-feature h3{ font-family: var(--font-sans); font-weight: 600; font-size: 0.98rem; color: var(--c-ink); margin-bottom: 0.6rem; }
        .lp-feature p{ font-family: var(--font-sans); font-size: 0.84rem; line-height: 1.7; color: var(--c-ink-muted); }

        .lp-cta{ display: grid; grid-template-columns: minmax(0, 0.8fr) minmax(0, 1.2fr); gap: clamp(2rem, 5vw, 3.5rem); align-items: start; }

        @media(max-width: 820px){
          .lp-cta{ grid-template-columns: 1fr; }
        }
      `}</style>
    </div>
  );
}
