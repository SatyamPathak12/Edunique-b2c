'use client';

import { FC, useState } from 'react';
import { FiChevronDown, FiChevronUp, FiFilter, FiSearch } from 'react-icons/fi';

interface Filter {
    id: string;
    label: string;
}

interface FiltersProps {
    filters: Filter[];
}

const Filters: FC<FiltersProps> = ({ filters }) => {
    const [openFilterId, setOpenFilterId] = useState<string | null>(null);

    const toggleDropdown = (id: string) => {
        setOpenFilterId(openFilterId === id ? null : id);
    };

    return (
        <div className="flex flex-wrap sm:flex-nowrap items-center gap-3 relative z-10">
            {filters.map((filter) => {
                const isOpen = openFilterId === filter.id;
                return (
                    <div key={filter.id} className="relative z-10 inline-block text-left">
                        {/* Button + border container */}
                        <div className={`bg-[#f9fafb]  ${isOpen ? "rounded-t-xl border-t border-x" : "rounded-xl border"} box-border`}>
                            <button
                                onClick={() => toggleDropdown(filter.id)}
                                className="text-xs  sm:text-sm px-3 py-2 cursor-pointer flex items-center flex-nowrap gap-2 w-full whitespace-nowrap"
                            >
                                {filter.label}
                                {isOpen ? <FiChevronUp size={14} /> : <FiChevronDown size={14} />}
                            </button>
                        </div>

                        {/* Dropdown */}
                        {isOpen && (
                            <div className="absolute left-0 top-full w-full bg-[#f9fafb] border-x border-b rounded-b-xl z-10 box-border">
                                <button className="whitespace-nowrap justify-center py-2 w-full flex items-center text-gray-500 cursor-pointer">
                                    Option 1
                                </button>
                                <button className="whitespace-nowrap justify-center py-2 w-full flex items-center text-gray-500 cursor-pointer">
                                    Option 2
                                </button>
                            </div>
                        )}
                    </div>
                );
            })}
        </div>
    );
};

// Main SearchFilter component
interface SearchFilterProps {
    filters: Filter[];
    bg?: string;
    placeHolder?: string;
}

const SearchFilterIcon: FC<SearchFilterProps> = ({ filters, bg, placeHolder }) => {
    return (
        <div className={`w-full text-black flex flex-col sm:flex-row gap-4 items-center py-2 rounded-xl ${bg ? bg : "bg-white"
            }`}>
            {/* Search Input */}
            <div className="flex gap-2 w-full">
                <div className="flex items-center w-full sm:w-auto flex-grow border-2 border-[#6B7280] rounded-full px-3 py-2 focus-within:ring-2 focus-within:ring-gray-400">
                    <FiSearch size={20} className="text-black mr-2" />
                    <input
                        type="text"
                        placeholder={placeHolder || "Search"}
                        className="w-full bg-transparent outline-none text-sm"
                    />
                </div>
                <button
                    className="p-2.5 rounded-xl hover:bg-gray-100 text-[#FF3366] flex-shrink-0 transition-colors"
                    aria-label="Open filters"
                >
                    <FiFilter className="w-5 h-5" strokeWidth={2} />
                </button>
            </div>
            {/* Filters */}
            <Filters filters={filters} />
        </div>
    );
};

export default SearchFilterIcon;
