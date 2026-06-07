export async function submitLeadMagnetFormElement(form: HTMLFormElement): Promise<void> {
  const response = await fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams(new FormData(form)).toString(),
  });

  if (!response.ok) {
    throw new Error(`Lead magnet submission failed (${response.status})`);
  }
}
