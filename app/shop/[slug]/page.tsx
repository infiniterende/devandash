import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Tag from "@/components/ui/Tag";
import Button from "@/components/ui/Button";
import Halftone from "@/components/ui/Halftone";
import Cinematic from "@/components/motion/Cinematic";
import { PRODUCTS, getProduct, formatPrice } from "@/lib/products";
import { SITE_URL } from "@/lib/site";
import pageStyles from "@/app/page.module.css";
import styles from "./product.module.css";

type Params = { slug: string };

const ACCENT = "#9a7a3c";

export function generateStaticParams(): Params[] {
  return PRODUCTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return {};
  const title = `${product.name} — dev&dash`;
  return {
    title,
    description: product.summary,
    openGraph: {
      title,
      description: product.summary,
      url: new URL(`/shop/${product.slug}`, SITE_URL).toString(),
      images: [{ url: product.images[0].src, width: product.images[0].width, height: product.images[0].height }],
    },
  };
}

export default async function ProductPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const price = formatPrice(product);
  const accentVars = { "--accent": ACCENT } as React.CSSProperties;

  return (
    <main className={pageStyles.page} style={accentVars}>
      {/* Header */}
      <section className={styles.header} aria-label={product.name}>
        <Halftone
          mask="radial-gradient(38% 42% at 12% 70%, #000, transparent 70%), radial-gradient(34% 40% at 90% 60%, #000, transparent 70%)"
          opacity={0.7}
        />
        <Cinematic grain={0.1} vignette={0.28} />
        <Nav active="/#shop" />
        <div className={styles.headerBody}>
          <Link href="/#shop" className={styles.back}>
            ← Shop
          </Link>
          <Tag onGradient>Digital planner · {product.format.split(" · ")[1]}</Tag>
          <h1 className={styles.h1}>{product.name}</h1>
          <p className={styles.summary}>{product.summary}</p>
          <div className={styles.headerActions}>
            <Button href={product.stripePaymentLink} variant="light">
              Buy now · {price}
            </Button>
            <a href="#inside" className={styles.ghost}>
              See what&apos;s inside
            </a>
          </div>
        </div>
      </section>

      {/* Cover card overlapping the header */}
      <div className={styles.coverCard}>
        <div className={styles.coverFrame}>
          <div className={styles.coverShot}>
            <Image
              src={product.images[0].src}
              alt={product.images[0].alt}
              width={product.images[0].width}
              height={product.images[0].height}
              sizes="(max-width: 1320px) 100vw, 1280px"
              priority
              className={styles.img}
            />
          </div>
        </div>
      </div>

      {/* Overview: description + features, with a sticky purchase panel */}
      <section className={styles.overview}>
        <div className={styles.overviewText}>
          <span className={styles.label}>About the planner</span>
          <h2 className={styles.h2}>{product.tagline}</h2>
          <p className={styles.body}>{product.description}</p>
          <ul className={styles.features}>
            {product.features.map((f) => (
              <li key={f} className={styles.feature}>
                {f}
              </li>
            ))}
          </ul>
        </div>

        <aside className={styles.buyPanel} aria-label="Purchase">
          <span className={styles.panelPrice}>{price}</span>
          <span className={styles.panelMeta}>{product.format}</span>
          <Button href={product.stripePaymentLink} variant="dark" hoverColor={ACCENT}>
            Buy now →
          </Button>
          <span className={styles.panelNote}>Secure checkout by Stripe · Instant PDF download</span>
          <dl className={styles.specs}>
            {product.specs.map((s) => (
              <div key={s.label} className={styles.specRow}>
                <dt className={styles.specKey}>{s.label}</dt>
                <dd className={styles.specValue}>{s.value}</dd>
              </div>
            ))}
          </dl>
        </aside>
      </section>

      {/* What's inside, section by section */}
      <section id="inside" className={styles.inside}>
        <div className={styles.insideHeader}>
          <Tag>What&apos;s inside</Tag>
          <h2 className={styles.h2Big}>
            Ten sections. One tap between them.
            <br />
            <span className={styles.faint}>574 pages, all linked.</span>
          </h2>
        </div>
        <div className={styles.sectionList}>
          {product.sections.map((sec, i) => (
            <article
              key={sec.name}
              className={`${styles.sectionCard} ${i % 2 === 1 ? styles.sectionCardFlip : ""}`}
            >
              <div className={styles.sectionShot}>
                <Image
                  src={sec.image}
                  alt={sec.caption}
                  width={1600}
                  height={1200}
                  sizes="(max-width: 940px) 100vw, 640px"
                  className={styles.img}
                />
                <span className={styles.shotCaption}>{sec.caption}</span>
              </div>
              <div className={styles.sectionText}>
                <span className={styles.label}>
                  {String(i + 1).padStart(2, "0")} — {sec.pageCount}
                </span>
                <h3 className={styles.h3}>{sec.name}</h3>
                <p className={styles.body}>{sec.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Full page gallery */}
      <section className={styles.gallery}>
        <div className={styles.insideHeader}>
          <Tag>Page gallery</Tag>
          <h2 className={styles.h2Big}>A closer look.</h2>
        </div>
        <ul className={styles.pageGrid}>
          {[...product.images.slice(1), ...product.pages.map((p) => ({ src: p.src, alt: p.caption, width: p.width, height: p.height }))].map(
            (img) => (
              <li key={img.src} className={styles.pageItem}>
                <div className={styles.pageShot}>
                  <Image src={img.src} alt={img.alt} width={img.width} height={img.height} sizes="(max-width: 720px) 100vw, (max-width: 1100px) 50vw, 420px" className={styles.img} />
                </div>
                <span className={styles.pageCaption}>{img.alt}</span>
              </li>
            ),
          )}
        </ul>
      </section>

      {/* FAQ + CTA */}
      <section className={styles.faq}>
        <div className={styles.faqList}>
          <Tag>Questions</Tag>
          {product.faq.map((item) => (
            <details key={item.q} className={styles.faqItem}>
              <summary className={styles.faqQ}>{item.q}</summary>
              <p className={styles.faqA}>{item.a}</p>
            </details>
          ))}
        </div>
        <div className={styles.ctaCard}>
          <span className={styles.panelPrice}>{price}</span>
          <p className={styles.ctaText}>Plan intentionally. Study effectively. Build your future.</p>
          <Button href={product.stripePaymentLink} variant="dark" hoverColor={ACCENT}>
            Buy the planner →
          </Button>
          <span className={styles.panelNote}>
            Prefer Payhip?{" "}
            <a href={product.payhipUrl} target="_blank" rel="noopener noreferrer">
              Buy it there instead
            </a>
            .
          </span>
        </div>
      </section>

      <Footer />
    </main>
  );
}
