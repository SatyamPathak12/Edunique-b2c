"use client";

import React, { useState } from "react";

const TestQuestionnaireStep: React.FC = () => {
  const questionData = [
    {
      qNumber: 1,
      qTextPlaceholder: "Question",
      options: ["Question", "Question", "Question", "Question"],
      correctOptionLabel: "Option 4", // For radio button selection
      numOptionsValue: "4",
      pointsValue: "00",
    },
    {
      qNumber: 2,
      qTextPlaceholder: "Question",
      options: ["Question", "Question", "Question", "Question"],
      correctOptionLabel: "Option 2", // Example different correct option
      numOptionsValue: "4",
      pointsValue: "00",
    },
  ];

  return (
    <div className=" max-w-3xl mx-auto space-y-8">
      {questionData.map((data, qIndex) => (
        <div
          key={`question-${qIndex}`}
          className={`space-y-4 ${qIndex > 0 ? "pt-6 border-t border-gray-700" : ""
            }`}
        >
          {/* Question Input Section */}
          <div>
            <label
              htmlFor={`question_text_${data.qNumber}`}
              className="block text-base sm:text-lg text-black mb-1.5"
            >
              Question
            </label>
            <div className="flex gap-1.5 items-center">
              <p className="text-base sm:text-lg text-black">{data.qNumber}.</p>
              <input
                type="text"
                id={`question_text_${data.qNumber}`}
                placeholder={data.qTextPlaceholder}
                className="w-full px-4 py-2.5 bg-[#F9FAFB] border border-[#D5D5D5] rounded-full focus:ring-1 focus:ring-blue-500 focus:border-blue-500 outline-none text-sm"
              />
            </div>
          </div>

          {/* Options Section */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <p className="text-base sm:text-lg text-black font-normal">Options</p>
              <NumberSpinnerInput />
            </div>

            <div className="space-y-3 sm:space-y-6">
              {data.options.map((optPlaceholder, index) => (
                <div key={`q${data.qNumber}_opt${index}`}>
                  <label
                    htmlFor={`q${data.qNumber}_option_${index + 1}`}
                    className="block text-sm sm:text-base  text-black mb-1"
                  >
                    Option {index + 1}:
                  </label>
                  <input
                    type="text"
                    id={`q${data.qNumber}_option_${index + 1}`}
                    placeholder={optPlaceholder}
                    className="w-full px-4 py-2.5 bg-[#F9FAFB] border border-[#D5D5D5] rounded-full focus:ring-1 focus:ring-blue-500 focus:border-blue-500 outline-none text-sm"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Correct Option Selection & Points */}
          <div className="mt-4 sm:mt-6 flex gap-3 flex-wrap space-y-4 md:space-y-0 flex-grow items-center justify-between w-full">

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 flex-grow">

              {data.options.map((_, index) => (
                <label
                  key={`q${data.qNumber}_radio_opt${index + 1}`}
                  className="flex items-center space-x-1.5 cursor-pointer"
                >
                  <input
                    type="radio"
                    name={`correct_option_q${data.qNumber}`}
                    className="form-radio h-4 w-4 rounded-full text-blue-600 border-[#6b7280] border-[2px] focus:ring-blue-500"
                  />
                  <span className="text-sm sm:text-base text-black">
                    Option {index + 1}
                  </span>
                </label>
              ))}
            </div>
            <NumberSpinnerInput label="Points" />
          </div>
        </div>
      ))}
    </div>
  );
};
export default TestQuestionnaireStep;

// Helper component for the number input with up/down arrows
const NumberSpinnerInput: React.FC<{ label?: string; }> = ({ label }) => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(prev => (prev < 99 ? prev + 1 : 99));
  const decrement = () => setCount(prev => (prev > 0 ? prev - 1 : 0));
  return (
    <div className="flex items-center space-x-1.5">
      {label && (
        <span className="text-sm sm:text-lg text-black">{label}</span>
      )}
      <div className="relative inline-flex items-center justify-center bg-[#F9FAFB] border border-[#E5E7EB] rounded-full  w-[90px] h-[42px]">
        <span className="text-lg text-black font-sans">
          {String(count).padStart(2, '0')}
        </span>

        {/* Buttons Container */}
        <div className="absolute right-3 flex flex-col h-full">
          {/* Up Button */}
          <button onClick={increment} className="flex-grow flex items-end pb-0.5 text-[#6B7280] hover:text-black">
            <svg width="12" height="7" viewBox="0 0 12 7" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 0.5L11.1962 6.5H0.803848L6 0.5Z" />
            </svg>
          </button>
          {/* Down Button */}
          <button onClick={decrement} className="flex-grow flex items-start pt-0.5 text-[#6B7280] hover:text-black">
            <svg width="12" height="7" viewBox="0 0 12 7" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 6.5L0.803847 0.5L11.1962 0.5L6 6.5Z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};