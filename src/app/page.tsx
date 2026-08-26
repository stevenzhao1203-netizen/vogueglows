import { ArrowRight } from "lucide-react";
import { getCategory, products } from "@/data/catalog";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";

export default function HomePage() {
  const featuredProducts = products.slice(0, 9);

  return <main>
    <div className="trend-bar"><span>Independent notes on style, beauty, and useful things</span></div>
    <SiteHeader active="home" />
    <section className="story-home-hero">
      <img src="/images/vg-hero-still-life.webp" alt="Black leather tote, ivory linen, and small accessories in a sunlit interior" fetchPriority="high" decoding="async" />
      <div><p>VogueGlows</p><h1>Notes on getting dressed, beauty, and packing well.</h1><span>I keep this journal for the pieces that make me stop and look twice, then check the fit, materials, ingredients, and small print before sharing them.</span><a href="#stories">See what made the list <ArrowRight size={16} /></a></div>
    </section>
    <section className="story-index" id="stories">
      <div className="story-index-heading"><p>Current shortlist</p><h2>Pieces I would look at more closely.</h2></div>
      <div className="story-grid">{featuredProducts.map((product) => <a className="story-card" href={`/posts/${product.slug}`} key={product.slug}><img className={product.imageMode === "product" ? "product-image" : undefined} src={product.image} alt={product.imageAlt} loading="lazy" decoding="async" /><p>{getCategory(product.category)?.name}</p><h3>{product.storyTitle}</h3><span>{product.summary}</span><b>Read my notes <ArrowRight size={14} /></b></a>)}</div>
    </section>
    <section className="story-about"><p>About this journal</p><h2>A place to slow down before adding something to the cart.</h2><span>VogueGlows is where I collect clothes, bags, beauty products, and travel pieces that seem worth a closer look. I have not personally tested every item here, so I say what drew me in, note the details I could confirm, and link to the current brand or retailer page.</span><a href="/info/about">How I choose what to include <ArrowRight size={14} /></a></section>
    <SiteFooter />
  </main>;
}
