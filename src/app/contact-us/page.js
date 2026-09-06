import Link from "next/link";

export default function ContactUsPage() {
  return (
    <div className="bg-white min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4 text-center">Contact Us</h1>
        <p className="text-lg text-gray-600 text-center mb-10">BuyCarbonCredit.in is a small independent listing platform that helps farmers and potential buyers discover each other.</p>
        <div className="bg-gray-50 border border-gray-100 p-8 rounded-2xl text-center">
          <p className="text-gray-700 mb-6">Farmers can use the single registration and payment form. Buyers can browse the public seller listings. Legal contact information is provided only in the Terms & Conditions.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact" className="px-6 py-3 bg-emerald-600 text-white rounded-xl font-bold">Farmer registration</Link>
            <Link href="/seller-listings" className="px-6 py-3 bg-white border border-gray-200 text-gray-800 rounded-xl font-bold">Browse listings</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
