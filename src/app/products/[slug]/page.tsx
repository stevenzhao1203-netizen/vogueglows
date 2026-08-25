import { Check } from "lucide-react";
import { getProduct, products, site } from "@/data/catalog";

const comparisonNotes: Record<string, string> = {
  "tailored-carryall": "Measure the laptop sleeve, water bottle, and the widest item you carry. Then compare the bag's opening, shoulder drop, and stated material care against the way you actually commute.",
  "low-heel-slingback": "Look at the stated heel height, toe shape, strap adjustability, and the retailer's return window. A shoe that is intended for long days should be easy to return after an indoor fit check.",
  "barrier-first-moisturizer": "Read the current ingredient list and directions on the official listing, then compare texture, fragrance, and packaging with the rest of your routine. A moisturizer does not need a dramatic claim to be a useful daily product.",
  "open-ear-headphones": "Compare the fit style, microphone controls, charge case size, and device compatibility. Open-ear models make the most sense when awareness and calls matter more than full isolation.",
  "weekend-carry-on": "Check the exterior dimensions including wheels and handles against the airline you use most. Then compare the layout, warranty, and return period rather than relying on a single capacity number.",
  "countertop-oven": "Measure counter depth, overhead clearance, and the tray size you would use most. Look at the official manual for cleaning and safety guidance before choosing a model."
};

export const generateStaticParams = () => products.map(({ slug }) => ({ slug }));

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return null;

  return <main><header className="simple-header"><a className="wordmark" href="/">Vogue<span>Glows</span></a><a href={`/categories/${product.category}`}>Back to category</a></header><article className="review"><img src={product.image} alt="" /><div><p>EDITORIAL BUYING GUIDE</p><h1>{product.name}</h1><h2>{product.summary}</h2><div className="disclosure">Affiliate disclosure: {site.affiliateNotice}</div><small>VogueGlows does not publish a merchant link for this guide until the listing, terms, and destination have been reviewed.</small></div></article><section className="review-body"><div><h2>Who this suits</h2><p>{product.forWho}</p><h2>What to check first</h2><p>{comparisonNotes[product.slug]}</p><p className="verification-note">Use the official retailer or manufacturer page to confirm current specifications, availability, and terms before buying.</p></div><div className="pros"><h2>What to compare</h2>{product.pros.map((item) => <p key={item}><Check size={16} />{item}</p>)}<h2>Keep in mind</h2>{product.cons.map((item) => <p key={item}><Check size={16} />{item}</p>)}</div></section><section className="alternatives"><p>ALTERNATIVES TO COMPARE</p><h2>{product.alternatives.join(" / ")}</h2><span>Useful directions to compare alongside this category, not a substitute for checking the current product listing.</span></section><section className="faq"><h2>Before you choose</h2><details><summary>Is this a product review?</summary><p>No. This is a category buying guide. It does not claim hands-on testing or a verdict on a specific product.</p></details><details><summary>When are merchant links added?</summary><p>Only after the retailer listing, source information, and affiliate destination are ready to publish.</p></details></section></main>;
}
