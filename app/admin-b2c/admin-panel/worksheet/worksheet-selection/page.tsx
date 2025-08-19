"use client";
import MaxWidthWrapper from "@/components/admin/max-width-wrapper";
import BackButton from "@/components/common-components/BackButton";
import { useState, useMemo, useRef, useEffect } from "react";
import { NextPage } from "next";
import { FiFileText, FiSearch } from "react-icons/fi";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@radix-ui/react-select";
import { LuInfo } from "react-icons/lu";
import { Eye, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import { useRouter } from "next/navigation";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { IoClose } from "react-icons/io5";

const PRIMARY_BLUE = "#3366FF"; // Placeholder if needed for other active states
const INPUT_BG_SEARCH = "bg-white"; // Search bar background
const FOLDER_CARD_BG = "bg-[#F9FAFB]"; // Very light gray for folder card

interface FilterOption {
  label: string;
  value: string;
}

interface FilterButtonProps {
  label: string;
  options: FilterOption[];
  onSelect?: (value: string) => void;
  defaultValue?: string;
}

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

// --- Sample Data ---
const sampleSubjectTabs: SubjectTab[] = [
  { id: "subj1", name: "Subject 1" },
  { id: "subj2", name: "Subject 2" },
  { id: "subj3", name: "Subject 3" },
  { id: "subj4", name: "Subject 4" },
  { id: "subj5", name: "Subject 5" },
];

const sampleFolders: FolderItem[] = Array.from({ length: 800 }, (_, i) => ({
  id: `f${i + 1}`,
  name: "Worksheet Name",
  fileCount: "11ᵗʰ July 2025",
  subjectId: sampleSubjectTabs[i % sampleSubjectTabs.length].id, // Distribute folders among subjects
}));

function FilterButton({
  label,
  options,
  onSelect,
  defaultValue,
}: FilterButtonProps) {
  const [selectedValue, setSelectedValue] = useState(defaultValue || "");
  const selectedOption = options.find(
    (option) => option.value === selectedValue
  );

  const handleSelect = (value: string) => {
    setSelectedValue(value);
    onSelect?.(value);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="h-10 px-4 py-2 hover:bg-gray-50 text-base font-normal rounded-xl border border-[#E5E7EB] bg-[#F9FAFB]"
        >
          {selectedOption ? selectedOption.label : label}
          <ChevronDown className="ml-2 h-5 w-5" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" className="w-48">
        {options.map((option) => (
          <DropdownMenuItem
            key={option.value}
            onClick={() => handleSelect(option.value)}
            className="cursor-pointer"
          >
            {option.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

function FilterButtons() {
  const filter1Options: FilterOption[] = [
    { label: "All Items", value: "all" },
    { label: "Active", value: "active" },
    { label: "Inactive", value: "inactive" },
    { label: "Pending", value: "pending" },
  ];

  const filter2Options: FilterOption[] = [
    { label: "All Categories", value: "all" },
    { label: "Technology", value: "tech" },
    { label: "Business", value: "business" },
    { label: "Design", value: "design" },
  ];

  const filter3Options: FilterOption[] = [
    { label: "All Dates", value: "all" },
    { label: "Last 7 days", value: "7days" },
    { label: "Last 30 days", value: "30days" },
    { label: "Last 90 days", value: "90days" },
  ];

  const handleFilter1Change = (value: string) => {
    console.log("Filter 1 changed:", value);
  };

  const handleFilter2Change = (value: string) => {
    console.log("Filter 2 changed:", value);
  };

  const handleFilter3Change = (value: string) => {
    console.log("Filter 3 changed:", value);
  };

  return (
    <div className="flex items-center gap-2">
      <FilterButton
        label="Filter 1"
        options={filter1Options}
        onSelect={handleFilter1Change}
      />
      <FilterButton
        label="Filter 2"
        options={filter2Options}
        onSelect={handleFilter2Change}
      />
      <FilterButton
        label="Filter 3"
        options={filter3Options}
        onSelect={handleFilter3Change}
      />
    </div>
  );
}

function UploadContentPopup({
  setIsUploadOpen,
}: {
  setIsUploadOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [urlText, setUrlText] = useState("");
  const [documentName, setDocumentName] = useState("");

  const handleClose = () => {
    setIsUploadOpen(false);
  };

  const handleCancel = () => {
    setIsUploadOpen(false);
  };

  const handleContinue = () => {
    setIsUploadOpen(false);
  };

  const handleFileUpload = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const file: File | undefined = event.target.files?.[0];
    if (file) {
      setDocumentName(file.name);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/30 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-3xl w-full max-w-lg mx-auto shadow-xl">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-[#e5e7eb]">
          <h2 className="text-lg font-semibold text-gray-900">
            Upload Content File
          </h2>
          <button
            onClick={handleClose}
            className="p-1 bg-black/5  cursor-pointer rounded-full transition-colors"
          >
            <IoClose className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          {/* URL Input Section */}
          <div>
            <label className="block text-sm sm:text-lg font-medium text-black mb-2">
              Enter URL
            </label>
            <input
              type="text"
              value={urlText}
              onChange={(e) => setUrlText(e.target.value)}
              placeholder="Text"
              className="w-full px-4 py-3 border border-[#e5e7eb] bg-[#faf9fb] rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            />
          </div>

          {/* Divider */}
          <div className="flex items-center justify-center">
            <span className="text-sm sm:text-lg text-black">Or</span>
          </div>

          {/* Document Upload Section */}
          <div>
            <label className="block text-sm sm:text-lg font-medium text-black mb-2">
              Upload Document
            </label>
            <div className="relative">
              <input
                type="file"
                onChange={handleFileUpload}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                accept=".pdf,.doc,.docx,.txt"
              />
              <div className="w-full px-4 py-3 border border-[#e5e7eb] bg-[#faf9fb] rounded-full flex items-center space-x-3 hover:bg-gray-50 transition-colors cursor-pointer">
                <AiOutlineCloudUpload className="w-5 sm:w-6 sm:h-6 h-5 text-[#ff3366]" />
                <span className="text-[#6b7280] flex-1">
                  {documentName || "Document Name"}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-end space-x-3 p-4 ">
          <button
            onClick={handleCancel}
            className="px-4 py-3 text-[#6b7280]  cursor-pointer border border-[#e5e7eb] rounded-full  transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleContinue}
            className="px-3 py-3 bg-[#3366ff] cursor-pointer  text-white rounded-full hover:bg-blue-600 transition-colors"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}

const Page: NextPage = () => {
  const [isUploadOpen, setIsUploadOpen] = useState<boolean>(false);
  return (
    <div>
      <BackButton Heading="Student Worksheets" />
      <MaxWidthWrapper>
        <main className="flex-grow w-full max-w-[90rem] mx-auto px-4 py-10 ">
          <SubjectFolderViewContent />
        </main>
      </MaxWidthWrapper>
      {isUploadOpen && <UploadContentPopup setIsUploadOpen={setIsUploadOpen} />}
      <button
        type="button"
        onClick={() => setIsUploadOpen((prev) => !prev)}
        className={`bg-[#FFCC00] fixed bottom-5 right-20 md:right-12 z-30 w-full sm:w-auto text-white px-3 py-2.5 text-sm sm:px-3 sm:py-3.5 sm:text-base font-medium hover:opacity-90 rounded-full transition-opacity`}
      >
        Upload File
      </button>
    </div>
  );
};

export default Page;

const FolderCard: React.FC<{
  folder: FolderItem;
  reference: React.RefObject<HTMLDivElement | null>;
}> = ({ folder, reference }) => {
  const router = useRouter();
  return (
    <div
      className={`${FOLDER_CARD_BG} rounded-2xl p-3 border border-[#E5E7EB] bg-[#F9FAFB] hover:shadow-lg transition-shadow duration-200 flex items-center gap-4 relative`}
      ref={reference}
    >
      <div className="absolute right-5 top-5 text-gray-400">
        <LuInfo className="w-5 h-5 stroke-[#6B7280]" />
      </div>
      <div
        className={`bg-[#8dd9b3] w-28 h-28 rounded-xl flex items-center justify-center flex-shrink-0`}
      >
        <FiFileText
          className="w-12 h-12 text-black opacity-80"
          strokeWidth={1.5}
        />
      </div>
      <div className="flex flex-col flex-wrap w-full gap-2 sm:gap-4">
        <div className="">
          <h4 className="text-sm sm:text-lg text-black font-medium truncate">
            {folder.name}
          </h4>
          <p className="text-xs lg:text-sm text-[#6B7280] mt-1">
            {folder.fileCount}
          </p>
        </div>
        <div className="flex gap-1 lg:gap-2 w-full flex-wrap sm:flex-nowrap md:flex-wrap lg:flex-nowrap">
          <div className="w-full flex gap-1 sm:gap-2 ">
            <button
              onClick={() =>
                router.push("/admin-b2c/admin-panel/worksheet/give-suggestions")
              }
              className="bg-[#F3F4F6] text-nowrap w-full rounded-full p-2 flex items-center gap-2 cursor-pointer justify-center text-[#6B7280] text-sm md:text-base hover:bg-gray-200"
            >
              {" "}
              <MessageSquare className="w-5 h-5" /> Give Suggestions
            </button>
          </div>
          <div className="w-full flex gap-1 sm:gap-2 ">
            <button
              onClick={() =>
                router.push(
                  "/admin-b2c/admin-panel/worksheet/worksheet-results"
                )
              }
              className="bg-[#F3F4F6] w-full rounded-full p-1 flex items-center gap-2 cursor-pointer justify-center text-[#6B7280] text-sm md:text-base hover:bg-gray-200"
            >
              {" "}
              <Eye /> See Results
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

interface StyledSelectProps {
  defaultValue?: string;
  placeholder: string;
  items: { value: string; label: string }[];
}
export const StyledSelect: React.FC<StyledSelectProps> = ({
  defaultValue,
  placeholder,
  items,
}) => (
  <Select defaultValue={defaultValue}>
    <SelectTrigger className="w-full rounded-xl sm:py-5 bg-[#F9FAFB] text-sm sm:text-base text-black border border-[#E5E7EB]">
      <SelectValue placeholder={placeholder} />
    </SelectTrigger>
    <SelectContent>
      {items.map((item) => (
        <SelectItem key={item.value} value={item.value}>
          {item.label}
        </SelectItem>
      ))}
    </SelectContent>
  </Select>
);

const SubjectFolderViewContent: React.FC = () => {
  const [activeSubjectId] = useState<string>(sampleSubjectTabs[0]?.id || "");
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

  useEffect(() => {
    const updateHeight = () => {
      if (cardHeightRef.current) {
        setCardHeight(cardHeightRef.current.offsetHeight);
      }
    };

    updateHeight();

    const observer = new ResizeObserver(() => {
      updateHeight();
    });

    if (cardHeightRef.current) {
      observer.observe(cardHeightRef.current);
    }

    return () => {
      if (cardHeightRef.current) {
        observer.unobserve(cardHeightRef.current);
      }
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <div className="bg-white rounded-2xl p-4 sm:p-6 lg:p-8 space-y-6">
        {/* Mid Section: Search and General Filters */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
          <div className="relative flex-grow">
            <FiSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-black pointer-events-none" />
            <input
              type="text"
              placeholder="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className={`w-full pl-10 pr-4 py-3 text-sm ${INPUT_BG_SEARCH} border-2 border-[#6B7280] rounded-full focus:ring-1 focus:ring-[${PRIMARY_BLUE}] focus:border-[${PRIMARY_BLUE}] outline-none`}
            />
          </div>
          <FilterButtons />
        </div>
        {/* Bottom Section: Folders Grid */}
        {searchedAndFilteredFolders.length > 0 ? (
          <div
            className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 overflow-y-auto custom-scrollbar-thin pr-2"
            style={{
              height: `${cardHeight * 6 + 20 * 5}px`,
            }}
          >
            {searchedAndFilteredFolders.map((folder) => (
              <FolderCard
                key={folder.id}
                folder={folder}
                reference={cardHeightRef}
              />
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
