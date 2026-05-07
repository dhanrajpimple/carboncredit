export const metadata = {
  title: "About Us | BuyCarbonCredit India",
  description: "Learn about BuyCarbonCredit.in, India's #1 carbon credit marketplace connecting sustainable farmers directly with conscious corporations.",
};

export default function AboutUsPage() {
  return (
    <div className="bg-white min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-8">About Us</h1>
        
        <div className="prose prose-lg text-gray-700 max-w-none space-y-6">
          <p>
            Welcome to <strong>BuyCarbonCredit.in</strong>, India&apos;s premier online marketplace dedicated to the seamless trading of voluntary carbon credits. We act as the crucial bridge connecting Indian farmers who practice sustainable agriculture with forward-thinking companies looking to offset their carbon footprint and meet ESG/CSR goals.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Our Mission</h2>
          <p>
            Our mission is twofold: to provide farmers with a reliable, additional source of income through carbon farming, and to offer corporations verified, high-quality carbon offsets sourced directly from Indian agriculture. We believe that sustainable farming is key to combating climate change, and those who practice it deserve to be rewarded.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">What We Do</h2>
          <p>
            The carbon market can often be opaque and filled with intermediaries. We streamline the process by offering a direct platform where:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Farmers</strong> can easily register their land, get their sustainable practices verified, and list their carbon credits for sale.</li>
            <li><strong>Companies</strong> can browse through detailed listings to purchase credits, ensuring transparency and direct impact on local farming communities.</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Why Choose Us?</h2>
          <p>
            By removing the middlemen, we ensure that a larger share of the carbon credit revenue goes directly to the farmers. We focus on transparency, rigorous verification, and creating a community dedicated to a greener, more sustainable India. 
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Our Vision</h2>
          <p>
            We envision an India where every farmer is empowered to adopt regenerative agriculture, and where companies taking responsibility for their emissions can transparently invest in our nation&apos;s agrarian roots.
          </p>

          <div className="mt-10 p-6 bg-emerald-50 rounded-2xl border border-emerald-100">
            <h3 className="text-xl font-bold text-emerald-900 mb-2">Join the Movement</h3>
            <p className="text-emerald-800">
              Whether you are a farmer looking to monetize your sustainable practices or a corporation aiming for Net Zero, BuyCarbonCredit.in is your trusted partner. Together, let&apos;s build a sustainable future.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
