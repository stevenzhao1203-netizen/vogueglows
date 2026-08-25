import { articles, categories, getArticle, products, site } from "@/data/catalog";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";

export const generateStaticParams = () => articles.map(({ slug }) => ({ slug }));

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return null;

  const relatedProducts = products.filter((product) => categories.find((category) => category.slug === product.category)?.name === article.category).slice(0, 3);
  return <main><SiteHeader active="journal" /><article className="article"><img src={article.image} alt={`Editorial image for ${article.title}`} decoding="async" /><p>Journal / {article.category}</p><h1>{article.title}</h1><span>{article.excerpt}</span><nav className="toc" aria-label="In this article">{article.sections.map((section, index) => <a href={`#section-${index}`} key={section}>{index + 1}. {section}</a>)}</nav>{article.sections.map((section, index) => <section id={`section-${index}`} key={section}><h2>{section}</h2><p>{article.content[index]}</p></section>)}<div className="article-disclosure">Affiliate disclosure: {site.affiliateNotice}</div></article>{relatedProducts.length > 0 && <section className="related"><p>FROM THE EDIT</p>{relatedProducts.map((product) => <a href={`/products/${product.slug}`} key={product.slug}>{product.name}</a>)}</section>}<SiteFooter /></main>;
}
