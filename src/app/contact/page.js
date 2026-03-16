"use client";

import { useState } from "react";

export default function ContactPage() {
    const [formData, setFormData] = useState({
        farmerName: "",
        country: "",
        state: "",
        pincode: "",
        phoneNumber: "",
        email: "",
        totalLand: "",
        estimatedCredits: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleWhatsAppSubmit = (e) => {
        e.preventDefault();
        const message = `*Farmer Registration - BuyCarbonCredit*%0A
*Name:* ${formData.farmerName}%0A
*Country:* ${formData.country}%0A
*State:* ${formData.state}%0A
*Pincode:* ${formData.pincode}%0A
*Phone:* ${formData.phoneNumber}%0A
*Email:* ${formData.email}%0A
*Land:* ${formData.totalLand} Acres%0A
*Estimated Credits:* ${formData.estimatedCredits} Tons`;

        window.open(`https://wa.me/917219111601?text=${message}`, "_blank");
    };

    const handleEmailSubmit = (e) => {
        e.preventDefault();
        const subject = `Farmer Registration: ${formData.farmerName}`;
        const body = `Farmer Name: ${formData.farmerName}\nCountry: ${formData.country}\nState: ${formData.state}\nPincode: ${formData.pincode}\nPhone Number: ${formData.phoneNumber}\nEmail: ${formData.email}\nTotal Land: ${formData.totalLand} Acres\nEstimated Carbon Credits: ${formData.estimatedCredits} Tons`;

        window.location.href = `mailto:dhanraj.webdev@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    };

    return (
        <div className="bg-white min-h-screen py-16">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <header className="text-center mb-16">
                    <h1 className="text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">
                        Register Your Farm or Contact Us
                    </h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                        Farmers can register their farms to sell carbon credits. Fill out the form below and we&apos;ll help you get started with verification and listing.
                        <strong> A one-time registration fee of ₹199 is applicable for every farm listing.</strong>
                    </p>
                </header>

                <div className="grid md:grid-cols-3 gap-8 mb-16">
                    <a href="https://wa.me/917219111601" className="flex flex-col items-center p-8 bg-green-50 rounded-2xl border border-green-100 hover:shadow-md transition-shadow group">
                        <div className="w-12 h-12 bg-green-500 text-white rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.588-5.946 0-6.551 5.332-11.884 11.883-11.884 3.174 0 6.161 1.235 8.403 3.477s3.477 5.229 3.477 8.404c0 6.552-5.331 11.884-11.883 11.884-2.016 0-3.992-.511-5.741-1.481l-6.138 1.709zm5.99-4.085l.345.205c1.554.919 3.328 1.404 5.148 1.404 5.438 0 9.862-4.426 9.862-9.864 0-2.633-1.025-5.11-2.887-6.972s-4.34-2.887-6.974-2.887c-5.438 0-9.863 4.426-9.863 9.864 0 1.944.57 3.844 1.649 5.466l.233.354-1.085 3.966 4.072-1.07zm11.39-7.3c-.27-.134-1.6-.79-1.85-.88-.25-.09-.43-.135-.61.135-.18.27-.69.88-.85 1.055-.15.174-.31.196-.58.062s-1.137-.419-2.166-1.338c-.802-.716-1.343-1.601-1.5-1.871-.16-.27-.017-.416.118-.55.121-.121.27-.315.405-.473.135-.158.18-.27.27-.45.09-.18.045-.338-.022-.473-.068-.135-.61-1.47-.838-2.016-.22-.53-.443-.457-.61-.465l-.52-.008c-.18 0-.473.067-.72.338-.248.27-.945.923-.945 2.25 0 1.328.968 2.61 1.103 2.79.135.18 1.905 2.91 4.613 4.083.645.278 1.148.445 1.541.569.648.206 1.24.177 1.707.107.519-.078 1.6-.653 1.825-1.283.225-.63.225-1.17.158-1.283-.068-.113-.248-.178-.518-.313z" /></svg>
                        </div>
                        <span className="font-bold text-gray-900 mb-1">WhatsApp</span>
                        <span className="text-gray-500 text-sm">+91 72191 11601</span>
                    </a>
                    <a href="tel:917219111601" className="flex flex-col items-center p-8 bg-blue-50 rounded-2xl border border-blue-100 hover:shadow-md transition-shadow group">
                        <div className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                        </div>
                        <span className="font-bold text-gray-900 mb-1">Phone</span>
                        <span className="text-gray-500 text-sm">Call us directly</span>
                    </a>
                    <a href="mailto:dhanraj.webdev@gmail.com" className="flex flex-col items-center p-8 bg-gray-50 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow group">
                        <div className="w-12 h-12 bg-gray-800 text-white rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                        </div>
                        <span className="font-bold text-gray-900 mb-1">Email</span>
                        <span className="text-gray-500 text-sm">dhanraj.webdev@gmail.com</span>
                    </a>
                </div>

                <div className="bg-white rounded-3xl border border-gray-100 shadow-xl overflow-hidden">
                    <div className="p-8 md:p-12">
                        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="col-span-full">
                                <label className="block text-sm font-semibold text-gray-700 mb-2">Farmer Name</label>
                                <input
                                    type="text"
                                    name="farmerName"
                                    value={formData.farmerName}
                                    onChange={handleChange}
                                    placeholder="e.g. Rajesh Patil"
                                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all font-medium"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">Country</label>
                                <input
                                    type="text"
                                    name="country"
                                    value={formData.country}
                                    onChange={handleChange}
                                    placeholder="e.g. India"
                                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">State</label>
                                <input
                                    type="text"
                                    name="state"
                                    value={formData.state}
                                    onChange={handleChange}
                                    placeholder="e.g. Maharashtra"
                                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">Pincode</label>
                                <input
                                    type="text"
                                    name="pincode"
                                    value={formData.pincode}
                                    onChange={handleChange}
                                    placeholder="6-digit ZIP code"
                                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                                <input
                                    type="tel"
                                    name="phoneNumber"
                                    value={formData.phoneNumber}
                                    onChange={handleChange}
                                    placeholder="+91 XXXXX XXXXX"
                                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="example@farm.com"
                                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">Total Land (Acres)</label>
                                <input
                                    type="number"
                                    name="totalLand"
                                    value={formData.totalLand}
                                    onChange={handleChange}
                                    placeholder="e.g. 50"
                                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
                                    required
                                />
                            </div>
                            <div className="col-span-full">
                                <label className="block text-sm font-semibold text-gray-700 mb-2">Estimated Carbon Credits (Tons)</label>
                                <input
                                    type="number"
                                    name="estimatedCredits"
                                    value={formData.estimatedCredits}
                                    onChange={handleChange}
                                    placeholder="Expected tonnage per year"
                                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
                                    required
                                />
                            </div>
                            <div className="col-span-full grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                                <button
                                    type="button"
                                    onClick={handleWhatsAppSubmit}
                                    className="w-full bg-green-500 text-white py-4 rounded-xl font-bold flex items-center justify-center hover:bg-green-600 transition-all"
                                >
                                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.588-5.946 0-6.551 5.332-11.884 11.883-11.884 3.174 0 6.161 1.235 8.403 3.477s3.477 5.229 3.477 8.404c0 6.552-5.331 11.884-11.883 11.884-2.016 0-3.992-.511-5.741-1.481l-6.138 1.709zm5.99-4.085l.345.205c1.554.919 3.328 1.404 5.148 1.404 5.438 0 9.862-4.426 9.862-9.864 0-2.633-1.025-5.11-2.887-6.972s-4.34-2.887-6.974-2.887c-5.438 0-9.863 4.426-9.863 9.864 0 1.944.57 3.844 1.649 5.466l.233.354-1.085 3.966 4.072-1.07zm11.39-7.3c-.27-.134-1.6-.79-1.85-.88-.25-.09-.43-.135-.61.135-.18.27-.69.88-.85 1.055-.15.174-.31.196-.58.062s-1.137-.419-2.166-1.338c-.802-.716-1.343-1.601-1.5-1.871-.16-.27-.017-.416.118-.55.121-.121.27-.315.405-.473.135-.158.18-.27.27-.45.09-.18.045-.338-.022-.473-.068-.135-.61-1.47-.838-2.016-.22-.53-.443-.457-.61-.465l-.52-.008c-.18 0-.473.067-.72.338-.248.27-.945.923-.945 2.25 0 1.328.968 2.61 1.103 2.79.135.18 1.905 2.91 4.613 4.083.645.278 1.148.445 1.541.569.648.206 1.24.177 1.707.107.519-.078 1.6-.653 1.825-1.283.225-.63.225-1.17.158-1.283-.068-.113-.248-.178-.518-.313z" /></svg>
                                    Register via WhatsApp
                                </button>
                                <button
                                    type="button"
                                    onClick={handleEmailSubmit}
                                    className="w-full bg-emerald-600 text-white py-4 rounded-xl font-bold hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-200"
                                >
                                    Register via Email
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
