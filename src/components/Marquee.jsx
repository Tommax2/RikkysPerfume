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
    <div className="marquee" aria-hidden>
      <div className="marqueeTrack">{TEXT}</div>
      <div className="marqueeTrack">{TEXT}</div>
    </div>
  );
}
