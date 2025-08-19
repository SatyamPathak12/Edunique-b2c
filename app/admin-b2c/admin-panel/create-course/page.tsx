"use client";

import React, { useState, useEffect } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import {
    CourseCreationStepper,
    CourseDetailPart, 
    AddLevelsPart,
    PricingDiscountsPart,
    BatchAndTimePart,
    ModulesAndVideosPart,
    ModuleData, 
    VideoData,
    KnowMorePart
} from './components';
import Preview from './preview';
import { ActionButton } from './ui-components';
import GoBack from '@/components/principal/goback';

const creationSteps = ["Add Details", "Add Videos", "Know More Section", "Preview"];

export default function CourseCreationFlowPage() {
    const [activeStep, setActiveStep] = useState("Add Details");
    const [modules, setModules] = useState<ModuleData[]>([]);
    
    useEffect(() => {
        setModules([{ id: crypto.randomUUID(), moduleTitle: '', videos: [{ id: crypto.randomUUID(), videoTitle: '', videoDescription: '' }] }]);
    }, []);

    const handleContinue = () => {
        const currentIndex = creationSteps.indexOf(activeStep);
        if (currentIndex < creationSteps.length - 1) {
            setActiveStep(creationSteps[currentIndex + 1]);
        } else {
            // Final submission logic
            console.log("Final Course Data:", { modules });
            alert("Course Creation Complete!");
        }
    };

    const handleModuleChange = (moduleIndex: number, e: React.ChangeEvent<HTMLInputElement>) => {
        const newModules = [...modules];
        newModules[moduleIndex].moduleTitle = e.target.value;
        setModules(newModules);
    };
    const handleVideoChange = (moduleIndex: number, videoIndex: number, e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const field = e.target.id.split('-')[0] as keyof VideoData;
        const newModules = [...modules];
        (newModules[moduleIndex].videos[videoIndex] as any)[field] = e.target.value;
        setModules(newModules);
    };
    const handleAddVideo = (moduleIndex: number) => {
        const newModules = [...modules];
        newModules[moduleIndex].videos.push({ id: crypto.randomUUID(), videoTitle: '', videoDescription: '' });
        setModules(newModules);
    };
    const handleAddNewModule = () => {
        setModules(prev => [...prev, { id: crypto.randomUUID(), moduleTitle: '', videos: [{ id: crypto.randomUUID(), videoTitle: '', videoDescription: '' }] }]);
    };

    const renderActiveStepContent = () => {
        switch (activeStep) {
            case "Add Details":
                return (
                    <div className="space-y-6">
                        <CourseDetailPart />
                        <AddLevelsPart />
                        <PricingDiscountsPart />
                        <BatchAndTimePart />

                        <div className='mt-6'>
                            <ActionButton variant="primary" onClick={handleContinue}>
                                Continue
                            </ActionButton>
                        </div>
                    </div>
                );
            case "Know More Section":
                return (
                    <div className="space-y-6">
                        <KnowMorePart />

                        <div className='mt-6'>
                            <ActionButton variant="primary" onClick={handleContinue}>
                                Publish
                            </ActionButton>
                        </div>
                    </div>
                );
            case "Add Videos":
                return (
                    <div>
                        <ModulesAndVideosPart
                            modules={modules}
                            onModuleChange={handleModuleChange}
                            onVideoChange={handleVideoChange}
                            onAddVideo={handleAddVideo}
                            onAddNewModule={handleAddNewModule}
                        />

                        <div className='mt-6'>
                            <ActionButton variant="primary" onClick={handleContinue}>
                                Continue
                            </ActionButton>
                        </div>
                    </div>
                );
            case "Preview":
                return (
                    <div>
                        <Preview />

                        <div className='mt-6 mx-auto w-fit'>
                            <ActionButton variant="primary" onClick={handleContinue} className='bg-[#FF3366]'>
                                Publish Course
                            </ActionButton>
                        </div>
                    </div>
                );
            default:
                return <div className="text-center py-20 text-gray-500">Content for "{activeStep}" goes here.</div>;
        }
    };

    return (
        <div className="bg-gray-100 min-h-screen w-full flex flex-col">
            <GoBack GoBackHeading="Add Course" toLink='/admin-b2c/admin-panel/course-management'/>
            <div className="px-4 sm:px-6 lg:px-8">
                <main className="bg-white rounded-2xl w-full max-w-screen-xl mx-auto my-6 p-3 sm:p-4 md:p-6">
                    <CourseCreationStepper
                        steps={creationSteps}
                        activeStep={activeStep}
                        onStepClick={setActiveStep}
                    />
                    <div className="mt-6">
                        {renderActiveStepContent()}
                    </div>
                </main>
            </div>
        </div>
    );
}