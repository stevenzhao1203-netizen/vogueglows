import { SiteFooter, SiteHeader } from "@/components/site-chrome";

const pages: Record<string, { title: string; body: string[] }> = {
  about: { title: "About VogueGlows", body: ["VogueGlows is a small independent journal about style and everyday life. We write about the things people actually use: a blazer that has to work with the rest of a wardrobe, a travel case that keeps the small stuff together, and the home pieces that take up real space.", "The Edit is where our shopping notes live. We look at the questions that are easy to miss on a product page: fit, material, cleaning, return terms, and whether something suits the routine it is meant for. A merchant link is added only after we have checked the destination.", "We do not call a category guide a hands-on review. Product facts come from the manufacturer or retailer; editorial judgement is our own. When a link may earn a commission, we say so near the link."] },
  contact: { title: "Contact VogueGlows", body: ["For editorial questions, partnership enquiries, or feedback, contact admin@vogueglows.com.", "Please do not send payment details, passwords, or other sensitive personal information by email."] },
  privacy: { title: "Privacy Policy", body: ["VogueGlows does not currently offer member accounts or a newsletter. If you contact us by email, we use the information you provide to reply to your message and do not sell personal information.", "This site may link to third-party merchants. Their privacy practices and cookies are governed by their own policies. You can contact admin@vogueglows.com with privacy questions."] },
  terms: { title: "Terms of Use", body: ["The information on VogueGlows is provided for general editorial purposes. It is not professional, legal, medical, or financial advice.", "Product availability, pricing, specifications, and merchant terms can change. Please confirm them directly with the official manufacturer or retailer before purchasing."] },
  disclosure: { title: "Affiliate Disclosure", body: ["VogueGlows may participate in affiliate programs. Where an affiliate link is published, we may earn a commission on a qualifying purchase at no extra cost to you.", "An affiliate relationship does not change our editorial approach. We publish merchant links only after the product page and destination are reviewed. Prices, availability, specifications, and merchant terms can change, so please confirm them on the seller's current page before purchasing."] },
  "cookie-notice": { title: "Cookie Notice", body: ["VogueGlows uses only the technical cookies needed to operate the site. We do not currently offer member accounts or a newsletter.", "Third-party merchants linked from VogueGlows may use cookies under their own policies. You can manage browser cookie preferences in your browser settings."] }
};

export function generateStaticParams() { return Object.keys(pages).map((slug) => ({ slug })); }

export default async function InfoPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = pages[slug];
  if (!page) return null;
  return <main><SiteHeader active={slug === "about" ? "about" : undefined} /><article className="info-page"><p>VogueGlows</p><h1>{page.title}</h1>{page.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</article><SiteFooter /></main>;
}
