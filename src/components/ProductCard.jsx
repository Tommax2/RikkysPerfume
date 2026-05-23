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
      <div className="img">
        <div className="imgGlow" />
        {badge && <b className="badge">{badge}</b>}
        <span className="num">{String(id).padStart(2, "0")}</span>
        {image ? (
          <img className="productPhoto" src={image} alt={`${name} ${sub}`} loading="lazy" />
        ) : (
          <img className="productMockup" src={`/mockups/${category}-card.svg`} alt={`${name} ${sub}`} loading="lazy" />
        )}
        <div className="shimmerOverlay" />
      </div>

      <div className="meta">
        <div className="metaTop">
          <p className="family">{family}</p>
          <span className="catPill">{catLabel(category)}</span>
        </div>
        <h3>{name} <em>{sub}</em></h3>
        <h4>{notes}</h4>
        <div className="cardBottom">
          <strong className="price">{price}</strong>
          <button className="addBtn" type="button" onClick={() => onAdd(product)}>
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
