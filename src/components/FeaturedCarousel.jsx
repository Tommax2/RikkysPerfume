import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const featured = [
  { id: 1, name: "Khamrah Qahwa", sub: "Lattafa",   notes: "Oud · Coffee · Vanilla",           price: "₦34,000", badge: "Bestseller", accent: "#C9A96E", image: "/EAU%20DE%20PARFUM.jpg" },
  { id: 2, name: "9PM Rebel",     sub: "Afnan",     notes: "Apple · Cardamom · Amber",          price: "₦50,000", badge: "New",        accent: "#C84050", image: "/9pm%20rebel.jpg"         },
  { id: 3, name: "Teuori",        sub: "Signature", notes: "Rose · Jasmine · Musk",             price: "₦18,000", badge: "Fan Fav",    accent: "#E8943A", image: "/Teuori.jpg"              },
  { id: 4, name: "Vintage Radio", sub: "Lattafa",   notes: "Sandalwood · Cedar · Vetiver",      price: "₦25,000", badge: "Limited",    accent: "#A07CFF", image: "/Vintage%20Radio.jpg"     },
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
      className="relative overflow-hidden border-b border-brand-hi/10 px-[4vw] pb-12 pt-14"
      style={{ background: "linear-gradient(180deg,rgba(59,10,69,0) 0%,rgba(59,10,69,.08) 100%)" }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Header row */}
      <header className="mb-8 flex items-center justify-between">
        <span className="text-[.58rem] uppercase tracking-[.3em] text-brand-hi/65">Featured Picks</span>
        <div className="flex gap-[.4rem]">
          {[prev, next].map((fn, i) => (
            <button
              key={i}
              onClick={fn}
              className="grid h-8 w-8 cursor-pointer place-items-center rounded-full border border-brand-hi/20 bg-brand-hi/[.05] text-brand-hi/60 transition-[border-color_.2s,color_.2s] hover:border-brand-hi hover:text-brand-hi"
              aria-label={i === 0 ? "Previous" : "Next"}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                {i === 0
                  ? <polyline points="15 18 9 12 15 6" />
                  : <polyline points="9 18 15 12 9 6" />}
              </svg>
            </button>
          ))}
        </div>
      </header>

      {/* Track */}
      <div className="relative flex h-[400px] items-center justify-center sm:h-[360px]">
        {featured.map((item, i) => {
          const offset = (i - active + featured.length) % featured.length;
          const isActive = offset === 0;
          const isNext   = offset === 1;
          const isPrev   = offset === featured.length - 1;

          return (
            <motion.article
              key={item.id}
              className={`absolute overflow-hidden rounded-2xl border bg-white/[.04] cursor-pointer will-change-[transform,opacity] transition-[border-color_.3s] ${isActive ? "border-brand-hi/28" : "border-brand-hi/14"}`}
              style={{
                width: "min(320px,80vw)",
                "--ac": item.accent,
                boxShadow: isActive ? "0 20px 60px rgba(0,0,0,.35)" : undefined,
              }}
              onClick={() => !isActive && setActive(i)}
              animate={{
                x:       isActive ? 0 : isNext ? "calc(100% + 16px)" : "calc(-100% - 16px)",
                opacity: isActive ? 1 : (isNext || isPrev) ? 0.35 : 0,
                scale:   isActive ? 1 : 0.9,
                zIndex:  isActive ? 2 : 1,
              }}
              transition={{ duration: 0.48, ease: [0.32, 0.72, 0, 1] }}
            >
              {/* Image */}
              <div className="relative h-[240px] overflow-hidden bg-brand-hi/[.06] sm:h-[200px]">
                <div className="fcardGlow" />
                <img
                  src={item.image}
                  alt={`${item.name} ${item.sub}`}
                  className={`block h-full w-full object-cover object-top transition-transform duration-[600ms] ${isActive ? "hover:scale-[1.04]" : ""}`}
                  loading="lazy"
                />
                <span
                  className="absolute right-3 top-3 rounded-[30px] px-[.65rem] py-[.22rem] text-[.5rem] font-medium uppercase tracking-[.18em] text-white"
                  style={{ background: item.accent, boxShadow: "0 3px 10px rgba(0,0,0,.25)" }}
                >
                  {item.badge}
                </span>
              </div>

              {/* Body */}
              <div className="px-5 pb-5 pt-[1.1rem]">
                <p className="mb-[.4rem] text-[.57rem] tracking-[.1em] text-brand-hi/50">{item.notes}</p>
                <h3 className="mb-[.85rem] overflow-hidden text-ellipsis whitespace-nowrap font-serif text-[1.15rem] font-normal tracking-[.01em] text-brand-hi/92">
                  {item.name} <em className="italic text-brand-hi/75">{item.sub}</em>
                </h3>
                <div className="flex items-center justify-between">
                  <strong className="font-serif text-[1.1rem] font-normal text-brand-hi/90">{item.price}</strong>
                  {isActive && (
                    <button
                      className="flex items-center gap-[.35rem] rounded-md border-none px-[.9rem] py-[.42rem] font-sans text-[.6rem] uppercase tracking-[.1em] text-white transition-[opacity_.2s,transform_.18s] hover:opacity-85 hover:-translate-y-px cursor-pointer"
                      style={{ background: item.accent }}
                      onClick={(e) => { e.stopPropagation(); onAdd?.({ ...item, category: "perfume" }); }}
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
      <div className="mt-7 flex items-center justify-center gap-[.45rem]">
        {featured.map((_, i) => (
          <button
            key={i}
            className={`fcarouselDot${i === active ? " active" : ""}`}
            onClick={() => setActive(i)}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Progress bar */}
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
