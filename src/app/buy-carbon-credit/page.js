"use client";

import { useState, useMemo, useEffect } from "react";
import FarmerCard from "@/components/FarmerCard";
import FilterBar from "@/components/FilterBar";

export default function BuyCarbonCreditPage() {
    const [farmersData, setFarmersData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState("");
    
    const [filters, setFilters] = useState({
        country: "",
        state: "",
        district: "",
    });

    useEffect(() => {
        const fetchFarmers = async () => {
            try {
                const res = await fetch("/api/farmers");
                if (!res.ok) throw new Error("Failed to fetch farmers data");
                const data = await res.json();
                setFarmersData(data);
            } catch (err) {
                console.error(err);
                setError("Could not load available carbon credits. Please try again later.");
            } finally {
                setIsLoading(false);
            }
        };

        fetchFarmers();
    }, []);

    const uniqueValues = useMemo(() => {
        return {
            countries: [...new Set(farmersData.map((f) => f.country))],
            states: [...new Set(farmersData.map((f) => f.state))],
            districts: [...new Set(farmersData.map((f) => f.district))],
        };
    }, [farmersData]);

    const filteredFarmers = useMemo(() => {
        return farmersData.filter((farmer) => {
            const countryMatch = filters.country === "" || farmer.country === filters.country;
            const stateMatch = filters.state === "" || farmer.state === filters.state;
            const districtMatch = filters.district === "" || farmer.district === filters.district;
            return countryMatch && stateMatch && districtMatch;
        });
    }, [filters, farmersData]);

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

                {isLoading ? (
                    <div className="flex justify-center items-center py-20">
                        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-emerald-600"></div>
                    </div>
                ) : error ? (
                    <div className="text-center py-20 bg-red-50 rounded-3xl border border-red-200 text-red-600 font-medium">
                        {error}
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredFarmers.length > 0 ? (
                            filteredFarmers.map((farmer) => (
                                <FarmerCard key={farmer.id || farmer.email} farmer={farmer} />
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
                )}
            </div>
        </div>
    );
}
