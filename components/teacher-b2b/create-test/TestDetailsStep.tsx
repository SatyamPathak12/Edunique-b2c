"use client";

import React, { useMemo, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { TestDetailsData, FormField, FormSelect, FormDateInput, DurationPointInput, UnitaryItemCard, sampleUnitaryItems, sampleClassesData, sampleGroupsData, INPUT_BG, INPUT_BORDER, PRIMARY_BLUE } from "./CreateTestPage";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select';
import Image from "next/image";

// --- Data Interfaces ---
interface SelectableItem {
  id: string;
  name: string;
  avatarSrc: string;
  details: string[]; // For subject, course, grade, etc.
}

const sampleStudents: SelectableItem[] = Array.from({ length: 9 }, (_, i) => ({
  id: `student-${i}`,
  name: `Student Name`,
  avatarSrc: `/admin/student.png`,
  details: ["Course Name", "Level / Grade", "Group"]
}));

interface TestDetailsStepProps {
  testDetails: TestDetailsData;
  onDetailsChange: <K extends keyof TestDetailsData>(name: K, value: TestDetailsData[K]) => void;
  testType: string
}

// Your SelectableItemCard, adapted to be generic for both students and teachers
const SelectableItemCard: React.FC<{
  item: SelectableItem;
  isSelected: boolean;
  onSelect: () => void;
}> = ({ item, isSelected, onSelect }) => (
  <button
    onClick={onSelect}
    className={`w-full flex flex-row items-center p-1 rounded-2xl border transition-all duration-150 gap-3 cursor-pointer
      ${isSelected ? `bg-blue-50 border-blue-500` : `border-[#B0B0B0] hover:bg-[#F9FAFB]`}`}
  >
    <Image
      src={item.avatarSrc}
      alt={item.name}
      width={208}
      height={160}
      className="w-18 h-18 rounded-2xl object-cover flex-shrink-0"
    />
    <div className="flex-grow text-left min-w-0">
      <h4 className={`font-semibold text-black truncate text-sm`}>{item.name}</h4>
      {item.details.map((detail, index) => (
        // The first detail is styled red like "Subject"
        <p key={index} className={` truncate text-[#6B7280] text-[10px]`}>
          {detail}
        </p>
      ))}
    </div>
    <div
      className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 ml-auto
        ${isSelected ? `border-[#3366FF] bg-[#3366FF]` : `border-gray-400`}`}
    >
      {isSelected && <div className="w-2 h-2 bg-white rounded-full"></div>}
    </div>
  </button>
);

const TestDetailsStep: React.FC<TestDetailsStepProps> = ({
  testDetails,
  onDetailsChange,
  testType
}) => {
  // State for the right-hand column can be managed here for simplicity
  const [unitarySearch, setUnitarySearch] = useState('');
  const [studentSearch, setStudentSearch] = useState('');
  const [selectedItems, setSelectedItems] = useState<Set<string>>(new Set());
  const [selectionType, setSelectionType] = useState<'For all' | 'For Selective'>('For Selective');

  const handleItemSelect = (itemId: string) => {
    setSelectedItems(prev => {
      const newSelection = new Set(prev);
      newSelection.has(itemId) ? newSelection.delete(itemId) : newSelection.add(itemId);
      return newSelection;
    });
  };

  const filteredUnitaryItems = useMemo(
    () => sampleUnitaryItems.filter((item) => item.title.toLowerCase().includes(unitarySearch.toLowerCase())),
    [unitarySearch]
  );

  const filteredStudents = useMemo(
    () => sampleStudents.filter((student) => student.name.toLowerCase().includes(studentSearch.toLowerCase())),
    [studentSearch]
  );


  return (
    <div className="flex flex-col md:flex-row max-w-screen-xl gap-6 md:gap-8 mx-auto justify-center">

      <div className="w-full md:w-[45%] lg:w-[40%] space-y-4">
        <FormField
          label={`${testType} Name`}
          name="testName"
        />
        <FormField
          label="Description"
          name="description"
          type="textarea"
        />
        <FormSelect
          label="Select Classes"
          defaultValue="all"
          placeholder="Nothing"
          items={[{ value: "all", label: "Option 1" }, { value: "batch1", label: "Option 2" }]}
        />
        <FormSelect
          label="Select Group"
          defaultValue="all"
          placeholder="Nothing"
          items={[{ value: "all", label: "Option 1" }, { value: "batch1", label: "Option 2" }]}
        />
        <FormDateInput
          label="Test Date"
          name="testDate"
        />
        <FormDateInput
          label="Expiry Date"
          name="expiryDate"
        />
        <div>
          <label className="block text-md text-black mb-2">
            Duration & Point
          </label>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            <DurationPointInput label="Hours" />
            <DurationPointInput label="Minutes" />
            <DurationPointInput label="Total Points" />
            <DurationPointInput label="Pass Points" />
          </div>
        </div>
      </div>

      {/* Right Column: Selections */}
      {/* w-full on mobile, md:w-[55%] lg:w-[50%] on medium/large screens */}
      <div className="w-full md:w-[55%] lg:w-[50%] space-y-6">
        {/* Unitary Selection */}
        <div className={`p-4 rounded-2xl border ${INPUT_BORDER} bg-[#F9FAFB]`}>
          <div className="relative mb-3">
            <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-black" />
            <input
              type="text"
              placeholder="Unitary"
              value={unitarySearch}
              onChange={(e) => setUnitarySearch(e.target.value)}
              className={`w-full pl-9 pr-3 py-2 ${INPUT_BG} border-[#6B7280] placeholder:text-black border rounded-xl focus:ring-1 focus:ring-[${PRIMARY_BLUE}] outline-none text-sm`}
            />
          </div>
          <div className={`space-y-2 max-h-40 sm:max-h-48 overflow-y-auto pr-2 custom-scrollbar-thin`}>
            {filteredUnitaryItems.map((item) => (
              <UnitaryItemCard
                key={item.id}
                item={item}
                isSelected={testDetails.selectedUnitaryId === item.id}
                onSelect={() => onDetailsChange("selectedUnitaryId", item.id)}
              />
            ))}
          </div>
        </div>

        {/* newStudent Selection */}
        <div className="bg-[#F9FAFB] border border-[#B0B0B0] rounded-2xl p-4 space-y-3 flex flex-col">
          <div className="flex items-center space-x-4">
            <label className="flex items-center gap-2 cursor-pointer text-sm"><input type="radio" name="selectionType" value="For all" checked={selectionType === 'For all'} onChange={() => setSelectionType('For all')} className="form-radio text-[#3366FF]" />For all</label>
            <label className="flex items-center gap-2 cursor-pointer text-sm"><input type="radio" name="selectionType" value="For Selective" checked={selectionType === 'For Selective'} onChange={() => setSelectionType('For Selective')} className="form-radio text-[#3366FF]" />For Selective Students</label>
          </div>
          <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-2">
            <div className="relative flex-1 w-full">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-black"><FiSearch className="h-4 w-4" /></span>
              <input
                type="text"
                value={studentSearch}
                onChange={(e) => setStudentSearch(e.target.value)}
                placeholder={`Search Student`}
                className="w-full rounded-full border-2 border-[#6b7280] py-2.5 pl-8 pr-3 items-center text-[#6B7280] leading-tight focus:bg-white focus:outline-none focus:border-black"
              />
            </div>
            <div className="relative w-full sm:w-auto">
              <StyledSelect
                defaultValue="all"
                placeholder="Filter"
                items={[{ value: "all", label: "1st STD" }, { value: "batch1", label: "Batch 1" }]}
              />
            </div>
          </div>
          {/* Scrollable list */}
          <div className="space-y-1.5 h-60 sm:h-86 lg:h-75 overflow-y-auto custom-scrollbar-thin pr-1">
            {filteredStudents.map(item => (
              <SelectableItemCard
                key={item.id}
                item={item}
                isSelected={selectedItems.has(item.id)}
                onSelect={() => handleItemSelect(item.id)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default TestDetailsStep;


export const StyledSelect: React.FC<{
  defaultValue?: string;
  placeholder: string;
  items: { value: string; label: string }[];
  // Add onChange handler if needed
}> = ({ defaultValue, placeholder, items }) => (
  <Select defaultValue={defaultValue}>
    <SelectTrigger className="w-full rounded-xl sm:py-5 bg-[#F9FAFB] text-sm sm:text-base text-black border border-[#E5E7EB]">
      <SelectValue placeholder={placeholder} />
    </SelectTrigger>
    <SelectContent>
      {items.map(item => <SelectItem key={item.value} value={item.value}>{item.label}</SelectItem>)}
    </SelectContent>
  </Select>
);

export const StyledSelect2: React.FC<{
  defaultValue?: string;
  placeholder: string;
  items: { value: string; label: string }[];
  // Add onChange handler if needed
}> = ({ defaultValue, placeholder, items }) => (
  <Select defaultValue={defaultValue}>
    <SelectTrigger className={`w-full sm:py-5 ${INPUT_BG} ${INPUT_BORDER} border rounded-full appearance-none focus:ring-1 focus:ring-[${PRIMARY_BLUE}] focus:border-[${PRIMARY_BLUE}] outline-none text-sm sm:text-base`}>
      <SelectValue placeholder={placeholder} />
    </SelectTrigger>
    <SelectContent>
      {items.map(item => <SelectItem key={item.value} value={item.value}>{item.label}</SelectItem>)}
    </SelectContent>
  </Select>
);
