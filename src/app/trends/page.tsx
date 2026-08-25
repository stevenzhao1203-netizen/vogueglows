import { ArrowRight } from "lucide-react";
import { articles, categories, products } from "@/data/catalog";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";

export default function TrendsPage() {
  return <main>
    <SiteHeader active="trends" />
    <section className="trends-index">
      <p>Trends</p>
      <h1>Stories worth keeping up with.</h1>
      <span>Style, beauty, travel, audio, and home notes shaped around the questions people actually ask before buying.</span>
      <nav className="trend-topics" aria-label="Browse trends by category">{categories.map((category) => <a href={`/categories/${category.slug}`} key={category.slug}>{category.name}</a>)}</nav>
      <div className="trends-grid">
        {articles.map((article) => <a className="trend-card" href={`/journal/${article.slug}`} key={article.slug}><img src={article.image} alt="" loading="lazy" decoding="async" /><p>{article.category}</p><h2>{article.title}</h2><span>{article.excerpt}</span><b>Read story <ArrowRight size={14} /></b></a>)}
        {products.map((product) => <a className="trend-card trend-card-guide" href={`/products/${product.slug}`} key={product.slug}><p>Buying guide</p><h2>{product.name}</h2><span>{product.summary}</span><b>Open guide <ArrowRight size={14} /></b></a>)}
      </div>
    </section>
    <SiteFooter />
  </main>;
}
