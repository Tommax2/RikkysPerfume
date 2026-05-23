import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const featured = [
  {
    id: 1, name: "Khamrah Qahwa", sub: "Lattafa",
    notes: "Oud · Coffee · Vanilla",
    price: "₦34,000", badge: "Bestseller",
    accent: "#C9A96E", image: "/EAU%20DE%20PARFUM.jpg",
  },
  {
    id: 2, name: "9PM Rebel", sub: "Afnan",
    notes: "Apple · Cardamom · Amber",
    price: "₦50,000", badge: "New",
    accent: "#C84050", image: "/9pm%20rebel.jpg",
  },
  {
    id: 3, name: "Teuori", sub: "Signature",
    notes: "Rose · Jasmine · Musk",
    price: "₦18,000", badge: "Fan Fav",
    accent: "#E8943A", image: "/Teuori.jpg",
  },
  {
    id: 4, name: "Vintage Radio", sub: "Lattafa",
    notes: "Sandalwood · Cedar · Vetiver",
    price: "₦25,000", badge: "Limited",
    accent: "#A07CFF", image: "/Vintage%20Radio.jpg",
  },
];

export default function FeaturedCarousel({ onAdd }) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => setActive((i) => (i + 1) % featured.length), []);
  const prev = useCallback(() => setActive((i) => (i - 1 + featured.length) % featured.length), []);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(next, 4500);
    return () => clearInterval(id);
  }, [paused, next]);

  return (
    <section
      className="fcarousel"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <header className="fcarouselHeader">
        <span className="fcarouselLabel">Featured Picks</span>
        <div className="fcarouselArrows">
          <button onClick={prev} className="fcarouselArrow" aria-label="Previous">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden><polyline points="15 18 9 12 15 6" /></svg>
          </button>
          <button onClick={next} className="fcarouselArrow" aria-label="Next">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden><polyline points="9 18 15 12 9 6" /></svg>
          </button>
        </div>
      </header>

      <div className="fcarouselTrack">
        {featured.map((item, i) => {
          const offset = (i - active + featured.length) % featured.length;
          const isActive = offset === 0;
          const isNext   = offset === 1;
          const isPrev   = offset === featured.length - 1;

          return (
            <motion.article
              key={item.id}
              className={`fcard${isActive ? " fcard--active" : ""}`}
              onClick={() => !isActive && setActive(i)}
              animate={{
                x:       isActive ? 0 : isNext ? "calc(100% + 16px)" : "calc(-100% - 16px)",
                opacity: isActive ? 1 : isNext || isPrev ? 0.35 : 0,
                scale:   isActive ? 1 : 0.9,
                zIndex:  isActive ? 2 : 1,
              }}
              transition={{ duration: 0.48, ease: [0.32, 0.72, 0, 1] }}
              style={{ "--ac": item.accent }}
            >
              <div className="fcardImgWrap">
                <div className="fcardGlow" />
                <img src={item.image} alt={`${item.name} ${item.sub}`} className="fcardImg" loading="lazy" />
                <span className="fcardBadge">{item.badge}</span>
              </div>
              <div className="fcardBody">
                <p className="fcardNotes">{item.notes}</p>
                <h3 className="fcardName">{item.name} <em>{item.sub}</em></h3>
                <div className="fcardFoot">
                  <strong className="fcardPrice">{item.price}</strong>
                  {isActive && (
                    <button
                      className="fcardBtn"
                      onClick={(e) => { e.stopPropagation(); onAdd && onAdd({ ...item, category: "perfume" }); }}
                      type="button"
                    >
                      Add
                      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden>
                        <line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" />
                      </svg>
                    </button>
                  )}
                </div>
              </div>
            </motion.article>
          );
        })}
      </div>

      {/* Dots */}
      <div className="fcarouselDots">
        {featured.map((_, i) => (
          <button
            key={i}
            className={`fcarouselDot${i === active ? " active" : ""}`}
            onClick={() => setActive(i)}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Progress line */}
      {!paused && (
        <motion.div
          key={active}
          className="fcarouselBar"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 4.5, ease: "linear" }}
        />
      )}
    </section>
  );
}
