import { ArrowRight, Search } from "lucide-react";
import { articles, categories, products } from "@/data/catalog";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";

type SearchPageProps = {
  searchParams: Promise<{ q?: string }>;
};

type SearchResult = {
  type: "Category" | "Buying guide" | "Journal";
  title: string;
  description: string;
  href: string;
  keywords: string;
};

const searchIndex: SearchResult[] = [
  ...categories.map((category) => ({
    type: "Category" as const,
    title: category.name,
    description: category.description,
    href: `/categories/${category.slug}`,
    keywords: `${category.name} ${category.description} ${category.tags.join(" ")}`
  })),
  ...products.map((product) => ({
    type: "Buying guide" as const,
    title: product.name,
    description: product.summary,
    href: `/products/${product.slug}`,
    keywords: `${product.name} ${product.summary} ${product.forWho} ${product.alternatives.join(" ")}`
  })),
  ...articles.map((article) => ({
    type: "Journal" as const,
    title: article.title,
    description: article.excerpt,
    href: `/journal/${article.slug}`,
    keywords: `${article.category} ${article.title} ${article.excerpt} ${article.sections.join(" ")}`
  }))
];

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const query = (await searchParams).q?.trim() ?? "";
  const normalizedQuery = query.toLocaleLowerCase();
  const results = normalizedQuery
    ? searchIndex.filter((item) => `${item.title} ${item.keywords}`.toLocaleLowerCase().includes(normalizedQuery))
    : searchIndex;

  return <main>
    <SiteHeader />
    <section className="search-page">
      <p>Site search</p>
      <h1>Find a guide.</h1>
      <form className="site-search-form" action="/search">
        <label className="sr-only" htmlFor="site-search">Search VogueGlows</label>
        <input id="site-search" name="q" type="search" defaultValue={query} placeholder="Try blazer, travel, moisturizer..." autoFocus />
        <button type="submit" aria-label="Search"><Search size={18} /></button>
      </form>
      <span className="search-count">{query ? `${results.length} result${results.length === 1 ? "" : "s"} for “${query}”` : "Browse all current guides and articles."}</span>
      <div className="search-results">
        {results.map((result) => <a href={result.href} key={`${result.type}-${result.href}`}><p>{result.type}</p><h2>{result.title}</h2><span>{result.description}</span><b>Open <ArrowRight size={14} /></b></a>)}
      </div>
      {query && results.length === 0 && <div className="search-empty"><h2>No matching guide yet.</h2><span>Try a category name or a broader product type.</span></div>}
    </section><SiteFooter />
  </main>;
}
