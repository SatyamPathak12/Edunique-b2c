'use client';

import React, { useState } from 'react';

export default function NumberInput() {
  const [value, setValue] = useState(0);

  const increment = () => setValue((prev) => prev + 1);
  const decrement = () => setValue((prev) => Math.max(1, prev - 1));

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(e.target.value) || 1;
    setValue(Math.max(1, newValue));
  };

  return (
    <div className="relative ">
      <div className="flex items-center justify-between rounded-full border border-[#d5d5d5] bg-[#f9fafb] px-3 py-1 focus-within:ring-2 focus-within:ring-blue-400 transition-shadow duration-200">
        {/* Input Field */}
        <input
          type="number"
          min="1"
          value={value}
          onChange={handleChange}
          placeholder="00"
          className="w-full text-center bg-transparent border-none outline-none text-lg font-semibold text-black appearance-none"
          style={{ MozAppearance: 'textfield' }}
        />

        {/* Arrow buttons */}
        <div className="flex flex-col items-center justify-center ml-2 ">
          <button
            onClick={increment}
            aria-label="Increase value"
            className="hover:text-blue-600 transition"
          >
            <svg className="w-4  h-4 text-[#6b7280]" fill="currentColor" viewBox="0 0 12 12">
              <path d="M6 3l3 4H3l3-4z" />
            </svg>
          </button>
          <button
            onClick={decrement}
            aria-label="Decrease value"
            className="hover:text-blue-600 transition"
          >
            <svg className="w-4 h-4 text-[#6b7280]" fill="currentColor" viewBox="0 0 12 12">
              <path d="M6 9L3 5h6l-3 4z" />
            </svg>
          </button>
        </div>
      </div>

      {/* Hide browser default spinners */}
      <style jsx>{`
        input[type='number']::-webkit-outer-spin-button,
        input[type='number']::-webkit-inner-spin-button {
          -webkit-appearance: none;
          margin: 0;
        }
      `}</style>
    </div>
  );
}
