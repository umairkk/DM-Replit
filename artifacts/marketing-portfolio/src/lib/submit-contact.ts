export type ContactFormValues = {
  name: string;
  email: string;
  message: string;
};

const FORM_NAME = "contact";

/** Netlify Forms — works on static deploy without a backend. */
export async function submitContactForm(values: ContactFormValues): Promise<void> {
  const response = await fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      "form-name": FORM_NAME,
      name: values.name,
      email: values.email,
      message: values.message,
    }).toString(),
  });

  if (!response.ok) {
    throw new Error("Form submission failed");
  }
}
