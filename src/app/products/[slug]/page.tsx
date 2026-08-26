import { Check, Minus, Plus } from "lucide-react";
import { getCategory, getProduct, getProductSpotlight, products, site } from "@/data/catalog";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";

const comparisonNotes: Record<string, string> = {
  "everlane-oversized-blazer": "Compare the garment measurements with a blazer you already like, especially through the shoulders, upper arms, and overall length. The official listing describes an oversized body with a closer cut through the arms.",
  "gym-people-workout-tee": "Check the current size chart, fabric composition, care instructions, side-slit placement, and return window. Compare the stated length with a tee you already like before deciding.",
  "coach-brooklyn-shoulder-bag-28": "Lay out the things you carry most often, then compare that group with the listed dimensions, handle drop, open interior, and magnetic closure. The shape matters less than whether your daily essentials fit without stacking awkwardly.",
  "sam-edelman-bianka-slingback": "Check the heel height, pointed toe, buckle adjustment, available width, and return terms. Try the shoes indoors on the surface and at the time of day that best reflects how you will wear them.",
  "shokz-openfit-2-plus": "Start with where you expect to listen. Compare the open-ear fit, physical controls, battery and charging details, water-resistance guidance, and return window with the amount of isolation you actually need.",
  "beakey-makeup-brushes": "Lay out the included brush shapes against the steps you actually use. A complete set earns its place when the face brushes, eye brushes, and sponges replace separate purchases instead of adding clutter.",
  "ulike-air-10-ipl": "Start with Ulike's current skin-tone and hair-color chart, then read the safety instructions and treatment schedule in full. An IPL device should not be chosen from before-and-after marketing alone.",
  "beauty-by-earth-self-tanner": "Choose between the Light and Medium formulas from the brand's undertone guidance, then check the preparation and application directions. A mitt, a thin first layer, and careful work around hands and joints matter more than rushing toward a darker result.",
  "coolife-three-piece-luggage": "Measure the storage space at home and check the current baggage rules of the airlines you use. Then decide whether all three sizes solve a real travel need or whether one good carry-on would do more work."
};

export const generateStaticParams = () => products.map(({ slug }) => ({ slug }));

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return null;

  const category = getCategory(product.category);
  const spotlight = getProductSpotlight(product.slug);
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
        <nav className="product-breadcrumb" aria-label="Breadcrumb"><a href="/#stories">Current notes</a><span>/</span><span>{category?.name}</span></nav>
        <header className="shop-guide-header">
          <p>{category?.name} / {product.name}</p>
          <h1>{product.storyTitle}</h1>
          <span>{product.summary}</span>
        </header>
        <figure className="shop-guide-figure">
          <img className={product.imageMode === "product" ? "product-image" : undefined} src={product.image} alt={product.imageAlt} decoding="async" />
          <figcaption>{product.imageMode === "product" ? "Editorial presentation based on current brand or retailer imagery; check the listing for the exact color and package contents." : "Independent editorial image; check the listing for the current design and color."}</figcaption>
        </figure>
        <div className="shop-guide-commerce">
          <div className="disclosure">{isAffiliateLink ? `Affiliate disclosure: ${site.affiliateNotice}` : "Link note: the product button below goes directly to the brand or retailer and is not currently an affiliate link."}</div>
          {hasProductLink && !spotlight && <div className="purchase-panel"><a href={productUrl ?? "#"} target="_blank" rel={isAffiliateLink ? "sponsored nofollow noopener" : "noopener noreferrer"}>{isAffiliateLink ? "View current price" : "View product details"}</a><span>Source: <a href={product.sourceUrl ?? "#"} target="_blank" rel="noopener noreferrer">{product.sourceName}</a>. Price, availability, color, and specifications can change.</span></div>}
        </div>
        {spotlight && hasProductLink && <section className="product-spotlight" aria-label={`${product.name} quick take`}>
          <div className="spotlight-overview">
            <img src={product.image} alt="" loading="lazy" decoding="async" />
            <div className="spotlight-copy"><p>SELECTED QUICK TAKE</p><h2>{product.name}</h2><span>Price and availability are shown on the current merchant page.</span><a href={productUrl ?? "#"} target="_blank" rel={isAffiliateLink ? "sponsored nofollow noopener" : "noopener noreferrer"}>{isAffiliateLink ? "Check current price" : "View product details"}</a><small>Facts checked against <a href={product.sourceUrl ?? "#"} target="_blank" rel="noopener noreferrer">{product.sourceName}</a>.</small></div>
          </div>
          <div className="spotlight-facts">
            <div><h3>Why it stands out</h3>{spotlight.highlights.map((item) => <p key={item}><Plus size={15} />{item}</p>)}</div>
            <div><h3>Before you buy</h3>{spotlight.cautions.map((item) => <p key={item}><Minus size={15} />{item}</p>)}</div>
          </div>
        </section>}
        <section id="who-it-suits"><h2>Why it made the list</h2><p>{product.forWho}</p></section>
        <section id="what-to-check"><h2>What I would check before ordering</h2><p>{comparisonNotes[product.slug]}</p></section>
        {!spotlight && <section id="compare-options" className="shop-guide-compare">
          <div><h2>What the listing confirms</h2>{product.pros.map((item) => <p key={item}><Check size={16} />{item}</p>)}</div>
          <div><h2>What gives me pause</h2>{product.cons.map((item) => <p key={item}><Check size={16} />{item}</p>)}</div>
        </section>}
        <section className="shop-guide-alternatives"><p>IF THIS IS NOT QUITE IT</p><h2>{product.alternatives.join(" / ")}</h2><span>A few other directions I would compare before deciding.</span></section>
        <section className="product-continue">
          <div><p>KEEP READING</p><h2>More notes from the shortlist.</h2></div>
          <div className="product-continue-grid">{relatedProducts.map((item) => <a href={`/posts/${item.slug}`} key={item.slug}><span>{getCategory(item.category)?.name}</span><h3>{item.storyTitle}</h3><p>{item.summary}</p></a>)}</div>
          <a className="product-category-return" href="/#stories">Back to the current notes</a>
        </section>
      </article>
      <SiteFooter />
    </main>
  );
}
