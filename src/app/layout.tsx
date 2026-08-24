import type { Metadata } from "next";
import { site } from "@/data/catalog";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://vogueglows.com"),
  title: `${site.name} | Fashion and Lifestyle, Curated`,
  description: site.description,
  keywords: ["women's fashion recommendations", "best beauty products", "lifestyle essentials", "fashion affiliate blog", "home decor inspiration"],
  alternates: { canonical: "https://vogueglows.com" },
  openGraph: {
    title: "VogueGlows | Fashion and Lifestyle, Curated",
    description: "A bright, international edit of fashion, beauty, home and everyday finds.",
    url: "https://vogueglows.com",
    siteName: "VogueGlows",
    type: "website"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
