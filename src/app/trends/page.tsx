import { ArrowRight } from "lucide-react";
import { categories, products } from "@/data/catalog";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";

export default function TrendsPage() {
  return <main>
    <SiteHeader active="edit" />
    <section className="trends-index">
      <p>The Edit</p>
      <h1>Start with the questions that matter.</h1>
      <span>Shop guides built around fit, material, use, and the details that are easy to miss on a product page.</span>
      <nav className="trend-topics" aria-label="Browse The Edit by category">{categories.map((category) => <a href={`/categories/${category.slug}`} key={category.slug}>{category.name}</a>)}</nav>
      <div className="product-grid edit-grid">
        {products.map((product) => <article className="product-card" key={product.slug}><a href={`/products/${product.slug}`}><img src={product.image} alt="" loading="lazy" decoding="async" /></a><p>{categories.find((category) => category.slug === product.category)?.name}</p><h2>{product.name}</h2><span>{product.summary}</span><a className="text-link" href={`/products/${product.slug}`}>Open guide <ArrowRight size={14} /></a></article>)}
      </div>
    </section>
    <SiteFooter />
  </main>;
}
