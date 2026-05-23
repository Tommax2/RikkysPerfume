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
      className="grid"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.05 }}
    >
      {products.map((product, index) => (
        <ProductCard key={product.id} product={product} index={index} onAdd={onAdd} />
      ))}
    </motion.section>
  );
}
