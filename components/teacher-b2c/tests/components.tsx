// components.tsx
"use client";

import React, { useState } from 'react';
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"; // For actions menu
import { Info } from "lucide-react"; // Or use Fi versions
import { FiEye, FiEdit2, FiTrash2 } from "react-icons/fi"; // Or use Fi versions
// import { FiEye, FiEdit2, FiTrash2 } from "react-icons/fi";
import { CustomTabButton, StyledSelect, ActionButton, DateNavigator } from './ui-components';
import { useRouter } from 'next/navigation';

// --- Interfaces (specific to components) ---
export interface Test {
    id: string; title: string; batch: string; date: string;
    status?: string; studentsEnrolled?: number; studentsAttended?: number; averageScores?: number;
}
type TestType = "scheduled" | "completed" | "saved";

// --- Sub-components for TestListItem ---
const TestItemStats: React.FC<{ test: Test }> = ({ test }) => (
    <div className="mt-2 sm:mt-4 grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3 max-w-lg">
        <div className="text-center bg-[#F3F4F6] p-2 rounded-xl sm:rounded-2xl flex flex-col gap-2">
            <p className="text-[10px] sm:text-sm text-[#6B7280]">Students Enrolled</p>
            <p className="text-sm sm:text-lg font-semibold text-[#3366FF]">{test.studentsEnrolled ?? "-"}</p>
        </div>
        <div className="text-center bg-[#F3F4F6] p-2 rounded-xl sm:rounded-2xl flex flex-col gap-2">
            <p className="text-[10px] sm:text-sm text-[#6B7280]">Students Attended</p>
            <p className="text-sm sm:text-lg font-semibold text-[#3366FF]">{test.studentsAttended ?? "-"}</p>
        </div>
        <div className="text-center bg-[#F3F4F6] p-2 rounded-xl sm:rounded-2xl col-span-2 sm:col-span-1 mt-2 sm:mt-0 flex flex-col gap-2">
            <p className="text-[10px] sm:text-sm text-[#6B7280]">Average Score</p>
            <p className="text-sm sm:text-lg font-semibold text-[#3366FF]">{test.averageScores ?? "-"}</p>
        </div>
    </div>
);

const ActionsMenu: React.FC<{ type: TestType, testType?: "BW Test" | "Assessment" | "Quiz"; }> = ({ type, testType }) => {
    const actions = {
        scheduled: [{ label: "View", icon: FiEye, testStep: "3" }, { label: "Edit", icon: FiEdit2, testStep: "1" }, { label: "Delete", icon: FiTrash2 }],
        completed: [{ label: "View", icon: FiEye }, { label: "Edit", icon: FiEdit2 }, { label: "Delete", icon: FiTrash2 }],
        saved: [{ label: "Edit", icon: FiEdit2, testStep: "2" }, { label: "Delete", icon: FiTrash2 }],
    };

    const testLabel = () => {
        switch (testType) {
            case "BW Test":
                return "test";
            case "Assessment":
                return "assessment";
            case "Quiz":
                return "quiz";
            default:
                return "";
        }
    }

    const label = testLabel();

    const Router = useRouter();
    const Redirect = (testStep: string) => Router.push(`/b2c-teacher/teacher-flow/create-${label}?step=${testStep}`);
    return (
        <div className="bg-white p-1.5 rounded-2xl w-36 shadow-lg flex flex-col gap-1">
            {(actions[type] || []).map(({ label, icon: Icon }) => (
                <button onClick={() => {
                    if(label === "View") Redirect("3");
                    else if(label === "Edit") switch(type){
                        case 'scheduled': Redirect("1"); break;
                        case 'saved': Redirect("2"); break;
                    }
                }} key={label} className="w-full flex items-center justify-center gap-1.5 text-left px-3 py-2 rounded-xl text-sm text-[#3366FF] bg-[#3366FF1A] hover:bg-blue-100 cursor-pointer">
                    <Icon className="w-4 h-4" /> <span className="">{label}</span>
                </button>
            ))}
        </div>
    );
};

