import { motion } from "framer-motion";
import ProductCard from "./ProductCard";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09 } },
};

export default function ProductGrid({ products, onAdd }) {
  return (
    <motion.section
      id="collection"
      className="relative z-[1] grid grid-cols-1 gap-4 bg-transparent px-[1.1rem] pb-5 sm:grid-cols-2 lg:grid-cols-3"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.05 }}
    >
      {products.map((product) => (
        <ProductCard key={product.id} product={product} onAdd={onAdd} />
      ))}
    </motion.section>
  );
}
