'use client';

import BlueBtn from '@/components/b2c-admin/ui/BlueBtn';
import GrayBtn from '@/components/b2c-admin/ui/GrayBtn';
import Link from 'next/link';
import { FC } from 'react';

interface TabProps {
  setSelectedTab: (tab: string) => void;
}

const CustomNumberInput: FC<{
  label: string;
  value: number;
  onChange: (value: number) => void;
}> = ({ label, value, onChange }) => {

  return (
    <div className="flex flex-col items-center gap-1 text-sm">
      <label className="text-xs font-medium text-gray-700">{label}</label>
      <div className="relative">
        <input
          type="number"
          value={value.toString().padStart(2, '0')}
          onChange={(e) => onChange(Number(e.target.value))}
          className="w-16 text-center bg-gray-100 py-2 rounded-full border border-gray-300  text-sm"
        />
        {/* Custom Arrows */}
      </div>
    </div>
  );
};

const CreateTest: React.FC<TabProps> = ({ setSelectedTab }) => {
  const handleClick = () => {
    setSelectedTab("DMIT Test Questionnaire");
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <form className="max-w-lg mx-auto w-full space-y-6 py-2 md:py-4 px-2">
      {/* Test Name */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Test Name
        </label>
        <input
          type="text"
          placeholder="Text"
          className="w-full px-4 bg-gray-100 py-2 rounded-full border border-gray-300 text-sm"
        />
      </div>

      {/* Description */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Description
        </label>
        <textarea
          placeholder="Text"
          rows={8}
          className="w-full px-4 py-2 bg-gray-100 rounded-xl border border-gray-300 text-sm resize-none"
        />
      </div>

      {/* Duration & Points */}
      <div>
        <p className="text-sm font-medium text-gray-800 mb-2">
          Duration & Point
        </p>
        <div className="grid grid-cols-4 gap-2">
          <CustomNumberInput label="Hours" value={0} onChange={() => { }} />
          <CustomNumberInput label="Minutes" value={0} onChange={() => { }} />
          <CustomNumberInput label="Total Points" value={0} onChange={() => { }} />
          <CustomNumberInput label="Pass Points" value={0} onChange={() => { }} />
        </div>
        <div className="flex justify-center gap-4 my-8">
          <Link href={"/admin-b2c/admin-panel/admin-dmit-test"}>
            <GrayBtn title='Cancel' />
          </Link>
          <button className="rounded-[42px] text-lg font-semibold bg-[#3366ff] text-white px-2.5  py-2 md:py-4 cursor-pointer inline-block"
          onClick={handleClick}>
            Continue
          </button>
        </div>
      </div>
    </form>
  );
};

export default CreateTest;
