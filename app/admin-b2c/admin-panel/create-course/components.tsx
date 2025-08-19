// components.tsx
"use client";

import React, { useState } from 'react';
import { StepperTabButton, FormInput, FileUploadInput, DropdownSelect, RadioButtonGroup, ActionButton } from './ui-components';
import { useRouter } from 'next/navigation';

// --- Reusable Interfaces ---
export interface VideoData { id: string; videoTitle: string; videoDescription: string; }
export interface ModuleData { id: string; moduleTitle: string; videos: VideoData[]; }

// --- Section Header Component ---
const SectionHeader: React.FC<{ title: string }> = ({ title }) => (
    <div className="text-[#FF3366] font-semibold border border-[#E5E7EB] bg-[#F9FAFB] px-4 py-3 rounded-2xl text-sm sm:text-base">
        {title}
    </div>
);

// --- Reusable Form Part Components ---

// Part 1: Course Detail
export const CourseDetailPart: React.FC = () => (
    <div className="space-y-4">
        <SectionHeader title="Course Detail" />
        <div className="max-w-lg space-y-4 px-2 sm:px-0">
            <FormInput label="Enter Course Name" id="courseName" placeholder="Name" />
            <FormInput label="About Course" id="aboutCourse" placeholder="Text" isTextArea />
            <DropdownSelect label="Course Category" id="courseCategory" value="Skill Development" onChange={() => { }} options={["Skill Development", "Academics", "Sports"]} />
            <FileUploadInput label="Course Thumbnail / Poster" id="courseThumbnail" placeholder="Upload Image" />
            <FileUploadInput label="Upload Pedagogy" id="uploadPedagogy" placeholder="Upload Pedagogy" />
            <FileUploadInput label="Upload Curriculum" id="uploadCurriculum" placeholder="Upload Curriculum" />
            <FileUploadInput label="Upload Demo Video" id="uploadDemoVideo" placeholder="Upload Curriculum" />
            <FormInput label="Course Validity" id="courseValidity" placeholder="3 Months" />
        </div>
    </div>
);

export const KnowMorePart: React.FC = () => (
    <div className="space-y-4">
        <SectionHeader title="Know More Section" />
        <div className="max-w-lg space-y-4 px-2 sm:px-0">
            <FormInput label="Short Description" id="Short" placeholder="Text" isTextArea />
            <FormInput label="Overview" id="Overview" placeholder="Text" isTextArea />
            <FormInput label="Characteristics" id="Characteristics" placeholder="Text" isTextArea />
            <FileUploadInput label="Upload Banner 1" id="Banner 1" placeholder="Upload Image" />
            <FileUploadInput label="Upload Banner 2" id="Banner 2" placeholder="Upload Image" />
            <FileUploadInput label="Upload Supporting Files" id="Banner 3" placeholder="Upload File" />
        </div>
    </div>
);

// Part 2: Add Levels
export const AddLevelsPart: React.FC = () => {
    const [modal, setModal] = useState<boolean>(false);
    return (
        <div className="space-y-4">
            <SectionHeader title="Add Levels" />
            <div className="max-w-lg w-full space-y-4 px-2 sm:px-0">
                <label className="block text-sm text-black mb-1.5 sm:mb-2">Add Levels</label>

                {modal && <div className="p-4 border border-[#D5D5D5] rounded-2xl space-y-4 bg-[#F9FAFB]">
                    <label className="block font-medium text-center text-sm text-black mb-1.5 sm:mb-2">Add Levels</label>

                    <FormInput
                        label="Level Number"
                        id={`levelNumber`}
                        placeholder="Text"
                    />
                    <FormInput
                        label="Level Description"
                        id={`levelDescription`}
                        placeholder="Text"
                    />

                    <div className='flex gap-2 w-fit mx-auto'>
                        <button onClick={() => { setModal(false) }} className=" bg-[#FF33661A] text-[#FF3366]  py-3 text-sm transition-colors duration-150 cursor-pointer w-32 hover:bg-pink-200 rounded-full">Cancel</button>
                        <button className=" bg-[#3366FF] text-white font-medium py-3 text-sm transition-colors duration-150 cursor-pointer w-32 hover:bg-blue-500 rounded-full">Add</button>
                    </div>
                </div>}

                <div className=''><ActionButton onClick={() => { setModal(true) }} variant="outline" className=''>{modal ? "Add Level" : "Add Levels"}</ActionButton></div>
            </div>
        </div>
    );
}