// --- TestListItem Component ---
const TestListItem: React.FC<{ test: Test, type: TestType, testType?: "BW Test" | "Assessment" | "Quiz"; }> = ({ test, type, testType }) => {
    const testLabel = () => {
        switch (testType) {
            case "BW Test":
                return "";
            case "Assessment":
                return "assessment-";
            case "Quiz":
                return "quiz-";
            default:
                return "";
        }
    }

    const label = testLabel();

    const Router = useRouter();

    const handleClick = () => {
        if (type === "completed") {
            Router.push(`/b2c-teacher/teacher-flow/${label}student-list`);
        }
    }

    return (
        <div onClick={handleClick} className={`border rounded-2xl hover:shadow-md p-3 sm:p-4 bg-[#F9FAFB] ${type === "completed" ? "cursor-pointer" : ""}`}>
            <div className="flex justify-between items-start gap-2">
                <div className="flex-grow">
                    <h4 className="font-medium text-sm sm:text-lg mb-2 text-black">{test.title}</h4>
                    <div className="text-xs sm:text-sm text-[#6B7280] flex flex-col sm:flex-row gap-2 sm:gap-3">
                        <span>{test.batch}</span>
                        <span>{test.date}</span>
                    </div>
                    {type === "completed" && <TestItemStats test={test} />}
                </div>
                <div className="h-full flex flex-col items-end gap-2 flex-shrink-0 self-center">
                    {/* Popover is cleaner for this */}
                    {type !== "completed" && (
                        <Popover>
                            <PopoverTrigger asChild><button aria-label="Actions"><Info className="h-6 w-6 cursor-pointer text-[#6B7280] hover:text-gray-800" /></button></PopoverTrigger>
                            <PopoverContent className="w-auto p-0 border-none shadow-none"><ActionsMenu type={type} testType={testType}/></PopoverContent>
                        </Popover>
                    )}

                    {test.status && <span className="px-2 py-0.5 text-xs sm:px-3 sm:py-1 sm:text-sm bg-[#8DD9B31A] text-[#8DD9B3] rounded-2xl">{test.status}</span>}
                </div>
            </div>
        </div>
    );
}

// --- Component 1: TestListSection ---
interface TestListSectionProps { tests: Test[]; type: TestType; testType?: "BW Test" | "Assessment" | "Quiz"; }
export const TestListSection: React.FC<TestListSectionProps> = ({ tests, type, testType }) => (
    <div className="space-y-2.5">{tests.map(test => <TestListItem key={test.id} test={test} type={type} testType={testType} />)}</div>
);


// --- Component 2: TestAnalyticsCard ---
interface TestAnalyticsProps { complete: number; incomplete: number; totalTests: number; averageScore: string; testType?: "BW Test" | "Assessment" | "Quiz"; }
export const TestAnalyticsCard: React.FC<TestAnalyticsProps> = ({ complete, incomplete, totalTests, averageScore, testType }) => {
    const testLabel = () => {
        switch (testType) {
            case "BW Test":
                return "Test";
            case "Assessment":
                return "Assessment";
            case "Quiz":
                return "Quiz";
            default:
                return "Test";
        }
    }
    return (
        <div className="space-y-6 w-full p-4 border border-[#E5E7EB] rounded-2xl bg-white">
            <div>
                <div className="flex flex-wrap gap-2 justify-between items-center mb-4">
                    <h3 className="text-lg font-medium">{testLabel()}</h3>
                    <DateNavigator date="June 2025" />
                </div>
                <div className="flex justify-around items-baseline text-center sm:justify-between sm:mx-2">
                    <div><p className="text-sm sm:text-base font-normal text-[#6B7280]">Complete</p><p className="text-base font-medium mt-1">{complete}/{totalTests}</p></div>
                    <div><p className="text-sm sm:text-base font-normal text-[#6B7280]">Incomplete</p><p className="text-base font-semibold text-[#FF3366] mt-1">{incomplete}</p></div>
                </div>
            </div>
            <div className="bg-[#F3F4F6] rounded-2xl p-3 sm:p-4">
                <div className="flex justify-between items-center">
                    <p className="text-base text-[#6B7280]">Average Scores</p>
                    <p className="text-base text-[#3366FF]">{averageScore}</p>
                </div>
            </div>
        </div>
    );
}