export type ContactFormValues = {
  name: string;
  email: string;
  message: string;
};

const FORM_NAME = "contact";

/** Netlify Forms — POST must not be caught by SPA GET redirects. */
export async function submitContactForm(values: ContactFormValues): Promise<void> {
  const body = new URLSearchParams({
    "form-name": FORM_NAME,
    name: values.name,
    email: values.email,
    message: values.message,
    "bot-field": "",
  });

  const response = await fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: body.toString(),
  });

  if (!response.ok) {
    throw new Error(`Form submission failed (${response.status})`);
  }
}

/** Submit from a live form element (includes hidden Netlify fields). */
export async function submitContactFormElement(form: HTMLFormElement): Promise<void> {
  const response = await fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams(new FormData(form)).toString(),
  });

  if (!response.ok) {
    throw new Error(`Form submission failed (${response.status})`);
  }
}
