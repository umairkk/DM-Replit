export async function submitOnboardingFormElement(form: HTMLFormElement): Promise<void> {
  const params = new URLSearchParams();
  for (const [key, value] of new FormData(form).entries()) {
    params.append(key, String(value));
  }

  const response = await fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: params.toString(),
  });

  if (!response.ok) {
    throw new Error(`Onboarding submission failed (${response.status})`);
  }
}
