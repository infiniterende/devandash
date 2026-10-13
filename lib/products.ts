/**
 * Digital products sold through Stripe Payment Links. Prices are in the smallest
 * currency unit (cents) and must match the Payment Link. The file is delivered
 * by /api/download after the Checkout session is verified.
 */
export type Product = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  features: string[];
  format: string;
  priceCents: number;
  currency: "usd";
  images: { src: string; alt: string; width: number; height: number }[];
  /** File name in `private/` (dev) and the download file name sent to buyers. */
  fileName: string;
  /** Stripe Payment Link that sells this product. */
  stripePaymentLink: string;
  /** Payhip listing, kept as a fallback store link. */
  payhipUrl: string;
};

export const PRODUCTS: Product[] = [
  {
    slug: "2027-student-career-planner",
    name: "2027 Student & Career Planner",
    tagline: "Plan intentionally. Study effectively. Build your future.",
    description:
      "A 574-page digital planner that combines academic planning, career development, personal productivity, and financial organization in one minimalist PDF. Designed for students, recent graduates, and job seekers who want to stay organized throughout 2027.",
    features: [
      "365 dated daily planning pages",
      "53 weekly planning spreads",
      "12 monthly calendars",
      "Assignment, exam, and grade trackers",
      "Job application and interview worksheets",
      "Resume and networking checklists",
      "Budget, savings, and expense trackers",
      "Goal setting, habit tracking, and reflection pages",
    ],
    format: "Digital PDF · 574 pages · 6 MB",
    priceCents: 1099,
    currency: "usd",
    images: [
      { src: "/images/planner-1.webp", alt: "2027 Student & Career Planner cover", width: 2000, height: 1500 },
      { src: "/images/planner-2.webp", alt: "Planner spread", width: 2000, height: 1500 },
      { src: "/images/planner-3.webp", alt: "Planner spread", width: 2000, height: 1500 },
    ],
    fileName: "2027_Student_Career_Planner.pdf",
    stripePaymentLink: "https://buy.stripe.com/aFaeVf3NkfsMcfRfyj7ok00",
    payhipUrl: "https://payhip.com/b/dQ45B",
  },
];

export function getProduct(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.slug === slug);
}

export function formatPrice(product: Pick<Product, "priceCents" | "currency">): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: product.currency.toUpperCase(),
  }).format(product.priceCents / 100);
}
