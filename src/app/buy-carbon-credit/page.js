import Link from "next/link";

const WHY_BUY_FROM_FARMERS = [
  {
    title: "Direct sourcing with less markup",
    description:
      "Buying through brokers can feel like buying a sealed box. Direct farmer sourcing gives your team clearer pricing and more control over the story behind each credit.",
  },
  {
    title: "A stronger ESG narrative",
    description:
      "These listings connect climate action with rural livelihoods, which makes them easier to explain in ESG reports, board updates, and stakeholder conversations.",
  },
  {
    title: "Local, transparent impact",
    description:
      "Instead of vague offset claims, buyers can see where the credits come from, how much land is involved, and what type of farming practice created them.",
  },
];

const HOW_IT_WORKS = [
  {
    step: "01",
    title: "Open the seller list",
    description:
      "Start on the dedicated seller-list page where buyers can immediately see sellers, filters, and location information.",
  },
  {
    step: "02",
    title: "Open a separate seller page",
    description:
      "Each seller has a separate page so the buyer can quickly understand where the seller is located and how much land and credit volume are involved.",
  },
  {
    step: "03",
    title: "Compare the right supply",
    description:
      "Use state, district, acreage, and estimated credits to compare different sellers before you make contact.",
  },
  {
    step: "04",
    title: "Contact with more confidence",
    description:
      "Once the location and supply make sense, the buyer can contact the seller directly from the dedicated seller page.",
  },
];

const TRUST_SIGNALS = [
  "Separate seller pages make location and ownership easier to understand",
  "Buyers can compare district, state, acreage, and estimated credits faster",
  "The seller list page removes extra friction when the goal is simply to find sellers",
  "The buyer guide page stays available for teams that want more context before buying",
];

const BUYER_USE_CASES = [
  {
    title: "Manufacturing and logistics teams",
    description:
      "Useful when you still carry residual emissions after operational efficiency work and need practical India-based offsets.",
  },
  {
    title: "ESG and sustainability leads",
    description:
      "Helpful for annual reporting, climate target storytelling, and showing that offset spending creates real on-ground value.",
  },
  {
    title: "Climate-focused organizations",
    description:
      "Suitable for pilot procurement, blended-finance programs, or partnerships built around regenerative agriculture and farmer income.",
  },
];

const FAQS = [
  {
    question: "Where can buyers see sellers quickly?",
    answer:
      "Use the dedicated seller-list page. It is made specifically to show sellers, filters, and separate seller pages without the extra explanation content.",
  },
  {
    question: "Why create separate seller pages?",
    answer:
      "Because buyers often want seller location first. A separate seller page makes it much easier to understand district, state, land size, and estimated credits before contacting the seller.",
  },
  {
    question: "What is this page for now?",
    answer:
      "This page acts as the buyer guide. It explains how the marketplace works, why farmer-linked credits matter, and where buyers should go next.",
  },
  {
    question: "Where should I go if I want to contact sellers directly?",
    answer:
      "Open the seller-list page first, choose a seller, and then use the contact actions on that seller's separate page.",
  },
];

