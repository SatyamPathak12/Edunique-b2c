"use client";

import React, { useState, useMemo } from "react";
import {
  // FiClock,
  FiChevronDown,
  FiTrash2,
  FiShare2,
  // FiPlus,
  // FiArrowLeft,
  FiArrowLeftCircle,
  FiArrowRightCircle,
} from "react-icons/fi"; // Added FiArrowLeft for the back button in the header
import Image from "next/image"; // For using Next.js Image component

// --- Data Interfaces ---
interface TabItem {
  id: "reference" | "pedagogy";
  label: string;
}

interface FilterOption {
  value: string;
  label: string;
}

interface VideoCardData {
  id: string;
  thumbnailUrl: string; // The specific image URL "/teacher-b2b/course.png"
  classLevel: string; // e.g., "Class 5"
  topic: string; // e.g., "Unitary Method"
  chapterStatus: string; // e.g., "Complete Chapter"
  videoTitle: string;
  description?: string; // Optional, shown in first image variant
  subject?: string; // Optional, shown in second image variant
  topicName?: string; // Optional, shown in second image variant
  uploadDate: string; // e.g., "29 / 5 / 25"
  isShared: boolean;
  type: TabItem["id"]; // To link video to a tab
  // Add other relevant fields like batch, subject for filtering if needed
}

// --- Sample Data ---
const TABS: TabItem[] = [
  { id: "reference", label: "Reference Video" },
  { id: "pedagogy", label: "Pedagogy Video" },
];



const sampleBatchFilters: FilterOption[] = [
  { value: "all", label: "All Batches" },
  { value: "batchA", label: "Batch A" },
  { value: "batchB", label: "Batch B" },
];

const sampleSubjectFilters: FilterOption[] = [
  { value: "all", label: "Subject" }, // Placeholder default
  { value: "maths", label: "Maths" },
  { value: "science", label: "Science" },
];

const THUMBNAIL_URL = "/teacher-b2b/course.png";

const sampleVideos: VideoCardData[] = [
  // Variant 1 (with description)
  {
    id: "v1",
    thumbnailUrl: THUMBNAIL_URL,
    classLevel: "Class 5",
    topic: "Unitary Method",
    chapterStatus: "Complete Chapter",
    videoTitle: "Video Title",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam quis justo nec velit dapibus aliquet eu quis eros. Phasellus vehicula, ipsum quis semper tempor, urna risus ornare dolor, at vulputate erat sit amet augue. Proin enim ipsum, iaculis id est vel, tincidunt porttitor nulla. Suspendisse eros mi, consequat at nulla nec, consectetur ultrices ligula.",
    uploadDate: "29 / 5 / 25",
    isShared: true,
    type: "reference",
  },
  {
    id: "v2",
    thumbnailUrl: THUMBNAIL_URL,
    classLevel: "Class 5",
    topic: "Unitary Method",
    chapterStatus: "Complete Chapter",
    videoTitle: "Video Title",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam quis justo nec velit dapibus aliquet eu quis eros. Phasellus vehicula, ipsum quis semper tempor, urna risus ornare dolor, at vulputate erat sit amet augue. Proin enim ipsum, iaculis id est vel, tincidunt porttitor nulla. Suspendisse eros mi, consequat at nulla nec, consectetur ultrices ligula.",
    uploadDate: "29 / 5 / 25",
    isShared: false,
    type: "reference",
  },
  {
    id: "v3",
    thumbnailUrl: THUMBNAIL_URL,
    classLevel: "Class 5",
    topic: "Unitary Method",
    chapterStatus: "Complete Chapter",
    videoTitle: "Video Title",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam quis justo nec velit dapibus aliquet eu quis eros. Phasellus vehicula, ipsum quis semper tempor, urna risus ornare dolor, at vulputate erat sit amet augue. Proin enim ipsum, iaculis id est vel, tincidunt porttitor nulla. Suspendisse eros mi, consequat at nulla nec, consectetur ultrices ligula.",
    uploadDate: "29 / 5 / 25",
    isShared: true,
    type: "reference",
  },
  // Variant 2 (with subject, topic name)
  {
    id: "v4",
    thumbnailUrl: THUMBNAIL_URL,
    classLevel: "Class 5",
    topic: "Unitary Method",
    chapterStatus: "Complete Chapter",
    videoTitle: "Video Title",
    subject: "Maths",
    topicName: "Topic Name",
    uploadDate: "28 / 5 / 25",
    isShared: true,
    type: "pedagogy",
  },
  {
    id: "v5",
    thumbnailUrl: THUMBNAIL_URL,
    classLevel: "Class 5",
    topic: "Fractions",
    chapterStatus: "Complete Chapter",
    videoTitle: "Video Title",
    subject: "Maths",
    topicName: "Topic Name",
    uploadDate: "27 / 5 / 25",
    isShared: false,
    type: "pedagogy",
  },
  {
    id: "v6",
    thumbnailUrl: THUMBNAIL_URL,
    classLevel: "Class 5",
    topic: "Photosynthesis",
    chapterStatus: "In Progress",
    videoTitle: "Video Title",
    subject: "Science",
    topicName: "Topic Name",
    uploadDate: "26 / 5 / 25",
    isShared: true,
    type: "pedagogy",
  },
];

