import Link from "next/link";

export const metadata = {
  title: "Carbon Credit Price in India 2026 | ₹500–₹4000 Per Ton | BuyCarbonCredit.in",
  description: "Carbon credit price in India 2026: ₹500–₹4,000 per metric ton. Current voluntary carbon market rates, price per acre, 1 ton price in rupees, historical trends. Updated monthly.",
  keywords: [
    "carbon credit price India 2026",
    "1 carbon credit price in rupees",
    "carbon credit rate per ton India",
    "कार्बन क्रेडिट का भाव",
    "carbon credit current price",
    "voluntary carbon market India price",
    "how much is 1 carbon credit worth in India",
    "carbon credit price per acre",
    "carbon credit market rate 2026",
    "carbon credit price today India",
    "carbon credit gold standard price",
    "VCS carbon price India",
    "soil carbon credit price",
    "carbon market India 2026",
    "carbon credit price blog India",
    "carbon credit price update India",
    "carbon market news India",
    "carbon credit rates for farmers India",
  ],
  alternates: {
    canonical: "https://buycarboncredit.in/carbon-credit-price",
  },
};

const pricePageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Carbon Credit Price in India 2026",
  "description": "Live carbon credit prices in India. 1 carbon credit = ₹500 to ₹4,000 per metric ton.",
  "url": "https://buycarboncredit.in/carbon-credit-price"
};

const priceFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the carbon credit price in India in 2026?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "In 2026, carbon credit prices in India range from ₹500 to ₹4,000 per metric ton in the voluntary carbon market. Gold Standard and VCS certified credits fetch ₹2,500–₹4,000 per ton."
        }
      },
      {
        "@type": "Question",
        "name": "1 कार्बन क्रेडिट कितने रुपए का होता है?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "2026 में भारत में 1 कार्बन क्रेडिट (1 मेट्रिक टन CO₂) की कीमत ₹500 से ₹4,000 तक होती है। गोल्ड स्टैंडर्ड और VCS प्रमाणित क्रेडिट सबसे महंगे होते हैं।"
        }
      }
  ]
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://buycarboncredit.in/" },
    { "@type": "ListItem", "position": 2, "name": "Carbon Credit Price", "item": "https://buycarboncredit.in/carbon-credit-price" }
  ]
};

const PRICES = [
  { type: "General Soil Carbon (Unverified)", min: 500, max: 1200, color: "bg-gray-50 border-gray-200", badge: "Entry Level" },
  { type: "Voluntary Market (Basic Verified)", min: 1000, max: 2000, color: "bg-blue-50 border-blue-200", badge: "Standard" },
  { type: "VCS (Verra) Certified Credits", min: 1500, max: 3000, color: "bg-emerald-50 border-emerald-200", badge: "Popular" },
  { type: "Gold Standard Certified Credits", min: 2500, max: 4000, color: "bg-amber-50 border-amber-200", badge: "Premium" },
  { type: "Agroforestry / Tree Carbon Credits", min: 2000, max: 4500, color: "bg-teal-50 border-teal-200", badge: "High Value" },
  { type: "CCTS India (Compliance Market)", min: 3000, max: 6000, color: "bg-purple-50 border-purple-200", badge: "Future 2027+" },
];

const HISTORY = [
  { year: "2020", price: "₹300–₹800", growth: "Base Year", trend: "↑" },
  { year: "2021", price: "₹500–₹1,200", growth: "+40%", trend: "↑" },
  { year: "2022", price: "₹800–₹2,000", growth: "+60%", trend: "↑" },
  { year: "2023", price: "₹1,000–₹2,500", growth: "+25%", trend: "↑" },
  { year: "2024", price: "₹1,200–₹3,000", growth: "+20%", trend: "↑" },
  { year: "2025", price: "₹1,400–₹3,500", growth: "+15%", trend: "↑" },
  { year: "2026", price: "₹1,500–₹4,000", growth: "+14%", trend: "↑" },
  { year: "2030 (Projected)", price: "₹3,000–₹8,000+", growth: "+100%", trend: "🚀" },
];

