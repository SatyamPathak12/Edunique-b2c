'use client';

import { FiSearch, FiBell, FiChevronDown } from 'react-icons/fi';
import Image from 'next/image';

type HeaderProps = {
  title: string;
  subtitle: string;
};

export default function Header({ title, subtitle }: HeaderProps) {
  return (
    <header className="flex flex-col sm:flex-row justify-between items-center mb-8">
      <div>
        <h1 className="text-2xl font-semibold text-gray-800">{title}</h1>
        <p className="text-sm text-gray-500">{subtitle}</p>
      </div>
      <div className="flex items-center space-x-4 mt-4 sm:mt-0">
        <div className="relative">
          <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search"
            className="pl-10 pr-4 py-2 w-full sm:w-48 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
          />
        </div>
        <button className="p-2 bg-white border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-50 relative">
          <FiBell className="w-5 h-5" />
        </button>
        <div className="flex items-center space-x-2 bg-white border border-gray-300 rounded-lg p-2 cursor-pointer hover:bg-gray-50">
          <Image
            src="/teacher/dashboard/pedagogy.png"
            alt="Robert Allen"
            width={32}
            height={32}
            className="rounded-full"
          />
          <div>
            <p className="text-sm font-medium text-gray-800">Robert Allen</p>
            <p className="text-xs text-gray-500">Teacher</p>
          </div>
          <FiChevronDown className="w-4 h-4 text-gray-500" />
        </div>
      </div>
    </header>
  );
}
