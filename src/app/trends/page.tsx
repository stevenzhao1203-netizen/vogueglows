import { ArrowRight } from "lucide-react";
import { categories, products } from "@/data/catalog";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";

export default function TrendsPage() {
  return <main>
    <SiteHeader active="edit" />
    <section className="trends-index">
      <p>The Edit</p>
      <h1>Women's fashion and beauty, checked at the source.</h1>
      <span>Product profiles for clothing, bags, shoes, skincare, and travel pieces, with practical details and a real US product page for every item.</span>
      <nav className="trend-topics" aria-label="Browse The Edit by category">{categories.map((category) => <a href={`#${category.slug}`} key={category.slug}>{category.name}</a>)}</nav>
      <div className="edit-catalog">
        {categories.map((category) => {
          const categoryProducts = products.filter((product) => product.category === category.slug);
          return <section className="edit-category" id={category.slug} key={category.slug}>
            <div className="edit-category-heading"><p>{category.name}</p><h2>{category.archiveTitle}</h2><span>{category.description}</span></div>
            <div className="product-grid edit-grid">{categoryProducts.map((product) => <article className="product-card" key={product.slug}><a href={`/products/${product.slug}`}><img src={product.image} alt="" loading="lazy" decoding="async" /></a><p>Product profile</p><h3>{product.name}</h3><span>{product.summary}</span><a className="text-link" href={`/products/${product.slug}`}>Read profile <ArrowRight size={14} /></a></article>)}</div>
          </section>;
        })}
      </div>
    </section>
    <SiteFooter />
  </main>;
}
