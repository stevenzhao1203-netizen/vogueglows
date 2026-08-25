import { Check } from "lucide-react";
import { getProduct, products, site } from "@/data/catalog";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";

const comparisonNotes: Record<string, string> = {
  "tailored-blazer": "Put the blazer next to the layers you already wear. Then compare shoulder width, sleeve length, lining, and fabric care with a jacket you know fits well.",
  "low-heel-slingback": "Check the stated heel height, toe shape, strap adjustment, and return window. If you want a shoe for long days, make sure an indoor fit check is possible.",
  "barrier-first-moisturizer": "Read the current ingredients and directions, then think about texture, fragrance, and how the packaging will fit into your morning. The best everyday moisturizer is often the one that does not ask much of you.",
  "beakey-makeup-brushes": "Lay out the included brush shapes against the steps you actually use. A complete set earns its place when the face brushes, eye brushes, and sponges replace separate purchases instead of adding clutter.",
  "over-ear-headphones": "Compare ear-cup depth, headband adjustment, physical controls, battery claims, and wired listening. Comfort is best judged against the amount of time you really listen.",
  "earfun-air-pro-4": "Compare the stated noise control, microphone, codec, and playtime features with the phone and services you already use. Fit matters just as much: try the supplied ear tips and use the retailer's return window if needed.",
  "travel-essentials-case": "Picture the handful of items you really carry: cables, adapters, medication, jewelry, or a compact charger. Then compare the pockets, closure, and shape with the bag it needs to live inside.",
  "countertop-oven": "Measure counter depth, clearance above the oven, and the tray size you would use most. Read the manual for cleaning and safety before deciding."
};

export const generateStaticParams = () => products.map(({ slug }) => ({ slug }));

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return null;

  return <main><SiteHeader active="edit" /><article className="review"><img src={product.image} alt={`${product.name} editorial still life`} decoding="async" /><div><p>THE EDIT / SHOP GUIDE</p><h1>{product.name}</h1><h2>{product.summary}</h2><div className="disclosure">Affiliate disclosure: {site.affiliateNotice}</div>{product.affiliateUrl && <div className="purchase-panel"><p>LISTING CHECKED {product.lastVerified?.toUpperCase()}</p><a href={product.affiliateUrl} target="_blank" rel="sponsored nofollow noopener">View current price</a><span><a href={product.sourceUrl ?? "#"} target="_blank" rel="noopener noreferrer">{product.sourceName}</a> · Specifications, availability, and price can change.</span></div>}</div></article><section className="review-body"><div><h2>Who this suits</h2><p>{product.forWho}</p><h2>What to check first</h2><p>{comparisonNotes[product.slug]}</p><p className="verification-note">Use the official retailer or manufacturer page to confirm current specifications, availability, and terms before buying.</p></div><div className="pros"><h2>What to compare</h2>{product.pros.map((item) => <p key={item}><Check size={16} />{item}</p>)}<h2>Keep in mind</h2>{product.cons.map((item) => <p key={item}><Check size={16} />{item}</p>)}</div></section><section className="alternatives"><p>ALTERNATIVES TO COMPARE</p><h2>{product.alternatives.join(" / ")}</h2><span>Other directions to look at before deciding; the current product listing remains the final source for details.</span></section><SiteFooter /></main>;
}
