import Image from "next/image";
import Tag from "./ui/Tag";
import Button from "./ui/Button";
import { PRODUCTS, formatPrice } from "@/lib/products";
import styles from "./Products.module.css";

const ACCENT = "#9a7a3c";

export default function Products() {
  return (
    <section id="shop" className={styles.shop}>
      <div className={styles.header}>
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
      </div>

      {PRODUCTS.map((product) => (
        <article
          key={product.slug}
          className={styles.card}
          style={{ "--accent": ACCENT } as React.CSSProperties}
        >
          <div className={styles.gallery}>
            <div className={styles.cover}>
              <Image
                src={product.images[0].src}
                alt={product.images[0].alt}
                width={product.images[0].width}
                height={product.images[0].height}
                sizes="(max-width: 940px) 100vw, 640px"
                className={styles.img}
              />
            </div>
            {product.images.length > 1 && (
              <div className={styles.thumbs}>
                {product.images.slice(1, 3).map((img) => (
                  <div key={img.src} className={styles.thumb}>
                    <Image
                      src={img.src}
                      alt={img.alt}
                      width={img.width}
                      height={img.height}
                      sizes="(max-width: 940px) 50vw, 310px"
                      className={styles.img}
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className={styles.text}>
            <span className={styles.meta}>{product.format}</span>
            <div className={styles.titles}>
              <h3 className={styles.h3}>{product.name}</h3>
              <h4 className={styles.h4} style={{ color: ACCENT }}>
                {product.tagline}
              </h4>
            </div>
            <p className={styles.description}>{product.description}</p>
            <ul className={styles.features}>
              {product.features.map((f) => (
                <li key={f} className={styles.feature}>
                  {f}
                </li>
              ))}
            </ul>
            <div className={styles.purchase}>
              <span className={styles.price}>{formatPrice(product)}</span>
              <Button href={product.stripePaymentLink} variant="dark" hoverColor={ACCENT}>
                Buy now →
              </Button>
              <span className={styles.note}>Secure checkout by Stripe · Instant PDF download</span>
            </div>
          </div>
        </article>
      ))}
    </section>
  );
}
