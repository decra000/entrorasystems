import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Eyebrow } from "@/components/Eyebrow";
import { DEMO_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Entrora LPMS, the Legal Practice Management System",
  description:
    "Entrora LPMS is the flagship product of Entrora Systems: a legal practice management system that runs a firm end to end, intake through conflict clearance, matters, assignments, time, billing, documents, and a client portal, in one system.",
};

const PIPELINE = [
  { t: "A new enquiry", b: "Checked against the firm's own history for the same names, the same case, the same opposing side, before it's ever accepted." },
  { t: "The matter, working", b: "Every task has an owner and a deadline, and a clear next step, so nothing sits in an inbox waiting to be remembered." },
  { t: "Time & billing", b: "Hours logged against a matter become an invoice for that matter, at the firm's own rates, without a spreadsheet in between." },
  { t: "The record", b: "Every document kept, versioned, and access-logged, with privilege protected where it needs to be." },
];

const FEATURES = [
  {
    t: "Conflict checks that actually check",
    b: "Before a matter opens, the system searches the firm's existing files for the same names, the same case, the same opposing side, and shows what it finds, ranked by risk. No matter opens on a search nobody did.",
  },
  {
    t: "Matters that keep their shape",
    b: "Every matter moves through the same disciplined stages from first contact to close, and can belong to more than one practice area without getting misfiled under just one.",
  },
  {
    t: "Work that has an owner",
    b: "Every task is claimed, not just assigned, every claim is dated, and a task can depend on the one before it finishing first. Nothing gets picked up twice, and nothing quietly stalls.",
  },
  {
    t: "Billing that follows the work",
    b: "Time logged against a matter becomes an invoice for that matter, at the firm's own rates, with the tax handled and a real invoice number attached.",
  },
  {
    t: "Documents you can stand behind",
    b: "Every version kept, every access recorded, privilege flagged where it applies. If anyone ever asks who touched a file and when, the answer already exists.",
  },
  {
    t: "One portal, the same truth",
    b: "Clients see their own matters, documents and invoices, drawn from the same records staff work from, never a separate, out-of-date copy. A prospective client can check where their enquiry stands without needing an account.",
  },
  {
    t: "An assistant that asks first",
    b: "Staff can ask the system to find, summarise or draft against the firm's own data. It proposes; a person still has to say yes before anything is created, changed, or sent.",
  },
  {
    t: "A calendar that knows the stakes",
    b: "Court dates, holidays and deadlines in one place, timed to where a matter actually stands rather than a generic reminder.",
  },
];

const PRACTICE_AREAS = [
  "Civil Litigation", "Criminal Defense", "Family Law", "Corporate Law",
  "Property Law & Conveyancing", "Immigration", "Employment Law",
  "Intellectual Property", "Constitutional Law", "Alternative Dispute Resolution",
  "Banking & Finance", "Aviation, Admiralty & Maritime Law",
  "Company Secretarial Work", "Due Diligence", "Succession & Estates",
];

