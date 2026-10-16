import { readFile } from "node:fs/promises";
import path from "node:path";
import { NextResponse } from "next/server";
import { get as getBlob } from "@vercel/blob";
import { resolvePurchase } from "@/lib/stripe";
import type { Product } from "@/lib/products";

export const runtime = "nodejs";

/**
 * Serves the purchased file after re-verifying the Checkout session with Stripe.
 * The session id is unguessable, so a paid session_id doubles as the buyer's
 * re-download link; no expiry is enforced.
 */
export async function GET(request: Request) {
  const sessionId = new URL(request.url).searchParams.get("session_id");
  if (!sessionId || !sessionId.startsWith("cs_")) {
    return NextResponse.json({ error: "Missing session." }, { status: 400 });
  }

  let product: Product | undefined;
  try {
    const purchase = await resolvePurchase(sessionId);
    if (!purchase.paid) {
      return NextResponse.json({ error: "Payment not completed." }, { status: 402 });
    }
    product = purchase.product;
  } catch (err) {
    console.error("Download verification failed", err);
    return NextResponse.json({ error: "Could not verify this purchase." }, { status: 403 });
  }
  if (!product) {
    return NextResponse.json({ error: "Product not found for this purchase." }, { status: 404 });
  }

  const headers = {
    "Content-Type": "application/pdf",
    "Content-Disposition": `attachment; filename="${product.fileName}"`,
    "Cache-Control": "private, no-store",
  };

  // Production: stream from the product's private Vercel Blob (needs BLOB_READ_WRITE_TOKEN),
  // or any other private URL named by the product's fileUrlEnv. Development: read from private/.
  const remote = process.env[product.fileUrlEnv];
  if (remote) {
    try {
      if (process.env.BLOB_READ_WRITE_TOKEN) {
        const blob = await getBlob(remote, { access: "private" });
        if (!blob || !blob.stream) throw new Error("Blob not found");
        return new Response(blob.stream, { headers });
      }
      const upstream = await fetch(remote);
      if (!upstream.ok || !upstream.body) throw new Error(`Upstream ${upstream.status}`);
      return new Response(upstream.body, { headers });
    } catch (err) {
      console.error("Product file fetch failed", err);
      return NextResponse.json({ error: "File temporarily unavailable." }, { status: 502 });
    }
  }

  try {
    const file = await readFile(path.join(process.cwd(), "private", product.fileName));
    return new Response(file, { headers });
  } catch {
    console.error(`Product file missing: set ${product.fileUrlEnv} or add private/${product.fileName}`);
    return NextResponse.json({ error: "File temporarily unavailable." }, { status: 502 });
  }
}
