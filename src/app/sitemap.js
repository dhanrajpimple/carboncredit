import blogs from "@/data/blogs.json";

const baseUrl = "https://buycarboncredit.in";
const siteUpdated = new Date("2026-09-06T00:00:00+05:30");

const staticRoutes = [
  { path: "", changeFrequency: "weekly", priority: 1.0 },
  { path: "/global-buyers", changeFrequency: "weekly", priority: 0.95 },
  { path: "/blog", changeFrequency: "weekly", priority: 0.95 },
  { path: "/buy-carbon-credit", changeFrequency: "weekly", priority: 0.9 },
  { path: "/seller-listings", changeFrequency: "weekly", priority: 0.9 },
  { path: "/carbon-credit-price", changeFrequency: "weekly", priority: 0.9 },
  { path: "/carbon-credit-price-per-acre", changeFrequency: "monthly", priority: 0.85 },
  { path: "/carbon-credit-registration", changeFrequency: "monthly", priority: 0.85 },
  { path: "/how-to-sell-carbon-credits-india", changeFrequency: "monthly", priority: 0.85 },
  { path: "/carbon-credit-calculator", changeFrequency: "monthly", priority: 0.8 },
  { path: "/about-us", changeFrequency: "monthly", priority: 0.6 },
  { path: "/contact", changeFrequency: "monthly", priority: 0.7 },
  { path: "/privacy-policy", changeFrequency: "yearly", priority: 0.3 },
  { path: "/terms", changeFrequency: "yearly", priority: 0.3 },
  { path: "/disclaimer", changeFrequency: "yearly", priority: 0.3 },
];

export default function sitemap() {
  const staticEntries = staticRoutes.map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified: siteUpdated,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  const blogEntries = blogs.filter((post) => post.index !== false).map((post) => ({
    url: `${baseUrl}/blog/${post.id}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticEntries, ...blogEntries];
}
