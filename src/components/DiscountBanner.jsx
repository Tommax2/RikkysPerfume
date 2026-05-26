import { useState, useEffect } from "react";

const TARGET = new Date("2026-05-28T23:59:59");

function useCountdown(target) {
  const [rem, setRem] = useState(() => target - Date.now());
  useEffect(() => {
    const id = setInterval(() => setRem(target - Date.now()), 1000);
    return () => clearInterval(id);
  }, [target]);
  const t = Math.max(0, rem);
  const pad = (n) => String(Math.floor(n)).padStart(2, "0");
  return {
    d: pad(t / 86400000),
    h: pad((t % 86400000) / 3600000),
    m: pad((t % 3600000) / 60000),
    s: pad((t % 60000) / 1000),
  };
}

export default function DiscountBanner({ onClose }) {
  const { d, h, m, s } = useCountdown(TARGET);

  return (
    <div className="discountBanner fixed inset-x-0 top-0 z-[60] flex h-11 items-center justify-center overflow-hidden px-12 gap-[.7rem]"
      style={{ background: "linear-gradient(90deg,#3B0A45 0%,#5a0e80 50%,#3B0A45 100%)" }}
    >
      {/* shimmer handled by ::before in global.css */}

      <div className="relative z-[1] flex items-center gap-[.85rem] text-[.58rem] tracking-[.14em] text-brand-hi/90 whitespace-nowrap flex-wrap justify-center">
        <span className="font-bold text-gold tracking-[.1em]">🎉 GRAND OPENING SALE</span>
        <span className="h-[3px] w-[3px] flex-shrink-0 rounded-full bg-brand-hi/50" />
        <span className="hidden sm:inline">
          15% OFF Everything · Use code <strong className="text-brand-hi">RIKKY15</strong>
        </span>
        <span className="sm:hidden font-bold text-brand-hi">RIKKY15 – 15% OFF</span>
        <span className="hidden sm:flex h-[3px] w-[3px] flex-shrink-0 rounded-full bg-brand-hi/50" />

        {/* Timer */}
        <div className="hidden sm:flex items-center gap-[.18rem] rounded border border-brand-hi/25 bg-white/10 px-[.55rem] py-[.18rem]">
          {[[d,"d"],[h,"h"],[m,"m"],[s,"s"]].map(([val, unit], i) => (
            <span key={unit} className="flex items-center gap-[.05rem]">
              {i > 0 && <span className="text-brand-hi/55 mx-[.05rem]">:</span>}
              <strong className="text-[.72rem] font-bold text-cream">{val}</strong>
              <span className="text-[.56rem] text-brand-hi/80">{unit}</span>
            </span>
          ))}
        </div>

        <span className="hidden md:flex h-[3px] w-[3px] flex-shrink-0 rounded-full bg-brand-hi/50" />
        <span className="hidden md:inline">Free delivery above ₦20,000</span>
      </div>

      <button
        className="absolute right-[.9rem] top-1/2 -translate-y-1/2 border-none bg-transparent text-[1rem] leading-none text-brand-hi/50 cursor-pointer p-[.4rem] transition-colors hover:text-cream"
        onClick={onClose}
        aria-label="Dismiss banner"
      >
        ✕
      </button>
    </div>
  );
}
