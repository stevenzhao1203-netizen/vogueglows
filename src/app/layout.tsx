import type { Metadata } from "next";
import { site } from "@/data/catalog";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://vogueglows.com"),
  title: `${site.name} | Practical Style & Lifestyle Guides`,
  description: site.description,
  keywords: ["style buying guides", "women's shoe guides", "beauty routine guides", "travel buying guides", "everyday home guides"],
  alternates: { canonical: "https://vogueglows.com" },
  openGraph: {
    title: "VogueGlows | Practical Style & Lifestyle Guides",
    description: "Straightforward buying context for style, beauty, travel, audio, and everyday home.",
    url: "https://vogueglows.com",
    siteName: "VogueGlows",
    type: "website"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
