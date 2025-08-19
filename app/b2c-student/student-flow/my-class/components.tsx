// components.tsx
"use client";

import React from 'react';
import {
    FiChevronDown, FiChevronUp, FiChevronRight
} from 'react-icons/fi';
import { SubCategoryItem, ContentUITab, VideoItem, FilterDropdown, ActionButton } from './ui-component';
import MonthTab from '@/components/common-components/MonthTab/MonthTab';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select';

// --- Data Interfaces ---
export interface LearningWeek {
    id: string; title: string; videoCount: number;
    videos: { id: string; topic: string }[];
}
export interface AssessmentItemData { id: string; title: string; resourcesCount: number; }
export interface MockPaperItemData { id: string; title: string; }
export interface WorkSheetItemData { id: string; title: string; }


const StyledSelect: React.FC<{
    defaultValue?: string;
    placeholder: string;
    items: { value: string; label: string }[];
    // Add onChange handler if needed
}> = ({ defaultValue, placeholder, items }) => (
    <Select defaultValue={defaultValue}>
        <SelectTrigger className="w-fit rounded-xl sm:py-4 bg-[#F9FAFB] text-xs sm:text-sm text-black border border-[#E5E7EB]">
            <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
            {items.map(item => <SelectItem key={item.value} value={item.value}>{item.label}</SelectItem>)}
        </SelectContent>
    </Select>
);

// --- Accordion Item ---
interface LearningAccordionProps { week: LearningWeek; isOpen: boolean; onToggle: () => void; }
export const LearningAccordion: React.FC<LearningAccordionProps> = ({ week, isOpen, onToggle }) => (
    <div className="bg-[#F9FAFB] rounded-2xl overflow-hidden border border-[#E5E7EB]">

        <div
            className="w-full flex justify-between items-center p-3 sm:p-4 focus:outline-none transition-colors"
        >
            <div>

                <h3 className="text-sm sm:text-md mb-0.5 sm:mb-1 text-black text-left">
                    {week.title}
                </h3>
                <p className="text-[10px] sm:text-xs text-left mt-1 sm:mt-1.5 text-gray-500">
                    {week.videoCount} videos
                </p>
            </div>
            {isOpen ? (
                <FiChevronUp className="w-4 h-4 sm:w-5 sm:h-5 text-black cursor-pointer" onClick={onToggle} />
            ) : (
                <FiChevronDown className="w-4 h-4 sm:w-5 sm:h-5 text-black cursor-pointer" onClick={onToggle} />
            )}
        </div>
        {isOpen && (
            <div className="p-3 sm:p-4 bg-[#F9FAFB] space-y-1.5 sm:space-y-2">
                {week.videos.map((video) => (
                    <VideoItem key={video.id} topic={video.topic} />
                ))}
            </div>
        )}
    </div>
);
export const FillForm: React.FC<{setOpenModal: React.Dispatch<React.SetStateAction<string | null>>}> = ({setOpenModal}) => (

  <div className="w-full p-5 bg-white rounded-2xl flex flex-col items-center justify-center gap-4 flex-shrink-0">
    
    <h3 className="text-lg md:text-xl font-bold text-[#FF3366]">
      Request Teacher Change
    </h3>
    <ActionButton onClick={()=>setOpenModal("requestChangeSingle")} variant="primary" size="sm" className="xs:w-auto">
      Fill the Form
    </ActionButton>
  </div>
);

// --- Assessment Item ---
interface AssessmentItemProps { assessment: AssessmentItemData; onClick?: () => void; }
export const AssessmentItem: React.FC<AssessmentItemProps> = ({ assessment, onClick }) => (
    <button onClick={onClick} className="w-full flex justify-between items-center p-3 sm:p-4 text-left bg-[#F9FAFB] hover:bg-gray-100/70 rounded-2xl border border-[#E5E7EB] transition-colors">
        <div>
            <h3 className="text-base font-semibold text-black mb-1 sm:mb-2">{assessment.title}</h3>
            <p className="text-[10px] sm:text-xs text-[#6B7280]">{assessment.resourcesCount} Resources</p>
        </div>
        <FiChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-black flex-shrink-0" />
    </button>
);

