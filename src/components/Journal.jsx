import { motion } from "framer-motion";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.65, delay, ease: "easeOut" },
});

export default function Journal() {
  return (
    <section
      id="journal"
      className="journalSection relative z-[1] grid place-items-center overflow-hidden px-[4vw] pb-36 pt-28"
      style={{ background: "radial-gradient(ellipse at 50% 110%,rgba(106,13,173,.07),transparent 52%)" }}
    >
      <div className="relative z-[1] max-w-[480px] text-center">
        <motion.p className="sectionLabel" {...fadeUp(0)}>The Drop</motion.p>

        <motion.h2
          className="mb-4 font-serif text-[clamp(2rem,4.5vw,3.4rem)] font-light leading-none"
          {...fadeUp(0.1)}
        >
          New blends. First look. <em className="italic text-brand">Your inbox.</em>
        </motion.h2>

        <motion.p
          className="mb-10 text-[.76rem] leading-[1.9] tracking-[.07em] text-muted"
          {...fadeUp(0.2)}
        >
          Rikky sends updates herself — new batches, sold-out restocks, the occasional scent story. No newsletter fluff.
        </motion.p>

        <motion.form
          className="flex shadow-[0_8px_40px_rgba(106,13,173,.1)]"
          onSubmit={(e) => e.preventDefault()}
          {...fadeUp(0.32)}
        >
          <input
            placeholder="your@email.com"
            type="email"
            className="min-w-0 flex-1 border border-r-0 border-brand/25 bg-deep/90 px-5 py-[.9rem] font-sans text-[.64rem] tracking-[.1em] text-ink outline-none transition-[border-color_.3s] placeholder:text-ink/35 focus:border-brand/50 sm:min-w-[250px]"
          />
          <button
            type="submit"
            className="shimmerBtn relative overflow-hidden border-none bg-brand px-6 py-[.9rem] font-sans text-[.6rem] uppercase tracking-[.2em] text-cream transition-[background_.3s] hover:bg-brand-hi whitespace-nowrap cursor-pointer"
          >
            Count Me In
          </button>
        </motion.form>
      </div>
    </section>
  );
}
