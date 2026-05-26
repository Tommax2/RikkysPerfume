export default function Toast({ message }) {
  if (!message) return null;
  return (
    <aside
      className="fixed bottom-6 right-6 z-[200] border border-brand-hi/50 px-5 py-[.9rem] text-[.64rem] tracking-[.1em] text-brand-hi backdrop-blur-[12px]"
      style={{
        background: "rgba(59,10,69,.97)",
        animation: "fadeUp .38s ease",
        boxShadow: "0 8px 32px rgba(106,13,173,.2)",
      }}
      role="status"
    >
      {message}
    </aside>
  );
}
