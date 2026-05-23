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
    <div className="discountBanner">
      <div className="bannerInner">
        <span className="bannerSale">🎉 GRAND OPENING SALE</span>
        <span className="bannerDot" />
        <span className="bannerCode">
          15% OFF Everything · Use code <strong>RIKKY15</strong>
        </span>
        <span className="bannerDot" />
        <div className="bannerTimer">
          <span><strong>{d}</strong>d</span>
          <span className="tc">:</span>
          <span><strong>{h}</strong>h</span>
          <span className="tc">:</span>
          <span><strong>{m}</strong>m</span>
          <span className="tc">:</span>
          <span><strong>{s}</strong>s</span>
        </div>
        <span className="bannerDot" />
        <span className="bannerFree">Free delivery above ₦20,000</span>
      </div>
      <button className="bannerClose" onClick={onClose} aria-label="Dismiss banner">✕</button>
    </div>
  );
}
