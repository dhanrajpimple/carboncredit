"use client";

import { useState } from "react";
import Link from "next/link";
import Script from "next/script";

const ORGANIZATION_TYPES = ["Enterprise", "NGO", "CSR Foundation", "Climate Project Developer", "Other"];
const TIMELINES = ["This monsoon season", "Next 3 months", "Next 6 months", "This financial year", "Planning stage"];

export default function EnterpriseRequestForm() {
  const [formData, setFormData] = useState({
    organizationName: "",
    organizationType: "",
    contactName: "",
    email: "",
    phoneNumber: "",
    targetState: "",
    targetDistrict: "",
    targetAcres: "",
    farmerCount: "",
    plantingTimeline: "",
    projectGoal: "",
    notes: "",
  });
  const [isProcessing, setIsProcessing] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = ({ target: { name, value } }) => {
    setFormData((previous) => ({ ...previous, [name]: value }));
  };

  const handlePayment = async (event) => {
    event.preventDefault();

    if (!formData.organizationName || !formData.organizationType || !formData.contactName || !formData.email || !formData.phoneNumber || !formData.targetState || !formData.targetAcres) {
      setStatusMessage("Please fill all required fields.");
      return;
    }

    setIsProcessing(true);
    setStatusMessage("Initiating secure payment...");

    try {
      const response = await fetch("/api/enterprise-requests/create-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      });
      const order = await response.json();
      if (!response.ok) throw new Error(order.error || "Failed to create order");

      const payment = new window.Razorpay({
        key: process.env.NEXT_PUBLIC_PAYMENT_KEY,
        amount: order.amount,
        currency: order.currency,
        name: "BuyCarbonCredit",
        description: "Enterprise and NGO farmer requirement listing fee (₹199)",
        order_id: order.id,
        handler: async (paymentResponse) => {
          setStatusMessage("Verifying payment...");
          const verificationResponse = await fetch("/api/enterprise-requests/verify-payment", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              razorpay_order_id: paymentResponse.razorpay_order_id,
              razorpay_payment_id: paymentResponse.razorpay_payment_id,
              razorpay_signature: paymentResponse.razorpay_signature,
              requestData: formData,
            }),
          });
          const result = await verificationResponse.json();

          if (verificationResponse.ok) {
            setIsSuccess(true);
            setStatusMessage("Payment received and farmer requirement submitted.");
          } else {
            setStatusMessage(result.error || "Payment verification failed.");
          }
          setIsProcessing(false);
        },
        prefill: { name: formData.contactName, email: formData.email, contact: formData.phoneNumber },
        theme: { color: "#059669" },
      });

      payment.on("payment.failed", () => {
        setStatusMessage("Payment failed. Please try again.");
        setIsProcessing(false);
      });
      payment.open();
    } catch (error) {
      console.error("Enterprise request payment error:", error);
      setStatusMessage("Payment could not be started. Please try again later.");
      setIsProcessing(false);
    }
  };

  const fieldClass = "w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500";

  return (
    <section id="request-form" className="scroll-mt-24" aria-labelledby="request-form-title">
      <Script src="https://checkout.razorpay.com/v1/checkout.js" strategy="afterInteractive" />
      <div className="rounded-3xl border border-gray-100 bg-white p-6 shadow-xl md:p-10">
        {isSuccess ? (
          <div className="py-8 text-center">
            <h2 id="request-form-title" className="mb-4 text-3xl font-bold text-gray-900">Requirement submitted</h2>
            <p className="mx-auto mb-6 max-w-2xl text-gray-600">Your payment was verified and your farmer requirement was received. It can now be reviewed for public listing on this page.</p>
            <button onClick={() => { setIsSuccess(false); setStatusMessage(""); }} className="rounded-xl bg-emerald-600 px-8 py-3 font-bold text-white hover:bg-emerald-700">Submit another requirement</button>
          </div>
        ) : (
          <>
            <div className="mb-8">
              <p className="mb-3 text-sm font-bold uppercase tracking-widest text-emerald-700">Company and NGO form</p>
              <h2 id="request-form-title" className="mb-3 text-3xl font-bold text-gray-900">List your farmer requirement for ₹199</h2>
              <p className="text-gray-600">Tell us where in India you want farmers for tree plantation, agroforestry, CSR, or carbon project planning. Payment creates one public requirement listing.</p>
            </div>
            <form className="grid grid-cols-1 gap-6 md:grid-cols-2" onSubmit={handlePayment}>
              <div className="col-span-full"><label className="mb-2 block text-sm font-semibold text-gray-700">Organization name *</label><input type="text" name="organizationName" value={formData.organizationName} onChange={handleChange} className={fieldClass} required /></div>
              <div><label className="mb-2 block text-sm font-semibold text-gray-700">Organization type *</label><select name="organizationType" value={formData.organizationType} onChange={handleChange} className={fieldClass} required><option value="">Select type</option>{ORGANIZATION_TYPES.map((type) => <option key={type} value={type}>{type}</option>)}</select></div>
              <div><label className="mb-2 block text-sm font-semibold text-gray-700">Contact person *</label><input type="text" name="contactName" value={formData.contactName} onChange={handleChange} className={fieldClass} required /></div>
              <div><label className="mb-2 block text-sm font-semibold text-gray-700">Email address *</label><input type="email" name="email" value={formData.email} onChange={handleChange} className={fieldClass} required /></div>
              <div><label className="mb-2 block text-sm font-semibold text-gray-700">Phone number *</label><input type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} className={fieldClass} required /></div>
              <div><label className="mb-2 block text-sm font-semibold text-gray-700">Target state in India *</label><input type="text" name="targetState" value={formData.targetState} onChange={handleChange} className={fieldClass} required /></div>
              <div><label className="mb-2 block text-sm font-semibold text-gray-700">Target district / region</label><input type="text" name="targetDistrict" value={formData.targetDistrict} onChange={handleChange} className={fieldClass} /></div>
              <div><label className="mb-2 block text-sm font-semibold text-gray-700">Required farmer land acres *</label><input type="number" name="targetAcres" value={formData.targetAcres} onChange={handleChange} min="1" className={fieldClass} required /></div>
              <div><label className="mb-2 block text-sm font-semibold text-gray-700">Approx. farmers required</label><input type="number" name="farmerCount" value={formData.farmerCount} onChange={handleChange} min="1" className={fieldClass} /></div>
              <div><label className="mb-2 block text-sm font-semibold text-gray-700">Planting timeline</label><select name="plantingTimeline" value={formData.plantingTimeline} onChange={handleChange} className={fieldClass}><option value="">Select timeline</option>{TIMELINES.map((timeline) => <option key={timeline} value={timeline}>{timeline}</option>)}</select></div>
              <div className="col-span-full"><label className="mb-2 block text-sm font-semibold text-gray-700">Project goal</label><input type="text" name="projectGoal" value={formData.projectGoal} onChange={handleChange} className={fieldClass} placeholder="CSR tree plantation, agroforestry, carbon project sourcing..." /></div>
              <div className="col-span-full"><label className="mb-2 block text-sm font-semibold text-gray-700">Additional notes</label><textarea name="notes" value={formData.notes} onChange={handleChange} rows="4" className={fieldClass} /></div>
              {statusMessage && <div className="col-span-full rounded-xl bg-gray-50 p-4 text-center font-semibold text-gray-700" role="status">{statusMessage}</div>}
              <div className="col-span-full">
                <p className="mb-4 text-sm text-gray-600">By continuing, you accept the <Link href="/terms" className="text-emerald-700 underline">Terms & Conditions</Link> and <Link href="/privacy-policy" className="text-emerald-700 underline">Privacy Policy</Link>. This is a marketplace listing and farmer discovery support request, not a guarantee of project approval, carbon credits, or farmer onboarding.</p>
                <button type="submit" disabled={isProcessing} className="w-full rounded-xl bg-emerald-600 py-4 text-lg font-bold text-white hover:bg-emerald-700 disabled:opacity-75">{isProcessing ? "Processing..." : "Pay ₹199 & List Requirement"}</button>
                <p className="mt-4 text-center text-xs text-gray-500">Payment is processed by Razorpay. No recurring charge.</p>
              </div>
            </form>
          </>
        )}
      </div>
    </section>
  );
}
