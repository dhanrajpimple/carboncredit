import Link from "next/link";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300 py-16 mt-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
                    {/* Brand */}
                    <div className="md:col-span-1">
                        <h3 className="text-xl font-bold text-white mb-4">🌱 BuyCarbonCredit</h3>
                        <p className="text-gray-400 text-sm leading-relaxed mb-4">
                            India&apos;s #1 carbon credit marketplace. Connecting farmers with companies through verified carbon markets.
                        </p>
                        <p className="text-gray-500 text-xs">
                            कार्बन क्रेडिट मार्केटप्लेस भारत | शेतकरी कार्बन क्रेडिट विक्री
                        </p>
                    </div>

                    {/* Marketplace */}
                    <div>
                        <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">Marketplace</h4>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="/buy-carbon-credit" className="text-gray-400 hover:text-emerald-400 transition-colors">Buy Carbon Credits</Link></li>
                            <li><Link href="/contact" className="text-gray-400 hover:text-emerald-400 transition-colors">Sell Carbon Credits</Link></li>
                            <li><Link href="/contact" className="text-gray-400 hover:text-emerald-400 transition-colors">Register Your Farm</Link></li>
                            <li><Link href="/buy-carbon-credit" className="text-gray-400 hover:text-emerald-400 transition-colors">Corporate Carbon Offset</Link></li>
                        </ul>
                    </div>

                    {/* Tools & Info */}
                    <div>
                        <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">Tools & Resources</h4>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="/carbon-credit-calculator" className="text-gray-400 hover:text-emerald-400 transition-colors">🧮 Carbon Credit Calculator</Link></li>
                            <li><Link href="/carbon-credit-price" className="text-gray-400 hover:text-emerald-400 transition-colors">💹 Carbon Credit Price 2026</Link></li>
                            <li><Link href="/blog" className="text-gray-400 hover:text-emerald-400 transition-colors">Guides & Blog</Link></li>
                            <li><Link href="/blog/what-is-carbon-credit" className="text-gray-400 hover:text-emerald-400 transition-colors">What is Carbon Credit?</Link></li>
                            <li><Link href="/blog/how-to-sell-carbon-credits" className="text-gray-400 hover:text-emerald-400 transition-colors">How to Sell Carbon Credits</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">Contact</h4>
                        <ul className="space-y-3 text-sm text-gray-400">
                            <li>
                                <a href="https://wa.me/917219111601" className="hover:text-green-400 transition-colors flex items-center gap-2">
                                    <span>📱</span> WhatsApp: +91 72191 11601
                                </a>
                            </li>
                            <li>
                                <a href="mailto:dhanraj.webdev@gmail.com" className="hover:text-emerald-400 transition-colors flex items-center gap-2">
                                    <span>✉️</span> dhanraj.webdev@gmail.com
                                </a>
                            </li>
                            <li className="text-gray-500 text-xs mt-4">
                                All 28 Indian States Covered<br />
                                Maharashtra • UP • Gujarat • Punjab<br />
                                Telangana • Karnataka • Tamil Nadu
                            </li>
                        </ul>
                    </div>
                </div>

                {/* SEO Footer Text */}
                <div className="border-t border-gray-800 pt-8 mb-6">
                    <p className="text-gray-600 text-xs leading-relaxed text-center max-w-4xl mx-auto">
                        BuyCarbonCredit.in — India&apos;s best carbon credit marketplace for buying and selling verified carbon credits from farmers. 
                        कार्बन क्रेडिट मार्केटप्लेस भारत | शेतकऱ्यांसाठी कार्बन क्रेडिट | Gujarat, Maharashtra, UP, Punjab carbon credits | 
                        ESG · CSR · Net-Zero · Soil Carbon · VCS · Gold Standard
                    </p>
                </div>

                <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-gray-500 text-sm">
                        © 2026 BuyCarbonCredit.in — India&apos;s #1 Carbon Credit Marketplace
                    </p>
                    <div className="flex gap-4 flex-wrap">
                        <Link href="/terms" className="text-gray-500 hover:text-emerald-400 text-xs transition-colors">Terms & Conditions</Link>
                        <Link href="/blog" className="text-gray-500 hover:text-emerald-400 text-xs transition-colors">Blog</Link>
                        <Link href="/carbon-credit-calculator" className="text-gray-500 hover:text-emerald-400 text-xs transition-colors">Calculator</Link>
                        <Link href="/carbon-credit-price" className="text-gray-500 hover:text-emerald-400 text-xs transition-colors">Prices</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
