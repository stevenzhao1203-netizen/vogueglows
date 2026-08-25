import type { Metadata } from "next";
import { site } from "@/data/catalog";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://vogueglows.com"),
  title: `${site.name} | Style & Everyday Life Journal`,
  description: site.description,
  keywords: ["style journal", "women's fashion notes", "beauty routine guides", "travel packing ideas", "everyday home edit"],
  alternates: { canonical: "https://vogueglows.com" },
  icons: { icon: "/favicon.svg" },
  openGraph: {
    title: "VogueGlows | Style & Everyday Life Journal",
    description: "Notes and useful shop guides for style, beauty, travel, audio, and everyday home.",
    url: "https://vogueglows.com",
    siteName: "VogueGlows",
    type: "website"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
