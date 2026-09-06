import Link from "next/link";
import { notFound } from "next/navigation";
import { getFarmerById, getRelatedFarmersByState } from "@/lib/farmers";

export const dynamic = "force-dynamic";

function getWhatsAppHref(phone) {
  if (!phone) return "#";
  return `https://wa.me/${String(phone).replace(/\+/g, "")}`;
}

export async function generateMetadata({ params }) {
  const { id } = await params;

  try {
    const farmer = await getFarmerById(id);

    if (!farmer) {
      return {
        title: "Seller Listing Not Found | BuyCarbonCredit.in",
      };
    }

    return {
      title: `${farmer.name} Farm Project Listing — ${farmer.state}`,
      description: `View seller-provided farm project information for ${farmer.name} in ${farmer.location_label}, including land area and estimated carbon-credit volume.`,
      alternates: {
        canonical: `https://buycarboncredit.in/buy-carbon-credit/${farmer.id}`,
      },
      openGraph: {
        title: `${farmer.name} Farm Project Listing — ${farmer.state}`,
        description: `Seller-provided farm project listing in ${farmer.location_label}. Estimates require independent buyer verification.`,
        url: `https://buycarboncredit.in/buy-carbon-credit/${farmer.id}`,
        type: "website",
        locale: "en_IN",
      },
      twitter: { card: "summary_large_image", title: `${farmer.name} Farm Project Listing — ${farmer.state}`, description: `Seller-provided farm project information in ${farmer.location_label}.` },
      robots: { index: true, follow: true },
    };
  } catch (error) {
    console.error("Seller metadata fetch error:", error);
    return {
      title: "Carbon Credit Seller Page | BuyCarbonCredit.in",
    };
  }
}

