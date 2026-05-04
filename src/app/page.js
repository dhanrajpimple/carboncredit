import Link from "next/link";

export const metadata = {
  title: "Buy & Sell Carbon Credits India | Marketplace, Price & Blog | BuyCarbonCredit",
  description: "India's #1 carbon credit marketplace. Farmers earn ₹50,000+/year. Companies meet ESG & net-zero goals. Carbon credit price ₹500–₹4000/ton. Register free — all Indian states.",
  keywords: [
    "buy carbon credits india",
    "carbon credits india",
    "carbon credit price india",
    "carbon credit price per acre india",
    "carbon credit registration farmers",
    "sell carbon credits india",
    "carbon credit marketplace india",
    "carbon credit calculator india",
    "carbon credit blog india",
    "carbon credits blog",
    "carbon credit guide india",
    "how to sell carbon credits india",
  ],
  alternates: {
    canonical: "https://buycarboncredit.in/",
  },
  openGraph: {
    title: "Buy & Sell Carbon Credits India | BuyCarbonCredit",
    description: "India's #1 carbon credit marketplace connecting farmers with companies. Earn ₹50,000+ per year from sustainable farming.",
    url: "https://buycarboncredit.in/",
    type: "website",
    locale: "en_IN",
  },
};

const homePageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://buycarboncredit.in/#webpage",
  "url": "https://buycarboncredit.in",
  "name": "BuyCarbonCredit — India's #1 Carbon Credit Marketplace",
  "description": "India's best carbon credit marketplace connecting farmers with companies. Buy and sell verified soil carbon credits directly.",
  "isPartOf": { "@id": "https://buycarboncredit.in/#website" },
  "about": {
    "@type": "Thing",
    "name": "Carbon Credit Trading India"
  },
  "breadcrumb": {
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://buycarboncredit.in" }
    ]
  }
};

const homeFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is the carbon credit price in India per acre in 2026?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "In India, a farmer can earn approximately ₹5,000 to ₹10,000 per acre per year from carbon credits in 2026. One acre of sustainable farmland generates roughly 0.5 to 2 carbon credits annually, at a market price of ₹500 to ₹4,000 per credit. Earnings depend on the farming practice: organic farming, agroforestry, and no-till farming earn the most."
      }
    },
    {
      "@type": "Question",
      "name": "How to earn carbon credits in India as a farmer?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Indian farmers can earn carbon credits by adopting sustainable farming practices such as no-till farming, organic farming, agroforestry, or cover cropping. The process: (1) Register your farm on BuyCarbonCredit.in for free, (2) Get your land verified for carbon sequestration, (3) Your carbon credits are listed on the marketplace, (4) Companies buy your credits directly. Minimum land required: 1 acre. All Indian states are eligible."
      }
    },
    {
      "@type": "Question",
      "name": "How to buy carbon credits in India for companies?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Companies can buy carbon credits in India directly from verified Indian farmers on BuyCarbonCredit.in. Browse listings by state, farming type, and volume. Purchase verified carbon offset certificates for ESG, CSR, and BRSR compliance. Scope 1, 2, and 3 emissions covered. Bulk purchases available. No middlemen — direct farmer-to-company transactions."
      }
    },
    {
      "@type": "Question",
      "name": "How to register for carbon credits in India?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "To register for carbon credits in India: (1) Visit BuyCarbonCredit.in/contact and fill the free registration form, (2) Submit your land details — area, location, and current farming practice, (3) Our team verifies your land and sustainable practices, (4) Once verified, your carbon credits are listed and ready for sale. Registration is completely free. Farmers with as little as 1 acre can register."
      }
    },
    {
      "@type": "Question",
      "name": "What is 1 ton carbon credit price in India?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "In India's voluntary carbon market, 1 ton of carbon credit (equivalent to 1 metric ton of CO₂ removed) is priced between ₹500 and ₹4,000 in 2026. Agricultural carbon credits from Indian farmers typically trade at ₹800–₹2,500 per ton. Globally, carbon credit prices range from $5 to $50 per ton (₹415–₹4,150). Premium verified credits (VCS, Gold Standard) command higher prices."
      }
    },
    {
      "@type": "Question",
      "name": "How much carbon credit can I earn from 1 acre in India?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "From 1 acre of farmland in India, you can earn approximately 0.5 to 2 carbon credits per year depending on your farming practice. At current market rates of ₹500–₹4,000 per credit, that translates to ₹250–₹8,000 per acre per year from carbon credits alone. Agroforestry generates more credits than standard crop farming. Register on BuyCarbonCredit.in to get a personalised estimate."
      }
    },
    {
      "@type": "Question",
      "name": "Where to sell carbon credits in India?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Indian farmers can sell carbon credits on BuyCarbonCredit.in — India's dedicated carbon credit marketplace. The platform connects farmers directly with companies buying carbon offsets for ESG, CSR, and net-zero compliance. There are no middlemen: farmers receive the full payment. Registration is free, and farmers from all 28 Indian states are eligible."
      }
    }
  ]
};

