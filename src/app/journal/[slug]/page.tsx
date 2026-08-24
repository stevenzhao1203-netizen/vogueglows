import { articles, getArticle, products, site } from "@/data/catalog";

export const generateStaticParams = () => articles.map(({ slug }) => ({ slug }));

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return null;

  return <main><header className="simple-header"><a className="wordmark" href="/">Vogue<span>Glows</span></a><a href="/journal">Journal</a></header><article className="article"><img src={article.image} alt="" /><p>{article.category} / GUIDE</p><h1>{article.title}</h1><span>{article.excerpt}</span><nav className="toc">{article.sections.map((section, index) => <a href={`#section-${index}`} key={section}>{index + 1}. {section}</a>)}</nav>{article.sections.map((section, index) => <section id={`section-${index}`} key={section}><h2>{section}</h2><p>{article.content[index]}</p></section>)}<div className="article-disclosure">Affiliate disclosure: {site.affiliateNotice}</div></article><section className="related"><p>RELATED GUIDES</p>{products.slice(0, 3).map((product) => <a href={`/products/${product.slug}`} key={product.slug}>{product.name}</a>)}</section></main>;
}
