import { Check } from "lucide-react";
import { getProduct, products, site } from "@/data/catalog";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";

const comparisonNotes: Record<string, string> = {
  "tailored-blazer": "Start with the layers you will wear beneath it. Then compare shoulder width, sleeve length, lining, and fabric care against a jacket you already reach for.",
  "low-heel-slingback": "Look at the stated heel height, toe shape, strap adjustability, and the retailer's return window. A shoe that is intended for long days should be easy to return after an indoor fit check.",
  "barrier-first-moisturizer": "Read the current ingredient list and directions on the official listing, then compare texture, fragrance, and packaging with the rest of your routine. A moisturizer does not need a dramatic claim to be a useful daily product.",
  "over-ear-headphones": "Compare ear-cup depth, headband adjustment, physical controls, battery claims, and wired listening options. Comfort is best judged against the length of time you actually listen.",
  "travel-essentials-case": "Compare the interior divisions with the small things you actually carry: cables, adapters, jewelry, medication, or a compact charger. Check the closure and exterior shape against the bag it needs to fit inside.",
  "countertop-oven": "Measure counter depth, overhead clearance, and the tray size you would use most. Look at the official manual for cleaning and safety guidance before choosing a model."
};

export const generateStaticParams = () => products.map(({ slug }) => ({ slug }));

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return null;

  return <main><SiteHeader /><article className="review"><img src={product.image} alt="" decoding="async" /><div><p>EDITORIAL BUYING GUIDE</p><h1>{product.name}</h1><h2>{product.summary}</h2><div className="disclosure">Affiliate disclosure: {site.affiliateNotice}</div></div></article><section className="review-body"><div><h2>Who this suits</h2><p>{product.forWho}</p><h2>What to check first</h2><p>{comparisonNotes[product.slug]}</p><p className="verification-note">Use the official retailer or manufacturer page to confirm current specifications, availability, and terms before buying.</p></div><div className="pros"><h2>What to compare</h2>{product.pros.map((item) => <p key={item}><Check size={16} />{item}</p>)}<h2>Keep in mind</h2>{product.cons.map((item) => <p key={item}><Check size={16} />{item}</p>)}</div></section><section className="alternatives"><p>ALTERNATIVES TO COMPARE</p><h2>{product.alternatives.join(" / ")}</h2><span>Useful directions to compare alongside this category, not a substitute for checking the current product listing.</span></section><SiteFooter /></main>;
}
