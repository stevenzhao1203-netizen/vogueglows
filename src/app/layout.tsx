import type { Metadata, Viewport } from "next";
import { site } from "@/data/catalog";
import "./globals.css";
import "./catalog.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://vogueglows.com"),
  title: `${site.name} | Style & Everyday Life Journal`,
  description: site.description,
  keywords: ["women's fashion journal", "women's clothing guides", "handbag shopping notes", "skincare product profiles", "women's travel bags"],
  alternates: { canonical: "https://vogueglows.com" },
  icons: { icon: "/favicon.svg" },
  openGraph: {
    title: "VogueGlows | Style & Everyday Life Journal",
    description: "Personal notes and sourced product profiles for women's clothing, bags, shoes, beauty, and travel style.",
    url: "https://vogueglows.com",
    siteName: "VogueGlows",
    type: "website"
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
