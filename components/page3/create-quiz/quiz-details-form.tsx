"use client";

import { useState } from "react";
import {
  Calendar,
  ChevronUp,
  ChevronDown,
  Search,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface TestDetailsFormProps {
  onNext: () => void;
}

export function QuizDetailsForm({ onNext }: TestDetailsFormProps) {
  const [selectedClass, setSelectedClass] = useState("");
  const [selectedGroup, setSelectedGroup] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [testDate, setTestDate] = useState("");
  const [hours, setHours] = useState("00");
  const [minutes, setMinutes] = useState("00");
  const [totalPoints, setTotalPoints] = useState("00");
  const [passPoints, setPassPoints] = useState("00");
  const [searchTerm, setSearchTerm] = useState("");

  const topics = [
    {
      id: 1,
      title: "Class 3 math",
      subtitle: "Unitary Number system1",
      selected: true,
    },
    {
      id: 2,
      title: "Class 3 math",
      subtitle: "Unitary Number system2",
      selected: false,
    },
    {
      id: 3,
      title: "Class 3 math",
      subtitle: "Unitary Number system3",
      selected: false,
    },
    {
      id: 4,
      title: "Class 3 math",
      subtitle: "Unitary Number system4",
      selected: false,
    },
    {
      id: 5,
      title: "Class 4 math",
      subtitle: "Unitary Number system Advanced1",
      selected: false,
    },
    {
      id: 6,
      title: "Class 4 math",
      subtitle: "Unitary Number system Advanced2",
      selected: false,
    },
    {
      id: 7,
      title: "Class 4 math",
      subtitle: "Unitary Number system Advanced 3",
      selected: false,
    },
  ];

  return (
      <div>
    <div className="grid grid-cols-2 gap-6">
      {/* Left column - Smaller */}
      <div className="col-span-1 space-y-4">
        <div className="w-full">
          <label className="block text-sm font-medium mb-1">Select Class</label>
          <Select value={selectedClass} onValueChange={setSelectedClass}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Class 3" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="class1">Class 1</SelectItem>
              <SelectItem value="class2">Class 2</SelectItem>
              <SelectItem value="class3">Class 3</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div className="w-full">
          <label className="block text-sm font-medium mb-1">
            Select group
          </label>
          <Select value={selectedGroup} onValueChange={setSelectedGroup}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Group A" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="groupA">Group A</SelectItem>
              <SelectItem value="groupB">Group B</SelectItem>
              <SelectItem value="groupC">Group C</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Quiz Scheduled on Date</label>
          <div className="relative">
            <Input
              value={expiryDate}
              onChange={(e) => setExpiryDate(e.target.value)}
              placeholder="15-may-2007"
              className="w-full"
            />
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-0 top-0 h-full"
            >
              <Calendar className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Expiry Date</label>
          <div className="relative">
            <Input
              value={expiryDate}
              onChange={(e) => setExpiryDate(e.target.value)}
              placeholder="15-may-2007"
              className="w-full"
            />
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-0 top-0 h-full"
            >
              <Calendar className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">
            Test Duration
          </label>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs text-gray-500 mb-1">Hours</label>
              <div className="relative">
                <Input
                  value={hours}
                  onChange={(e) => setHours(e.target.value)}
                  className="pr-8 w-full"
                />
                <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex flex-col">
                  <Button variant="ghost" size="icon" className="h-4 w-4 p-0">
                    <ChevronUp className="h-3 w-3" />
                  </Button>
                  <Button variant="ghost" size="icon" className="h-4 w-4 p-0">
                    <ChevronDown className="h-3 w-3" />
                  </Button>
                </div>
              </div>
            </div>
            <div>
              <label className="block text-xs text-gray-500 mb-1">
                Minutes
              </label>
              <div className="relative">
                <Input
                  value={minutes}
                  onChange={(e) => setMinutes(e.target.value)}
                  className="pr-8 w-full"
                />
                <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex flex-col">
                  <Button variant="ghost" size="icon" className="h-4 w-4 p-0">
                    <ChevronUp className="h-3 w-3" />
                  </Button>
                  <Button variant="ghost" size="icon" className="h-4 w-4 p-0">
                    <ChevronDown className="h-3 w-3" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Points</label>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs text-gray-500 mb-1">
                Total Points
              </label>
              <div className="relative">
                <Input
                  value={totalPoints}
                  onChange={(e) => setTotalPoints(e.target.value)}
                  className="pr-8 w-full"
                />
                <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex flex-col">
                  <Button variant="ghost" size="icon" className="h-4 w-4 p-0">
                    <ChevronUp className="h-3 w-3" />
                  </Button>
                  <Button variant="ghost" size="icon" className="h-4 w-4 p-0">
                    <ChevronDown className="h-3 w-3" />
                  </Button>
                </div>
              </div>
            </div>
            <div>
              <label className="block text-xs text-gray-500 mb-1">
                Pass Points
              </label>
              <div className="relative">
                <Input
                  value={passPoints}
                  onChange={(e) => setPassPoints(e.target.value)}
                  className="pr-8 w-full"
                />
                <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex flex-col">
                  <Button variant="ghost" size="icon" className="h-4 w-4 p-0">
                    <ChevronUp className="h-3 w-3" />
                  </Button>
                  <Button variant="ghost" size="icon" className="h-4 w-4 p-0">
                    <ChevronDown className="h-3 w-3" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Test Date</label>
          <div className="relative">
            <Input
              value={testDate}
              onChange={(e) => setTestDate(e.target.value)}
              placeholder="15-may-2007"
              className="w-full"
            />
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-0 top-0 h-full"
            >
              <Calendar className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Right column - Larger with scrollbar if needed */}
      <div className="col-span-1 space-y-4 border p-4 rounded-lg">
        <div className="relative h-fit">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input
            placeholder="Unitary"
            className="pl-10 w-full"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="border rounded-lg">
          {/* This div creates a fixed height container with scrollbar when needed */}
          <div className="overflow-y-auto">
            {topics.map((topic) => (
              <div
                key={topic.id}
                className="border-b last:border-b-0 p-4 flex items-center"
              >
                <input
                  type="radio"
                  id={`topic-${topic.id}`}
                  name="topic"
                  className="mr-3 h-4 w-4 text-pink-500 focus:ring-pink-500"
                  defaultChecked={topic.selected}
                />
                <div className="flex-1">
                  <label
                    htmlFor={`topic-${topic.id}`}
                    className="block font-medium"
                  >
                    {topic.title}
                  </label>
                  <p className="text-sm text-gray-600">{topic.subtitle}</p>
                </div>
                <button className="text-gray-400 hover:text-gray-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
      <div className="flex justify-end space-x-2 pt-4">
        <Button variant="outline" onClick={() => window.history.back()}>
          Cancel
        </Button>
        <Button onClick={onNext} className="bg-blue-500 hover:bg-blue-600">
          Save as Draft
        </Button>
        <Button onClick={onNext} className="bg-blue-500 hover:bg-blue-600">
          Add
        </Button>
      </div>
        
      </div>
  );
}