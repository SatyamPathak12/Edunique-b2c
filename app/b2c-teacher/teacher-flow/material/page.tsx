"use client";

import React, { useState, useMemo } from "react";
import {
    FiSearch,
    FiFilter,
    FiFolder,
} from "react-icons/fi";
import Header from "@/components/layout/TeacherB2CHeader";
import Footer from "@/components/layout/Footer";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useRouter } from "next/navigation";

// --- Style Constants ---
const ACCENT_PINK = "#FF3366";
const PRIMARY_BLUE = "#3366FF";
const INPUT_BG_SEARCH = "bg-white";
const FOLDER_CARD_BG = "bg-[#F9FAFB]";

// --- Data Interfaces ---
interface SubjectTab {
    id: string;
    name: string;
}

interface FolderItem {
    id: string;
    name: string;
    fileCount: number;
    subjectId: string;
}

interface GeneralFilterOption {
    id: string;
    label: string;
}

// --- Sample Data ---
const sampleSubjectTabs: SubjectTab[] = [
    { id: "subj1", name: "Subject 1" },
    { id: "subj2", name: "Subject 2" },
    { id: "subj3", name: "Subject 3" },
    { id: "subj4", name: "Subject 4" },
    { id: "subj5", name: "Subject 5" },
];

const sampleFolders: FolderItem[] = Array.from({ length: 105 }, (_, i) => ({
    id: `f${i + 1}`,
    name: "Folder Name",
    fileCount: 100,
    subjectId: sampleSubjectTabs[i % sampleSubjectTabs.length].id,
}));

const sampleGeneralFilters: GeneralFilterOption[] = [
    { id: "filter1", label: "Filter 1" },
    { id: "filter2", label: "Filter 2" },
    { id: "filter3", label: "Filter 3" },
];

// --- Helper Components ---
const SubjectTabButton: React.FC<{
    tab: SubjectTab;
    isActive: boolean;
    onClick: () => void;
}> = ({ tab, isActive, onClick }) => (
    <button
        onClick={onClick}
        className={`px-2.5 py-1.5 sm:py-2.5 rounded-2xl text-sm sm:text-base font-medium transition-all duration-200 whitespace-nowrap
      ${isActive
                ? `bg-[${ACCENT_PINK}] text-white`
                : "bg-transparent text-[#6B7280] hover:bg-gray-100"
            }`}
    >
        {tab.name}
    </button>
);

const FolderCard: React.FC<{ folder: FolderItem }> = ({ folder }) => {
    const Router = useRouter();

    return (
        <div
            onClick={()=> Router.push("/b2c-teacher/teacher-flow/folder-name")}
            className={`${FOLDER_CARD_BG} rounded-2xl p-2 md:p-3 lg:p-4 border border-[#E5E7EB] hover:shadow-lg cursor-pointer transition-shadow duration-200 flex items-center gap-5`}
        >
            <div
                className={`bg-[#99DEFF] w-16 h-16 md:h-28 xl:w-31 md:w-28 xl:h-31 rounded-xl flex items-center justify-center flex-shrink-0`}
            >
                <FiFolder
                    className="w-8 h-8 md:h-14 xl:w-15 md:w-14 xl:h-15 text-black opacity-80"
                    strokeWidth={1.5}
                />
            </div>
            <div className="min-w-0 self-start py-2">
                <h3 className="text-base md:text-lg lg:text-xl text-black truncate font-medium">
                    {folder.name}
                </h3>
                <p className="text-[13px] text-[#6B7280] mt-1">{folder.fileCount} Files</p>
            </div>
        </div>
    );
}

// StyledSelect (for the 1st STD filter)
const StyledSelect: React.FC<{
    defaultValue?: string;
    placeholder: string;
    items: { value: string; label: string }[];
}> = ({ defaultValue, placeholder, items }) => (
    <Select defaultValue={defaultValue}>
        <SelectTrigger className="sm:flex-none flex-1 w-auto rounded-xl py-3.5 sm:py-5 bg-[#F9FAFB] text-sm sm:text-base text-black border border-[#E5E7EB]">
            <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
            {items.map(item => <SelectItem key={item.value} value={item.value}>{item.label}</SelectItem>)}
        </SelectContent>
    </Select>
);

