import { Router, type IRouter } from "express";
import { createCheckoutSession } from "@workspace/stripe";

const router: IRouter = Router();

router.post("/checkout/session", async (req, res) => {
  try {
    const productId = req.body?.productId as string | undefined;
    if (!productId) {
      res.status(400).json({ error: "Missing productId" });
      return;
    }

    const origin =
      (req.body?.origin as string | undefined) ||
      `${req.protocol}://${req.get("host")}` ||
      "https://umairaltaf.com";

    const { url } = await createCheckoutSession({ productId, origin });
    res.json({ url });
  } catch (error) {
    res.status(400).json({
      error: error instanceof Error ? error.message : "Checkout failed",
    });
  }
});

export default router;
