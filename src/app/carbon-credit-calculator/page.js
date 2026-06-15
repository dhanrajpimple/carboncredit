"use client";

import { useState } from "react";
import Link from "next/link";

// SEO metadata is in the layout/server component below
const CROP_RATES = {
  "Paddy (Rice)": { min: 1.5, max: 3.0, label: "Paddy (Rice) — Alternate Wetting & Drying" },
  "Wheat": { min: 1.0, max: 2.0, label: "Wheat — No-till / Conservation Tillage" },
  "Sugarcane": { min: 1.2, max: 2.5, label: "Sugarcane — Residue Management" },
  "Cotton": { min: 0.8, max: 1.8, label: "Cotton — Cover Crop & Conservation" },
  "Soybean": { min: 1.0, max: 2.2, label: "Soybean — No-till & Cover Cropping" },
  "Maize": { min: 1.2, max: 2.4, label: "Maize — Regenerative Practices" },
  "Agroforestry": { min: 2.0, max: 5.0, label: "Agroforestry — Trees + Crops" },
  "Organic Vegetables": { min: 0.8, max: 1.8, label: "Organic Vegetables — Cover Crops" },
  "Groundnut": { min: 0.9, max: 1.8, label: "Groundnut — Sustainable Practices" },
  "Chickpea": { min: 0.8, max: 1.6, label: "Chickpea — Legume Nitrogen Fixing" },
};

const PRACTICE_MULTIPLIER = {
  "No-till Farming": 1.3,
  "Organic Farming": 1.4,
  "Agroforestry": 1.6,
  "Cover Cropping": 1.2,
  "Compost & Biochar": 1.3,
  "Crop Rotation": 1.15,
  "Water Management (AWD)": 1.25,
  "Mixed All Practices": 1.8,
};

