'use client';

import AdminB2CWrapper from '@/components/b2c-admin/common-component/AdminB2CPageWrapper';
import BackButton from '@/components/common-components/BackButton';
import TabSwitch from '@/components/common-components/TabSwitch';
import { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import WorkingHours from './components/WorkingHours';
import TeacherSettingsForm from './components/TeacherForm';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

const filters = ['Filter 1', 'Filter 1', 'Filter 1', 'Filter 1', 'Filter 1', 'Filter 1', 'Filter 1'];


const FilterBar = () => {
    const [openFilterId, setOpenFilterId] = useState<number | null>(null);

    const toggleDropdown = (index: number) => {
        setOpenFilterId((prev) => (prev === index ? null : index));
    };

    return (
        <div className="flex border-b border-gray-300 py-4 items-center gap-2 md:gap-6 flex-wrap">
            <span className="text-base font-medium text-gray-800 w-full md:w-fit">Filters</span>
            <div className="flex gap-2 md:gap-12 items-center lg:gap-16 flex-wrap">
                {filters.map((filter, index) => {
                    const isOpen = openFilterId === index;

                    return (
                        <div key={index} className="relative bg-[#f9fafb] border border-gray-200 rounded-xl w-fit">
                            <button
                                onClick={() => toggleDropdown(index)}
                                className="text-xs sm:text-sm px-4 py-2 cursor-pointer flex items-center gap-2 w-full"
                            >
                                {filter}
                                {isOpen ? <FiChevronUp size={14} /> : <FiChevronDown size={14} />}
                            </button>

                            {isOpen && (
                                <div className=" w-full bg-[#f9fafb]  border-gray-200 rounded-b-xl z-10">
                                    <div className="px-4 py-2 text-gray-600  cursor-pointer text-sm">Option 1</div>
                                    <div className="px-4 py-2 text-gray-600  cursor-pointer text-sm">Option 2</div>
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};


const PayloadManagemnet = () => {
    const tabs = ["Working Hours", "Other Details"]
    const [selectedTab, setSelectedTab] = useState(tabs[0])
    return (
        <>
            <BackButton Heading='Payload Management' />
            <AdminB2CWrapper>
                <div className="bg-white  sm:px-6 p-4 rounded-2xl">
                    <TabSwitch tabs={tabs} selected={selectedTab} onChange={setSelectedTab} />
                    <h2 className="bg-[#f9fafb] text-[#ff3366] rounded-3xl py-3.5 text-center px-2 border border-gray-200 text-lg font-semibold">Payload Management Form</h2>
                    <FilterBar />
                    {selectedTab === "Working Hours" && (
                        <WorkingHours setSelectedTab={setSelectedTab} />
                    )}
                    {selectedTab === "Other Details" && (
                        <TeacherSettingsForm />
                    )}
                </div>
            </AdminB2CWrapper>
        </>
    )
}

export default PayloadManagemnet;