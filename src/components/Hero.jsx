import { motion } from "framer-motion";

const TRUST = [
  { icon: "✓", text: "100% Authentic" },
  { icon: "⚡", text: "Fast Delivery"  },
  { icon: "🔒", text: "Secure Payment" },
];

/* Reusable fade-up variant */
const up = (delay = 0, y = 30) => ({
  initial: { opacity: 0, y },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] },
});

/* Scent notes that orbit the image */
const NOTES = [
  { label: "Oud",      pos: "top-[12%] left-[-18px]"    },
  { label: "Vanilla",  pos: "top-[35%] right-[-22px]"   },
  { label: "Amber",    pos: "bottom-[28%] left-[-24px]"  },
  { label: "Rose",     pos: "bottom-[14%] right-[-18px]" },
];

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden bg-page"
      style={{ paddingTop: "var(--banner-h,44px)" }}
    >
      {/* grid-noise background */}
      <div className="heroBg" aria-hidden><div className="noise" /></div>

      {/* ─────────────────────────────────────────────────────────
          DESKTOP  (lg+)  —  asymmetric magazine split
      ───────────────────────────────────────────────────────── */}
      <div className="hidden min-h-screen lg:grid lg:grid-cols-[1fr_1fr] xl:grid-cols-[1.1fr_.9fr]">

        {/* ── LEFT text panel ── */}
        <div
          className="relative z-10 flex flex-col justify-center px-[6vw] py-28"
          style={{ paddingTop: "calc(7rem + var(--banner-h,44px))" }}
        >
          {/* eyebrow */}
          <motion.div
            className="mb-7 inline-flex w-fit items-center gap-2 rounded-full border border-brand/20 bg-brand/[.06] px-4 py-[.4rem] text-[.58rem] uppercase tracking-[.24em] text-brand"
            {...up(0.08)}
          >
            <span className="tagDot" />
            Grand Opening Sale · Limited Time
          </motion.div>

          {/* headline */}
          <div className="overflow-hidden mb-2">
            <motion.p
              className="font-serif text-[.7rem] uppercase tracking-[.38em] text-muted mb-3"
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.18 }}
            >
              Rikky's Perfumes
            </motion.p>
          </div>

          <motion.h1
            className="mb-6 font-serif leading-[.92] text-ink"
            style={{ fontSize: "clamp(3.2rem, 6vw, 5.8rem)", fontWeight: 300 }}
            {...up(0.26, 40)}
          >
            Discover<br />
            Your <em className="italic text-brand">Signature</em><br />
            Scent
          </motion.h1>

          {/* thin ruled line */}
          <motion.div
            className="mb-7 h-px w-16 bg-brand/30"
            initial={{ scaleX: 0, originX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.22,1,.36,1] }}
          />

          <motion.p
            className="mb-8 max-w-[40ch] text-[.82rem] leading-[1.95] tracking-[.04em] text-muted"
            {...up(0.4)}
          >
            Premium fragrances for every occasion. Authentic brands, unbeatable prices — delivered fast across Nigeria.
          </motion.p>

          {/* discount pill */}
          <motion.div
            className="mb-8 inline-flex w-fit flex-wrap items-center gap-3 rounded-full border border-brand/[.18] bg-brand/[.06] px-5 py-[.55rem] text-[.7rem] tracking-[.04em] text-muted"
            {...up(0.5)}
          >
            <span className="rounded-full bg-brand px-3 py-[.2rem] text-[.62rem] font-bold tracking-[.08em] text-cream">
              15% OFF
            </span>
            <span>First order · Code: <strong className="text-brand">RIKKY15</strong></span>
          </motion.div>

          {/* CTA row */}
          <motion.div className="mb-10 flex flex-wrap items-center gap-5" {...up(0.58)}>
            <a className="cta" href="#collection">Shop Collection</a>
            <a className="cta-ghost" href="#story">Our Story</a>
          </motion.div>

          {/* trust */}
          <motion.div className="flex flex-wrap gap-6" {...up(0.68)}>
            {TRUST.map((b) => (
              <div key={b.text} className="flex items-center gap-[.4rem] text-[.6rem] tracking-[.1em] text-muted">
                <span className="text-brand">{b.icon}</span>
                {b.text}
              </div>
            ))}
          </motion.div>
        </div>

        {/* ── RIGHT image panel ── */}
        <motion.div
          className="relative flex items-center justify-center overflow-hidden"
          style={{ background: "linear-gradient(135deg,#EDE7F6 0%,#F3D9FF 55%,#EDE7F6 100%)" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.1 }}
        >
          {/* large soft glow blob */}
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background: "radial-gradient(ellipse at 50% 60%, rgba(181,124,255,.25) 0%, transparent 65%)",
            }}
          />

          {/* subtle dot grid */}
          <div
            className="pointer-events-none absolute inset-0 opacity-40"
            style={{
              backgroundImage: "radial-gradient(circle, rgba(106,13,173,.18) 1px, transparent 1px)",
              backgroundSize: "28px 28px",
            }}
          />

          {/* Product image — no overlay, plain photo */}
          <motion.div
            className="relative z-10"
            style={{ animation: "float 7s ease-in-out infinite" }}
            initial={{ opacity: 0, y: 40, scale: 0.94 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <div
              className="overflow-hidden rounded-[28px]"
              style={{
                width: "min(340px,38vw)",
                height: "min(480px,56vh)",
                boxShadow: "0 48px 100px rgba(59,10,69,.22), 0 0 0 1.5px rgba(181,124,255,.18)",
              }}
            >
              <img
                src="/EAU%20DE%20PARFUM.jpg"
                alt="Featured perfume"
                className="h-full w-full object-cover object-center"
              />
            </div>

            {/* Scent note chips orbiting the frame */}
            {NOTES.map(({ label, pos }, i) => (
              <motion.span
                key={label}
                className={`absolute ${pos} rounded-full border border-brand/20 bg-white/90 px-3 py-1 text-[.55rem] font-medium uppercase tracking-[.16em] text-brand/80 backdrop-blur-sm shadow-sm`}
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.9 + i * 0.15, duration: 0.5, ease: [0.34,1.56,.64,1] }}
              >
                {label}
              </motion.span>
            ))}
          </motion.div>

          {/* Vertical "Est. 2024" */}
          <motion.p
            className="absolute bottom-12 right-6 z-10 flex flex-col items-center gap-3 text-[.48rem] uppercase tracking-[.4em] text-brand/30 [writing-mode:vertical-rl]"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ delay: 1.4 }}
            aria-hidden
          >
            <span
              className="h-10 w-px"
              style={{ background: "linear-gradient(to bottom,transparent,rgba(106,13,173,.22))" }}
            />
            Est. 2024
          </motion.p>
        </motion.div>
      </div>

      {/* ─────────────────────────────────────────────────────────
          MOBILE  (< lg)  —  cinematic full-bleed image + text
      ───────────────────────────────────────────────────────── */}
      <div className="relative flex min-h-screen flex-col lg:hidden">

        {/* Full-bleed clean product image */}
        <motion.div
          className="relative h-[58vh] min-h-[300px] w-full overflow-hidden"
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.15, ease: [0.22, 1, 0.36, 1] }}
        >
          <img
            src="/EAU%20DE%20PARFUM.jpg"
            alt="Featured perfume"
            className="h-full w-full object-cover object-center"
          />

          {/* Bottom fade to page bg — clean, no text overlay on image */}
          <div
            className="absolute inset-x-0 bottom-0 h-[55%]"
            style={{
              background: "linear-gradient(to bottom, transparent, rgba(250,248,252,.6) 60%, #FAF8FC 100%)",
            }}
          />

          {/* Top vignette */}
          <div
            className="absolute inset-x-0 top-0 h-24"
            style={{
              background: "linear-gradient(to bottom, rgba(59,10,69,.18), transparent)",
            }}
          />

          {/* Floating scent notes — top left, subtle */}
          <motion.div
            className="absolute left-4 top-5 flex flex-wrap gap-1.5"
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7, duration: 0.6, ease: [0.22,1,.36,1] }}
          >
            {["Oud", "Vanilla", "Amber"].map((note, i) => (
              <motion.span
                key={note}
                className="rounded-full border border-white/30 bg-white/20 px-2.5 py-[.28rem] text-[.5rem] uppercase tracking-[.14em] text-white/90 backdrop-blur-[6px]"
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.75 + i * 0.1, duration: 0.4, ease: [0.34,1.56,.64,1] }}
              >
                {note}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>

        {/* Text content */}
        <div className="relative z-10 flex flex-1 flex-col justify-center px-5 pb-12 pt-3 sm:px-8">
          {/* eyebrow */}
          <motion.div
            className="mb-4 inline-flex w-fit items-center gap-2 rounded-full border border-brand/20 bg-brand/[.07] px-4 py-[.35rem] text-[.55rem] uppercase tracking-[.2em] text-brand"
            {...up(0.25)}
          >
            <span className="tagDot" />
            Grand Opening Sale
          </motion.div>

          <motion.h1
            className="mb-4 font-serif font-light leading-[.95] text-ink"
            style={{ fontSize: "clamp(2.5rem,9.5vw,3.8rem)" }}
            {...up(0.35, 24)}
          >
            Discover Your<br />
            <em className="italic text-brand">Signature Scent</em>
          </motion.h1>

          {/* thin rule */}
          <motion.div
            className="mb-5 h-px w-12 bg-brand/30"
            initial={{ scaleX: 0, originX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          />

          <motion.p
            className="mb-6 max-w-[38ch] text-[.76rem] leading-[1.9] tracking-[.03em] text-muted"
            {...up(0.48)}
          >
            Premium fragrances at unbeatable prices — delivered fast across Nigeria.
          </motion.p>

          {/* discount */}
          <motion.div
            className="mb-6 inline-flex w-fit items-center gap-3 rounded-full border border-brand/[.15] bg-brand/[.06] px-4 py-[.52rem] text-[.66rem] tracking-[.04em] text-muted"
            {...up(0.56)}
          >
            <span className="rounded-full bg-brand px-3 py-[.18rem] text-[.58rem] font-bold tracking-[.08em] text-cream">
              15% OFF
            </span>
            <span>Code: <strong className="text-brand">RIKKY15</strong></span>
          </motion.div>

          {/* CTAs */}
          <motion.div className="mb-7 flex flex-wrap gap-3" {...up(0.63)}>
            <a className="cta flex-1 text-center text-[.6rem]" href="#collection">Shop Collection</a>
            <a className="cta-ghost self-center text-[.6rem]" href="#story">Our Story</a>
          </motion.div>

          {/* trust badges */}
          <motion.div className="flex flex-wrap gap-4" {...up(0.72)}>
            {TRUST.map((b) => (
              <div key={b.text} className="flex items-center gap-[.38rem] text-[.58rem] tracking-[.08em] text-muted">
                <span className="text-[.76rem] text-brand">{b.icon}</span>
                {b.text}
              </div>
            ))}
          </motion.div>
        </div>

        {/* Scroll cue */}
        <motion.div
          className="absolute bottom-5 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, .45, 0] }}
          transition={{ duration: 2, delay: 2.2, repeat: Infinity }}
          aria-hidden
        >
          <span className="text-[.46rem] uppercase tracking-[.2em] text-brand/50">Explore</span>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-brand/50">
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </motion.div>
      </div>
    </section>
  );
}
