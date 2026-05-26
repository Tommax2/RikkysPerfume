const ITEMS = [
  "Authentic Fragrances",
  "Premium Brands",
  "Fast Nationwide Delivery",
  "Best Prices in Nigeria",
  "Rikky's Perfumes",
  "Khamrah Qahwa",
  "9PM Rebel",
  "Vintage Radio",
  "X-Tra",
  "Teuori",
  "BOD Fresh Guy",
];

const TEXT = `${ITEMS.join(" • ")} • `;

export default function Marquee() {
  return (
    <div
      className="relative z-[1] flex overflow-hidden border-y border-brand/[.18] py-[.9rem] whitespace-nowrap backdrop-blur-[4px]"
      style={{ background: "rgba(59,10,69,.9)" }}
      aria-hidden
    >
      <div className="marqueeTrack">{TEXT}</div>
      <div className="marqueeTrack">{TEXT}</div>
    </div>
  );
}
