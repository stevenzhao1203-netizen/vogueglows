import { site } from "@/data/catalog";
import { BrandMark } from "@/components/brand-mark";

type SiteHeaderProps = {
  active?: "home" | "journal" | "edit" | "about";
  categorySlug?: string;
};

export function SiteHeader({ active }: SiteHeaderProps) {
  return <header className="site-header site-header-global site-header-simple">
    <BrandMark />
    <nav aria-label="Primary navigation">
      <a className={active === "home" ? "site-nav-active" : undefined} href="/">Home</a>
      <a href="/#stories">Notes</a>
      <a className={active === "about" ? "site-nav-active" : undefined} href="/info/about">About</a>
    </nav>
  </header>;
}

export function SiteFooter() {
  return <footer>
    <BrandMark inverted />
    <p>{site.affiliateNotice}</p>
    <div className="footer-links">
      <nav aria-label="Explore VogueGlows"><strong>Explore</strong><a href="/#stories">Notes</a><a href="/info/about">About</a><a href="/info/contact">Contact</a></nav>
      <nav aria-label="Legal information"><strong>Legal</strong><a href="/info/privacy">Privacy Policy</a><a href="/info/terms">Terms of Use</a><a href="/info/disclosure">Affiliate Disclosure</a><a href="/info/editorial-policy">Editorial Policy</a><a href="/info/cookie-notice">Cookie Notice</a></nav>
    </div>
  </footer>;
}
