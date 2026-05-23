import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dot  = useRef(null);
  const ring = useRef(null);

  useEffect(() => {
    let rx = 0, ry = 0;
    let raf;

    const onMove = (e) => {
      const x = e.clientX, y = e.clientY;
      dot.current.style.transform  = `translate(${x}px,${y}px)`;
      rx += (x - rx) * 0.12;
      ry += (y - ry) * 0.12;
    };

    const tick = () => {
      if (ring.current) {
        ring.current.style.transform = `translate(${rx}px,${ry}px)`;
      }
      raf = requestAnimationFrame(tick);
    };

    const onEnter = () => {
      dot.current?.classList.add("cursorHide");
      ring.current?.classList.add("cursorExpand");
    };
    const onLeave = () => {
      dot.current?.classList.remove("cursorHide");
      ring.current?.classList.remove("cursorExpand");
    };

    document.addEventListener("mousemove", onMove, { passive: true });
    raf = requestAnimationFrame(tick);

    const targets = document.querySelectorAll("a,button,[role='button']");
    targets.forEach((el) => {
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
    });

    return () => {
      document.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
      targets.forEach((el) => {
        el.removeEventListener("mouseenter", onEnter);
        el.removeEventListener("mouseleave", onLeave);
      });
    };
  }, []);

  return (
    <>
      <div ref={dot}  className="cursorDot"  aria-hidden />
      <div ref={ring} className="cursorRing" aria-hidden />
    </>
  );
}
