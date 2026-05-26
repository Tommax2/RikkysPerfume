import { motion } from "framer-motion";
import categories from "../data/categories";

const catLabel = (id) => categories.find((c) => c.id === id)?.label ?? "";

const cardVariant = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

function handleCardMove(e) {
  const card = e.currentTarget;
  const rect = card.getBoundingClientRect();
  const x = ((e.clientX - rect.left) / rect.width  - 0.5) * 12;
  const y = ((e.clientY - rect.top)  / rect.height - 0.5) * -12;
  card.style.transform = `perspective(900px) rotateX(${y}deg) rotateY(${x}deg) translateY(-6px) scale(1.01)`;
}

function handleCardLeave(e) {
  e.currentTarget.style.transform = "";
}

export default function ProductCard({ product, onAdd }) {
  const { id, name, sub, family, notes, price, badge, color, accent, category, image } = product;

  return (
    <motion.article
      className="card"
      style={{ "--bg": color, "--ac": accent }}
      variants={cardVariant}
      onMouseMove={handleCardMove}
      onMouseLeave={handleCardLeave}
    >
      {/* Image area */}
      <div className="img">
        <div className="imgGlow" />
        {badge && (
          <b className="absolute right-[1.1rem] top-[1.1rem] z-[4] bg-brand px-[.58rem] py-[.24rem] text-[.52rem] font-semibold tracking-[.14em] text-cream">
            {badge}
          </b>
        )}
        <span className="absolute left-[1.1rem] top-[1.1rem] z-[4] font-serif text-[1.05rem] text-brand/40">
          {String(id).padStart(2, "0")}
        </span>
        {image ? (
          <img className="productPhoto" src={image} alt={`${name} ${sub}`} loading="lazy" />
        ) : (
          <img className="productMockup" src={`/mockups/${category}-card.svg`} alt={`${name} ${sub}`} loading="lazy" />
        )}
        <div className="shimmerOverlay" />
      </div>

      {/* Meta */}
      <div className="px-6 py-[1.65rem]">
        <div className="mb-3 flex items-center justify-between">
          <p className="text-[.53rem] uppercase tracking-[.26em] text-brand/60">{family}</p>
          <span className="rounded-full border border-brand/25 bg-brand/[.04] px-[.5rem] py-[.2rem] text-[.48rem] uppercase tracking-[.14em] text-brand/70">
            {catLabel(category)}
          </span>
        </div>

        <h3 className="mb-[.65rem] mt-[.55rem] font-serif text-[1.95rem] font-light leading-none text-ink">
          {name} <em className="italic text-brand">{sub}</em>
        </h3>
        <h4 className="text-[.61rem] leading-[1.65] tracking-[.1em] text-muted">{notes}</h4>

        <div className="mt-5 flex items-center justify-between border-t border-brand/[.14] pt-[1.1rem]">
          <strong className="font-serif text-[1.3rem] font-light text-brand">{price}</strong>
          <button
            className="flex items-center gap-[.45rem] border border-brand/35 bg-transparent px-[.85rem] py-[.52rem] font-sans text-[.57rem] uppercase tracking-[.12em] text-brand transition-[background_.3s,border-color_.3s,color_.3s,transform_.22s] hover:border-brand hover:bg-brand/10 hover:text-brand-hi hover:-translate-y-px cursor-pointer"
            type="button"
            onClick={() => onAdd(product)}
          >
            Add to Cart
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
              <line x1="12" y1="5" x2="12" y2="19" />
              <line x1="5"  y1="12" x2="19" y2="12" />
            </svg>
          </button>
        </div>
      </div>
    </motion.article>
  );
}
