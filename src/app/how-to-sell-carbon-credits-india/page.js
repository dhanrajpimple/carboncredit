import Link from "next/link";

export const metadata = {
  title: "How to Sell Carbon Credits in India 2026 | Complete Farmer Guide",
  description:
    "How to sell carbon credits in India: step-by-step guide for farmers. Earn ₹50,000+/year from your farm. Where to sell, how to register, how much you earn. Free registration.",
  alternates: {
    canonical: "https://buycarboncredit.in/how-to-sell-carbon-credits-india",
  },
};

const howToJsonLd = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to Sell Carbon Credits in India",
  "description": "Complete guide for Indian farmers to sell carbon credits and earn extra income",
  "totalTime": "P14D",
  "step": [
    { "@type": "HowToStep", "name": "Register your farm", "text": "Sign up free at BuyCarbonCredit.in/contact with your farm details, land area, and current practices." },
    { "@type": "HowToStep", "name": "Choose your sustainable practice", "text": "Qualify by practising no-till farming, organic farming, agroforestry, or cover cropping. Our team guides you on which practice generates the most credits." },
    { "@type": "HowToStep", "name": "Get your farm verified", "text": "Submit your 7/12 extract, Aadhaar, and farm photos. Verification takes 7–14 days." },
    { "@type": "HowToStep", "name": "List your carbon credits", "text": "Verified credits are listed on the marketplace. Companies searching for carbon offsets can see and purchase from your listing." },
    { "@type": "HowToStep", "name": "Receive payment", "text": "When a company buys, payment goes directly to your bank. Receive ₹500–₹4,000 per carbon credit sold." }
  ]
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Where to sell carbon credits in India?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sell directly on BuyCarbonCredit.in. Farmers list verified credits; companies buy for ESG, CSR, and BRSR compliance."
      }
    },
    {
      "@type": "Question",
      "name": "How much can you earn selling carbon credits?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "₹500–₹4,000 per credit. Typical farms earn ₹640–₹12,000 per acre per year depending on practice and state."
      }
    },
    {
      "@type": "Question",
      "name": "Can small farmers under 1 acre sell carbon credits?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes via group listing with FPOs or cooperatives. Bundling lowers monitoring cost and meets minimum volume for buyers."
      }
    },
    {
      "@type": "Question",
      "name": "Do I lose MSP or crop income when I sell credits?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. Carbon credit income is additional to crop revenue and MSP. You keep full crop income."
      }
    }
  ]
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://buycarboncredit.in/" },
    { "@type": "ListItem", "position": 2, "name": "How to Sell Carbon Credits in India", "item": "https://buycarboncredit.in/how-to-sell-carbon-credits-india" }
  ]
};

