import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-16 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 mb-12">
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">Marketplace</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/buy-carbon-credit" className="text-gray-400 hover:text-emerald-400 transition-colors">Buy Carbon Credits</Link></li>
              <li><Link href="/how-to-sell-carbon-credits-india" className="text-gray-400 hover:text-emerald-400 transition-colors">Sell Carbon Credits</Link></li>
              <li><Link href="/carbon-credit-registration" className="text-gray-400 hover:text-emerald-400 transition-colors">Register Farm</Link></li>
              <li><Link href="/buy-carbon-credit" className="text-gray-400 hover:text-emerald-400 transition-colors">Corporate Carbon Offset</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">Tools</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/carbon-credit-calculator" className="text-gray-400 hover:text-emerald-400 transition-colors">Carbon Credit Calculator</Link></li>
              <li><Link href="/carbon-credit-price" className="text-gray-400 hover:text-emerald-400 transition-colors">Carbon Credit Price 2026</Link></li>
              <li><Link href="/carbon-credit-price-per-acre" className="text-gray-400 hover:text-emerald-400 transition-colors">Carbon Credit Per Acre Calculator</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">Guides</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/blog/what-is-carbon-credit" className="text-gray-400 hover:text-emerald-400 transition-colors">What is Carbon Credit</Link></li>
              <li><Link href="/how-to-sell-carbon-credits-india" className="text-gray-400 hover:text-emerald-400 transition-colors">How to Sell Carbon Credits</Link></li>
              <li><Link href="/carbon-credit-registration" className="text-gray-400 hover:text-emerald-400 transition-colors">Carbon Credit Registration Guide</Link></li>
              <li><Link href="/blog" className="text-gray-400 hover:text-emerald-400 transition-colors">Carbon Farming India</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">States</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/state/maharashtra" className="text-gray-400 hover:text-emerald-400 transition-colors">Maharashtra</Link></li>
              <li><Link href="/state/uttar-pradesh" className="text-gray-400 hover:text-emerald-400 transition-colors">Uttar Pradesh</Link></li>
              <li><Link href="/state/gujarat" className="text-gray-400 hover:text-emerald-400 transition-colors">Gujarat</Link></li>
              <li><Link href="/state/punjab" className="text-gray-400 hover:text-emerald-400 transition-colors">Punjab</Link></li>
              <li><Link href="/state/telangana" className="text-gray-400 hover:text-emerald-400 transition-colors">Telangana</Link></li>
              <li><Link href="/state/karnataka" className="text-gray-400 hover:text-emerald-400 transition-colors">Karnataka</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about-us" className="text-gray-400 hover:text-emerald-400 transition-colors">About Us</Link></li>
              <li><Link href="/contact-us" className="text-gray-400 hover:text-emerald-400 transition-colors">Contact Us</Link></li>
              <li><Link href="/privacy-policy" className="text-gray-400 hover:text-emerald-400 transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-gray-400 hover:text-emerald-400 transition-colors">Terms of Service</Link></li>
              <li><Link href="/disclaimer" className="text-gray-400 hover:text-emerald-400 transition-colors">Disclaimer</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © 2026 BuyCarbonCredit.in — India&apos;s #1 Carbon Credit Marketplace
          </p>
          <div className="flex gap-4 flex-wrap">
            <Link href="/privacy-policy" className="text-gray-500 hover:text-emerald-400 text-xs transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="text-gray-500 hover:text-emerald-400 text-xs transition-colors">Terms & Conditions</Link>
            <Link href="/disclaimer" className="text-gray-500 hover:text-emerald-400 text-xs transition-colors">Disclaimer</Link>
            <Link href="/contact-us" className="text-gray-500 hover:text-emerald-400 text-xs transition-colors">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
