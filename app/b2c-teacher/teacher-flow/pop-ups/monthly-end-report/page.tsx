import React from 'react';
import { FiCalendar } from 'react-icons/fi';

export const MonthEndReportPopup = () => {
  return (
    // This is the exact container div you provided
    <div className="bg-[#FFFFFF] font-Poppins rounded-2xl border mx-auto my-20 shadow-xl p-3 w-[400px] max-w-full relative">
      <div className="p-5">
        <h2 className="text-xl font-bold text-center mb-8">
          Month End Report
        </h2>

        <div className="space-y-6">
          {/* From Date Input */}
          <div>
            <label className="block text-sm font-semibold text-gray-800 mb-2">
              From Date:
            </label>
            <div className="flex items-center justify-between w-full bg-gray-100 border border-gray-200 rounded-full px-4 py-2">
              <span className="text-gray-400">Text</span>
              <FiCalendar className="w-5 h-5 text-black" />
            </div>
          </div>

          {/* To Date Input */}
          <div>
            <label className="block text-sm font-semibold text-black mb-2">
              To Date:
            </label>
            <div className="flex items-center justify-between w-full bg-[#F9FAFB] border border-gray-200 rounded-full px-4 py-2">
              <span className="text-gray-400">Text</span>
              <FiCalendar className="w-5 h-5 text-black" />
            </div>
          </div>
        </div>

        {/* Generate Button */}
        <div className="mt-8 flex justify-center">
          <button className="bg-[#3366FF] text-white font-semibold text-base px-12 py-3 rounded-full hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
            Generate
          </button>
        </div>
      </div>
    </div>
  );
};

export default MonthEndReportPopup;