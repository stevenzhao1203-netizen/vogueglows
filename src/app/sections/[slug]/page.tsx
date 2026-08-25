import { redirect } from "next/navigation";

const legacyDestinations: Record<string, string> = {
  fashion: "/categories/clothing",
  "home-living": "/categories/bags-accessories",
  beauty: "/categories/beauty-skincare",
  "the-edit": "/trends"
};

export default async function LegacySectionPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  redirect(legacyDestinations[slug] ?? "/journal");
}
