import categories from "../data/categories";

export default function CategoryBar({ active, onChange, count }) {
  return (
    <section className="catBar">
      <div className="catTabs" role="tablist">
        {categories.map((cat) => (
          <button
            key={cat.id}
            role="tab"
            aria-selected={active === cat.id}
            className={`catTab${active === cat.id ? " active" : ""}`}
            onClick={() => onChange(cat.id)}
          >
            {cat.label}
          </button>
        ))}
      </div>
      <p className="catCount">{count} Creations</p>
    </section>
  );
}
