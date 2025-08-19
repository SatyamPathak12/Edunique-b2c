"use client"
import { FC, useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

interface option {
    id: string;
    label: string;
}

interface OptionProps {
    filters: option[];
}

const DropdownBtnXl: FC<OptionProps> = ({ filters }) => {
    const [openFilterId, setOpenFilterId] = useState<string | null>(null);

    const toggleDropdown = (id: string) => {
        setOpenFilterId(openFilterId === id ? null : id);
    };

    return (
        <div className="flex w-full flex-wrap items-center gap-3 relative z-50">
            {filters.map((filter) => {
                const isOpen = openFilterId === filter.id;
                return (
                    <div key={filter.id} className="relative w-full text-left">
                        {/* Button + border container */}
                        <div className={`bg-[#f9fafb] px-3 flex justify-between gap-3 items-center ${isOpen ? "rounded-t-xl border-t border-x" : "rounded-xl border"} box-border`}>
                            <button
                                onClick={() => toggleDropdown(filter.id)}
                                className="text-xs  sm:text-sm  py-2 cursor-pointer flex items-center flex-nowrap gap-2 w-full whitespace-nowrap"
                            >
                                {filter.label}
                                
                            </button>
                            <button className="" onClick={() => toggleDropdown(filter.id)}>
                            {isOpen ? <FiChevronUp className="text-black" size={20} /> : <FiChevronDown className="text-black" size={20} />}
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

export default DropdownBtnXl;