import { ArrowRight } from "lucide-react";
import { getCategory, products } from "@/data/catalog";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";

export default function HomePage() {
  const featuredProducts = products.filter((product) => product.slug !== "madewell-essential-bucket-tote");

  return <main>
    <SiteHeader active="home" />
    <section className="story-home-hero">
      <img src="/images/vg-hero-still-life.webp" alt="Black leather tote, ivory linen, and small accessories in a sunlit interior" fetchPriority="high" decoding="async" />
      <div><p>The VogueGlows edit</p><h1>Style finds for everyday life.</h1><span>Clothing, bags, beauty, and travel pieces considered with fit, materials, and daily use in mind.</span><a href="#stories">Browse the latest <ArrowRight size={16} /></a></div>
    </section>
    <section className="story-index" id="stories">
      <div className="story-index-heading"><p>Featured stories</p><h2>Pieces worth a closer look.</h2></div>
      <div className="story-grid">{featuredProducts.map((product) => <a className="story-card" href={`/posts/${product.slug}`} key={product.slug}><img src={product.image} alt="" loading="lazy" decoding="async" /><p>{getCategory(product.category)?.name}</p><h3>{product.name}</h3><span>{product.summary}</span><b>Read story <ArrowRight size={14} /></b></a>)}</div>
    </section>
    <section className="story-about"><p>About VogueGlows</p><h2>Shopping notes built around the details that matter.</h2><span>Fit, materials, dimensions, ingredients, and return terms come before hype. Product facts are linked back to the brand or retailer so you can check the current listing before deciding.</span><a href="/info/about">Read more about the site <ArrowRight size={14} /></a></section>
    <SiteFooter />
  </main>;
}
