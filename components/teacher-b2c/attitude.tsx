import React from "react";

// Main App component for the Attitude Assessment
export default function StudentAtitude() {
  // Data structure for the attitude assessment categories and their options
  const attitudeCategories = [
    {
      id: "respect",
      attitude: "1. Respect",
      options: {
        emerging: ["rarely respectful", "sometimes respectful"],
        developing: ["generally respectful"],
        established: ["consistently respectful"],
      },
    },
    {
      id: "cooperation",
      attitude: "2. Cooperation",
      options: {
        emerging: ["Rarely cooperative", "Sometimes cooperative"],
        developing: ["generally cooperative"],
        established: ["consistently cooperative"],
      },
    },
    {
      id: "interest-in-learning",
      attitude: "3. Demonstrates an interest in learning",
      options: {
        emerging: [
          "rarely shows interest in learning",
          "sometimes shows interest in learning",
        ],
        developing: ["generally shows interest in learning"],
        established: ["consistently shows interest in learning"],
      },
    },
    {
      id: "motivation",
      attitude: "4. Motivation",
      options: {
        emerging: ["Attends due to consequences for non school attendance"],
        developing: ["extrinsic; at school for the marks"],
        established: ["intrinsic; learning for learning sake"],
      },
    },
    {
      id: "persistence",
      attitude: "5. Persistence and resiliently",
      options: {
        emerging: [
          "rarely perseveres when faced with a challenge",
          "sometimes perseveres when faced with a challenge",
        ],
        developing: ["generally perseveres when faced with a challenge"],
        established: ["consistently perseveres when faced with a challenge"],
      },
    },
  ];

  return (
    // Main container with responsive padding and background matching the overall design

    <div className="bg-white p-4 mb-4 rounded-2xl ">
      {/* Header for the assessment */}
      <div className="py-3 px-4 bg-[#B0B0B014] rounded-2xl mb-6">
        <h1 className="text-xl sm:text-2xl font-semibold text-[#3366FF]">Attitude</h1>
      </div>

      {/* Grid Container for the Assessment Table */}
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 mb-8">
        {/* Column Headers */}
        <div className="bg-[#FF99B7] text-black font-bold p-3 text-center rounded-2xl shadow-sm">
          Attitude
        </div>
        <div className="bg-[#FF99B7] text-black font-bold p-3 text-center rounded-2xl shadow-sm">
          Emerging
        </div>
        <div className="bg-[#FF99B7] text-black font-bold p-3 text-center rounded-2xl shadow-sm">
          Developing
        </div>
        <div className="bg-[#FF99B7] text-black font-bold p-3 text-center rounded-2xl shadow-sm">
          Established
        </div>

        {/* Iterate through each attitude category to create rows */}
        {attitudeCategories.map((category) => (
          <React.Fragment key={category.id}>
            {/* Attitude Column */}
            <div className="bg-[#f9fafb] sm:py-14 sm:px-4 max-h-36  text-sm sm:text-lg text-center rounded-xl shadow-sm font-semibold text-black">
              {category.attitude}
            </div>

            {/* Emerging Options Column */}
            <div className="bg-[#f9fafb] p-2 sm:p-4 rounded-xl shadow-sm flex flex-col justify-items-start  space-y-2">
              {category.options.emerging.map((option, index) => (
                <label
                  key={index}
                  className="inline-flex items-center gap-2 text-black text-sm sm:text-md cursor-pointer"
                >
                  <input
                    type="radio"
                    className="appearance-none w-5 h-5 rounded-full border-[3px] border-[#6b7280] "
                    name={`attitude-${category.id}`} // Unique name for each row's radio group
                    value={option}
                  />
                  <span className="ml-2">{option}</span>
                </label>
              ))}
            </div>

            {/* Developing Options Column */}
            <div className="bg-[#f9fafb]  p-4 rounded-xl shadow-sm flex flex-col justify-start space-y-2">
              {category.options.developing.map((option, index) => (
                <label
                  key={index}
                  className="inline-flex items-center gap-2 text-black text-sm sm:text-md  cursor-pointer"
                >
                  <input
                    type="radio"
                    className="appearance-none w-5 h-5 rounded-full border-[4px] border-[#6b7280] checked:bg-[#6b7280] checked:border-[#6b7280]" // Added checked styles
                    name={`attitude-${category.id}`}
                    value={option}
                  />
                  <span>{option}</span>
                </label>
              ))}
            </div>

            {/* Established Options Column */}
            <div className="bg-[#f9fafb]  p-4 rounded-xl shadow-sm flex flex-col justify-start space-y-2">
              {category.options.established.map((option, index) => (
                <label
                  key={index}
                  className="inline-flex items-center gap-2  text-black text-sm sm:text-md cursor-pointer"
                >
                  <input
                    type="radio"
                    className="appearance-none w-5 h-5 rounded-full border-[4px] border-[#6b7280] checked:bg-[#6b7280] checked:border-[#6b7280]" // Added checked styles
                    name={`attitude-${category.id}`}
                    value={option}
                  />
                  <span>{option}</span>
                </label>
              ))}
            </div>
          </React.Fragment>
        ))}
      </div>

      {/* Continue Button */}
      <div className="flex justify-center my-2">
        <button className="bg-[#3366ff] hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full shadow-md transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
          Continue
        </button>
      </div>
    </div>
  );
}
