import { motion } from "framer-motion";
import Divider from "../components/Divider";
import Stats   from "../components/Stats";

const up = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
});

const VALUES = [
  {
    icon: "🌿",
    title: "100% Authentic",
    desc: "Every bottle is sourced directly from certified suppliers. No fakes, no grey market — your trust is everything.",
  },
  {
    icon: "🤍",
    title: "Made with Care",
    desc: "Rikky personally curates every scent. If she wouldn't wear it, it doesn't make the shelf.",
  },
  {
    icon: "🚀",
    title: "Fast Delivery",
    desc: "Same-day delivery in Ilorin. Nationwide shipping across Nigeria, fast and reliable.",
  },
  {
    icon: "💬",
    title: "Always Here",
    desc: "Real humans on WhatsApp, 24/7. Order, ask questions, or just chat about fragrance.",
  },
];

export default function AboutPage() {
  return (
    <div className="relative z-[1] pt-[calc(var(--banner-h,44px)+56px)]">

      {/* ── Hero ─────────────────────────────────────────── */}
      <section
        className="relative grid min-h-[55vh] place-items-center overflow-hidden px-[4vw] pb-20 pt-16 text-center sm:pt-24"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%,rgba(106,13,173,.09),transparent 62%), linear-gradient(to bottom,transparent,rgba(237,231,246,.45),transparent)",
        }}
      >
        <div className="heroBg" aria-hidden><div className="noise" /></div>

        <div className="relative z-[1] max-w-[640px]">
          <motion.div
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand/20 bg-brand/[.06] px-4 py-[.4rem] text-[.58rem] uppercase tracking-[.22em] text-brand"
            {...up(0.05)}
          >
            <span className="tagDot" />
            Born in Ilorin, Loved Everywhere
          </motion.div>

          <motion.h1
            className="mb-6 font-serif text-[clamp(2.4rem,7vw,5rem)] font-light leading-[.95] text-ink"
            {...up(0.15)}
          >
            The Story Behind<br />
            <em className="italic text-brand">Rikky's</em>
          </motion.h1>

          <motion.div
            className="mx-auto mb-8 h-px w-14 bg-brand/30"
            initial={{ scaleX: 0, originX: 0.5 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.35 }}
          />

          <motion.p
            className="mx-auto max-w-[46ch] text-[.8rem] leading-[2] tracking-[.05em] text-muted"
            {...up(0.3)}
          >
            It started with a diffuser, two bottles of raw oud, and one rule — only sell
            something she'd wear herself. No lab formulas. No focus groups. Just instinct,
            obsession, and the stubborn belief that real fragrance should feel personal.
          </motion.p>
        </div>
      </section>

      <Divider />

      {/* ── Story detail ─────────────────────────────────── */}
      <section className="story relative z-[1] overflow-hidden px-[4vw] py-20">
        <div className="mx-auto grid max-w-[1100px] items-center gap-12 md:grid-cols-2 md:gap-20">
          {/* Image */}
          <motion.div
            className="overflow-hidden rounded-[18px]"
            style={{ boxShadow: "0 32px 72px rgba(106,13,173,.14)" }}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <img
              src="/EAU%20DE%20PARFUM.jpg"
              alt="Rikky's signature perfume"
              className="aspect-[4/5] w-full object-cover"
            />
          </motion.div>

          {/* Text */}
          <div>
            <motion.p
              className="sectionLabel mb-6 justify-start"
              initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
              viewport={{ once: true }} transition={{ duration: 0.5 }}
            >
              Our Story
            </motion.p>

            {[
              "Rikky's Perfumes started the way the best things do — out of pure love. Rikky was tired of paying premium prices for fragrances that didn't last, buying from stores where authenticity was a gamble, and being told that luxury scents were out of reach for most Nigerians.",
              "So she built something different. A curated house where every bottle is personally vetted, every price is honest, and every customer is treated like a friend. From reed diffusers for the home to deep oriental oud for special occasions — Rikky's has a scent for every chapter of your life.",
              "Today, Rikky's ships across Nigeria with the same passion that started in that small kitchen in Ilorin. The mission hasn't changed: make world-class fragrance accessible, personal, and real.",
            ].map((text, i) => (
              <motion.p
                key={i}
                className="mb-5 text-[.78rem] leading-[2] tracking-[.04em] text-muted last:mb-0"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.65, delay: i * 0.1 }}
              >
                {text}
              </motion.p>
            ))}

            <motion.a
              href="/collection"
              className="cta mt-8 inline-block"
              initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
              viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.35 }}
            >
              Shop the Collection
            </motion.a>
          </div>
        </div>
      </section>

      <Divider />

      {/* ── Values ───────────────────────────────────────── */}
      <section
        className="relative z-[1] px-[4vw] py-20"
        style={{ background: "radial-gradient(ellipse at 50% 0%,rgba(106,13,173,.05),transparent 60%)" }}
      >
        <p className="sectionLabel">What We Stand For</p>
        <h2 className="mb-14 text-center font-serif text-[clamp(1.8rem,4vw,3rem)] font-light leading-[1.1]">
          Our <em className="italic text-brand">Promise</em> to You
        </h2>

        <div className="mx-auto grid max-w-[1100px] grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {VALUES.map((v, i) => (
            <motion.div
              key={v.title}
              className="rounded-md border border-brand/10 bg-deep px-6 py-8 transition-[transform_.3s,box-shadow_.3s,border-color_.3s] hover:-translate-y-[5px] hover:border-brand/25 hover:shadow-[0_20px_50px_rgba(106,13,173,.11)]"
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
            >
              <span className="mb-4 block text-[2rem]">{v.icon}</span>
              <h3 className="mb-2 font-serif text-[1.05rem] font-medium tracking-[.04em] text-ink">{v.title}</h3>
              <p className="text-[.7rem] leading-[1.85] tracking-[.04em] text-muted">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <Divider />
      <Stats />
      <Divider />

      {/* ── Contact CTA ──────────────────────────────────── */}
      <section className="relative z-[1] px-[4vw] py-20 text-center">
        <motion.p
          className="sectionLabel"
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
          viewport={{ once: true }} transition={{ duration: 0.5 }}
        >
          Get in Touch
        </motion.p>
        <motion.h2
          className="mb-5 font-serif text-[clamp(1.8rem,4vw,3rem)] font-light"
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
        >
          We'd Love to <em className="italic text-brand">Hear from You</em>
        </motion.h2>
        <motion.p
          className="mx-auto mb-8 max-w-[40ch] text-[.76rem] leading-[1.9] tracking-[.04em] text-muted"
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
          viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}
        >
          Questions about a scent? Custom orders? Just want to talk fragrance?
          Rikky is always on WhatsApp.
        </motion.p>
        <motion.a
          href="https://wa.me/2348060858306"
          className="cta"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }}
        >
          Chat on WhatsApp
        </motion.a>
      </section>

    </div>
  );
}
