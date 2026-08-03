export type PrivacySection = {
  id: string;
  title: string;
  paragraphs: string[];
  list?: string[];
  paragraphsAfterList?: string[];
};

export const PRIVACY_POLICY = {
  title: "Privacy Policy",
  lastUpdated: "August 3, 2026",
  intro:
    "This Privacy Policy explains how Umair Altaf (“we,” “us,” or “our”) collects, uses, and protects personal information when you visit umairaltaf.com or contact us through the site.",
  sections: [
    {
      id: "information-we-collect",
      title: "Information We Collect",
      paragraphs: [
        "We collect information you choose to provide when you interact with this website, including when you submit a contact form, request a free audit, or book a strategy call.",
      ],
      list: [
        "Contact form: name, email address, and message content.",
        "Free audit / lead magnet form: name, email address, website URL, monthly ad spend range, and audit type.",
        "Scheduling: when you book a call through Calendly, you may provide your name, email address, and other details required by that service.",
        "Technical data: standard server and browser information such as IP address, device type, browser type, and pages visited, which may be collected automatically by our hosting provider.",
      ],
    },
    {
      id: "how-we-use-information",
      title: "How We Use Your Information",
      paragraphs: ["We use the information we collect for the following purposes:"],
      list: [
        "Responding to inquiries and providing marketing consulting services.",
        "Preparing audit requests and follow-up communication.",
        "Scheduling and confirming strategy calls.",
        "Improving the website, user experience, and service offerings.",
        "Protecting the website against spam, abuse, and fraudulent submissions.",
      ],
    },
    {
      id: "legal-bases",
      title: "Legal Bases for Processing",
      paragraphs: [
        "Where applicable under data protection laws, we process personal information based on your consent (for example, when you submit a form), our legitimate interest in operating and improving this business website, and our need to respond to requests you initiate.",
      ],
    },
    {
      id: "sharing",
      title: "How We Share Information",
      paragraphs: [
        "We do not sell your personal information. We may share information with trusted service providers that help us operate this website and communicate with you, including:",
      ],
      list: [
        "Netlify — website hosting and form submission processing.",
        "Calendly — appointment scheduling.",
        "Email and communication tools used to respond to your inquiries.",
      ],
      paragraphsAfterList: [
        "These providers process data on our behalf and are permitted to use it only as needed to provide their services. We may also disclose information if required by law or to protect our rights, users, or the public.",
      ],
    },
    {
      id: "cookies",
      title: "Cookies and Similar Technologies",
      paragraphs: [
        "This website may use cookies or similar technologies placed by our hosting platform or embedded third-party services (such as Calendly) to enable core functionality, remember preferences, or measure usage. You can control cookies through your browser settings, though disabling them may affect certain features.",
      ],
    },
    {
      id: "retention",
      title: "Data Retention",
      paragraphs: [
        "We retain personal information only for as long as needed to respond to your request, provide services, maintain business records, or comply with legal obligations. Form submissions and related correspondence are typically retained for up to three years unless a longer period is required or you ask us to delete them sooner.",
      ],
    },
    {
      id: "security",
      title: "Data Security",
      paragraphs: [
        "We use reasonable administrative, technical, and organizational measures to protect personal information. However, no method of transmission over the internet or electronic storage is completely secure, and we cannot guarantee absolute security.",
      ],
    },
    {
      id: "your-rights",
      title: "Your Rights and Choices",
      paragraphs: ["Depending on your location, you may have the right to:"],
      list: [
        "Request access to the personal information we hold about you.",
        "Request correction or deletion of your personal information.",
        "Object to or restrict certain processing activities.",
        "Withdraw consent where processing is based on consent.",
      ],
      paragraphsAfterList: [
        "To exercise these rights, contact us using the details below. We may need to verify your identity before responding.",
      ],
    },
    {
      id: "third-party-links",
      title: "Third-Party Links",
      paragraphs: [
        "This website may contain links to third-party websites or profiles (such as Upwork or social platforms). We are not responsible for the privacy practices of those sites and encourage you to review their policies before providing personal information.",
      ],
    },
    {
      id: "children",
      title: "Children's Privacy",
      paragraphs: [
        "This website is intended for business users and is not directed to children under 16. We do not knowingly collect personal information from children.",
      ],
    },
    {
      id: "changes",
      title: "Changes to This Policy",
      paragraphs: [
        "We may update this Privacy Policy from time to time. The “Last updated” date at the top of this page indicates when the policy was last revised. Continued use of the website after changes are posted constitutes acceptance of the updated policy.",
      ],
    },
    {
      id: "contact",
      title: "Contact Us",
      paragraphs: [
        "If you have questions about this Privacy Policy or wish to make a privacy-related request, contact:",
      ],
    },
  ] satisfies PrivacySection[],
} as const;
