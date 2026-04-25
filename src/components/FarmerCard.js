"use client";

import Link from "next/link";

const FarmerCard = ({ farmer }) => {
    return (
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start mb-4">
                <div>
                    <h3 className="text-xl font-bold text-gray-900">{farmer.name}</h3>
                    <p className="text-emerald-600 font-medium">Verified Farmer</p>
                </div>
                <div className="bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full text-sm font-semibold">
                    {farmer.carbon_credits} Tons CO₂
                </div>
            </div>

            <div className="space-y-3 mb-6">
                <div className="flex items-center text-gray-600">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
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
                <p className="text-sm font-semibold text-gray-500 mb-1">Seller page focus</p>
                <p className="text-gray-700 text-sm leading-relaxed">
                    Open the separate seller page to clearly see where this seller is located and then contact them from there.
                </p>
            </div>

            <Link
                href={farmer.listing_path || `/buy-carbon-credit/${farmer.id}`}
                className="w-full inline-flex items-center justify-center bg-emerald-600 text-white py-3 rounded-xl font-semibold hover:bg-emerald-700 transition-colors"
            >
                View Seller Page
            </Link>
        </div>
    );
};

export default FarmerCard;
