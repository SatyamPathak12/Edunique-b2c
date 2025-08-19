"use client"
import { useRouter } from 'next/navigation';
import React from 'react'
import { FiArrowLeft } from 'react-icons/fi';

interface GoBackProps {
  GoBackHeading: string;
  toLink?:string;
}

const GoBack: React.FC<GoBackProps> = ({ GoBackHeading, toLink }) => {
  const Router = useRouter();
  const handleBackClick = () => {
    if(toLink){
      Router.push(toLink);

    } else if (typeof window !== "undefined") {
      window.history.back();
    }
  };
  return (
   <div className="flex font-main items-center gap-3 bg-white px-4 sm:px-6 py-3.5 ">
        <button
          onClick={handleBackClick}
          className="p-1.5 text-black hover:text-[#FF3366] focus:outline-none rounded-md"
          aria-label="Go back"
        >
          <FiArrowLeft className="w-5 h-5" />
        </button>
        <h1 className="text-lg md:text-xl font-medium text-[#FF3366]">
          {GoBackHeading}
        </h1>
      </div>
  )
}

export default GoBack