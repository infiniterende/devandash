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
  /** Product page: what's inside, by section of the planner. */
  sections: { name: string; pageCount: string; description: string; image: string; caption: string }[];
  /** Product page: specs table. */
  specs: { label: string; value: string }[];
  /** Product page: FAQ. */
  faq: { q: string; a: string }[];
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
    summary:
      "A 574-page, fully hyperlinked digital planner for students and early-career professionals: dated daily pages, weekly and monthly spreads, and worksheets for study, career, money, and habits.",
    sections: [
      {
        name: "Home & Year",
        pageCount: "15 pages",
        description:
          "A dashboard with the whole year at a glance, a full index where every section is one tap away, a vision board, key dates, three goals for the year, quarter focus pages, and a goal progress tracker.",
        image: "/images/planner/home.webp",
        caption: "Home dashboard",
      },
      {
        name: "Monthly",
        pageCount: "12 calendars + 12 planning pages",
        description:
          "A Monday-start calendar for every month with week numbers and tinted weekends, paired with a monthly planning page for goals, budget, and habits.",
        image: "/images/planner/monthplan.webp",
        caption: "Monthly goals, budget & habits",
      },
      {
        name: "Weekly",
        pageCount: "53 schedules + 53 reviews",
        description:
          "A seven-column schedule for every week, plus a plan-and-review page with priorities, assignment deadlines, study sessions, appointments, interview prep, a habit checklist, and reflection prompts.",
        image: "/images/planner/weekreview.webp",
        caption: "Weekly plan & review",
      },
      {
        name: "Daily",
        pageCount: "365 dated pages",
        description:
          "Every day of 2027 gets its own page: an hourly schedule from 6 am to 9 pm, top three, to-dos, study goals, a career development task, water and wellness, sleep and energy, notes, and a reflection prompt.",
        image: "/images/planner/daily.webp",
        caption: "Daily page",
      },
      {
        name: "Academic",
        pageCount: "Worksheets",
        description:
          "Course overview, key dates, topic trackers, assignment and exam schedules, a grade tracker with GPA, thesis milestones, advisor meeting notes, and practice logs.",
        image: "/images/planner/courses.webp",
        caption: "Courses",
      },
      {
        name: "Career",
        pageCount: "Worksheets",
        description:
          "Job search milestones, three job application tracker sheets with a status key, interview preparation, resume structure, networking checklists, and meeting notes.",
        image: "/images/planner/interview.webp",
        caption: "Interview prep",
      },
      {
        name: "Finance",
        pageCount: "Worksheets",
        description:
          "Monthly budget with income, expenses, and summary, a savings deposit log, debt tracker, and expense logs.",
        image: "/images/planner/savings.webp",
        caption: "Savings & deposit log",
      },
      {
        name: "Life & Notes",
        pageCount: "Worksheets + note pages",
        description:
          "Habit tracker, morning and evening routines, time-blocking, Eisenhower matrix, project planner, brain dump, reading tracker, reflection journal, and lined, grid, dot, and sketch pages, plus a page of digital stickers.",
        image: "/images/planner/stickers.webp",
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
