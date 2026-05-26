import { Fragment } from "react";
import { motion } from "framer-motion";

const stats = [
  { value: "18+",  label: "Blends in the House"   },
  { value: "4",    label: "Lines, Zero Compromise" },
  { value: "0",    label: "Synthetic Shortcuts"    },
  { value: "100%", label: "Handpoured"             },
];

export default function Stats() {
  return (
    <section
      className="relative z-[1] flex flex-wrap items-center justify-center gap-y-8 border-y border-brand/20 px-[4vw] py-14"
      style={{ background: "rgba(59,10,69,.9)" }}
    >
      {stats.map(({ value, label }, i) => (
        <Fragment key={value}>
          <motion.div
            className="px-[4.5vw] text-center"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.55, delay: i * 0.1, ease: "easeOut" }}
          >
            <strong className="statValue">{value}</strong>
            <span className="block text-[.57rem] uppercase tracking-[.26em] text-brand-hi/70">{label}</span>
          </motion.div>
          {i < stats.length - 1 && (
            <div className="hidden h-11 w-px bg-brand-hi/25 sm:block" />
          )}
        </Fragment>
      ))}
    </section>
  );
}
