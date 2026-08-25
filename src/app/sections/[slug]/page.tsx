import { redirect } from "next/navigation";

const legacyDestinations: Record<string, string> = {
  fashion: "/trends#clothing",
  "home-living": "/trends#bags-accessories",
  beauty: "/trends#beauty-skincare",
  "the-edit": "/trends"
};

export default async function LegacySectionPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  redirect(legacyDestinations[slug] ?? "/journal");
}
