import "server-only";
import Stripe from "stripe";

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
