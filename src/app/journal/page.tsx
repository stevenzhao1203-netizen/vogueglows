import { ArrowRight } from "lucide-react";
import { articles } from "@/data/catalog";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";

export default function JournalIndexPage() {
  return (
    <main>
      <SiteHeader active="journal" />
      <section className="journal-index">
        <p>THE JOURNAL</p>
        <h1>Notes for the wardrobe, the bathroom shelf, and the carry-on.</h1>
        <span>Practical thoughts on the things that deserve a little more attention before they come home.</span>
        <div>
          {articles.map((article) => (
            <a className="journal-card" href={`/journal/${article.slug}`} key={article.slug}>
              <img src={article.image} alt="" loading="lazy" decoding="async" />
              <p>{article.category}</p>
              <h2>{article.title}</h2>
              <span>{article.excerpt}</span>
              <b>Read article <ArrowRight size={14} /></b>
            </a>
          ))}
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
