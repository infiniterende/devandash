import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Tag from "@/components/ui/Tag";
import Button from "@/components/ui/Button";
import Halftone from "@/components/ui/Halftone";
import { resolvePurchase } from "@/lib/stripe";
import pageStyles from "@/app/page.module.css";
import styles from "./thanks.module.css";

export const metadata: Metadata = {
  title: "Thank you — dev&dash",
  robots: { index: false, follow: false },
};

export const dynamic = "force-dynamic";

type Status =
  | { kind: "paid"; productName: string; email: string | null; sessionId: string }
  | { kind: "unpaid" }
  | { kind: "missing" }
  | { kind: "error" };

async function lookup(sessionId: string | undefined): Promise<Status> {
  if (!sessionId || !sessionId.startsWith("cs_")) return { kind: "missing" };
  try {
    const purchase = await resolvePurchase(sessionId);
    if (!purchase.paid) return { kind: "unpaid" };
    return {
      kind: "paid",
      productName: purchase.product?.name ?? "your purchase",
      email: purchase.email,
      sessionId,
    };
  } catch (err) {
    console.error("Could not look up Checkout session", err);
    return { kind: "error" };
  }
}

export default async function ThanksPage({
  searchParams,
}: {
  searchParams: Promise<{ session_id?: string }>;
}) {
  const { session_id } = await searchParams;
  const status = await lookup(session_id);

  return (
    <main className={pageStyles.page}>
      <section className={styles.panel} aria-label="Order confirmation">
        <Halftone
          mask="radial-gradient(38% 42% at 12% 70%, #000, transparent 70%), radial-gradient(34% 40% at 90% 60%, #000, transparent 70%)"
          opacity={0.7}
        />
        <Nav active="/#shop" />
        <div className={styles.card}>
          {status.kind === "paid" ? (
            <>
              <Tag>Order confirmed</Tag>
              <h1 className={styles.h1}>Thank you. Your download is ready.</h1>
              <p className={styles.text}>
                {status.email
                  ? `A receipt from Stripe is on its way to ${status.email}.`
                  : "A receipt from Stripe is on its way to your inbox."}{" "}
                Download {status.productName} below, and bookmark this page: the link
                keeps working if you need the file again.
              </p>
              <Button
                href={`/api/download?session_id=${encodeURIComponent(status.sessionId)}`}
                variant="dark"
              >
                Download PDF →
              </Button>
            </>
          ) : status.kind === "unpaid" ? (
            <>
              <Tag>Payment pending</Tag>
              <h1 className={styles.h1}>We haven&apos;t received the payment yet.</h1>
              <p className={styles.text}>
                If you just paid, give it a moment and refresh this page. Otherwise head back
                to the shop to try again.
              </p>
              <Button href="/#shop" variant="dark">
                Back to the shop →
              </Button>
            </>
          ) : (
            <>
              <Tag>Nothing to show</Tag>
              <h1 className={styles.h1}>We couldn&apos;t find that order.</h1>
              <p className={styles.text}>
                The link may be incomplete. Use the link from your Stripe receipt, or{" "}
                <Link href="/#contact">contact us</Link> and we&apos;ll sort it out.
              </p>
              <Button href="/#shop" variant="dark">
                Back to the shop →
              </Button>
            </>
          )}
        </div>
      </section>
      <Footer />
    </main>
  );
}
