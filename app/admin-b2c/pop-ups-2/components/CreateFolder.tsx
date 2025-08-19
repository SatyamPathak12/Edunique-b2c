'use client';

import React, { useEffect, useState } from 'react';
import { FiCheck, FiX } from 'react-icons/fi';
import Image from 'next/image';
import { BaseModal, PopupProp } from '../page';
import SearchFilter from '@/components/b2c-admin/common-component/SearchBarFilter';
import TabSwitchLight from '@/components/common-components/TabSwitchLight';

// Types
type Teacher = {
    name: string;
    course: string;
    batch: string;
    image: string;
};

type Student = {
    name: string;
    course: string;
    level: string;
    group: string;
    image: string;
};

// Dummy Data
const fileData = Array.from({ length: 5 }).map(() => ({
    name: 'File Name',
    size: '300 KB',
    icon: '/common-images/file-name.png',
}));

const teacherData: Teacher[] = Array.from({ length: 15 }).map(() => ({
    name: 'Name',
    course: 'Course Involved',
    batch: 'Batch Assigned',
    image: '/common-images/teacher.png',
}));

const studentData: Student[] = Array.from({ length: 15 }).map(() => ({
    name: 'Student Name',
    course: 'Course Name',
    level: 'Level / Grade',
    group: 'Group',
    image: '/common-images/student.png',
}));

// Tabs
const folderTabs = ['Select Files', 'Folder Details'] as const;
const departmentTabs = ['Department 1', 'Department 2', 'Department 3', 'Department 4', 'Department 5'];
const categoryTabs = ['Category 1', 'Category 2', 'Category 3', 'Category 4', 'Category 5'];
const innerTabs = ['Teacher', 'Students'] as const;

const filters = [
    { id: '1', label: 'Filter 1' },
    { id: '2', label: 'Filter 2' },
];

