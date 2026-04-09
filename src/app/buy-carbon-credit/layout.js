export const metadata = {
    title: "Buy Carbon Credits India | Verified from Farmers | BuyCarbonCredit.in",
    description: "Buy verified carbon credits directly from Indian farmers. Meet ESG, CSR & net-zero targets. Soil carbon credits from Maharashtra, UP, Gujarat, Punjab, Telangana & all India. No middlemen. कार्बन क्रेडिट खरीदें।",
    keywords: [
        // Short-tail
        "buy carbon credit India",
        "carbon credit marketplace",
        "carbon credit listings India",
        "carbon credits for companies",
        "purchase carbon offset India",
        // Long-tail
        "buy verified carbon credits from Indian farmers",
        "carbon credit listings Maharashtra",
        "carbon credit listings UP Gujarat Punjab",
        "best carbon credit price India",
        "corporate carbon offset certificate India",
        "carbon neutral certificate India",
        "ESG carbon offset India",
        "CSR carbon credits",
        "net zero carbon offset company India",
        "bulk carbon credit purchase India",
        "scope 3 emissions offset India",
        "BRSR carbon credit reporting",
        "where to buy carbon credits in India",
        "carbon credits for manufacturing companies India",
        "carbon offset for IT company India",
        "direct farmer carbon credit purchase",
        "voluntary carbon market India buy",
        "carbon credit verification VCS Gold Standard",
        // Hindi
        "कार्बन क्रेडिट खरीदें",
        "कंपनी के लिए कार्बन ऑफसेट",
        "कार्बन क्रेडिट खरीदने का तरीका",
        "नेट जीरो कंपनी भारत",
        // Marathi
        "कार्बन क्रेडिट खरेदी",
        "कंपन्यांसाठी कार्बन ऑफसेट",
        "महाराष्ट्र कार्बन क्रेडिट खरेदी",
    ],
    alternates: {
        canonical: "https://buycarboncredit.in/buy-carbon-credit",
    },
    openGraph: {
        title: "Buy Verified Carbon Credits from Indian Farmers | BuyCarbonCredit.in",
        description: "Browse carbon credit listings from farmers across all Indian states. Best price, verified, direct purchase. ESG & net-zero compliant.",
        url: "https://buycarboncredit.in/buy-carbon-credit",
        type: "website",
        locale: "en_IN",
    },
};

const marketplaceListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Buy Carbon Credits from Verified Indian Farmers",
    "description": "Verified carbon credit listings from Indian farmers across all states. Buy directly for ESG, CSR, and net-zero compliance.",
    "url": "https://buycarboncredit.in/buy-carbon-credit",
    "itemListOrder": "https://schema.org/ItemListOrderDescending",
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://buycarboncredit.in/" },
        { "@type": "ListItem", "position": 2, "name": "Buy Carbon Credits", "item": "https://buycarboncredit.in/buy-carbon-credit" }
    ]
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
        {
            "@type": "Question",
            "name": "How to buy carbon credits in India for companies?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Companies can buy carbon credits in India directly from verified Indian farmers on BuyCarbonCredit.in. Browse listings by state, crop type, and volume. Purchase verified carbon offset certificates for ESG, CSR, and BRSR compliance. Direct farmer-to-company transactions — no middlemen."
            }
        },
        {
            "@type": "Question",
            "name": "What is the price of carbon credits in India 2026?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Carbon credit prices in India range from ₹500 to ₹4,000 per metric ton in 2026. Agricultural soil carbon credits trade at ₹800–₹2,500 per ton. Premium verified (VCS, Gold Standard) credits fetch ₹2,500–₹4,000 per ton."
            }
        },
        {
            "@type": "Question",
            "name": "Which Indian states have carbon credits available to buy?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Carbon credits are available from farmers in all Indian states on BuyCarbonCredit.in, including Maharashtra, Uttar Pradesh, Gujarat, Punjab, Haryana, Telangana, Karnataka, Tamil Nadu, Rajasthan, Madhya Pradesh, Bihar, Odisha, and more."
            }
        }
    ]
};

export default function BuyLayout({ children }) {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(marketplaceListSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            {children}
        </>
    );
}
