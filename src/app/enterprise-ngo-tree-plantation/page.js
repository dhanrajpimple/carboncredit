import Link from "next/link";
import EnterpriseRequestForm from "@/components/enterprise/EnterpriseRequestForm";
import EnterpriseRequestsBrowser from "@/components/enterprise/EnterpriseRequestsBrowser";
import { getEnterpriseRequestSnapshot } from "@/lib/enterpriseRequests";

export const revalidate = 300;

const pageUrl = "https://buycarboncredit.in/enterprise-ngo-tree-plantation";
const pageTitle = "Find Farmers for CSR & NGO Tree Plantation in India";
const pageDescription = "Find farmer land for CSR tree plantation and NGO agroforestry projects in India. Browse farmers by location or list your land requirement for a one-time ₹199.";

export const metadata = {
  title: { absolute: `${pageTitle} | Buy Carbon Credit` },
  description: pageDescription,
  keywords: [
    "find farmers for tree plantation India",
    "CSR tree plantation farmers",
    "NGO farmer land plantation",
    "enterprise agroforestry projects India",
    "farmers required for carbon project",
  ],
  alternates: { canonical: "https://buycarboncredit.in/enterprise-ngo-tree-plantation" },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: pageUrl,
    siteName: "Buy Carbon Credit",
    locale: "en_IN",
    type: "website",
  },
  twitter: { card: "summary", title: pageTitle, description: pageDescription, images: ["/favicon.png"] },
};

const questions = [
  ["How can a company find farmers for CSR tree plantation in India?", "Start with the state and district where you want to plant, the acreage needed and your intended timeline. Browse the farmer listings, then post a requirement so farmers and local partners can see your project needs. Confirm land suitability and farmer interest directly before making a commitment."],
  ["Can NGOs request farmer land for agroforestry projects?", "Yes. NGOs can publish a requirement describing their target location, land area, approximate farmer count and project goal. Include whether the plan involves agroforestry, tree plantation or farmer livelihoods so potential partners can assess the opportunity."],
  ["Can we request farmers in a specific state or district?", "Yes. Enter the Indian state and, where known, the district in the request form. You can also filter existing company and NGO requirements by state and district. A location request does not mean farmers are currently available there."],
  ["What does the ₹199 listing fee cover?", "The one-time ₹199 fee covers publishing your company or NGO farmer requirement on this website after successful payment and saving. It does not cover land, saplings, planting labour, farmer payments, maintenance or carbon certification."],
  ["What should we discuss with a farmer before planting?", "Discuss land ownership or permission, the area available, current crops, water access, proposed tree species, planting dates and maintenance responsibilities. Agree on costs, access, monitoring and any benefit-sharing terms before starting work."],
  ["Does a listing guarantee farmers, CSR eligibility or carbon credits?", "No. This is a farmer discovery and requirement listing service. Farmer availability, suitability, project approvals and carbon-credit issuance are not guaranteed. Your organization is responsible for assessing the proposed project and completing the relevant checks."],
];

const howItWorks = [
  ["Submit location", "Share the Indian state, district, land requirement, farmer count and timeline for your plantation plan."],
  ["Pay listing fee", "Use Razorpay to pay the one-time ₹199 requirement listing fee for your enterprise or NGO request."],
  ["Requirement appears", "Your active requirement can be shown publicly so farmers and local partners can understand the demand."],
  ["Connect with interested farmers", "Interested farmers from your requested location can contact you directly to discuss your plantation project."],
];

const pageSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${pageUrl}#service`,
  url: pageUrl,
  name: "Enterprise and NGO farmer discovery for tree plantation",
  serviceType: "Farmer discovery and marketplace listing service",
  description: pageDescription,
  audience: { "@type": "Audience", audienceType: "Enterprises, NGOs and CSR teams" },
  provider: { "@id": "https://buycarboncredit.in/#organization" },
  areaServed: { "@type": "Country", name: "India" },
  offers: {
    "@type": "Offer",
    price: "199",
    priceCurrency: "INR",
    url: `${pageUrl}#request-form`,
    description: "One-time enterprise or NGO farmer requirement listing fee",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://buycarboncredit.in/" },
    { "@type": "ListItem", position: 2, name: "CSR & NGO Tree Plantation", item: pageUrl },
  ],
};

