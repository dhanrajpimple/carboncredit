"use client";

import { useEffect, useState } from "react";

export default function EnterpriseRequestsBrowser({ initialRequests = [], initialTotal = 0, initialUnavailable = false }) {
  const [requests, setRequests] = useState(initialRequests);
  const [filters, setFilters] = useState({ state: "", district: "" });
  const [page, setPage] = useState(1);
  const [pagination, setPagination] = useState({ totalPages: Math.max(1, Math.ceil(initialTotal / 12)), total: initialTotal });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(initialUnavailable ? "Requirements are temporarily unavailable. Please try again later." : "");

  const updateFilters = (nextFilters) => {
    setIsLoading(true);
    setError("");
    setPage(1);
    setFilters(nextFilters);
  };

  useEffect(() => {
    const controller = new AbortController();
    const fetchRequests = async () => {

      try {
        const params = new URLSearchParams({ page: String(page) });
        if (filters.state) params.set("state", filters.state);
        if (filters.district) params.set("district", filters.district);

        const response = await fetch(`/api/enterprise-requests?${params.toString()}`, { signal: controller.signal });
        const result = await response.json();
        if (!response.ok) throw new Error(result.error || "Failed to fetch requirements");

        setRequests(result.data || []);
        setError("");
        setPagination({ totalPages: result.totalPages || 1, total: result.total || 0 });
      } catch (err) {
        if (controller.signal.aborted) return;
        console.error(err);
        setError("Could not load company and NGO farmer requirements. Please try again later.");
      } finally {
        if (!controller.signal.aborted) setIsLoading(false);
      }
    };

    fetchRequests();
    return () => controller.abort();
  }, [page, filters.state, filters.district]);

  const clearFilters = () => {
    if (filters.state || filters.district) updateFilters({ state: "", district: "" });
  };

  return (
    <section id="company-requirements" className="bg-gray-50 py-16 scroll-mt-24" aria-labelledby="company-requirements-title">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col gap-6 xl:flex-row xl:items-end xl:justify-between">
          <div className="max-w-3xl">
            <p className="mb-3 text-sm font-bold uppercase tracking-widest text-emerald-700">Required farmers list</p>
            <h2 id="company-requirements-title" className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">Companies and NGOs Looking for Farmers</h2>
            <p className="text-lg leading-relaxed text-gray-600">Farmers can see which organizations need land partners in their state or district for tree plantation, CSR, agroforestry, and carbon project planning.</p>
          </div>
          <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
            <p className="mb-2 text-sm font-semibold text-gray-500">Active requirements</p>
            <p className="text-3xl font-extrabold text-gray-900">{pagination.total.toLocaleString("en-IN")}</p>
          </div>
        </div>

        <div className="mb-8 grid gap-4 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm md:grid-cols-[1fr_1fr_auto]">
          <input aria-label="Filter by state" className="rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500" placeholder="Filter by state" value={filters.state} onChange={(event) => updateFilters({ ...filters, state: event.target.value })} />
          <input aria-label="Filter by district" className="rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500" placeholder="Filter by district" value={filters.district} onChange={(event) => updateFilters({ ...filters, district: event.target.value })} />
          <button onClick={clearFilters} className="rounded-xl border border-emerald-600 px-5 py-3 font-bold text-emerald-700 hover:bg-emerald-50">Clear</button>
        </div>

        {isLoading ? (
          <div className="flex justify-center py-20"><div className="h-12 w-12 animate-spin rounded-full border-b-2 border-t-2 border-emerald-600"></div></div>
        ) : error ? (
          <div className="rounded-3xl border border-red-200 bg-red-50 py-16 text-center font-medium text-red-600">{error}</div>
        ) : requests.length === 0 ? (
          <div className="rounded-3xl border-2 border-dashed border-gray-200 bg-white py-16 text-center">
            <p className="mb-3 text-lg text-gray-700">No active company or NGO farmer requirements match these filters.</p>
            <p className="text-gray-500">Submit the form above to list a new location requirement.</p>
          </div>
        ) : (
          <>
            <div className="mb-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {requests.map((request) => (
                <article key={request.id} className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
                  <div className="mb-4 flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{request.organization_name}</h3>
                      <p className="font-medium text-emerald-700">{request.organization_type}</p>
                    </div>
                    <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-700">Active</span>
                  </div>
                  <dl className="mb-5 space-y-3 text-sm text-gray-600">
                    <div className="flex justify-between gap-4"><dt className="font-semibold text-gray-900">Location</dt><dd className="text-right">{request.location_label}</dd></div>
                    <div className="flex justify-between gap-4"><dt className="font-semibold text-gray-900">Land needed</dt><dd>{Number(request.target_acres || 0).toLocaleString("en-IN")} acres</dd></div>
                    <div className="flex justify-between gap-4"><dt className="font-semibold text-gray-900">Farmers</dt><dd>{request.farmer_count ? `${request.farmer_count}+` : "Open"}</dd></div>
                    <div className="flex justify-between gap-4"><dt className="font-semibold text-gray-900">Timeline</dt><dd className="text-right">{request.planting_timeline || "Planning"}</dd></div>
                  </dl>
                  {request.project_goal && <p className="mb-5 rounded-xl bg-gray-50 p-4 text-sm leading-relaxed text-gray-700">{request.project_goal}</p>}
                  <a href={`mailto:${request.email}`} className="inline-flex w-full items-center justify-center rounded-xl bg-gray-900 px-5 py-3 font-bold text-white hover:bg-gray-800">Contact Requirement Owner</a>
                </article>
              ))}
            </div>

            {pagination.totalPages > 1 && (
              <div className="flex items-center justify-center gap-4">
                <button onClick={() => setPage((current) => Math.max(1, current - 1))} disabled={page === 1} className="rounded-lg border border-gray-200 px-4 py-2 font-bold transition-all hover:bg-white disabled:opacity-50">Previous</button>
                <span className="font-medium text-gray-600">Page {page} of {pagination.totalPages}</span>
                <button onClick={() => setPage((current) => Math.min(pagination.totalPages, current + 1))} disabled={page === pagination.totalPages} className="rounded-lg border border-gray-200 px-4 py-2 font-bold transition-all hover:bg-white disabled:opacity-50">Next</button>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
}
