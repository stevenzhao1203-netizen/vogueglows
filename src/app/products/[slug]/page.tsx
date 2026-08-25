import { Check } from "lucide-react";
import { getProduct, products, site } from "@/data/catalog";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";

const comparisonNotes: Record<string, string> = {
  "tailored-blazer": "Put the blazer next to the layers you already wear. Then compare shoulder width, sleeve length, lining, and fabric care with a jacket you know fits well.",
  "gym-people-workout-tee": "Check the current size chart, fabric composition, care instructions, side-slit placement, and return window. Compare the stated length with a tee you already like before deciding.",
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

  const hasMerchantLink = Boolean(product.affiliateUrl && product.sourceUrl);

  return (
    <main>
      <SiteHeader active="edit" />
      <article className="shop-guide">
        <header className="shop-guide-header">
          <p>The Edit / {hasMerchantLink ? "Product profile" : "Buying guide"}</p>
          <h1>{product.name}</h1>
          <span>{product.summary}</span>
        </header>
        <figure className="shop-guide-figure">
          <img src={product.image} alt="" decoding="async" />
          <figcaption>{hasMerchantLink ? "Use the current retailer or manufacturer listing to confirm details before making a purchase." : "This is a buying guide, not a product test. Use a current retailer or manufacturer listing to confirm details before making a purchase."}</figcaption>
        </figure>
        <div className="shop-guide-commerce">
          <div className="disclosure">Affiliate disclosure: {site.affiliateNotice}</div>
          {hasMerchantLink && <div className="purchase-panel"><p>LISTING LAST CHECKED: {product.lastVerified?.toUpperCase()}</p><a href={product.affiliateUrl ?? "#"} target="_blank" rel="sponsored nofollow noopener">View current price</a><span>Source: <a href={product.sourceUrl ?? "#"} target="_blank" rel="noopener noreferrer">{product.sourceName}</a>. Price, availability, and specifications can change.</span></div>}
        </div>
        <nav className="toc shop-guide-toc" aria-label="In this guide">
          <p>In this guide</p>
          <a href="#who-it-suits">1. Who it may suit</a>
          <a href="#what-to-check">2. What to check before buying</a>
          <a href="#compare-options">3. What to compare</a>
        </nav>
        <section id="who-it-suits"><h2>Who it may suit</h2><p>{product.forWho}</p></section>
        <section id="what-to-check"><h2>What to check before buying</h2><p>{comparisonNotes[product.slug]}</p><p className="verification-note">A retailer or manufacturer page is the final source for current specifications, availability, and terms.</p></section>
        <section id="compare-options" className="shop-guide-compare">
          <div><h2>What to compare</h2>{product.pros.map((item) => <p key={item}><Check size={16} />{item}</p>)}</div>
          <div><h2>Keep in mind</h2>{product.cons.map((item) => <p key={item}><Check size={16} />{item}</p>)}</div>
        </section>
        <section className="shop-guide-alternatives"><p>OTHER DIRECTIONS TO COMPARE</p><h2>{product.alternatives.join(" / ")}</h2><span>Different approaches worth considering before deciding. The current merchant listing remains the final source for details.</span></section>
      </article>
      <SiteFooter />
    </main>
  );
}