// --- Style Constants ---
const ACCENT_PINK = "#FF3366";
const PRIMARY_BLUE = "#3366FF"; // Not explicitly in this image, but from your theme
// const YELLOW_BUTTON_BG = "bg-[#FFCC00]";
// const YELLOW_BUTTON_TEXT = "text-black";
// const CARD_BG = "bg-white";
const CARD_BORDER = "border-[#E5E7EB]";
const FILTER_BG = "bg-[#F9FAFB]"; // Background for filter dropdowns

// --- Helper Components ---

const TabButton: React.FC<{
  label: string;
  isActive: boolean;
  onClick: () => void;
}> = ({ label, isActive, onClick }) => (
  <button
    onClick={onClick}
    className={`px-1 py-3 text-sm sm:text-lg font-medium whitespace-nowrap transition-colors duration-150 focus:outline-none
      ${
        isActive
          ? `text-[${ACCENT_PINK}] border-b-2 border-[${ACCENT_PINK}]`
          : `text-gray-600 hover:text-gray-800 border-b-2 border-transparent hover:border-gray-300`
      }`}
  >
    {label}
  </button>
);

const FilterDropdown: React.FC<{
  options: FilterOption[];
  value: string;
  onChange: (value: string) => void;
}> = ({ options, value, onChange }) => (
  <div className="relative">
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className={`pl-3 pr-7 py-2 text-xs ${FILTER_BG} border border-[#E5E7EB] rounded-lg focus:ring-1 focus:ring-[${PRIMARY_BLUE}] focus:border-[${PRIMARY_BLUE}] outline-none appearance-none shadow-sm`}
    >
      {options.map((opt) => (
        <option key={opt.value} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
    <FiChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-black pointer-events-none" />
  </div>
);

const VideoCard: React.FC<{ video: VideoCardData }> = ({ video }) => {
  return (
    <div
      className={`bg-[#F9FAFB] rounded-2xl overflow-hidden border ${CARD_BORDER} flex flex-col`}
    >
      {/* Thumbnail Section */}
      <div className="relative w-full aspect-[16/7] pt-6 sm:aspect-[16/6]">
        {" "}
        {/* Adjusted aspect ratio */}
        <Image
          src={"/teacher-b2b/course.png"}
          alt={video.videoTitle}
          layout="fill"
          objectFit="cover"
          priority
          className="transition-transform duration-300   group-hover:scale-105" // Added group-hover for potential future hover effects
        />
      </div>

      {/* Content Section */}
      <div className="p-4 flex-grow flex flex-col">
        <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-1.5">
          {video.videoTitle}
        </h4>

        {video.description && (
          <p className="text-sm text-[#6B7280] leading-relaxed mb-3 line-clamp-4 flex-grow">
            {video.description}
          </p>
        )}

        {video.subject && (
          <div className="mb-3 space-y-0.5 text-xs text-gray-600">
            <p>
              Subject:{" "}
              <span className="font-medium text-gray-700">{video.subject}</span>
            </p>
            <p>
              Topic:{" "}
              <span className="font-medium text-gray-700">
                {video.topicName}
              </span>
            </p>
            {video.type == "pedagogy" &&
              <p>
              Date:{" "}
              <span className="font-medium text-gray-700">
                {video.uploadDate}
              </span>
            </p>
            }
          </div>
        )}

        <div className="mt-auto pt-2 flex justify-start gap-2 items-center text-xs text-gray-500">
          {video.type == "reference" && 
          <span className="bg-[#B0B0B01A] py-2 px-2 rounded-full">
            Uploaded on {video.uploadDate}
          </span>
          }
          <div className="flex items-center space-x-2">
            
              <span className="px-2 py-2 text-xs rounded-full bg-blue-100 text-blue-700 flex items-center gap-1">
                <FiShare2 className="w-2.5 h-2.5" /> Shared
              </span>
            
            <button
              title="Delete video"
              className="p-2 bg-[#FF33661A] text-[#FF3366] rounded-full hover:text-red-600"
            >
              <FiTrash2 className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- Main Content Component ---
const VideoContentPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabItem["id"]>(TABS[0].id);
  // const [dateFilter, setDateFilter] = useState<string>(
  //   sampleDateFilters[0].value
  // );
  const [batchFilter, setBatchFilter] = useState<string>(
    sampleBatchFilters[0].value
  );
  const [subjectFilter, setSubjectFilter] = useState<string>(
    sampleSubjectFilters[0].value
  ); // Default to "all" (placeholder value)

  const [allVideos] = useState<VideoCardData[]>(sampleVideos);

  const filteredVideos = useMemo(() => {
    return allVideos.filter((video) => {
      // Basic tab filtering
      if (video.type !== activeTab) return false;
      return true;
    });
  }, [allVideos, activeTab]); // Include all filters in dependency array

  return (
    <div className=" bg-white rounded-2xl h-fit flex-grow container mx-auto p-4 sm:p-6 space-y-6 relative">

      <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="flex space-x-4 sm:space-x-6 overflow-x-auto custom-scrollbar-thin self-start sm:self-center">
          {TABS.map((tab) => (
            <TabButton
              key={tab.id}
              label={tab.label}
              isActive={activeTab === tab.id}
              onClick={() => setActiveTab(tab.id)}
            />
          ))}
        </div>
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3  sm:self-center">
          <div className="flex items-center gap-1 text-sm border border-[#E5E7EB] text-black bg-[#F9FAFB] sm:px-3 px-2 py-2 rounded-xl">
            <FiArrowLeftCircle className="w-4 h-4 cursor-pointer hover:text-black" />
            <span>June 2025</span>
            <FiArrowRightCircle className="w-4 h-4 cursor-pointer hover:text-black" />
          </div>
          <FilterDropdown
            options={sampleBatchFilters}
            onChange={setBatchFilter}
            value={""}
          />
          <FilterDropdown
            options={sampleSubjectFilters}
            onChange={setSubjectFilter}
            value={""}
          />
        </div>
      </div>

      {/* Video Cards Grid */}
      {filteredVideos.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {filteredVideos.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 text-gray-500">
          <h3 className="text-xl font-semibold mb-2">No Videos Found</h3>
          <p>Try adjusting your filters or add new videos.</p>
        </div>
      )}
      
    </div>
  );
};

export default VideoContentPage;
