export function Eyebrow({ text }: { text: string }) {
  return (
    <div className="ent-eyebrow">
      <span className="ent-rule" />
      <span>{text}</span>
    </div>
  );
}
