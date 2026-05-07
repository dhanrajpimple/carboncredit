import blogs from "@/data/blogs.json";

const baseUrl = "https://buycarboncredit.in";

const escapeXml = (value = "") =>
  String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");

export function GET() {
  const items = blogs
    .map((post) => {
      const url = `${baseUrl}/blog/${post.id}`;

      return `
        <item>
          <title>${escapeXml(post.title)}</title>
          <link>${url}</link>
          <guid>${url}</guid>
          <description>${escapeXml(post.excerpt)}</description>
          <pubDate>${new Date(post.date).toUTCString()}</pubDate>
          <category>${escapeXml(post.category)}</category>
        </item>`;
    })
    .join("");

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
    <rss version="2.0">
      <channel>
        <title>BuyCarbonCredit India Blog</title>
        <link>${baseUrl}/blog</link>
        <description>Carbon credit guides for Indian farmers and companies: buying, selling, pricing, verification, farming, ESG, CSR and net-zero topics.</description>
        <language>en-IN</language>
        <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
        ${items}
      </channel>
    </rss>`;

  return new Response(rss, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
