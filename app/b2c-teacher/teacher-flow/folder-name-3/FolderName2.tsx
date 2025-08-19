"use client";

import Header from "@/components/layout/TeacherB2CHeader"; // Adjust path as needed
import Footer from "@/components/layout/Footer"; // Adjust path as needed
import React, { useState, useMemo } from "react";
import {
  FiArrowLeft,
  FiSearch,
} from "react-icons/fi";
import { MdOutlineFileDownload } from "react-icons/md";
import { FiShare2 } from "react-icons/fi";
import Image from 'next/image'
import Link from "next/link";
import FileShare from "@/app/b2c-teacher/new-pop-ups/popupComponent/FileShare";
import SearchFilterIcon from "@/components/common-components/SearchFilterIcon";
import TeacherB2CWrapper from "@/components/teacher-b2c/common-components/TeacherB2CPageWrapper";
import BackButton from "@/components/common-components/BackButton";

// Define the File interface
interface ManagedFile {
  id: string;
  name: string;
  size: string; // e.g., "300 KB", "1.2 MB"
}

// Sample Data
const dummyFiles: ManagedFile[] = [
  { id: "1", name: "File Name ", size: "300 KB" },
  { id: "2", name: "File Name", size: "300 KB" },
  { id: "3", name: "File Name", size: "300 KB" },
  { id: "4", name: "File Name", size: "300 KB" },
  { id: "5", name: "File Name", size: "300 KB" },
  { id: "6", name: "File Name", size: "300 KB" },
  { id: "7", name: "File Name", size: "300 KB" },
  { id: "8", name: "File Name", size: "300 KB" },
  { id: "9", name: "File Name", size: "300 KB" },
  { id: "10", name: "File Name", size: "300 KB" },
  { id: "11", name: "File Name", size: "300 KB" },
];



// FileItem Component
const FileItem: React.FC<{ file: ManagedFile }> = ({ file }) => {
  return (
    <div className="flex items-center justify-between py-3 px-2 hover:bg-[#F9FAFB] transition-colors duration-150 rounded-md gap-1">
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
      <span className="text-sm text-gray-500 flex-shrink-0 ml-4 justify-self-end sm:justify-self-center">
        {file.size}
      </span>

    </div>
  );
};

// Main File Management Content Component
const FileManagementContent: React.FC = () => {
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

  return (
    <div className="bg-white min-h-screen rounded-2xl p-4 relative flex flex-col">
      {/* Header: Search and Filters */}
      <div className="mb-4">
        <SearchFilterIcon filters={filter} />
      </div>
      {/* File List */}
      <div className="flex-grow ">
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
        <div className="flex justify-end my-4">
          <Link href={"/b2c-teacher/teacher-flow/create-test"}
            className="px-3  text-center bg-[#FFCC00] text-white font-semibold  py-3 rounded-full text-sm"
            aria-label="Upload new file"
          >
            Upload
          </Link>
        </div>
      </div>
    </div>
  );
};

export default function FolderName2() {


  return (
    <>
      <Header activeState="Dashboard" />
      <BackButton Heading="Folder Name" />
      <TeacherB2CWrapper>

        <main className="flex-grow">
          {/* 
          The space-y-8 from your example is removed here if FileManagementContent 
          is the only direct child and already has its own internal spacing/padding.
          If you have other elements directly within main, you can add space-y back.
        */}
          <FileManagementContent />
        </main>

      </TeacherB2CWrapper>
      <Footer />
    </>
  );
}
