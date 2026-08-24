import { ArrowRight } from "lucide-react";
import { articles } from "@/data/catalog";

export default function JournalIndexPage() {
  return <main><header className="simple-header"><a className="wordmark" href="/">Vogue<span>Glows</span></a><a href="/">Home</a></header><section className="journal-index"><p>THE JOURNAL</p><h1>Useful notes for better decisions.</h1><span>Shopping guides and lifestyle ideas written to make comparison simpler.</span><div>{articles.map((article) => <a className="journal-card" href={`/journal/${article.slug}`} key={article.slug}><img src={article.image} alt="" /><p>{article.category}</p><h2>{article.title}</h2><span>{article.excerpt}</span><b>Read guide <ArrowRight size={14} /></b></a>)}</div></section></main>;
}
