export default function TermsPage() {
    return (
        <div className="bg-white min-h-screen py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-extrabold text-gray-900 mb-8 border-b pb-4">Terms and Conditions</h1>

                <div className="prose prose-emerald max-w-none text-gray-600 space-y-8">
                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction</h2>
                        <p>
                            Welcome to BuyCarbonCredit. These Terms and Conditions govern your use of our website and services. By accessing or using our platform, you agree to be bound by these terms.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Platform Role & Disclaimer</h2>
                        <p className="bg-emerald-50 p-6 rounded-2xl border border-emerald-100 italic">
                            BuyCarbonCredit acts solely as a marketplace and a bridge to connect farmers (Sellers) with companies or individuals (Buyers).
                            <strong> We do not participate in, guarantee, or take responsibility for the direct communications, agreements, payments, verification outcomes, or transactions between Buyers and Sellers.</strong>
                        </p>
                        <p className="mt-4">
                            All interactions and negotiations are conducted directly between the parties involved. BuyCarbonCredit does not verify the legal standing of every individual transaction and provides no warranty regarding the credits beyond the initial verification provided by the farmers.
                        </p>
                        <p className="mt-4">
                            The platform owner does not guarantee that any farmer, seller, landowner, project owner, or listing user will receive buyers, purchase inquiries, confirmed orders, carbon credit sales, a fixed carbon credit price, a specific payment amount, or any income from using this website. Listing a farm or carbon credit opportunity on BuyCarbonCredit only creates marketplace visibility; it does not create a promise of buyer availability or sale completion.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">3. No Buyer, Sale, Income, or Price Guarantee</h2>
                        <p>
                            BuyCarbonCredit is not a broker, exchange, registry, verifier, financial advisor, investment advisor, or government carbon credit authority. We provide an online marketplace where potential sellers and potential buyers may discover each other and communicate.
                        </p>
                        <ul className="list-disc pl-6 space-y-2 mt-4">
                            <li>We do not guarantee that any buyer will contact a seller.</li>
                            <li>We do not guarantee that any listed carbon credits, farm projects, or seller profiles will be purchased.</li>
                            <li>We do not guarantee any fixed carbon credit price, income, profit, payout, return, or earning amount.</li>
                            <li>We do not guarantee successful carbon credit verification, certification, issuance, transfer, retirement, or acceptance by any buyer, standard, registry, consultant, company, or authority.</li>
                            <li>Any transaction, agreement, document exchange, payment, refund, delivery, claim, certificate, or dispute remains the responsibility of the buyer and seller involved.</li>
                        </ul>
                        <p className="mt-4">
                            Users must make their own independent checks before paying money, sharing documents, signing contracts, buying credits, selling credits, or relying on any carbon credit estimate shown on the website.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Farmer Registration Fees</h2>
                        <p>
                            To maintain the quality of our marketplace and cover administrative costs, we charge a <strong>one-time registration fee of ₹199</strong> for every farm listing.
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Fees are non-refundable once the farm is listed on our platform.</li>
                            <li>Registration fee covers the listing of the farm on the marketplace. It does not guarantee buyers, inquiries, sales, verification, payment, income, or carbon credit approval.</li>
                            <li>Verification steps may require additional documentation from the farmer side.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">5. User Responsibilities</h2>
                        <p>
                            Users are responsible for the accuracy of the information they provide. Farmers must ensure their carbon credit data is honest and verifiable. Buyers must perform their own due diligence before entering into any agreement with a farmer.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Limitation of Liability</h2>
                        <p>
                            BuyCarbonCredit shall not be liable for any financial losses, loss of expected income, lack of buyers, failed negotiations, failed verification, payment disputes, legal disputes, document misuse by third parties, or damages arising from transactions initiated through our platform. We are not responsible for the quality, legality, ownership, transferability, or actual carbon sequestration outcomes of the listed projects.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Contact Information</h2>
                        <p>
                            For legal inquiries or support, please contact us at:
                        </p>
                        <div className="mt-4 font-medium">
                            <p>Email: dhanraj.webdev@gmail.com</p>
                            <p>Phone/WhatsApp: +91 72191 11601</p>
                        </div>
                    </section>

                    <section className="pt-8 border-t">
                        <p className="text-sm">Last updated: {new Date().toLocaleDateString('en-IN')}</p>
                    </section>
                </div>
            </div>
        </div>
    );
}
