"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FaSearch } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { Button } from "../ui/button";
import ActiveTab from "./active-inactive";
import { useRouter } from "next/navigation";
import { ChevronDownIcon } from "lucide-react";
import DeactivatePopup from "@/app/principal/pop-ups/components/Deactivate";

type CardData = {
  id: number;
  name: string;
  address: string;
  detail1: string;
  detail2: string;
  detail3: string;
  detail4: string;
  image: string;
};

const branch = Array.from({ length: 3 }, (_, i) => ({
  id: i + 1,
  name: "Branch Name",
  address: "Address",
  detail1: "Detail 1",
  detail2: "Detail 2",
  detail3: "Detail 3",
  detail4: "Detail 4",
  image: "/principal/school-login-banner.png",
}));

export const sampleData: CardData[] = [...branch];

const filters = ["Filter 1", "Filter 2", "Filter 3"];

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AddNewBranchModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  const formFields = ["Country", "State / Province", "City"];
  return (
    <div className="fixed inset-0 bg-transparent backdrop-blur-xs bg-opacity-75 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 w-full max-w-md transform transition-all duration-300 ease-in-out scale-100 opacity-100">
        <label
          htmlFor="mc_className"
          className="block text-md font-medium text-black mb-4"
        >
          Add New Branch
        </label>
        <div className="space-y-3 mb-8">
          <div>
            <label
              htmlFor="anb_branchName"
              className="block text-sm font-medium text-black mb-1"
            >
              Branch Name
            </label>
            <input
              type="text"
              id="anb_branchName"
              placeholder="Branch Name"
              className="w-full px-4 py-2.5 bg-[#F9FAFB] border border-[#E5E7EB] rounded-full focus:ring-1 focus:ring-blue-500 focus:border-blue-500 outline-none text-sm"
            />
          </div>
          <div>
            <label
              htmlFor="anb_branchAddress"
              className="block text-sm font-medium text-black mb-1"
            >
              Branch Address
            </label>
            <textarea
              id="anb_branchAddress"
              rows={3}
              className="w-full px-4 py-2.5 bg-[#F9FAFB] border border-[#E5E7EB] rounded-xl focus:ring-1 focus:ring-blue-500 focus:border-blue-500 outline-none text-sm resize-none"
            ></textarea>
          </div>
          {formFields.map((label) => (
            <div key={label}>
              <label className="block text-sm font-medium text-black mb-1">
                {label}
              </label>
              <div className="relative">
                <select className="w-full px-4 py-2.5 bg-[#F9FAFB] border border-[#E5E7EB] rounded-full appearance-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 outline-none text-sm pr-8">
                  <option>Option 1</option>
                </select>
                <ChevronDownIcon className="absolute top-[50%] right-4 transform translate-y-[-50%]" />
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="w-full px-6 py-3 text-sm font-semibold text-white bg-[#3366FF] rounded-full hover:bg-blue-700 transition-colors"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

const BranchManagement = () => {
  const [selectedFilters, setSelectedFilters] = useState<string[]>(
    filters.map(() => "")
  );
  const [showPopup, setShowPopup] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<"active" | "inactive">("active");

  const [showDeactivatePopup, setShowDeactivatePopup] =
    useState<boolean>(false);
  const router = useRouter();

  const handleFilterChange = (index: number, value: string) => {
    const updated = [...selectedFilters];
    updated[index] = value;
    setSelectedFilters(updated);
  };
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="py-4 px-4 md:px-16">
      <AddNewBranchModal
        isOpen={showPopup}
        onClose={() => setShowPopup(false)}
      />
      <DeactivatePopup
        isOpen={showDeactivatePopup}
        onClose={() => setShowDeactivatePopup(false)}
      />

      {/* Tabs */}
      <div className="bg-white rounded-2xl p-4">
        <div className="flex items-center mb-4 gap-2 overflow-x-auto custom-scrollbar-thin">
          {/* Search Input */}
          <div className="relative w-full min-w-[7rem]">
            <FaSearch className="absolute top-1/2 left-3 transform -translate-y-1/2 text-zinc-700 text-sm" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search"
              className="w-full pl-10 pr-4 py-2 border border-zinc-700 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
            />
          </div>
          {filters.map((filter, index) => (
            <div key={filter} className="relative">
              <select
                className="appearance-none border border-gray-300 text-sm px-4 py-1.5 rounded-xl pr-4 bg-gray-100 focus:outline-none focus:ring-1 focus:ring-blue-500"
                value={selectedFilters[index]}
                onChange={(e) => handleFilterChange(index, e.target.value)}
              >
                <option value="">{filter}</option>
                <option value="Option 1">Option 1</option>
                <option value="Option 2">Option 2</option>
              </select>
              <IoIosArrowDown className="pointer-events-none absolute right-2 top-1/2 transform -translate-y-1/2 font-medium text-gray-500 text-xs" />
            </div>
          ))}
          <Button
            onClick={() => router.push("/principal/manage-teacher-leave")}
            className="bg-gray-50 px-4 sm:px-0 sm:w-56 py-2 cursow-pointer text-zinc-800 text-md font-medium border rounded-2xl whitespace-nowrap"
          >
            Manage Staff
          </Button>
          <Button
            onClick={() => setShowPopup(true)}
            className="bg-gray-50 px-4 sm:px-0 sm:w-56 py-2 cursow-pointer text-zinc-800 text-md font-medium border rounded-2xl whitespace-nowrap"
          >
            Add Branch
          </Button>
          <Button
            onClick={() => router.push("/principal/manage-approvals")}
            className="bg-gray-50 px-4 sm:px-0 sm:w-56 py-2 cursow-pointer text-zinc-800 text-md font-medium border rounded-2xl whitespace-nowrap"
          >
            Manage Approval
          </Button>
          {/* Filters with dropdown icons */}
        </div>
        <ActiveTab activeTab={activeTab} setActiveTab={setActiveTab} />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Cards */}
          {branch.map((item) => (
            <div
              key={item.id}
              onClick={() => router.push("/principal/teacher-management")}
              className="relative flex flex-col lg:flex-row border border-gray-300 gap-4 bg-gray-50 rounded-2xl p-3 cursor-pointer "
            >
              <div
                className={`w-full lg:w-56 h-42 rounded-2xl relative overflow-hidden`}
              >
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex-1">
                <p className="font-semibold text-m">{item.name}</p>

                <p className="text-sm text-gray-500">{item.address}</p>
                <p className="text-xs text-gray-500">{item.detail1}</p>
                <p className="text-xs text-gray-500">{item.detail2}</p>
                <p className="text-xs text-gray-500">{item.detail3}</p>
                <p className="text-xs text-gray-500">{item.detail4}</p>
              </div>
              <div className="flex gap-2 absolute items-center right-3 bottom-3">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowDeactivatePopup(true);
                  }}
                  className="bg-gray-100  text-black-900 p-3 text-lg rounded-full "
                >
                  <IoSettingsOutline />
                </button>
                <button
                  className={`py-2 px-8 text-sm rounded-full  ${
                    activeTab === "active"
                      ? "bg-[#3366ff] text-white"
                      : "bg-[#ff3366]/10 text-[#ff3366]"
                  }`}
                >
                  {activeTab === "active" ? "Active" : "Inactive"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BranchManagement;
