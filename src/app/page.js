import Link from "next/link";

export const metadata = {
  title: "Carbon Credit Marketplace for Farmers and Buyers in India",
  description: "Browse farmer carbon-project listings in India or register one farm listing for ₹199. Independent marketplace with clear verification and buyer due-diligence guidance.",
  keywords: ["carbon credit marketplace India", "carbon credits for farmers", "farmer carbon project listings", "buy carbon credits India", "carbon credit registration India"],
  alternates: { canonical: "https://buycarboncredit.in" },
  openGraph: { title: "Carbon Credit Marketplace for Farmers and Buyers in India", description: "Browse farmer carbon-project listings or register one farm listing for ₹199.", url: "https://buycarboncredit.in", type: "website", locale: "en_IN" },
  twitter: { card: "summary_large_image", title: "Carbon Credit Marketplace for Farmers and Buyers in India", description: "Browse farmer carbon-project listings or register one farm listing for ₹199." },
};

const faq = [
  ["What does BuyCarbonCredit.in do?", "It provides online listings that help farmers and potential buyers discover each other. The platform is not a government body, carbon registry, verifier, certifier, broker, or exchange."],
  ["What does farmer registration cost?", "Farmer marketplace registration costs a one-time ₹199 per submitted farm listing."],
  ["Does registration create carbon credits?", "No. A listing is not a carbon credit, certificate, validation, verification, issuance, transfer, or retirement. Those steps, where relevant, require the applicable programme and qualified independent parties."],
  ["Is income or a sale guaranteed?", "No. Registration only submits information for a marketplace listing. Buyer interest, eligibility, credit volume, price, verification, sale, and income are not guaranteed."],
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.map(([name, text]) => ({ "@type": "Question", name, acceptedAnswer: { "@type": "Answer", text } })),
};

export default function Home() {
  return (
    <main className="bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <section className="bg-gradient-to-br from-emerald-800 to-emerald-600 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-emerald-100 font-semibold mb-3">Independent farmer listing platform</p>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight max-w-4xl">Discover farmer carbon-project listings</h1>
          <p className="mt-6 text-lg md:text-xl text-emerald-50 max-w-3xl">Farmers can submit project information for marketplace visibility. Potential buyers can browse listings and conduct their own due diligence.</p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Link href="/seller-listings" className="px-7 py-4 bg-white text-emerald-800 rounded-xl font-bold text-center">Browse farmer listings</Link>
            <Link href="/contact" className="px-7 py-4 bg-emerald-950 text-white rounded-xl font-bold text-center border border-emerald-300">Register a farm — ₹199</Link>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">How the platform works</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            ["1. Farmer submits a listing", "The farmer completes the single registration form and pays the one-time ₹199 marketplace registration fee."],
            ["2. Information is displayed", "Seller-provided project and farm details may be shown to help potential buyers discover opportunities."],
            ["3. Parties assess the opportunity", "Buyers and sellers are responsible for due diligence, agreements, verification, certification, payment, and legal compliance."],
          ].map(([title, text]) => <article key={title} className="border border-gray-100 rounded-2xl p-6"><h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3><p className="text-gray-600 leading-relaxed">{text}</p></article>)}
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-5">Important distinction</h2>
          <p className="text-gray-700 leading-relaxed">A farm listing can describe a proposed or existing climate activity, but it is not itself an issued carbon credit. One carbon credit generally represents one metric tonne of carbon-dioxide equivalent reduced, avoided, or removed under an applicable programme. Actual eligibility and issuance depend on programme rules, an approved methodology, evidence, validation or verification, and registry procedures.</p>
          <p className="text-gray-700 leading-relaxed mt-4">BuyCarbonCredit.in is privately operated and is not affiliated with or approved by the Government of India, the Bureau of Energy Efficiency, Grid India, Verra, Gold Standard, or any certification body.</p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Frequently asked questions</h2>
        <div className="space-y-5">{faq.map(([question, answer]) => <article key={question} className="border-b border-gray-200 pb-5"><h3 className="font-bold text-gray-900 mb-2">{question}</h3><p className="text-gray-600">{answer}</p></article>)}</div>
      </section>

      <section className="bg-emerald-50 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Carbon credit guides for farmers and buyers</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              ["Carbon credit pricing in India", "/carbon-credit-price", "Learn why prices vary by methodology, status, quality, costs and demand."],
              ["Carbon credits per acre", "/carbon-credit-price-per-acre", "Understand why acreage alone cannot determine credits or farmer income."],
              ["How farmers can explore carbon credits", "/how-to-sell-carbon-credits-india", "Review eligibility, baseline, monitoring, verification and contract steps."],
              ["India carbon credit guides", "/blog", "Read educational articles about CCTS, carbon projects, buyer checks and farming."],
            ].map(([title, href, description]) => <article key={href} className="bg-white rounded-2xl p-6 border border-emerald-100"><h3 className="font-bold text-gray-900 mb-2"><Link href={href} className="hover:text-emerald-700">{title}</Link></h3><p className="text-sm text-gray-600">{description}</p></article>)}
          </div>
        </div>
      </section>
    </main>
  );
}
