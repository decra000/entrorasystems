"use client";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { CONTACT_API_URL } from "@/lib/constants";

const TIMES = [
  { value: "Morning (9am to 12pm)", label: "Morning, 9am to 12pm" },
  { value: "Afternoon (12pm to 4pm)", label: "Afternoon, 12pm to 4pm" },
  { value: "Late afternoon (4pm to 6pm)", label: "Late afternoon, 4pm to 6pm" },
];

/* Demo requests go through the same /api/contact as the enquiry form on
   decrakerubo.com, tagged in the subject so they are easy to spot. */
export function DemoForm() {
  const [minDate] = useState(() => new Date(Date.now() + 86400000).toISOString().split("T")[0]);
  const [form, setForm] = useState({ name: "", email: "", org: "", size: "", date: "", time: TIMES[0].value, notes: "" });
  const [state, setState] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.date) return;
    setState("sending");
    const message = [
      "LPMS demo request",
      `Preferred date: ${form.date}`,
      `Preferred time (EAT): ${form.time}`,
      form.size.trim() && `Practice size: ${form.size.trim()}`,
      form.notes.trim() && `Notes: ${form.notes.trim()}`,
    ].filter(Boolean).join("\n");
    try {
      const res = await fetch(CONTACT_API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: form.name, email: form.email, org: form.org, subject: "Entrora LPMS demo request", message }),
      });
      setState(res.ok ? "sent" : "error");
    } catch {
      setState("error");
    }
  };

  if (state === "sent") {
    return (
      <div className="ent-form-done">
        <h3>Request received.</h3>
        <p>
          We will confirm a time for {form.date} at {form.email}. The slot is not booked until you
          hear back from us.
        </p>
      </div>
    );
  }

  return (
    <form className="ent-form" onSubmit={submit} noValidate>
      <div className="ent-field-row">
        <label className="ent-field">
          <span>Name</span>
          <input type="text" value={form.name} onChange={set("name")} required autoComplete="name" />
        </label>
        <label className="ent-field">
          <span>Email</span>
          <input type="email" value={form.email} onChange={set("email")} required autoComplete="email" />
        </label>
      </div>
      <div className="ent-field-row">
        <label className="ent-field">
          <span>Practice or organisation <em>optional</em></span>
          <input type="text" value={form.org} onChange={set("org")} autoComplete="organization" />
        </label>
        <label className="ent-field">
          <span>Team size <em>optional</em></span>
          <input type="text" value={form.size} onChange={set("size")} placeholder="e.g. 8 lawyers" />
        </label>
      </div>
      <div className="ent-field-row">
        <label className="ent-field">
          <span>Preferred date</span>
          <input type="date" value={form.date} min={minDate} onChange={set("date")} required />
        </label>
        <label className="ent-field">
          <span>Preferred time (EAT)</span>
          <select value={form.time} onChange={set("time")}>
            {TIMES.map((t) => <option key={t.value} value={t.value}>{t.label}</option>)}
          </select>
        </label>
      </div>
      <label className="ent-field">
        <span>Anything we should prepare for <em>optional</em></span>
        <textarea rows={3} value={form.notes} onChange={set("notes")} />
      </label>

      <div className="ent-form-foot">
        <button type="submit" className="ent-pill ent-pill-solid" disabled={state === "sending"}>
          {state === "sending" ? "Sending..." : "Request a demo"} <ArrowRight size={13} strokeWidth={2} />
        </button>
        {state === "error" && (
          <p className="ent-form-error" role="alert">
            That did not send. Try again in a moment, or reach us through LinkedIn.
          </p>
        )}
      </div>
    </form>
  );
}
