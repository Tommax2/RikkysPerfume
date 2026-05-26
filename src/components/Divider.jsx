export default function Divider() {
  return (
    <div className="relative z-[1] flex items-center gap-5 px-[4vw]" aria-hidden>
      <span
        className="h-px flex-1"
        style={{ background: "linear-gradient(to right,transparent,rgba(106,13,173,.2),transparent)" }}
      />
      <div
        className="h-2 w-2 flex-shrink-0 rotate-45 bg-brand opacity-55"
        style={{ boxShadow: "0 0 12px rgba(106,13,173,.4)" }}
      />
      <span
        className="h-px flex-1"
        style={{ background: "linear-gradient(to right,transparent,rgba(106,13,173,.2),transparent)" }}
      />
    </div>
  );
}
