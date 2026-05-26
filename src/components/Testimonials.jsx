import { motion } from "framer-motion";

const reviews = [
  {
    name: "Fatima A.", location: "Lagos", rating: 5,
    text: "The Khamrah Qahwa is absolutely divine! I've been getting compliments all week. Best prices and fastest delivery I've seen in Nigeria.",
  },
  {
    name: "Chidi O.", location: "Abuja", rating: 5,
    text: "9PM Rebel is my new signature scent. Came perfectly packaged, delivery was super fast. Rikky's is my go-to perfume shop now!",
  },
  {
    name: "Amaka E.", location: "Port Harcourt", rating: 5,
    text: "Ordered the Garden reed diffuser and my home smells incredible. 100% authentic products. Already placed my second order!",
  },
];

const stars = (n) => "★".repeat(n) + "☆".repeat(5 - n);

const container = { hidden: {}, show: { transition: { staggerChildren: 0.14 } } };
const card = { hidden: { opacity: 0, y: 38 }, show: { opacity: 1, y: 0, transition: { duration: 0.6 } } };

export default function Testimonials() {
  return (
    <section
      className="relative z-[1] px-[4vw] py-28 text-center"
      style={{ background: "radial-gradient(ellipse at 50% 100%,rgba(106,13,173,.06),transparent 60%)" }}
    >
      <p className="sectionLabel">Happy Customers</p>

      <h2 className="mb-14 font-serif text-[clamp(1.8rem,4vw,3rem)] font-light leading-[1.1]">
        What People Are <em className="italic text-brand">Saying</em>
      </h2>

      <motion.div
        className="mx-auto grid max-w-[1100px] grid-cols-1 gap-[1.4rem] text-left md:grid-cols-3"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
      >
        {reviews.map((r) => (
          <motion.div
            key={r.name}
            className="rounded-md border border-brand/10 bg-deep p-8 transition-[box-shadow_.3s,border-color_.3s,transform_.3s] hover:-translate-y-1 hover:border-brand/22 hover:shadow-[0_18px_44px_rgba(106,13,173,.1)]"
            variants={card}
          >
            <div className="mb-4 text-base tracking-[.12em] text-gold">{stars(r.rating)}</div>
            <p className="mb-6 text-[.74rem] italic leading-[1.85] tracking-[.04em] text-muted">"{r.text}"</p>
            <div className="flex items-center gap-[.8rem]">
              <div
                className="grid h-[38px] w-[38px] flex-shrink-0 place-items-center rounded-full text-[.82rem] font-bold text-cream"
                style={{ background: "linear-gradient(135deg,#6A0DAD,#B57CFF)" }}
              >
                {r.name[0]}
              </div>
              <div>
                <strong className="block text-[.72rem] tracking-[.06em] text-ink">{r.name}</strong>
                <span className="text-[.62rem] tracking-[.08em] text-muted">{r.location}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
