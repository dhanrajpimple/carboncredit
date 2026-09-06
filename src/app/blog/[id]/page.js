"use strict";

import Link from "next/link";
import { notFound } from "next/navigation";
import blogs from "@/data/blogs.json";

const trimAtWord = (value, maxLength) => {
    if (value.length <= maxLength) return value;
    const shortened = value.slice(0, maxLength + 1);
    return `${shortened.slice(0, shortened.lastIndexOf(" ")).trim()}…`;
};

const getSeoTitle = (post) => trimAtWord(post.title.split("|")[0].trim(), 52);
const getSeoDescription = (post) => trimAtWord(post.excerpt.trim(), 155);

export async function generateStaticParams() {
    return blogs.map((post) => ({
        id: post.id,
    }));
}

export async function generateMetadata({ params }) {
    // Await params here (Next.js 15+ convention for server components/dynamic routes)
    const resolvedParams = await Promise.resolve(params);
    const post = blogs.find((p) => p.id === resolvedParams.id);
    
    if (!post) {
        return { title: "Blog Not Found" };
    }

    const metadataKeywords = Array.from(new Set([
        ...(post.keywords || []),
        "carbon credit blog",
        "carbon credit india blog",
        "carbon credits India",
        `${post.category} carbon credit guide`,
    ]));

    return {
        title: getSeoTitle(post),
        description: getSeoDescription(post),
        keywords: metadataKeywords,
        alternates: {
            canonical: `https://buycarboncredit.in/blog/${post.id}`,
        },
        openGraph: {
            title: post.title,
            description: getSeoDescription(post),
            url: `https://buycarboncredit.in/blog/${post.id}`,
            type: "article",
            publishedTime: post.date,
            authors: ["BuyCarbonCredit"],
        },
        twitter: {
            card: "summary_large_image",
            title: post.title,
            description: getSeoDescription(post),
        },
        robots: { index: post.index !== false, follow: true },
        category: post.category,
    };
}

const linkify = (text) => {
    const replacements = [
        { regex: /\b(price|prices|rate|rates)\b/gi, href: "/carbon-credit-price" },
        { regex: /\b(register|registration)\b/gi, href: "/carbon-credit-registration" },
        { regex: /\b(sell|selling)\b/gi, href: "/how-to-sell-carbon-credits-india" },
        { regex: /\b(per acre|1 acre|one acre)\b/gi, href: "/carbon-credit-price-per-acre" },
        { regex: /\b(calculator|calculate)\b/gi, href: "/carbon-credit-calculator" },
    ];
    return replacements.reduce(
        (acc, rep) => acc.replace(rep.regex, (match) => `<a href="${rep.href}" class="text-emerald-600 font-semibold hover:underline">${match}</a>`),
        text
    );
};

