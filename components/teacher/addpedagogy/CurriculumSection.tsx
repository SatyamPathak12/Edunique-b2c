"use client"
import React, { useState } from 'react';
import { cn } from "@/lib/utils";

interface VideoItem {
  id: string;
  title: string;
}

interface SectionData {
  id: string;
  number: string;
  title: string;
  videos: VideoItem[];
}

interface CurriculumSectionProps {
  section: SectionData;
  onAddVideo: (sectionId: string) => void;
  onEditSection: (sectionId: string) => void;
  onDeleteSection: (sectionId: string) => void;
  onEditVideo: (sectionId: string, videoId: string) => void;
  onDeleteVideo: (sectionId: string, videoId: string) => void;
  className?: string;
}

const CurriculumSection = ({
  section,
  onAddVideo,
  onEditSection,
  onDeleteSection,
  onEditVideo,
  onDeleteVideo,
  className
}: CurriculumSectionProps) => {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <div className={cn("mb-6 bg-gray-100 rounded-lg overflow-hidden", className)}>
      <div className="flex items-center justify-between p-4 bg-gray-100">
        <div className="flex items-center">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="mr-2 text-gray-600 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`w-6 h-6 transform transition-transform ${isExpanded ? 'rotate-0' : '-rotate-90'}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <span className="mr-3 text-lg font-semibold">{section.number}</span>
          <h3 className="text-lg font-semibold">{section.title}</h3>
        </div>
        <div className="flex items-center space-x-2">
          <button
            onClick={() => onAddVideo(section.id)}
            className="flex items-center px-3 py-1 text-sm font-medium text-blue-600 bg-white border border-blue-600 rounded-md hover:bg-blue-50"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className="w-5 h-4 mr-1"
            >
              <polygon points="23 7 16 12 23 17 23 7"/>
              <rect width="15" height="14" x="1" y="5" rx="2" ry="2"/>
            </svg>
            Add Video
          </button>
          <button
            onClick={() => onDeleteSection(section.id)}
            className="p-1 text-white bg-red-500 rounded hover:bg-red-600"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className="w-5 h-5"
            >
              <path d="M3 6h18"/>
              <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/>
              <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/>
            </svg>
          </button>
          <button
            onClick={() => onEditSection(section.id)}
            className="p-1 text-white bg-gray-500 rounded hover:bg-gray-600"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className="w-5 h-5"
            >
              <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/>
              <path d="m15 5 4 4"/>
            </svg>
          </button>
        </div>
      </div>
      
      {isExpanded && (
        <div className="px-4 pb-4">
          {section.videos.map((video, index) => (
            <div key={video.id} className="flex items-center justify-between py-3 border-b border-gray-200 last:border-0">
              <div className="flex items-center text-gray-700">
                <span className="w-8 mr-3 text-gray-500">{(index + 1).toString().padStart(2, '0')}</span>
                <div className="flex items-center">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    className="w-4 h-4 mr-2 text-red-500"
                  >
                    <polygon points="23 7 16 12 23 17 23 7"/>
                    <rect width="15" height="14" x="1" y="5" rx="2" ry="2"/>
                  </svg>
                  {video.title}
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => onDeleteVideo(section.id, video.id)}
                  className="p-1 text-red-500 hover:text-red-700"
                >
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    className="w-5 h-5"
                  >
                    <path d="M3 6h18"/>
                    <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/>
                    <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/>
                  </svg>
                </button>
                <button
                  onClick={() => onEditVideo(section.id, video.id)}
                  className="p-1 text-gray-500 hover:text-gray-700"
                >
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    className="w-5 h-5"
                  >
                    <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/>
                    <path d="m15 5 4 4"/>
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CurriculumSection;