const CreateFolderModal: React.FC<PopupProp> = ({ isOpen, onClose }) => {
    const [activeTab, setActiveTab] = useState<typeof folderTabs[number]>('Select Files');
    const [activeInnerTab, setActiveInnerTab] = useState<typeof innerTabs[number]>('Teacher');
    const [activeDeptTab, setActiveDeptTab] = useState<string>(departmentTabs[0]);
    const [activeCatTab, setActiveCatTab] = useState<string>(categoryTabs[0]);

    const isTeacherTab = activeInnerTab === 'Teacher';
    const [selectedTeacherIndices, setSelectedTeacherIndices] = useState<number[]>([]);
    const [selectedStudentIndices, setSelectedStudentIndices] = useState<number[]>([]);

    const toggleSelection = (index: number) => {
        if (isTeacherTab) {
            setSelectedTeacherIndices((prev) =>
                prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
            );
        } else {
            setSelectedStudentIndices((prev) =>
                prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
            );
        }
    };

    const selectedIndices = isTeacherTab ? selectedTeacherIndices : selectedStudentIndices;
    // Reset tabs when switching innerTab
    useEffect(() => {
        if (isTeacherTab) {
            setActiveDeptTab(departmentTabs[0]);
        } else {
            setActiveCatTab(categoryTabs[0]);
        }
    }, [activeInnerTab]);

    return (
        <BaseModal isOpen={isOpen} onClose={onClose} maxWidth="max-w-4xl">
            <div className="relative bg-white p-6 rounded-2xl max-h-[95vh] overflow-y-auto custom-scrollbar w-full">
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 p-1.5 rounded-full hover:bg-gray-100"
                >
                    <FiX size={18} />
                </button>

                <h2 className="text-base font-semibold mb-4">Create Folder</h2>

                {/* Top Tabs */}
                <div className="flex border-b mb-4 text-sm font-medium gap-6">
                    {folderTabs.map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`pb-2 ${activeTab === tab
                                ? 'text-[#3366FF] border-b-2 border-[#3366FF]'
                                : 'text-gray-500'
                                }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                {activeTab === 'Select Files' ? (
                    <>
                        {/* Select Files */}
                        <div className="flex items-center justify-between mb-4 gap-4">
                            <SearchFilter filters={filters} />
                        </div>

                        <div className="space-y-3 max-h-[20rem] overflow-y-auto pr-2 custom-peach-scrollbar">
                            {fileData.map((file, i) => (
                                <div
                                    key={i}
                                    className="flex items-center justify-between bg-gray-50 rounded-2xl p-3"
                                >
                                    <div className="flex items-center gap-4">
                                        <Image src={file.icon} alt={file.name} width={40} height={40} />
                                        <div>
                                            <p className="font-medium text-sm">{file.name}</p>
                                            <p className="text-xs text-gray-500">{file.size}</p>
                                        </div>
                                    </div>
                                    <input type="radio" name="file" />
                                </div>
                            ))}
                        </div>

                        {/* Footer */}
                        <div className="mt-6 flex justify-end gap-4">
                            <button
                                onClick={onClose}
                                className="rounded-full px-6 py-2 border border-gray-300 text-sm font-medium text-gray-500 hover:bg-gray-100"
                            >
                                Cancel
                            </button>
                            <button className="rounded-full px-6 py-2 bg-[#3366ff] text-white text-sm font-medium hover:bg-blue-600"
                            onClick={() => setActiveTab("Folder Details")}>
                                Continue
                            </button>
                        </div>
                    </>
                ) : (
                    <>
                        {/* Folder Details */}
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Enter Folder Name</label>
                                <input
                                    type="text"
                                    placeholder="Text"
                                    className="w-full border rounded-full px-4 py-2 bg-gray-100 text-sm"
                                />
                            </div>

                            {/* Search + Filter */}
                            <div className="flex items-center justify-between gap-4">
                                <SearchFilter filters={filters} />
                            </div>

                            {/* Department / Category Tabs */}
                            {isTeacherTab ? (
                                <TabSwitchLight
                                    tabs={departmentTabs}
                                    selected={activeDeptTab}
                                    onChange={setActiveDeptTab}
                                />
                            ) : (
                                <TabSwitchLight
                                    tabs={categoryTabs}
                                    selected={activeCatTab}
                                    onChange={setActiveCatTab}
                                />
                            )}

                            {/* Inner Tabs */}
                            <div className="flex gap-6 text-sm font-medium border-b mt-4">
                                {innerTabs.map((tab) => (
                                    <button
                                        key={tab}
                                        onClick={() => setActiveInnerTab(tab)}
                                        className={`pb-2 ${activeInnerTab === tab
                                            ? 'text-[#3366FF] border-b-2 border-[#3366FF]'
                                            : 'text-gray-500'
                                            }`}
                                    >
                                        {tab}
                                    </button>
                                ))}
                            </div>

                            {/* Dynamic List */}
                            <div className="space-y-3 max-h-[15rem] overflow-y-auto pr-2 custom-peach-scrollbar">
                                {(isTeacherTab ? teacherData : studentData).map((person, i) => {
                                    const isChecked = selectedIndices.includes(i);

                                    return (
                                        <div
                                            key={i}
                                            className="flex items-center justify-between bg-gray-50 rounded-2xl py-1 px-2 cursor-pointer border border-gray-200 hover:shadow-sm transition"
                                            onClick={() => toggleSelection(i)}
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
                                                    <p className="font-medium text-sm">{person.name}</p>
                                                    <p className="text-xs text-gray-500">{person.course}</p>
                                                    {isTeacherTab ? (
                                                        <p className="text-xs text-gray-500">{(person as Teacher).batch}</p>
                                                    ) : (
                                                        <p className="text-xs text-gray-500">
                                                            {(person as Student).level} / {(person as Student).group}
                                                        </p>
                                                    )}
                                                </div>
                                            </div>

                                            <div
                                                className={`w-5 h-5 flex items-center justify-center rounded-full border-2  ${isChecked ? "bg-[#3366ff] border-[#3366ff]" : "bg-transparent border-gray-500"
                                                    }`}
                                            >
                                                {isChecked && (
                                                    <FiCheck
                                                        size={14}
                                                        strokeWidth={3}
                                                        className="text-white font-bold"
                                                    />
                                                )}
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Footer */}
                        <div className="mt-6 flex justify-end gap-4">
                            <button
                                onClick={onClose}
                                className="rounded-full px-6 py-2 border border-gray-300 text-sm font-medium text-gray-500 hover:bg-gray-100"
                            >
                                Cancel
                            </button>
                            <button className="rounded-full px-6 py-2 bg-[#3366ff] text-white text-sm font-medium hover:bg-blue-600"
                                onClick={onClose}>
                                Create
                            </button>
                        </div>
                    </>
                )}
            </div>
        </BaseModal>
    );
};

export default CreateFolderModal;
