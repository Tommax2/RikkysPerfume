import { motion } from "framer-motion";

const trustBadges = [
  { icon: "✓", text: "100% Authentic" },
  { icon: "⚡", text: "Fast Delivery" },
  { icon: "🔒", text: "Secure Payment" },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: "easeOut" },
});

export default function Hero() {
  return (
    <section className="hero">
      <div className="heroBg" aria-hidden>
        <div className="noise" />
      </div>

      <motion.div className="heroText" {...fadeUp(0.05)}>
        <motion.div className="heroTag" {...fadeUp(0.1)}>
          <span className="tagDot" />
          Grand Opening Sale · Limited Time Offer
        </motion.div>

        <motion.h1 {...fadeUp(0.22)}>
          Discover Your<br /><em>Signature Scent</em>
        </motion.h1>

        <motion.p className="heroSub" {...fadeUp(0.36)}>
          Premium fragrances for every occasion. Authentic brands, unbeatable prices — delivered fast across Nigeria.
        </motion.p>

        <motion.div className="discountPill" {...fadeUp(0.48)}>
          <span className="discountPct">15% OFF</span>
          <span>Your first order · Code: <strong>RIKKY15</strong></span>
        </motion.div>

        <motion.div className="heroBtns" {...fadeUp(0.58)}>
          <a className="cta" href="#collection">Shop Now</a>
          <a className="cta-ghost" href="#story">Our Story</a>
        </motion.div>

        <motion.div className="trustRow" {...fadeUp(0.72)}>
          {trustBadges.map((b) => (
            <div key={b.text} className="trustBadge">
              <span className="trustIcon">{b.icon}</span>
              {b.text}
            </div>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        className="heroVisual"
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9, delay: 0.18, ease: "easeOut" }}
      >
        <div className="heroProductFrame">
          <div className="heroProductBg" />
          <img
            className="heroProductImg"
            src="/EAU%20DE%20PARFUM.jpg"
            alt="Khamrah Qahwa featured perfume"
          />
          <div className="heroProductBadge">
            <span>Featured Pick</span>
            <strong>Khamrah Qahwa · ₦28,000</strong>
          </div>
        </div>

        <motion.div
          className="heroFloatCard heroFloatCard1"
          initial={{ opacity: 0, scale: 0.75 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.85, duration: 0.5 }}
        >
          <img src="/9pm%20rebel.jpg" alt="9PM Rebel" />
          <div>
            <p className="floatName">9PM Rebel</p>
            <p className="floatPrice">₦22,500</p>
          </div>
        </motion.div>

        <motion.div
          className="heroFloatCard heroFloatCard2"
          initial={{ opacity: 0, scale: 0.75 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.05, duration: 0.5 }}
        >
          <img src="/Teuori.jpg" alt="Teuori" />
          <div>
            <p className="floatName">Teuori</p>
            <p className="floatPrice">₦18,000</p>
          </div>
        </motion.div>
      </motion.div>

      <motion.p
        className="heroSide"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1 }}
        aria-hidden
      >
        Est. 2024
      </motion.p>
    </section>
  );
}
