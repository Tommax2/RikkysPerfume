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
    <section
      className="relative z-[1] px-[4vw] py-24"
      style={{ background: "radial-gradient(ellipse at 50% 0%,rgba(106,13,173,.05),transparent 60%)" }}
    >
      <p className="sectionLabel">Why Choose Rikky's</p>

      <motion.div
        className="mx-auto grid max-w-[1200px] grid-cols-1 gap-[1.4rem] sm:grid-cols-2 lg:grid-cols-4"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
      >
        {items.map((b) => (
          <motion.div
            key={b.title}
            className="cursor-default rounded-md border border-brand/10 bg-deep px-[1.6rem] py-8 transition-[transform_.3s,box-shadow_.3s,border-color_.3s] hover:-translate-y-[6px] hover:border-brand/25 hover:shadow-[0_24px_60px_rgba(106,13,173,.12)]"
            variants={card}
          >
            <span className="mb-5 block text-[2.2rem]">{b.icon}</span>
            <h3 className="mb-[.65rem] font-serif text-[1.05rem] font-medium leading-none tracking-[.04em] text-ink">
              {b.title}
            </h3>
            <p className="text-[.7rem] leading-[1.85] tracking-[.04em] text-muted">{b.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
