"use client";

const headers = [
  { label: "Attitude", className: "py-3 px-16 font-semibold text-2xl rounded-2xl text-black bg-[#ff99b7]" },
  { label: "Emerging", className:  "py-3 px-16 font-semibold text-2xl rounded-2xl text-black bg-[#ff99b7]" },
  { label: "Developing", className:  "py-3 px-16 font-semibold text-2xl rounded-2xl text-black bg-[#ff99b7]" },
  { label: "Established", className:  "py-3 px-16 font-semibold text-2xl rounded-2xl text-black bg-[#ff99b7]" },
];

export default function AttitudeGrid() {
  return (
    <div className="min-h-screen bg-gray-100 py-6 px-4">
<div className="max-w-6xl mx-auto my-4 bg-white rounded-2xl p-2 shadow space-y-6">
        <div className="flex justify-center space-x-4">
          {["Student Engagement", "Attitude", "Academics", "Exams"].map((tab) => (
            <button
              key={tab}
              className={`px-3 py-2 rounded-2xl text-xl font-medium ${
                tab === "Attitude"
                  ? "bg-[#FF3366] text-white"
                  : " text-[#6B7280]"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
        </div>
      <div className="max-w-6xl mx-auto bg-white rounded-2xl p-6 shadow space-y-6">
        {/* Navigation Tabs */}
        

        {/* Title */}
        <h2 className="text-xl p-4 bg-[#B0B0B0]/8 font-semibold text-[#3366ff]">Attitude</h2>

        {/* Table */}
       <div className="overflow-x-auto">
      <div className="flex justify-between gap-4">
        {headers.map((item, index) => (
          <h2 key={index} className={item.className}>
            {item.label}
          </h2>
        ))}
      </div>
    </div>

        {/* Continue Button */}
        <div className="text-center">
          <button className="bg-[#3366ff] text-white px-6 sm:px-8 py-2 rounded-full  transition">
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}