// Part 3: Pricing & Discounts
export const PricingDiscountsPart: React.FC = () => (
    <div className="space-y-4">
        <SectionHeader title="Pricings and Discounts" />
        <div className="max-w-lg space-y-4 px-2 sm:px-0">
            <FormInput label="Course Pricing" id="coursePricing" placeholder="Price" icon={<span className="font-sans">₹</span>} />
            <FormInput label="Apply Discounts" id="applyDiscounts" placeholder="-" />
        </div>
    </div>
);

// Part 4: Batch & Time
export const BatchAndTimePart: React.FC = () => {
    const [batchSize, setBatchSize] = React.useState('1:1 Class');
    const [batchTime, setBatchTime] = React.useState('Morning');
    const [batchDays, setBatchDays] = React.useState('Mon - Thu');
    return (
        <div className="space-y-4">
            <SectionHeader title="Batch and Time" />
            <div className="max-w-xl space-y-10 px-2 sm:px-0">
                <RadioButtonGroup label="Batch Size" name="batchSize" options={["1:1 Class", "1:5 Class", "1:10 Class"]} selectedValue={batchSize} onSelect={setBatchSize} />
                <RadioButtonGroup label="Batch Time" name="batchTime" options={["Morning", "Afternoon", "Evening", "Night"]} selectedValue={batchTime} onSelect={setBatchTime} />
                <RadioButtonGroup label="Batch Days" name="batchDays" options={["Mon - Thu", "Tue - Fri", "Wed - Sat", "Weekend", "Custom Day"]} selectedValue={batchDays} onSelect={setBatchDays} />
            </div>
        </div>
    );
};

