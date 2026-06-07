"use client";

import Link from "next/link";
import { useState } from "react";

const MOBILE_LINKS = [
  { href: "/", label: "Home" },
  { href: "/seller-listings", label: "Buy Carbon Credits" },
  { href: "/buy-carbon-credit", label: "Buyer Guide" },
  { href: "/carbon-credit-price", label: "Carbon Credit Prices 2026" },
  { href: "/carbon-credit-calculator", label: "Carbon Credit Calculator" },
  { href: "/blog", label: "Blog and Guides" },
  { href: "/contact", label: "Register Your Farm" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const close = () => {
    setIsOpen(false);
  };

  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl font-bold text-emerald-600 tracking-tight" onClick={close}>
              Buy Carbon Credit
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-1">
            <Link href="/" className="px-3 py-2 text-gray-600 hover:text-emerald-600 font-medium transition-colors rounded-lg hover:bg-emerald-50">
              Home
            </Link>
            <Link href="/seller-listings" className="px-3 py-2 text-gray-600 hover:text-emerald-600 font-medium transition-colors rounded-lg hover:bg-emerald-50">
              Buy Credits
            </Link>
            <Link href="/buy-carbon-credit" className="px-3 py-2 text-gray-600 hover:text-emerald-600 font-medium transition-colors rounded-lg hover:bg-emerald-50">
              Buyer Guide
            </Link>
            <Link href="/carbon-credit-price" className="px-3 py-2 text-gray-600 hover:text-emerald-600 font-medium transition-colors rounded-lg hover:bg-emerald-50">
              Prices
            </Link>
            <Link href="/carbon-credit-calculator" className="px-3 py-2 text-gray-600 hover:text-emerald-600 font-medium transition-colors rounded-lg hover:bg-emerald-50">
              Calculator
            </Link>
            <Link href="/blog" className="px-3 py-2 text-gray-600 hover:text-emerald-600 font-medium transition-colors rounded-lg hover:bg-emerald-50">
              Blog
            </Link>
            <Link
              href="/contact"
              className="ml-2 px-5 py-2 bg-emerald-600 text-white rounded-xl font-bold hover:bg-emerald-700 transition-all shadow-sm shadow-emerald-200"
            >
              Register Farm
            </Link>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-emerald-600 focus:outline-none p-2"
              aria-label="Toggle menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 shadow-lg">
          <div className="px-4 pt-2 pb-4 space-y-1">
            {MOBILE_LINKS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block px-4 py-3 rounded-lg text-base font-medium text-gray-700 hover:text-emerald-600 hover:bg-emerald-50 transition-all"
                onClick={close}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
