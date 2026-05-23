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
    <section className="testimonials">
      <p className="sectionLabel">Happy Customers</p>
      <h2 className="testHeading">What People Are <em>Saying</em></h2>
      <motion.div
        className="testGrid"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
      >
        {reviews.map((r) => (
          <motion.div key={r.name} className="testCard" variants={card}>
            <div className="testStars">{stars(r.rating)}</div>
            <p className="testText">"{r.text}"</p>
            <div className="testAuthor">
              <div className="testAvatar">{r.name[0]}</div>
              <div>
                <strong>{r.name}</strong>
                <span>{r.location}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
