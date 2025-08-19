"use client";

import Header from "@/components/layout/TeacherB2CHeader"; // Adjust path as needed
import Footer from "@/components/layout/Footer"; // Adjust path as needed
import React, { useState, useMemo } from "react";
import {
  FiArrowLeft,
  FiSearch,
  FiShare2,
} from "react-icons/fi";
import Image from 'next/image'
import SearchFilterIcon from "../common-components/SearchFilterIcon";
import TeacherB2CWrapper from "./common-components/TeacherB2CPageWrapper";
import TabSwitch from "../common-components/TabSwitch";
import Link from "next/link";
import FileShare from "@/app/b2c-teacher/new-pop-ups/popupComponent/FileShare";
import { useRouter } from "next/navigation";
import { MdOutlineFileDownload } from "react-icons/md";

// Define the File interface
interface ManagedFile {
  id: string;
  name: string;
  type: "pdf" | "image" | "doc" | "other";
  size: string; // e.g., "300 KB", "1.2 MB"
}

// Sample Data
const dummyFiles: ManagedFile[] = [
  { id: "1", name: "File Name ", type: "pdf", size: "300 KB" },
  { id: "2", name: "File Name", type: "pdf", size: "300 KB" },
  { id: "3", name: "File Name", type: "pdf", size: "300 KB" },
  { id: "4", name: "File Name", type: "pdf", size: "300 KB" },
  { id: "5", name: "File Name", type: "pdf", size: "300 KB" },
  { id: "6", name: "File Name", type: "pdf", size: "300 KB" },
  { id: "7", name: "File Name", type: "pdf", size: "300 KB" },
  { id: "8", name: "File Name", type: "pdf", size: "300 KB" },
  { id: "9", name: "File Name", type: "pdf", size: "300 KB" },
  { id: "10", name: "File Name", type: "pdf", size: "300 KB" },
  { id: "11", name: "File Name", type: "pdf", size: "300 KB" },
];



// FileItem Component
const FileItem: React.FC<{ file: ManagedFile }> = ({ file }) => {
  const [fileShare, setFileShare] = useState(false);
  return (
    <div className="grid grid-cols-3 items-center justify-between py-3 px-2 hover:bg-[#F9FAFB] transition-colors duration-150 rounded-md gap-1">
      <div className="flex items-center space-x-3 min-w-0 justify-self-start">
        <Image
          src={"/teacher-b2b/pdf.png"}
          alt="pdf"
          height={50}
          width={20}
          className="h-6 w-6"
        />
        <span
          className="text-sm text-black font-medium truncate"
          title={file.name}
        >
          {file.name}
        </span>
      </div>
      <span className="text-sm text-gray-500 flex-shrink-0 ml-4 justify-self-center">
        {file.size}
      </span>
      <div className="flex gap-4 text-gray-500 justify-self-end">
        <MdOutlineFileDownload size={20} />
        <button className="" onClick={() => setFileShare(true)}>
          <FiShare2 size={20} />
        </button>
      </div>
      <FileShare isOpen={fileShare} onClose={() => setFileShare(false)} />
    </div>
  );
};

// Main File Management Content Component
const FileManagementContent: React.FC = () => {
  const router = useRouter()
  const [searchTerm, setSearchTerm] = useState("");
  // In a real app, file data would likely come from props or a global state/API call
  const [files] = useState<ManagedFile[]>(dummyFiles);

  // Add states for filters if/when their logic is defined
  // const [activeFilters, setActiveFilters] = useState({});

  const filteredFiles = useMemo(() => {
    const f = files.filter((file) =>
      file.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    // Add further filtering logic here based on activeFilters
    return f;
  }, [files, searchTerm /*, activeFilters */]);

  const filter = [
    {
      id: "f1", label: "Filter 1"
    },
    {
      id: "f2", label: "Filter 2"
    },
    {
      id: "f3", label: "Filter 3"
    },
  ]

  const tab = ["Notes", "Books", "Tests", "Assessments", "Quiz"];
  const [activeTab, setActiveTab] = useState(tab[0])

  return (
    <div className="bg-white rounded-2xl p-4 relative flex flex-col">
      {/* Header: Search and Filters */}
      <TabSwitch tabs={tab} selected={activeTab} onChange={setActiveTab} />
      <div className="mb-4">
        <SearchFilterIcon filters={filter} />
      </div>
      {/* File List */}
      <div className="flex-grow overflow-y-auto custom-scrollbar pr-1">
        {" "}
        {/* Added custom-scrollbar if you have it defined */}
        {filteredFiles.length > 0 ? (
          <div className="space-y-1">
            {" "}
            {/* Reduced spacing between file items */}
            {filteredFiles.map((file) => (
              <FileItem key={file.id} file={file} />
            ))}
          </div>
        ) : (
          <div className="text-center py-10 text-[#F9FAFB]0">
            <FiSearch className="w-12 h-12 mx-auto mb-3 text-black" />
            <h3 className="text-lg font-semibold mb-1">No Files Found</h3>
            <p className="text-sm">
              Try adjusting your search or filter criteria, or upload a new
              file.
            </p>
          </div>
        )}
        <button
          onClick={() => { router.push("/teacher-b2b/teacher-flow/create-test?step=3")}}
          className="px-5 ml-auto mt-4  text-center bg-[#FFCC00] text-white font-semibold  py-3 rounded-full shadow-lg hover:bg-yellow-300 transition-colors flex items-center justify-center gap-2 text-sm"
          aria-label="Upload new file"
        >
          Upload
        </button>
      </div>
    </div>
  );
};

export default function StudentSubmittedPapersPage() {
  const handleBackClick = () => {
    if (typeof window !== "undefined") {
      window.history.back();
    }
  };


  return (
    <>
      <Header activeState="Material" />
      <div className="flex items-center gap-3 bg-white justify-between px-4 sm:px-6 py-3.5 ">
        <div className="flex gap-1 md:gap-3 items-center">
          <button
            onClick={handleBackClick}
            className="p-1.5 text-black hover:text-[#FF3366] focus:outline-none rounded-md"
            aria-label="Go back"
          >
            <FiArrowLeft className="w-5 h-5" />
          </button>
          <h1 className="text-xl md:text-2xl font-medium text-[#FF3366]">
            Folder Name
          </h1>
        </div>
        <Link href={"/b2c-teacher/teacher-flow/manage-group-share"} className="px-6 py-2 border rounded-xl bg-[#f9fafb] text-xs sm:text-sm whitespace-nowrap">
          Manage Group Share
        </Link>
      </div>
      <TeacherB2CWrapper>

        <main className="flex-grow">

          <FileManagementContent />
        </main>

      </TeacherB2CWrapper>
      <Footer />
    </>
  );
}
