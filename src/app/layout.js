import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL("https://buycarboncredit.in"),
  applicationName: "BuyCarbonCredit",
  title: {
    default: "BuyCarbonCredit | India's #1 Carbon Credit Marketplace for Farmers & Companies",
    template: "%s | BuyCarbonCredit"
  },
  description: "BuyCarbonCredit.in — India's best carbon credit marketplace. Buy and sell verified carbon credits directly from farmers. Earn money from sustainable farming.",
  keywords: [
    // === HIGH-REACH & TRENDING ===
    "carbon credit price in India today",
    "carbon credit price per ton 2026",
    "how to sell carbon credits in India",
    "carbon credit registration for farmers",
    "buy carbon credits India",
    "carbon credit marketplace India",
    "carbon farming India",
    "earn money from carbon credit India",
    "carbon offset companies in India",
    "voluntary carbon market India price",
    "carbon credit registry India",
    "soil carbon credit price per acre",
    "carbon credit for Indian farmers",
    "agricultural carbon credits India",
    "net zero consulting India",
    "ESG carbon credits India",
    "CSR carbon credits price",
    "carbon credit price in rupees",
    "how much carbon credit per acre in India",
    "carbon credit certification India",
    "verified carbon credits marketplace",
    "carbon neutral India 2070",
    "CCTS India latest news",
    "carbon credit trading scheme India",
    "sell carbon credits online India",
    "carbon credit for organic farming India",
    "carbon credit in Maharashtra price",
    "carbon credit in Uttar Pradesh",
    "carbon credit in Gujarat",
    "carbon credit in Telangana",
    "carbon credit in Karnataka",
    "carbon credit in Punjab",
    "what is carbon credit in Hindi",
    "carbon credit payout to farmers India",
    "best platform to sell carbon credits in India",
    // === GUJARATI KEYWORDS ===
    "ખેડૂત કાર્બન ક્રેડિટ",
    "કાર્બન ક્રેડિટ ગુજરાત",
    "carbon credit gujarati",
    "carbon credit gujarat kheti",

    // === TELUGU KEYWORDS (తెలుగు) ===
    "కార్బన్ క్రెడిట్ తెలంగాణ",
    "ఆంధ్ర కార్బన్ క్రెడిట్",
    "రైతు కార్బన్ క్రెడిట్",
    "carbon credit telugu",
    "carbon credit telangana farmers",

    // === TAMIL KEYWORDS (தமிழ்) ===
    "கார்பன் கிரெடிட் தமிழ்நாடு",
    "carbon credit tamil",
    "carbon credit tamil farmers",

    // === KANNADA KEYWORDS (ಕನ್ನಡ) ===
    "ಕರ್ನಾಟಕ ಕಾರ್ಬನ್ ಕ್ರೆಡಿಟ್",
    "ರೈತ ಕಾರ್ಬನ್ ಕ್ರೆಡಿಟ್",
    "carbon credit kannada",

    // === PUNJABI KEYWORDS (ਪੰਜਾਬੀ) ===
    "ਪੰਜਾਬ ਕਾਰਬਨ ਕ੍ਰੈਡਿਟ",
    "carbon credit punjabi",
    "punjab farmer carbon credit",

    // === QUESTION-BASED / AI OVERVIEW KEYWORDS ===
    "what is carbon credit",
    "how does carbon credit work",
    "how to earn carbon credit in India",
    "can farmers earn from carbon credits",
    "which farmers are eligible for carbon credits",
    "how much do carbon credits pay",
    "is carbon credit real money",
    "carbon credit scam or real",
    "carbon credit minimum land requirement",
    "carbon credit payment process India",
    "carbon credit vs carbon offset difference",
    "carbon credit for small land holders",
    "how to check carbon credit eligibility",
    "how to register for carbon credit in India",
    "best app to sell carbon credits India"
  ],
  authors: [{ name: "BuyCarbonCredit Team" }],
  creator: "BuyCarbonCredit",
  publisher: "BuyCarbonCredit",
  category: "Carbon Credit Marketplace",
  classification: "Environmental, Agriculture, Climate Technology",
  openGraph: {
    title: "BuyCarbonCredit — India's #1 Carbon Credit Marketplace | कार्बन क्रेडिट मार्केटप्लेस",
    description: "India's best platform to buy and sell verified carbon credits directly from farmers. कार्बन क्रेडिट मार्केटप्लेस भारत। शेतकऱ्यांसाठी कार्बन क्रेडिट योजना. ₹50,000+ per year for eligible farmers.",
    url: "https://buycarboncredit.in",
    siteName: "BuyCarbonCredit",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://buycarboncredit.in/favicon.png",
        width: 1200,
        height: 630,
        alt: "BuyCarbonCredit — India Carbon Credit Marketplace",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BuyCarbonCredit — India's #1 Carbon Credit Marketplace",
    description: "Buy and sell verified carbon credits from Indian farmers. कार्बन क्रेडिट बेचें और खरीदें। कार्बन क्रेडिट विक्री व खरेदी.",
    images: ["https://buycarboncredit.in/favicon.png"],
  },
  verification: {
    google: "pHUMAzeGte1qzhQFrlM9tCAOVVtaBuHMLnEzFdZ-MCc",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://buycarboncredit.in",
    languages: {
      "en-IN": "https://buycarboncredit.in",
      "hi-IN": "https://buycarboncredit.in",
      "mr-IN": "https://buycarboncredit.in",
      "gu-IN": "https://buycarboncredit.in",
      "te-IN": "https://buycarboncredit.in",
      "ta-IN": "https://buycarboncredit.in",
      "kn-IN": "https://buycarboncredit.in",
      "pa-IN": "https://buycarboncredit.in",
    },
  },
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
  manifest: "/site.webmanifest",
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://buycarboncredit.in/#org",
  "name": "BuyCarbonCredit",
  "alternateName": ["BuyCarbonCredit.in", "Buy Carbon Credit India", "कार्बन क्रेडिट मार्केटप्लेस"],
  "url": "https://buycarboncredit.in",
  "logo": {
    "@type": "ImageObject",
    "url": "https://buycarboncredit.in/favicon.png",
    "width": 512,
    "height": 512
  },
  "description": "India's #1 carbon credit marketplace connecting farmers with companies. Buy and sell verified carbon credits directly. कार्बन क्रेडिट मार्केटप्लेस भारत।",
  "foundingDate": "2024",
  "foundingLocation": {
    "@type": "Place",
    "name": "India"
  },
  "areaServed": {
    "@type": "Country",
    "name": "India"
  },
  "knowsAbout": [
    "Carbon Credits",
    "Carbon Offsetting",
    "Sustainable Agriculture",
    "Regenerative Farming",
    "Voluntary Carbon Markets",
    "Soil Carbon Sequestration",
    "ESG compliance",
    "Net Zero"
  ],
  "sameAs": [],
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+91-7219111601",
    "contactType": "customer service",
    "email": "dhanraj.webdev@gmail.com",
    "availableLanguage": ["English", "Hindi", "Marathi"]
  }
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://buycarboncredit.in/#website",
  "url": "https://buycarboncredit.in",
  "name": "BuyCarbonCredit",
  "alternateName": [
    "Buy Carbon Credit",
    "BuyCarbonCredit India",
    "BuyCarbonCredit.in"
  ],
  "description": "India's best carbon credit marketplace for farmers and companies",
  "publisher": { "@id": "https://buycarboncredit.in/#org" },
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://buycarboncredit.in/buy-carbon-credit?search={search_term_string}"
    },
    "query-input": "required name=search_term_string"
  }
};

const marketplaceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://buycarboncredit.in/#service",
  "name": "Carbon Credit Trading Marketplace",
  "serviceType": "Carbon Credit Marketplace",
  "provider": { "@id": "https://buycarboncredit.in/#org" },
  "description": "Buy and sell verified carbon credits from Indian farmers. Connect companies with sustainable farmers for carbon offsetting.",
  "areaServed": {
    "@type": "Country",
    "name": "India"
  },
  "audience": [
    { "@type": "Audience", "name": "Farmers" },
    { "@type": "Audience", "name": "Companies" },
    { "@type": "Audience", "name": "Corporations" }
  ],
  "offers": {
    "@type": "Offer",
    "description": "Verified carbon credits from Indian farmers",
    "priceCurrency": "INR",
    "availability": "https://schema.org/InStock"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="alternate" hrefLang="en-IN" href="https://buycarboncredit.in" />
        <link rel="alternate" hrefLang="hi-IN" href="https://buycarboncredit.in" />
        <link rel="alternate" hrefLang="mr-IN" href="https://buycarboncredit.in" />
        <link rel="alternate" hrefLang="gu-IN" href="https://buycarboncredit.in" />
        <link rel="alternate" hrefLang="te-IN" href="https://buycarboncredit.in" />
        <link rel="alternate" hrefLang="ta-IN" href="https://buycarboncredit.in" />
        <link rel="alternate" hrefLang="kn-IN" href="https://buycarboncredit.in" />
        <link rel="alternate" hrefLang="pa-IN" href="https://buycarboncredit.in" />
        <link rel="alternate" hrefLang="x-default" href="https://buycarboncredit.in" />
        <meta name="application-name" content="BuyCarbonCredit" />
        <meta name="apple-mobile-web-app-title" content="BuyCarbonCredit" />
        <meta property="og:site_name" content="BuyCarbonCredit" />
        <meta name="geo.region" content="IN" />
        <meta name="geo.country" content="India" />
        <meta name="language" content="English, Hindi, Marathi, Gujarati, Telugu, Tamil, Kannada, Punjabi" />
        <meta name="coverage" content="India" />
        <meta name="distribution" content="global" />
        <meta name="rating" content="general" />
        <meta name="revisit-after" content="3 days" />
        <meta name="target" content="all" />
        <meta property="og:locale:alternate" content="hi_IN" />
        <meta property="og:locale:alternate" content="mr_IN" />
        <meta property="og:locale:alternate" content="gu_IN" />
        <meta property="og:locale:alternate" content="te_IN" />
        <meta property="og:locale:alternate" content="ta_IN" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(marketplaceSchema) }}
        />
      </head>
      <body className={`${inter.className} bg-white text-gray-900 antialiased`}>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
