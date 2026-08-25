import { redirect } from "next/navigation";

const legacyDestinations: Record<string, string> = {
  fashion: "/categories/style",
  "home-living": "/categories/everyday-home",
  beauty: "/categories/beauty-wellness",
  "the-edit": "/trends"
};

export default async function LegacySectionPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  redirect(legacyDestinations[slug] ?? "/journal");
}
