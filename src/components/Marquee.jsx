const TEXT =
  "✦ AUTHENTIC FRAGRANCES · PREMIUM BRANDS · FAST NATIONWIDE DELIVERY · BEST PRICES IN NIGERIA · RIKKY'S PERFUMES AND MORE · KHAMRAH QAHWA · 9PM REBEL · VINTAGE RADIO · X-TRA · TEUORI · BOD FRESH GUY · ";

export default function Marquee() {
  return (
    <div className="marquee" aria-hidden>
      <div>{TEXT}</div>
      <div>{TEXT}</div>
    </div>
  );
}
