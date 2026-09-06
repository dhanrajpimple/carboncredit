import SellerListingsBrowser from "@/components/SellerListingsBrowser";

export const metadata = {
  title: "Farmer Carbon Project Listings in India",
  description:
    "Browse farmer-provided carbon project listings in India by state, district, acreage and estimated volume. Buyers must independently verify every claim.",
  alternates: {
    canonical: "https://buycarboncredit.in/seller-listings",
  },
  openGraph: {
    title: "Farmer Carbon Project Listings in India",
    description:
      "Browse seller-provided farm and carbon-project information by location, land area and estimated volume.",
    url: "https://buycarboncredit.in/seller-listings",
    type: "website",
    locale: "en_IN",
  },
  twitter: { card: "summary_large_image", title: "Farmer Carbon Project Listings in India", description: "Browse farmer-provided project listings and conduct independent due diligence." },
  robots: { index: true, follow: true },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://buycarboncredit.in/" },
    { "@type": "ListItem", position: 2, name: "Seller List", item: "https://buycarboncredit.in/seller-listings" },
  ],
};

export default function SellerListingsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <main className="bg-white min-h-screen">
        <SellerListingsBrowser
          sectionId="seller-listings"
          eyebrow="Seller list only"
          title="Farmer Carbon Project Listings in India"
          description="Browse seller-provided farm and project information. Estimated volumes are not verified or issued carbon credits; buyers must conduct independent due diligence."
          headingAs="h1"
        />
      </main>
    </>
  );
}
