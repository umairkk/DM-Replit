const SITE_URL = "https://umairaltaf.com";

const HOME_SEO = {
  title: "Umair Altaf — Google Ads & Meta Ads Consultant | Performance Marketing",
  description:
    "Hire Umair Altaf — Google Ads consultant, Meta Ads expert & performance marketing specialist. $12M+ revenue generated, 10+ years experience. Book a free strategy call.",
  path: "/",
  ogTitle: "Umair Altaf — Performance Marketing Consultant",
  ogDescription:
    "Generate more leads and revenue with Google Ads, Meta Ads, and data-driven performance marketing. Book a free strategy call.",
} as const;

type PageSeo = {
  title: string;
  description: string;
  path: string;
  ogTitle?: string;
  ogDescription?: string;
};

function setMeta(name: string, content: string, property = false) {
  const selector = property ? `meta[property="${name}"]` : `meta[name="${name}"]`;
  let tag = document.querySelector<HTMLMetaElement>(selector);
  if (!tag) {
    tag = document.createElement("meta");
    if (property) {
      tag.setAttribute("property", name);
    } else {
      tag.setAttribute("name", name);
    }
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", content);
}

function setCanonical(href: string) {
  let link = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!link) {
    link = document.createElement("link");
    link.rel = "canonical";
    document.head.appendChild(link);
  }
  link.href = href;
}

export function applyPageSeo(page: PageSeo) {
  document.title = page.title;
  setMeta("description", page.description);
  setMeta("og:title", page.ogTitle ?? page.title, true);
  setMeta("og:description", page.ogDescription ?? page.description, true);
  setMeta("og:url", `${SITE_URL}${page.path}`, true);
  setMeta("twitter:title", page.ogTitle ?? page.title);
  setMeta("twitter:description", page.ogDescription ?? page.description);
  setCanonical(`${SITE_URL}${page.path}`);
}

export function resetHomeSeo() {
  applyPageSeo(HOME_SEO);
}
