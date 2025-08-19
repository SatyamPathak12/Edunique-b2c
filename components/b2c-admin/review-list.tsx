'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import ClassTab from './class-tab';
import SearchFilter from './common-component/SearchBarFilter';
import TabSwitchLight from '../common-components/TabSwitchLight';
import Link from 'next/link';
type CardData = {
  id: number;
  name: string;
  course: string;

  group: string;
  image: string;
};

const teachers = Array.from({ length: 10 }, (_, i) => ({
  id: i + 6,
  name: 'Name',
  course: 'Course',
  group: 'Batch Assigned',
  image: '/teacher-avatar-4.png', // Use same image or add logic to vary if needed
}));

export const sampleData: CardData[] = [...teachers];

const filters = [
  {
    id: "f1", label: "Filter 1"
  },
  {
    id: "f2", label: "Filter 2"
  },
  {
    id: "f3", label: "Filter 3"
  }
];

const ReviewList = () => {

  const tab = ["Department 1", "Department 2", "Department 3", "Department 4", "Department 5",]
  const [activeTab, setActiveTab] = useState(tab[0]);



  return (
    <div className="bg-white rounded-2xl p-4">

      <SearchFilter filters={filters} />

      <TabSwitchLight tabs={tab} selected={activeTab} onChange={setActiveTab} />
      <div className="mb-4 sm:grid-cols-2 gap-4 custom-scrollbar-thin  max-h-screen overflow-y-auto">
        {/* Cards */}
        <div className="flex flex-col gap-2 mr-2">
          {sampleData.map((item, index) => {
            const isEven = index % 2 === 0;
            const linkHref = isEven ? `/admin-b2c/admin-panel/request-teach-more` : `/admin-b2c/admin-panel/request-drop-course`;

            return (
              <Link key={item.id} href={linkHref} passHref>
                <div className="flex items-center border border-gray-300 gap-4 bg-[#f3f4f6] rounded-2xl px-2 py-1 cursor-pointer">
                  <div className="w-20 h-20 rounded-xl relative overflow-hidden">
                    <Image src={item.image} alt={item.name} fill className="object-cover" />
                  </div>
                  <div className="flex-1 flex flex-col justify-between">
                    <div className="font-semibold text-base">{item.name}</div>
                    <div className="text-sm font-medium text-[#FF3366]">{item.course}</div>
                    <div className="text-xs text-gray-500">{item.group}</div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ReviewList;