const KEY_STATS = [
  { value: "₹50,000+", label: "Avg. Farmer Annual Income", sub: "per year from carbon credits" },
  { value: "₹500–₹4000", label: "Carbon Credit Price", sub: "per metric ton (1 carbon credit)" },
  { value: "1 Acre+", label: "Minimum Land Required", sub: "all Indian states eligible" },
  { value: "All India", label: "Coverage", sub: "Maharashtra, UP, Gujarat, Punjab & more" },
];

const STATES = [
  "Maharashtra", "Uttar Pradesh", "Gujarat", "Punjab", "Haryana",
  "Rajasthan", "Telangana", "Andhra Pradesh", "Karnataka", "Tamil Nadu",
  "Madhya Pradesh", "Bihar", "Odisha", "West Bengal", "Jharkhand",
  "Chhattisgarh", "Assam", "Kerala", "Himachal Pradesh", "Uttarakhand"
];

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homePageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeFaqSchema) }}
      />
      <div className="flex flex-col gap-20 pb-20">

        {/* ─── Hero Section ─── */}
        <section className="relative bg-emerald-50 py-24 lg:py-32 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center lg:text-left lg:max-w-3xl">
              <p className="text-emerald-700 font-bold text-sm uppercase tracking-widest mb-4">
                India&apos;s #1 Carbon Credit Marketplace | कार्बन क्रेडिट मार्केटप्लेस
              </p>
              <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 tracking-tight mb-6 leading-tight">
                Buy and Sell Carbon Credits in India | <span className="text-emerald-600">कार्बन क्रेडिट मार्केटप्लेस</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-4 leading-relaxed">
                Connect companies seeking <strong>carbon offsets</strong> with verified farmers generating <strong>soil carbon credits</strong> through sustainable agriculture across India.
              </p>
              <p className="text-base text-gray-500 mb-8 leading-relaxed">
                किसान कार्बन क्रेडिट बेचें और ₹50,000+ सालाना कमाएं।
                शेतकरी कार्बन क्रेडिट विका आणि वार्षिक ₹50,000+ मिळवा।
                Companies: Meet ESG, CSR &amp; Net-Zero targets.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link
                  href="/buy-carbon-credit"
                  id="hero-buy-btn"
                  className="px-8 py-4 bg-emerald-600 text-white rounded-xl font-bold text-lg hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-200 text-center"
                >
                  Buy Carbon Credits
                </Link>
                <Link
                  href="/contact"
                  id="hero-register-btn"
                  className="px-8 py-4 bg-white text-emerald-600 border-2 border-emerald-600 rounded-xl font-bold text-lg hover:bg-emerald-50 transition-all text-center"
                >
                  Register Your Farm Free →
                </Link>
              </div>
            </div>
          </div>
          <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 opacity-10 pointer-events-none">
            <svg width="600" height="600" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path fill="#059669" d="M45.5,-75.4C58.8,-68.8,69.5,-56.3,77.3,-42.4C85,-28.5,89.7,-13.2,88,-0.9C86.4,11.3,78.3,20.6,71.2,30.3C64.1,40,58,50.1,49.2,59.2C40.3,68.4,28.6,76.6,15.6,79C2.7,81.4,-11.5,78,-25.1,72.9C-38.7,67.7,-51.7,60.8,-62.4,50.8C-73.1,40.8,-81.4,27.7,-84.3,13.6C-87.2,-0.5,-84.7,-15.6,-77.9,-29.4C-71.1,-43.3,-60,-55.8,-47.1,-62.7C-34.1,-69.5,-19.4,-70.7,-3.7,-64.3C11.9,-57.9,23.8,-43.8,32.2,-31.6C40.6,-19.4,45.5,-9.7,45.5,0L45.5,-75.4Z" transform="translate(100 100)" />
            </svg>
          </div>
        </section>

        {/* ─── Price Band ─── */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">Carbon Credit Price in India 2026 — ₹500 to ₹4000 Per Ton</h2>
          <p className="text-gray-600 mb-2">
            Live voluntary market range for 2026: soil carbon ₹500–₹2,500, agroforestry ₹1,500–₹4,000, premium verified credits up to ₹4,000 per ton.
            Check monthly updates on the <Link href="/carbon-credit-price" className="text-emerald-600 font-semibold hover:underline">Carbon Credit Price</Link> page.
          </p>
          <p className="text-sm text-gray-500">
            Price bands are updated monthly based on BuyCarbonCredit.in transactions across Maharashtra, Punjab, Karnataka, Gujarat, and Telangana.
          </p>
        </section>

        {/* ─── Key Stats ─── */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Carbon Credit Statistics India">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {KEY_STATS.map((stat, i) => (
              <div key={i} className="bg-emerald-50 rounded-2xl p-6 text-center border border-emerald-100">
                <p className="text-3xl font-extrabold text-emerald-700 mb-1">{stat.value}</p>
                <p className="font-bold text-gray-800 text-sm mb-1">{stat.label}</p>
                <p className="text-xs text-gray-500">{stat.sub}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ─── What Are Carbon Credits ─── */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-labelledby="what-is-carbon-credit">
          <div className="bg-white rounded-3xl border border-gray-100 p-8 md:p-16 text-center shadow-xl shadow-gray-100">
            <h2 id="what-is-carbon-credit" className="text-3xl md:text-4xl font-bold mb-6">
              What Are Carbon Credits? | कार्बन क्रेडिट क्या है? | कार्बन क्रेडिट म्हणजे काय?
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed mb-6">
              One <strong>carbon credit</strong> represents the removal or reduction of <strong>one metric ton of carbon dioxide (CO₂)</strong> from the atmosphere. By buying these credits, companies support sustainable practices that actively combat climate change and meet their <strong>net-zero</strong> and <strong>ESG targets</strong>.
            </p>
            <p className="text-base text-gray-500 max-w-3xl mx-auto leading-relaxed">
              <strong>Hindi:</strong> एक कार्बन क्रेडिट = 1 टन CO₂ को वातावरण से हटाना। किसान टिकाऊ खेती से कमाते हैं, कंपनियां खरीदती हैं।&nbsp;&nbsp;
              <strong>Marathi:</strong> एक कार्बन क्रेडिट = 1 टन CO₂ वातावरणातून काढणे. शेतकरी कमवतात, कंपन्या विकत घेतात.
            </p>
          </div>
        </section>

        {/* ─── For Farmers & Companies ─── */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-8" aria-label="For Farmers and Companies">
          <div className="p-10 bg-white rounded-3xl border border-gray-100 shadow-sm">
            <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center mb-6">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            </div>
            <h2 className="text-2xl font-bold mb-3">How to Earn Carbon Credits in India (For Farmers)</h2>
            <p className="text-gray-600 mb-4">
              Register your farmland and turn <strong>sustainable agricultural practices</strong> into a new revenue stream. Earn <strong>₹50,000+ per year</strong> by selling verified <strong>soil carbon credits</strong> to companies worldwide.
            </p>
            <ul className="text-sm text-gray-500 space-y-1 mb-6 list-disc list-inside">
              <li>Minimum 1 acre of land required</li>
              <li>All Indian states eligible — Maharashtra, UP, Gujarat, Punjab, Telangana & more</li>
              <li>No-till, organic, agroforestry, cover crops qualify</li>
              <li>Free registration | मुफ्त पंजीकरण | मोफत नोंदणी</li>
            </ul>
            <Link href="/contact" id="farmer-register-btn" className="text-emerald-600 font-bold hover:underline">Start Registering Free →</Link>
          </div>
          <div className="p-10 bg-white rounded-3xl border border-gray-100 shadow-sm">
            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-6">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
            </div>
            <h2 className="text-2xl font-bold mb-3">How to Buy Carbon Credits in India (For Companies)</h2>
            <p className="text-gray-600 mb-4">
              Meet your <strong>net-zero goals</strong>, <strong>ESG targets</strong>, and <strong>CSR obligations</strong> by purchasing high-quality, <strong>verified carbon credits</strong> directly from Indian farmers. Support local communities, get transparent carbon offset certificates.
            </p>
            <ul className="text-sm text-gray-500 space-y-1 mb-6 list-disc list-inside">
              <li>Direct farmer-to-company transactions (no middlemen)</li>
              <li>Verified carbon offset certificates for BRSR/ESG disclosure</li>
              <li>Scope 1, 2, and 3 emissions offset</li>
              <li>Bulk purchase available | CSR eligible</li>
            </ul>
            <Link href="/buy-carbon-credit" id="company-buy-btn" className="text-emerald-600 font-bold hover:underline">Browse Carbon Credit Listings →</Link>
          </div>
        </section>

        {/* ─── How It Works ─── */}
        <section className="bg-gray-50 py-20" aria-labelledby="how-it-works">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 id="how-it-works" className="text-3xl md:text-4xl font-bold text-center mb-4">Carbon Credit Registration Process for Farmers</h2>
            <p className="text-center text-gray-500 max-w-2xl mx-auto mb-16">
              Register → Verify → List → Sell → Get Paid. भारत में किसान कार्बन क्रेडिट कैसे रजिस्टर करें? महाराष्ट्रात शेतकरी कार्बन क्रेडिट नोंदणी कशी करावी?
            </p>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { step: "Step 1", title: "Fill Free Form", desc: "Submit name, mobile, village, district, acres, and practice at BuyCarbonCredit.in/contact. न्यूनतम 1 एकड़।" },
                { step: "Step 2", title: "Upload Documents", desc: "Send 7/12 extract, Aadhaar, and farm photos on WhatsApp or web. Documents stay private." },
                { step: "Step 3", title: "Verification (7–14 days)", desc: "Field or remote check confirms acreage and practice (no-till, organic, agroforestry, cover crop, improved rice)." },
                { step: "Step 4", title: "List & Get Paid", desc: "Credits go live with per-acre price. Companies buy directly; payment reaches your bank with certificate issued to buyer." }
              ].map((item, idx) => (
                <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm relative">
                  <span className="text-emerald-600 font-bold text-sm uppercase tracking-widest mb-2 block">{item.step}</span>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                  {idx < 3 && (
                    <div className="hidden md:block absolute top-1/2 -right-4 translate-x-1/2 -translate-y-1/2 text-gray-300">
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Why Choose Us ─── */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center" aria-labelledby="why-choose">
          <h2 id="why-choose" className="text-3xl md:text-4xl font-bold mb-4">Why Choose BuyCarbonCredit.in?</h2>
          <p className="text-gray-500 max-w-2xl mx-auto mb-16">
            भारत का सबसे भरोसेमंद कार्बन क्रेडिट प्लेटफॉर्म | भारतातील सर्वोत्तम कार्बन क्रेडिट मार्केटप्लेस
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 text-center">
            {[
              {
                icon: "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z",
                title: "Direct Farmer Connection",
                desc: "No middlemen. Farmers get full price. Companies save on premium. 100% transparent direct transaction.",
              },
              {
                icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
                title: "Verified Carbon Credits",
                desc: "Every listing verified for land authenticity, sustainable practice, and credit availability. VCS & Gold Standard aligned.",
              },
              {
                icon: "M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9",
                title: "All India Coverage",
                desc: "Farmers from all 28 states eligible — Maharashtra, UP, Gujarat, Punjab, Telangana, Karnataka, Tamil Nadu & more.",
              },
              {
                icon: "M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z",
                title: "Multilingual Support",
                desc: "Platform support in English, Hindi, Marathi, Gujarati, Telugu, Tamil, Kannada, Punjabi. हिंदी | मराठी | ગુજરાતી",
              },
            ].map((item, i) => (
              <div key={i}>
                <div className="text-emerald-600 mb-4 flex justify-center">
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={item.icon} />
                  </svg>
                </div>
                <h3 className="font-bold mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ─── Eligible States ─── */}
        <section className="bg-emerald-50 py-16" aria-labelledby="eligible-states">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 id="eligible-states" className="text-3xl font-bold mb-4">Carbon Credits Available Across All India</h2>
            <p className="text-gray-500 mb-10 max-w-2xl mx-auto">
              Farmers from every Indian state can register and sell carbon credits. पूरे भारत के किसान पंजीकरण कर सकते हैं। संपूर्ण भारतातील शेतकरी नोंदणी करू शकतात.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {STATES.map(state => (
                <span
                  key={state}
                  className="bg-white text-emerald-700 border border-emerald-200 px-4 py-2 rounded-full text-sm font-medium shadow-sm"
                >
                  {state}
                </span>
              ))}
            </div>
            <p className="mt-8 text-sm text-gray-500">
              Carbon credits for farmers in Maharashtra (Vidarbha, Marathwada, Nashik, Pune, Nagpur) • UP (Lucknow, Varanasi, Agra) • Gujarat (Saurashtra, Kutch, Ahmedabad) • Punjab (Ludhiana, Amritsar) • All India
            </p>
          </div>
        </section>

        {/* ─── Per Acre Earnings ─── */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8" aria-labelledby="per-acre-earnings">
          <h2 id="per-acre-earnings" className="text-3xl md:text-4xl font-bold mb-4">Carbon Credit Per Acre — How Much Can You Earn?</h2>
          <p className="text-gray-600 mb-4">
            1 acre of Indian farmland generates roughly 0.5–3 carbon credits a year depending on practice. No-till: ₹640–₹3,750/acre/year. Organic: ₹1,000–₹8,000. Agroforestry: ₹2,250–₹12,000. Use the <Link href="/carbon-credit-calculator" className="text-emerald-600 font-semibold hover:underline">Carbon Credit Calculator</Link> for a precise quote and see the full table on the <Link href="/carbon-credit-price-per-acre" className="text-emerald-600 font-semibold hover:underline">per-acre pricing page</Link>.
          </p>
          <div className="bg-white border border-gray-100 rounded-3xl shadow-sm p-6 md:p-8">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-bold text-lg mb-2">Quick Per-Acre Table</h3>
                <table className="w-full text-sm border border-gray-100 rounded-xl overflow-hidden">
                  <thead className="bg-emerald-50 text-emerald-700 font-bold">
                    <tr>
                      <th className="px-3 py-2 text-left">Practice</th>
                      <th className="px-3 py-2 text-center">Credits/acre</th>
                      <th className="px-3 py-2 text-center">Income (₹/acre/yr)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { practice: "No-Till", credits: "0.8–1.5", income: "₹640–₹3,750" },
                      { practice: "Organic", credits: "1.0–2.0", income: "₹1,000–₹8,000" },
                      { practice: "Agroforestry", credits: "1.5–3.0", income: "₹2,250–₹12,000" },
                      { practice: "Cover Crop", credits: "0.5–1.0", income: "₹250–₹1,500" },
                    ].map((row, i) => (
                      <tr key={row.practice} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                        <td className="px-3 py-2 font-semibold text-gray-800">{row.practice}</td>
                        <td className="px-3 py-2 text-center text-gray-600">{row.credits}</td>
                        <td className="px-3 py-2 text-center text-emerald-700 font-bold">{row.income}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-6">
                <h3 className="font-bold text-lg mb-3">Income Example</h3>
                <p className="text-gray-700 mb-2">
                  A Maharashtra farmer with 5 acres practising no-till earns <strong>5 × 1.2 credits × ₹1,500 = ₹9,000/year</strong> in carbon credit income (extra to crop revenue).
                </p>
                <p className="text-gray-700 mb-2">
                  Telangana agroforestry plot (3 acres of mango + millets) at 2.2 credits/acre and ₹2,200/credit → <strong>3 × 2.2 × 2,200 = ₹14,520/year</strong>.
                </p>
                <p className="text-gray-600 text-sm">
                  Bundle acres with your FPO to get better monitoring rates and faster payouts.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ─── FAQ Quick Section ─── */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8" aria-labelledby="faq-section">
          <h2 id="faq-section" className="text-3xl font-bold text-center mb-4">Frequently Asked Questions on Carbon Credits</h2>
          <p className="text-center text-gray-500 mb-12">
            कार्बन क्रेडिट के बारे में सामान्य सवाल | कार्बन क्रेडिट बद्दल सामान्य प्रश्न
          </p>
          <div className="space-y-6">
            {[
              {
                q: "How much can a farmer earn from carbon credits in India?",
                a: "An Indian farmer can earn ₹500 to ₹4,000 per metric ton of CO₂ sequestered. With 5 acres of sustainable farmland, a farmer can earn ₹25,000 to ₹50,000+ per year. Earnings depend on land size, farming practices, and carbon credit market prices. (किसान प्रति एकड़ ₹5,000–₹10,000 कमा सकते हैं)"
              },
              {
                q: "क्या 1 एकड़ जमीन पर कार्बन क्रेडिट मिल सकता है? (Can I earn carbon credit with 1 acre?)",
                a: "हाँ! 1 एकड़ या उससे कम जमीन वाले किसान भी BuyCarbonCredit.in पर पंजीकरण कर सकते हैं। न्यूनतम जमीन की आवश्यकता 1 एकड़ है। Yes, farmers with as little as 1 acre can register and earn carbon credits in India."
              },
              {
                q: "कार्बन क्रेडिट म्हणजे काय? शेतकऱ्यांना कसे मिळते? (What is carbon credit in Marathi?)",
                a: "कार्बन क्रेडिट म्हणजे एक टन CO₂ वातावरणातून काढण्याचे प्रमाणपत्र. शेतकरी शाश्वत शेती पद्धती जसे की सेंद्रिय शेती, झाडे लावणे, पाण्याचे व्यवस्थापन याद्वारे कार्बन क्रेडिट मिळवू शकतात आणि BuyCarbonCredit.in वर विकू शकतात."
              },
              {
                q: "Which companies buy carbon credits from Indian farmers?",
                a: "Manufacturing companies, IT firms, logistics companies, airlines, and any organization with a carbon footprint can buy carbon credits to offset emissions. On BuyCarbonCredit.in, companies can purchase verified carbon offsets directly from Indian farmers for ESG, CSR, and BRSR compliance."
              },
              {
                q: "What is the carbon credit price in India in 2026?",
                a: "Carbon credit prices in India range from ₹500 to ₹4,000 per metric ton (1 carbon credit) in the voluntary carbon market. Prices depend on quality, verification standard (VCS, Gold Standard, Verra), and demand. Global carbon prices range from $5 to $50 per ton."
              }
            ].map((faq, i) => (
              <div key={i} className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
                <h3 className="font-bold text-gray-900 mb-3">{faq.q}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ─── Latest Blogs Section ─── */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-labelledby="latest-blogs-title">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 id="latest-blogs-title" className="text-3xl font-bold mb-4">Latest Carbon Credit Blog Guides & News</h2>
              <p className="text-gray-500">Fresh insights from our carbon credit blog on prices, policies, farmer income, carbon farming, and verified market updates in India.</p>
            </div>
            <Link href="/blog" className="hidden md:flex text-emerald-600 font-bold hover:underline items-center gap-1">
              Explore Carbon Credit Blog <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                id: "carbon-credit-price-maharashtra-2026",
                title: "Carbon Credit Price in Maharashtra 2026 | विदर्भातील शेतकरी कमाई",
                cat: "Market",
                date: "April 10, 2026",
                desc: "Latest price update for Maharashtra farmers. Earn ₹5,000 to ₹12,000 per acre in Vidarbha, Nashik, and Pune."
              },
              {
                id: "bamboo-farming-carbon-credits-india",
                title: "Earn Carbon Credits with Bamboo Farming in India | बांस की खेती",
                cat: "Farming",
                date: "April 5, 2026",
                desc: "Bamboo absorbs 4x more CO₂. Learn how Indian farmers earn ₹25,000+ per acre from bamboo carbon credits."
              },
              {
                id: "carbon-credit-benefits-small-farmers-up-bihar",
                title: "Carbon Credit Benefits for Small Farmers in UP & Bihar | यूपी बिहार किसान",
                cat: "Regional",
                date: "April 1, 2026",
                desc: "New opportunities for 1-5 acre farmers in UP and Bihar to earn extra income from paddy and wheat."
              }
            ].map(post => (
              <Link href={`/blog/${post.id}`} key={post.id} className="group flex flex-col bg-white rounded-3xl border border-gray-100 p-6 hover:shadow-xl transition-all h-full">
                <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest mb-3 block">{post.cat} • {post.date}</span>
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-emerald-600 transition-colors mb-4">{post.title}</h3>
                <p className="text-gray-500 text-sm mb-6 line-clamp-3">{post.desc}</p>
                <span className="mt-auto inline-flex items-center text-emerald-600 font-bold text-sm">
                  Read Full Guide <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
                </span>
              </Link>
            ))}
          </div>
          <p className="text-sm text-gray-500 mt-8">
            Explore the full <Link href="/blog" className="text-emerald-600 font-semibold hover:underline">carbon credit blog for India</Link> to learn about carbon credit prices, carbon credit registration, carbon credit farming, carbon credit scams, and how companies can buy verified carbon credits from Indian farmers.
          </p>
        </section>

        {/* ─── Blog CTA ─── */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-50 rounded-3xl p-8 md:p-12 border border-gray-100">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div>
                <h2 className="text-2xl font-bold mb-2">Detailed Carbon Credit Knowledge Hub</h2>
                <p className="text-gray-600">
                  Read expert blogs in English, Hindi, and Marathi. कार्बन क्रेडिट की पूरी जानकारी हिंदी में। कार्बन क्रेडिट मराठी माहिती.
                </p>
              </div>
              <Link href="/blog" id="blog-cta-btn" className="px-8 py-4 bg-emerald-600 text-white rounded-xl font-bold hover:bg-emerald-700 transition-all whitespace-nowrap shadow-md">
                Browse Knowledge Hub →
              </Link>
            </div>
          </div>
        </section>

        {/* ─── CTA Section ─── */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-emerald-600 rounded-3xl p-12 md:p-20 text-center text-white relative overflow-hidden shadow-2xl">
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold mb-4 italic">Start Earning from Carbon Credits Today!</h2>
              <p className="text-lg md:text-xl mb-4 text-emerald-100 max-w-3xl mx-auto">
                Join 1000+ Indian farmers already earning from carbon credits. Companies: Go carbon neutral today.
              </p>
              <p className="text-emerald-200 text-base mb-10">
                किसान: मुफ्त में पंजीकरण करें और ₹50,000 सालाना कमाएं। शेतकरी: मोफत नोंदणी करा, ₹50,000 वार्षिक मिळवा.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/buy-carbon-credit" id="cta-buy-btn" className="px-10 py-4 bg-white text-emerald-600 rounded-xl font-bold text-lg hover:bg-emerald-50 transition-all">
                  Buy Carbon Credits
                </Link>
                <Link href="/contact" id="cta-sell-btn" className="px-10 py-4 bg-emerald-800 text-white rounded-xl font-bold text-lg hover:bg-emerald-900 transition-all border border-emerald-700">
                  Register Farm & Sell Credits
                </Link>
              </div>
            </div>
            <div className="absolute top-0 left-0 w-64 h-64 bg-emerald-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-700 rounded-full mix-blend-multiply filter blur-3xl opacity-20 translate-x-1/4 translate-y-1/4"></div>
          </div>
        </section>

      </div>
    </>
  );
}

