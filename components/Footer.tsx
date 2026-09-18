import { ENTRORA_LINKEDIN, NEWSLETTER_URL } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="ent-footer">
      <div className="ent-wrap ent-footer-inner">
        <div>
          <strong>Entrora Systems</strong>
          <span>Legal Engineering, Nairobi</span>
        </div>
        <div className="ent-footer-links">
          <a href={ENTRORA_LINKEDIN} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href={NEWSLETTER_URL} target="_blank" rel="noopener noreferrer">Lex &amp; Latte</a>
        </div>
      </div>
    </footer>
  );
}
