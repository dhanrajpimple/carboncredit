export const metadata = {
  title: "Marketplace Disclaimer",
  description: "Disclaimer for BuyCarbonCredit.in. General information purposes only.",
  alternates: { canonical: "https://buycarboncredit.in/disclaimer" },
  robots: { index: true, follow: true },
};

export default function DisclaimerPage() {
  return (
    <div className="bg-white min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-8">Disclaimer</h1>
        
        <div className="prose prose-lg text-gray-700 max-w-none space-y-6">
          <p><strong>Last updated: 6 September 2026</strong></p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. General Information</h2>
          <p>
            The information provided by <strong>BuyCarbonCredit.in</strong> (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) on https://buycarboncredit.in (the &quot;Site&quot;) is for general informational purposes only. All information on the Site is provided in good faith, however, we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the Site.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Professional Advice Disclaimer</h2>
          <p>
            The Site cannot and does not contain financial, legal, agricultural, or investment advice. The carbon credit market pricing, calculations, and estimates are provided for general information and educational purposes only and are not a substitute for professional advice.
          </p>
          <p>
            Accordingly, before taking any actions based upon such information, we encourage you to consult with the appropriate professionals. We do not provide any kind of financial or investment advice. THE USE OR RELIANCE OF ANY INFORMATION CONTAINED ON THIS SITE IS SOLELY AT YOUR OWN RISK.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Market Volatility and Estimates</h2>
          <p>
            Any estimates regarding the number of carbon credits a farm might generate, or the potential financial returns (e.g., price per ton, income per acre), are projections based on generalized market data and historical trends. The Voluntary Carbon Market is subject to fluctuations. We do not guarantee any specific earnings, prices, or successful sale of listed carbon credits.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. External Links Disclaimer</h2>
          <p>
            The Site may contain links to other websites or content belonging to or originating from third parties. Such external links are not investigated, monitored, or checked for accuracy, adequacy, validity, reliability, availability, or completeness by us.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. Affiliates and Advertising</h2>
          <p>
            The Site may contain links to affiliate websites, and we receive an affiliate commission for any purchases made by you on the affiliate website using such links. 
            We may use advertising networks like Google AdSense to monetize the website. These third-party vendors use cookies to serve ads based on a user&apos;s prior visits to our website.
          </p>

          <p className="mt-8">Legal contact information is available in the Terms &amp; Conditions.</p>
        </div>
      </div>
    </div>
  );
}
