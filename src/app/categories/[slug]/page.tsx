import { redirect } from "next/navigation";
import { categories, getCategory } from "@/data/catalog";

export const generateStaticParams = () => categories.map(({ slug }) => ({ slug }));

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const category = getCategory(slug);
  redirect(category ? `/trends#${category.slug}` : "/trends");
}
