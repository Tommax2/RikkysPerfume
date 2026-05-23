import { useEffect } from "react";

const NAIRA = "₦";
const formatNaira = (value) => `${NAIRA}${value.toLocaleString("en-NG")}`;

export default function CartDrawer({ open, items, onClose, onRemove, onClear, onCheckout }) {
  const total = items.reduce((sum, item) => sum + item.priceValue * item.qty, 0);

  /* lock body scroll — compensate scrollbar width so nav & content don't shift */
  useEffect(() => {
    if (open) {
      const sw = window.innerWidth - document.documentElement.clientWidth;
      document.documentElement.style.setProperty("--scrollbar-w", `${sw}px`);
      document.body.classList.add("scroll-locked");
    } else {
      document.body.classList.remove("scroll-locked");
      document.documentElement.style.setProperty("--scrollbar-w", "0px");
    }
    return () => {
      document.body.classList.remove("scroll-locked");
      document.documentElement.style.setProperty("--scrollbar-w", "0px");
    };
  }, [open]);

  return (
    <>
      <div
        className={`cartBackdrop${open ? " show" : ""}`}
        onClick={onClose}
        aria-hidden={!open}
      />
      <aside className={`cartDrawer${open ? " open" : ""}`} aria-hidden={!open}>
        <div className="cartHead">
          <h2>Your Cart</h2>
          <button type="button" onClick={onClose}>Close</button>
        </div>

        <div className="cartItems">
          {items.length === 0 && <p className="cartEmpty">No perfume in cart yet.</p>}
          {items.map((item) => (
            <article key={item.id} className="cartItem">
              <div>
                <h3>{item.name} <em>{item.sub}</em></h3>
                <p>{item.qty} × {item.price}</p>
              </div>
              <button type="button" onClick={() => onRemove(item.id)}>Remove</button>
            </article>
          ))}
        </div>

        <div className="cartFoot">
          <strong>Total: {formatNaira(total)}</strong>
          <div>
            <button type="button" onClick={onClear}>Clear</button>
            <button type="button" className="checkoutBtn" onClick={onCheckout}>
              Place Order
            </button>
          </div>
        </div>
      </aside>
    </>
  );
}