export default async function FarmerDetailPage({ params }) {
  const { id } = await params;

  let farmer = null;
  let relatedFarmers = [];

  try {
    farmer = await getFarmerById(id);

    if (!farmer) {
      notFound();
    }

    relatedFarmers = await getRelatedFarmersByState(farmer.state, farmer.id, 3);
  } catch (error) {
    console.error("Seller page fetch error:", error);
    notFound();
  }

  const sellerSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: farmer.name,
    address: {
      "@type": "PostalAddress",
      addressCountry: farmer.country,
      addressRegion: farmer.state,
      addressLocality: farmer.district !== "N/A" ? farmer.district : farmer.state,
      postalCode: farmer.pincode || undefined,
    },
    description: `Seller-provided farm project listing for ${farmer.name} with an estimated ${farmer.carbon_credits} tonnes CO2e from ${farmer.land_acres} acres. Estimates are not verified or issued credits.`,
    url: `https://buycarboncredit.in/buy-carbon-credit/${farmer.id}`,
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://buycarboncredit.in/" },
      { "@type": "ListItem", position: 2, name: "Seller List", item: "https://buycarboncredit.in/seller-listings" },
      { "@type": "ListItem", position: 3, name: farmer.name, item: `https://buycarboncredit.in/buy-carbon-credit/${farmer.id}` },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(sellerSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <main className="bg-white min-h-screen">
        <section className="bg-gradient-to-br from-emerald-700 via-emerald-600 to-teal-500 text-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-18">
            <div className="mb-6">
              <Link href="/seller-listings" className="text-emerald-100 hover:text-white font-medium">
                Back to seller list
              </Link>
            </div>

            <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-8 items-start">
              <div>
                <p className="text-emerald-100 font-bold text-sm uppercase tracking-widest mb-4">
                  Separate seller page
                </p>
                <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
                  {farmer.name}
                </h1>
                <p className="text-xl text-emerald-50 font-semibold mb-4">
                  Carbon credit seller in {farmer.location_label}
                </p>
                <p className="text-emerald-100 text-lg leading-relaxed max-w-3xl">
                  This separate seller page helps buyers quickly understand where the seller is located, how much land is involved, and the estimated credit volume before starting a conversation.
                </p>
              </div>

              <div className="bg-white/10 border border-white/15 rounded-3xl p-6 backdrop-blur-sm">
                <p className="text-sm uppercase tracking-widest text-emerald-100 mb-3">Quick snapshot</p>
                <div className="space-y-4">
                  <div>
                    <p className="text-emerald-100 text-sm">Estimated carbon credits</p>
                    <p className="text-3xl font-extrabold">{farmer.carbon_credits} Tons CO2</p>
                  </div>
                  <div>
                    <p className="text-emerald-100 text-sm">Land size</p>
                    <p className="text-2xl font-bold">{farmer.land_acres} Acres</p>
                  </div>
                  <div>
                    <p className="text-emerald-100 text-sm">Seller location</p>
                    <p className="text-lg font-semibold">{farmer.location_label}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid lg:grid-cols-[1fr_0.9fr] gap-8">
            <div className="space-y-8">
              <div className="rounded-3xl border border-gray-100 bg-white shadow-sm p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Where Is This Seller?</h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  Buyers often want location clarity first. This seller is based in <strong>{farmer.district !== "N/A" ? farmer.district : farmer.state}</strong>, <strong>{farmer.state}</strong>, {farmer.country}. That makes it easier to judge regional fit, local impact, and reporting relevance.
                </p>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="rounded-2xl bg-emerald-50 border border-emerald-100 p-5">
                    <p className="text-sm font-semibold text-emerald-700 mb-2">District</p>
                    <p className="text-2xl font-bold text-gray-900">{farmer.district}</p>
                  </div>
                  <div className="rounded-2xl bg-emerald-50 border border-emerald-100 p-5">
                    <p className="text-sm font-semibold text-emerald-700 mb-2">State</p>
                    <p className="text-2xl font-bold text-gray-900">{farmer.state}</p>
                  </div>
                  <div className="rounded-2xl bg-gray-50 border border-gray-100 p-5">
                    <p className="text-sm font-semibold text-gray-500 mb-2">Country</p>
                    <p className="text-2xl font-bold text-gray-900">{farmer.country}</p>
                  </div>
                  <div className="rounded-2xl bg-gray-50 border border-gray-100 p-5">
                    <p className="text-sm font-semibold text-gray-500 mb-2">Pincode</p>
                    <p className="text-2xl font-bold text-gray-900">{farmer.pincode || "Not shared"}</p>
                  </div>
                </div>
              </div>

              <div className="rounded-3xl border border-gray-100 bg-white shadow-sm p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Seller Listing Details</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="rounded-2xl border border-gray-100 p-5">
                    <p className="text-sm font-semibold text-gray-500 mb-2">Seller name</p>
                    <p className="text-xl font-bold text-gray-900">{farmer.name}</p>
                  </div>
                  <div className="rounded-2xl border border-gray-100 p-5">
                    <p className="text-sm font-semibold text-gray-500 mb-2">Estimated credits</p>
                    <p className="text-xl font-bold text-gray-900">{farmer.carbon_credits} Tons CO2</p>
                  </div>
                  <div className="rounded-2xl border border-gray-100 p-5">
                    <p className="text-sm font-semibold text-gray-500 mb-2">Land available</p>
                    <p className="text-xl font-bold text-gray-900">{farmer.land_acres} Acres</p>
                  </div>
                  <div className="rounded-2xl border border-gray-100 p-5">
                    <p className="text-sm font-semibold text-gray-500 mb-2">Listing type</p>
                    <p className="text-xl font-bold text-gray-900">Farmer carbon credit supply</p>
                  </div>
                </div>
              </div>

              {relatedFarmers.length > 0 && (
                <div className="rounded-3xl border border-gray-100 bg-white shadow-sm p-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">More Sellers From {farmer.state}</h2>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    If you want to compare nearby or same-state supply, these seller pages can help you review location and volume side by side.
                  </p>
                  <div className="grid gap-4">
                    {relatedFarmers.map((relatedFarmer) => (
                      <Link
                        key={relatedFarmer.id}
                        href={relatedFarmer.listing_path}
                        className="rounded-2xl border border-gray-100 p-5 hover:border-emerald-200 hover:bg-emerald-50 transition-colors"
                      >
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                          <div>
                            <p className="text-lg font-bold text-gray-900">{relatedFarmer.name}</p>
                            <p className="text-gray-600">{relatedFarmer.location_label}</p>
                          </div>
                          <div className="text-left sm:text-right">
                            <p className="text-sm text-gray-500">{relatedFarmer.land_acres} Acres</p>
                            <p className="text-sm font-semibold text-emerald-700">{relatedFarmer.carbon_credits} Tons CO2</p>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <aside className="space-y-6">
              <div className="rounded-3xl border border-emerald-100 bg-emerald-50 p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Seller contact</h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  All contact actions are kept on this separate page so buyers can review the seller location first and then decide whether to call, email, or message.
                </p>
                {farmer.phone || farmer.email ? <div className="grid gap-3">
                  {farmer.phone && (
                  <a
                    href={getWhatsAppHref(farmer.phone)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center bg-green-500 text-white py-3 rounded-xl font-bold hover:bg-green-600 transition-colors"
                  >
                    WhatsApp Seller
                  </a>
                  )}
                  {farmer.email && (
                  <a
                    href={`mailto:${farmer.email}`}
                    className="flex items-center justify-center bg-gray-900 text-white py-3 rounded-xl font-bold hover:bg-black transition-colors"
                  >
                    Email Seller
                  </a>
                  )}
                  {farmer.phone && (
                  <a
                    href={`tel:${farmer.phone}`}
                    className="flex items-center justify-center border border-emerald-600 text-emerald-700 py-3 rounded-xl font-bold hover:bg-white transition-colors"
                  >
                    Call {farmer.phone}
                  </a>
                  )}
                </div> : <p className="text-sm text-gray-600">No public contact details are available for this listing.</p>}
              </div>

              <div className="rounded-3xl border border-gray-100 bg-white shadow-sm p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Buyer Next Steps</h2>
                <ul className="space-y-3 text-gray-600 leading-relaxed">
                  <li>Confirm location fit for your sourcing or impact story.</li>
                  <li>Compare acreage and expected credit volume.</li>
                  <li>Check other sellers from the same state if you need more supply.</li>
                  <li>Contact the seller or speak with the platform team for help.</li>
                </ul>
              </div>

              <div className="rounded-3xl border border-gray-100 bg-gray-900 text-white p-8">
                <h2 className="text-2xl font-bold mb-4">Need Help Shortlisting Sellers?</h2>
                <p className="text-gray-300 leading-relaxed mb-6">
                  If you need multiple sellers by location, volume, or state, the platform team can help you compare options faster.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center w-full bg-white text-gray-900 rounded-xl font-bold py-3 hover:bg-gray-100 transition-colors"
                >
                  Contact Buyer Support
                </Link>
              </div>
            </aside>
          </div>
        </section>
      </main>
    </>
  );
}
