import SellerListingsBrowser from "@/components/SellerListingsBrowser";

export const metadata = {
  title: "Seller List | Carbon Credit Sellers in India | BuyCarbonCredit.in",
  description:
    "Dedicated seller list for buyers. View carbon credit sellers in India by state, district, acreage, and estimated credits without extra page clutter.",
  alternates: {
    canonical: "https://buycarboncredit.in/seller-listings",
  },
  openGraph: {
    title: "Seller List | Carbon Credit Sellers in India",
    description:
      "Open the seller-only page to quickly browse carbon credit sellers, locations, and estimated credits.",
    url: "https://buycarboncredit.in/seller-listings",
    type: "website",
    locale: "en_IN",
  },
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
          title="Carbon Credit Sellers in India"
          description="This page is made only for buyers who want to quickly find sellers. Use the filters, open each separate seller page, and see location details without digging through extra content."
          headingAs="h1"
        />
      </main>
    </>
  );
}
