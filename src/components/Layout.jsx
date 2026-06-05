import { useMemo, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";

import Nav           from "./Nav";
import Footer        from "./Footer";
import WhatsApp      from "./WhatsApp";
import Toast         from "./Toast";
import CartDrawer    from "./CartDrawer";
import CustomCursor  from "./CustomCursor";
import ScrollTop     from "./ScrollTop";

export default function Layout({
  cartCount, cartBounce, onCartClick,
  cartOpen, onCartClose,
  cartItems, onRemove, onClear, onCheckout,
  toast,
  onAdd,
}) {
  const { pathname } = useLocation();
  const orbs = useMemo(() => Array.from({ length: 5 }), []);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);

  useEffect(() => {
    if (!cartOpen) {
      document.body.classList.remove("scroll-locked");
      document.documentElement.style.setProperty("--scrollbar-w", "0px");
    }
  }, [pathname, cartOpen]);

  return (
    <>
      <div className="bg-orbs" aria-hidden>
        {orbs.map((_, i) => (
          <div key={i} className="orb" style={{ "--i": i }} />
        ))}
      </div>
      <Nav
        cartCount={cartCount}
        bounce={cartBounce}
        onCartClick={onCartClick}
      />

      <main>
        <Outlet context={{ onAdd }} />
      </main>

      <Footer />

      <WhatsApp cartItems={cartItems} />
      <Toast message={toast} />
      <ScrollTop />
      <CustomCursor />
      {cartOpen && (
        <CartDrawer
          open={cartOpen}
          items={cartItems}
          onClose={onCartClose}
          onRemove={onRemove}
          onClear={onClear}
          onCheckout={onCheckout}
        />
      )}
    </>
  );
}
