import Link from "next/link";

export const metadata = {
  title: "Carbon Credit Registration for Farmers India 2026 | Free Registration",
  description:
    "Free carbon credit registration for Indian farmers. Step-by-step guide to register your farm, get verified, and earn ₹50,000+/year. All states eligible. Register now.",
  alternates: {
    canonical: "https://buycarboncredit.in/carbon-credit-registration",
  },
};

const howToJsonLd = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to Register for Carbon Credits in India",
  "description": "Free step-by-step carbon credit registration process for Indian farmers on BuyCarbonCredit.in",
  "totalTime": "PT30M",
  "estimatedCost": { "@type": "MonetaryAmount", "currency": "INR", "value": "0" },
  "step": [
    {
      "@type": "HowToStep",
      "name": "Fill Free Registration Form",
      "text": "Visit BuyCarbonCredit.in/contact and submit your name, mobile number, village/district, land area in acres, and current farming practice.",
      "url": "https://buycarboncredit.in/contact"
    },
    {
      "@type": "HowToStep",
      "name": "Submit Land Documents",
      "text": "Upload or share your 7/12 extract (Satbara), Aadhaar card, and a photo of your farmland. Documents can be submitted via WhatsApp."
    },
    {
      "@type": "HowToStep",
      "name": "Farm Verification",
      "text": "Our team verifies your land area, location, and current farming practice. Verification takes 7–14 working days. A field visit may be required for large farms."
    },
    {
      "@type": "HowToStep",
      "name": "Carbon Credit Listing",
      "text": "Once verified, your carbon credits are listed on the BuyCarbonCredit.in marketplace. Companies browse and purchase directly from your listing."
    },
    {
      "@type": "HowToStep",
      "name": "Receive Payment",
      "text": "When a company buys your carbon credits, payment is transferred directly to your registered bank account. Carbon offset certificates are issued to the buyer."
    }
  ]
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How to apply for carbon credits in India as a farmer?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "To apply for carbon credits in India: (1) Register free at BuyCarbonCredit.in/contact, (2) Submit your land details and farming practice, (3) Get your farm verified (7–14 days), (4) Your carbon credits are listed on the marketplace, (5) Companies buy your credits and you get paid directly. No fees. No middlemen. Minimum 1 acre required."
      }
    },
    {
      "@type": "Question",
      "name": "What is the carbon credit scheme for farmers in India?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "India's voluntary carbon market allows farmers to sell carbon credits earned from sustainable agricultural practices. Under India's Carbon Credit Trading Scheme (CCTS) and voluntary markets, farmers practising no-till farming, agroforestry, organic farming, or cover cropping can register, get verified, and sell carbon credits to companies needing to offset their emissions."
      }
    },
    {
      "@type": "Question",
      "name": "Is carbon credit registration free in India?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Registration on BuyCarbonCredit.in is completely free for farmers. There are no upfront fees, no annual charges, and no commissions deducted from your earnings. The platform earns from the buyer side only."
      }
    },
    {
      "@type": "Question",
      "name": "Which states are eligible for carbon credit registration in India?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Farmers from all 28 Indian states and union territories are eligible to register for carbon credits on BuyCarbonCredit.in. This includes Maharashtra, Uttar Pradesh, Gujarat, Punjab, Haryana, Rajasthan, Telangana, Andhra Pradesh, Karnataka, Tamil Nadu, Madhya Pradesh, Bihar, Odisha, West Bengal, and all other states."
      }
    }
  ]
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://buycarboncredit.in/" },
    { "@type": "ListItem", "position": 2, "name": "Carbon Credit Registration", "item": "https://buycarboncredit.in/carbon-credit-registration" }
  ]
};

export default function CarbonCreditRegistrationPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <main className="bg-white">
        {/* Hero */}
        <section className="bg-gradient-to-br from-emerald-700 via-emerald-600 to-emerald-500 text-white py-16 md:py-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-emerald-100 font-semibold text-sm uppercase tracking-wide mb-3">Registration guide • Free for farmers</p>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
              Carbon Credit Registration for Farmers in India | कार्बन क्रेडिट पंजीकरण
            </h1>
            <p className="text-emerald-100 text-lg md:text-xl mb-6">
              5 simple steps: form, documents, verification, listing, payment. Minimum 1 acre. All 28 states covered. No fees, no middlemen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="px-6 py-3 bg-white text-emerald-700 font-bold rounded-xl hover:bg-emerald-50 shadow-lg">
                Start registration now →
              </Link>
              <Link href="/carbon-credit-calculator" className="px-6 py-3 bg-emerald-900 text-white font-bold rounded-xl border border-emerald-200 hover:bg-emerald-800">
                Estimate earnings →
              </Link>
            </div>
          </div>
        </section>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <section className="mb-10" aria-labelledby="who-can-register">
            <h2 id="who-can-register" className="text-3xl md:text-4xl font-bold mb-4">Who Can Register for Carbon Credits in India?</h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              Any farmer with at least 1 acre can register. Tenant farmers can join with landholder consent. FPOs, cooperatives, and SHGs can group multiple smallholders to reduce verification cost. Practices that qualify: no-till wheat, conservation tillage in cotton, organic vegetables, agroforestry rows, cover crops in millets, improved rice with alternate wetting and drying, biochar/compost soil amendments.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Land need not be contiguous; parcels within the same district can be bundled. If you manage orchards or agroforestry strips, you qualify even if crop residue is sold elsewhere. The key requirement is evidence of sustainable practice and the ability to monitor it over time.
            </p>
          </section>

          <section className="mb-10" aria-labelledby="documents">
            <h2 id="documents" className="text-3xl md:text-4xl font-bold mb-4">Documents Required for Carbon Credit Registration</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
              <li>7/12 extract (Satbara) or equivalent land record (ROR, Patta, Khata) showing acreage and survey number.</li>
              <li>Aadhaar card of the farmer or FPO representative.</li>
              <li>Recent geotagged farm photos showing crops/trees and residue management.</li>
              <li>Bank account details for direct payment (no intermediary wallets).</li>
              <li>Optional: soil test report if available; this improves price and verification speed.</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">Send via WhatsApp or upload in the contact form. Files stay private and are used only for verification.</p>
          </section>

          <section className="mb-10" aria-labelledby="process">
            <h2 id="process" className="text-3xl md:text-4xl font-bold mb-4">Step-by-Step Carbon Credit Registration Process</h2>
            <ol className="list-decimal list-inside text-gray-700 space-y-3 mb-6">
              <li>Fill the <Link href="/contact" className="text-emerald-600 font-semibold hover:underline">free registration form</Link> with name, mobile, village, district, acres, and current practice.</li>
              <li>Upload documents: 7/12 extract, Aadhaar, farm photos. Group uploads for FPO batches.</li>
              <li>Verification in 7–14 working days. Remote checks for small plots; field visit for larger bundles.</li>
              <li>Listing on marketplace with per-acre credit estimate and price band linked to <Link href="/carbon-credit-price" className="text-emerald-600 font-semibold hover:underline">current carbon price</Link>.</li>
              <li>Buyers purchase credits. Payment goes directly to your bank; certificate is issued to buyer.</li>
            </ol>
            <p className="text-gray-700 leading-relaxed mb-3">
              Typical timeline from form to listing: 10 days. Payout after sale: 3–5 working days. Farmer commission: 0 (platform charges buyers).
            </p>
            <p className="text-gray-700 leading-relaxed">
              Tip: If you plan to shift from no-till to agroforestry, mention it during registration; we can tag the project to fetch higher price bands once trees are established.
            </p>
          </section>

          <section className="mb-10" aria-labelledby="state-guide">
            <h2 id="state-guide" className="text-3xl md:text-4xl font-bold mb-4">Carbon Credit Registration for Farmers — State-Wise Guide</h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              Maharashtra (Vidarbha, Marathwada): cotton/soybean no-till and tur intercrop qualify fast; add border trees to raise credits. Punjab & Haryana: rice AWD + residue management; winter wheat no-till lifts income. Karnataka & Telangana: mango/teak alley cropping plus millets gives premium credits. Gujarat: millet + cover crops; saline areas benefit from biochar. Uttar Pradesh & Bihar: bundling small parcels through FPOs cuts monitoring cost and meets buyer minimum lots. Tamil Nadu & Kerala: agroforestry with coconut/arecanut gives steady sequestration.
            </p>
            <p className="text-gray-700 leading-relaxed">
              All 28 states are eligible. State tagging inside listings helps buyers showcase local impact in CSR/BRSR reports.
            </p>
          </section>

          <section className="mb-10" aria-labelledby="verification">
            <h2 id="verification" className="text-3xl md:text-4xl font-bold mb-4">How Long Does Verification Take?</h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              Standard verification: 7–14 working days. Remote sensing + document review for plots under 25 acres typically finish in a week. Field visit adds 4–7 days for large farms or FPO bundles. You receive WhatsApp updates at each step.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Fast-track option: if you already have soil tests and geotagged photos, verification can finish in 5 working days. Uploading clear residue-management photos (for rice/wheat) or tree spacing photos (for agroforestry) speeds up approvals.
            </p>
          </section>

          <section className="mb-10" aria-labelledby="earnings">
            <h2 id="earnings" className="text-3xl md:text-4xl font-bold mb-4">How Much Will You Earn After Registration?</h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              No-till: ₹640–₹3,750 per acre per year. Organic: ₹1,000–₹8,000. Agroforestry: ₹2,250–₹12,000. Cover cropping: ₹250–₹1,500. Improved rice: ₹150–₹800. Use the <Link href="/carbon-credit-calculator" className="text-emerald-600 font-semibold hover:underline">calculator</Link> for your exact district and crop.
            </p>
            <p className="text-gray-700 leading-relaxed mb-3">
              Example: A 6-acre farmer in Karnataka practising agroforestry (2.2 credits/acre at ₹2,200) earns 6 × 2.2 × 2,200 = ₹29,040 yearly. If priced at ₹1,600 for faster sale, income is ₹21,120 with quicker payout. Choose the strategy that suits your cash-flow needs.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Payouts are additional to crop/MSP income. Carbon credits do not affect crop insurance or land ownership.
            </p>
          </section>

          <section className="mb-12" aria-labelledby="faqs">
            <h2 id="faqs" className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions — Carbon Credit Registration</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <div className="border border-gray-100 rounded-2xl p-4">
                <h3 className="font-semibold text-gray-900 mb-2">Is registration really free?</h3>
                <p>Yes. No upfront fee, no annual fee, and no farmer-side commission. The platform charges buyers.</p>
              </div>
              <div className="border border-gray-100 rounded-2xl p-4">
                <h3 className="font-semibold text-gray-900 mb-2">Minimum land required?</h3>
                <p>1 acre. Smaller plots can join an FPO bundle so you still qualify.</p>
              </div>
              <div className="border border-gray-100 rounded-2xl p-4">
                <h3 className="font-semibold text-gray-900 mb-2">Do I lose MSP or crop subsidy?</h3>
                <p>No. Carbon income is additional. It does not affect MSP, crop insurance, or subsidies.</p>
              </div>
              <div className="border border-gray-100 rounded-2xl p-4">
                <h3 className="font-semibold text-gray-900 mb-2">How do I sell after registering?</h3>
                <p>Once verified, credits are listed automatically. You can choose fixed price or auction. See the <Link href="/how-to-sell-carbon-credits-india" className="text-emerald-600 font-semibold hover:underline">how to sell guide</Link> for details.</p>
              </div>
            </div>
          </section>

          <section className="bg-emerald-600 text-white rounded-3xl p-8 md:p-12 shadow-xl">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-2">Register free and list your credits</h3>
                <p className="text-emerald-100 text-sm md:text-base">Verification in 7–14 days. Payments direct to your bank. All states covered.</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/contact" className="px-6 py-3 bg-white text-emerald-700 font-bold rounded-xl hover:bg-emerald-50">
                  Register now →
                </Link>
                <Link href="/carbon-credit-price-per-acre" className="px-6 py-3 bg-emerald-900 text-white font-bold rounded-xl border border-emerald-200 hover:bg-emerald-800">
                  Check per-acre price →
                </Link>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
