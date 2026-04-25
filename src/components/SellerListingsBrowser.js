"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import FarmerCard from "@/components/FarmerCard";
import FilterBar from "@/components/FilterBar";

export default function SellerListingsBrowser({
  sectionId = "seller-listings",
  eyebrow = "Seller list",
  title = "Browse Carbon Credit Sellers",
  description = "Use the filters below to quickly find sellers by geography, then open each separate seller page for full location details.",
  headingAs = "h2",
  className = "",
}) {
  const HeadingTag = headingAs;

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

  useEffect(() => {
    setPage(1);
  }, [filters.country, filters.state, filters.district]);

  useEffect(() => {
    const fetchFarmers = async () => {
      setIsLoading(true);
      setError("");

      try {
        const params = new URLSearchParams({
          page: String(page),
        });

        if (filters.country) params.set("country", filters.country);
        if (filters.state) params.set("state", filters.state);
        if (filters.district) params.set("district", filters.district);

        const res = await fetch(`/api/farmers?${params.toString()}`);
        if (!res.ok) throw new Error("Failed to fetch farmers data");

        const result = await res.json();
        setFarmersData(result.data || []);
        setPagination({
          totalPages: result.totalPages || 1,
          total: result.total || 0,
        });
      } catch (err) {
        console.error(err);
        setError("Could not load available carbon credits. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchFarmers();
  }, [page, filters.country, filters.state, filters.district]);

  const clearFilters = () => {
    setFilters({ country: "", state: "", district: "" });
  };

  const filterCount = [filters.country, filters.state, filters.district].filter(Boolean).length;
  const visibleCredits = farmersData.reduce(
    (total, farmer) => total + Number(farmer.carbon_credits || 0),
    0
  );

  const downloadCSV = () => {
    if (farmersData.length === 0) return;

    const headers = ["Name", "Email", "Phone", "Country", "State", "District", "Acres", "Credits"];
    const rows = farmersData.map((farmer) => [
      farmer.name,
      farmer.email,
      farmer.phone,
      farmer.country,
      farmer.state,
      farmer.district,
      farmer.land_acres,
      farmer.carbon_credits,
    ]);

    const csvContent =
      "data:text/csv;charset=utf-8," +
      headers.join(",") +
      "\n" +
      rows.map((row) => row.join(",")).join("\n");

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `carbon_credit_sellers_page_${page}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id={sectionId}
      className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 scroll-mt-24 ${className}`}
      aria-labelledby={`${sectionId}-title`}
    >
      <div className="flex flex-col xl:flex-row xl:items-end justify-between gap-6 mb-8">
        <div className="max-w-3xl">
          <p className="text-emerald-700 font-bold text-sm uppercase tracking-widest mb-3">{eyebrow}</p>
          <HeadingTag id={`${sectionId}-title`} className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {title}
          </HeadingTag>
          <p className="text-gray-600 text-lg leading-relaxed">{description}</p>
        </div>
        <button
          onClick={downloadCSV}
          disabled={farmersData.length === 0}
          className="flex items-center justify-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-xl font-bold hover:bg-gray-800 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
          Download Visible Sellers
        </button>
      </div>

      <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-4 mb-8">
        <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
          <p className="text-sm font-semibold text-gray-500 mb-2">Matching sellers</p>
          <p className="text-3xl font-extrabold text-gray-900">{pagination.total.toLocaleString("en-IN")}</p>
        </div>
        <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
          <p className="text-sm font-semibold text-gray-500 mb-2">Visible this page</p>
          <p className="text-3xl font-extrabold text-gray-900">{farmersData.length.toLocaleString("en-IN")}</p>
        </div>
        <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
          <p className="text-sm font-semibold text-gray-500 mb-2">Visible credits</p>
          <p className="text-3xl font-extrabold text-gray-900">{visibleCredits.toLocaleString("en-IN")}</p>
        </div>
        <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
          <p className="text-sm font-semibold text-gray-500 mb-2">States available</p>
          <p className="text-3xl font-extrabold text-gray-900">{filterOptions.states.length.toLocaleString("en-IN")}</p>
        </div>
      </div>

      <FilterBar filters={filters} setFilters={setFilters} uniqueValues={filterOptions} />

      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div className="flex flex-wrap gap-2">
          {filterCount > 0 ? (
            <>
              {filters.country && (
                <span className="px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-sm font-medium">
                  Country: {filters.country}
                </span>
              )}
              {filters.state && (
                <span className="px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-sm font-medium">
                  State: {filters.state}
                </span>
              )}
              {filters.district && (
                <span className="px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-sm font-medium">
                  District: {filters.district}
                </span>
              )}
            </>
          ) : (
            <p className="text-sm text-gray-500">Showing all available sellers across the current marketplace dataset.</p>
          )}
        </div>

        {filterCount > 0 && (
          <button
            onClick={clearFilters}
            className="text-emerald-700 font-bold hover:text-emerald-800 transition-colors"
          >
            Clear all filters
          </button>
        )}
      </div>

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
            {farmersData.length > 0 ? (
              farmersData.map((farmer) => <FarmerCard key={farmer.id || farmer.email} farmer={farmer} />)
            ) : (
              <div className="col-span-full text-center py-20 bg-gray-50 rounded-3xl border-2 border-dashed border-gray-200">
                <p className="text-gray-600 text-lg mb-3">No sellers match the current filters.</p>
                <p className="text-gray-500 mb-4">
                  Try a broader state or district filter, or contact the team for a manual shortlist.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                  <button
                    onClick={clearFilters}
                    className="px-5 py-3 bg-emerald-600 text-white rounded-xl font-bold hover:bg-emerald-700 transition-all"
                  >
                    Reset Filters
                  </button>
                  <Link
                    href="/contact"
                    className="px-5 py-3 border border-emerald-600 text-emerald-700 rounded-xl font-bold hover:bg-emerald-50 transition-all"
                  >
                    Request Buyer Support
                  </Link>
                </div>
              </div>
            )}
          </div>

          {pagination.totalPages > 1 && (
            <div className="flex justify-center items-center gap-4 py-4">
              <button
                onClick={() => setPage((currentPage) => Math.max(1, currentPage - 1))}
                disabled={page === 1}
                className="px-4 py-2 border border-gray-200 rounded-lg font-bold disabled:opacity-50 hover:bg-gray-50 transition-all"
              >
                Previous
              </button>
              <span className="text-gray-600 font-medium">
                Page {page} of {pagination.totalPages}
              </span>
              <button
                onClick={() => setPage((currentPage) => Math.min(pagination.totalPages, currentPage + 1))}
                disabled={page === pagination.totalPages}
                className="px-4 py-2 border border-gray-200 rounded-lg font-bold disabled:opacity-50 hover:bg-gray-50 transition-all"
              >
                Next
              </button>
            </div>
          )}
        </>
      )}
    </section>
  );
}