export default function CarbonCreditCalculator() {
  const [landAcres, setLandAcres] = useState("");
  const [cropType, setCropType] = useState("Paddy (Rice)");
  const [practice, setPractice] = useState("No-till Farming");
  const [pricePerTon, setPricePerTon] = useState(1500);
  const [result, setResult] = useState(null);

  const calculate = () => {
    const acres = parseFloat(landAcres);
    if (!acres || acres <= 0) return;
    const crop = CROP_RATES[cropType];
    const multiplier = PRACTICE_MULTIPLIER[practice];
    const minTons = acres * crop.min * multiplier;
    const maxTons = acres * crop.max * multiplier;
    const minEarnings = minTons * pricePerTon;
    const maxEarnings = maxTons * pricePerTon;
    setResult({ minTons, maxTons, minEarnings, maxEarnings, acres });
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-emerald-700 via-emerald-600 to-teal-500 py-20 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-emerald-200 font-bold text-sm uppercase tracking-widest mb-4">Free Tool — India&apos;s Best — Last Updated: June 2026</p>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
            Carbon Credit Calculator for Indian Farmers
          </h1>
          <p className="text-emerald-100 text-lg max-w-3xl mx-auto mb-2">
            Estimate how many carbon credits you can generate and earn per year from your farm. Free income calculator for farmers across India.
          </p>
          <p className="text-emerald-200 text-base">
            कार्बन क्रेडिट कैलकुलेटर। शेतकऱ्यांसाठी कार्बन क्रेडिट आय कॅल्क्युलेटर।
          </p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 py-16">
        {/* Calculator Card */}
        <div className="bg-white rounded-3xl border border-gray-100 shadow-2xl overflow-hidden mb-16">
          <div className="bg-emerald-50 p-8 border-b border-emerald-100">
            <h2 className="text-2xl font-bold text-gray-900">Calculate Your Carbon Credit Income</h2>
            <p className="text-gray-500 mt-1">कार्बन क्रेडिट आय का अनुमान लगाएं | कार्बन क्रेडिट आय मोजा</p>
          </div>
          <div className="p-8 grid md:grid-cols-2 gap-8">
            {/* Inputs */}
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  🌾 Land Area (in Acres) — जमीन कितनी एकड़ / एकर किती?
                </label>
                <input
                  type="number"
                  min="0.5"
                  step="0.5"
                  value={landAcres}
                  onChange={(e) => setLandAcres(e.target.value)}
                  placeholder="e.g. 5"
                  className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-lg font-semibold focus:outline-none focus:border-emerald-500 transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  🌱 Crop Type — फसल / पीक
                </label>
                <select
                  value={cropType}
                  onChange={(e) => setCropType(e.target.value)}
                  className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 font-medium focus:outline-none focus:border-emerald-500 transition-all"
                >
                  {Object.keys(CROP_RATES).map((c) => (
                    <option key={c} value={c}>{CROP_RATES[c].label}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  ♻️ Primary Sustainable Practice — टिकाऊ खेती पद्धत
                </label>
                <select
                  value={practice}
                  onChange={(e) => setPractice(e.target.value)}
                  className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 font-medium focus:outline-none focus:border-emerald-500 transition-all"
                >
                  {Object.keys(PRACTICE_MULTIPLIER).map((p) => (
                    <option key={p} value={p}>{p}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  💰 Carbon Credit Price (₹ per Ton) — बाजार भाव
                </label>
                <input
                  type="range"
                  min="500"
                  max="4000"
                  step="100"
                  value={pricePerTon}
                  onChange={(e) => setPricePerTon(Number(e.target.value))}
                  className="w-full accent-emerald-600"
                />
                <div className="flex justify-between text-xs text-gray-400 mt-1">
                  <span>₹500 (Low)</span>
                  <span className="text-emerald-700 font-bold text-base">₹{pricePerTon.toLocaleString("en-IN")}/ton</span>
                  <span>₹4,000 (High)</span>
                </div>
              </div>
              <button
                id="calculate-btn"
                onClick={calculate}
                className="w-full bg-emerald-600 text-white py-4 rounded-xl font-extrabold text-lg hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-200 active:scale-95"
              >
                Calculate My Carbon Earnings →
              </button>
            </div>

            {/* Results */}
            <div>
              {result ? (
                <div className="space-y-4 h-full">
                  <div className="bg-emerald-50 rounded-2xl p-6 border border-emerald-100">
                    <p className="text-sm text-emerald-600 font-bold uppercase tracking-widest mb-1">Annual Carbon Credits</p>
                    <p className="text-4xl font-extrabold text-gray-900">
                      {result.minTons.toFixed(1)} – {result.maxTons.toFixed(1)}
                      <span className="text-xl font-semibold text-gray-500 ml-2">tons CO₂/yr</span>
                    </p>
                    <p className="text-sm text-gray-500 mt-1">from {result.acres} acres of farmland</p>
                  </div>
                  <div className="bg-amber-50 rounded-2xl p-6 border border-amber-100">
                    <p className="text-sm text-amber-600 font-bold uppercase tracking-widest mb-1">Annual Expected Income</p>
                    <p className="text-4xl font-extrabold text-gray-900">
                      ₹{Math.round(result.minEarnings).toLocaleString("en-IN")} –
                    </p>
                    <p className="text-4xl font-extrabold text-emerald-700">
                      ₹{Math.round(result.maxEarnings).toLocaleString("en-IN")}
                    </p>
                    <p className="text-sm text-gray-500 mt-2">at ₹{pricePerTon.toLocaleString("en-IN")}/ton market rate</p>
                  </div>
                  <div className="bg-blue-50 rounded-2xl p-4 border border-blue-100">
                    <p className="text-xs text-blue-600 font-semibold mb-2">💡 Pro Tip</p>
                    <p className="text-xs text-gray-600">Register your farm free on BuyCarbonCredit.in to begin verification and start earning these credits directly from companies.</p>
                  </div>
                  <Link href="/contact" id="calc-register-btn" className="block w-full text-center bg-emerald-600 text-white py-3 rounded-xl font-bold hover:bg-emerald-700 transition-all">
                    Register Farm & Start Earning →
                  </Link>
                </div>
              ) : (
                <div className="h-full flex flex-col items-center justify-center text-center text-gray-400 bg-gray-50 rounded-2xl p-8 border border-dashed border-gray-200">
                  <svg className="w-16 h-16 mb-4 text-gray-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 11h.01M12 11h.01M15 11h.01M4 19h16a2 2 0 002-2V7a2 2 0 00-2-2H4a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <p className="font-semibold text-gray-500 mb-2">Enter your farm details</p>
                  <p className="text-sm">Fill the form and click Calculate to see your estimated carbon credit income</p>
                  <p className="text-xs mt-2 text-gray-400">किसान जानकारी भरें और अपनी कमाई का अनुमान लगाएं</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* How Calculation Works */}
        <section className="mb-16" aria-labelledby="how-calc-works">
          <h2 id="how-calc-works" className="text-3xl font-bold text-center mb-4">How Is Carbon Credit Income Calculated?</h2>
          <p className="text-center text-gray-500 mb-10 max-w-2xl mx-auto">
            कार्बन क्रेडिट आय की गणना कैसे होती है? | कार्बन क्रेडिट उत्पन्नाची गणना कशी केली जाते?
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: "🌾",
                title: "1. Carbon Sequestration Rate",
                desc: "Different crops and farming practices sequester different amounts of CO₂. Paddy using alternate wetting-drying: 1.5–3 tons/acre/year. Agroforestry: up to 5 tons/acre/year."
              },
              {
                icon: "✅",
                title: "2. Practice Multiplier",
                desc: "Adopting multiple sustainable practices like no-till, organic, and cover cropping multiplies your carbon capture rate. Farmers using all practices can earn up to 80% more."
              },
              {
                icon: "💰",
                title: "3. Market Price × Credits",
                desc: "In India's voluntary carbon market, 1 carbon credit = ₹500–₹4,000. Your income = (Acres × Sequestration Rate × Practice Multiplier) × Price per Ton."
              }
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm text-center">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Crop-wise income table */}
        <section className="mb-16" aria-labelledby="crop-income-table">
          <h2 id="crop-income-table" className="text-2xl font-bold mb-2">Carbon Credit Income by Crop — Per Acre Estimate (2026)</h2>
          <p className="text-gray-500 mb-6 text-sm">फसलवार कार्बन क्रेडिट आय | पिकनिहाय कार्बन क्रेडिट उत्पन्न अंदाज</p>
          <div className="overflow-x-auto rounded-2xl border border-gray-100 shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-emerald-600 text-white">
                  <th className="px-6 py-4 text-left font-bold">Crop Type</th>
                  <th className="px-6 py-4 text-center font-bold">CO₂ Tons/Acre/Year</th>
                  <th className="px-6 py-4 text-center font-bold">Income @ ₹1,000/ton</th>
                  <th className="px-6 py-4 text-center font-bold">Income @ ₹2,500/ton</th>
                  <th className="px-6 py-4 text-center font-bold">Income @ ₹4,000/ton</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { crop: "Paddy (Rice)", min: 1.5, max: 3.0 },
                  { crop: "Wheat", min: 1.0, max: 2.0 },
                  { crop: "Agroforestry", min: 2.0, max: 5.0 },
                  { crop: "Sugarcane", min: 1.2, max: 2.5 },
                  { crop: "Soybean", min: 1.0, max: 2.2 },
                  { crop: "Cotton", min: 0.8, max: 1.8 },
                  { crop: "Maize", min: 1.2, max: 2.4 },
                  { crop: "Groundnut", min: 0.9, max: 1.8 },
                ].map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-6 py-4 font-semibold text-gray-900">{row.crop}</td>
                    <td className="px-6 py-4 text-center text-gray-600">{row.min}–{row.max}</td>
                    <td className="px-6 py-4 text-center text-gray-700">₹{(row.min * 1000).toLocaleString("en-IN")}–₹{(row.max * 1000).toLocaleString("en-IN")}</td>
                    <td className="px-6 py-4 text-center text-emerald-700 font-semibold">₹{(row.min * 2500).toLocaleString("en-IN")}–₹{(row.max * 2500).toLocaleString("en-IN")}</td>
                    <td className="px-6 py-4 text-center text-emerald-800 font-bold">₹{(row.min * 4000).toLocaleString("en-IN")}–₹{(row.max * 4000).toLocaleString("en-IN")}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 mt-3">* Estimates are per acre per year under standard sustainable practices. Actual earnings depend on verification, market conditions.</p>
        </section>

        {/* FAQs */}
        <section aria-labelledby="calc-faq">
          <h2 id="calc-faq" className="text-2xl font-bold mb-6">Carbon Credit Calculator — FAQs</h2>
          <div className="space-y-4">
            {[
              { q: "Is this carbon credit calculator accurate?", a: "This calculator gives an estimate based on average sequestration rates for Indian farming conditions. Actual verified credits depend on soil testing, satellite verification, and the certification standard used (VCS, Gold Standard, etc.)." },
              { q: "What is the minimum land to earn carbon credits in India?", a: "You need a minimum of 1 acre of agricultural land to register and generate carbon credits in India." },
              { q: "How often do farmers get paid for carbon credits?", a: "Typically, carbon credit payments happen annually or on a project cycle of 3–5 years. Farmers receive lump sum payments after verification of carbon sequestration." },
              { q: "क्या मैं 2 एकड़ जमीन पर कार्बन क्रेडिट से कमाई कर सकता हूँ? (Can I earn with 2 acres?)", a: "हाँ, 2 एकड़ की जमीन से भी आप सालाना ₹6,000 से ₹40,000+ तक कमा सकते हैं, फसल और खेती की पद्धति के अनुसार। Yes, 2 acres can generate ₹6,000–₹40,000+ annually depending on crop and practices." },
              { q: "शेतकरी कार्बन क्रेडिट कसे विकू शकतात? (How can farmers sell carbon credits?)", a: "BuyCarbonCredit.in वर मोफत नोंदणी करा, शेतजमिनीची माहिती द्या, पडताळणी करा आणि मार्केटप्लेसवर विक्री करा. Register free on BuyCarbonCredit.in, submit farm details, get verified, and sell on the marketplace." },
            ].map((faq, i) => (
              <div key={i} className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
                <h3 className="font-bold text-gray-900 mb-2">{faq.q}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div className="mt-16 bg-emerald-600 rounded-3xl p-10 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Earning Carbon Credits?</h2>
          <p className="text-emerald-100 mb-8">Register your farm for free and connect directly with companies buying carbon credits across India.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" id="calc-cta-register" className="px-10 py-4 bg-white text-emerald-600 rounded-xl font-bold text-lg hover:bg-emerald-50 transition-all">
              Register My Farm Free
            </Link>
            <Link href="/buy-carbon-credit" id="calc-cta-buy" className="px-10 py-4 bg-emerald-800 text-white rounded-xl font-bold text-lg hover:bg-emerald-900 transition-all border border-emerald-700">
              Browse Carbon Credits
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
