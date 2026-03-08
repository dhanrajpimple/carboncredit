import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "BuyCarbonCredit | Connect Farmers and Companies",
    template: "%s | BuyCarbonCredit"
  },
  description: "Marketplace to buy carbon credits directly from farmers. Support sustainable agriculture and offset your carbon footprint with verified soil carbon credits.",
  keywords: ["buy carbon credit", "sell carbon credit", "carbon credits marketplace", "farm carbon credit", "carbon credit farmers", "soil carbon credits", "carbon offset farming"],
  openGraph: {
    title: "BuyCarbonCredit - sustainable Carbon Credit Marketplace",
    description: "Empowering farmers and companies to trade carbon credits directly.",
    url: "https://buycarboncredit.com", // Placeholder
    siteName: "BuyCarbonCredit",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BuyCarbonCredit - Carbon Credit Marketplace",
    description: "Connecting farmers and companies through carbon markets.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
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
