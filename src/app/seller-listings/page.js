import SellerListingsBrowser from "@/components/SellerListingsBrowser";
import Link from "next/link";

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
        <p className="mx-auto max-w-7xl px-4 pt-8 text-gray-700 sm:px-6 lg:px-8">Planning a company or NGO plantation project? <Link href="/enterprise-ngo-tree-plantation" className="font-semibold text-emerald-700 underline">Post your farmer land requirement or view organizations looking for farmers.</Link></p>
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
