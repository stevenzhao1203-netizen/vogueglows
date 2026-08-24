import { ArrowLeft, ArrowRight } from "lucide-react";
import { getSection, sections } from "@/data/sections";

export function generateStaticParams() { return sections.map(({ slug }) => ({ slug })); }

export default async function SectionPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const section = getSection(slug);
  if (!section) return null;
  return <main>
    <header className="inner-header"><a className="brand" href="/">VOGUE<span>GLOWS</span></a><a href="/" className="back-link"><ArrowLeft size={15} /> Home</a></header>
    <section className="section-hero"><p className="kicker">{section.label}</p><h1>{section.title}</h1><p>{section.introduction}</p></section>
    <section className="topic-section"><p className="kicker">What to expect</p><div className="topic-grid">{section.topics.map((topic, index) => <article key={topic.title}><span>0{index + 1}</span><h2>{topic.title}</h2><p>{topic.description}</p><a className="text-link" href="/info/disclosure">View recommendations <ArrowRight size={15} /></a></article>)}</div></section>
    <section className="search-section"><p className="kicker">Editorial focus</p><h2>Made to answer the questions that matter before you buy.</h2><div>{section.keywords.map((keyword) => <span key={keyword}>{keyword}</span>)}</div></section>
    <footer><a className="brand" href="/">VOGUE<span>GLOWS</span></a><p>© 2026 VogueGlows. Independent editorial selections.</p><a href="/info/contact">Contact</a></footer>
  </main>;
}
