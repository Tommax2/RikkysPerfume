import { useMemo, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";

import Nav           from "./Nav";
import Footer        from "./Footer";
import WhatsApp      from "./WhatsApp";
import Toast         from "./Toast";
import CartDrawer    from "./CartDrawer";
import CustomCursor  from "./CustomCursor";
import ScrollTop     from "./ScrollTop";
import DiscountBanner from "./DiscountBanner";

export default function Layout({
  bannerVisible, onCloseBanner,
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

  return (
    <>
      <div className="bg-orbs" aria-hidden>
        {orbs.map((_, i) => (
          <div key={i} className="orb" style={{ "--i": i }} />
        ))}
      </div>

      {bannerVisible && <DiscountBanner onClose={onCloseBanner} />}

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
      <CartDrawer
        open={cartOpen}
        items={cartItems}
        onClose={onCartClose}
        onRemove={onRemove}
        onClear={onClear}
        onCheckout={onCheckout}
      />
    </>
  );
}
