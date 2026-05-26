import categories from "../data/categories";

const SHORT = { all: "All", perfume: "Perfume", spray: "Spray", diffuser: "Diffuser" };

export default function CategoryBar({ active, onChange, count }) {
  return (
    <section className="relative z-[1] px-3 pb-4 pt-7 sm:px-[4vw] sm:pb-6 sm:pt-10">

      {/* Count — sits above tabs on mobile, hidden on sm+ where it moves right */}
      <p className="mb-2 text-center text-[.52rem] uppercase tracking-[.18em] text-brand/70 sm:hidden">
        {count} Creations
      </p>

      <div className="flex items-center gap-3">
        {/* Tab group — full width, each tab flex-1 */}
        <div
          className="flex flex-1 gap-[3px] rounded-full border border-brand/20 p-[3px] backdrop-blur-[8px]"
          style={{ background: "rgba(237,231,246,.92)" }}
          role="tablist"
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              role="tab"
              aria-selected={active === cat.id}
              className={`catTab flex-1 whitespace-nowrap rounded-full border-none bg-transparent py-[.55rem] font-sans text-[.52rem] uppercase tracking-[.1em] cursor-pointer transition-[color_.25s,background_.25s,transform_.2s] sm:py-[.62rem] sm:text-[.6rem] sm:tracking-[.18em] sm:px-5 hover:bg-brand/[.08] hover:text-ink${active === cat.id ? " active bg-brand text-cream" : " text-muted"}`}
              onClick={() => onChange(cat.id)}
            >
              {/* short label on mobile, full label on sm+ */}
              <span className="sm:hidden">{SHORT[cat.id]}</span>
              <span className="hidden sm:inline">{cat.label}</span>
            </button>
          ))}
        </div>

        {/* Count badge — inline on sm+, hidden on mobile (shown above) */}
        <p className="hidden shrink-0 rounded-full border border-brand/[.18] bg-white/45 px-3 py-[.42rem] text-[.56rem] uppercase tracking-[.18em] text-brand/80 sm:block sm:px-[.75rem] sm:py-[.45rem] sm:text-[.58rem]">
          {count} Creations
        </p>
      </div>

    </section>
  );
}
