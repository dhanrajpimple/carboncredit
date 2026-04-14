"use client";

import { useState, useMemo, useEffect } from "react";
import FarmerCard from "@/components/FarmerCard";
import FilterBar from "@/components/FilterBar";

export default function BuyCarbonCreditPage() {
    const [farmersData, setFarmersData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState("");
    const [page, setPage] = useState(1);
    const [pagination, setPagination] = useState({ totalPages: 1, total: 0 });
    
    const [filters, setFilters] = useState({
        country: "",
        state: "",
        district: "",
    });

    const [filterOptions, setFilterOptions] = useState({
        countries: [],
        states: [],
        districts: [],
    });

    // Fetch filters separately as requested
    useEffect(() => {
        const fetchFilters = async () => {
            try {
                const res = await fetch("/api/farmers/filters");
                if (res.ok) {
                    const data = await res.json();
                    setFilterOptions(data);
                }
            } catch (err) {
                console.error("Error fetching filters:", err);
            }
        };
        fetchFilters();
    }, []);

    // Fetch farmers with pagination
    useEffect(() => {
        const fetchFarmers = async () => {
            setIsLoading(true);
            try {
                const res = await fetch(`/api/farmers?page=${page}`);
                if (!res.ok) throw new Error("Failed to fetch farmers data");
                const result = await res.json();
                setFarmersData(result.data);
                setPagination({
                    totalPages: result.totalPages,
                    total: result.total
                });
            } catch (err) {
                console.error(err);
                setError("Could not load available carbon credits. Please try again later.");
            } finally {
                setIsLoading(false);
            }
        };

        fetchFarmers();
    }, [page]);

    const filteredFarmers = useMemo(() => {
        return farmersData.filter((farmer) => {
            const countryMatch = !filters.country || (farmer.country && farmer.country.toLowerCase() === filters.country.toLowerCase());
            const stateMatch = !filters.state || (farmer.state && farmer.state.toLowerCase() === filters.state.toLowerCase());
            const districtMatch = !filters.district || (farmer.district && farmer.district.toLowerCase() === filters.district.toLowerCase());
            return countryMatch && stateMatch && districtMatch;
        });
    }, [filters, farmersData]);

    const downloadCSV = () => {
        if (filteredFarmers.length === 0) return;
        
        const headers = ["Name", "Email", "Phone", "Country", "State", "District", "Acres", "Credits"];
        const rows = filteredFarmers.map(f => [
            f.name,
            f.email,
            f.phone,
            f.country,
            f.state,
            f.district,
            f.land_acres,
            f.carbon_credits
        ]);

        const csvContent = "data:text/csv;charset=utf-8," 
            + headers.join(",") + "\n"
            + rows.map(r => r.join(",")).join("\n");

        const encodedUri = encodeURI(csvContent);
        const link = document.createElement("a");
        link.setAttribute("href", encodedUri);
        link.setAttribute("download", `farmers_list_page_${page}.csv`);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className="bg-white min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <header className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <div className="max-w-2xl">
                        <p className="text-emerald-700 font-bold text-sm uppercase tracking-widest mb-3">India's #1 Carbon Credit Marketplace</p>
                        <h1 className="text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">
                            Buy Carbon Credits from Indian Farmers | कार्बन क्रेडिट खरीदें
                        </h1>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            Buy verified <strong>carbon credits</strong> directly from Indian farmers. Meet your <strong>ESG</strong>, <strong>CSR</strong> &amp; <strong>net-zero</strong> goals.
                        </p>
                    </div>
                    <button 
                        onClick={downloadCSV}
                        disabled={filteredFarmers.length === 0}
                        className="flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-xl font-bold hover:bg-gray-800 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                        Download CSV
                    </button>
                </header>

                <FilterBar
                    filters={filters}
                    setFilters={setFilters}
                    uniqueValues={filterOptions}
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
                    <>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
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

                        {/* Pagination Controls */}
                        {pagination.totalPages > 1 && (
                            <div className="flex justify-center items-center gap-4 py-8">
                                <button
                                    onClick={() => setPage(p => Math.max(1, p - 1))}
                                    disabled={page === 1}
                                    className="px-4 py-2 border border-gray-200 rounded-lg font-bold disabled:opacity-50 hover:bg-gray-50 transition-all"
                                >
                                    Previous
                                </button>
                                <span className="text-gray-600 font-medium">
                                    Page {page} of {pagination.totalPages}
                                </span>
                                <button
                                    onClick={() => setPage(p => Math.min(pagination.totalPages, p + 1))}
                                    disabled={page === pagination.totalPages}
                                    className="px-4 py-2 border border-gray-200 rounded-lg font-bold disabled:opacity-50 hover:bg-gray-50 transition-all"
                                >
                                    Next
                                </button>
                            </div>
                        )}
                    </>
                )}
            </div>
        </div>
    );
}
