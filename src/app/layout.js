import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GoogleAds from "@/components/GoogleAds";

export const metadata = {
  metadataBase: new URL("https://buycarboncredit.in"),
  applicationName: "Buy Carbon Credit",
  title: { default: "Farmer Carbon Project Listings | Buy Carbon Credit", template: "%s | Buy Carbon Credit" },
  description: "Independent marketplace for farmer-provided carbon project listings. Farmer registration costs a one-time ₹199; listings do not guarantee credits, buyers, sales, or income.",
  keywords: ["carbon credit marketplace India", "farmer carbon project listings", "carbon credit registration for farmers", "agricultural carbon projects", "browse farmer listings"],
  authors: [{ name: "Buy Carbon Credit" }],
  creator: "Buy Carbon Credit",
  publisher: "Buy Carbon Credit",
  category: "Marketplace",
  referrer: "origin-when-cross-origin",
  formatDetection: { email: false, address: false, telephone: false },
  alternates: { canonical: "https://buycarboncredit.in" },
  openGraph: {
    title: "Farmer Carbon Project Listings | Buy Carbon Credit",
    description: "Browse seller-provided project listings or register a farm listing for a one-time ₹199 fee.",
    url: "https://buycarboncredit.in",
    siteName: "Buy Carbon Credit",
    locale: "en_IN",
    type: "website",
    images: [{ url: "/favicon.png", width: 512, height: 512, alt: "Buy Carbon Credit" }],
  },
  twitter: { card: "summary_large_image", title: "Buy Carbon Credit", description: "Independent marketplace for farmer carbon-project listings in India.", images: ["/favicon.png"] },
  verification: { google: "pHUMAzeGte1qzhQFrlM9tCAOVVtaBuHMLnEzFdZ-MCc" },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large", "max-snippet": -1 } },
  icons: { icon: "/favicon.png", apple: "/favicon.png" },
  manifest: "/site.webmanifest",
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://buycarboncredit.in/#website",
  url: "https://buycarboncredit.in",
  name: "Buy Carbon Credit",
  description: "Independent online marketplace for farmer-provided carbon project listings.",
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://buycarboncredit.in/#organization",
  name: "Buy Carbon Credit",
  alternateName: "BuyCarbonCredit.in",
  url: "https://buycarboncredit.in",
  logo: "https://buycarboncredit.in/favicon.png",
  description: "Independent online marketplace for farmer-provided carbon project listings.",
  areaServed: { "@type": "Country", name: "India" },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Farmer marketplace listing",
  serviceType: "Online listing service",
  provider: { "@id": "https://buycarboncredit.in/#organization" },
  offers: { "@type": "Offer", price: "199", priceCurrency: "INR", description: "One-time farmer marketplace registration fee" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-IN" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="alternate" type="application/rss+xml" title="Buy Carbon Credit Blog RSS" href="https://buycarboncredit.in/rss.xml" />
        <meta name="google-adsense-account" content="ca-pub-5017050359206389" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      </head>
      <body className="bg-white text-gray-900 antialiased">
        <GoogleAds />
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
