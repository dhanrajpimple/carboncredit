import Link from "next/link";
import blogs from "@/data/blogs.json";

export default function BlogPage() {
    return (
        <div className="bg-white min-h-screen py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <header className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
                        Latest from <span className="text-emerald-600">BuyCarbonCredit Blog</span>
                    </h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                        Expert insights on carbon farming, sustainable agriculture, and carbon markets in India.
                        <br className="hidden md:block" />
                        हिंदी और मराठी में कार्बन क्रेडिट की जानकारी।
                    </p>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogs.map((post) => (
                        <article
                            key={post.id}
                            className="group bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col"
                        >
                            <div className="aspect-video bg-emerald-50 flex items-center justify-center group-hover:bg-emerald-100 transition-colors">
                                <svg className="w-16 h-16 text-emerald-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10l4 4v10a2 2 0 01-2 2z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14 2v4a2 2 0 002 2h4" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7 8h5M7 12h8M7 16h8" />
                                </svg>
                            </div>
                            <div className="p-8 flex flex-col flex-grow">
                                <div className="flex items-center gap-4 mb-4">
                                    <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest bg-emerald-50 px-2 py-1 rounded">
                                        {post.category}
                                    </span>
                                    <span className="text-xs text-gray-400 font-medium">{post.date}</span>
                                </div>
                                <h2 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-emerald-600 transition-colors leading-tight">
                                    {post.title}
                                </h2>
                                <p className="text-gray-600 text-sm mb-6 line-clamp-3 leading-relaxed">
                                    {post.excerpt}
                                </p>
                                <div className="mt-auto">
                                    <Link
                                        href={`/blog/${post.id}`}
                                        className="inline-flex items-center text-emerald-600 font-bold hover:gap-2 transition-all"
                                    >
                                        Read More <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
                                    </Link>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                {/* SEO Keyword Cloud for Bots */}
                <section className="mt-20 pt-12 border-t border-gray-100">
                    <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-6">Popular Search Terms</h3>
                    <div className="flex flex-wrap gap-2 text-xs text-gray-400">
                        {["sell carbon credit", "buy carbon credit index", "carbon credit farmers india", "पिकांचे कार्बन क्रेडिट", "शाश्वत शेती", "मृदा आरोग्य", "carbon offset calculator", "Verified carbon standard", "Regenerative farming india"].map(tag => (
                            <span key={tag} className="bg-gray-50 px-3 py-1 rounded-full border border-gray-100">{tag}</span>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
}