// --- Mock Paper Item ---
interface MockPaperItemProps { item: MockPaperItemData; onClick?: () => void; }
export const MockPaperItem: React.FC<MockPaperItemProps> = ({ item, onClick }) => (
    <button onClick={onClick} className="w-full flex justify-between items-center p-3 sm:p-4 text-left bg-gray-50/70 hover:bg-gray-100/70 rounded-2xl border border-[#E5E7EB]  transition-colors">
        <h3 className="tracking-wide text-black text-sm sm:text-base">{item.title}</h3>
        <FiChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-black flex-shrink-0" />
    </button>
);

// --- Work Sheet Item ---
interface WorkSheetItemProps { item: WorkSheetItemData; onClick?: () => void; }
export const WorkSheetItem: React.FC<WorkSheetItemProps> = ({ item, onClick }) => (
    <button onClick={onClick} className="w-full flex justify-between items-center p-3 sm:p-4 text-left bg-gray-50/70 hover:bg-gray-100/70 rounded-2xl border border-[#E5E7EB]  transition-colors">
        <h3 className="text-black text-sm sm:text-base">{item.title}</h3>
        <FiChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-black flex-shrink-0" />
    </button>
);


// --- Major Section Components ---


// 2. SubCategorySidebar
interface SubCategorySidebarProps {
    subCategories: string[];
    activeSubCategory: string;
    onSubCategoryClick: (subCategory: string) => void;
}
export const SubCategorySidebar: React.FC<SubCategorySidebarProps> = ({ subCategories, activeSubCategory, onSubCategoryClick }) => (
    <div className="bg-white rounded-2xl p-2 sm:p-3 space-y-1.5 sm:space-y-2 md:min-h-84 lg:max-h-[calc(100vh-250px)] lg:overflow-y-auto custom-scrollbar-thin"> {/* Adjusted max-h for lg */}
        {subCategories.map(subCat => (
            <SubCategoryItem
                key={subCat}
                label={subCat}
                isActive={activeSubCategory === subCat}
                onClick={() => onSubCategoryClick(subCat)}
            />
        ))}
    </div>
);

// 3. ContentDisplayArea
interface ContentDisplayAreaProps {
    contentTabs: string[];
    activeContentTab: string;
    onContentTabClick: (tab: string) => void;
    currentWeekFilter: string;
    onWeekFilterChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    currentMonth: string;
    contentTitle: string;
    contentSubtitle?: string | null;
    children: React.ReactNode; // For rendering dynamic content based on activeContentTab
}
export const ContentDisplayArea: React.FC<ContentDisplayAreaProps> = (props) => (
    <div className="bg-white rounded-2xl  p-4 md:p-6">
        <div className="mb-4 md:mb-6 flex flex-col sm:flex-row   justify-between items-start sm:items-center sm:gap-3 gap-1">
            <nav className="-mb-px flex  space-x-1 sm:space-x-2 flex-wrap md:flex-nowrap" aria-label="Content Tabs">
                {props.contentTabs.map(tab => (
                    <ContentUITab key={tab} label={tab} isActive={props.activeContentTab === tab} onClick={() => props.onContentTabClick(tab)} />
                ))}
            </nav>
            <div className="flex   items-center gap-2 sm:gap-3 self-end md:self-center">
                <StyledSelect
                    defaultValue="all"
                    placeholder="Filter"
                    items={[
                        { value: "all", label: "Week 1" },
                        { value: "batch1", label: "Batch 1" },
                    ]}
                />                <MonthTab />
            </div>
        </div>
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 md:mb-6 gap-2 sm:gap-4">
            <div>
                <h2 className="text-lg md:text-xl font-semibold text-[#3366FF]">{props.contentTitle}</h2>
                {props.contentSubtitle && <p className="text-sm md:text-base text-[#3366FF] mt-0.5 sm:mt-1">{props.contentSubtitle}</p>}
            </div>
        </div>
        <div>{props.children}</div>
    </div>
);