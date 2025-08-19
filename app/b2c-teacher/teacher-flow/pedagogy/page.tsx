"use client";

import React, { useState, useEffect, useMemo, useRef } from "react";
import {
    FiArrowLeft,
} from "react-icons/fi";
import Header from "@/components/layout/TeacherB2CHeader"
import Footer from "@/components/layout/Footer";
import { AnimatePresence, motion } from "framer-motion";
import { IoIosArrowDown } from "react-icons/io";

// --- Style Constants ---
const ACCENT_PINK = "#FF3366";
const PRIMARY_BLUE = "#3366FF";

// --- Data Interfaces ---
interface TopCategoryTab {
    id: string;
    name: string;
}

interface ChapterSubTab {
    id: string;
    name: string;
}

interface ChapterAccordionItem {
    id: string;
    name: string;
}

interface LearningObjective {
    id: string;
    level: string;
    points: string[];
}

interface MaterialItem {
    id: string;
    text: string;
}

interface PedagogyInfo {
    learningObjectives: LearningObjective[];
    materialsRequired: MaterialItem[];
    // This info should ideally change based on selected chapter/accordion
}

// --- Sample Data ---
const sampleTopCategories: TopCategoryTab[] = [
    { id: "cat1", name: "Category 1" },
    { id: "cat2", name: "Category 2" },
    { id: "cat3", name: "Category 3" },
    { id: "cat4", name: "Category 4" },
    { id: "cat5", name: "Category 5" },
];

const sampleChapterSubTabs: ChapterSubTab[] = [
    { id: "ch1", name: "Chapter 1" },
    { id: "ch2", name: "Chapter 2" },
    { id: "ch3", name: "Chapter 3" },
];

const sampleChapterAccordions: ChapterAccordionItem[] = Array.from(
    { length: 20 },
    (_, i) => ({
        id: `acc${i + 1}`,
        name: "Chapter Name",
    })
);

const samplePedagogyInfo: PedagogyInfo = {
    learningObjectives: [
        {
            id: "lo1",
            level: "WHITE:",
            points: [
                "Recall addition and subtraction of like proper and improper fractions.",
                "Recall expressing mixed numbers as improper fractions.",
                "Recall the addition and subtraction of mixed numbers.",
                "Interpret the meaning of words like ‘Sum total’, ‘in all’ or altogether, ‘how much left or remaining’, ‘which is more or less’, etc, and correlate them to symbols of addition and subtraction ie,+ and - signs, in order to solve the word problem.",
                "Attempt to solve 5 to 10 questions with or without support.",
            ],
        },
        {
            id: "lo2",
            level: "PINK:",
            points: [
                /* ... similar points ... */
            ],
        },
        {
            id: "lo3",
            level: "PURPLE:",
            points: [
                /* ... similar points ... */
            ],
        },
    ],
    materialsRequired: [
        { id: "mat1", text: "Worksheets for each group" },
        { id: "mat2", text: "A performance record/map for the students" },
        { id: "mat3", text: "Prescribed textbook" },
    ],
};
// Fill in PINK and PURPLE points if needed for full display
samplePedagogyInfo.learningObjectives[1].points = [
    ...samplePedagogyInfo.learningObjectives[0].points,
];
samplePedagogyInfo.learningObjectives[2].points = [
    ...samplePedagogyInfo.learningObjectives[0].points,
];

// --- Helper Components ---

const TopTabButton: React.FC<{
    tab: TopCategoryTab;
    isActive: boolean;
    onClick: () => void;
}> = ({ tab, isActive, onClick }) => (
    <button
        onClick={onClick}
        className={`px-2 sm:px-3 md:px-4 py-1.5 md:py-2.5 rounded-lg md:rounded-2xl text-sm md:text-base font-medium transition-all duration-200 text-nowrap
      ${isActive
                ? `bg-[${ACCENT_PINK}] text-white`
                : "bg-transparent text-gray-600 hover:bg-gray-100"
            }`}
    >
        {tab.name}
    </button>
);

const ChapterSubTabButton: React.FC<{
    tab: ChapterSubTab;
    isActive: boolean;
    onClick: () => void;
}> = ({ tab, isActive, onClick }) => (
    <button
        onClick={onClick}
        className={`p-1.5 text-sm sm:text-base font-semibold rounded-t-lg transition-all duration-150 text-nowrap focus:outline-none
      ${isActive
                ? `text-[${PRIMARY_BLUE}] border-b-3 border-[${PRIMARY_BLUE}]`
                : "text-[#6B7280] hover:text-black border-b-2 border-transparent hover:border-gray-300"
            }`}
    >
        {tab.name}
    </button>
);

