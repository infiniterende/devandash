import "server-only";
import Stripe from "stripe";
import { matchProduct, type Product } from "./products";

let client: Stripe | null = null;

/** Lazily construct the Stripe client so missing keys fail at request time with a clear message. */
export function getStripe(): Stripe {
  if (client) return client;
  const key = process.env.STRIPE_SECRET_KEY;
  if (!key) {
    throw new Error("STRIPE_SECRET_KEY is not set. Add it to .env.local (see .env.example).");
  }
  client = new Stripe(key);
  return client;
}

/** Retrieve a Checkout session and work out which product was bought. */
export async function resolvePurchase(sessionId: string): Promise<{
  paid: boolean;
  product?: Product;
  email: string | null;
}> {
  const stripe = getStripe();
  const session = await stripe.checkout.sessions.retrieve(sessionId, { expand: ["line_items"] });
  const paid = session.payment_status === "paid";
  const paymentLinkId = typeof session.payment_link === "string" ? session.payment_link : session.payment_link?.id ?? null;
  const lineItemNames = (session.line_items?.data ?? []).map((li) => li.description ?? "").filter(Boolean);
  const product = matchProduct({ paymentLinkId, metadataSlug: session.metadata?.productSlug ?? null, lineItemNames });
  return { paid, product, email: session.customer_details?.email ?? null };
}
