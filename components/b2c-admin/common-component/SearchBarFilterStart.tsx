'use client';

import { FC, useState } from 'react';
import { FiChevronDown, FiChevronUp, FiSearch } from 'react-icons/fi';

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
    <div className="flex flex-wrap items-start gap-3 relative z-50">
      {filters.map((filter) => {
        const isOpen = openFilterId === filter.id;
        return (
          <div key={filter.id} className="relative bg-[#f9fafb] border rounded-xl w-fit">
            <button
              onClick={() => toggleDropdown(filter.id)}
              className="text-xs sm:text-sm px-3 py-2 cursor-pointer flex items-center gap-2 w-full"
            >
              {filter.label}
              {isOpen ? <FiChevronUp size={14} /> : <FiChevronDown size={14} />}
            </button>

            {isOpen && (
              <div className="text-xs sm:text-sm">
                <div className="px-4 py-2 text-gray-500 cursor-pointer">Option 1</div>
                <div className="px-4 py-2 text-gray-500 cursor-pointer">Option 2</div>
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
}

const SearchFilterStart: FC<SearchFilterProps> = ({ filters }) => {
  return (
    <div className="w-full bg-white text-black flex flex-col sm:flex-row gap-4 items-start py-2 rounded-xl">
      {/* Search Input */}
      <div className="flex items-center w-full sm:w-auto flex-grow border-2 border-[#6B7280] rounded-full px-3 py-2 focus-within:ring-2 focus-within:ring-gray-400">
        <FiSearch size={20} className="text-black mr-2" />
        <input
          type="text"
          placeholder="Search"
          className="w-full bg-transparent outline-none text-sm"
        />
      </div>

      {/* Filters */}
      <Filters filters={filters} />
    </div>
  );
};

export default SearchFilterStart;
