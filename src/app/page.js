import Link from "next/link";

export const metadata = {
  title: "Buy & Sell Carbon Credits from Farmers in India | कार्बन क्रेडिट मार्केटप्लेस | ₹50,000+/year",
  description: "India's #1 carbon credit marketplace. Farmers earn ₹50,000+/year by selling verified carbon credits. Companies buy carbon offsets for ESG, CSR & net-zero goals. Register free. कार्बन क्रेडिट बेचें खरीदें। Maharashtra, UP, Gujarat, Punjab & all India.",
  keywords: [
    "buy carbon credit India",
    "sell carbon credit India",
    "carbon credit marketplace India",
    "carbon credit farmers India",
    "carbon credit price India 2026",
    "carbon credit income farmers",
    "carbon credit registration India",
    "कार्बन क्रेडिट बेचें",
    "कार्बन क्रेडिट खरीदें",
    "शेतकरी कार्बन क्रेडिट",
    "carbon offset companies India",
    "verified carbon credits",
    "net zero India",
    "ESG carbon credits",
    "sustainable farming income",
    "carbon trading India",
    "regenerative agriculture",
    "soil carbon sequestration",
    "1 carbon credit price rupees",
    "carbon credit per acre India"
  ],
  alternates: {
    canonical: "https://buycarboncredit.in",
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

const KEYWORD_TAGS = [
  // English
  "carbon credit", "sell carbon credit", "buy carbon credits India",
  "carbon credit price India", "carbon credit marketplace", "carbon offset India",
  "voluntary carbon market", "ESG carbon credits", "net zero India",
  "soil carbon sequestration", "regenerative agriculture", "carbon farming",
  "verified carbon credits", "carbon credit registration", "carbon credit income",
  "sustainable farming", "organic farming carbon", "agricultural carbon credits",
  "carbon credit per acre", "paddy carbon credit", "wheat carbon credit",
  // Hindi
  "कार्बन क्रेडिट", "कार्बन क्रेडिट क्या है", "कार्बन क्रेडिट कैसे बेचें",
  "किसान कार्बन क्रेडिट", "कार्बन क्रेडिट की कीमत", "टिकाऊ खेती",
  "जैविक खेती कार्बन", "carbon credit ki puri jankari", "कार्बन ऑफसेट",
  // Marathi
  "कार्बन क्रेडिट मराठी", "शेतकरी कार्बन क्रेडिट", "शाश्वत शेती",
  "कार्बन क्रेडिट नोंदणी", "महाराष्ट्र कार्बन क्रेडिट", "मृदा कार्बन",
  // Regional
  "ગુજરાત કાર્બન ક్రెడిట", "ਪੰਜਾਬ ਕਾਰਬਨ", "కార్బన్ క్రెడిట్ తెలంగాణ",
  "ಕಾರ್ಬನ್ ಕ್ರೆಡಿಟ್ ಕರ್ನಾಟಕ", "கார்பன் கிரெடிட் தமிழ்நாடு",
  // Long-tail
  "how to sell carbon credits in India", "carbon credit per acre income India",
  "how much does 1 carbon credit cost in India", "carbon credit for small farmers",
  "can I earn from carbon credit with 1 acre", "carbon credit verification India",
  "CCTS India carbon credit scheme", "VCS Gold Standard carbon India",
  "buy carbon offsets from Indian farmers", "corporate carbon neutral India"
];

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homePageSchema) }}
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
                Buy and Sell <span className="text-emerald-600">Carbon Credits</span> Directly from Indian Farmers
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
            <h2 className="text-2xl font-bold mb-3">For Farmers | किसानों के लिए | शेतकऱ्यांसाठी</h2>
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
            <h2 className="text-2xl font-bold mb-3">For Companies | कंपनियों के लिए | कंपन्यांसाठी</h2>
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
            <h2 id="how-it-works" className="text-3xl md:text-4xl font-bold text-center mb-4">How Carbon Credits Work in India</h2>
            <p className="text-center text-gray-500 max-w-2xl mx-auto mb-16">
              भारत में कार्बन क्रेडिट कैसे काम करता है? | भारतात कार्बन क्रेडिट कसे काम करते?
            </p>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { step: "Step 1", title: "Farm Registration", desc: "Farmers register their farm details, land area, location, and sustainable practices. Free registration. मुफ्त पंजीकरण।" },
                { step: "Step 2", title: "Verification", desc: "Carbon credits are generated through verified sustainable farming — no-till, organic, agroforestry. VCS/Gold Standard verified." },
                { step: "Step 3", title: "List & Market", desc: "Verified carbon credits are listed on the marketplace. Companies browse by state, crop type, and credit volume." },
                { step: "Step 4", title: "Direct Deal & Pay", desc: "Buyers and sellers connect directly. No middlemen. Farmers get paid directly. Carbon offset certificates issued." }
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

        {/* ─── FAQ Quick Section ─── */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8" aria-labelledby="faq-section">
          <h2 id="faq-section" className="text-3xl font-bold text-center mb-4">Frequently Asked Questions</h2>
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

        {/* ─── Blog CTA ─── */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-50 rounded-3xl p-8 md:p-12 border border-gray-100">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div>
                <h2 className="text-2xl font-bold mb-2">Learn More: Carbon Credit Guides & News</h2>
                <p className="text-gray-600">
                  Read expert blogs in English, Hindi, and Marathi. कार्बन क्रेडिट की पूरी जानकारी हिंदी में। कार्बन क्रेडिट मराठी माहिती.
                </p>
              </div>
              <Link href="/blog" id="blog-cta-btn" className="px-8 py-4 bg-emerald-600 text-white rounded-xl font-bold hover:bg-emerald-700 transition-all whitespace-nowrap shadow-md">
                Read All Blogs →
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

        {/* ─── Invisible SEO Keyword Block (screen-reader accessible, search bot visible) ─── */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 border-t border-gray-100" aria-label="Popular Search Topics">
          <h2 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-6">Popular Search Topics on Carbon Credits</h2>
          <div className="flex flex-wrap gap-2">
            {KEYWORD_TAGS.map(tag => (
              <span key={tag} className="text-xs text-gray-400 bg-gray-50 border border-gray-100 px-3 py-1 rounded-full">
                {tag}
              </span>
            ))}
          </div>
        </section>

      </div>
    </>
  );
}
