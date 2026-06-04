import { motion } from "framer-motion";
import ProductCard from "./ProductCard";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09 } },
};

export default function ProductGrid({ products, onAdd }) {
  if (products.length === 0) {
    return (
      <section id="collection" className="px-[1.1rem] pb-10 pt-6 text-center">
        <p className="text-[.68rem] uppercase tracking-[.2em] text-brand/50">
          No products in this category yet — check back soon.
        </p>
      </section>
    );
  }

  return (
    <motion.section
      id="collection"
      className="grid relative z-[1] gap-3 bg-transparent px-[1.1rem] pb-5 grid-cols-2 lg:grid-cols-3"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.05 }}
    >
      {products.map((product, i) => (
        <ProductCard key={product.id ?? `${product.name}-${product.sub}-${i}`} product={product} onAdd={onAdd} />
      ))}
    </motion.section>
  );
}
