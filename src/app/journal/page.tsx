import { ArrowRight } from "lucide-react";
import { articles } from "@/data/catalog";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";

export default function JournalIndexPage() {
  return <main><SiteHeader active="journal" /><section className="journal-index"><p>THE JOURNAL</p><h1>Notes on style, routines, and the things we carry with us.</h1><span>Small observations and practical guides for ordinary days.</span><div>{articles.map((article) => <a className="journal-card" href={`/journal/${article.slug}`} key={article.slug}><img src={article.image} alt="" loading="lazy" decoding="async" /><p>{article.category}</p><h2>{article.title}</h2><span>{article.excerpt}</span><b>Read article <ArrowRight size={14} /></b></a>)}</div></section><SiteFooter /></main>;
}