export default function BuyCarbonCreditPage() {
  return (
    <div className="bg-white min-h-screen">
      <section className="bg-gradient-to-br from-emerald-700 via-emerald-600 to-teal-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="max-w-4xl">
            <p className="text-emerald-100 font-bold text-sm uppercase tracking-widest mb-4">
              Buyer guide
            </p>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
              Buy Carbon Credits in India Directly From Farmers
            </h1>
            <p className="text-lg md:text-xl text-emerald-50 leading-relaxed mb-4">
              If you want to buy carbon credits in India, think of each credit like a cleanup unit for emissions your business cannot remove overnight. This page explains how the marketplace works and where buyers should go to find sellers faster.
            </p>
            <p className="text-base text-emerald-100 leading-relaxed mb-8 max-w-3xl">
              For the fastest route, open the dedicated seller-list page. It shows sellers directly, and each seller opens on a separate page with clearer location details.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/seller-listings"
                className="px-7 py-4 bg-white text-emerald-700 rounded-xl font-bold hover:bg-emerald-50 transition-all text-center shadow-lg"
              >
                Open Seller List
              </Link>
              <Link
                href="/contact"
                className="px-7 py-4 bg-emerald-900 text-white rounded-xl font-bold hover:bg-emerald-950 transition-all text-center border border-emerald-300/30"
              >
                Talk to Our Team
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              label: "Fast buyer path",
              value: "Seller list first",
              description: "Buyers can now open a separate page that only shows sellers and filters.",
            },
            {
              label: "Clearer understanding",
              value: "Separate seller pages",
              description: "Each seller has an individual page so location and supply details are easier to review.",
            },
            {
              label: "Less searching",
              value: "Faster decisions",
              description: "It now takes less time to find where the seller is and how much supply they offer.",
            },
          ].map((item) => (
            <div key={item.label} className="rounded-3xl border border-emerald-100 bg-emerald-50 p-6">
              <p className="text-sm font-semibold text-emerald-700 mb-2">{item.label}</p>
              <p className="text-2xl font-bold text-gray-900 mb-3">{item.value}</p>
              <p className="text-gray-600 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8" aria-labelledby="what-are-carbon-credits">
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-8 items-start">
          <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-8 md:p-10">
            <h2 id="what-are-carbon-credits" className="text-3xl md:text-4xl font-bold mb-5">
              What Are Carbon Credits?
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              A carbon credit represents a measurable unit of climate benefit, usually tied to one tonne of carbon dioxide equivalent. In practical business terms, it is a way to balance emissions that your company still carries after reducing what it can internally.
            </p>
            <p className="text-gray-600 leading-relaxed">
              The simple analogy is this: if reducing emissions inside your business is the main diet and exercise plan, carbon credits are the recovery support you use for the part you cannot fix immediately. They are not a shortcut, but they can be a useful tool when bought carefully and backed by real data.
            </p>
          </div>
          <div className="bg-gray-50 rounded-3xl border border-gray-100 p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Why companies buy them</h3>
            <ul className="space-y-3 text-gray-600 leading-relaxed">
              <li>Support ESG and sustainability reporting with a visible action plan.</li>
              <li>Address residual emissions while reduction projects are still underway.</li>
              <li>Show stakeholders that climate spend is tied to measurable, local impact.</li>
              <li>Complement broader net-zero, supply-chain, and brand-trust initiatives.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8" aria-labelledby="why-buy-from-farmers">
        <div className="mb-8 max-w-3xl">
          <h2 id="why-buy-from-farmers" className="text-3xl md:text-4xl font-bold mb-4">
            Why Buy From Farmers?
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Farmer-linked credits are easier to trust when the marketplace shows real project context. They can also give companies a cleaner sustainability narrative than buying from an anonymous pool of supply.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {WHY_BUY_FROM_FARMERS.map((item) => (
            <article key={item.title} className="bg-white rounded-3xl border border-gray-100 shadow-sm p-7">
              <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed">{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-gray-50 py-16" aria-labelledby="how-our-platform-works">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <h2 id="how-our-platform-works" className="text-3xl md:text-4xl font-bold mb-4">
              How Our Platform Works
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              The goal is to make carbon credit buying feel less like a black box and more like a clear sourcing workflow your team can actually evaluate.
            </p>
          </div>
          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
            {HOW_IT_WORKS.map((item) => (
              <div key={item.step} className="bg-white rounded-3xl border border-gray-100 shadow-sm p-7">
                <p className="text-sm font-bold text-emerald-600 uppercase tracking-widest mb-3">
                  Step {item.step}
                </p>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="seller-list-shortcut"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 scroll-mt-24"
        aria-labelledby="seller-list-shortcut-title"
      >
        <div className="rounded-[2rem] border border-emerald-100 bg-emerald-50 p-8 md:p-12">
          <p className="text-emerald-700 font-bold text-sm uppercase tracking-widest mb-3">
            Dedicated separate page
          </p>
          <h2 id="seller-list-shortcut-title" className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Open the Seller List Page
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mb-8">
            Buyers no longer need to search through long content to find sellers. The separate seller-list page is made specifically to show sellers quickly, and every seller opens on an individual page with location details.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/seller-listings"
              className="px-7 py-4 bg-emerald-600 text-white rounded-xl font-bold hover:bg-emerald-700 transition-all text-center"
            >
              Go to Seller List
            </Link>
            <Link
              href="/seller-listings"
              className="px-7 py-4 border border-emerald-600 text-emerald-700 rounded-xl font-bold hover:bg-white transition-all text-center"
            >
              Find Sellers by State
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16" aria-labelledby="trust-verification">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <h2 id="trust-verification" className="text-3xl md:text-4xl font-bold mb-4">
              Trust & Verification
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Buyers do not need more climate buzzwords. They need evidence. This marketplace works best when every listing helps your team answer the basic commercial questions: who is selling, what is being sold, how much is available, and what proof supports the claim.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {TRUST_SIGNALS.map((item) => (
              <div key={item} className="bg-white rounded-3xl border border-gray-100 shadow-sm p-6">
                <p className="text-gray-700 leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 rounded-3xl border border-emerald-100 bg-emerald-50 p-7">
            <p className="text-gray-700 leading-relaxed">
              Need more context before buying? Compare market ranges on the{" "}
              <Link href="/carbon-credit-price" className="text-emerald-700 font-semibold hover:underline">
                carbon credit price page
              </Link>
              , estimate supply economics with the{" "}
              <Link href="/carbon-credit-calculator" className="text-emerald-700 font-semibold hover:underline">
                carbon credit calculator
              </Link>
              , or speak with us directly through the{" "}
              <Link href="/contact" className="text-emerald-700 font-semibold hover:underline">
                contact page
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16" aria-labelledby="buyer-use-cases">
        <div className="max-w-3xl mb-10">
          <h2 id="buyer-use-cases" className="text-3xl md:text-4xl font-bold mb-4">
            Common Buyer Use Cases
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Good carbon credit content should sound like it understands the buyer&apos;s day job. These are the most common reasons companies land on this page.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {BUYER_USE_CASES.map((item) => (
            <article key={item.title} className="bg-white rounded-3xl border border-gray-100 shadow-sm p-7">
              <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed">{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16" aria-labelledby="buy-carbon-credit-faqs">
        <h2 id="buy-carbon-credit-faqs" className="text-3xl md:text-4xl font-bold mb-8 text-center">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {FAQS.map((item) => (
            <div key={item.question} className="bg-white rounded-3xl border border-gray-100 shadow-sm p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-2">{item.question}</h3>
              <p className="text-gray-600 leading-relaxed">{item.answer}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="rounded-[2rem] bg-gray-900 text-white p-10 md:p-14">
          <div className="max-w-4xl">
            <p className="text-emerald-300 font-bold text-sm uppercase tracking-widest mb-4">
              Buy or contact
            </p>
            <h2 className="text-3xl md:text-5xl font-extrabold leading-tight mb-4">
              Ready to buy carbon credits in India with more clarity?
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              Start from the dedicated seller list, compare the separate seller pages, and contact the right sellers faster.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/seller-listings"
                className="px-7 py-4 bg-emerald-600 text-white rounded-xl font-bold hover:bg-emerald-700 transition-all text-center"
              >
                Open Seller List
              </Link>
              <Link
                href="/contact"
                className="px-7 py-4 bg-white text-gray-900 rounded-xl font-bold hover:bg-gray-100 transition-all text-center"
              >
                Contact Buyer Team
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
