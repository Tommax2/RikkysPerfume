import { motion } from "framer-motion";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.65, delay, ease: "easeOut" },
});

export default function Journal() {
  return (
    <section id="journal" className="journal">
      <div className="journalInner">
        <motion.p className="sectionLabel" {...fadeUp(0)}>The Drop</motion.p>
        <motion.h2 {...fadeUp(0.1)}>
          New blends. First look. <em>Your inbox.</em>
        </motion.h2>
        <motion.p {...fadeUp(0.2)}>
          Rikky sends updates herself — new batches, sold-out restocks, the occasional scent story. No newsletter fluff.
        </motion.p>
        <motion.div className="journalForm" {...fadeUp(0.32)}>
          <input placeholder="your@email.com" type="email" />
          <button>Count Me In</button>
        </motion.div>
      </div>
    </section>
  );
}
