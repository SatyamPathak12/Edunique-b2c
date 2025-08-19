"use client";

import { useState } from "react";
import { FiPlus } from "react-icons/fi";

const CompulsoryCourses = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("");
  const languages = ["Hindi", "French", "German", "Sanskrit"];

  return (
    <div className="space-y-6">
      <h2 className="text-lg md:text-lg font-semibold text-[#2e2e2e] mb-2">4 Compulsory Courses Included</h2>
      <p className="text-sm md:text-md space-y-2 text-black mb-6">
        Included courses: <br/> <span className="font-medium  text-md  max-w-[20ch] md:text-lg my-2 text-[#2e2e2e]">Mathematics, English, Science and SST</span>
      </p>

      <div className="flex items-center  gap-3 my-4 text-sm md:text-lg text-[#2e2e2e] font-normal">
       <div className="bg-white rounded-full p-2"> <FiPlus  /> </div>
        <span>Add additional language courses</span>
      </div>

      <div className=" mt-6  w-[80%] flex flex-col gap-3">
        {languages.map((lang) => (
          <label
            key={lang}
            className={`flex items-center justify-between px-4 md:px-6 py-2 rounded-full border ${
              selectedLanguage === lang
                ? "border-blue-500 bg-blue-50"
                : "border-[#b0b0b0] bg-[#faf9fb]"
            } cursor-pointer`}
          >
            <span className="text-sm">{lang}</span>
            <input
              type="radio"
              name="language"
              value={lang}
              checked={selectedLanguage === lang}
              onChange={() => setSelectedLanguage(lang)}
               className="appearance-none w-4 h-4 rounded-full border-3 border-[#6b7280] checked:border-blue-500  transition"
            />
          </label>
        ))}
      </div>
    </div>
  );
};

export default CompulsoryCourses;
