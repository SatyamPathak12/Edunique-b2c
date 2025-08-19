'use client';

import Link from 'next/link';
import { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

export default function TeacherSettingsForm() {
  return (
    <div className="space-y-6 max-w-lg mt-4">
      {/* Note Textarea */}
      <div className="space-y-2">
        <label className="text-sm font-medium text-black">Note for the Teacher</label>
        <textarea
          placeholder="Text"
          className="w-full h-28 bg-[#f9fafb] text-black text-sm px-4 py-2 rounded-xl border border-gray-200 focus:outline-none resize-none"
        />
      </div>

      {/* Training Period */}
      <Dropdown label="Training Period" options={['Option 1', 'Option 2']} />

      {/* Payment Per Hour */}
      <Dropdown label="Payment Per Hour" options={['Option 1', 'Option 2']} />

      {/* Probation Period */}
      <Dropdown label="Probation Period" options={['Option 1', 'Option 2']} />

      {/* Example Question */}
      <Dropdown label="Example Question" options={['Option 1', 'Option 2']} />

      {/* Save Button */}
      <Link href="/admin-b2c/admin-panel/teacher-profile">
        <button className="bg-[#3366ff] text-white text-sm font-medium py-2 px-8 rounded-full hover:opacity-90">
          Save
        </button>
      </Link>
    </div>
  );
}


interface DropdownProps {
  label: string;
  options: string[];
}

 function Dropdown({ label, options }: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(options[0]);

  const toggleOpen = () => setIsOpen(!isOpen);

  const handleSelect = (option: string) => {
    setSelected(option);
    setIsOpen(false);
  };

  return (
    <div className="space-y-2">
      <label className="text-sm font-medium text-black">{label}</label>

      <div
        className={`bg-[#f9fafb] border border-gray-200 rounded-2xl text-sm text-black cursor-pointer transition-all`}
        onClick={toggleOpen}
      >
        <div className="flex items-center justify-between px-4 py-2">
          <span>{selected}</span>
          {isOpen ? (
            <FaChevronUp className="text-gray-500 text-xs" />
          ) : (
            <FaChevronDown className="text-gray-500 text-xs" />
          )}
        </div>

        {isOpen && (
          <div className="flex flex-col">
            {options.map((option, index) => (
              <div
                key={index}
                onClick={() => handleSelect(option)}
                className={`px-4 py-2 text-center text-gray-600 text-sm ${
                  option === selected ? 'text-blue-600  rounded-2xl' : ''
                }`}
              >
                {option}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
