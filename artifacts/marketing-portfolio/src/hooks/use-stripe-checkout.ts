import { useCallback, useState } from "react";
import { startStripeCheckout } from "@/lib/start-stripe-checkout";

export function useStripeCheckout() {
  const [loadingProductId, setLoadingProductId] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const checkout = useCallback(async (productId: string) => {
    if (loadingProductId) {
      return;
    }

    setLoadingProductId(productId);
    setError(null);

    try {
      const url = await startStripeCheckout(productId);
      window.location.href = url;
    } catch (err) {
      setError(err instanceof Error ? err.message : "Checkout failed. Please try again.");
      setLoadingProductId(null);
    }
  }, [loadingProductId]);

  const clearError = useCallback(() => setError(null), []);

  return {
    checkout,
    loadingProductId,
    error,
    clearError,
    isLoading: loadingProductId !== null,
  };
}
