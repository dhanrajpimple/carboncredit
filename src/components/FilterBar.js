const FilterBar = ({ filters, setFilters, uniqueValues }) => {
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFilters((prev) => ({ ...prev, [name]: value }));
    };

    return (
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                    <label htmlFor="country" className="block text-sm font-semibold text-gray-700 mb-2">
                        Country
                    </label>
                    <select
                        id="country"
                        name="country"
                        value={filters.country}
                        onChange={handleChange}
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all cursor-pointer"
                    >
                        <option value="">All Countries</option>
                        {uniqueValues.countries.map((c) => (
                            <option key={c} value={c}>{c}</option>
                        ))}
                    </select>
                </div>

                <div>
                    <label htmlFor="state" className="block text-sm font-semibold text-gray-700 mb-2">
                        State
                    </label>
                    <select
                        id="state"
                        name="state"
                        value={filters.state}
                        onChange={handleChange}
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all cursor-pointer"
                    >
                        <option value="">All States</option>
                        {uniqueValues.states.map((s) => (
                            <option key={s} value={s}>{s}</option>
                        ))}
                    </select>
                </div>

                <div>
                    <label htmlFor="district" className="block text-sm font-semibold text-gray-700 mb-2">
                        District
                    </label>
                    <select
                        id="district"
                        name="district"
                        value={filters.district}
                        onChange={handleChange}
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all cursor-pointer"
                    >
                        <option value="">All Districts</option>
                        {uniqueValues.districts.map((d) => (
                            <option key={d} value={d}>{d}</option>
                        ))}
                    </select>
                </div>
            </div>
        </div>
    );
};

export default FilterBar;
