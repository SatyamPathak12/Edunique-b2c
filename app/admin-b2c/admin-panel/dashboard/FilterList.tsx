import React, { useState } from 'react';
import { HiChevronDown, HiChevronUp } from 'react-icons/hi';

const FilterList = () => {
	const [openIndex, setOpenIndex] = useState<number | null>(null);

	const toggleDropdown = (index: number) => {
		setOpenIndex((prev) => (prev === index ? null : index));
	};

	return (
		<div className="flex flex-wrap items-start gap-4.5">
			{Array(4)
				.fill(null)
				.map((_, index) => {
					const isOpen = openIndex === index;

					return (
						<div
							key={index}
							onClick={() => toggleDropdown(index)}
							className="px-2 py-1.5 border border-gray-300 rounded-xl cursor-pointer bg-[#F9FAFB] text-sm text-black tracking-tight font-normal "
						>
							{/* Main Filter Header */}
							<div className="flex items-center w-full justify-between">
								<span>Filter</span>
								{isOpen ? (
									<HiChevronUp className="w-5 h-5 ml-6 text-black" />
								) : (
									<HiChevronDown className="w-5 h-5 ml-6 text-black" />
								)}
							</div>

							{/* Dropdown Options (inline) */}
							{isOpen && (
								<div className="mt-2 space-y-1">
									<div className="text-gray-500 rounded-md px-2 py-1">Option 1</div>
									<div className="text-gray-500 rounded-md px-2 py-1">Option 2</div>
								</div>
							)}
						</div>
					);
				})}
		</div>
	);
};

export default FilterList;
