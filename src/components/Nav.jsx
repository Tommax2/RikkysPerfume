import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function Nav({ cartCount, bounce, onCartClick }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const close = () => setMenuOpen(false);
  const cartCountText = cartCount > 99 ? "99+" : String(cartCount);

  return (
    <>
      <nav className="nav">
        <a href="#" className="logo" onClick={close}>
          <img src="/logo.jpg" alt="Rikky's Perfumes logo" className="logoImg" />
          <span className="logoName">RIKKY<em>'S</em></span>
        </a>

        <ul className="navLinks">
          <li><a href="#collection">Collection</a></li>
          <li><a href="#story">Story</a></li>
          <li><a href="#journal">Journal</a></li>
        </ul>

        <div className="navRight">
          <button
            type="button"
            className={`cartBtn${bounce ? " bounce" : ""}`}
            onClick={onCartClick}
            aria-label="Open cart"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
              <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <path d="M16 10a4 4 0 0 1-8 0" />
            </svg>
            <span className="cartLabel">Cart</span>
            <span className="cartCount">{cartCountText}</span>
          </button>

          <button
            type="button"
            className={`hamburger${menuOpen ? " open" : ""}`}
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              className="mobileBackdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={close}
            />
            <motion.div
              className="mobileMenu"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.32, ease: [0.4, 0, 0.2, 1] }}
            >
              <div className="mobileMenuHead">
                <a href="#" className="logo" onClick={close}>
                  <img src="/logo.jpg" alt="Rikky's" className="logoImg" />
                  <span className="logoName">RIKKY<em>'S</em></span>
                </a>
                <button type="button" className="mobileClose" onClick={close} aria-label="Close menu">X</button>
              </div>

              <ul className="mobileLinks">
                {[
                  { href: "#collection", label: "Collection" },
                  { href: "#story",      label: "Story" },
                  { href: "#journal",    label: "Journal" },
                ].map(({ href, label }, i) => (
                  <motion.li
                    key={label}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.07 }}
                  >
                    <a href={href} onClick={close}>{label}</a>
                  </motion.li>
                ))}
              </ul>

              <motion.div
                className="mobileCta"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 }}
              >
                <a href="#collection" className="cta" onClick={close} style={{ display: "block", textAlign: "center" }}>
                  Shop Now
                </a>
                <button
                  type="button"
                  className="cartBtn"
                  style={{ width: "100%", justifyContent: "center" }}
                  onClick={() => { onCartClick(); close(); }}
                >
                  Cart ({cartCount})
                </button>
              </motion.div>

              <p className="mobileFootNote">15% OFF first order - Code: <strong>RIKKY15</strong></p>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
