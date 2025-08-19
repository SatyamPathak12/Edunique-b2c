'use client';

import { UploadFileImage } from '@/app/admin-b2c/pop-ups-2/page';
import { FC, useState } from 'react';

const CustomNumberInput: FC<{
  value: number;
  onChange: (val: number) => void;
}> = ({ value, onChange }) => {

  return (
    <div className="relative w-20">
      <input
        type="number"
        value={value.toString().padStart(2, '0')}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full bg-[#f9fafb] text-center py-2 rounded-full border border-gray-300 text-sm no-spinner"
      />
    </div>
  );
};
interface DetailsProps {
  setSelectedTab: (tab: string) => void;
}
const TestDetails: React.FC<DetailsProps> = ({ setSelectedTab }) => {
  const handleClick = () => {
    setSelectedTab("Review");
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  const [uploadImage, setUploadImage] = useState(false);
  const [points, setPoints] = useState(0);
  const [optionCount, setOptionCount] = useState(4);
  const [correctOption, setCorrectOption] = useState('Option 1');

  const options = Array.from({ length: optionCount }, (_, i) => `Option ${i + 1}`);

  return (
    <>
      <form className="max-w-[51rem] w-full p-6 bg-white space-y-4">
        {/* Question Row */}
        <div className="grid grid-cols-1 md:grid-cols-[4fr_1fr] items-center gap-2">
          <div className="flex flex-col">
            <label className="text-sm font-medium">Question</label>
            <div className="flex items-center mt-2 gap-2">
              <span className='font-semibold'>1.</span>
              <input
                type="text"
                placeholder="Question"
                className="flex-1 px-4 py-2 bg-[#f9fafb] rounded-full border border-gray-300 text-sm"
              />
            </div>
          </div>
          <div className="flex md:justify-end items-center gap-2">
            <span className="text-md font-normal">Points</span>
            <CustomNumberInput value={points} onChange={setPoints} />
          </div>
        </div>

        {/* Category */}
        <div className="flex flex-wrap gap-1">
          <label className="text-[15px] whitespace-nowrap font-medium mr-2">Question Category</label>
          <div className="flex flex-wrap gap-4 text-[15px]">
            <label className="flex items-center whitespace-nowrap gap-2 cursor-pointer">
              <input
                type="radio"
                name="category"
                className="peer hidden"
              />
              <span className="w-5 h-5 rounded-full border-3 border-gray-400 peer-checked:border-[#3366ff] peer-checked:bg-[#3366ff] relative">
                <span className="absolute inset-[4px] bg-white rounded-full"></span>
              </span>
              Brain Development
            </label>

            <label className="flex items-center whitespace-nowrap gap-2 cursor-pointer">
              <input
                type="radio"
                name="category"
                className="peer hidden"
              />
              <span className="w-5 h-5 rounded-full border-3 border-gray-400 peer-checked:border-[#3366ff] peer-checked:bg-[#3366ff] relative">
                <span className="absolute inset-[4px] bg-white rounded-full"></span>
              </span>
              Academic Skills
            </label>

            <label className="flex items-center whitespace-nowrap gap-2 cursor-pointer">
              <input
                type="radio"
                name="category"
                className="peer hidden"
              />
              <span className="w-5 h-5 rounded-full border-3 border-gray-400 peer-checked:border-[#3366ff] peer-checked:bg-[#3366ff] relative">
                <span className="absolute inset-[4px] bg-white rounded-full"></span>
              </span>
              Personality Development
            </label>
          </div>

        </div>

        {/* Answer Type */}
        <div className="flex flex-wrap gap-1">
          <label className="text-[15px] whitespace-nowrap font-medium mr-2">Answer Type: </label>
          <div className="flex flex-wrap gap-4 text-[15px]">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="category"
                className="peer hidden"
              />
              <span className="w-5 h-5 rounded-full border-3 border-gray-400 peer-checked:border-[#3366ff] peer-checked:bg-[#3366ff] relative">
                <span className="absolute inset-[4px] bg-white rounded-full"></span>
              </span>
              MCQ
            </label>

            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="category"
                className="peer hidden"
              />
              <span className="w-5 h-5 rounded-full border-3 border-gray-400 peer-checked:border-[#3366ff] peer-checked:bg-[#3366ff] relative">
                <span className="absolute inset-[4px] bg-white rounded-full"></span>
              </span>
              Subjective
            </label>


          </div>
        </div>

        {/* Option Count */}
        <div className="flex items-center justify-between">
          <label className="text-lg font-medium">Options</label>
          <CustomNumberInput value={optionCount} onChange={setOptionCount} />
        </div>

        {/* Option Inputs */}
        {options.map((idx) => (
          <div key={idx}>
            <label className="text-md">{idx}:</label>
            <input
              type="text"
              placeholder="Question"
              className="w-full mt-1 px-4 py-2 bg-[#f9fafb] rounded-full border border-gray-300 text-sm"
            />
          </div>
        ))}

        {/* Add Tips */}
        <div>
          <label className="text-sm">Add Tips:</label>
          <input
            type="text"
            placeholder="Tip"
            className="w-full mt-1 px-4 py-2 rounded-full bg-[#f9fafb] border border-gray-300 text-sm"
          />
        </div>

        {/* Correct Option Selector */}
        <div className="flex items-center gap-4 flex-wrap">
          {options.map((opt) => (
            <label key={opt} className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="correct"
                className="peer hidden"
                checked={correctOption === opt}
                onChange={() => setCorrectOption(opt)}
              />
              <span className="w-5 h-5 rounded-full border-2 border-gray-400 peer-checked:border-[#3366ff] peer-checked:bg-[#3366ff] relative">
                <span className="absolute inset-[4px] bg-white rounded-full"></span>
              </span>
              <span className="text-base font-medium">{opt}</span>
            </label>
          ))}
        </div>


        {/* File Upload */}
        <div>
          <button className="block w-max px-4 py-3.5 bg-[#FFCC00] rounded-full text-white font-medium text-sm cursor-pointer  hover:opacity-90"
          type="button"
            onClick={() => setUploadImage(true)}>
            Upload Image / File
            <input type="file" hidden />
          </button>
          <div className="my-2 pb-1 border-b-2 border-gray-400   ">
            <p className="text-xs text-center py-3.5 px-3 rounded-2xl inline-block bg-[#f9fafb]">Image/file name.extension</p>
          </div>
        </div>
      </form>
      <form className="max-w-[51rem] w-full p-6 bg-white space-y-4">
        {/* Question Row */}
        <div className="grid grid-cols-1 md:grid-cols-[4fr_1fr] items-center gap-2">
          <div className="flex flex-col">
            <label className="text-sm font-medium">Question</label>
            <div className="flex items-center mt-2 gap-2">
              <span className='font-semibold'>1.</span>
              <input
                type="text"
                placeholder="Question"
                className="flex-1 px-4 py-2 bg-[#f9fafb] rounded-full border border-gray-300 text-sm"
              />
            </div>
          </div>
          <div className="flex md:justify-end items-center gap-2">
            <span className="text-md font-normal">Points</span>
            <CustomNumberInput value={points} onChange={setPoints} />
          </div>
        </div>

        {/* Category */}
        <div className="flex flex-wrap gap-1">
          <label className="text-[15px] whitespace-nowrap font-medium mr-2">Question Category</label>
          <div className="flex flex-wrap gap-4 text-[15px]">
            <label className="flex items-center whitespace-nowrap gap-2 cursor-pointer">
              <input
                type="radio"
                name="category"
                className="peer hidden"
              />
              <span className="w-5 h-5 rounded-full border-3 border-gray-400 peer-checked:border-[#3366ff] peer-checked:bg-[#3366ff] relative">
                <span className="absolute inset-[4px] bg-white rounded-full"></span>
              </span>
              Brain Development
            </label>

            <label className="flex items-center whitespace-nowrap gap-2 cursor-pointer">
              <input
                type="radio"
                name="category"
                className="peer hidden"
              />
              <span className="w-5 h-5 rounded-full border-3 border-gray-400 peer-checked:border-[#3366ff] peer-checked:bg-[#3366ff] relative">
                <span className="absolute inset-[4px] bg-white rounded-full"></span>
              </span>
              Academic Skills
            </label>

            <label className="flex items-center whitespace-nowrap gap-2 cursor-pointer">
              <input
                type="radio"
                name="category"
                className="peer hidden"
              />
              <span className="w-5 h-5 rounded-full border-3 border-gray-400 peer-checked:border-[#3366ff] peer-checked:bg-[#3366ff] relative">
                <span className="absolute inset-[4px] bg-white rounded-full"></span>
              </span>
              Personality Development
            </label>
          </div>

        </div>

        {/* Answer Type */}
        <div className="flex flex-wrap gap-1">
          <label className="text-[15px] whitespace-nowrap font-medium mr-2">Answer Type: </label>
          <div className="flex flex-wrap gap-4 text-[15px]">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="category"
                className="peer hidden"
              />
              <span className="w-5 h-5 rounded-full border-3 border-gray-400 peer-checked:border-[#3366ff] peer-checked:bg-[#3366ff] relative">
                <span className="absolute inset-[4px] bg-white rounded-full"></span>
              </span>
              MCQ
            </label>

            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="category"
                className="peer hidden"
              />
              <span className="w-5 h-5 rounded-full border-3 border-gray-400 peer-checked:border-[#3366ff] peer-checked:bg-[#3366ff] relative">
                <span className="absolute inset-[4px] bg-white rounded-full"></span>
              </span>
              Subjective
            </label>


          </div>
        </div>

        {/* Option Count */}
        <div className="flex items-center justify-between">
          <label className="text-sm font-medium">Options</label>
          <CustomNumberInput value={optionCount} onChange={setOptionCount} />
        </div>

        {/* Option Inputs */}
        {options.map((idx) => (
          <div key={idx}>
            <label className="text-md">{idx}:</label>
            <input
              type="text"
              placeholder="Question"
              className="w-full mt-1 px-4 py-2 bg-[#f9fafb] rounded-full border border-gray-300 text-sm"
            />
          </div>
        ))}

        {/* Add Tips */}
        <div>
          <label className="text-sm">Add Tips:</label>
          <input
            type="text"
            placeholder="Tip"
            className="w-full mt-1 px-4 py-2 rounded-full bg-[#f9fafb] border border-gray-300 text-sm"
          />
        </div>

        {/* Correct Option Selector */}
        <div className="flex items-center gap-4 md:gap-10 mt-6 flex-wrap">
          {options.map((opt) => (
            <label key={opt} className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="correct"
                className="peer hidden"
                checked={correctOption === opt}
                onChange={() => setCorrectOption(opt)}
              />
              <span className="w-5 h-5 rounded-full border-2 border-gray-400 peer-checked:border-[#3366ff] peer-checked:bg-[#3366ff] relative">
                <span className="absolute inset-[4px] bg-white rounded-full"></span>
              </span>
              <span className="text-lg font-normal">{opt}</span>
            </label>
          ))}
        </div>


        {/* File Upload */}
        <div>
          <button className="block w-max px-4 py-3.5 bg-[#FFCC00] rounded-full text-white font-medium text-sm cursor-pointer  hover:opacity-90"
          type="button"
            onClick={() => setUploadImage(true)}>
            Upload Image / File
            <input type="file" hidden />
          </button>
          <div className="my-2 pb-1 border-b-2 border-gray-400   ">
            <p className="text-xs text-center py-3.5 px-3 rounded-2xl inline-block bg-[#f9fafb]">Image/file name.extension</p>
          </div>
        </div>

        <div className="flex justify-center md:justify-end gap-2 mt-4 md:pr-18">

          <button className="rounded-[42px] text-base font-medium bg-[#3366ff] w-full max-w-36 text-white cursor-pointer py-2.5 cursor-pointer"
            onClick={handleClick}>
            Review
          </button>
        </div>

      </form>

      <UploadFileImage
        onClose={() => setUploadImage(false)}
        isOpen={uploadImage}
      />
    </>
  );
};

export default TestDetails;
