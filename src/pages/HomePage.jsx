import { useOutletContext } from "react-router-dom";

import Hero            from "../components/Hero";
import Marquee         from "../components/Marquee";
import FeaturedCarousel from "../components/FeaturedCarousel";
import Benefits        from "../components/Benefits";
import Divider         from "../components/Divider";
import Testimonials    from "../components/Testimonials";
import Stats           from "../components/Stats";
import Journal         from "../components/Journal";

export default function HomePage() {
  const { onAdd } = useOutletContext();

  return (
    <>
      <Hero />
      <Marquee />
      <FeaturedCarousel onAdd={onAdd} />
      <Benefits />
      <Divider />
      <Testimonials />
      <Divider />
      <Stats />
      <Divider />
      <Journal />
    </>
  );
}
