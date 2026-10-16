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
  /** Sample pages shown in the homepage "Inside the planner" gallery. */
  pages: { src: string; caption: string; width: number; height: number }[];
  /** Product page: one-line summary used for the header and meta description. */
  summary: string;
  /** Product page: heading for the "What's inside" block, two lines. */
  insideTitle: [string, string];
  /** Product page: what's inside, section by section. */
  sections: {
    name: string;
    pageCount: string;
    description: string;
    image: string;
    imageWidth: number;
    imageHeight: number;
    caption: string;
  }[];
  /** Product page: specs table. */
  specs: { label: string; value: string }[];
  /** Product page: FAQ. */
  faq: { q: string; a: string }[];
  /** File name in `private/` (dev) and the download file name sent to buyers. */
  fileName: string;
  /** Env var holding the private production URL of the file. */
  fileUrlEnv: string;
  /** Public Stripe Payment Link (buy.stripe.com/…) that sells this product. Empty = not on sale yet. */
  stripePaymentLink: string;
  /** Stripe Payment Link id (plink_…), used to match a Checkout session to this product. */
  stripePaymentLinkId?: string;
  /** Product names as they appear in Stripe, for matching Checkout line items. */
  stripeProductNames: string[];
  /** Payhip listing, kept as a fallback store link. Empty = none. */
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
    pages: [
      { src: "/images/planner/daily.webp", caption: "Daily page · schedule, top three, wellness", width: 1600, height: 1200 },
      { src: "/images/planner/week.webp", caption: "Weekly spread", width: 1600, height: 1200 },
      { src: "/images/planner/month.webp", caption: "Monthly calendar", width: 1600, height: 1200 },
      { src: "/images/planner/grades.webp", caption: "Grade tracker with GPA", width: 1600, height: 1200 },
      { src: "/images/planner/jobs.webp", caption: "Job application tracker", width: 1600, height: 1200 },
      { src: "/images/planner/budget.webp", caption: "Monthly budget", width: 1600, height: 1200 },
      { src: "/images/planner/habits.webp", caption: "Habit tracker", width: 1600, height: 1200 },
      { src: "/images/planner/vision.webp", caption: "Vision board", width: 1600, height: 1200 },
    ],
    insideTitle: ["Ten sections. One tap between them.", "574 pages, all linked."],
    summary:
      "A 574-page, fully hyperlinked digital planner for students and early-career professionals: dated daily pages, weekly and monthly spreads, and worksheets for study, career, money, and habits.",
    sections: [
      {
        name: "Home & Year",
        pageCount: "15 pages",
        description:
          "A dashboard with the whole year at a glance, a full index where every section is one tap away, a vision board, key dates, three goals for the year, quarter focus pages, and a goal progress tracker.",
        image: "/images/planner/home.webp",
        imageWidth: 1600,
        imageHeight: 1200,
        caption: "Home dashboard",
      },
      {
        name: "Monthly",
        pageCount: "12 calendars + 12 planning pages",
        description:
          "A Monday-start calendar for every month with week numbers and tinted weekends, paired with a monthly planning page for goals, budget, and habits.",
        image: "/images/planner/monthplan.webp",
        imageWidth: 1600,
        imageHeight: 1200,
        caption: "Monthly goals, budget & habits",
      },
      {
        name: "Weekly",
        pageCount: "53 schedules + 53 reviews",
        description:
          "A seven-column schedule for every week, plus a plan-and-review page with priorities, assignment deadlines, study sessions, appointments, interview prep, a habit checklist, and reflection prompts.",
        image: "/images/planner/weekreview.webp",
        imageWidth: 1600,
        imageHeight: 1200,
        caption: "Weekly plan & review",
      },
      {
        name: "Daily",
        pageCount: "365 dated pages",
        description:
          "Every day of 2027 gets its own page: an hourly schedule from 6 am to 9 pm, top three, to-dos, study goals, a career development task, water and wellness, sleep and energy, notes, and a reflection prompt.",
        image: "/images/planner/daily.webp",
        imageWidth: 1600,
        imageHeight: 1200,
        caption: "Daily page",
      },
      {
        name: "Academic",
        pageCount: "Worksheets",
        description:
          "Course overview, key dates, topic trackers, assignment and exam schedules, a grade tracker with GPA, thesis milestones, advisor meeting notes, and practice logs.",
        image: "/images/planner/courses.webp",
        imageWidth: 1600,
        imageHeight: 1200,
        caption: "Courses",
      },
      {
        name: "Career",
        pageCount: "Worksheets",
        description:
          "Job search milestones, three job application tracker sheets with a status key, interview preparation, resume structure, networking checklists, and meeting notes.",
        image: "/images/planner/interview.webp",
        imageWidth: 1600,
        imageHeight: 1200,
        caption: "Interview prep",
      },
      {
        name: "Finance",
        pageCount: "Worksheets",
        description:
          "Monthly budget with income, expenses, and summary, a savings deposit log, debt tracker, and expense logs.",
        image: "/images/planner/savings.webp",
        imageWidth: 1600,
        imageHeight: 1200,
        caption: "Savings & deposit log",
      },
      {
        name: "Life & Notes",
        pageCount: "Worksheets + note pages",
        description:
          "Habit tracker, morning and evening routines, time-blocking, Eisenhower matrix, project planner, brain dump, reading tracker, reflection journal, and lined, grid, dot, and sketch pages, plus a page of digital stickers.",
        image: "/images/planner/stickers.webp",
        imageWidth: 1600,
        imageHeight: 1200,
        caption: "Digital stickers",
      },
    ],
    specs: [
      { label: "Format", value: "PDF, 574 pages, about 6 MB" },
      { label: "Page size", value: "Landscape, 1200 × 900 pt (4:3), made for tablets" },
      { label: "Navigation", value: "18,848 internal links: section tabs, month rail, week strips, and every calendar date" },
      { label: "Dates", value: "Dated January to December 2027, weeks starting Monday" },
      { label: "Typography", value: "Newsreader and DM Sans, embedded; vector pages that stay crisp at any zoom" },
      { label: "Works with", value: "GoodNotes, Notability, and any PDF app on iPad, Android tablets, Mac, or Windows" },
      { label: "Delivery", value: "Instant download after checkout, with a link you can reuse" },
    ],
    faq: [
      {
        q: "Is this a physical planner?",
        a: "No. It is a digital PDF you write on with a tablet and stylus, or type into with a PDF app. Nothing is shipped.",
      },
      {
        q: "Which apps does it work in?",
        a: "Any PDF app. It is designed for tablet annotation apps such as GoodNotes and Notability, where the tabs and calendar dates work as links. Preview, Acrobat, and browser PDF viewers also support the links.",
      },
      {
        q: "Can I use it for a different year?",
        a: "The daily, weekly, and monthly pages are dated for 2027. The worksheets in the Academic, Career, Finance, Life, and Notes sections are undated and reusable.",
      },
      {
        q: "How do I get the file?",
        a: "After paying through Stripe you land on a download page. The download link stays valid, so bookmark it or keep the receipt to download again.",
      },
      {
        q: "Can I print it?",
        a: "Yes. Pages are landscape 4:3 and print cleanly on A4 or Letter, though it is designed for screens.",
      },
    ],
    fileName: "2027_Student_Career_Planner.pdf",
    fileUrlEnv: "PRODUCT_FILE_URL",
    stripePaymentLink: "https://buy.stripe.com/aFaeVf3NkfsMcfRfyj7ok00",
    stripeProductNames: ["2027 Student Success Planner", "2027 Student & Career Planner"],
    payhipUrl: "https://payhip.com/b/dQ45B",
  },
  {
    slug: "morning-mercies-devotional",
    name: "Morning Mercies",
    tagline: "Daily scripture, reflection & journaling for women.",
    images: [
      { src: "/images/devotional/cover.webp", alt: "Morning Mercies cover", width: 1200, height: 1553 },
      { src: "/images/devotional/day1.webp", alt: "Day 1 · New Every Morning", width: 1200, height: 1553 },
      { src: "/images/devotional/day199.webp", alt: "Day 199 · Knit Together", width: 1200, height: 1553 },
    ],
    pages: [
      { src: "/images/devotional/day1.webp", caption: "Day 1 · New Every Morning", width: 1200, height: 1553 },
      { src: "/images/devotional/day99.webp", caption: "Day 99 · By His Wounds", width: 1200, height: 1553 },
      { src: "/images/devotional/day199.webp", caption: "Day 199 · Knit Together", width: 1200, height: 1553 },
      { src: "/images/devotional/day365.webp", caption: "Day 365 · From Everlasting to Everlasting", width: 1200, height: 1553 },
      { src: "/images/devotional/name.webp", caption: "Name page", width: 1200, height: 1553 },
    ],
    description:
      "A 365-day devotional journal for women. Every day pairs a Scripture passage from the ESV with a short reflection and lined journal space, dated January 1 through December 31 so it works for any year.",
    features: [
      "365 daily devotions, one per page",
      "A Scripture passage (ESV) for every day",
      "A short reflection you can read in minutes",
      "Lined journal space on every page",
      "Dated January to December with a day counter",
      "Letter-size pages for tablet or print",
      "Name page to make it yours",
    ],
    format: "Digital PDF · 367 pages · 4.5 MB",
    priceCents: 599,
    currency: "usd",
    insideTitle: ["One page for every morning.", "365 days, one verse at a time."],
    summary:
      "A 365-day devotional journal for women: a verse from the ESV, a short reflection, and lined journal space for every morning of the year.",
    sections: [
      {
        name: "A year of mornings",
        pageCount: "365 daily pages",
        description:
          "One page for every day from January 1 to December 31, each with the date, a day counter, and a title that sets the theme. No year is printed, so the journal works whenever you start.",
        image: "/images/devotional/day1.webp",
        imageWidth: 1200,
        imageHeight: 1553,
        caption: "Day 1 · New Every Morning",
      },
      {
        name: "Scripture first",
        pageCount: "365 passages",
        description:
          "Each day opens with a passage from the English Standard Version set in its own panel, with the reference beneath it, so the verse is the first thing you read.",
        image: "/images/devotional/day99.webp",
        imageWidth: 1200,
        imageHeight: 1553,
        caption: "Day 99 · By His Wounds",
      },
      {
        name: "A short reflection",
        pageCount: "A few minutes a day",
        description:
          "A single paragraph draws out the passage and turns it toward ordinary life: rest, trust, anxiety, waiting, and the small beginnings God brings about. Written to be read before the day fills up.",
        image: "/images/devotional/day199.webp",
        imageWidth: 1200,
        imageHeight: 1553,
        caption: "Day 199 · Knit Together",
      },
      {
        name: "Room to write",
        pageCount: "Journal lines on every page",
        description:
          "The lower half of every page is lined journal space for a prayer, a response, or what you noticed. On a tablet, write with a stylus; on paper, print the pages you want.",
        image: "/images/devotional/day365.webp",
        imageWidth: 1200,
        imageHeight: 1553,
        caption: "Day 365 · From Everlasting to Everlasting",
      },
    ],
    specs: [
      { label: "Format", value: "PDF, 367 pages, about 4.5 MB" },
      { label: "Page size", value: "US Letter, portrait (8.5 × 11 in)" },
      { label: "Scripture", value: "English Standard Version (ESV), used by permission" },
      { label: "Dates", value: "January 1 to December 31, with a day counter; no year, so it works every year" },
      { label: "Works with", value: "GoodNotes, Notability, and any PDF app; prints on Letter or A4" },
      { label: "Delivery", value: "Instant download after checkout, with a link you can reuse" },
    ],
    faq: [
      {
        q: "Is this a physical book?",
        a: "No. It is a digital PDF you can write on with a tablet and stylus, or print at home. Nothing is shipped.",
      },
      {
        q: "Which Bible translation is used?",
        a: "All Scripture quotations are from the ESV (English Standard Version), used by permission.",
      },
      {
        q: "Can I start partway through the year?",
        a: "Yes. The pages are dated by month and day but not by year, so begin on today's date and continue from there.",
      },
      {
        q: "How do I get the file?",
        a: "After paying through Stripe you land on a download page. The link stays valid, so bookmark it or keep the receipt to download again.",
      },
    ],
    fileName: "Morning_Mercies_Devotional.pdf",
    fileUrlEnv: "PRODUCT_FILE_URL_DEVOTIONAL",
    stripePaymentLink: "https://buy.stripe.com/fZudRbgA694obbN0Dp7ok01",
    stripePaymentLinkId: "plink_1URIcVQM28lu9g0TPMGNEpsc",
    stripeProductNames: ["365 Day Morning Devotional", "Morning Mercies"],
    payhipUrl: "",
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

/** Resolve a product from Stripe Checkout session facts, most specific signal first. */
export function matchProduct(facts: {
  paymentLinkId?: string | null;
  metadataSlug?: string | null;
  lineItemNames?: string[];
}): Product | undefined {
  if (facts.paymentLinkId) {
    const byLink = PRODUCTS.find((p) => p.stripePaymentLinkId === facts.paymentLinkId);
    if (byLink) return byLink;
  }
  if (facts.metadataSlug) {
    const bySlug = getProduct(facts.metadataSlug);
    if (bySlug) return bySlug;
  }
  for (const name of facts.lineItemNames ?? []) {
    const n = name.trim().toLowerCase();
    const byName = PRODUCTS.find((p) =>
      p.stripeProductNames.some((alias) => n === alias.toLowerCase() || n.includes(alias.toLowerCase())),
    );
    if (byName) return byName;
  }
  return undefined;
}
