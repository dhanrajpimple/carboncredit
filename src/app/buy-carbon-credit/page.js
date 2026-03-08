"use client";

import { useState, useMemo } from "react";
import FarmerCard from "@/components/FarmerCard";
import FilterBar from "@/components/FilterBar";
import farmersData from "@/data/farmers.json";

// SEO is handled differently in Client Components using metadata file or export
// But since this is a client component, we'll use a separate file for metadata or just ignore for now and focus on functionality.
// Actually, in App Router, you can have a layout.js or a separate page.js that's server-side for metadata.
// I'll create a layout.js for this folder to handle SEO.

export default function BuyCarbonCreditPage() {
    const [filters, setFilters] = useState({
        country: "",
        state: "",
        district: "",
    });

    const uniqueValues = useMemo(() => {
        return {
            countries: [...new Set(farmersData.map((f) => f.country))],
            states: [...new Set(farmersData.map((f) => f.state))],
            districts: [...new Set(farmersData.map((f) => f.district))],
        };
    }, []);

    const filteredFarmers = useMemo(() => {
        return farmersData.filter((farmer) => {
            const countryMatch = filters.country === "" || farmer.country === filters.country;
            const stateMatch = filters.state === "" || farmer.state === filters.state;
            const districtMatch = filters.district === "" || farmer.district === filters.district;
            return countryMatch && stateMatch && districtMatch;
        });
    }, [filters]);

    return (
        <div className="bg-white min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <header className="mb-12">
                    <h1 className="text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">
                        Buy Carbon Credits from Farmers
                    </h1>
                    <p className="text-lg text-gray-600 max-w-2xl leading-relaxed">
                        Browse available carbon credit listings from farmers around the world. Every credit listed is verified and directly supports land restoration.
                    </p>
                </header>

                <FilterBar
                    filters={filters}
                    setFilters={setFilters}
                    uniqueValues={uniqueValues}
                />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredFarmers.length > 0 ? (
                        filteredFarmers.map((farmer) => (
                            <FarmerCard key={farmer.id} farmer={farmer} />
                        ))
                    ) : (
                        <div className="col-span-full text-center py-20 bg-gray-50 rounded-3xl border-2 border-dashed border-gray-200">
                            <p className="text-gray-500 text-lg">No listings found for the selected filters.</p>
                            <button
                                onClick={() => setFilters({ country: "", state: "", district: "" })}
                                className="mt-4 text-emerald-600 font-bold hover:underline"
                            >
                                Clear all filters
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