export default function CarbonCreditPrice() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pricePageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(priceFaqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <div className="bg-white min-h-screen">
        {/* Hero */}
        <section className="bg-gradient-to-br from-amber-600 via-orange-500 to-amber-400 py-20 text-white text-center">
          <div className="max-w-4xl mx-auto px-4">
            <p className="text-amber-200 font-bold text-sm uppercase tracking-widest mb-4">Live India Carbon Market — Last Updated: June 2026</p>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
              Carbon Credit Price in India 2026
            </h1>
            <p className="text-amber-100 text-xl font-bold mb-2">
              1 Carbon Credit = ₹500 – ₹4,000 per Metric Ton
            </p>
            <p className="text-amber-200 text-base">
              कार्बन क्रेडिट का भाव 2026 | Carbon Credit Bhav | कार्बन क्रेडिटचा दर
            </p>
          </div>
        </section>

        <div className="max-w-5xl mx-auto px-4 py-16">
          {/* Live Price Badge */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex items-center gap-3 bg-emerald-600 text-white px-6 py-3 rounded-full font-bold shadow-lg">
              <span className="w-2 h-2 bg-green-300 rounded-full animate-pulse inline-block"></span>
              Current Market Rate: ₹1,500 – ₹4,000 per Carbon Credit (2026)
            </div>
          </div>

          {/* Price Table */}
          <section className="mb-16" aria-labelledby="table-price-2026">
            <h2 id="table-price-2026" className="text-2xl font-bold mb-2">Carbon Credit Price Table — India (April 2026)</h2>
            <p className="text-gray-500 mb-4">Prices are indicative. Actual deals vary by verification standard, buyer demand, and farming practice.</p>
            <div className="overflow-x-auto rounded-2xl border border-gray-100 shadow-sm">
              <table className="w-full text-sm">
                <thead className="bg-gray-900 text-white">
                  <tr>
                    <th className="px-4 py-3 text-left font-bold">Credit Type</th>
                    <th className="px-4 py-3 text-left font-bold">Market</th>
                    <th className="px-4 py-3 text-center font-bold">Price (₹/ton)</th>
                    <th className="px-4 py-3 text-center font-bold">Price ($/ton)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold">Agricultural Soil Carbon</td>
                    <td className="px-4 py-3">Voluntary (India)</td>
                    <td className="px-4 py-3 text-center">₹500–₹2,500</td>
                    <td className="px-4 py-3 text-center">$6–$30</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-3 font-semibold">Agroforestry Carbon</td>
                    <td className="px-4 py-3">Voluntary (India)</td>
                    <td className="px-4 py-3 text-center">₹1,000–₹4,000</td>
                    <td className="px-4 py-3 text-center">$12–$48</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold">VCS Verified Credits</td>
                    <td className="px-4 py-3">Voluntary (Global)</td>
                    <td className="px-4 py-3 text-center">₹1,500–₹6,000</td>
                    <td className="px-4 py-3 text-center">$18–$72</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-3 font-semibold">Gold Standard Credits</td>
                    <td className="px-4 py-3">Voluntary (Global)</td>
                    <td className="px-4 py-3 text-center">₹2,000–₹8,000</td>
                    <td className="px-4 py-3 text-center">$24–$96</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold">CCTS India Credits</td>
                    <td className="px-4 py-3">Compliance (India)</td>
                    <td className="px-4 py-3 text-center">₹300–₹1,500</td>
                    <td className="px-4 py-3 text-center">$3.6–$18</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm text-gray-500 mt-3">
              Last Updated: April 2026. See <Link href="/carbon-credit-price-per-acre" className="text-emerald-600 font-semibold hover:underline">per acre earnings</Link>, <Link href="/carbon-credit-registration" className="text-emerald-600 font-semibold hover:underline">register your farm</Link>, <Link href="/how-to-sell-carbon-credits-india" className="text-emerald-600 font-semibold hover:underline">how to sell</Link>, and the <Link href="/carbon-credit-calculator" className="text-emerald-600 font-semibold hover:underline">carbon credit calculator</Link>.
            </p>
          </section>

          {/* Price Cards */}
          <section className="mb-16" aria-labelledby="price-categories">
            <h2 id="price-categories" className="text-2xl font-bold mb-2">Carbon Credit Prices by Category — India 2026</h2>
            <p className="text-gray-500 mb-8">श्रेणी के अनुसार कार्बन क्रेडिट की कीमत | श्रेणीनुसार कार्बन क्रेडिट दर</p>
            <div className="grid md:grid-cols-2 gap-4">
              {PRICES.map((p, i) => (
                <div key={i} className={`rounded-2xl border p-6 ${p.color}`}>
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-bold text-gray-900 text-sm leading-tight max-w-xs">{p.type}</h3>
                    <span className="text-xs font-bold text-gray-500 uppercase tracking-widest border border-gray-300 px-2 py-0.5 rounded-full whitespace-nowrap ml-2">{p.badge}</span>
                  </div>
                  <div className="flex items-end gap-2">
                    <p className="text-3xl font-extrabold text-gray-900">
                      ₹{p.min.toLocaleString("en-IN")}–₹{p.max.toLocaleString("en-IN")}
                    </p>
                    <span className="text-sm text-gray-500 mb-1">per ton</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Price History */}
          <section className="mb-16" aria-labelledby="price-history">
            <h2 id="price-history" className="text-2xl font-bold mb-2">Carbon Credit Price History & Forecast India</h2>
            <p className="text-gray-500 mb-8">कार्बन क्रेडिट की कीमत का इतिहास और भविष्यवाणी | कार्बन किमतींचा इतिहास</p>
            <div className="rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-900 text-white">
                    <th className="px-6 py-4 text-left font-bold">Year</th>
                    <th className="px-6 py-4 text-center font-bold">Price Range (₹/ton)</th>
                    <th className="px-6 py-4 text-center font-bold">Growth</th>
                    <th className="px-6 py-4 text-center font-bold">Trend</th>
                  </tr>
                </thead>
                <tbody>
                  {HISTORY.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className={`px-6 py-4 font-bold ${i === HISTORY.length - 1 ? "text-emerald-600" : "text-gray-900"}`}>{row.year}</td>
                      <td className={`px-6 py-4 text-center font-semibold ${i === HISTORY.length - 1 ? "text-emerald-700 text-lg" : "text-gray-700"}`}>{row.price}</td>
                      <td className="px-6 py-4 text-center text-emerald-600 font-bold">{row.growth}</td>
                      <td className="px-6 py-4 text-center text-lg">{row.trend}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Factors affecting price */}
          <section className="mb-16" aria-labelledby="price-factors">
            <h2 id="price-factors" className="text-2xl font-bold mb-2">What Affects Carbon Credit Price in India?</h2>
            <p className="text-gray-500 mb-8">भारत में कार्बन क्रेडिट की कीमत को प्रभावित करने वाले कारक</p>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { factor: "Certification Standard", desc: "Gold Standard and VCS certified credits always fetch 2x–3x higher prices than uncertified credits. Getting certified by Verra or Gold Standard is the single biggest price booster." },
                { factor: "Crop & Farming Practice", desc: "Agroforestry and tree-based carbon credits command the highest prices. Paddy with AWD and no-till wheat are the easiest to verify and sell at reasonable rates." },
                { factor: "Corporate Demand (ESG/CSR)", desc: "As India's BRSR mandate expands to more companies, demand for domestic carbon credits is rising sharply. More buyers = higher prices for farmers." },
                { factor: "CCTS Implementation", desc: "India's Carbon Credit Trading Scheme (CCTS) will create a compliance market with regulated floor prices, expected to push prices to ₹3,000+ per ton by 2027–2028." },
                { factor: "Global Carbon Markets", desc: "International markets priced at $20–$50/ton (₹1,600–₹4,200) influence Indian voluntary market prices. Indian credits are becoming globally competitive." },
                { factor: "Land & Soil Quality", desc: "Fertile agricultural land in states like Punjab, Haryana, Maharashtra, and Tamil Nadu generates higher verified carbon tonnage, fetching better prices." },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 bg-white border border-gray-100 rounded-2xl p-5 shadow-sm">
                  <div className="w-8 h-8 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-sm">
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">{item.factor}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-16" aria-labelledby="price-faq">
            <h2 id="price-faq" className="text-2xl font-bold mb-6">Carbon Credit Price FAQs — India 2026</h2>
            <div className="space-y-4">
              {[
                { q: "1 carbon credit kitne rupees ka hota hai India mein? (1 carbon credit = how many rupees?)", a: "2026 mein India mein 1 carbon credit (1 metric ton CO₂) ki kimmat ₹500 se ₹4,000 ke beech hoti hai. Gold Standard certified credits ₹2,500 se ₹4,000 tak bik sakte hain." },
                { q: "कार्बन क्रेडिट की कीमत कैसे तय होती है? (How is carbon credit price determined?)", a: "कार्बन क्रेडिट की कीमत सर्टिफिकेशन मानक (VCS, Gold Standard), मांग-आपूर्ति, फसल प्रकार, और बाज़ार की परिस्थितियों पर निर्भर करती है।" },
                { q: "What will be carbon credit price in India in 2030?", a: "India's carbon credit prices are projected to reach ₹3,000–₹8,000 per ton by 2030 as the CCTS compliance market becomes fully operational and corporate net-zero commitments drive demand." },
                { q: "Which state's farmers get the highest carbon credit prices in India?", a: "Farmers from Punjab, Haryana, and Maharashtra's irrigated areas typically achieve the highest sequestration rates, thus commanding better prices. However, after CCTS standardization, the playing field will level." },
                { q: "कार्बन क्रेडिटचा भाव कधी वाढेल? (When will carbon credit price increase?)", a: "CCTS (India's Carbon Credit Trading Scheme) ची अंमलबजावणी 2027-2028 मध्ये होईल, तेव्हा किमती मोठ्या प्रमाणात वाढतील. आत्ता नोंदणी करणे faydyache राहील." },
              ].map((faq, i) => (
                <div key={i} className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
                  <h3 className="font-bold text-gray-900 mb-2">{faq.q}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-16" aria-labelledby="price-blog-guides">
            <h2 id="price-blog-guides" className="text-2xl font-bold mb-2">Carbon Credit Price Blog Guides for India</h2>
            <p className="text-gray-500 mb-6">
              Read detailed carbon credit blog guides for regional price trends, buyer demand, farmer income, and safe participation in the Indian carbon market.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <Link href="/blog/carbon-credit-price-maharashtra-2026" className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="font-bold text-gray-900 mb-2">Carbon Credit Price in Maharashtra 2026 Blog</h3>
                <p className="text-sm text-gray-600">District-wise rates, income estimates, and price signals for Maharashtra farmers.</p>
              </Link>
              <Link href="/blog/top-10-carbon-credit-companies-india-2026" className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="font-bold text-gray-900 mb-2">Companies Buying Carbon Credits in India</h3>
                <p className="text-sm text-gray-600">See which buyers influence carbon credit price demand across India.</p>
              </Link>
              <Link href="/blog/carbon-credit-scam-india" className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="font-bold text-gray-900 mb-2">Carbon Credit Scam Warning Blog</h3>
                <p className="text-sm text-gray-600">Learn how to compare real market prices and avoid fake promises or inflated carbon credit schemes.</p>
              </Link>
            </div>
          </section>

          {/* Tools CTA */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Link href="/carbon-credit-calculator" id="price-to-calc-btn" className="bg-emerald-600 text-white rounded-2xl p-6 hover:bg-emerald-700 transition-all group">
              <p className="text-emerald-200 text-sm mb-1">Free Tool</p>
              <h3 className="text-xl font-bold mb-2">Carbon Credit Calculator →</h3>
              <p className="text-emerald-100 text-sm">Calculate how much your farm can earn based on current prices</p>
            </Link>
            <Link href="/contact" id="price-register-btn" className="bg-gray-900 text-white rounded-2xl p-6 hover:bg-gray-800 transition-all group">
              <p className="text-gray-400 text-sm mb-1">Free Registration</p>
              <h3 className="text-xl font-bold mb-2">Register Your Farm →</h3>
              <p className="text-gray-400 text-sm">Start selling carbon credits today and lock in current prices</p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
