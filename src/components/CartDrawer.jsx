import { useEffect } from "react";

const NAIRA = "₦";
const formatNaira = (value) => `${NAIRA}${value.toLocaleString("en-NG")}`;

export default function CartDrawer({ open, items, onClose, onRemove, onClear, onCheckout }) {
  const total = items.reduce((sum, item) => sum + item.priceValue * item.qty, 0);

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
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-[68] bg-[rgba(15,5,20,.65)] backdrop-blur-[5px] transition-opacity duration-[280ms] ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        onClick={onClose}
        aria-hidden={!open}
      />

      {/* Drawer */}
      <aside
        className={`fixed inset-y-0 right-0 z-[69] flex w-[min(420px,100vw)] flex-col overflow-hidden border-l border-brand-hi/20 pb-[env(safe-area-inset-bottom,0px)] transition-transform duration-[320ms] [transition-timing-function:cubic-bezier(.4,0,.2,1)] ${open ? "translate-x-0" : "translate-x-[105%]"}`}
        style={{ background: "linear-gradient(165deg,rgba(59,10,69,.99),rgba(30,5,40,.99))" }}
        aria-hidden={!open}
      >
        {/* Head */}
        <div className="flex items-center justify-between border-b border-brand-hi/18 px-[1.4rem] py-6">
          <h2 className="font-serif text-[1.6rem] font-light tracking-[.06em] text-cream">Your Cart</h2>
          <button
            type="button"
            className="border border-brand-hi/30 bg-transparent px-[.7rem] py-[.35rem] font-sans text-[.6rem] tracking-[.14em] text-brand-hi cursor-pointer transition-[background_.3s,border-color_.3s] hover:border-brand-hi hover:bg-brand-hi/10"
            onClick={onClose}
          >
            Close
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-auto px-[1.4rem] py-[.8rem] [scrollbar-color:rgba(181,124,255,.18)_transparent] [scrollbar-width:thin]">
          {items.length === 0 && (
            <p className="py-8 text-center text-[.72rem] tracking-[.1em] text-brand-hi/55">
              No perfume in cart yet.
            </p>
          )}
          {items.map((item) => (
            <article
              key={item.id}
              className="flex items-center justify-between gap-[.8rem] border-b border-brand-hi/12 py-4"
            >
              <div className="min-w-0 flex-1">
                <h3 className="overflow-hidden text-ellipsis whitespace-nowrap font-serif text-[1.2rem] font-light leading-[1.2] text-cream">
                  {item.name} <em className="italic text-brand-hi">{item.sub}</em>
                </h3>
                <p className="mt-[.3rem] text-[.64rem] tracking-[.1em] text-brand-hi/60">
                  {item.qty} × {item.price}
                </p>
              </div>
              <button
                type="button"
                className="flex-shrink-0 border border-brand-hi/30 bg-transparent px-[.6rem] py-[.32rem] font-sans text-[.58rem] tracking-[.14em] text-brand-hi cursor-pointer transition-[background_.3s,border-color_.3s] hover:border-brand-hi hover:bg-brand-hi/10"
                onClick={() => onRemove(item.id)}
              >
                Remove
              </button>
            </article>
          ))}
        </div>

        {/* Footer */}
        <div className="flex-shrink-0 grid gap-[.8rem] border-t border-brand-hi/18 px-[1.4rem] pb-[1.6rem] pt-5">
          <strong className="overflow-hidden text-ellipsis whitespace-nowrap font-serif text-[1.6rem] font-light tracking-[.06em] text-brand-hi">
            Total: {formatNaira(total)}
          </strong>
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              className="shimmerBtn relative min-w-[80px] flex-1 overflow-hidden bg-brand border border-brand px-3 py-[.72rem] font-sans text-[.6rem] uppercase tracking-[.16em] text-cream cursor-pointer transition-[background_.3s] hover:bg-brand-hi"
              onClick={onClear}
            >
              Clear
            </button>
            <button
              type="button"
              className="min-w-[80px] flex-1 border border-[#25D366] bg-[#25D366] px-3 py-[.72rem] font-sans text-[.6rem] uppercase tracking-[.16em] text-white cursor-pointer transition-[background_.3s,border-color_.3s] hover:border-[#20bd5b] hover:bg-[#20bd5b]"
              onClick={onCheckout}
            >
              Place Order
            </button>
          </div>
        </div>
      </aside>
    </>
  );
}
