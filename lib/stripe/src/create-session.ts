import Stripe from "stripe";
import { isValidProductId, STRIPE_PRODUCTS } from "./products";

export type CreateCheckoutSessionInput = {
  productId: string;
  origin: string;
};

export type CreateCheckoutSessionResult = {
  url: string;
};

function resolveOrigin(origin: string): string {
  const trimmed = origin.trim().replace(/\/$/, "");
  if (!trimmed.startsWith("http://") && !trimmed.startsWith("https://")) {
    return "https://umairaltaf.com";
  }
  return trimmed;
}

export async function createCheckoutSession(
  input: CreateCheckoutSessionInput,
): Promise<CreateCheckoutSessionResult> {
  const secretKey = process.env.STRIPE_SECRET_KEY;
  if (!secretKey) {
    throw new Error("Stripe is not configured. Please contact support.");
  }

  if (!isValidProductId(input.productId)) {
    throw new Error("Invalid checkout product.");
  }

  const product = STRIPE_PRODUCTS[input.productId];
  const priceId = process.env[product.envVar];
  if (!priceId || priceId.includes("REPLACE")) {
    throw new Error("Checkout is not available for this product yet. Please contact us.");
  }

  const origin = resolveOrigin(input.origin);
  const stripe = new Stripe(secretKey);

  const session = await stripe.checkout.sessions.create({
    mode: product.mode,
    line_items: [{ price: priceId, quantity: 1 }],
    success_url: `${origin}/onboarding?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${origin}/#pricing`,
    metadata: {
      productId: input.productId,
    },
    ...(product.mode === "subscription"
      ? {
          subscription_data: {
            metadata: { productId: input.productId },
          },
        }
      : {}),
  });

  if (!session.url) {
    throw new Error("Unable to start checkout. Please try again.");
  }

  return { url: session.url };
}
