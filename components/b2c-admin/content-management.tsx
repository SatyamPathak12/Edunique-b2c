
"use client";
import React, { useState, useMemo, useEffect, useRef } from "react";
import {
  FiSearch,
  FiChevronDown,
  FiFolder
} from "react-icons/fi";
import { MdSettings } from "react-icons/md";

import GoBack from "@/components/principal/goback";
import { useRouter } from "next/navigation";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import CreateFolderModal from "@/app/admin-b2c/pop-ups-2/components/CreateFolder";
import ManageAccess from "@/app/admin-b2c/pop-ups-2/components/ManageAccess";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

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

const sampleFolders: FolderItem[] = Array.from({ length: 100 }, (_, i) => ({
  id: `f${i + 1}`,
  name: "Folder Name",
  fileCount: "100 Files",
  subjectId: sampleSubjectTabs[i % sampleSubjectTabs.length].id, // Distribute folders among subjects
}));

const sampleGeneralFilters: GeneralFilterOption[] = [
  { id: "filter1", label: "Filter 1" },
  { id: "filter2", label: "Filter 2" },
  { id: "filter3", label: "Filter 3" },
];

const FolderCard: React.FC<{ folder: FolderItem, reference: React.RefObject<HTMLDivElement | null>, Router: AppRouterInstance, setOpenModal: React.Dispatch<React.SetStateAction<"createFolder" | "manageAccess" | null>> }> = ({ folder, reference, Router, setOpenModal }) => (
  <div
    className={`${FOLDER_CARD_BG} rounded-2xl p-3 border cursor-pointer border-[#E5E7EB] hover:shadow-lg transition-shadow duration-200 flex items-center gap-4 relative`}
    ref={reference}
    onClick={() => {
      Router.push('/admin-b2c/admin-panel/content-management-files');
    }}
  >
    <div
      className={`bg-[#99DEFF] h-22 w-22 sm:w-28 sm:h-28 rounded-xl flex items-center justify-center flex-shrink-0`}
    >
      <FiFolder
        className="h-10 w-10 sm:w-12 sm:h-12 text-black opacity-80"
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
      <div className="w-ful flex gap-2 ">

        <button
          onClick={(e) => {
            e.stopPropagation(); 
            setOpenModal("manageAccess");
          }}
          className="bg-gray-100 w-full rounded-full p-1 flex items-center gap-2 cursor-pointer justify-center text-gray-600 text-base hover:bg-gray-200 lg:text-lg"> <MdSettings /> Manage Access</button>
      </div>
    </div>
  </div>
);

// --- Component 2: StyledSelect (wrapper for Shadcn Select) ---
interface StyledSelectProps {
  defaultValue?: string;
  placeholder: string;
  items: { value: string; label: string }[];
}
export const StyledSelect: React.FC<StyledSelectProps> = ({ defaultValue, placeholder, items }) => (
  <Select defaultValue={defaultValue}>
    <SelectTrigger className="w-full rounded-xl sm:py-5 bg-[#F9FAFB] text-sm sm:text-base text-black border border-[#E5E7EB]">
      <SelectValue placeholder={placeholder} />
    </SelectTrigger>
    <SelectContent>
      {items.map(item => <SelectItem key={item.value} value={item.value}>{item.label}</SelectItem>)}
    </SelectContent>
  </Select>
);
const FilterDropdown: React.FC<{ label: string }> = ({ label }) => (
  <StyledSelect
    defaultValue="all"
    placeholder={label}
    items={[{ value: "all", label }, { value: "batch1", label: "Option 1" }, { value: "batch2", label: "Option 2" }]}
  />
);

// --- SubjectFolderViewContent Component ---
const SubjectFolderViewContent: React.FC<{ setOpenModal: React.Dispatch<React.SetStateAction<"createFolder" | "manageAccess" | null>> }> = ({ setOpenModal }) => {
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

  const cardHeightRef = useRef<HTMLDivElement | null>(null);
  const [cardHeight, setCardHeight] = useState<number>(138);
  const Router = useRouter();

  useEffect(() => {
    const updateHeight = () => {
      if (cardHeightRef.current) {
        setCardHeight(cardHeightRef.current.offsetHeight);
      }
    }

    updateHeight();

    const observer = new ResizeObserver(() => {
      updateHeight();
    })

    if (cardHeightRef.current) {
      observer.observe(cardHeightRef.current);
    }

    return () => {
      if (cardHeightRef.current) {
        observer.unobserve(cardHeightRef.current)
      }
      observer.disconnect();
    }

  }, [])

  return (
    <>
      <div className="bg-white rounded-2xl  p-4 sm:p-6 lg:p-8 space-y-6">
        {/* Mid Section: Search and General Filters */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
          <div className="relative flex-grow">
            <FiSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-black pointer-events-none" />
            <input
              type="text"
              placeholder="Search folders..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className={`w-full pl-10 pr-4 py-3 text-sm ${INPUT_BG_SEARCH} border-2 border-[#6B7280] rounded-full focus:ring-1 focus:ring-[${PRIMARY_BLUE}] focus:border-[${PRIMARY_BLUE}] outline-none`}
            />
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                setOpenModal("createFolder");
              }}
              className={`flex items-center justify-center gap-1.5 px-2 py-2.5 bg-[#FF3366] text-white  rounded-full text-xs sm:text-sm whitespace-nowrap hover:bg-[#FF3366]/80 cursor-pointer flex-shrink-0 transition-colors`}
            >
              <span>Create Folder</span>
            </button>

            <FilterDropdown label="Filter 1" />
            <FilterDropdown label="Filter 2" />
            <FilterDropdown label="Filter 3" />

          </div>
        </div>
        {/* Bottom Section: Folders Grid */}
        {searchedAndFilteredFolders.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 overflow-y-auto custom-scrollbar-thin pr-2"
            style={{
              height: `${cardHeight * 6 + (20 * 5)}px`,
            }}>
            {searchedAndFilteredFolders.map((folder) => (
              <FolderCard key={folder.id} folder={folder} reference={cardHeightRef} Router={Router} setOpenModal={setOpenModal} />
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
  );
};

// --- Main Page Export ---
export default function MaterialPageCourse() {
  // This page design does not include a prominent title bar or back button below the main header.
  // Navigation would typically be handled by the global Header or side navigation.
  const [openModal, setOpenModal] = useState<"createFolder" | "manageAccess" | null>(null);

  return (
    <div className="bg-[#eeeeee] min-h-screen flex flex-col">
      <CreateFolderModal
        isOpen={openModal === "createFolder"}
        onClose={() => setOpenModal(null)}
      />
      <ManageAccess
        isOpen={openModal === "manageAccess"}
        onClose={() => setOpenModal(null)}
      />
      <GoBack GoBackHeading="Content Management" />
      <main className="flex-grow w-full max-w-screen-xl mx-auto p-4 sm:p-6 lg:p-8">
        <SubjectFolderViewContent setOpenModal={setOpenModal} />
      </main>
    </div>
  );
}

