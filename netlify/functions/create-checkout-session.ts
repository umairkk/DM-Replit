import type { Handler, HandlerEvent } from "@netlify/functions";
import { createCheckoutSession } from "@workspace/stripe";

const JSON_HEADERS = {
  "Content-Type": "application/json",
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "Content-Type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

function resolveOrigin(event: HandlerEvent): string {
  const bodyOrigin = (() => {
    try {
      const parsed = JSON.parse(event.body ?? "{}") as { origin?: string };
      return parsed.origin;
    } catch {
      return undefined;
    }
  })();

  return (
    bodyOrigin ||
    event.headers.origin ||
    event.headers.referer?.replace(/\/$/, "").split("/").slice(0, 3).join("/") ||
    "https://umairaltaf.com"
  );
}

export const handler: Handler = async (event) => {
  if (event.httpMethod === "OPTIONS") {
    return { statusCode: 204, headers: JSON_HEADERS, body: "" };
  }

  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      headers: JSON_HEADERS,
      body: JSON.stringify({ error: "Method not allowed" }),
    };
  }

  try {
    const { productId } = JSON.parse(event.body ?? "{}") as { productId?: string };
    if (!productId) {
      return {
        statusCode: 400,
        headers: JSON_HEADERS,
        body: JSON.stringify({ error: "Missing productId" }),
      };
    }

    const { url } = await createCheckoutSession({
      productId,
      origin: resolveOrigin(event),
    });

    return {
      statusCode: 200,
      headers: JSON_HEADERS,
      body: JSON.stringify({ url }),
    };
  } catch (error) {
    return {
      statusCode: 400,
      headers: JSON_HEADERS,
      body: JSON.stringify({
        error: error instanceof Error ? error.message : "Checkout failed",
      }),
    };
  }
};
