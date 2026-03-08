import Link from "next/link";

export const metadata = {
  title: "Buy and Sell Carbon Credits Directly from Farmers",
  description: "Connect companies looking to offset carbon emissions with farmers generating verified carbon credits from sustainable farming practices.",
};

export default function Home() {
  return (
    <div className="flex flex-col gap-20 pb-20">
      {/* Hero Section */}
      <section className="relative bg-emerald-50 py-24 lg:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center lg:text-left lg:max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 tracking-tight mb-6">
              Buy and Sell Carbon Credits <span className="text-emerald-600">Directly from Farmers</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed">
              Connect companies looking to offset carbon emissions with farmers generating verified carbon credits through sustainable agriculture.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                href="/buy-carbon-credit"
                className="px-8 py-4 bg-emerald-600 text-white rounded-xl font-bold text-lg hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-200 text-center"
              >
                Buy Carbon Credits
              </Link>
              <Link
                href="/contact"
                className="px-8 py-4 bg-white text-emerald-600 border-2 border-emerald-600 rounded-xl font-bold text-lg hover:bg-emerald-50 transition-all text-center"
              >
                Register Your Farm
              </Link>
            </div>
          </div>
        </div>

        {/* Simple decorative element */}
        <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 opacity-10 pointer-events-none">
          <svg width="600" height="600" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="#059669" d="M45.5,-75.4C58.8,-68.8,69.5,-56.3,77.3,-42.4C85,-28.5,89.7,-13.2,88,-0.9C86.4,11.3,78.3,20.6,71.2,30.3C64.1,40,58,50.1,49.2,59.2C40.3,68.4,28.6,76.6,15.6,79C2.7,81.4,-11.5,78,-25.1,72.9C-38.7,67.7,-51.7,60.8,-62.4,50.8C-73.1,40.8,-81.4,27.7,-84.3,13.6C-87.2,-0.5,-84.7,-15.6,-77.9,-29.4C-71.1,-43.3,-60,-55.8,-47.1,-62.7C-34.1,-69.5,-19.4,-70.7,-3.7,-64.3C11.9,-57.9,23.8,-43.8,32.2,-31.6C40.6,-19.4,45.5,-9.7,45.5,0L45.5,-75.4Z" transform="translate(100 100)" />
          </svg>
        </div>
      </section>

      {/* 1. What Are Carbon Credits */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-gray-100 p-8 md:p-16 text-center shadow-xl shadow-gray-100">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">What Are Carbon Credits?</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            One carbon credit represents the removal or reduction of <strong>one metric ton of carbon dioxide (CO₂)</strong> from the atmosphere. By buying these credits, companies support sustainable practices that actively combat climate change.
          </p>
        </div>
      </section>

      {/* 2 & 3. For Farmers & For Companies */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-8">
        <div className="p-10 bg-white rounded-3xl border border-gray-100 shadow-sm">
          <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center mb-6">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          </div>
          <h3 className="text-2xl font-bold mb-4">For Farmers</h3>
          <p className="text-gray-600 mb-6">
            Register your land and turn your sustainable agricultural practices into a new revenue stream. We help you verify and list your carbon credits for global buyers.
          </p>
          <Link href="/contact" className="text-emerald-600 font-bold hover:underline">Start Registering →</Link>
        </div>
        <div className="p-10 bg-white rounded-3xl border border-gray-100 shadow-sm">
          <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-6">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
          </div>
          <h3 className="text-2xl font-bold mb-4">For Companies</h3>
          <p className="text-gray-600 mb-6">
            Meet your net-zero goals by purchasing high-quality, verified carbon credits directly from the source. Support localized farming communities and transparent offsetting.
          </p>
          <Link href="/buy-carbon-credit" className="text-emerald-600 font-bold hover:underline">Browse Listings →</Link>
        </div>
      </section>

      {/* 4. How It Works */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "Step 1", title: "Registration", desc: "Farmers register their farm details and locations." },
              { step: "Step 2", title: "Generation", desc: "Carbon credits generated via verified farming practices." },
              { step: "Step 3", title: "Browsing", desc: "Companies browse and filter through global farm listings." },
              { step: "Step 4", title: "Direct Contact", desc: "Direct agreement between buyers and sellers." }
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm relative">
                <span className="text-emerald-600 font-bold text-sm uppercase tracking-widest mb-2 block">{item.step}</span>
                <h4 className="text-xl font-bold mb-3">{item.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                {idx < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 translate-x-1/2 -translate-y-1/2 text-gray-300">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Why Choose BuyCarbonCredit */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-16">Why Choose BuyCarbonCredit?</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 text-center">
          <div>
            <div className="text-emerald-600 mb-4 flex justify-center">
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
            </div>
            <h4 className="font-bold mb-2">Direct Farmer Connection</h4>
            <p className="text-gray-600 text-sm">Eliminate middlemen and support local communities directly.</p>
          </div>
          <div>
            <div className="text-emerald-600 mb-4 flex justify-center">
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            </div>
            <h4 className="font-bold mb-2">Transparent Marketplace</h4>
            <p className="text-gray-600 text-sm">Every listing is verified for land and credit availability.</p>
          </div>
          <div>
            <div className="text-emerald-600 mb-4 flex justify-center">
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-5 10a2 2 0 111 2.828" /></svg>
            </div>
            <h4 className="font-bold mb-2">Sustainable Agriculture</h4>
            <p className="text-gray-600 text-sm">Incentivizing farmers to adopt regenerative methods.</p>
          </div>
          <div>
            <div className="text-emerald-600 mb-4 flex justify-center">
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>
            </div>
            <h4 className="font-bold mb-2">Global Marketplace</h4>
            <p className="text-gray-600 text-sm">Access carbon credits from farms all around the world.</p>
          </div>
        </div>
      </section>

      {/* 6. CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-emerald-600 rounded-3xl p-12 md:p-20 text-center text-white relative overflow-hidden shadow-2xl">
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 italic">Ready to make a difference?</h2>
            <p className="text-lg md:text-xl mb-10 text-emerald-100 max-w-2xl mx-auto">
              Join our marketplace today and start your journey towards a greener future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/buy-carbon-credit"
                className="px-10 py-4 bg-white text-emerald-600 rounded-xl font-bold text-lg hover:bg-emerald-50 transition-all"
              >
                Buy Carbon Credits
              </Link>
              <Link
                href="/contact"
                className="px-10 py-4 bg-emerald-800 text-white rounded-xl font-bold text-lg hover:bg-emerald-900 transition-all border border-emerald-700"
              >
                Register Your Farm
              </Link>
            </div>
          </div>
          {/* Simple background decorative circles */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-emerald-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-700 rounded-full mix-blend-multiply filter blur-3xl opacity-20 translate-x-1/4 translate-y-1/4"></div>
        </div>
      </section>
    </div>
  );
}
