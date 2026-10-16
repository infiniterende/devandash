import Tag from "./ui/Tag";
import Reveal from "./motion/Reveal";
import HorizontalScroller from "./motion/HorizontalScroller";
import ProductCard from "./ProductCard";
import { PRODUCTS } from "@/lib/products";
import styles from "./Products.module.css";

export default function Products() {
  return (
    <section id="shop" className={styles.shop}>
      <Reveal className={styles.header}>
        <div className={styles.headline}>
          <Tag>Shop</Tag>
          <h2 className={styles.h2}>
            Things we make.
            <br />
            <span className={styles.faint}>Designed with the same care.</span>
          </h2>
        </div>
        <p className={styles.lede}>
          Digital products from the studio: designed, built, and delivered instantly.
        </p>
      </Reveal>

      <HorizontalScroller fallbackClassName={styles.stack}>
        {PRODUCTS.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </HorizontalScroller>
    </section>
  );
}
