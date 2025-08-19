'use client';
import { useState } from 'react';
import Image from 'next/image';
import { BaseModal, PopupProp } from '../page';
import { FiX } from 'react-icons/fi';
import TabSwitchLight from '@/components/common-components/TabSwitchLight';
import SearchFilter from '@/components/b2c-admin/common-component/SearchBarFilter';

type Role = 'Teacher' | 'Student';

interface PersonCard {
    name: string;
    course: string;
    batch: string;
    group: string;
    image: string;
}

const ManageAccess: React.FC<PopupProp> = ({
    isOpen,
    onClose,
}) => {
    const tabs = ["Department 1", "Department 2","Department 3", "Department 4", "Department 5"]
    const studentTabs = ["category 1", "category 2","category 3", "category 4", "category 5"]
    const [activeTab, setActiveTab] = useState<Role>('Teacher');
    const [selectedTab, setSelectedTab] = useState(tabs[0]);
    const [selectedTabStudent, setSelectedTabStudent] = useState(studentTabs[0]);

    // Generate mock data using Array.from
    const data: Record<Role, PersonCard[]> = {
        Teacher: Array.from({ length: 6 }, (_, i) => ({
            name: `Name`,
            course: 'Course Involved',
            batch: 'Batch Assigned',
            image: '/common-images/teacher.png', 
            group: "",
        })),
        Student: Array.from({ length: 6 }, (_, i) => ({
            name: `Student Name`,
            course: 'Course Name',
            batch: 'Level Grade',
            image: '/common-images/student.png',
            group: "Group",
        })),
    };
    const filters = [
    { id: 'f1', label: 'Filter 1' },
    { id: 'f2', label: 'Filter 2' },
    ]
    return (
        <BaseModal isOpen={isOpen} onClose={onClose} maxWidth="max-w-3xl">
            <div className="px-4">
                {/* Tab Switch */}
                <div className="flex  justify-between pt-4">
                    <h2 className="semibold">Manage Access</h2>
                    <button
                    onClick={onClose}
                    className="p-1.5 bg-[#F9FAFB] rounded-full hover:bg-gray-200"
                >
                    <FiX />
                </button>
                </div>
                <div className="flex gap-6 mb-4 text-sm font-medium">
                    {(['Teacher', 'Student'] as Role[]).map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`pb-1 border-b-2 transition ${activeTab === tab
                                    ? 'text-[#3366ff] border-[#3366ff]'
                                    : 'text-gray-500 border-transparent hover:text-[#3366ff]'
                                }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>
                    {activeTab === "Teacher" && (
                        <TabSwitchLight tabs={tabs} selected={selectedTab} onChange={setSelectedTab}/>
                    )}
                    {activeTab === "Student" && (
                        <TabSwitchLight tabs={studentTabs} selected={selectedTabStudent} onChange={setSelectedTabStudent}/>
                    )}
                    <SearchFilter filters={filters} />
                {/* Cards Grid */}
                <div className="grid grid-cols-1 max-h-[50vh] overflow-y-auto custom-peach-scrollbar pr-2 pb-2 gap-4">
                    {data[activeTab].map((person, i) => (
                        <div
                            key={i}
                            className="flex items-center justify-between bg-gray-50 border rounded-2xl px-2 py-1"
                        >
                            <div className="flex items-center gap-4">
                                <Image
                                    src={person.image}
                                    alt={person.name}
                                    width={75}
                                    height={75}
                                    className="rounded-2xl object-cover"
                                />
                                <div>
                                    <p className={`${activeTab === "Teacher" ? "font-semibold" : ""} text-sm`}>{person.name}</p>
                                    <p className="text-xs text-gray-500">{person.course}</p>
                                    <p className="text-xs text-gray-500">{person.batch}</p>
                                    {activeTab === "Student" && (
                                        <p className="text-xs text-gray-500">{person.group}</p>
                                    )}
                                </div>
                            </div>
                            <div className="w-5 h-5 border-2 border-[#5a6982] rounded-full" />
                        </div>
                    ))}
                </div>
                <div className="flex justify-end items-center my-4 px-2 gap-2 md:gap-4">
                    <button className="px-4 py-2.5 bg-[#f9fafb] border text-gray-600 rounded-full font-medium text-sm"
                    onClick={onClose}>Cancel</button>
                    <button className="px-4 py-2.5 bg-[#3366ff] text-white rounded-full font-medium text-sm"
                    onClick={onClose}>Apply</button>
                </div>
            </div>
        </ BaseModal>
    );
};

export default ManageAccess;
