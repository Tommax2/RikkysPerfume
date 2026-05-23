export default function BottleVisual({ category, accent }) {
  if (category === "rollon") return (
    <div className="visual-rollon">
      <div className="roll-cap"    style={{ background: accent }} />
      <div className="roll-neck" />
      <div className="roll-body"   style={{ borderColor: `${accent}55` }}>
        <div className="roll-liquid" style={{ background: `${accent}22` }} />
        <div className="roll-ball"   style={{ background: accent, boxShadow: `0 0 12px ${accent}66` }} />
      </div>
    </div>
  );

  if (category === "spray") return (
    <div className="visual-spray">
      <div className="spray-mist"   style={{ color: accent }}>· · · ·</div>
      <div className="spray-head"   style={{ borderColor: `${accent}55` }}>
        <div className="spray-nozzle" style={{ background: accent }} />
      </div>
      <div className="spray-body"   style={{ borderColor: `${accent}55` }}>
        <div className="spray-pump"   style={{ background: `${accent}88` }} />
        <div className="spray-liquid" style={{ background: `${accent}18` }} />
      </div>
    </div>
  );

  if (category === "oil") return (
    <div className="visual-oil">
      <div className="oil-dropper" style={{ background: `linear-gradient(to bottom, ${accent}, ${accent}66)` }} />
      <div className="oil-neck"    style={{ borderColor: `${accent}55` }} />
      <div className="oil-body"    style={{ borderColor: `${accent}55` }}>
        <div className="oil-liquid" style={{ background: `linear-gradient(to top, ${accent}44, ${accent}11)` }} />
      </div>
    </div>
  );

  // Default: perfume bottle
  return (
    <div className="miniBottle">
      <div className="mb-inner" style={{ borderColor: `${accent}88` }} />
    </div>
  );
}
