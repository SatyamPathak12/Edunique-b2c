"use client";

import { useState } from "react";
import PeopleGrid from "@/components/b2c-admin/course-login-teachers";
import StudentGrid from "./course-login-student";
import TabSwitch from "../common-components/TabSwitch";
import SearchFilter from "./common-component/SearchBarFilter";


const filter = [
  {id: "f1", label: "Filter 1"},
  {id: "f2", label: "Filter 2"},
  {id: "f3", label: "Filter 3"},
  {id: "f4", label: "Filter 4"},
]
const topTabs = ["Batch 1", "Batch 2", "Batch 3", "Batch 4", "Batch 5"];

export default function CourseLoginPage() {
  const [activeTab, setActiveTab] = useState<"teachers" | "students">(
    "teachers"
  );
  const [selectedTopTab, setSelectedTopTab] = useState(topTabs[0]);


  return (
      <main className="p-2 sm:p-4  mx-auto bg-white rounded-3xl">
        {/* Search & Filter Section */}
        <SearchFilter filters={filter}/>

        {/* Top Tabs */}
        <div className="flex mt-2 gap-6 justify-start p-2">
          <button
            onClick={() => setActiveTab("teachers")}
            className={`font-medium text-sm sm:text-base transition-colors pb-1 border-b-2 ${activeTab === "teachers"
                ? "text-[#3366ff] border-[#3366ff]"
                : "text-[#6b7280] border-transparent"
              }`}
          >
            Teachers
          </button>
          <button
            onClick={() => setActiveTab("students")}
            className={`font-medium text-sm sm:text-base transition-colors border-b-2 ${activeTab === "students"
                ? "text-[#3366ff] border-[#3366ff]"
                : "text-[#6b7280] border-transparent"
              }`}
          >
            Students
          </button>
        </div>
        
        
        <TabSwitch tabs={topTabs} selected={selectedTopTab} onChange={setSelectedTopTab}/>

        {/* Toggle Between Teachers and Students */}

        {/* Conditional Grid */}
        <div className="w-full   ">
          {activeTab === "teachers" ? <PeopleGrid /> : <StudentGrid />}
        </div>
      </main>
  );
}
