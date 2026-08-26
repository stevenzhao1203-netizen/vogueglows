import { SiteFooter, SiteHeader } from "@/components/site-chrome";

type InfoSection = { heading: string; paragraphs: string[] };
type InfoPage = { eyebrow: string; title: string; intro: string; sections: InfoSection[] };

const pages: Record<string, InfoPage> = {
  about: { eyebrow: "VOGUEGLOWS", title: "About VogueGlows", intro: "A journal for the decisions that sit between wanting something and bringing it home.", sections: [
    { heading: "What we cover", paragraphs: ["The focus is women's fashion and the things around it: clothing, shoes, handbags, small accessories, skincare, makeup tools, and travel pieces that need to work in real routines."] },
    { heading: "How the site is organised", paragraphs: ["The Journal holds the longer notes behind those decisions. The Edit is more direct: a place to compare fit, material, care, return terms, and the everyday details a product page can make easy to miss."] },
    { heading: "What a product profile is", paragraphs: ["A product profile is not presented as a hands-on review. Each featured item links to a current manufacturer or retailer page, and an affiliate disclosure appears close to any qualifying link. The final details, including price and availability, always belong to the current listing."] }
  ] },
  contact: { eyebrow: "CONTACT", title: "Contact VogueGlows", intro: "For editorial questions, correction requests, or partnership enquiries, email admin@vogueglows.com.", sections: [
    { heading: "A useful message", paragraphs: ["For a correction, include the page URL, the statement you are querying, and a reliable source where possible. This makes it easier to review the point properly."] },
    { heading: "Privacy", paragraphs: ["Please do not send payment details, passwords, or other sensitive personal information by email."] }
  ] },
  privacy: { eyebrow: "LEGAL", title: "Privacy Policy", intro: "This policy explains the limited information VogueGlows may handle when you browse the site or contact us.", sections: [
    { heading: "Information we receive", paragraphs: ["VogueGlows does not offer member accounts. If you email us, we receive the details you choose to include, such as your name, email address, and message.", "Our hosting and security providers may process technical information needed to deliver and protect the site, such as a request's IP address, browser details, requested page, and security events."] },
    { heading: "How it is used", paragraphs: ["Information is used to operate and secure the site, reply to messages, investigate correction requests, and meet legal obligations. We do not sell or rent email correspondence."] },
    { heading: "Merchant links", paragraphs: ["Links may lead to retailers or affiliate networks. Those third parties may use their own cookies or similar technologies to attribute a visit or purchase. Their privacy practices are governed by their own policies."] },
    { heading: "Questions and requests", paragraphs: ["For privacy questions or a request about personal information you have sent to us, contact admin@vogueglows.com. We may need to verify a request before acting on it."] }
  ] },
  terms: { eyebrow: "LEGAL", title: "Terms of Use", intro: "By using VogueGlows, you agree to use the site lawfully and with these terms in mind.", sections: [
    { heading: "Editorial information", paragraphs: ["VogueGlows provides general editorial information. It is not medical, legal, financial, or other professional advice."] },
    { heading: "Product information", paragraphs: ["Prices, availability, specifications, and merchant terms can change. Confirm current details directly with the manufacturer or retailer before making a purchase."] },
    { heading: "Third-party destinations", paragraphs: ["Retailers, affiliate networks, and other third parties control their own products, transactions, delivery, warranties, and privacy practices. A link does not guarantee that an item, offer, or destination will remain available."] },
    { heading: "Using the site", paragraphs: ["You may use VogueGlows for lawful, personal purposes. Do not interfere with the site's operation, attempt unauthorised access, introduce harmful code, or reproduce substantial portions of the site without permission."] }
  ] },
  disclosure: { eyebrow: "TRANSPARENCY", title: "Affiliate Disclosure", intro: "Some links on VogueGlows are affiliate links. This page explains what that means.", sections: [
    { heading: "How a link can earn a commission", paragraphs: ["If you follow a published affiliate link and make a qualifying purchase, VogueGlows may receive a commission from the merchant or affiliate network. This does not normally change the price you pay."] },
    { heading: "Where disclosures appear", paragraphs: ["A disclosure appears before a commercial call to action or near the relevant link. A product guide without a merchant link is not a recommendation to purchase a particular item."] },
    { heading: "Redirects and final destinations", paragraphs: ["Some affiliate links may first pass through a tracking URL before taking you to a merchant. The retailer or affiliate network controls the final destination, listing, price, availability, and transaction."] },
    { heading: "Questions", paragraphs: ["For a question about a commercial relationship or a published link, contact admin@vogueglows.com."] }
  ] },
  "editorial-policy": { eyebrow: "OUR STANDARDS", title: "Editorial Policy", intro: "These principles guide how VogueGlows chooses topics, checks product information, and handles corrections.", sections: [
    { heading: "Selection and research", paragraphs: ["Topics begin with a practical decision in style or everyday life. Product pages may draw on manufacturer documentation, retailer listings, and other publicly available information. Direct experience is not implied unless it is clearly stated."] },
    { heading: "Editorial judgement and commerce", paragraphs: ["Affiliate links help support the site, but a commission does not change the reader's price or turn an unchecked claim into a fact. Merchant links are added only after the destination has been reviewed."] },
    { heading: "Changing information", paragraphs: ["Prices, availability, specifications, and merchant terms can change. Each product story links to the source used for its factual details so readers can confirm the current listing before ordering."] },
    { heading: "Corrections", paragraphs: ["Specific correction requests are welcome at admin@vogueglows.com. Please include the page URL, the statement in question, and supporting information so the point can be reviewed."] }
  ] },
  "cookie-notice": { eyebrow: "LEGAL", title: "Cookie Notice", intro: "VogueGlows uses the technical storage needed to deliver a working website.", sections: [
    { heading: "Site cookies", paragraphs: ["VogueGlows does not currently offer member accounts or a newsletter. We do not use the site to create a profile of you for advertising."] },
    { heading: "Third-party websites", paragraphs: ["A merchant or affiliate network reached through a VogueGlows link may use cookies under its own policy. Browser settings let you review, block, or remove cookies from third parties."] }
  ] }
};

export function generateStaticParams() { return Object.keys(pages).map((slug) => ({ slug })); }

export default async function InfoPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = pages[slug];
  if (!page) return null;

  return <main><SiteHeader active={slug === "about" ? "about" : undefined} /><article className="info-page info-policy"><p>{page.eyebrow}</p><h1>{page.title}</h1><span>{page.intro}</span><div className="info-sections">{page.sections.map((section) => <section key={section.heading}><h2>{section.heading}</h2>{section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</section>)}</div></article><SiteFooter /></main>;
}
