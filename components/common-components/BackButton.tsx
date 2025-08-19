"use client"
import React from 'react'
import { FiArrowLeft } from 'react-icons/fi';

interface GoBackProps {
  Heading: string;
}

const BackButton: React.FC<GoBackProps> = ({ Heading }) => {
  const handleBackClick = () => {
    if (typeof window !== "undefined") {
      window.history.back();
    }
  };
  return (
    <div className="flex items-center gap-3 bg-white px-4 sm:px-6 py-3.5 ">
      <button
        onClick={handleBackClick}
        className="p-1.5 text-black hover:text-[#FF3366] focus:outline-none rounded-md"
        aria-label="Go back"
      >
        <FiArrowLeft className="w-5 h-5" />
      </button>
      <h1 className="text-xl md:text-2xl font-medium text-[#FF3366]">
        {Heading}
      </h1>
    </div>
  )
}

export default BackButton;