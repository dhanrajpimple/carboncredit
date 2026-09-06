"use client";

import { useState } from "react";
import Link from "next/link";
import Script from "next/script";

const COUNTRIES = ["India", "Other"];

export default function ContactPage() {
  const [formData, setFormData] = useState({ farmerName: "", country: "", state: "", district: "", pincode: "", phoneNumber: "", email: "", totalLand: "", estimatedCredits: "" });
  const [isProcessing, setIsProcessing] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = ({ target: { name, value } }) => setFormData((previous) => ({ ...previous, [name]: value }));

  const handlePayment = async (event) => {
    event.preventDefault();
    if (!formData.farmerName || !formData.phoneNumber || !formData.email || !formData.totalLand) {
      setStatusMessage("Please fill all required fields.");
      return;
    }
    setIsProcessing(true);
    setStatusMessage("Initiating secure payment...");
    try {
      const response = await fetch("/api/create-order", { method: "POST", headers: { "Content-Type": "application/json" } });
      const order = await response.json();
      if (!response.ok) throw new Error(order.error || "Failed to create order");
      const payment = new window.Razorpay({
        key: process.env.NEXT_PUBLIC_PAYMENT_KEY,
        amount: order.amount,
        currency: order.currency,
        name: "BuyCarbonCredit",
        description: "Farmer marketplace registration fee (₹199)",
        order_id: order.id,
        handler: async (paymentResponse) => {
          setStatusMessage("Verifying payment...");
          const verificationResponse = await fetch("/api/verify-payment", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ razorpay_order_id: paymentResponse.razorpay_order_id, razorpay_payment_id: paymentResponse.razorpay_payment_id, razorpay_signature: paymentResponse.razorpay_signature, farmerData: formData }),
          });
          const result = await verificationResponse.json();
          if (verificationResponse.ok) {
            setIsSuccess(true);
            setStatusMessage("Payment received and registration submitted.");
            if (window.gtag && process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL) {
              window.gtag("event", "conversion", {
                send_to: `${process.env.NEXT_PUBLIC_GOOGLE_ADS_ID}/${process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL}`,
                value: 199,
                currency: "INR",
                transaction_id: paymentResponse.razorpay_payment_id,
              });
            }
          } else setStatusMessage(result.error || "Payment verification failed.");
          setIsProcessing(false);
        },
        prefill: { name: formData.farmerName, email: formData.email, contact: formData.phoneNumber },
        theme: { color: "#059669" },
      });
      payment.on("payment.failed", () => { setStatusMessage("Payment failed. Please try again."); setIsProcessing(false); });
      payment.open();
    } catch (error) {
      console.error("Payment error:", error);
      setStatusMessage("Payment could not be started. Please try again later.");
      setIsProcessing(false);
    }
  };

  const fieldClass = "w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500";
  return (
    <main className="bg-white min-h-screen py-16">
      <Script src="https://checkout.razorpay.com/v1/checkout.js" strategy="afterInteractive" />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-10">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Farmer Marketplace Registration</h1>
          <p className="text-lg text-gray-600">Submit this one form and pay the one-time ₹199 marketplace registration fee. Registration creates a farmer listing; it does not create or certify carbon credits and does not guarantee a buyer, sale, income, or verification.</p>
        </header>
        <section className="mb-8 rounded-2xl border border-amber-200 bg-amber-50 p-6" aria-labelledby="before-payment">
          <h2 id="before-payment" className="text-xl font-bold text-gray-900 mb-3">Before you pay</h2>
          <ul className="list-disc space-y-2 pl-5 text-sm text-gray-700">
            <li>Total charge: ₹199 once for one farmer marketplace listing registration.</li>
            <li>No subscription or automatic recurring payment.</li>
            <li>The fee becomes non-refundable after the farm listing is published.</li>
            <li>Registration does not guarantee verification, issued credits, buyer interest, a sale, payment, price, or income.</li>
          </ul>
        </section>
        <div className="bg-white rounded-3xl border border-gray-100 shadow-xl p-8 md:p-12">
          {isSuccess ? (
            <div className="text-center py-8"><h2 className="text-3xl font-bold text-gray-900 mb-4">Registration submitted</h2><p className="text-gray-600 mb-6">Your payment was verified and your farm details were received for marketplace review.</p><button onClick={() => { setIsSuccess(false); setStatusMessage(""); }} className="px-8 py-3 bg-emerald-600 text-white font-bold rounded-xl">Register another farm</button></div>
          ) : (
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={handlePayment}>
              <div className="col-span-full"><label className="block text-sm font-semibold text-gray-700 mb-2">Farmer name *</label><input type="text" name="farmerName" value={formData.farmerName} onChange={handleChange} className={fieldClass} required /></div>
              <div><label className="block text-sm font-semibold text-gray-700 mb-2">Country *</label><select name="country" value={formData.country} onChange={handleChange} className={fieldClass} required><option value="">Select country</option>{COUNTRIES.map((country) => <option key={country} value={country}>{country}</option>)}</select></div>
              <div><label className="block text-sm font-semibold text-gray-700 mb-2">State / province *</label><input type="text" name="state" value={formData.state} onChange={handleChange} className={fieldClass} required /></div>
              <div><label className="block text-sm font-semibold text-gray-700 mb-2">District / county</label><input type="text" name="district" value={formData.district} onChange={handleChange} className={fieldClass} /></div>
              <div><label className="block text-sm font-semibold text-gray-700 mb-2">Postal / ZIP code</label><input type="text" name="pincode" value={formData.pincode} onChange={handleChange} className={fieldClass} /></div>
              <div><label className="block text-sm font-semibold text-gray-700 mb-2">Phone number *</label><input type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} className={fieldClass} required /></div>
              <div><label className="block text-sm font-semibold text-gray-700 mb-2">Email address *</label><input type="email" name="email" value={formData.email} onChange={handleChange} className={fieldClass} required /></div>
              <div><label className="block text-sm font-semibold text-gray-700 mb-2">Total land (acres) *</label><input type="number" name="totalLand" value={formData.totalLand} onChange={handleChange} min="1" className={fieldClass} required /></div>
              <div><label className="block text-sm font-semibold text-gray-700 mb-2">Estimated credits (optional)</label><input type="number" name="estimatedCredits" value={formData.estimatedCredits} onChange={handleChange} min="0" className={fieldClass} /></div>
              {statusMessage && <div className="col-span-full p-4 rounded-xl text-center font-semibold bg-gray-50 text-gray-700" role="status">{statusMessage}</div>}
              <div className="col-span-full"><p className="text-sm text-gray-600 mb-4">By continuing, you confirm the details are accurate and accept the <Link href="/terms" className="text-emerald-700 underline">Terms & Conditions</Link> and <Link href="/privacy-policy" className="text-emerald-700 underline">Privacy Policy</Link>.</p><button type="submit" disabled={isProcessing} className="w-full bg-emerald-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-emerald-700 disabled:opacity-75">{isProcessing ? "Processing..." : "Pay ₹199 & Register"}</button><p className="text-center mt-4 text-xs text-gray-500">Payment is processed by Razorpay. No recurring charge.</p></div>
            </form>
          )}
        </div>
      </div>
    </main>
  );
}
