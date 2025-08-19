'use client';

import React, { useState } from 'react';
import { FiChevronDown, FiChevronUp, FiX } from 'react-icons/fi';
import { BaseModal, PopupProp } from '../page';

const options = ['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5'];

const AssignPenaltyModal: React.FC<PopupProp> = ({ isOpen, onClose }) => {
	const [isOpenDropdown, setIsOpenDropdown] = useState(false);
	const [selected, setSelected] = useState('Option 1');

	const toggleDropdown = () => setIsOpenDropdown((prev) => !prev);

	const handleSelect = (value: string) => {
		setSelected(value);
		setIsOpenDropdown(false);
	};

	return (
		<BaseModal isOpen={isOpen} onClose={onClose} maxWidth="max-w-sm">
			<div className="relative bg-white rounded-2xl p-6 w-full">
				{/* Close Button */}
				<button
					onClick={onClose}
					className="absolute top-4 right-4 p-1.5 rounded-full hover:bg-gray-100"
				>
					<FiX size={18} />
				</button>

				{/* Title */}
				<h2 className="text-base font-semibold mb-6">Assign Penalty</h2>

				{/* Info */}
				<p className="text-sm text-gray-500 mb-1">Teacher Name</p>
				<p className="text-sm text-gray-500 mb-4">Date</p>

				{/* Select Reason */}
				<label className="text-sm font-medium mb-1 block">Select Reason</label>

				{/* Custom Dropdown Box */}
				<div
					className="w-full border rounded-xl px-4 py-2 text-sm bg-[#F9FAFB] font-medium cursor-pointer"
					onClick={toggleDropdown}
				>
					{/* Always show "Late Login" on the left */}
					<div className="flex justify-between items-center">
						<span className="text-black">Late Login</span>
						{isOpenDropdown ? (
							<FiChevronUp size={16} className="text-gray-500" />
						) : (
							<FiChevronDown size={16} className="text-gray-500" />
						)}
					</div>

					{/* Dropdown Options — shown inside box (no absolute) */}
					{isOpenDropdown && (
						<div className="mt-3 space-y-1">
							{options.map((opt) => (
								<div
									key={opt}
									onClick={() => handleSelect(opt)}
									className={`py-2 rounded-full text-sm text-center cursor-pointer font-medium ${
										selected === opt
											? 'bg-[#AEE5FF] text-blue-800'
											: 'hover:bg-gray-100 text-gray-700'
									}`}
								>
									{opt}
								</div>
							))}
						</div>
					)}
				</div>

				{/* Confirm Button */}
				<div className="flex justify-center mt-6">
					<button
                    onClick={onClose}
                     className="px-6 bg-[#90E1B6] mx-auto text-black py-2.5 rounded-full font-medium cursor-pointer">
						Confirm
					</button>
				</div>
			</div>
		</BaseModal>
	);
};

export default AssignPenaltyModal;
