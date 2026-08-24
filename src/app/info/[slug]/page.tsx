import { ArrowLeft } from "lucide-react";

const pages: Record<string, { title: string; body: string[] }> = {
  about: { title: "About VogueGlows", body: ["VogueGlows is an independent editorial guide for people who prefer fewer, more considered choices across style and everyday living.", "Our editorial pages separate buying context from commercial destinations. Recommendations are only connected to merchants after the listing and affiliate URL are reviewed."] },
  contact: { title: "Contact VogueGlows", body: ["For editorial questions, partnership enquiries, or feedback, contact us at admin@vogueglows.com.", "Please do not send sensitive personal information through email. We aim to respond to genuine editorial and business enquiries as soon as possible."] },
  privacy: { title: "Privacy Policy", body: ["VogueGlows only collects information you choose to share, such as an email address submitted for the newsletter. We use this information to send the content you requested and do not sell personal information.", "This site may link to third-party merchants. Their privacy practices and cookies are governed by their own policies. You can contact admin@vogueglows.com with privacy questions."] },
  terms: { title: "Terms of Use", body: ["The information on VogueGlows is provided for general editorial purposes. It is not professional, legal, medical, or financial advice.", "Product availability, pricing, specifications, and merchant terms can change. Please confirm them directly with the official manufacturer or retailer before purchasing."] },
  disclosure: { title: "Affiliate Disclosure", body: ["VogueGlows participates in affiliate programs. Some links on this site may earn us a commission when you make a qualifying purchase, at no additional cost to you.", "Commercial relationships do not determine our point of view. We aim to select recommendations based on relevance, usefulness, and style. Prices, product availability, and merchant terms can change; please review them directly before purchasing."] },
  "cookie-notice": { title: "Cookie Notice", body: ["Cookies may be used to support essential site functions and understand aggregate usage. We do not use cookies to invent a profile about you.", "Third-party merchants linked from VogueGlows may use cookies under their own policies. You can manage browser cookie preferences in your browser settings."] }
};

export function generateStaticParams() { return Object.keys(pages).map((slug) => ({ slug })); }

export default async function InfoPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = pages[slug];
  if (!page) return null;
  return <main><header className="simple-header"><a className="wordmark" href="/">Vogue<span>Glows</span></a><a href="/"><ArrowLeft size={15} /> Home</a></header><article className="info-page"><p>VogueGlows</p><h1>{page.title}</h1>{page.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</article><footer><a className="wordmark" href="/">Vogue<span>Glows</span></a><p>Copyright 2026 VogueGlows.</p><div><a href="/info/privacy">Privacy</a><a href="/info/terms">Terms</a><a href="/info/cookie-notice">Cookies</a></div></footer></main>;
}
