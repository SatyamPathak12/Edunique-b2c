"use client";

import { useState } from "react";
import { TestList } from "@/components/page3/test-list";
import { TestAnalytics } from "@/components/page3/test-analytics";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const scheduledTests = [
  {
    id: "1",
    title: "Assessment Title",
    batch: "Batch 1",
    date: "Scheduled for May 28, 2025",
  },
  {
    id: "2",
    title: "Assessment Title",
    batch: "Batch 1",
    date: "Scheduled for May 28, 2025",
  },
  {
    id: "3",
    title: "Assessment Title",
    batch: "Batch 1",
    date: "Scheduled for May 28, 2025",
  },
  {
    id: "4",
    title: "Assessment Title",
    batch: "Batch 1",
    date: "Scheduled for May 28, 2025",
  },
  {
    id: "5",
    title: "Assessment Title",
    batch: "Batch 1",
    date: "Scheduled for May 28, 2025",
    status: "Ongoing",
  },
  {
    id: "6",
    title: "Assessment Title",
    batch: "Batch 1",
    date: "Scheduled for May 28, 2025",
  },
  {
    id: "7",
    title: "Assessment Title",
    batch: "Batch 1",
    date: "Scheduled for May 28, 2025",
  },
  {
    id: "8",
    title: "Assessment Title",
    batch: "Batch 1",
    date: "Scheduled for May 28, 2025",
  },
];

const completedTests = [
  {
    id: "1",
    title: "Assessment Title",
    batch: "Batch 1",
    date: "Planned for May 28, 2025",
    studentsEnrolled: 40,
    studentsAttended: 40,
    averageScores: 40,
  },
  {
    id: "2",
    title: "Assessment Title",
    batch: "Batch 1",
    date: "Planned for May 28, 2025",
    studentsEnrolled: 40,
    studentsAttended: 40,
    averageScores: 40,
  },
  {
    id: "3",
    title: "Assessment Title",
    batch: "Batch 1",
    date: "Planned for May 28, 2025",
    studentsEnrolled: 40,
    studentsAttended: 40,
    averageScores: 40,
  },
  {
    id: "4",
    title: "Assessment Title",
    batch: "Batch 1",
    date: "Planned for May 28, 2025",
    studentsEnrolled: 40,
    studentsAttended: 40,
    averageScores: 40,
  },
];

const savedTests = [
  {
    id: "1",
    title: "Assessment Title",
    batch: "Batch 1",
    date: "Scheduled for May 28, 2025",
  },
  {
    id: "2",
    title: "Assessment Title",
    batch: "Batch 1",
    date: "Scheduled for May 28, 2025",
  },
  {
    id: "3",
    title: "Assessment Title",
    batch: "Batch 1",
    date: "Scheduled for May 28, 2025",
  },
  {
    id: "4",
    title: "Assessment Title",
    batch: "Batch 1",
    date: "Scheduled for May 28, 2025",
  },
  {
    id: "5",
    title: "Assessment Title",
    batch: "Batch 1",
    date: "Scheduled for May 28, 2025",
  },
  {
    id: "6",
    title: "Assessment Title",
    batch: "Batch 1",
    date: "Scheduled for May 28, 2025",
  },
  {
    id: "7",
    title: "Assessment Title",
    batch: "Batch 1",
    date: "Scheduled for May 28, 2025",
  },
  {
    id: "8",
    title: "Assessment Title",
    batch: "Batch 1",
    date: "Scheduled for May 28, 2025",
  },
];
const CustomTestTabs = ({
  tabs,
  activeTab,
  onChange,
}: {
  tabs: string[];
  activeTab: string;
  onChange: (tab: string) => void;
}) => {
  return (
    <div className="flex w-fit">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => onChange(tab)}
          className={`px-6 py-3 font-medium sm:text-lg text-md cursor-pointer ${
            activeTab === tab
              ? "text-[#FF3366] border-b-2 border-pink-500"
              : "text-[#6B7280] hover:text-gray-900"
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default function TestsPage() {
  const [activeTab, setActiveTab] = useState("Scheduled Assessment");
  const router = useRouter();

  return (
    <div className="min-h-screen bg-[#eeeeee] py-6">
      <div className="container bg-white max-w-[96rem] rounded-2xl  mx-auto p-3">
        <div className="bg-white  py-4  mb-20 rounded-2xl">
          <div className="grid grid-cols-1 md:grid-cols-7 gap-4">
            <div className="md:col-span-5">
              <div className="flex h-fit overflow-x-auto custom-scrollbar justify-between items-center mb-4">
                <CustomTestTabs
                  tabs={["Scheduled Assessment", "Completed Assessment", "Saved"]}
                  activeTab={activeTab}
                  onChange={setActiveTab}
                />
                <div>
                  <Select defaultValue="all">
                    <SelectTrigger className="w-fit rounded-xl bg-[#F9FAFB]  text-black border border-[#E5E7EB]">
                      <SelectValue placeholder="All Batches" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Batches</SelectItem>
                      <SelectItem value="batch1">Batch 1</SelectItem>
                      <SelectItem value="batch2">Batch 2</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {activeTab === "Scheduled Assessment" && (
                <TestList tests={scheduledTests} type="scheduled" />
              )}
              {activeTab === "Completed Assessment" && (
                <TestList tests={completedTests} type="completed" />
              )}
              {activeTab === "Saved" && (
                <TestList tests={savedTests} type="saved" />
              )}
            </div>

            <div className="md:col-span-2 ">
              <div className="flex sm:justify-end items-center mb-6">
                <Button
                  className="bg-[#3366FF] hover:bg-blue-600 text-white font-medium rounded-full text-md py-6 px-6"
                  onClick={() => router.push("/page3/teacher/test/create")}
                >
                  Create Assesment
                </Button>
              </div>
              <TestAnalytics
                month="May"
                year={2025}
                complete={2}
                incomplete={1}
                totalTests={20}
                averageScore="15%"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
