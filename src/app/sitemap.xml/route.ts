import { articles, categories, products } from "@/data/catalog";

const baseUrl = "https://vogueglows.com";

export function GET() {
  const urls = [
    baseUrl,
    `${baseUrl}/journal`,
    ...categories.map(({ slug }) => `${baseUrl}/categories/${slug}`),
    ...products.map(({ slug }) => `${baseUrl}/products/${slug}`),
    ...articles.map(({ slug }) => `${baseUrl}/journal/${slug}`),
  ];
  const body = `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls.map((url) => `<url><loc>${url}</loc></url>`).join("")}</urlset>`;
  return new Response(body, { headers: { "Content-Type": "application/xml; charset=utf-8" } });
}
