import { useMemo, useState, useEffect } from "react";

import DiscountBanner  from "./components/DiscountBanner";
import Nav             from "./components/Nav";
import Hero            from "./components/Hero";
import Marquee         from "./components/Marquee";
import Benefits        from "./components/Benefits";
import CategoryBar     from "./components/CategoryBar";
import ProductGrid     from "./components/ProductGrid";
import Divider         from "./components/Divider";
import Testimonials    from "./components/Testimonials";
import Story           from "./components/Story";
import Stats           from "./components/Stats";
import FeaturedCarousel from "./components/FeaturedCarousel";
import Journal         from "./components/Journal";
import Footer          from "./components/Footer";
import WhatsApp        from "./components/WhatsApp";
import Toast           from "./components/Toast";
import CartDrawer      from "./components/CartDrawer";
import CustomCursor    from "./components/CustomCursor";
import ScrollTop       from "./components/ScrollTop";

import products from "./data/products";

export default function App() {
  const NAIRA = "₦";
  const [bannerVisible,  setBannerVisible]  = useState(true);
  const [cartCount,      setCartCount]      = useState(0);
  const [cartBounce,     setCartBounce]     = useState(false);
  const [toast,          setToast]          = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [cartOpen,       setCartOpen]       = useState(false);
  const [cartItems,      setCartItems]      = useState([]);

  useEffect(() => {
    document.documentElement.style.setProperty("--banner-h", bannerVisible ? "44px" : "0px");
  }, [bannerVisible]);

  const filtered = useMemo(
    () => activeCategory === "all" ? products : products.filter((p) => p.category === activeCategory),
    [activeCategory]
  );

  const handleAdd = (product) => {
    const name = `${product.name} ${product.sub}`;
    const priceValue = Number(String(product.price).replace(/[^0-9.]/g, ""));
    setCartCount((n) => n + 1);
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) return prev.map((item) => item.id === product.id ? { ...item, qty: item.qty + 1 } : item);
      return [...prev, { ...product, qty: 1, priceValue }];
    });
    setToast(`${name} added to cart`);
    setCartBounce(true);
    setTimeout(() => setCartBounce(false), 600);
    setTimeout(() => setToast(""), 2400);
  };

  const removeFromCart = (id) => {
    const target = cartItems.find((item) => item.id === id);
    if (!target) return;
    setCartItems((prev) => prev.filter((item) => item.id !== id));
    setCartCount((n) => Math.max(0, n - target.qty));
  };

  const clearCart = () => { setCartItems([]); setCartCount(0); };

  const handleCheckout = () => {
    if (cartItems.length === 0) {
      setToast("Add at least one perfume before checkout");
      setTimeout(() => setToast(""), 2200);
      return;
    }
    const lines = cartItems.map(
      (item, index) => `${index + 1}. ${item.name} ${item.sub} x${item.qty} - ${NAIRA}${(item.priceValue * item.qty).toLocaleString("en-NG")}`
    );
    const total = cartItems.reduce((sum, item) => sum + item.priceValue * item.qty, 0);
    const text = [
      "Hello Rikky's Perfumes!",
      "I'd like to place this order:",
      ...lines,
      `Total: ${NAIRA}${total.toLocaleString("en-NG")}`,
      "Please confirm availability and delivery details. Thank you.",
    ].join("\n");
    window.open(`https://wa.me/2348060858306?text=${encodeURIComponent(text)}`, "_blank", "noopener,noreferrer");
    setCartOpen(false);
  };

  const orbs = useMemo(() => Array.from({ length: 5 }), []);

  return (
    <main>
      <div className="bg-orbs" aria-hidden>
        {orbs.map((_, i) => <div key={i} className="orb" style={{ "--i": i }} />)}
      </div>

      {bannerVisible && <DiscountBanner onClose={() => setBannerVisible(false)} />}

      <Nav
        cartCount={cartCount}
        bounce={cartBounce}
        onCartClick={() => setCartOpen((v) => !v)}
      />

      <Hero />
      <Marquee />
      <FeaturedCarousel onAdd={handleAdd} />
      <Benefits />

      {/* Collection shell */}
      <section
        className="collectionShell relative z-[1] mx-auto my-9 overflow-hidden rounded-[22px] border border-brand/[.12]"
        style={{
          width: "min(1200px,92vw)",
          background: "linear-gradient(180deg,rgba(255,255,255,.55),rgba(237,231,246,.58))",
          boxShadow: "0 20px 52px rgba(106,13,173,.08)",
        }}
      >
        <CategoryBar active={activeCategory} onChange={setActiveCategory} count={filtered.length} />
        <ProductGrid products={filtered} onAdd={handleAdd} />
      </section>

      <Divider />
      <Testimonials />
      <Divider />
      <Story />
      <Divider />
      <Stats />
      <Divider />
      <Journal />
      <Footer />

      <WhatsApp cartItems={cartItems} />
      <Toast message={toast} />
      <ScrollTop />
      <CustomCursor />
      <CartDrawer
        open={cartOpen}
        items={cartItems}
        onClose={() => setCartOpen(false)}
        onRemove={removeFromCart}
        onClear={clearCart}
        onCheckout={handleCheckout}
      />
    </main>
  );
}
