import Link from "next/link";
import EnterpriseRequestForm from "@/components/enterprise/EnterpriseRequestForm";
import EnterpriseRequestsBrowser from "@/components/enterprise/EnterpriseRequestsBrowser";

export const metadata = {
  title: "Find Farmers in India for Tree Plantation, CSR and Carbon Projects",
  description: "Enterprises and NGOs can list farmer land requirements for tree plantation, agroforestry, CSR and carbon project planning in India.",
  keywords: [
    "find farmers for tree plantation India",
    "CSR tree plantation farmers",
    "NGO farmer land plantation",
    "enterprise agroforestry projects India",
    "farmers required for carbon project",
  ],
  alternates: { canonical: "https://buycarboncredit.in/enterprise-ngo-tree-plantation" },
  openGraph: {
    title: "Find Farmers in India for Tree Plantation and CSR Projects",
    description: "List your location requirement and discover farmer land partners for tree plantation, agroforestry and carbon project planning.",
    url: "https://buycarboncredit.in/enterprise-ngo-tree-plantation",
    type: "website",
  },
};

const howItWorks = [
  ["Submit location", "Share the Indian state, district, land requirement, farmer count and timeline for your plantation plan."],
  ["Pay listing fee", "Use Razorpay to pay the one-time ₹199 requirement listing fee for your enterprise or NGO request."],
  ["Requirement appears", "Your active requirement can be shown publicly so farmers and local partners can understand the demand."],
  ["Shortlist farmers", "Use the existing farmer database and local outreach to find farmers in the requested location."],
];

const pageSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Enterprise and NGO farmer discovery for tree plantation",
  serviceType: "Farmer discovery and marketplace listing service",
  provider: { "@id": "https://buycarboncredit.in/#organization" },
  areaServed: { "@type": "Country", name: "India" },
  offers: {
    "@type": "Offer",
    price: "199",
    priceCurrency: "INR",
    description: "One-time enterprise or NGO farmer requirement listing fee",
  },
};

export default function EnterpriseNgoTreePlantationPage() {
  return (
    <main className="bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />

      <section className="bg-emerald-700 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-20">
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-widest text-emerald-100">For enterprises, NGOs and CSR teams</p>
            <h1 className="mb-6 text-4xl font-extrabold leading-tight md:text-6xl">Find farmers in India for tree plantation on farmer lands</h1>
            <p className="mb-8 max-w-3xl text-lg leading-relaxed text-emerald-50 md:text-xl">
              List your farmer requirement by location. We help make the demand visible for farmers and local partners who may have suitable land for tree plantation, agroforestry, CSR activity, or carbon project planning.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link href="#request-form" className="rounded-xl bg-white px-7 py-4 text-center font-bold text-emerald-800 shadow-lg hover:bg-emerald-50">List Requirement</Link>
              <Link href="#company-requirements" className="rounded-xl border border-emerald-200 px-7 py-4 text-center font-bold text-white hover:bg-emerald-800">View Required Farmers</Link>
            </div>
          </div>
          <div className="rounded-3xl border border-emerald-400/40 bg-emerald-800/40 p-6">
            <h2 className="mb-5 text-2xl font-bold">Best for</h2>
            <ul className="space-y-4 text-emerald-50">
              <li className="rounded-2xl bg-white/10 p-4">Companies planning CSR tree plantation in a specific Indian state or district.</li>
              <li className="rounded-2xl bg-white/10 p-4">NGOs looking for farmer land partners for agroforestry and livelihood projects.</li>
              <li className="rounded-2xl bg-white/10 p-4">Carbon project developers building a farmer shortlist before field verification.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8" aria-labelledby="how-it-works-title">
        <div className="mb-8 max-w-3xl">
          <p className="mb-3 text-sm font-bold uppercase tracking-widest text-emerald-700">How it works</p>
          <h2 id="how-it-works-title" className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">Plan plantation demand by location</h2>
          <p className="text-lg leading-relaxed text-gray-600">The page is built for teams that already know where they want to plant trees and need farmers from that location.</p>
        </div>
        <ol className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {howItWorks.map(([title, text], index) => (
            <li key={title} className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
              <p className="mb-3 text-sm font-bold uppercase tracking-widest text-emerald-600">Step {String(index + 1).padStart(2, "0")}</p>
              <h3 className="mb-2 text-xl font-bold text-gray-900">{title}</h3>
              <p className="leading-relaxed text-gray-600">{text}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <EnterpriseRequestForm />
      </section>

      <EnterpriseRequestsBrowser />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8" aria-labelledby="important-note-title">
        <div className="rounded-3xl border border-amber-200 bg-amber-50 p-7 md:p-10">
          <h2 id="important-note-title" className="mb-3 text-2xl font-bold text-gray-900">Important note before project planning</h2>
          <p className="leading-relaxed text-gray-700">
            This service helps list and organize farmer discovery requirements. It does not guarantee farmer availability, land eligibility, tree survival, carbon-credit issuance, government approval, validation, verification, sale, price, or ESG claim acceptance. Each company, NGO, farmer and project developer should complete its own legal, land, methodology and field due diligence.
          </p>
        </div>
      </section>
    </main>
  );
}
