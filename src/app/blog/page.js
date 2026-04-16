import Link from "next/link";
import blogs from "@/data/blogs.json";

export const metadata = {
  title: "Carbon Credit India — Guides, Prices & News Blog | BuyCarbonCredit.in",
  description: "Expert guides on carbon credit prices, how to sell carbon credits in India, farmer registration, and net-zero strategies. Read in English, Hindi, Marathi. Updated 2026.",
  keywords: [
    "carbon credit blog India",
    "carbon credits blog India",
    "carbon credit articles India",
    "carbon credit news India",
    "carbon credit blog",
    "carbon credit India blog",
    "carbon credit guide India",
    "how to sell carbon credits India",
    "carbon credit price 2026",
    "carbon credit farmers India",
    "carbon farming blog India",
    "carbon credit price blog India",
    "carbon credit Hindi blog",
    "carbon credit Marathi blog",
    "कार्बन क्रेडिट जानकारी",
    "carbon credit marathi mahiti",
    "carbon credit hindi guide",
  ],
  alternates: {
    canonical: "https://buycarboncredit.in/blog",
  },
  openGraph: {
    title: "Carbon Credit India — Guides & News Blog | BuyCarbonCredit.in",
    description: "Expert carbon credit guides in English, Hindi & Marathi. Prices, registration, farming practices, and news for Indian farmers.",
    url: "https://buycarboncredit.in/blog",
    type: "website",
    locale: "en_IN",
  },
};

const blogPageSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": "https://buycarboncredit.in/blog/#blog",
    "name": "BuyCarbonCredit Blog — Carbon Credit Guides in Hindi, Marathi, English",
    "description": "Expert guides and news on carbon credits, carbon farming, and sustainable agriculture in India. Content in English, Hindi, Marathi, Gujarati, Telugu, Tamil, Kannada, and Punjabi.",
    "url": "https://buycarboncredit.in/blog",
    "publisher": {
        "@type": "Organization",
        "name": "BuyCarbonCredit",
        "url": "https://buycarboncredit.in"
    },
    "inLanguage": ["en-IN", "hi-IN", "mr-IN", "gu-IN", "te-IN", "ta-IN", "kn-IN", "pa-IN"],
    "blogPost": blogs.map(post => ({
        "@type": "BlogPosting",
        "headline": post.title,
        "description": post.excerpt,
        "datePublished": post.date,
        "url": `https://buycarboncredit.in/blog/${post.id}`,
        "keywords": post.keywords?.join(", "),
        "inLanguage": post.lang,
        "author": { "@type": "Organization", "name": "BuyCarbonCredit" },
        "publisher": { "@type": "Organization", "name": "BuyCarbonCredit" }
    }))
};

const blogBreadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
        {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://buycarboncredit.in"
        },
        {
            "@type": "ListItem",
            "position": 2,
            "name": "Blog",
            "item": "https://buycarboncredit.in/blog"
        }
    ]
};

const blogItemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Carbon Credit Blog Articles",
    "itemListOrder": "https://schema.org/ItemListOrderDescending",
    "numberOfItems": blogs.length,
    "itemListElement": blogs.map((post, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "url": `https://buycarboncredit.in/blog/${post.id}`,
        "name": post.title
    }))
};

const CATEGORY_COLORS = {
    "Guide": "bg-emerald-50 text-emerald-700 border-emerald-200",
    "Education": "bg-blue-50 text-blue-700 border-blue-200",
    "Market": "bg-amber-50 text-amber-700 border-amber-200",
    "Regional": "bg-purple-50 text-purple-700 border-purple-200",
    "Corporate": "bg-slate-50 text-slate-700 border-slate-200",
    "FAQ": "bg-rose-50 text-rose-700 border-rose-200",
    "Verification": "bg-teal-50 text-teal-700 border-teal-200",
    "Policy": "bg-orange-50 text-orange-700 border-orange-200",
    "Farming": "bg-lime-50 text-lime-700 border-lime-200",
};

const ALL_KEYWORD_TAGS = [
    // English
    "carbon credit blog India", "carbon credits India blog", "carbon credit news blog",
    "carbon credit articles India", "carbon farming blog India", "carbon credit price blog",
    "carbon credit", "buy carbon credit", "sell carbon credit", "carbon credit price India",
    "carbon credit marketplace India", "carbon credit farmers", "carbon offset India",
    "net zero India", "ESG carbon credits", "regenerative agriculture India",
    "soil carbon sequestration", "VCS Gold Standard carbon", "CCTS India",
    "carbon credit per acre", "carbon credit income farmers",
    // Hindi
    "कार्बन क्रेडिट", "कार्बन क्रेडिट क्या है", "कार्बन क्रेडिट कैसे बेचें",
    "किसान कार्बन क्रेडिट", "कार्बन क्रेडिट की कीमत",
    // Marathi
    "कार्बन क्रेडिट मराठी", "शेतकरी कार्बन क्रेडिट", "शाश्वत शेती",
    // Regional
    "carbon credit Maharashtra", "carbon credit UP", "carbon credit Gujarat",
    "carbon credit Punjab", "carbon credit Telangana", "carbon credit Tamil Nadu",
    "carbon credit Karnataka", "carbon farming Vidarbha",
    // Gujarati, Telugu, Tamil, Kannada, Punjabi
    "ગુજરાત કાર્બન ક્રેડિટ", "కార్బన్ క్రెడిట్", "கார்பன் கிரெடிட்",
    "ಕಾರ್ಬನ್ ಕ್ರೆಡಿಟ್", "ਕਾਰਬਨ ਕ੍ਰੈਡਿਟ",
];