const STATS = [
  { n: "15+", l: "Practice areas covered out of the box" },
  { n: "1", l: "Portal, always in sync with what staff see" },
  { n: "0", l: "Spreadsheets between time logged and an invoice sent" },
  { n: "1", l: "Assistant that never acts without asking first" },
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
            <span className="ent-pink">One system, end to end.</span>
          </h1>
          <p className="ent-body lp-lead">
            Legal practice management built around one rule: nothing gets copied from one place to another
            to stay true. An enquiry arrives, gets triaged, becomes a matter, gathers its documents and its
            time, bills, and reports on itself, in the same system throughout.
          </p>
          <div className="ent-cta-row">
            <a href={DEMO_URL} target="_blank" rel="noopener noreferrer" className="ent-pill ent-pill-solid">
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

      {/* ── How it works ── */}
      <section className="ent-section ent-tint">
        <div className="ent-wrap">
          <Eyebrow text="How it works" />
          <h2 className="ent-h2">From first enquiry to final invoice.</h2>
          <p className="ent-body ent-measure">
            One system carries a matter the whole way through, so nothing has to be re-entered, re-checked,
            or reconstructed later. The trail of who did what and when is a byproduct of using it, not a
            report someone has to assemble afterwards.
          </p>

          <div className="lp-pipeline">
            {PIPELINE.map((p, i) => (
              <div key={p.t} className="lp-pipe-step">
                <div className="lp-pipe-head">
                  <span className="lp-pipe-num">{String(i + 1).padStart(2, "0")}</span>
                  <h3>{p.t}</h3>
                </div>
                <p>{p.b}</p>
                {i < PIPELINE.length - 1 && <span aria-hidden className="lp-pipe-arrow"><ArrowRight size={16} strokeWidth={2} /></span>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Features ── */}
      <section className="ent-section">
        <div className="ent-wrap">
          <Eyebrow text="What's inside" />
          <h2 className="ent-h2">Built for how a practice actually runs.</h2>
          <p className="ent-body ent-measure">
            Not a to-do list with a legal skin. Every module below is built to be used daily by a real
            practice, not to look good in a demo.
          </p>

          <div className="lp-features">
            {FEATURES.map((f) => (
              <div key={f.t} className="lp-feature">
                <h3>{f.t}</h3>
                <p>{f.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Practice areas ── */}
      <section className="ent-section ent-tint">
        <div className="ent-wrap">
          <Eyebrow text="Coverage" />
          <h2 className="ent-h2">Practice areas, out of the box.</h2>
          <p className="ent-body ent-measure">
            Taxonomy, workflows and reference data seeded for the practice areas below. A matter can span
            more than one; the system tracks the primary area and every additional one it touches.
          </p>
          <div className="lp-areas">
            {PRACTICE_AREAS.map((a) => <span key={a} className="lp-area">{a}</span>)}
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="ent-section">
        <div className="ent-wrap">
          <div className="ent-stats-row lp-stats-row">
            {STATS.map((s) => (
              <div key={s.l} className="ent-stat">
                <strong>{s.n}</strong>
                <span>{s.l}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Closing CTA ── */}
      <section className="ent-section ent-tint">
        <div className="ent-wrap lp-cta">
          <div>
            <Eyebrow text="See it running" />
            <h2 className="ent-h2">Bring your own matters to the demo.</h2>
            <p className="ent-body ent-measure">
              Thirty minutes, real screens, no slide deck. If it doesn&apos;t fit how your practice runs,
              you&apos;ll know before the call ends.
            </p>
          </div>
          <div className="lp-cta-actions">
            <a href={DEMO_URL} target="_blank" rel="noopener noreferrer" className="ent-pill ent-pill-solid">
              Book a demo <ArrowRight size={13} strokeWidth={2} />
            </a>
            <Link href="/#contact" className="ent-pill ent-pill-ghost">
              Ask a question first <ExternalLink size={12} strokeWidth={2} />
            </Link>
          </div>
        </div>
      </section>

      <Footer />

      <style>{`
        .lp-hero{ padding: clamp(3rem, 7vw, 5.5rem) 0 clamp(2rem, 5vw, 3rem); }
        .lp-h1{
          font-family: var(--font-sans); font-weight: 700;
          font-size: clamp(2.2rem, 5.6vw, 3.8rem); line-height: 1.06;
          letter-spacing: -0.03em; color: var(--c-ink); margin-bottom: 1.5rem;
        }
        .lp-lead{ max-width: 40rem; font-size: clamp(0.95rem, 1.2vw, 1.05rem); margin-bottom: 2rem; }

        .lp-pipeline{
          margin-top: 3rem; display: grid;
          grid-template-columns: repeat(auto-fit, minmax(13rem, 1fr));
          gap: 2rem 1.5rem;
        }
        .lp-pipe-step{ position: relative; }
        .lp-pipe-head{ display: flex; align-items: baseline; gap: 0.6rem; margin-bottom: 0.6rem; }
        .lp-pipe-num{ font-family: var(--font-manjari); font-weight: 700; font-size: 0.7rem; letter-spacing: 0.1em; color: var(--ent-pink); }
        .lp-pipe-step h3{ font-family: var(--font-sans); font-weight: 600; font-size: 0.98rem; color: var(--c-ink); }
        .lp-pipe-step p{ font-family: var(--font-sans); font-size: 0.82rem; line-height: 1.65; color: var(--c-ink-muted); }
        .lp-pipe-arrow{
          display: none; position: absolute; top: 0.15rem; right: -1.25rem;
          color: var(--ent-pink); opacity: 0.5;
        }
        @media(min-width: 821px){
          .lp-pipeline{ grid-template-columns: repeat(4, 1fr); }
          .lp-pipe-arrow{ display: block; }
        }

        .lp-features{
          margin-top: 3rem; display: grid;
          grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));
          gap: 1px; background: var(--c-border); border: 1px solid var(--c-border);
          border-radius: 14px; overflow: hidden;
        }
        .lp-feature{ background: var(--c-bg); padding: 1.6rem; }
        .lp-feature h3{ font-family: var(--font-sans); font-weight: 600; font-size: 0.95rem; color: var(--c-ink); margin-bottom: 0.6rem; }
        .lp-feature p{ font-family: var(--font-sans); font-size: 0.82rem; line-height: 1.65; color: var(--c-ink-muted); }

        .lp-areas{ margin-top: 2rem; display: flex; flex-wrap: wrap; gap: 0.6rem; }
        .lp-area{
          font-family: var(--font-sans); font-size: 0.8rem; color: var(--c-ink-mid);
          border: 1px solid var(--c-border-strong); border-radius: 999px; padding: 0.5rem 1rem;
        }

        .lp-stats-row{ margin: 0; }

        .lp-cta{ display: grid; grid-template-columns: minmax(0, 1.2fr) minmax(0, 0.8fr); gap: clamp(2rem, 5vw, 3.5rem); align-items: center; }
        .lp-cta-actions{ display: flex; flex-direction: column; gap: 0.75rem; align-items: flex-start; }

        @media(max-width: 820px){
          .lp-cta{ grid-template-columns: 1fr; }
          .lp-cta-actions{ flex-direction: row; flex-wrap: wrap; }
        }
      `}</style>
    </div>
  );
}
