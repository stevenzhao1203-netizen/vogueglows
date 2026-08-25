import { redirect } from "next/navigation";

const legacyDestinations: Record<string, string> = {
  fashion: "/#stories",
  "home-living": "/#stories",
  beauty: "/#stories",
  "the-edit": "/#stories"
};

export default async function LegacySectionPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  redirect(legacyDestinations[slug] ?? "/journal");
}