// --- Main Page Export ---
export default function MaterialPage() {
    const [activeSubjectId, setActiveSubjectId] = useState<string>(
        sampleSubjectTabs[0]?.id || ""
    );
    const [searchTerm, setSearchTerm] = useState("");

    const filteredFoldersBySubject = useMemo(() => {
        return sampleFolders.filter(
            (folder) => folder.subjectId === activeSubjectId
        );
    }, [activeSubjectId]);

    const searchedAndFilteredFolders = useMemo(() => {
        let folders = filteredFoldersBySubject;
        if (searchTerm) {
            folders = folders.filter((folder) =>
                folder.name.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }
        return folders;
    }, [filteredFoldersBySubject, searchTerm]);
    return (
        <div className="bg-[#eeeeee] min-h-screen flex flex-col">
            <Header activeState="Material" />
            <div>
                <main className="flex-grow max-w-[94rem] mx-auto p-4 mb-4">
                    <>
                        {/* Top Section: Subject Tabs */}
                        <div className="bg-white flex items-start sm:items-center justify-center p-1 sm:py-1.5 rounded-2xl sm:mx-4 mb-4 sm:mt-2 sm:mb-8">
                            <nav className="flex space-x-1 sm:space-x-4 lg:space-x-8 overflow-x-auto custom-scrollbar-thin">
                                {sampleSubjectTabs.map((tab) => (
                                    <SubjectTabButton
                                        key={tab.id}
                                        tab={tab}
                                        isActive={activeSubjectId === tab.id}
                                        onClick={() => setActiveSubjectId(tab.id)}
                                    />
                                ))}
                            </nav>
                        </div>

                        <div className="bg-white rounded-3xl px-3 py-2 sm:p-6 space-y-6">
                            {/* Mid Section: Search and General Filters */}
                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                                <div className="w-full flex-grow flex gap-2">
                                    <div className="relative flex-grow">
                                        <FiSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-black pointer-events-none" />
                                        <input
                                            type="text"
                                            placeholder="Search"
                                            value={searchTerm}
                                            onChange={(e) => setSearchTerm(e.target.value)}
                                            className={`w-full pl-10 pr-4 py-1.5 sm:py-2.5 text-base ${INPUT_BG_SEARCH} border-2 border-[#6B7280] rounded-full focus:ring-1 focus:ring-[${PRIMARY_BLUE}] focus:border-[${PRIMARY_BLUE}] outline-none`}
                                        />
                                    </div>
                                    <button
                                        className={`sm:hidden block p-2 rounded-xl hover:bg-gray-100 text-[${ACCENT_PINK}] flex-shrink-0 transition-colors`}
                                        aria-label="Open main filters"
                                    >
                                        <FiFilter className="h-5 w-5 sm:w-6 sm:h-6" strokeWidth={2} />
                                    </button>
                                </div>
                                <div className="flex sm:flex-nowrap flex-wrap gap-2 sm:w-fit w-full">
                                    <button
                                        className={`hidden sm:block p-2 rounded-xl hover:bg-gray-100 text-[${ACCENT_PINK}] flex-shrink-0 transition-colors`}
                                        aria-label="Open main filters"
                                    >
                                        <FiFilter className="h-5 w-5 sm:w-6 sm:h-6" strokeWidth={2} />
                                    </button>
                                    <StyledSelect
                                        defaultValue="all"
                                        placeholder="Filter"
                                        items={[{ value: "all", label: `Filter 1` }, { value: "batch1", label: "Batch 1" }]}
                                    />
                                    <StyledSelect
                                        defaultValue="all"
                                        placeholder="Filter"
                                        items={[{ value: "all", label: `Filter 2` }, { value: "batch1", label: "Batch 1" }]}
                                    />
                                    <StyledSelect
                                        defaultValue="all"
                                        placeholder="Filter"
                                        items={[{ value: "all", label: `Filter 3` }, { value: "batch1", label: "Batch 1" }]}
                                    />
                                </div>
                            </div>

                            {/* Bottom Section: Folders Grid */}
                            {searchedAndFilteredFolders.length > 0 ? (
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 px-2">
                                    {searchedAndFilteredFolders.map((folder) => (
                                        <FolderCard key={folder.id} folder={folder} />
                                    ))}
                                </div>
                            ) : (
                                <div className="text-center py-12 text-[#6B7280]">
                                    <FiFolder className="w-16 h-16 mx-auto mb-4 text-gray-400" />
                                    <h3 className="text-xl font-semibold mb-2">No Folders Found</h3>
                                    <p className="text-sm">
                                        Try adjusting your search or filter criteria, or select a
                                        different subject.
                                    </p>
                                </div>
                            )}
                        </div>
                    </>
                </main>
            </div>
            <Footer />
        </div>
    );
}
