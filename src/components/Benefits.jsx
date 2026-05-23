import { motion } from "framer-motion";

const items = [
  { icon: "🔐", title: "100% Authentic", desc: "All products are genuine and sourced directly from certified suppliers — no fakes, ever." },
  { icon: "🚚", title: "Fast Delivery",  desc: "Nationwide delivery across Nigeria. Same-day available in Ilorin." },
  { icon: "💜", title: "Best Prices",    desc: "Premium brands at unbeatable prices. No middleman, no markup." },
  { icon: "💬", title: "24/7 Support",   desc: "We're always on WhatsApp. Order, ask questions, or just say hi." },
];

const container = { hidden: {}, show: { transition: { staggerChildren: 0.13 } } };
const card = { hidden: { opacity: 0, y: 36 }, show: { opacity: 1, y: 0, transition: { duration: 0.55 } } };

export default function Benefits() {
  return (
    <section className="benefits">
      <p className="sectionLabel">Why Choose Rikky's</p>
      <motion.div
        className="benefitsGrid"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
      >
        {items.map((b) => (
          <motion.div key={b.title} className="benefitCard" variants={card}>
            <div className="benefitIcon">{b.icon}</div>
            <h3>{b.title}</h3>
            <p>{b.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