const ChapterAccordion: React.FC<{
    item: ChapterAccordionItem;
    isOpen: boolean;
    onToggle: () => void;
}> = ({ item, isOpen, onToggle }) => {
    return (
        <div
            className={`${isOpen ? "p-2 sm:p-4 m-1 sm:m-2 mb-2" : "border border-[#E5E7EB]"
                } relative z-20 rounded-2xl overflow-hidden transition-all`}
        >
            {/* Background image overlay */}
            <div
                className="absolute inset-0 bg-cover rounded-3xl bg-repeat -z-10"
                style={{
                    backgroundImage: 'url("/pattern-3.png")',
                    filter: "brightness(0.7) grayscale(40%)",
                }}
            />

            {/* Button to toggle accordion */}
            <button
                onClick={onToggle}
                className={`${isOpen ? "bg-white px-2 md:px-6 py-2.5" : ""
                    } w-full bg-[#F9FAFB] rounded-xl sm:rounded-2xl flex justify-between items-center p-3 sm:px-4 sm:py-3 font-medium focus:outline-none`}
            >
                <span className="text-sm md:text-base lg:text-lg">{item.name}</span>
                {isOpen ? (
                    <div className="flex gap-2 text-[#6B7280] text-[10px] sm:text-xs items-center">
                        <p>Duration : 5 Hrs/Mins</p>
                        <p>Topic Name: Name</p>
                        <svg
                            width={20}
                            height={20}
                            viewBox="0 0 24 25"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <rect
                                width={24}
                                height={24}
                                rx={12}
                                transform="matrix(1 0 0 -1 0 24.5)"
                                fill="black"
                                fillOpacity="0.3"
                            />
                            <path
                                d="M6 15.5L12 9.5L18 15.5"
                                stroke="white"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </div>
                ) : (
                    <IoIosArrowDown className="text-lg md:text-xl text-black" />
                )}
            </button>

            {/* Optional expanded content (currently just placeholder) */}
            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="p-3 sm:p-4 rounded-2xl mt-2 bg-white text-xs text-[#6B7280]">
                            <h6 className="text-sm sm:text-lg text-black  mb-2">
                                Before the class
                            </h6>
                            <div className="space-y-3 md:space-y-4 lg:space-y-6 text-xs sm:text-sm">
                                <p>
                                    1. Study the Lesson Plan Prepare a list of students according
                                    to their groups. Keep the printouts of the next homework
                                    assignment ready and answers of the previous home assignment.
                                </p>
                                <p>
                                    1. Encourage the students to speak up and participate in the
                                    discussion. Getting the answer right is not the purpose,
                                    trying and thinking about the concept is more important. You
                                    can use statements like excellent, you are thinking in the
                                    right direction.
                                </p>
                                <p>1. Definition of nth root of a real number.</p>
                                <p>
                                    1. Basically, before introducing today’s topic you first need
                                    to revise the addition and subtraction of proper and improper
                                    fractions, and mixed numbers.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const InfoPanel: React.FC<{ info: PedagogyInfo }> = ({ info }) => (
    <div
        className={`space-y-4 md:space-y-6 h-full`}
    >
        <div className="bg-white rounded-2xl p-4 sm:p-5">
            <h3 className={`text-base sm:text-lg font-semibold text-[${PRIMARY_BLUE}] mb-3.5`}>
                Learning Objectives
            </h3>
            <div className="space-y-2 md:space-y-3 text-xs md:text-sm lg:text-[15px] text-black">
                {info.learningObjectives.map((obj) => (
                    <div key={obj.id}>
                        <p className="font-medium text-black mb-3">{obj.level}</p>
                        <ul className="list-disc  list-outside pl-4 space-y-1.5">
                            {obj.points.map((point, idx) => (
                                <li key={idx}>{point}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>

        <div className="bg-white rounded-2xl p-4 sm:p-5">
            <h3 className={`text-base sm:text-lg font-semibold text-[${PRIMARY_BLUE}] mb-2.5`}>
                Material required:
            </h3>
            <ul className="list-disc list-outside pl-4 space-y-1.5 text-xs md:text-sm lg:text-[16px] text-black">
                {info.materialsRequired.map((mat) => (
                    <li key={mat.id}>{mat.text}</li>
                ))}
            </ul>
        </div>
    </div>
);

// --- PedagogyContent Component ---
const PedagogyContent: React.FC = () => {
    const [activeCategoryId, setActiveCategoryId] = useState<string>(
        sampleTopCategories[0]?.id || ""
    );
    const [activeChapterId, setActiveChapterId] = useState<string>("ch1");
    const [openAccordionIds, setOpenAccordionIds] = useState<string[]>(["acc1"]);
    const [pedagogyData] = useState<PedagogyInfo>(samplePedagogyInfo);

    const handleAccordionToggle = (accordionId: string) => {
        setOpenAccordionIds((prevIds) =>
            prevIds.includes(accordionId)
                ? prevIds.filter((id) => id !== accordionId)
                : [...prevIds, accordionId]
        );
    };

    const [rightHeight, setRightHeight] = useState<number>(500);
    const rightRef = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        const updateHeight = () => {
            if (rightRef.current) {
                setRightHeight(rightRef.current.offsetHeight);
            }
        }

        updateHeight();

        const observer = new ResizeObserver(updateHeight)

        if (rightRef.current) {
            observer.observe(rightRef.current);
        }

        return () => {
            if (rightRef.current) {
                observer.unobserve(rightRef.current);
            }
            observer.disconnect();
        }
    }, [])
    return (
        <>
            {/* Top Categories */}
            <div className="bg-white p-1.5 mb-4 sm:mb-6 rounded-2xl w-full overflow-x-auto custom-scrollbar-thin">
                <nav className="flex space-x-1 sm:space-x-4 justify-start sm:justify-center min-w-max px-2 sm:px-4">
                    {sampleTopCategories.map((cat) => (
                        <TopTabButton
                            key={cat.id}
                            tab={cat}
                            isActive={activeCategoryId === cat.id}
                            onClick={() => setActiveCategoryId(cat.id)}
                        />
                    ))}
                </nav>
            </div>


            <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">

                {/* Left Column */}
                <div className={`bg-white rounded-2xl py-3 sm:py-5 lg:col-span-3 space-y-4 border-r-0 lg:border-r border-gray-200 h-full`}>

                    {/* Chapter Sub-Tabs */}
                    <nav className="flex space-x-2 sm:space-x-4 md:space-x-6 overflow-x-auto custom-scrollbar-thin px-4 sm:px-6">
                        {sampleChapterSubTabs.map((chTab) => (
                            <ChapterSubTabButton
                                key={chTab.id}
                                tab={chTab}
                                isActive={activeChapterId === chTab.id}
                                onClick={() => {
                                    setActiveChapterId(chTab.id);
                                }}
                            />
                        ))}
                    </nav>

                    {/* Chapter Accordions */}
                    <div
                        className={`space-y-2 mb-2 md:mb-4 overflow-y-auto custom-scrollbar-thin pr-2 ml-4 mr-3 overflow-hidden h-full max-h-[800px] lg:max-h-none lg:h-[${rightHeight - 52}px]`}
                    >
                        {sampleChapterAccordions.map((acc) => (
                            <ChapterAccordion
                                key={acc.id}
                                item={acc}
                                isOpen={openAccordionIds.includes(acc.id)}
                                onToggle={() => handleAccordionToggle(acc.id)}
                            />
                        ))}
                    </div>
                </div>

                {/* Right Column: Info Panel */}
                <div className="lg:col-span-2" ref={rightRef}>
                    <InfoPanel info={pedagogyData} />
                </div>
            </div>
        </>
    );
};

// --- Main Page Export ---
export default function PedagogyPage() {
    const headerUser = {
        name: "Educator Name",
        role: "Teacher",
        avatarSrc: "/teacher-b2b/profile.png",
    };
    const handleBackClick = () => {
        if (typeof window !== "undefined") window.history.back();
    };

    return (
        <div className="bg-[#eeeeee] min-h-screen flex flex-col">
            <Header user={headerUser} /> {/* Assuming user prop exists */}
            <div className="bg-white px-4 sm:px-6 py-3 sticky top-0 z-40">
                <div className="mx-auto max-w-[96rem] flex items-center gap-3">
                    <button onClick={handleBackClick} className="p-1.5 text-black focus:outline-none rounded-md" aria-label="Go back">
                        <FiArrowLeft className="w-5 h-5" />
                    </button>
                    <h1 className="text-lg sm:text-xl font-semibold" style={{ color: ACCENT_PINK }}>Pedagogy</h1>
                </div>
            </div>
            <main className="flex-grow w-full max-w-[94rem] mx-auto p-4 md:p-6">
                <PedagogyContent />
            </main>
            <Footer />
        </div>
    );
}
