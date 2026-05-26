import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function Nav({ cartCount, bounce, onCartClick }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const close = () => setMenuOpen(false);
  const cartCountText = cartCount > 99 ? "99+" : String(cartCount);

  return (
    <>
      <nav
        className="fixed left-0 z-50 flex items-center justify-between gap-2 overflow-x-clip border-b border-brand-hi/20 px-3 py-3 backdrop-blur-[18px] transition-[top_.3s_ease] xs:gap-3 xs:px-[4vw] xs:py-[.95rem] sm:px-6"
        style={{
          top: "var(--banner-h,44px)",
          right: "var(--scrollbar-w,0px)",
          background: "rgba(59,10,69,.96)",
        }}
      >
        {/* Logo */}
        <a
          href="#"
          className="flex min-w-0 shrink-0 items-center gap-2 no-underline transition-opacity hover:opacity-85"
          onClick={close}
        >
          <img
            src="/logo.jpg"
            alt="Rikky's Perfumes logo"
            className="h-8 w-8 shrink-0 rounded-full border border-brand-hi/40 object-cover xs:h-9 xs:w-9 sm:h-10 sm:w-10"
          />
          <span className="hidden font-serif text-[.88rem] tracking-[.2em] text-cream xs:block sm:text-[1.05rem] sm:tracking-[.25em]">
            RIKKY<em className="font-light not-italic text-brand-hi">'S</em>
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden flex-1 items-center justify-center gap-8 list-none md:flex lg:gap-10">
          {[
            { href: "#collection", label: "Collection" },
            { href: "#story",      label: "Story" },
            { href: "#journal",    label: "Journal" },
          ].map(({ href, label }) => (
            <li key={label}>
              <a
                href={href}
                className="relative text-[.62rem] tracking-[.22em] uppercase text-brand-hi/70 no-underline transition-colors duration-300 hover:text-cream
                  after:absolute after:inset-x-0 after:bottom-[-4px] after:h-px after:bg-brand-hi after:scale-x-0 after:origin-left after:transition-transform after:duration-[350ms] hover:after:scale-x-100"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right group */}
        <div className="flex shrink-0 items-center gap-1.5 xs:gap-2">
          {/* Cart button */}
          <button
            type="button"
            className={`cartBtn flex items-center justify-center gap-[.35rem] border border-brand-hi/40 bg-brand-hi/10 px-2 py-2 font-sans text-[.58rem] tracking-[.1em] text-cream transition-[background_.3s,border-color_.3s] hover:border-brand-hi hover:bg-brand-hi/20 xs:gap-[.4rem] xs:px-3 xs:py-[.48rem] xs:text-[.6rem]${bounce ? " bounce" : ""}`}
            onClick={onCartClick}
            aria-label="Open cart"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
              <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <path d="M16 10a4 4 0 0 1-8 0" />
            </svg>
            <span className="hidden sm:inline tracking-[.12em]">Cart</span>
            {cartCount > 0 && (
              <span className="grid h-[18px] min-w-[18px] place-items-center rounded-full bg-brand-hi px-[3px] text-[.5rem] font-bold leading-none text-ink">
                {cartCountText}
              </span>
            )}
          </button>

          {/* Hamburger */}
          <button
            type="button"
            className={`hamburger flex flex-col gap-[5px] border-none bg-transparent p-2 cursor-pointer md:hidden xs:p-[.4rem]${menuOpen ? " open" : ""}`}
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>

      {/* Mobile slide-in menu */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              className="fixed inset-0 z-[55] bg-[rgba(10,3,14,.6)] backdrop-blur-[4px]"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={close}
            />
            <motion.div
              className="fixed inset-y-0 right-0 z-[56] flex w-[min(300px,85vw)] flex-col overflow-y-auto border-l border-brand-hi/20 bg-plum px-6 pb-10 pt-5"
              initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.32, ease: [0.4, 0, 0.2, 1] }}
            >
              {/* Menu header */}
              <div className="mb-8 flex items-center justify-between">
                <a href="#" className="flex items-center gap-2 no-underline" onClick={close}>
                  <img src="/logo.jpg" alt="Rikky's"
                    className="h-8 w-8 rounded-full border border-brand-hi/40 object-cover" />
                  <span className="font-serif text-sm tracking-[.2em] text-cream">
                    RIKKY<em className="font-light not-italic text-brand-hi">'S</em>
                  </span>
                </a>
                <button
                  type="button"
                  className="grid h-8 w-8 cursor-pointer place-items-center rounded border border-brand-hi/30 bg-transparent text-sm text-brand-hi/70 transition-[background_.2s,color_.2s] hover:bg-brand-hi/15 hover:text-cream"
                  onClick={close}
                  aria-label="Close menu"
                >
                  ✕
                </button>
              </div>

              {/* Nav links */}
              <ul className="flex flex-1 flex-col list-none">
                {[
                  { href: "#collection", label: "Collection" },
                  { href: "#story",      label: "Story" },
                  { href: "#journal",    label: "Journal" },
                ].map(({ href, label }, i) => (
                  <motion.li
                    key={label}
                    initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.08 + i * 0.07 }}
                  >
                    <a
                      href={href}
                      onClick={close}
                      className="block border-b border-brand-hi/10 py-4 font-serif text-[1.6rem] font-light tracking-[.06em] text-brand-hi/85 no-underline transition-colors hover:text-brand-hi"
                    >
                      {label}
                    </a>
                  </motion.li>
                ))}
              </ul>

              {/* CTA */}
              <motion.div
                className="mt-6 flex flex-col gap-2"
                initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.32 }}
              >
                <a href="#collection" className="cta block text-center text-sm" onClick={close}>
                  Shop Now
                </a>
                <button
                  type="button"
                  className="flex w-full items-center justify-center gap-2 border border-brand-hi/40 bg-brand-hi/10 py-[.52rem] font-sans text-[.62rem] tracking-[.12em] text-cream cursor-pointer transition-[background_.3s] hover:bg-brand-hi/20"
                  onClick={() => { onCartClick(); close(); }}
                >
                  🛍 Cart · {cartCount} item{cartCount !== 1 ? "s" : ""}
                </button>
              </motion.div>

              <p className="mt-5 text-center text-[.55rem] tracking-[.1em] text-brand-hi/55">
                15% OFF first order · Code: <strong className="text-brand-hi">RIKKY15</strong>
              </p>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
