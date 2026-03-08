import Link from "next/link";

const Footer = () => {
    return (
        <footer className="bg-gray-50 border-t border-gray-100 py-12 mt-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <h3 className="text-xl font-bold text-emerald-600 mb-4">BuyCarbonCredit</h3>
                        <p className="text-gray-600">
                            Connecting farmers and companies through sustainable carbon markets. Empowering agriculture to combat climate change.
                        </p>
                    </div>
                    <div>
                        <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/" className="text-gray-600 hover:text-emerald-600 transition-colors">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="/buy-carbon-credit" className="text-gray-600 hover:text-emerald-600 transition-colors">
                                    Buy Carbon Credit
                                </Link>
                            </li>
                            <li>
                                <Link href="/blog" className="text-gray-600 hover:text-emerald-600 transition-colors">
                                    Blog
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-gray-600 hover:text-emerald-600 transition-colors">
                                    Contact
                                </Link>
                            </li>
                            <li>
                                <Link href="/terms" className="text-gray-600 hover:text-emerald-600 transition-colors">
                                    Terms & Conditions
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">Contact Info</h4>
                        <ul className="space-y-2 text-gray-600">
                            <li>Email: dhanraj.webdev@gmail.com</li>
                            <li>WhatsApp: +91 72191 11601</li>
                            <li>Global Network of Sustainable Farms</li>
                        </ul>
                    </div>
                </div>
                <div className="mt-12 pt-8 border-t border-gray-200 text-center flex flex-col items-center gap-4">
                    <p className="text-gray-500 text-sm">
                        © {new Date().getFullYear()} BuyCarbonCredit – Connecting Farmers and Companies Through Carbon Markets
                    </p>
                    <div className="flex gap-4">
                        <Link href="/terms" className="text-gray-400 hover:text-emerald-600 text-xs transition-colors">
                            Legal & Terms
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
