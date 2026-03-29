"use client";

import { useState } from "react";
import Script from "next/script";

export default function ContactPage() {
    const [formData, setFormData] = useState({
        farmerName: "",
        country: "",
        state: "",
        district: "",
        pincode: "",
        phoneNumber: "",
        email: "",
        totalLand: "",
        estimatedCredits: "",
    });

    const [isProcessing, setIsProcessing] = useState(false);
    const [statusMessage, setStatusMessage] = useState("");
    const [isSuccess, setIsSuccess] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handlePayment = async (e) => {
        e.preventDefault();
        
        // Basic Validation
        if (!formData.farmerName || !formData.phoneNumber || !formData.totalLand) {
            setStatusMessage("Please fill all required fields.");
            return;
        }

        setIsProcessing(true);
        setStatusMessage("Initiating secure payment...");

        try {
            // 1. Create order
            const res = await fetch("/api/create-order", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
            });
            const orderData = await res.json();

            if (!res.ok) {
                throw new Error(orderData.error || "Failed to create order");
            }

            // 2. Open Razorpay Checkout
            const options = {
                key: process.env.NEXT_PUBLIC_PAYMENT_KEY,
                amount: orderData.amount,
                currency: orderData.currency,
                name: "BuyCarbonCredit",
                description: "Farmer Registration Fee (₹199)",
                order_id: orderData.id,
                handler: async function (response) {
                    setStatusMessage("Verifying payment...");
                    
                    // 3. Verify Payment & Save to Supabase
                    const verifyRes = await fetch("/api/verify-payment", {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({
                            razorpay_order_id: response.razorpay_order_id,
                            razorpay_payment_id: response.razorpay_payment_id,
                            razorpay_signature: response.razorpay_signature,
                            farmerData: formData
                        }),
                    });

                    const verifyData = await verifyRes.json();
                    
                    if (verifyRes.ok) {
                        setIsSuccess(true);
                        setStatusMessage("Registration Successful! Your farm is now listed.");
                        setFormData({
                            farmerName: "", country: "", state: "", district: "", pincode: "", 
                            phoneNumber: "", email: "", totalLand: "", estimatedCredits: ""
                        });
                    } else {
                        setStatusMessage(verifyData.error || "Payment verification failed.");
                    }
                    setIsProcessing(false);
                },
                prefill: {
                    name: formData.farmerName,
                    email: formData.email,
                    contact: formData.phoneNumber,
                },
                theme: {
                    color: "#059669",
                },
            };

            const rzp = new window.Razorpay(options);
            rzp.on("payment.failed", function (response) {
                setStatusMessage("Payment Failed! Please try again.");
                setIsProcessing(false);
            });
            rzp.open();
            
        } catch (error) {
            console.error("Payment Error:", error);
            setStatusMessage("Failed to initiate payment. Please check your credentials.");
            setIsProcessing(false);
        }
    };

    return (
        <div className="bg-white min-h-screen py-16">
            <Script src="https://checkout.razorpay.com/v1/checkout.js" />
            
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <header className="text-center mb-16">
                    <h1 className="text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">
                        Register Your Farm
                    </h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                        Farmers can register their farms to sell carbon credits. Fill out the form below and we&apos;ll list you on our marketplace.
                        <strong> A one-time registration fee of ₹199 is applicable.</strong>
                    </p>
                </header>

                <div className="bg-white rounded-3xl border border-gray-100 shadow-xl overflow-hidden">
                    <div className="p-8 md:p-12">
                        {isSuccess ? (
                            <div className="text-center py-10">
                                <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <h2 className="text-3xl font-bold text-gray-900 mb-4">Registration Successful!</h2>
                                <p className="text-lg text-gray-600 mb-8 max-w-lg mx-auto">
                                    Thank you! Your farm details have been saved, and your listing is now active on our platform.
                                </p>
                                <button
                                    onClick={() => { setIsSuccess(false); setStatusMessage(""); }}
                                    className="px-8 py-3 bg-emerald-600 text-white font-bold rounded-xl hover:bg-emerald-700 transition-colors"
                                >
                                    Register Another Farm
                                </button>
                            </div>
                        ) : (
                            <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={handlePayment}>
                                <div className="col-span-full">
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">Farmer Name</label>
                                    <input
                                        type="text" name="farmerName" value={formData.farmerName} onChange={handleChange}
                                        placeholder="e.g. Rajesh Patil" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all" required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">Country</label>
                                    <input
                                        type="text" name="country" value={formData.country} onChange={handleChange}
                                        placeholder="e.g. India" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all" required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">State</label>
                                    <input
                                        type="text" name="state" value={formData.state} onChange={handleChange}
                                        placeholder="e.g. Maharashtra" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all" required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">District</label>
                                    <input
                                        type="text" name="district" value={formData.district} onChange={handleChange}
                                        placeholder="e.g. Pune" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all" required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">Pincode</label>
                                    <input
                                        type="text" name="pincode" value={formData.pincode} onChange={handleChange}
                                        placeholder="6-digit ZIP code" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all" required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                                    <input
                                        type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange}
                                        placeholder="+91 XXXXX XXXXX" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all" required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                                    <input
                                        type="email" name="email" value={formData.email} onChange={handleChange}
                                        placeholder="example@farm.com" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all" required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">Total Land (Acres)</label>
                                    <input
                                        type="number" name="totalLand" value={formData.totalLand} onChange={handleChange}
                                        placeholder="e.g. 50" min="1" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all" required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">Estimated Credits (Tons)</label>
                                    <input
                                        type="number" name="estimatedCredits" value={formData.estimatedCredits} onChange={handleChange}
                                        placeholder="Expected tonnage per year" min="1" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all" required
                                    />
                                </div>

                                {statusMessage && (
                                    <div className={`col-span-full p-4 rounded-xl text-center font-bold text-sm ${isSuccess ? "bg-emerald-50 text-emerald-700" : "bg-red-50 text-red-700"}`}>
                                        {statusMessage}
                                    </div>
                                )}

                                <div className="col-span-full mt-6">
                                    <button
                                        type="submit"
                                        disabled={isProcessing}
                                        className="w-full bg-emerald-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-200 disabled:opacity-75"
                                    >
                                        {isProcessing ? "Processing..." : "Pay ₹199 & Register"}
                                    </button>
                                    <div className="text-center mt-4 text-xs text-gray-400 font-medium tracking-wide flex items-center justify-center gap-2">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
                                        </svg>
                                        100% SECURE PAYMENT VIA RAZORPAY
                                    </div>
                                </div>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