// Part 5: Modules & Videos
interface ModulesAndVideosPartProps {
    // This part is complex, so it needs its state and handlers passed down
    modules: ModuleData[];
    onModuleChange: (moduleIndex: number, e: React.ChangeEvent<HTMLInputElement>) => void;
    onVideoChange: (moduleIndex: number, videoIndex: number, e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    onAddVideo: (moduleIndex: number) => void;
    onAddNewModule: () => void;
}
export const ModulesAndVideosPart: React.FC<ModulesAndVideosPartProps> = ({ modules, onModuleChange, onVideoChange, onAddVideo, onAddNewModule }) => {
    const [videoModal, setVideoModal] = useState<boolean>(false);
    const [moduleModal, setModuleModal] = useState<boolean>(false);
    return (
        <div className="space-y-4">
            <SectionHeader title="Modules and Videos" />
            <div className="max-w-lg space-y-6 px-2">
                {modules.map((module, moduleIndex) => (
                    <div key={module.id} className="space-y-4 ">
                        <FormInput
                            label="Module Title" id={`moduleTitle-${module.id}`} placeholder="Text"
                            value={module.moduleTitle}
                            onChange={(e) => onModuleChange(moduleIndex, e as any)}
                        />
                        {module.videos.map((video, videoIndex) => (
                            <div key={video.id} className="space-y-4">
                                <FormInput
                                    label="Video Title" id={`videoTitle-${video.id}`} placeholder="Text"
                                    value={video.videoTitle}
                                    onChange={(e) => onVideoChange(moduleIndex, videoIndex, e as any)}
                                />
                                <FileUploadInput label={`Upload Video ${videoIndex + 1}`} id={`videoFile-${video.id}`} placeholder="Upload Image" />
                                <FormInput
                                    label="Video Description" id={`videoDescription-${video.id}`} placeholder="Text"
                                    value={video.videoDescription}
                                    onChange={(e) => onVideoChange(moduleIndex, videoIndex, e as any)}
                                />
                            </div>
                        ))}
                        <div className="flex flex-col gap-4 ">
                            <div className='flex flex-col gap-4'>

                                {videoModal && <div className="p-4 border border-[#D5D5D5] rounded-2xl space-y-4 bg-[#F9FAFB]">
                                    <label className="block font-medium text-center text-sm text-black mb-1.5 sm:mb-2">Add Video</label>

                                    <FormInput
                                        label="Video Title"
                                        id={`levelNumber`}
                                        placeholder="Text"
                                    />
                                    <FileUploadInput label={`Upload Video 1`} id={`videoFile2`} placeholder="Upload Image" />
                                    <FormInput
                                        label="Video Description"
                                        id={`levelDescription`}
                                        placeholder="Text"
                                    />

                                    <div className='flex gap-2 w-fit mx-auto'>
                                        <button onClick={() => { setVideoModal(false) }} className=" bg-[#FF33661A] text-[#FF3366] font-medium py-3 text-sm transition-colors duration-150 cursor-pointer  w-28 md:w-32 hover:bg-pink-200 rounded-full">Cancel</button>
                                        <button className=" bg-[#3366FF] text-white font-medium py-3 text-sm transition-colors duration-150 cursor-pointer  w-28 md:w-32 hover:bg-blue-500 rounded-full">Add</button>
                                    </div>
                                </div>}
                                <ActionButton variant="outline" onClick={() => setVideoModal(true)}>{videoModal ? "Add Video" : "Add More Videos"}</ActionButton>
                            </div>
                            <div className='flex flex-col gap-4'>
                                {moduleModal && <div className="p-4 border border-[#D5D5D5] rounded-2xl space-y-4 bg-[#F9FAFB]">
                                    <label className="block font-medium text-center text-sm text-black mb-1.5 sm:mb-2">Add Module</label>

                                    <FormInput
                                        label="Module Title"
                                        id={`levelNumber`}
                                        placeholder="Text"
                                    />
                                    <FormInput
                                        label="Video Title"
                                        id={`levelNumber`}
                                        placeholder="Text"
                                    />
                                    <FileUploadInput label={`Upload Video 1`} id={`videoFile2`} placeholder="Upload Image" />
                                    <FormInput
                                        label="Video Description"
                                        id={`levelDescription`}
                                        placeholder="Text"
                                    />

                                    <div className='flex gap-2 w-fit mx-auto'>
                                        <button onClick={() => { setModuleModal(false) }} className=" bg-[#FF33661A] text-[#FF3366] font-medium py-3 text-sm transition-colors duration-150 cursor-pointer w-32 hover:bg-pink-200 rounded-full">Cancel</button>
                                    </div>
                                </div>}
                                <ActionButton variant="outline" onClick={() => setModuleModal(true)}>Add New Module</ActionButton>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

interface CourseCreationStepperProps {
    steps: string[];
    activeStep: string;
    onStepClick: (step: string) => void;
}

export const CourseCreationStepper: React.FC<CourseCreationStepperProps> = ({ steps, activeStep, onStepClick }) => {

    const Router = useRouter();
    return (
        <div className="border border-[#E5E7EB] px-2 py-1.5 mb-4 rounded-xl sm:rounded-2xl w-full">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-center gap-2 relative">
                <nav className="w-full flex justify-start sm:justify-center overflow-x-auto no-scrollbar">
                    <div className="flex items-center space-x-1 sm:space-x-2 min-w-max">
                        {steps.map((step) => (
                            <StepperTabButton
                                key={step}
                                label={step}
                                isActive={activeStep === step}
                                onClick={() => onStepClick(step)}
                            />
                        ))}
                    </div>
                </nav>
                {activeStep === "Preview" &&
                    <div className="w-full lg:w-auto lg:absolute lg:right-0">
                        <button
                            onClick={() => {
                                Router.push('/admin-b2c/admin-panel/know-more')
                            }}
                            className={`font-semibold text-xs sm:text-sm transition-colors duration-150 cursor-pointer bg-[#F9FAFB] w-full lg:w-auto text-black border border-[#D5D5D5] hover:bg-gray-50 rounded-xl px-3 py-2 sm:px-4 sm:py-2.5 flex-shrink-0 whitespace-nowrap`}>
                            Preview Know More
                        </button>
                    </div>
                }
            </div>
        </div>
    );
}