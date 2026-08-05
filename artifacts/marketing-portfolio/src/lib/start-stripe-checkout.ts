const CHECKOUT_ENDPOINTS = [
  "/.netlify/functions/create-checkout-session",
  "/api/checkout/session",
] as const;

export type CheckoutResponse = {
  url?: string;
  error?: string;
};

export async function startStripeCheckout(productId: string): Promise<string> {
  const origin = window.location.origin;
  let lastError = "Checkout is unavailable. Please try again or contact us.";

  for (const endpoint of CHECKOUT_ENDPOINTS) {
    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ productId, origin }),
      });

      const data = (await response.json()) as CheckoutResponse;

      if (response.ok && data.url) {
        return data.url;
      }

      if (data.error) {
        lastError = data.error;
      }
    } catch {
      // Try the next endpoint (Netlify function vs local API proxy).
    }
  }

  throw new Error(lastError);
}
