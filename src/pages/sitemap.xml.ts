import { getCollection } from 'astro:content';

export async function GET() {
  const guides = await getCollection('guides');
  const latest = guides.reduce(
    (date, guide) => (guide.data.lastUpdated > date ? guide.data.lastUpdated : date),
    new Date('2026-08-10'),
  );
  const urls = [
    { path: '/', lastmod: latest },
    { path: '/privacy/', lastmod: new Date('2026-08-11') },
    ...guides.map((guide) => ({ path: `/${guide.id}/`, lastmod: guide.data.lastUpdated })),
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(({ path, lastmod }) => `  <url><loc>https://digital-adoption.ca${path}</loc><lastmod>${lastmod.toISOString().slice(0, 10)}</lastmod></url>`)
  .join('\n')}
</urlset>`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
}
