"use client";
import UserCard, { UserRole } from "@/components/b2c-admin/AllUserCard";
import SearchFilter from "@/components/b2c-admin/common-component/SearchBarFilter";
import TabSwitch from "@/components/common-components/TabSwitch";
import { useState } from "react";
import MaxWidthWrapper from "@/components/admin/max-width-wrapper";
import BackButton from "@/components/common-components/BackButton";
import { NextPage } from "next";

const users = Array.from({ length: 200 }, (_, i) => ({
  id: String(i + 1),
  name: `Student Name`,
  image: "/common-images/student.jpg",
  role: "Student" as UserRole,
  subtitle: "Subject",
  classInfo: "Level / Grade",
  batchInfo: "Group",
}));

const filters = [
  { id: "f1", label: "Filter 1" },
  { id: "f2", label: "Filter 1" },
  { id: "f3", label: "Filter 1" },
  { id: "f4", label: "Filter 2" },
  { id: "f5", label: "Filter 3" },
];

const Page: NextPage = () => {
  const tabs = ["Batch 1", "Batch 2", "Batch 3", "Batch 4", "Batch 5"];
  const [selectedTab, setSelectedTab] = useState(tabs[0]);
  return (
    <div>
      <BackButton Heading="Students giving Worksheets" />
      <MaxWidthWrapper>
        <main className="flex-grow w-full max-w-[90rem] mx-auto px-4 py-8">
          <div className="bg-white rounded-3xl p-4">
            <SearchFilter filters={filters} />
            <TabSwitch
              tabs={tabs}
              selected={selectedTab}
              onChange={setSelectedTab}
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 max-h-screen overflow-y-auto custom-scrollbar-thin gap-4 pr-2">
              {users.map((user, index) => (
                <UserCard
                  key={index}
                  {...user}
                  showBorder
                  navigate="/admin-b2c/admin-panel/worksheet/worksheet-selection"
                />
              ))}
            </div>
          </div>
        </main>
      </MaxWidthWrapper>
    </div>
  );
};

export default Page;
