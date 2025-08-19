"use client";
import React, { useState, useMemo } from "react";
import {
  FiSearch,
  FiChevronDown,
  FiFileText
} from "react-icons/fi";
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlineFileDownload } from "react-icons/md";
import { LuInfo } from "react-icons/lu";
import GoBack from "./goback";
import ManageAccessModal from "@/app/principal/pop-ups/components/ManageAccessModal";

// --- Style Constants ---
// const ACCENT_PINK = "#FF3366";
const PRIMARY_BLUE = "#3366FF"; // Placeholder if needed for other active states
const INPUT_BG_SEARCH = "bg-white"; // Search bar background
const INPUT_BG_FILTERS = "bg-[#F9FAFB]"; // Background for filter dropdowns
// const FOLDER_ICON_BG = "bg-sky-300"; // Light blue for folder icon background
const FOLDER_CARD_BG = "bg-[#F9FAFB]"; // Very light gray for folder card

// --- Data Interfaces ---
interface SubjectTab {
  id: string;
  name: string;
}

interface FolderItem {
  id: string;
  name: string;
  fileCount: string;
  subjectId: string; // To link folder to a subject tab
  // Add other properties like lastModified, etc. if needed
}

interface GeneralFilterOption {
  id: string;
  label: string;
  // Define specific options for each filter if they are dropdowns
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
  name: "File Name",
  fileCount: "27ᵗʰ June 2025",
  subjectId: sampleSubjectTabs[i % sampleSubjectTabs.length].id, // Distribute folders among subjects
}));
const filters = ['Filter 1', 'Filter 2', 'Filter 3'];
// --- Helper Components ---

// const SubjectTabButton: React.FC<{
//   tab: SubjectTab;
//   isActive: boolean;
//   onClick: () => void;
//   }> = ({ tab, isActive, onClick }) => (
//   <button
//     onClick={onClick}
//     className={`px-5 py-2.5 rounded-2xl text-sm font-medium transition-all duration-200 whitespace-nowrap
//       ${isActive
//         ? `bg-[${ACCENT_PINK}] text-white shadow-md`
//         : "bg-transparent text-gray-600 hover:bg-gray-100"
//       }`}
//   >
//     {tab.name}
//   </button>
// );

const FolderCard: React.FC<{ folder: FolderItem }> = ({ folder }) => {
  const [showManageAccessPopup, setShowManageAccessPopup] = useState<boolean>(false);
  return (
    <div
      className={`${FOLDER_CARD_BG} rounded-2xl p-3 border border-[#E5E7EB] hover:shadow-lg transition-shadow duration-200 grid grid-cols-[auto_1fr] items-center gap-4 relative`}
    >
      <ManageAccessModal isOpen={showManageAccessPopup} onClose={() => setShowManageAccessPopup(false)} />
      <div className="absolute right-5 top-5 text-gray-400">
        <LuInfo />
      </div>
      <div
        className={`bg-[#8dd9b3] w-16 h-16 sm:w-28 sm:h-28 rounded-xl flex items-center justify-center flex-shrink-0`}
      >
        <FiFileText
          className="w-8 h-8 sm:w-12 sm:h-12 text-black opacity-80"
          strokeWidth={1.5}
        />
      </div>
      <div className="flex flex-col w-full gap-4">
        <div className="">
          <h3 className="text-sm sm:text-lg font-semibold text-black truncate">
            {folder.name}
          </h3>
          <p className="text-sm text-[#6B7280] mt-1">{folder.fileCount}</p>
        </div>
        <div className="w-full hidden lg:grid grid-cols-1 xl:grid-cols-2 gap-2 ">
          <button onClick={(e) => { e.stopPropagation(); setShowManageAccessPopup(true) }} className="bg-gray-100 rounded-full p-1 w-full flex items-center gap-2 cursor-pointer justify-center text-gray-600 text-sm md:text-lg"> <IoSettingsOutline /> Manage Access</button>
          <button className="bg-gray-100 w-full rounded-full p-1 flex items-center gap-2 cursor-pointer justify-center text-gray-600 text-sm md:text-lg"> <MdOutlineFileDownload /> Download</button>
        </div>
      </div>
      <div className="w-full lg:hidden col-span-2 grid grid-cols-1 md:grid-cols-2 gap-2 ">
        <button onClick={(e) => { e.stopPropagation(); setShowManageAccessPopup(true) }} className="bg-gray-100 rounded-full p-1 w-full flex items-center gap-2 cursor-pointer justify-center text-gray-600 text-sm md:text-lg"> <IoSettingsOutline /> Manage Access</button>
        <button className="bg-gray-100 w-full rounded-full p-1 flex items-center gap-2 cursor-pointer justify-center text-gray-600 text-sm md:text-lg"> <MdOutlineFileDownload /> Download</button>
      </div>
    </div>
  )
};