export default function SellCarbonCreditsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <main className="bg-white">
        {/* Hero */}
        <section className="bg-gradient-to-br from-emerald-700 via-emerald-600 to-emerald-500 text-white py-16 md:py-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-emerald-100 font-semibold text-sm uppercase tracking-wide mb-3">Sell guide • Farmer-first • Last Updated: June 2026</p>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
              How to Sell Carbon Credits in India | कार्बन क्रेडिट कैसे बेचें
            </h1>
            <p className="text-emerald-100 text-lg md:text-xl mb-6">
              Five steps to list, attract buyers, and get paid. Free registration. Payments directly to your bank. No middlemen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="px-6 py-3 bg-white text-emerald-700 font-bold rounded-xl hover:bg-emerald-50 shadow-lg">
                List your farm today →
              </Link>
              <Link href="/carbon-credit-price-per-acre" className="px-6 py-3 bg-emerald-900 text-white font-bold rounded-xl border border-emerald-200 hover:bg-emerald-800">
                Check per-acre price →
              </Link>
            </div>
          </div>
        </section>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <section className="mb-10" aria-labelledby="why-buyers">
            <h2 id="why-buyers" className="text-3xl md:text-4xl font-bold mb-4">What Are Carbon Credits and Why Do Companies Buy Them?</h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              One carbon credit equals one metric ton of CO₂e removed or avoided. Indian companies buy credits to meet ESG disclosures, CSR spending, and BRSR requirements. Scope 3 supply-chain emissions are driving rapid demand for local, traceable credits. Farm-based credits are preferred because they deliver co-benefits: soil health, water savings, and farmer income.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Verified credits come with serial numbers and retirement certificates that auditors accept. When you list on BuyCarbonCredit.in, buyers can filter by state, practice, and volume—this speeds up deals and lets you negotiate better rates.
            </p>
          </section>

          <section className="mb-10" aria-labelledby="who-can-sell">
            <h2 id="who-can-sell" className="text-3xl md:text-4xl font-bold mb-4">Who Can Sell Carbon Credits in India?</h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              Farmers with ≥1 acre practising no-till, organic farming, agroforestry, cover cropping, improved rice, or soil amendment. Tenant farmers can participate with landholder consent. FPOs and cooperatives can bundle smallholders to meet minimum buyer volume (50–100 credits).
            </p>
            <p className="text-gray-700 leading-relaxed">
              If you run orchards, plantations, or agroforestry belts, list tree species and spacing—buyers pay a premium for long-lived biomass. For paddy or wheat, document residue management and water savings; it improves verification speed.
            </p>
          </section>

          <section className="mb-10" aria-labelledby="where-to-sell">
            <h2 id="where-to-sell" className="text-3xl md:text-4xl font-bold mb-4">Where to Sell Carbon Credits in India</h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              Sell directly on <strong>BuyCarbonCredit.in</strong>. It keeps farmer-side costs at zero and routes payments directly to your bank. Alternatives like overseas exchanges charge higher fees and settle slower. Domestic buyers prefer India-listed credits for BRSR and CSR reporting, so listing locally usually yields faster sales and better visibility.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Your listing shows state, practice, verification status, and volume. Buyers can request fixed price or make offers. We recommend setting a floor price using the <Link href="/carbon-credit-price" className="text-emerald-600 font-semibold hover:underline">live carbon price page</Link> and the <Link href="/carbon-credit-price-per-acre" className="text-emerald-600 font-semibold hover:underline">per-acre table</Link>.
            </p>
          </section>

          <section className="mb-10" aria-labelledby="steps">
            <h2 id="steps" className="text-3xl md:text-4xl font-bold mb-4">How to Sell Carbon Credits From Your Farm — 5 Steps</h2>
            <ol className="list-decimal list-inside text-gray-700 space-y-3 mb-6">
              <li>Register free at <Link href="/contact" className="text-emerald-600 font-semibold hover:underline">BuyCarbonCredit.in/contact</Link>. Minimum 1 acre.</li>
              <li>Select practice (no-till, organic, agroforestry, cover crop, improved rice). We guide you to the highest credit yield.</li>
              <li>Verify with 7/12 extract, Aadhaar, and geotagged photos. Turnaround: 7–14 days.</li>
              <li>List credits with fixed price or buyer-offer. Link to <Link href="/carbon-credit-calculator" className="text-emerald-600 font-semibold hover:underline">calculator</Link> for price guidance.</li>
              <li>Buyer pays → certificate issued → money to your bank in 3–5 working days.</li>
            </ol>
            <p className="text-gray-700 leading-relaxed">
              Keep your listing updated each season. Adding a short video of your field improves buyer trust and can raise price by 5–10%.
            </p>
          </section>

          <section className="mb-10" aria-labelledby="earnings">
            <h2 id="earnings" className="text-3xl md:text-4xl font-bold mb-4">How Much Can You Earn Selling Carbon Credits?</h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              No-till: ₹640–₹3,750 per acre per year. Agroforestry: ₹2,250–₹12,000. Organic: ₹1,000–₹8,000. Cover crops: ₹250–₹1,500. Improved rice: ₹150–₹800. Use state tagging to attract corporate buyers who need local impact for CSR.
            </p>
            <p className="text-gray-700 leading-relaxed mb-3">
              Example: A 5-acre agroforestry plot in Telangana at 2.2 credits/acre and ₹2,200 per credit earns <strong>5 × 2.2 × 2,200 = ₹24,200/year</strong>. Pricing at ₹1,800 could move faster and still net ₹19,800.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Earnings are in addition to crop revenue. You retain MSP eligibility, crop insurance, and land ownership benefits.
            </p>
          </section>

          <section className="mb-10" aria-labelledby="small-farms">
            <h2 id="small-farms" className="text-3xl md:text-4xl font-bold mb-4">How to Sell Carbon Credits From a Farm in India Under 1 Acre</h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              Join your FPO or cooperative to bundle credits. Bundling lowers monitoring cost, reaches buyer-preferred volumes, and enables collective bargaining. Provide a single document packet for the group to speed verification.
            </p>
            <p className="text-gray-700 leading-relaxed">
              If your village lacks an FPO, we can connect nearby farmers with similar crops to form a micro-bundle. Bundles also unlock better pricing for soil testing and remote sensing.
            </p>
          </section>

          <section className="mb-12" aria-labelledby="faqs">
            <h2 id="faqs" className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <div className="border border-gray-100 rounded-2xl p-4">
                <h3 className="font-semibold text-gray-900 mb-2">Can I keep my crop income?</h3>
                <p>Yes. Carbon income is additional. It does not affect MSP or crop insurance.</p>
              </div>
              <div className="border border-gray-100 rounded-2xl p-4">
                <h3 className="font-semibold text-gray-900 mb-2">How fast do I get paid?</h3>
                <p>3–5 working days after buyer payment. Funds go directly to your bank account.</p>
              </div>
              <div className="border border-gray-100 rounded-2xl p-4">
                <h3 className="font-semibold text-gray-900 mb-2">Is registration free?</h3>
                <p>Yes. Farmer side is zero-fee. Platform revenue comes from the buyer side.</p>
              </div>
              <div className="border border-gray-100 rounded-2xl p-4">
                <h3 className="font-semibold text-gray-900 mb-2">Do I need IoT devices?</h3>
                <p>No. Geotagged photos and basic soil tests are enough for most farms. Devices are optional and used only if you want premium data-driven credits.</p>
              </div>
            </div>
          </section>

          <section className="bg-emerald-600 text-white rounded-3xl p-8 md:p-12 shadow-xl">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-2">Sell your carbon credits without middlemen</h3>
                <p className="text-emerald-100 text-sm md:text-base">Register free, verify in 7–14 days, list, and get paid directly.</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/contact" className="px-6 py-3 bg-white text-emerald-700 font-bold rounded-xl hover:bg-emerald-50">
                  Register & list now →
                </Link>
                <Link href="/carbon-credit-registration" className="px-6 py-3 bg-emerald-900 text-white font-bold rounded-xl border border-emerald-200 hover:bg-emerald-800">
                  See registration steps →
                </Link>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
