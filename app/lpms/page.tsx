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
  { t: "Engagement", b: "An instruction is recorded once, whichever door it came through: a referral, a call, the intake form." },
  { t: "Matter", b: "Conflict clearance is a documented decision before a matter opens, not a search that happened once and was forgotten." },
  { t: "Work item", b: "The matter's activity sits in a pull queue, or is pushed directly, with dependencies on what has to finish first." },
  { t: "Assignment", b: "Claiming work is a recorded handover, not a status change, so ownership history survives reassignment." },
  { t: "Deliverable", b: "What the work owes is tracked separately from what it produced, so a stalled task is visible before a deadline is." },
  { t: "Document", b: "The evidence, versioned, access-logged, and flagged for privilege where it applies." },
];

const FEATURES = [
  {
    t: "Intake & conflict clearance",
    b: "A submission is triaged with real conflict search across existing matters, opposing parties, and case numbers, eight party-role types, risk-ranked results. Promotion to a matter carries that decision with it, not a note that it happened.",
  },
  {
    t: "Matter lifecycle",
    b: "Lead, conflict check, engagement letter, retainer pending, open, on hold or closed, archived or declined. One lifecycle, multi-practice matters supported natively rather than forced into a single area.",
  },
  {
    t: "Assignments & SLAs",
    b: "Work carries dependencies, due dates, and an ownership history. Reassignment doesn't erase who held it before, and a task can be broken down without losing the parent.",
  },
  {
    t: "Time & billing",
    b: "Time entries by minute, rate, and billable flag. Invoices compute subtotals and VAT server-side and get a real number. Fee schedules are firm-controlled reference data, not hardcoded into a form.",
  },
  {
    t: "Documents & records",
    b: "Version history with a current-version pointer, a per-document access log recording who, what, and when, and a privilege flag for what needs to stay attorney-client.",
  },
  {
    t: "Client portal",
    b: "A client sees their matters, documents, and invoices, with status that reflects the same records staff work from. A prospective client can track a submission by code without an account.",
  },
  {
    t: "Admin assistant",
    b: "A tool-calling assistant that can query and act on the firm's own data, but nothing it proposes to create, change, or send executes without confirmation first.",
  },
  {
    t: "Calendar & deadlines",
    b: "Court dates, holidays, and firm events in one calendar, with deadline tracking that reasons about a matter's actual stage rather than a fixed reminder.",
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
  { n: "6", l: "Stages, one auditable story: engagement to document" },
  { n: "15+", l: "Practice areas covered out of the box" },
  { n: "4", l: "Domain engines: conflict, deadlines, risk, documents" },
  { n: "1", l: "Admin assistant, confirm-before-acting by design" },
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
          <h2 className="ent-h2">Six stages, one story.</h2>
          <p className="ent-body ent-measure">
            Every one of these is a real record with its own history, not a label on a shared table.
            That&apos;s what makes the audit trail a byproduct of using the system, rather than a report
            someone has to assemble afterwards.
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
            Not a to-do list with a legal skin. Every module below exists because a firm running the system
            needed it to be real, not because it demos well.
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
          .lp-pipeline{ grid-template-columns: repeat(6, 1fr); }
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
