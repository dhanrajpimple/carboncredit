"use client";

import { useState } from "react";

export default function ContactUsPage() {
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("Thank you for your message! Our team will get back to you shortly.");
  };

  return (
    <div className="bg-white min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4 text-center">Contact Us</h1>
        <p className="text-lg text-gray-600 text-center mb-12">
          Have questions about buying or selling carbon credits? We&apos;re here to help. Reach out to the BuyCarbonCredit.in team.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Details */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h2>
            <div className="space-y-6 text-gray-700">
              <div>
                <h3 className="font-semibold text-gray-900">Email Updates & Support</h3>
                <p>dhanraj.webdev@gmail.com</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Phone & WhatsApp</h3>
                <p>+91 72191 11601</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Business Hours</h3>
                <p>Monday - Friday: 9:00 AM - 6:00 PM (IST)</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-50 border border-gray-100 p-8 rounded-2xl shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
            {status ? (
              <div className="bg-emerald-100 text-emerald-800 p-4 rounded-xl font-medium">
                {status}
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Your Name</label>
                  <input
                    type="text"
                    required
                    className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                  <input
                    type="email"
                    required
                    className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
                  <textarea
                    required
                    rows={4}
                    className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-emerald-600 text-white py-3 rounded-xl font-bold text-lg hover:bg-emerald-700 transition"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