export default async function BlogPostPage({ params }) {
    // Await params
    const resolvedParams = await Promise.resolve(params);
    const post = blogs.find((p) => p.id === resolvedParams.id);

    if (!post) {
        notFound();
    }

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": post.title,
        "description": post.excerpt,
        "author": {
            "@type": "Organization",
            "name": "BuyCarbonCredit",
            "url": "https://buycarboncredit.in"
        },
        "publisher": {
            "@type": "Organization",
            "name": "BuyCarbonCredit",
            "logo": {
                "@type": "ImageObject",
                "url": "https://buycarboncredit.in/favicon.png"
            }
        },
        "datePublished": post.date,
        "dateModified": post.date,
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": `https://buycarboncredit.in/blog/${post.id}`
        },
        "isPartOf": {
            "@type": "Blog",
            "@id": "https://buycarboncredit.in/blog/#blog",
            "name": "BuyCarbonCredit Blog"
        },
        "keywords": post.keywords?.join(", "),
        "inLanguage": post.lang,
        "articleSection": post.category,
        "wordCount": post.content.trim().split(/\s+/).length
    };

    // BreadcrumbList schema for rich snippets in Google
    const breadcrumbSchema = {
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
            },
            {
                "@type": "ListItem",
                "position": 3,
                "name": post.title.split("|")[0].trim(),
                "item": `https://buycarboncredit.in/blog/${post.id}`
            }
        ]
    };

    // Auto-detect FAQ pairs from content for FAQ schema
    const contentText = post.content.replace(/\\n/g, '\n');
    const faqPairs = [];
    const faqRegex = /\*\*Q[:\s]*(.+?)\*\*\s*\n\s*A[:\s]*(.+?)(?=\n\n|\*\*Q|$)/gs;
    let match;
    while ((match = faqRegex.exec(contentText)) !== null) {
        faqPairs.push({ question: match[1].trim(), answer: match[2].trim() });
    }

    const faqSchema = faqPairs.length > 0 ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqPairs.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
            }
        }))
    } : null;

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            {faqSchema && (
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
                />
            )}
            <article className="bg-white min-h-screen py-16" itemScope itemType="https://schema.org/BlogPosting">
                <meta itemProp="datePublished" content={post.date} />
                <meta itemProp="inLanguage" content={post.lang} />
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Back button */}
                    <div className="mb-8">
                        <Link href="/blog" className="inline-flex items-center text-emerald-600 font-medium hover:text-emerald-700 transition-colors">
                            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
                            Back to Blog
                        </Link>
                    </div>

                    <header className="mb-12">
                        <div className="flex flex-wrap items-center gap-4 mb-6">
                            <span className="bg-emerald-50 text-emerald-700 border border-emerald-200 px-3 py-1 rounded-full text-sm font-bold tracking-wide uppercase">
                                {post.category}
                            </span>
                            <span className="text-gray-500 text-sm font-medium">Published: {post.date}</span>
                            {post.readTime && (
                                <span className="text-gray-500 text-sm font-medium">⏳ {post.readTime} read</span>
                            )}
                        </div>

                        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-6" itemProp="headline">
                            {post.title}
                        </h1>

                        <p className="text-xl text-gray-600 leading-relaxed max-w-3xl" itemProp="description">
                            {post.excerpt}
                        </p>
                    </header>

                    {/* Author & Share (placeholder for AI searches context) */}
                    <div className="flex items-center justify-between py-6 border-y border-gray-100 mb-10">
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 font-bold text-xl">
                                BCC
                            </div>
                            <div>
                                <p className="font-bold text-gray-900" itemProp="author" itemScope itemType="https://schema.org/Organization">
                                    <span itemProp="name">BuyCarbonCredit Team</span>
                                </p>
                                <p className="text-sm text-gray-500">Marketplace Experts</p>
                                <p className="text-sm text-gray-500">Part of the BuyCarbonCredit carbon credit blog for India</p>
                            </div>
                        </div>
                    </div>

                    {/* Main Content */}
                    <div 
                        className="prose prose-lg prose-emerald max-w-none mb-16"
                        itemProp="articleBody"
                    >
                        {/* If we strictly have markdown strings or HTML, we could parse it, but for now we format it nicely */}
                        {post.content.replace(/\\n/g, '\n').split("\n\n").map((paragraph, idx) => {
                            if (paragraph.startsWith("## ")) {
                                return <h2 key={idx} className="text-3xl font-bold mt-10 mb-4 text-gray-900">{paragraph.replace("## ", "")}</h2>;
                            }
                            if (paragraph.startsWith("### ")) {
                                return <h3 key={idx} className="text-2xl font-bold mt-8 mb-3 text-gray-900">{paragraph.replace("### ", "")}</h3>;
                            }
                            if (paragraph.startsWith("- ")) {
                                return (
                                    <ul key={idx} className="list-disc list-inside my-4 text-gray-700 leading-relaxed">
                                        {paragraph.split("\n").map((li, i) => (
                                            <li key={i} dangerouslySetInnerHTML={{ __html: linkify(li.replace("- ", "")) }} />
                                        ))}
                                    </ul>
                                );
                            }
                            return (
                                <p
                                    key={idx}
                                    className="text-gray-700 leading-relaxed mb-6"
                                    dangerouslySetInnerHTML={{ __html: linkify(paragraph) }}
                                />
                            );
                        })}
                    </div>

                    {/* SEO Tags */}
                    {post.keywords && post.keywords.length > 0 && (
                        <div className="border-t border-gray-100 pt-8 mt-12 mb-16">
                            <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">Related Topics in this Article</h3>
                            <div className="flex flex-wrap gap-2">
                                {post.keywords.map(kw => (
                                    <span key={kw} className="bg-gray-50 text-gray-600 border border-gray-200 px-3 py-1.5 rounded-full text-sm font-medium">
                                        {kw}
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* CTA */}
                    <div className="bg-emerald-600 rounded-3xl p-8 md:p-12 text-center text-white shadow-xl">
                        <h2 className="text-3xl font-bold mb-4">Ready to Earn from Carbon Credits?</h2>
                        <p className="text-emerald-100 mb-8 max-w-2xl mx-auto text-lg hover:text-white transition-colors">
                            Farmers can publish project information for potential buyers to review. Registration, eligibility, sales, prices, and income are not guaranteed.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/contact" className="px-8 py-3 bg-white text-emerald-600 rounded-xl font-bold hover:bg-emerald-50 transition-colors">
                                Register Your Farm
                            </Link>
                            <Link href="/buy-carbon-credit" className="px-8 py-3 bg-emerald-800 text-white rounded-xl font-bold hover:bg-emerald-900 border border-emerald-700 transition-colors">
                                Buy Carbon Credits
                            </Link>
                        </div>
                    </div>

                    {/* SEO internal link block — added to bottom of every blog post */}
                    <div className="blog-cta-section mt-12 border border-gray-100 rounded-2xl p-6 shadow-sm">
                      <h3 className="text-xl font-bold mb-4">Read more from the BuyCarbonCredit blog</h3>
                      <ul className="list-disc list-inside space-y-2 text-emerald-700">
                        <li><Link href="/carbon-credit-price-per-acre" className="hover:underline">Carbon credit price per acre in India 2026</Link></li>
                        <li><Link href="/carbon-credit-registration" className="hover:underline">Farmer marketplace registration (₹199)</Link></li>
                        <li><Link href="/how-to-sell-carbon-credits-india" className="hover:underline">How to sell carbon credits from your farm</Link></li>
                        <li><Link href="/carbon-credit-calculator" className="hover:underline">Carbon credit income calculator — estimate your earnings</Link></li>
                        <li><Link href="/carbon-credit-price" className="hover:underline">Current carbon credit price in India 2026</Link></li>
                      </ul>
                      <div className="mt-4">
                        <Link href="/contact" className="cta-btn inline-flex items-center px-4 py-2 bg-emerald-600 text-white font-bold rounded-lg hover:bg-emerald-700">
                          Register Your Farm Free →
                        </Link>
                      </div>
                    </div>

                </div>
            </article>
        </>
    );
}
