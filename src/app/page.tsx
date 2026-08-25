import { ArrowRight } from "lucide-react";
import { articles, categories, products } from "@/data/catalog";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";

export default function HomePage() {
  return <main>
    <div className="trend-bar">An independent journal for style and everyday life</div>
    <SiteHeader active="home" />
    <section className="home-hero"><div><p>VogueGlows Journal</p><h1>Things to wear, use, and come back to.</h1><span>An independent journal about getting dressed, traveling lighter, and the useful objects that make ordinary days easier.</span><a href="/journal">Read the journal <ArrowRight size={16} /></a></div><img src="/images/vg-hero-still-life.webp" alt="Sunlit gallery still life with a black tote and ivory linen" fetchPriority="high" decoding="async" /></section>
    <section className="featured-stories" id="featured"><div className="section-heading"><p>Latest from the journal</p><h2>A few recent notes.</h2><span>For a purchase, a packing list, or the next outfit decision.</span></div><div className="featured-grid">{articles.map((article) => <a className="featured-card" href={`/journal/${article.slug}`} key={article.slug}><img src={article.image} alt="" loading="lazy" decoding="async" /><p>{article.category}</p><h3>{article.title}</h3><span>{article.excerpt}</span><b>Read article <ArrowRight size={14} /></b></a>)}</div></section>
    <section className="category-rail"><div className="rail-title"><h2>Browse the departments</h2><a href="/journal">All journal notes <ArrowRight size={16} /></a></div><div className="category-grid category-grid-all">{categories.map((category) => <a href={`/categories/${category.slug}`} className="category-tile" key={category.slug}><img src={category.image} alt="" loading="lazy" decoding="async" /><h3>{category.name}</h3><p>{category.description}</p></a>)}</div></section>
    <section className="product-section" id="latest"><div className="section-heading"><p>The Edit</p><h2>A short list, with the useful details left in.</h2><span>Shop guides for the pieces we think are worth comparing. A merchant link appears only after its listing and destination have been checked.</span></div><div className="product-grid product-grid-text">{products.map((product) => <article className="product-card" key={product.slug}><p>{categories.find((category) => category.slug === product.category)?.name}</p><h3><a href={`/products/${product.slug}`}>{product.name}</a></h3><span>{product.summary}</span><a className="text-link" href={`/products/${product.slug}`}>Open guide <ArrowRight size={15} /></a></article>)}</div><div className="edit-link"><a href="/trends">Browse The Edit <ArrowRight size={15} /></a></div></section>
    <SiteFooter />
  </main>;
}
