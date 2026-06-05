import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import Layout         from "./components/Layout";
import HomePage       from "./pages/HomePage";
import CollectionPage from "./pages/CollectionPage";
import AboutPage      from "./pages/AboutPage";

const NAIRA = "₦";

export default function App() {
  const [bannerVisible, setBannerVisible] = useState(true);
  const [cartCount,     setCartCount]     = useState(0);
  const [cartBounce,    setCartBounce]    = useState(false);
  const [toast,         setToast]         = useState("");
  const [cartOpen,      setCartOpen]      = useState(false);
  const [cartItems,     setCartItems]     = useState([]);

  useEffect(() => {
    if (!bannerVisible) {
      document.documentElement.style.setProperty("--banner-h", "0px");
    }
  }, [bannerVisible]);

  const onAdd = (product) => {
    const name       = `${product.name} ${product.sub}`;
    const priceValue = Number(String(product.price).replace(/[^0-9.]/g, ""));
    setCartCount((n) => n + 1);
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing)
        return prev.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      return [...prev, { ...product, qty: 1, priceValue }];
    });
    setToast(`${name} added to cart`);
    setCartBounce(true);
    setTimeout(() => setCartBounce(false), 600);
    setTimeout(() => setToast(""), 2400);
  };

  const onRemove = (id) => {
    const target = cartItems.find((item) => item.id === id);
    if (!target) return;
    setCartItems((prev) => prev.filter((item) => item.id !== id));
    setCartCount((n) => Math.max(0, n - target.qty));
  };

  const onClear = () => { setCartItems([]); setCartCount(0); };

  const onCheckout = () => {
    if (cartItems.length === 0) {
      setToast("Add at least one perfume before checkout");
      setTimeout(() => setToast(""), 2200);
      return;
    }
    const lines = cartItems.map(
      (item, i) =>
        `${i + 1}. ${item.name} ${item.sub} x${item.qty} - ${NAIRA}${(item.priceValue * item.qty).toLocaleString("en-NG")}`
    );
    const total = cartItems.reduce((sum, item) => sum + item.priceValue * item.qty, 0);
    const text  = [
      "Hello Rikky's Perfumes!",
      "I'd like to place this order:",
      ...lines,
      `Total: ${NAIRA}${total.toLocaleString("en-NG")}`,
      "Please confirm availability and delivery details. Thank you.",
    ].join("\n");
    window.open(
      `https://wa.me/2348060858306?text=${encodeURIComponent(text)}`,
      "_blank",
      "noopener,noreferrer"
    );
    onClear();
    setCartOpen(false);
    setToast("Order sent! Cart cleared.");
    setTimeout(() => setToast(""), 2400);
  };

  const layoutProps = {
    bannerVisible,
    onCloseBanner: () => setBannerVisible(false),
    cartCount,
    cartBounce,
    onCartClick:  () => setCartOpen((v) => !v),
    cartOpen,
    onCartClose:  () => setCartOpen(false),
    cartItems,
    onRemove,
    onClear,
    onCheckout,
    toast,
    onAdd,
  };

  return (
    <Routes>
      <Route element={<Layout {...layoutProps} />}>
        <Route index             element={<HomePage />} />
        <Route path="collection" element={<CollectionPage />} />
        <Route path="about"      element={<AboutPage />} />
      </Route>
    </Routes>
  );
}
