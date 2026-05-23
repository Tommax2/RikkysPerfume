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
    <section className="stats">
      {stats.map(({ value, label }, i) => (
        <Fragment key={value}>
          <motion.div
            className="stat"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.55, delay: i * 0.1, ease: "easeOut" }}
          >
            <strong>{value}</strong>
            <span>{label}</span>
          </motion.div>
          {i < stats.length - 1 && <div className="statDiv" />}
        </Fragment>
      ))}
    </section>
  );
}
