import { Search } from "lucide-react";
import { site } from "@/data/catalog";
import { BrandMark } from "@/components/brand-mark";

type SiteHeaderProps = {
  active?: "home" | "trends" | "about";
};

export function SiteHeader({ active }: SiteHeaderProps) {
  return <header className="site-header site-header-global">
    <BrandMark />
    <nav aria-label="Primary navigation">
      <a className={active === "home" ? "site-nav-active" : undefined} href="/">Home</a>
      <a className={active === "trends" ? "site-nav-active" : undefined} href="/trends">Trends</a>
      <a className={active === "about" ? "site-nav-active" : undefined} href="/info/about">About</a>
    </nav>
    <a className="search" href="/search" aria-label="Search VogueGlows"><Search size={18} /></a>
  </header>;
}

export function SiteFooter() {
  return <footer>
    <BrandMark inverted />
    <p>{site.affiliateNotice}</p>
    <div>
      <a href="/trends">Trends</a><a href="/info/about">About</a><a href="/info/contact">Contact</a>
      <a href="/info/privacy">Privacy</a><a href="/info/terms">Terms</a><a href="/info/disclosure">Disclosure</a><a href="/info/cookie-notice">Cookies</a>
    </div>
  </footer>;
}
