const links = {
  Collection: ["Perfumes", "Body Sprays", "Reed Diffusers", "Gift Sets"],
  House:      ["Our Story", "Craftsmanship", "Private Blends", "Contact"],
  Connect:    ["Instagram", "TikTok", "Facebook", "Journal"],
};

const socials = [
  {
    label: "Instagram",
    href: "https://instagram.com",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" width="18" height="18" aria-hidden>
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r=".8" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: "TikTok",
    href: "https://tiktok.com",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="17" height="17" aria-hidden>
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "https://facebook.com",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18" aria-hidden>
        <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z" />
      </svg>
    ),
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/2348060858306",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18" aria-hidden>
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footerTop">
        <div className="footerBrand">
          <a href="#" className="logo">
            <img src="/logo.jpg" alt="Rikky's Perfumes logo" className="logoImg" />
            <span className="logoName">RIKKY<em>'S</em></span>
          </a>
          <p className="footerSub">Perfumes &amp; More</p>
          <p className="footerTagline">Premium fragrances curated for every occasion. Quality you can smell.</p>

          <div className="footerSocials">
            {socials.map(({ label, href, icon }) => (
              <a
                key={label}
                href={href}
                className="socialChip"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                title={label}
              >
                {icon}
              </a>
            ))}
          </div>
        </div>

        <nav className="footerLinks" aria-label="Footer navigation">
          {Object.entries(links).map(([heading, items]) => (
            <div key={heading} className="footerCol">
              <h5>{heading}</h5>
              <ul>
                {items.map((item) => (
                  <li key={item}><a href="#">{item}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </div>

      <div className="footerNewsletter">
        <div className="newsletterInner">
          <div className="newsletterText">
            <span className="newsletterEyebrow">Exclusive Circle</span>
            <h4 className="newsletterHeading">Join Our Fragrance Community</h4>
            <p className="newsletterDesc">Be first to discover new arrivals, private blends, and members-only offers.</p>
          </div>
          <form className="newsletterForm" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              className="newsletterInput"
              placeholder="your@email.com"
              aria-label="Email address"
            />
            <button type="submit" className="newsletterBtn">Subscribe</button>
          </form>
        </div>
      </div>

      <div className="footerBottom">
        <p>© 2026 Rikky's Perfumes and More. All rights reserved.</p>
        <div className="footerLegal">
          {["Privacy", "Terms", "Shipping"].map((l, i, a) => (
            <span key={l}>
              <a href="#">{l}</a>
              {i < a.length - 1 && <em>·</em>}
            </span>
          ))}
        </div>
      </div>
    </footer>
  );
}
