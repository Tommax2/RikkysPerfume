import { motion } from "framer-motion";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.25 },
  transition: { duration: 0.7, delay, ease: "easeOut" },
});

export default function Story() {
  return (
    <section id="story" className="story">
      <div className="storyInner">
        <motion.p className="sectionLabel" {...fadeUp(0)}>
          Born in a Kitchen, Built for the World
        </motion.p>
        <motion.h2 {...fadeUp(0.12)}>
          Rikky made this <em>for you</em>
        </motion.h2>
        <motion.p className="storyBody" {...fadeUp(0.24)}>
          It started with a diffuser, two bottles of raw oud, and a rule: only make something
          she'd wear herself. No lab formulas. No focus groups. Just instinct, obsession, and
          the stubborn belief that real fragrance should feel personal — not purchased.
        </motion.p>
      </div>
    </section>
  );
}
