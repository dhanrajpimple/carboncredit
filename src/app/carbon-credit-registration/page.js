import Link from "next/link";

export const metadata = {
  title: "Farmer Carbon Project Listing Registration 2026",
  description: "Register one farmer marketplace listing for a one-time ₹199 fee. Understand what the listing includes and what it does not guarantee.",
  alternates: { canonical: "https://buycarboncredit.in/carbon-credit-registration" },
};

const steps = [
  ["Complete the form", "Provide the farmer name, contact details, location, land area, and any optional estimate you already have."],
  ["Pay ₹199 once", "Razorpay processes the one-time marketplace registration payment for the submitted farm listing."],
  ["Listing review", "The submitted information may be reviewed for completeness before it appears as a marketplace listing."],
  ["Buyer discovery", "Potential buyers may browse the listing. Each party must perform its own checks before entering any transaction."],
];

export default function CarbonCreditRegistrationPage() {
  return (
    <main className="bg-white">
      <section className="bg-emerald-700 text-white py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-emerald-100 font-semibold mb-3">Marketplace listing registration</p>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-5">Register a farmer listing for ₹199</h1>
          <p className="text-lg text-emerald-50 max-w-3xl mb-7">One form, one one-time registration payment. This is a private marketplace listing service, not government carbon-credit registration.</p>
          <Link href="/contact" className="inline-block px-7 py-4 bg-white text-emerald-800 rounded-xl font-bold">Open the registration form</Link>
        </div>
      </section>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">What happens after you register</h2>
          <ol className="grid md:grid-cols-2 gap-5">{steps.map(([title, text]) => <li key={title} className="border border-gray-100 rounded-2xl p-6"><h3 className="font-bold text-gray-900 mb-2">{title}</h3><p className="text-gray-600">{text}</p></li>)}</ol>
        </section>
        <section className="bg-amber-50 border border-amber-200 rounded-2xl p-7 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">What ₹199 does and does not cover</h2>
          <p className="text-gray-700">The fee covers submission and marketplace registration of one farm listing. It does not pay for government registration, project development, measurement, validation, verification, certification, registry issuance, transfer, or retirement of carbon credits. It also does not guarantee eligibility, a buyer, a sale, a price, a payment, or income.</p>
        </section>
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Carbon-market context in 2026</h2>
          <p className="text-gray-700 leading-relaxed">India&apos;s Carbon Credit Trading Scheme has separate compliance and offset mechanisms administered under the official framework. Under the offset mechanism, eligible projects must follow published sectoral methodologies and applicable validation, verification, and registry procedures. A registration on this website is separate from that official process.</p>
          <p className="text-gray-700 leading-relaxed mt-4">As of September 2026, the published Indian offset methodology for agriculture includes methane recovery from livestock and manure management at households and small farms. A general farm listing, organic farming, no-till practice, or land ownership alone should not be treated as proof that Indian Carbon Market credits will be issued.</p>
        </section>
        <section className="text-center bg-gray-900 text-white rounded-3xl p-10"><h2 className="text-3xl font-bold mb-3">Ready to submit your listing?</h2><p className="text-gray-300 mb-6">Review the Terms &amp; Conditions, then use the single farmer registration form.</p><Link href="/contact" className="inline-block px-7 py-4 bg-emerald-500 text-white rounded-xl font-bold">Pay ₹199 &amp; register</Link></section>
      </div>
    </main>
  );
}
