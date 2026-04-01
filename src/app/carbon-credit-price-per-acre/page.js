import Link from "next/link";

export const metadata = {
  title: "Carbon Credit Price Per Acre in India 2026 | ₹5,000–₹10,000/Acre",
  description:
    "Carbon credit price per acre in India 2026: earn ₹5,000–₹10,000/acre/year. Complete table by farming type. How much carbon credit per acre? Calculate your farm income.",
  alternates: {
    canonical: "https://buycarboncredit.in/carbon-credit-price-per-acre",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is the carbon credit price per acre in India?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The carbon credit income per acre in India ranges from ₹250 to ₹12,000 per year depending on the farming practice. No-till farming earns ₹640–₹3,750/acre/year. Agroforestry earns the most at ₹2,250–₹12,000/acre/year. One acre generates approximately 0.5 to 3 carbon credits per year."
      }
    },
    {
      "@type": "Question",
      "name": "How much carbon credit does 1 acre of land produce in India?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "1 acre of farmland in India generates approximately 0.5 to 3 metric tons of CO₂ equivalent per year as carbon credits, depending on the farming practice. Agroforestry produces the most. Standard crop farming with improved practices generates 0.5–1.5 tons per acre per year."
      }
    },
    {
      "@type": "Question",
      "name": "What is the price of 1 ton of carbon credit in India in 2026?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "In 2026, 1 ton of carbon credit in India is priced between ₹500 and ₹4,000 in the voluntary carbon market. Agricultural soil carbon credits from Indian farmers typically trade at ₹800–₹2,500 per metric ton. VCS and Gold Standard verified credits command premium prices."
      }
    },
    {
      "@type": "Question",
      "name": "Can I earn carbon credits from 1 acre of land in India?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Farmers with as little as 1 acre can register and earn carbon credits on BuyCarbonCredit.in. Registration is free. With 1 acre of organic or no-till farming, you can earn ₹800–₹4,000 per year in carbon credit income."
      }
    }
  ]
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://buycarboncredit.in/" },
    { "@type": "ListItem", "position": 2, "name": "Carbon Credit Price Per Acre", "item": "https://buycarboncredit.in/carbon-credit-price-per-acre" }
  ]
};

const PRICE_ROWS = [
  { practice: "No-Till Farming", credits: "0.8–1.5 tons", price: "₹800–₹2,500", income: "₹640–₹3,750" },
  { practice: "Organic Farming", credits: "1.0–2.0 tons", price: "₹1,000–₹4,000", income: "₹1,000–₹8,000" },
  { practice: "Agroforestry", credits: "1.5–3.0 tons", price: "₹1,500–₹4,000", income: "₹2,250–₹12,000" },
  { practice: "Cover Cropping", credits: "0.5–1.0 tons", price: "₹500–₹1,500", income: "₹250–₹1,500" },
  { practice: "Rice Paddy (improved)", credits: "0.3–0.8 tons", price: "₹500–₹1,000", income: "₹150–₹800" },
  { practice: "Soil Amendment", credits: "0.6–1.2 tons", price: "₹600–₹2,000", income: "₹360–₹2,400" },
];

export default function CarbonCreditPerAcrePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <main className="bg-white">
        {/* Hero */}
        <section className="bg-gradient-to-br from-emerald-700 via-emerald-600 to-emerald-500 text-white py-16 md:py-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-emerald-100 font-semibold text-sm uppercase tracking-wide mb-3">High-intent keyword: carbon credit price in india per acre</p>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
              Carbon Credit Price Per Acre in India 2026 | कार्बन क्रेडिट प्रति एकड़ कीमत
            </h1>
            <p className="text-emerald-100 text-lg md:text-xl mb-6">
              One focused page for farmers who search “carbon credit price per acre”. Use the calculator, see the table, and start earning ₹5,000–₹10,000 per acre per year.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/carbon-credit-calculator" className="px-6 py-3 bg-white text-emerald-700 font-bold rounded-xl hover:bg-emerald-50 shadow-lg">
                Calculate your income →
              </Link>
              <Link href="/contact" className="px-6 py-3 bg-emerald-900 text-white font-bold rounded-xl border border-emerald-200 hover:bg-emerald-800">
                Register your farm free →
              </Link>
            </div>
          </div>
        </section>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          {/* H2: generation */}
          <section className="mb-12" aria-labelledby="how-much-one-acre">
            <h2 id="how-much-one-acre" className="text-3xl md:text-4xl font-bold mb-4">
              How Much Carbon Credit Can 1 Acre of Land Generate?
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              In India, 1 acre of farmland produces between 0.5 and 3 carbon credits (metric tons of CO₂e) a year. The number depends on rainfall, soil organic carbon, crop rotation, residue management, and whether you follow no-till, organic, cover cropping, or agroforestry. Dryland sorghum with residue retention in Maharashtra generates around 0.8–1.1 credits. Paddy with alternate wetting and drying in Punjab yields 0.3–0.8 credits. A mango–millet agroforestry plot in Telangana reaches 2–3 credits because trees fix more biomass.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Credits renew annually. Listing every quarter improves cash flow, while holding for a year can fetch a higher price if demand spikes. Farmers with fragmented plots can bundle acres through an FPO to reach a minimum 50–100 credit lot size that most corporate buyers prefer for BRSR reporting.
            </p>
            <p className="text-gray-700 leading-relaxed">
              If your land is <strong>1 acre</strong>, you are still eligible. The monitoring cost is covered by grouping nearby farms. Your income is additional to crop revenue and does not affect MSP or mandi sales.
            </p>
          </section>

          {/* H2: Table */}
          <section className="mb-12" aria-labelledby="price-table">
            <h2 id="price-table" className="text-3xl md:text-4xl font-bold mb-4">
              Carbon Credit Price Per Acre — Complete Table by Farming Practice
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Use this table to benchmark your earnings. Prices reflect April 2026 transactions on BuyCarbonCredit.in plus verified voluntary market data. Pick the conservative middle of each band when budgeting.
            </p>
            <div className="overflow-x-auto rounded-2xl border border-gray-100 shadow-sm">
              <table className="w-full text-sm">
                <thead className="bg-gray-900 text-white">
                  <tr>
                    <th className="px-4 py-3 text-left font-bold">Farming Practice</th>
                    <th className="px-4 py-3 text-left font-bold">Carbon Credits Per Acre/Year</th>
                    <th className="px-4 py-3 text-left font-bold">Price Per Credit (₹)</th>
                    <th className="px-4 py-3 text-left font-bold">Annual Income Per Acre (₹)</th>
                  </tr>
                </thead>
                <tbody>
                  {PRICE_ROWS.map((row, i) => (
                    <tr key={row.practice} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="px-4 py-3 font-semibold text-gray-900">{row.practice}</td>
                      <td className="px-4 py-3 text-gray-700">{row.credits}</td>
                      <td className="px-4 py-3 text-gray-700">{row.price}</td>
                      <td className="px-4 py-3 text-emerald-700 font-bold">{row.income}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm text-gray-500 mt-3">
              Verified projects with soil tests and geotagged photos usually sell at the upper band. Add cover crops or tree rows to move your acre into the higher range.
            </p>
          </section>

          {/* H2: calculation */}
          <section className="mb-12" aria-labelledby="calculate-income">
            <h2 id="calculate-income" className="text-3xl md:text-4xl font-bold mb-4">
              How to Calculate Your Carbon Credit Income Per Acre
            </h2>
            <ol className="list-decimal list-inside text-gray-700 space-y-3 mb-6">
              <li>Choose your practice (no-till, organic, agroforestry, cover crop, improved rice, soil amendment).</li>
              <li>Take the credit band from the table above (e.g., 1.2 credits for no-till).</li>
              <li>Pick a price within the band. If verified or in a high-demand state, use the upper half.</li>
              <li>Multiply acres × credits × price. That is annual carbon income.</li>
              <li>Check the <Link href="/carbon-credit-calculator" className="text-emerald-600 font-semibold hover:underline">Carbon Credit Calculator</Link> to see buyer-ready quotes and auction vs fixed price options.</li>
            </ol>
            <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-6">
              <p className="font-bold text-gray-900 mb-2">1 acre example (requested by farmers):</p>
              <p className="text-gray-700">
                A Maharashtra farmer with 5 acres practising no-till farming earns roughly <strong>5 × 1.2 credits × ₹1,500 = ₹9,000/year</strong>. If the same farmer plants a shelterbelt of gliricidia (agroforestry) and verification is completed, the band can rise to 2.2 credits and ₹2,200/credit → about ₹24,200/year.
              </p>
              <p className="text-gray-600 text-sm mt-3">
                Numbers are conservative. Actual payouts depend on monitoring cost, verification, and buyer timing. Registration is free; payouts go straight to your bank.
              </p>
            </div>
          </section>

          {/* H2: State-wise */}
          <section className="mb-12" aria-labelledby="state-wise">
            <h2 id="state-wise" className="text-3xl md:text-4xl font-bold mb-4">
              Carbon Credit Price Per Acre — State-Wise Estimates
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Maharashtra (Vidarbha, Marathwada): no-till soybean/wheat earns ₹1,000–₹2,200/credit; agroforestry rows lift it to ₹2,500–₹4,000. Punjab & Haryana: residue management and AWD rice return ₹800–₹1,800/credit. Karnataka & Telangana: mango, teak, and pongamia alley cropping fetch ₹2,000–₹3,500/credit. Gujarat (Saurashtra, Kutch): millet + cover crop systems clear ₹600–₹1,400/credit. Rajasthan arid zones: shelterbelts push credits from 0.4 to 1.2/acre and ₹1,200–₹2,000/credit because wind erosion control is valued by buyers.
            </p>
            <p className="text-gray-700 leading-relaxed">
              These ranges come from real deals on BuyCarbonCredit.in in Q1–Q2 2026. Use them to negotiate or choose fixed-price listings. Bulk buyers for BRSR filings often pay 5–15% more for state-tagged impact within India.
            </p>
          </section>

          {/* H2: How to start */}
          <section className="mb-12" aria-labelledby="start-earning">
            <h2 id="start-earning" className="text-3xl md:text-4xl font-bold mb-4">
              How to Start Earning Carbon Credits From Your Farm
            </h2>
            <ol className="list-decimal list-inside text-gray-700 space-y-3 mb-4">
              <li>Register free at <Link href="/contact" className="text-emerald-600 font-semibold hover:underline">BuyCarbonCredit.in/contact</Link>. Minimum 1 acre.</li>
              <li>Upload 7/12 extract (Satbara), Aadhaar, and farm photos. WhatsApp upload works.</li>
              <li>Verification in 7–14 working days. Field visit for large plots or FPO bundles.</li>
              <li>Choose fixed price or buyer-offer listing. Link to <Link href="/carbon-credit-price" className="text-emerald-600 font-semibold hover:underline">current price page</Link> for guidance.</li>
              <li>Get paid directly when a company buys. Certificates go to the buyer; money goes to your bank.</li>
            </ol>
            <p className="text-gray-700 mb-4">
              Small farmers below 1 acre can join their FPO to bundle credits and cut monitoring cost. Companies like seeing grouped credits by district because it makes BRSR impact easier to report.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/contact" className="px-6 py-3 bg-emerald-600 text-white font-bold rounded-xl hover:bg-emerald-700">
                Register your farm free →
              </Link>
              <Link href="/how-to-sell-carbon-credits-india" className="px-6 py-3 bg-white text-emerald-700 font-bold rounded-xl border border-emerald-200 hover:bg-emerald-50">
                Learn how to sell →
              </Link>
            </div>
          </section>

          {/* H2: FAQ */}
          <section className="mb-12" aria-labelledby="faq-per-acre">
            <h2 id="faq-per-acre" className="text-3xl md:text-4xl font-bold mb-4">
              Frequently Asked Questions — Carbon Credit Per Acre
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <div className="border border-gray-100 rounded-2xl p-4">
                <h3 className="font-semibold text-gray-900 mb-2">What is the carbon credit price per acre in India?</h3>
                <p>₹250–₹12,000 per acre per year depending on practice. Agroforestry earns the most. Use our calculator for your district.</p>
              </div>
              <div className="border border-gray-100 rounded-2xl p-4">
                <h3 className="font-semibold text-gray-900 mb-2">How many credits does 1 acre produce?</h3>
                <p>0.5–3 credits yearly. Dryland cover cropping is on the lower side; tree-based systems reach the higher side.</p>
              </div>
              <div className="border border-gray-100 rounded-2xl p-4">
                <h3 className="font-semibold text-gray-900 mb-2">Do small farmers need sensors?</h3>
                <p>No. Geotagged photos, soil tests, and field verification are enough for most smallholders. Sensors can add premiums but are optional.</p>
              </div>
              <div className="border border-gray-100 rounded-2xl p-4">
                <h3 className="font-semibold text-gray-900 mb-2">Is payment guaranteed?</h3>
                <p>Payments occur after a buyer purchases your listed credits. Funds go directly to your bank. Registration and listing are free; no farmer-side commission.</p>
              </div>
            </div>
          </section>

          {/* CTA bottom */}
          <section className="bg-emerald-600 text-white rounded-3xl p-8 md:p-12 shadow-xl">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-2">Calculate your exact carbon credit income</h3>
                <p className="text-emerald-100 text-sm md:text-base">Free calculator + fast registration. Farmers from all 28 states are eligible.</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/carbon-credit-calculator" className="px-6 py-3 bg-white text-emerald-700 font-bold rounded-xl hover:bg-emerald-50">
                  Use free calculator →
                </Link>
                <Link href="/contact" className="px-6 py-3 bg-emerald-900 text-white font-bold rounded-xl border border-emerald-200 hover:bg-emerald-800">
                  Register your farm →
                </Link>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
