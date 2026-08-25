import { Check } from "lucide-react";
import { getCategory, getProduct, products, site } from "@/data/catalog";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";

const comparisonNotes: Record<string, string> = {
  "everlane-oversized-blazer": "Compare the garment measurements with a blazer you already like, especially through the shoulders, upper arms, and overall length. The official listing describes an oversized body with a closer cut through the arms.",
  "gym-people-workout-tee": "Check the current size chart, fabric composition, care instructions, side-slit placement, and return window. Compare the stated length with a tee you already like before deciding.",
  "coach-brooklyn-shoulder-bag-28": "Lay out the things you carry most often, then compare that group with the listed dimensions, handle drop, open interior, and magnetic closure. The shape matters less than whether your daily essentials fit without stacking awkwardly.",
  "madewell-essential-bucket-tote": "Measure a current work or everyday bag before comparing the listed height, width, depth, and handle drop. If you carry a laptop, check the device itself rather than relying only on the screen size in the listing.",
  "sam-edelman-bianka-slingback": "Check the heel height, pointed toe, buckle adjustment, available width, and return terms. Try the shoes indoors on the surface and at the time of day that best reflects how you will wear them.",
  "cerave-daily-moisturizing-lotion": "Read the current ingredient list and directions on the official page and the packaging you receive. Introduce it in a way that makes individual skin response easier to notice, especially if your routine already contains active ingredients.",
  "beakey-makeup-brushes": "Lay out the included brush shapes against the steps you actually use. A complete set earns its place when the face brushes, eye brushes, and sponges replace separate purchases instead of adding clutter.",
  "calpak-luka-duffel": "Compare the listed dimensions with your airline's current personal-item or carry-on rules and with the luggage you already use. A shoe compartment and many pockets are useful only if the filled bag remains comfortable to carry.",
  "coach-essential-card-case": "Count the cards you actually carry and decide whether cash, receipts, or coins need a place too. A five-slot case works best when you want to keep the contents deliberately small."
};

export const generateStaticParams = () => products.map(({ slug }) => ({ slug }));

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return null;

  const category = getCategory(product.category);
  const relatedProducts = [
    ...products.filter((item) => item.category === product.category && item.slug !== product.slug),
    ...products.filter((item) => item.category !== product.category)
  ].slice(0, 3);
  const isAffiliateLink = Boolean(product.affiliateUrl);
  const productUrl = product.affiliateUrl ?? product.sourceUrl;
  const hasProductLink = Boolean(productUrl && product.sourceUrl);

  return (
    <main>
      <SiteHeader />
      <article className="shop-guide product-story">
        <header className="shop-guide-header">
          <p>{category?.name} / Shopping story</p>
          <h1>{product.name}</h1>
          <span>{product.summary}</span>
        </header>
        <figure className="shop-guide-figure">
          <img src={product.image} alt="" decoding="async" />
          <figcaption>Editorial image, not manufacturer product photography. Use the linked brand or retailer page to confirm the current design, color, and details.</figcaption>
        </figure>
        <div className="shop-guide-commerce">
          <div className="disclosure">{isAffiliateLink ? `Affiliate disclosure: ${site.affiliateNotice}` : "Link note: the product button below goes directly to the brand or retailer and is not currently an affiliate link."}</div>
          {hasProductLink && <div className="purchase-panel"><a href={productUrl ?? "#"} target="_blank" rel={isAffiliateLink ? "sponsored nofollow noopener" : "noopener noreferrer"}>{isAffiliateLink ? "View current price" : "View product details"}</a><span>Source: <a href={product.sourceUrl ?? "#"} target="_blank" rel="noopener noreferrer">{product.sourceName}</a>. Price, availability, color, and specifications can change.</span></div>}
        </div>
        <section id="who-it-suits"><h2>Who it may suit</h2><p>{product.forWho}</p></section>
        <section id="what-to-check"><h2>What to check before buying</h2><p>{comparisonNotes[product.slug]}</p><p className="verification-note">A retailer or manufacturer page is the final source for current specifications, availability, and terms.</p></section>
        <section id="compare-options" className="shop-guide-compare">
          <div><h2>What to compare</h2>{product.pros.map((item) => <p key={item}><Check size={16} />{item}</p>)}</div>
          <div><h2>Keep in mind</h2>{product.cons.map((item) => <p key={item}><Check size={16} />{item}</p>)}</div>
        </section>
        <section className="shop-guide-alternatives"><p>OTHER DIRECTIONS TO COMPARE</p><h2>{product.alternatives.join(" / ")}</h2><span>Different approaches worth considering before deciding. The current merchant listing remains the final source for details.</span></section>
        <section className="product-continue">
          <div><p>CONTINUE SHOPPING</p><h2>More pieces to compare.</h2></div>
          <div className="product-continue-grid">{relatedProducts.map((item) => <a href={`/posts/${item.slug}`} key={item.slug}><span>{getCategory(item.category)?.name}</span><h3>{item.name}</h3><p>{item.summary}</p></a>)}</div>
          <a className="product-category-return" href="/#stories">Back to all stories</a>
        </section>
      </article>
      <SiteFooter />
    </main>
  );
}