// --- SubjectFolderViewContent Component ---
const SubjectFolderViewContent: React.FC = () => {
  const [activeSubjectId] = useState<string>(
    sampleSubjectTabs[0]?.id || ""
  );
  const [searchTerm, setSearchTerm] = useState("");
  // Add states for general filters if their logic becomes more complex (e.g., selected options for dropdowns)
  // const [activeGeneralFilters, setActiveGeneralFilters] = useState({});

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
    // Add logic for general filters here
    // e.g., if (activeGeneralFilters.someFilter) { folders = folders.filter(...) }
    return folders;
  }, [filteredFoldersBySubject, searchTerm /*, activeGeneralFilters */]);

  return (
    <>
      {/* Top Section: Subject Tabs */}



      <div className="bg-white rounded-2xl  p-4 sm:p-6 lg:p-8 space-y-6">
        {/* Mid Section: Search and General Filters */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <div className="relative flex-grow">
            <FiSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 sm:w-5 sm:h-5 text-black pointer-events-none" />
            <input
              type="text"
              placeholder="Search folders..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className={`w-full pl-10 pr-4 py-3 text-sm ${INPUT_BG_SEARCH} border border-[#6B7280] rounded-full focus:ring-1 focus:ring-[${PRIMARY_BLUE}] focus:border-[${PRIMARY_BLUE}] outline-none`}
            />
          </div>
          <div className="flex items-center gap-2">
            {filters.map((filter, index) => (
              <div key={filter} className="relative">
                <select
                  className="appearance-none border border-gray-300 text-sm px-3 py-2 rounded-xl pr-4 bg-[#f9fafb] focus:outline-none focus:ring-1 focus:ring-blue-500"
                >
                  <option value="">{filter}</option>
                  <option value="Option 1">Option 1</option>
                  <option value="Option 2">Option 2</option>
                </select>
                <FiChevronDown className="pointer-events-none absolute right-2 top-1/2 transform -translate-y-1/2 font-medium text-gray-500 text-xs" />
              </div>
            ))}
          </div>
        </div>
        <div className="bg-white flex items-center justify-center py-1 rounded-2xl mb-4">
        </div>
        {/* Bottom Section: Folders Grid */}
        {searchedAndFilteredFolders.length > 0 ? (
          <div className="grid max-h-[80vh] grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 pr-2 overflow-y-scroll scrollbar">
            {searchedAndFilteredFolders.map((folder) => (
              <FolderCard key={folder.id} folder={folder} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 text-[#6B7280]">
            <FiFileText className="w-16 h-16 mx-auto mb-4 text-gray-400" />
            <h3 className="text-xl font-semibold mb-2">No Folders Found</h3>
            <p className="text-sm">
              Try adjusting your search or filter criteria, or select a
              different subject.
            </p>
          </div>
        )}
      </div>
    </>
  );
};

// --- Main Page Export ---
export default function MaterialPage() {
  // This page design does not include a prominent title bar or back button below the main header.
  // Navigation would typically be handled by the global Header or side navigation.

  return (
    <div className="bg-[#eeeeee] min-h-screen flex flex-col">
      <div className="bg-gray-100">
        <GoBack GoBackHeading="Folder Name" />
        <main className="flex-grow container mx-auto p-4 sm:p-6 lg:p-8">
          <SubjectFolderViewContent />
        </main>
      </div>
    </div>
  );
}