export default function BlogPage() {
    const categories = ["All", ...new Set(blogs.map(b => b.category))];

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPageSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(blogBreadcrumbSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(blogItemListSchema) }}
            />
            <div className="bg-white min-h-screen py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    {/* Header */}
                    <header className="text-center mb-16">
                        <p className="text-emerald-600 font-bold text-sm uppercase tracking-widest mb-4">
                            India&apos;s #1 Carbon Credit Knowledge Hub
                        </p>
                        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
                            Carbon Credit Guides & <span className="text-emerald-600">News Blog</span>
                        </h1>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed mb-3">
                            India&apos;s carbon credit blog with expert insights on <strong>carbon farming</strong>, <strong>carbon credit prices</strong>, <strong>government policy</strong>, and <strong>sustainable agriculture</strong> in India.
                        </p>
                        <p className="text-base text-gray-500 max-w-2xl mx-auto">
                            हिंदी में कार्बन क्रेडिट की पूरी जानकारी। मराठीत कार्बन क्रेडिट माहिती। Guides in English, हिंदी, मराठी, ગુજરાતી, తెలుగు, தமிழ், ಕನ್ನಡ, ਪੰਜਾਬੀ.
                        </p>
                    </header>

                    <section className="mb-12 bg-emerald-50 rounded-3xl p-8 border border-emerald-100" aria-labelledby="blog-topics">
                        <h2 id="blog-topics" className="text-2xl font-bold mb-3">Popular Topics in Our Carbon Credit Blog</h2>
                        <p className="text-gray-600 mb-6 max-w-4xl">
                            This carbon credit blog covers short-tail and long-tail search topics such as carbon credit price in India, carbon credit registration for farmers, how to sell carbon credits, how companies buy carbon credits, carbon credit scams, carbon farming income, and regional guides for Maharashtra, UP, Bihar, Gujarat, Punjab, Telangana, Karnataka, and Tamil Nadu.
                        </p>
                        <div className="flex flex-wrap gap-3">
                            <Link href="/carbon-credit-price" className="px-4 py-2 rounded-full bg-white border border-emerald-200 text-emerald-700 font-semibold hover:bg-emerald-100 transition-colors">Carbon Credit Price Guide</Link>
                            <Link href="/how-to-sell-carbon-credits-india" className="px-4 py-2 rounded-full bg-white border border-emerald-200 text-emerald-700 font-semibold hover:bg-emerald-100 transition-colors">How to Sell Carbon Credits</Link>
                            <Link href="/carbon-credit-registration" className="px-4 py-2 rounded-full bg-white border border-emerald-200 text-emerald-700 font-semibold hover:bg-emerald-100 transition-colors">Farmer Registration Guide</Link>
                            <Link href="/buy-carbon-credit" className="px-4 py-2 rounded-full bg-white border border-emerald-200 text-emerald-700 font-semibold hover:bg-emerald-100 transition-colors">Buy Carbon Credits</Link>
                            <Link href="/carbon-credit-calculator" className="px-4 py-2 rounded-full bg-white border border-emerald-200 text-emerald-700 font-semibold hover:bg-emerald-100 transition-colors">Carbon Credit Calculator</Link>
                        </div>
                    </section>

                    {/* Category Tags */}
                    <div className="flex flex-wrap gap-3 justify-center mb-12" aria-label="Blog Categories">
                        {categories.map(cat => (
                            <span
                                key={cat}
                                className={`px-4 py-2 rounded-full text-sm font-bold border cursor-default
                                    ${cat === "All" ? "bg-emerald-600 text-white border-emerald-600" : `${CATEGORY_COLORS[cat] || "bg-gray-50 text-gray-700 border-gray-200"}`}`}
                            >
                                {cat}
                            </span>
                        ))}
                    </div>

                    {/* Blog Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {blogs.map((post) => (
                            <article
                                key={post.id}
                                className="group bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col"
                                itemScope
                                itemType="https://schema.org/BlogPosting"
                            >
                                <meta itemProp="datePublished" content={post.date} />
                                <meta itemProp="keywords" content={post.keywords?.join(", ")} />
                                <div className="aspect-video bg-emerald-50 flex items-center justify-center group-hover:bg-emerald-100 transition-colors relative">
                                    <svg className="w-16 h-16 text-emerald-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10l4 4v10a2 2 0 01-2 2z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14 2v4a2 2 0 002 2h4" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7 8h5M7 12h8M7 16h8" />
                                    </svg>
                                    {post.readTime && (
                                        <span className="absolute top-3 right-3 bg-white text-gray-500 text-xs px-2 py-1 rounded-full border border-gray-100 font-medium">
                                            {post.readTime} read
                                        </span>
                                    )}
                                </div>
                                <div className="p-8 flex flex-col flex-grow">
                                    <div className="flex items-center gap-3 mb-4 flex-wrap">
                                        <span className={`text-xs font-bold uppercase tracking-widest px-2 py-1 rounded border ${CATEGORY_COLORS[post.category] || "bg-gray-50 text-gray-500 border-gray-200"}`}>
                                            {post.category}
                                        </span>
                                        <span className="text-xs text-gray-400 font-medium">{post.date}</span>
                                        {post.lang && (
                                            <span className="text-xs text-blue-500 font-medium">📍 {post.lang}</span>
                                        )}
                                    </div>
                                    <h2 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-emerald-600 transition-colors leading-tight" itemProp="headline">
                                        {post.title}
                                    </h2>
                                    <p className="text-gray-600 text-sm mb-4 line-clamp-3 leading-relaxed" itemProp="description">
                                        {post.excerpt}
                                    </p>
                                    {post.keywords && post.keywords.length > 0 && (
                                        <div className="flex flex-wrap gap-1 mb-4">
                                            {post.keywords.slice(0, 3).map(kw => (
                                                <span key={kw} className="text-xs bg-gray-50 text-gray-500 border border-gray-100 px-2 py-0.5 rounded-full">
                                                    {kw}
                                                </span>
                                            ))}
                                        </div>
                                    )}
                                    <div className="mt-auto">
                                        <Link
                                            href={`/blog/${post.id}`}
                                            className="inline-flex items-center text-emerald-600 font-bold hover:gap-2 transition-all text-sm"
                                            itemProp="url"
                                        >
                                            Read Full Guide <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
                                        </Link>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>

                    {/* Multilingual Info Section */}
                    <section className="mt-16 bg-emerald-50 rounded-3xl p-8 md:p-12 border border-emerald-100" aria-label="Multilingual Carbon Credit Information">
                        <h2 className="text-2xl font-bold text-center mb-8">Carbon Credit Information in All Indian Languages</h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {[
                                { lang: "हिंदी (Hindi)", desc: "कार्बन क्रेडिट क्या है, कैसे बेचें, कितना पैसा मिलेगा" },
                                { lang: "मराठी (Marathi)", desc: "कार्बन क्रेडिट म्हणजे काय, नोंदणी कशी करावी" },
                                { lang: "ગુજરાતી (Gujarati)", desc: "ગુજરાત ખેડૂત કાર્બન ક્રેડિટ માહિતી" },
                                { lang: "తెలుగు (Telugu)", desc: "తెలంగాణ రైతుల కార్బన్ క్రెడిట్ సమాచారం" },
                                { lang: "தமிழ் (Tamil)", desc: "தமிழ்நாட்டு விவசாயிகளுக்கு கார்பன் கிரெடிட்" },
                                { lang: "ಕನ್ನಡ (Kannada)", desc: "ಕರ್ನಾಟಕ ರೈತರಿಗೆ ಕಾರ್ಬನ್ ಕ್ರೆಡಿಟ್ ಮಾಹಿತಿ" },
                                { lang: "ਪੰਜਾਬੀ (Punjabi)", desc: "ਪੰਜਾਬ ਖੇਡੂਤਾਂ ਲਈ ਕਾਰਬਨ ਕ੍ਰੈਡਿਟ ਜਾਣਕਾਰੀ" },
                                { lang: "English", desc: "Complete guides on buying, selling and verifying carbon credits in India" },
                            ].map(item => (
                                <div key={item.lang} className="bg-white rounded-2xl p-4 border border-emerald-100">
                                    <p className="font-bold text-emerald-700 text-sm mb-1">{item.lang}</p>
                                    <p className="text-gray-500 text-xs">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* SEO Keyword Cloud */}
                    <section className="mt-12 pt-8 border-t border-gray-100" aria-label="Popular Carbon Credit Search Terms">
                        <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-6">Popular Carbon Credit Search Topics</h3>
                        <div className="flex flex-wrap gap-2 text-xs text-gray-400">
                            {ALL_KEYWORD_TAGS.map(tag => (
                                <span key={tag} className="bg-gray-50 px-3 py-1 rounded-full border border-gray-100">{tag}</span>
                            ))}
                        </div>
                    </section>

                </div>
            </div>
        </>
    );
}
