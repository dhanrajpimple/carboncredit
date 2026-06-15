export const metadata = {
  title: "About Us | BuyCarbonCredit India",
  description: "Learn about BuyCarbonCredit.in, India's #1 carbon credit marketplace connecting sustainable farmers directly with conscious corporations.",
  alternates: {
    canonical: "https://buycarboncredit.in/about-us",
  },
  openGraph: {
    title: "About Us | BuyCarbonCredit India",
    description: "Learn about BuyCarbonCredit.in, India's #1 carbon credit marketplace connecting sustainable farmers directly with conscious corporations.",
    url: "https://buycarboncredit.in/about-us",
    type: "website",
  },
};

export default function AboutUsPage() {
  return (
    <div className="bg-white min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-8">About BuyCarbonCredit.in</h1>
        
        <div className="prose prose-lg text-gray-700 max-w-none space-y-6">
          <p className="lead text-xl text-gray-600 mb-8">
            Welcome to <strong>BuyCarbonCredit.in</strong>, India's premier online marketplace dedicated to the seamless trading of voluntary carbon credits. We act as the crucial bridge connecting Indian farmers who practice sustainable agriculture with forward-thinking companies looking to offset their carbon footprint and meet ESG/CSR goals.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-10">
            <div className="bg-emerald-50 p-6 rounded-2xl text-center border border-emerald-100">
              <div className="text-3xl font-extrabold text-emerald-600 mb-2">1,000+</div>
              <div className="text-sm font-bold text-gray-700 uppercase tracking-wide">Farmers Registered</div>
            </div>
            <div className="bg-emerald-50 p-6 rounded-2xl text-center border border-emerald-100">
              <div className="text-3xl font-extrabold text-emerald-600 mb-2">15+</div>
              <div className="text-sm font-bold text-gray-700 uppercase tracking-wide">States Covered</div>
            </div>
            <div className="bg-emerald-50 p-6 rounded-2xl text-center border border-emerald-100">
              <div className="text-3xl font-extrabold text-emerald-600 mb-2">100%</div>
              <div className="text-sm font-bold text-gray-700 uppercase tracking-wide">Direct to Farmer</div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Our Mission</h2>
          <p>
            Our mission is twofold: to provide farmers with a reliable, additional source of income through carbon farming, and to offer corporations verified, high-quality carbon offsets sourced directly from Indian agriculture. We believe that sustainable farming is key to combating climate change, and those who practice it deserve to be rewarded transparently and fairly.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">How the Marketplace Works</h2>
          <p>
            The carbon market can often be opaque and filled with intermediaries. We streamline the process by offering a direct platform. Our process is designed to be simple yet rigorous:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Farmer Registration:</strong> Farmers can easily register their land and sustainable practices for free.</li>
            <li><strong>Verification:</strong> Practices are validated using established methodologies to ensure real carbon sequestration.</li>
            <li><strong>Listing:</strong> Verified credits are listed on our public directory for buyers to browse by state and district.</li>
            <li><strong>Corporate Purchase:</strong> Companies can browse through detailed listings to purchase credits, ensuring transparency and direct impact on local farming communities.</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Why Choose BuyCarbonCredit?</h2>
          <p>
            By removing the middlemen, we ensure that a larger share of the carbon credit revenue goes directly to the farmers. We focus on transparency, rigorous verification, and creating a community dedicated to a greener, more sustainable India. We align our methodologies with leading international standards to guarantee that every credit purchased makes a genuine environmental difference.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Our Vision for Indian Agriculture</h2>
          <p>
            We envision an India where every farmer is empowered to adopt regenerative agriculture, shifting from chemical-heavy practices to soil-restoring methods. At the same time, we envision a corporate sector taking responsibility for their emissions by transparently investing in our nation's agrarian roots.
          </p>

          <div className="mt-12 p-8 bg-emerald-600 rounded-3xl text-white shadow-lg text-center">
            <h3 className="text-2xl font-bold mb-4">Join the Movement</h3>
            <p className="text-emerald-100 mb-6 text-lg">
              Whether you are a farmer looking to monetize your sustainable practices or a corporation aiming for Net Zero, BuyCarbonCredit.in is your trusted partner. 
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="/contact" className="px-6 py-3 bg-white text-emerald-700 font-bold rounded-xl hover:bg-gray-50 transition-colors">Contact Our Team</a>
              <a href="/buy-carbon-credit" className="px-6 py-3 border border-white text-white font-bold rounded-xl hover:bg-emerald-700 transition-colors">Browse Sellers</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
