import { ArrowRight } from "lucide-react";
import { articles, categories, getCategory, products } from "@/data/catalog";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";

export const generateStaticParams = () => categories.map(({ slug }) => ({ slug }));

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const category = getCategory(slug);
  if (!category) return null;

  const picks = products.filter((product) => product.category === slug);
  const journalNote = articles.find((article) => article.category === category.name);

  return (
    <main>
      <SiteHeader active="edit" />
      <section className="category-hero">
        <img src={category.image} alt="" decoding="async" />
        <div>
          <p>The Edit / {category.trail}</p>
          <h1>{category.heroTitle}</h1>
          <div className="tag-row">{category.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
        </div>
      </section>
      {journalNote && (
        <section className="category-reading">
          <a href={`/journal/${journalNote.slug}`}>
            <img src={journalNote.image} alt="" loading="lazy" decoding="async" />
            <div>
              <p>From the journal</p>
              <h2>{journalNote.title}</h2>
              <span>{journalNote.excerpt}</span>
              <b>Read the note <ArrowRight size={14} /></b>
            </div>
          </a>
        </section>
      )}
      <section className="archive category-guides">
        <div className="section-heading">
          <p>The Edit</p>
          <h2>{category.archiveTitle}</h2>
          <span>What to compare before choosing a version that suits the way you already live.</span>
        </div>
        <div className="product-grid product-grid-text">
          {picks.map((product, index) => (
            <article className="product-card" key={product.slug}>
              <i aria-hidden="true">0{index + 1}</i>
              <p>SHOP GUIDE</p>
              <h3>{product.name}</h3>
              <span>{product.summary}</span>
              <a className="text-link" href={`/products/${product.slug}`}>Open guide <ArrowRight size={15} /></a>
            </article>
          ))}
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
