import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "BuyCarbonCredit | India's #1 Carbon Credit Marketplace for Farmers & Companies",
    template: "%s | BuyCarbonCredit.in"
  },
  description: "BuyCarbonCredit.in — India's best carbon credit marketplace. Buy and sell verified carbon credits directly from farmers. Earn money from sustainable farming. कार्बन क्रेडिट मार्केटप्लेस भारत। शेतकऱ्यांसाठी कार्बन क्रेडिट योजना। ₹50,000+/year for farmers.",
  keywords: [
    // === SHORT-TAIL ENGLISH ===
    "carbon credit",
    "carbon credits",
    "buy carbon credit",
    "sell carbon credit",
    "carbon offset",
    "carbon market",
    "carbon trading",
    "carbon credit India",
    "carbon credit marketplace",
    "carbon credit price",
    "carbon credit farming",
    "carbon farming",
    "carbon credit exchange",
    "carbon neutral",
    "net zero",
    "carbon footprint",
    "carbon sequestration",
    "soil carbon",
    "sustainable farming",
    "regenerative agriculture",

    // === LONG-TAIL ENGLISH ===
    "buy carbon credits from farmers India",
    "sell carbon credits online India",
    "how to sell carbon credits in India",
    "how to buy carbon credits in India",
    "carbon credit price per ton India",
    "carbon credit price in rupees",
    "1 carbon credit equals how many rupees",
    "best carbon credit marketplace India",
    "carbon credit for small farmers India",
    "carbon credit registration for farmers",
    "verified carbon credits India",
    "carbon credit income for farmers",
    "earn money from sustainable farming India",
    "carbon credit company India",
    "carbon credit trading platform India",
    "voluntary carbon market India",
    "carbon offset for companies India",
    "corporate carbon offset India",
    "ESG carbon credits India",
    "CSR carbon credits India",
    "net zero companies India",
    "carbon credit certification India",
    "VCS carbon credit India",
    "Gold Standard carbon credit India",
    "VERRA carbon credit India",
    "soil carbon sequestration India",
    "regenerative farming carbon credits India",
    "organic farming carbon credits India",
    "agricultural carbon credits India",
    "farm carbon credits India",
    "carbon credit per acre India",
    "how much carbon credit per acre",
    "rice paddy carbon credit",
    "wheat farm carbon credit",
    "cotton carbon credit India",
    "sugarcane carbon credit",
    "carbon credit for soybean",
    "carbon credit government scheme India",
    "CCTS India carbon credit",
    "India carbon credit trading scheme",
    "BEE carbon credit India",
    "PAT scheme carbon credits",

    // === REGIONAL INDIAN ENGLISH ===
    "carbon credit Maharashtra",
    "carbon credit Uttar Pradesh",
    "carbon credit Gujarat",
    "carbon credit Punjab",
    "carbon credit Haryana",
    "carbon credit Rajasthan",
    "carbon credit Telangana",
    "carbon credit Andhra Pradesh",
    "carbon credit Karnataka",
    "carbon credit Tamil Nadu",
    "carbon credit Madhya Pradesh",
    "carbon credit Odisha",
    "carbon credit West Bengal",
    "carbon credit Bihar",
    "carbon credit Jharkhand",
    "carbon credit Chhattisgarh",
    "carbon credit Vidarbha",
    "carbon credit Marathwada",
    "carbon credit Nashik",
    "carbon credit Pune",
    "carbon credit Nagpur",
    "carbon credit Amravati",
    "carbon credit Lucknow",
    "carbon credit Varanasi",
    "carbon credit Agra",
    "carbon credit Ahmedabad",
    "carbon credit Surat",
    "carbon credit Hyderabad",
    "carbon credit Bangalore",
    "carbon credit Chennai",
    "carbon credit Ludhiana",
    "carbon credit Chandigarh",
    "carbon credit Jaipur",
    "carbon credit Bhopal",

    // === HINDI KEYWORDS (हिंदी) ===
    "कार्बन क्रेडिट",
    "कार्बन क्रेडिट क्या है",
    "कार्बन क्रेडिट कैसे बेचें",
    "कार्बन क्रेडिट कैसे खरीदें",
    "कार्बन क्रेडिट की कीमत",
    "कार्बन क्रेडिट रजिस्ट्रेशन",
    "किसान कार्बन क्रेडिट",
    "कार्बन क्रेडिट से पैसे कमाएं",
    "भारत में कार्बन क्रेडिट",
    "कार्बन क्रेडिट योजना",
    "कार्बन क्रेडिट कंपनी भारत",
    "कार्बन ऑफसेट भारत",
    "टिकाऊ खेती कार्बन",
    "जैविक खेती कार्बन क्रेडिट",
    "मृदा कार्बन भारत",
    "कार्बन क्रेडिट महाराष्ट्र",
    "यूपी कार्बन क्रेडिट",
    "गुजरात कार्बन क्रेडिट",
    "carbon credit kya hota hai",
    "carbon credit ki puri jankari",
    "carbon credit se kitna paisa milta hai",
    "carbon credit kaise beche",
    "carbon credit kaise milta hai",
    "carbon credit registration kaise kare",

    // === MARATHI KEYWORDS (मराठी) ===
    "कार्बन क्रेडिट",
    "कार्बन क्रेडिट म्हणजे काय",
    "शेतकरी कार्बन क्रेडिट",
    "महाराष्ट्र कार्बन क्रेडिट",
    "कार्बन क्रेडिट नोंदणी",
    "शाश्वत शेती कार्बन",
    "मृदा कार्बन महाराष्ट्र",
    "कार्बन क्रेडिट विक्री",
    "कार्बन क्रेडिट खरेदी",
    "शेती कार्बन क्रेडिट माहिती",
    "कार्बन क्रेडिट योजना महाराष्ट्र",
    "कार्बन क्रेडिट मराठी",
    "विदर्भ कार्बन क्रेडिट",
    "मराठवाडा शेतकरी कार्बन",
    "carbon credit marathi",
    "carbon credit mahiti marathi",
    "shetkari carbon credit",
    "carbon credit nondni Maharashtra",

    // === GUJARATI KEYWORDS (ગુજરાતી) ===
    "ગુજરાત કાર્બન ક્રેડિટ",
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
  creator: "BuyCarbonCredit.in",
  publisher: "BuyCarbonCredit.in",
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

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is a carbon credit?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A carbon credit represents the removal or reduction of one metric ton of CO₂ from the atmosphere. Farmers earn carbon credits through sustainable agriculture practices like no-till farming, cover crops, and composting. Companies buy these credits to offset their carbon emissions and meet net-zero goals."
      }
    },
    {
      "@type": "Question",
      "name": "How can a farmer sell carbon credits in India?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Indian farmers can sell carbon credits by: 1) Registering on BuyCarbonCredit.in for free, 2) Submitting farm details including land area, location, and farming practices, 3) Getting a verification assessment, 4) Listing verified carbon credits on the marketplace, 5) Getting paid directly by buying companies. Minimum land area is 1 acre."
      }
    },
    {
      "@type": "Question",
      "name": "What is the carbon credit price in India in 2026?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Carbon credit prices in India range from ₹500 to ₹4000 per metric ton (1 carbon credit) depending on quality, verification standard (VCS, Gold Standard), and demand. An average Indian farmer with 5 acres can earn ₹25,000 to ₹50,000+ per year from carbon credits."
      }
    },
    {
      "@type": "Question",
      "name": "कार्बन क्रेडिट क्या है? (What is carbon credit in Hindi?)",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "एक कार्बन क्रेडिट वातावरण से एक मीट्रिक टन CO₂ को हटाने या कम करने का प्रतिनिधित्व करता है। किसान टिकाऊ खेती जैसे बिना जुताई, कवर क्रॉप्स, और जैविक खेती से कार्बन क्रेडिट कमाते हैं। कंपनियां अपने कार्बन उत्सर्जन को ऑफसेट करने के लिए इन क्रेडिट को खरीदती हैं।"
      }
    },
    {
      "@type": "Question",
      "name": "कार्बन क्रेडिट म्हणजे काय? (What is carbon credit in Marathi?)",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "कार्बन क्रेडिट म्हणजे वातावरणातून एक मेट्रिक टन CO₂ काढून टाकण्याचे किंवा कमी करण्याचे प्रमाणपत्र. शेतकरी शाश्वत शेती पद्धती जसे की को-टिल्लेज, सेंद्रिय शेती, आणि झाडे लावणे याद्वारे कार्बन क्रेडिट मिळवू शकतात. कंपन्या आपल्या कार्बन उत्सर्जनाची भरपाई करण्यासाठी हे क्रेडिट विकत घेतात."
      }
    },
    {
      "@type": "Question",
      "name": "Which farmers are eligible for carbon credits in India?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Any Indian farmer with minimum 1 acre of agricultural land can be eligible for carbon credits. Eligibility is based on adopting sustainable practices like no-till farming, cover crops, organic farming, agroforestry, or water conservation. Farmers from all Indian states including Maharashtra, UP, Gujarat, Punjab, Telangana, Karnataka, Tamil Nadu are eligible."
      }
    },
    {
      "@type": "Question",
      "name": "How do companies buy carbon credits in India?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Companies can buy carbon credits on BuyCarbonCredit.in by: 1) Browsing verified farm listings filtered by state, crop type, and credit volume, 2) Contacting farmer sellers directly, 3) Negotiating price per ton, 4) Getting a carbon offset certificate for ESG/CSR reporting. BuyCarbonCredit.in offers direct farmer-to-company transactions with no middlemen."
      }
    },
    {
      "@type": "Question",
      "name": "What crops generate the most carbon credits in India?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "In India, the crops and practices that generate the most carbon credits include: 1) Paddy (rice) with alternate wetting-drying method, 2) Wheat with no-till farming, 3) Sugarcane with crop residue management, 4) Agroforestry (trees + crops), 5) Legumes (soybean, chickpea), 6) Vegetable farming with cover crops. Sequestration rates range from 0.5 to 3 tons CO₂ per acre per year."
      }
    }
  ]
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5017050359206389"
     crossOrigin="anonymous"></script>
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
