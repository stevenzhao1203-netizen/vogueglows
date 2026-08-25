import { Search } from "lucide-react";
import { categories, site } from "@/data/catalog";
import { BrandMark } from "@/components/brand-mark";

type SiteHeaderProps = {
  active?: "home" | "journal" | "edit" | "about";
  categorySlug?: string;
};

export function SiteHeader({ active, categorySlug }: SiteHeaderProps) {
  return <>
    <header className="site-header site-header-global">
      <BrandMark />
      <nav aria-label="Primary navigation">
        <a className={active === "home" ? "site-nav-active" : undefined} href="/">Home</a>
        <a className={active === "journal" ? "site-nav-active" : undefined} href="/journal">Journal</a>
        <a className={active === "edit" ? "site-nav-active" : undefined} href="/trends">Shop</a>
        <a className={active === "about" ? "site-nav-active" : undefined} href="/info/about">About</a>
      </nav>
      <a className="search" href="/search" aria-label="Search VogueGlows"><Search size={18} /></a>
    </header>
    <nav className="category-shortcuts" aria-label="Shop by category">
      <a className={!categorySlug && active === "edit" ? "category-shortcut-active" : undefined} href="/trends">All products</a>
      {categories.map((category) => <a className={categorySlug === category.slug ? "category-shortcut-active" : undefined} href={`/categories/${category.slug}`} key={category.slug}>{category.name}</a>)}
    </nav>
  </>;
}

export function SiteFooter() {
  return <footer>
    <BrandMark inverted />
    <p>{site.affiliateNotice}</p>
    <div className="footer-links">
      <nav aria-label="Explore VogueGlows"><strong>Explore</strong><a href="/trends">Shop</a><a href="/journal">Journal</a><a href="/info/about">About</a><a href="/info/contact">Contact</a></nav>
      <nav aria-label="Legal information"><strong>Legal</strong><a href="/info/privacy">Privacy Policy</a><a href="/info/terms">Terms of Use</a><a href="/info/disclosure">Affiliate Disclosure</a><a href="/info/editorial-policy">Editorial Policy</a><a href="/info/cookie-notice">Cookie Notice</a></nav>
    </div>
  </footer>;
}
