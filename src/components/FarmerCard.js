"use client";

import Link from "next/link";

const COUNTRY_FLAGS = {
  "India": "🇮🇳",
  "United States": "🇺🇸",
  "United Kingdom": "🇬🇧",
  "Germany": "🇩🇪",
  "France": "🇫🇷",
  "Australia": "🇦🇺",
  "Canada": "🇨🇦",
  "Singapore": "🇸🇬",
  "United Arab Emirates": "🇦🇪",
  "Japan": "🇯🇵",
  "South Africa": "🇿🇦",
  "Kenya": "🇰🇪",
  "Nigeria": "🇳🇬",
  "Brazil": "🇧🇷",
  "Netherlands": "🇳🇱",
};

const FarmerCard = ({ farmer }) => {
    const flag = COUNTRY_FLAGS[farmer.country] || "🌍";

    return (
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 hover:shadow-lg transition-shadow group">
            <div className="flex justify-between items-start mb-4">
                <div>
                    <h3 className="text-xl font-bold text-gray-900">{farmer.name}</h3>
                    <p className="text-emerald-600 font-medium flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                        Verified • Ready to Sell
                    </p>
                </div>
                <div className="bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full text-sm font-semibold">
                    {farmer.carbon_credits} Tons CO₂
                </div>
            </div>

            <div className="space-y-3 mb-6">
                <div className="flex items-center text-gray-600">
                    <span className="text-lg mr-2">{flag}</span>
                    <span>{farmer.district}, {farmer.state}, {farmer.country}</span>
                </div>
                <div className="flex items-center text-gray-600">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                    </svg>
                    <span>{farmer.land_acres} Acres Available</span>
                </div>
            </div>

            <div className="rounded-2xl bg-gray-50 border border-gray-100 p-4 mb-6">
                <div className="flex items-center justify-between">
                    <div>
                        <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">Carbon Credits Available</p>
                        <p className="text-gray-900 font-bold text-lg">{farmer.carbon_credits} Tons CO₂/year</p>
                    </div>
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-700 text-xs font-bold">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                        Active
                    </span>
                </div>
            </div>

            <Link
                href={farmer.listing_path || `/buy-carbon-credit/${farmer.id}`}
                className="w-full inline-flex items-center justify-center bg-emerald-600 text-white py-3 rounded-xl font-semibold hover:bg-emerald-700 transition-colors group-hover:shadow-lg group-hover:shadow-emerald-200"
            >
                View Seller Page →
            </Link>
        </div>
    );
};

export default FarmerCard;
