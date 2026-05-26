import { motion } from "framer-motion";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.25 },
  transition: { duration: 0.7, delay, ease: "easeOut" },
});

export default function Story() {
  return (
    <section
      id="story"
      className="story relative z-[1] grid min-h-[60vh] place-items-center overflow-hidden px-[4vw] py-28"
      style={{
        background: `
          radial-gradient(ellipse at 50% 50%,rgba(106,13,173,.07),transparent 58%),
          linear-gradient(to bottom,transparent,rgba(237,231,246,.6),transparent)
        `,
      }}
    >
      <div className="relative z-[1] max-w-[680px] text-center">
        <motion.p className="sectionLabel" {...fadeUp(0)}>
          Born in a Kitchen, Built for the World
        </motion.p>

        <motion.h2
          className="mb-[1.6rem] font-serif text-[clamp(2.2rem,5.5vw,4.2rem)] font-light leading-[1.08]"
          {...fadeUp(0.12)}
        >
          Rikky made this <em className="italic text-brand">for you</em>
        </motion.h2>

        <motion.p
          className="text-[.8rem] leading-[2] tracking-[.06em] text-muted"
          {...fadeUp(0.24)}
        >
          It started with a diffuser, two bottles of raw oud, and a rule: only make something
          she'd wear herself. No lab formulas. No focus groups. Just instinct, obsession, and
          the stubborn belief that real fragrance should feel personal — not purchased.
        </motion.p>
      </div>
    </section>
  );
}