export default async function EnterpriseNgoTreePlantationPage() {
  const snapshot = await getEnterpriseRequestSnapshot();
  return (
    <main className="bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <nav aria-label="Breadcrumb" className="mx-auto max-w-7xl px-4 py-4 text-sm text-gray-600 sm:px-6 lg:px-8">
        <ol className="flex flex-wrap gap-2">
          <li><Link href="/" className="underline hover:text-emerald-700">Home</Link></li>
          <li aria-hidden="true">/</li>
          <li aria-current="page">CSR &amp; NGO Tree Plantation</li>
        </ol>
      </nav>

      <section className="bg-emerald-700 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-20">
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-widest text-emerald-100">For enterprises, NGOs and CSR teams</p>
            <h1 className="mb-6 text-4xl font-extrabold leading-tight md:text-6xl">Find farmers for CSR and NGO tree plantation in India</h1>
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
          <p className="text-lg leading-relaxed text-gray-600">Planning tree plantation on farmer land? Share the location, acreage and timeline so farmers can understand your requirement before discussing a partnership.</p>
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

      <EnterpriseRequestsBrowser initialRequests={snapshot.data} initialTotal={snapshot.total} initialUnavailable={snapshot.unavailable} />

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8" aria-labelledby="planning-title">
        <h2 id="planning-title" className="mb-8 text-3xl font-bold text-gray-900">Plan a tree plantation project on farmer land</h2>
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <h3 className="mb-3 text-xl font-bold">For corporate CSR teams</h3>
            <p className="leading-relaxed text-gray-600">Describe your target district, intended acreage and planting season. Explain who will arrange saplings, planting, maintenance and monitoring. A clear requirement helps interested farmers decide whether your proposed project fits their land and existing farm activities.</p>
          </div>
          <div>
            <h3 className="mb-3 text-xl font-bold">For NGOs and agroforestry programmes</h3>
            <p className="leading-relaxed text-gray-600">Describe the farmer participation you need and the support your organization plans to provide. Include proposed activities such as boundary planting or trees alongside crops, and discuss tree selection, water access and long-term care with each farmer.</p>
          </div>
          <div>
            <h3 className="mb-3 text-xl font-bold">Search by state and district</h3>
            <p className="leading-relaxed text-gray-600">Use a specific location when you have one, for example Satara district in Maharashtra, instead of a broad nationwide request. State any travel or site-access constraints and whether you need one larger site or several smaller farms. Availability depends on the listings and farmer interest in that area.</p>
            <Link href="/seller-listings" className="mt-4 inline-block font-semibold text-emerald-700 underline">Browse farmer listings by location</Link>
          </div>
          <div>
            <h3 className="mb-3 text-xl font-bold">Prepare for a farmer discussion</h3>
            <ul className="list-disc space-y-2 pl-5 text-gray-600">
              <li>Target acreage, farmer count and planting dates</li>
              <li>Land permission, current crops and water access</li>
              <li>Responsibility for planting, costs and ongoing care</li>
              <li>Site visits, monitoring and proposed farmer benefits</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-14" aria-labelledby="plantation-faq-title">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 id="plantation-faq-title" className="mb-8 text-3xl font-bold text-gray-900">Questions about finding farmers for plantation</h2>
          <div className="divide-y divide-gray-200">
            {questions.map(([question, answer]) => (
              <article key={question} className="py-5">
                <h3 className="mb-3 text-lg font-bold text-gray-900">{question}</h3>
                <p className="leading-relaxed text-gray-600">{answer}</p>
              </article>
            ))}
          </div>
          <p className="mt-8 text-gray-700">Explore the <Link href="/buy-carbon-credit" className="font-semibold text-emerald-700 underline">buyer due diligence guide</Link>, learn <Link href="/about-us" className="font-semibold text-emerald-700 underline">about our listing platform</Link>, or review the <Link href="/terms" className="font-semibold text-emerald-700 underline">listing terms and contact information</Link>.</p>
        </div>
      </section>

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
