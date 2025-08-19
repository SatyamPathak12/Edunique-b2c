"use client"
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useRouter } from "next/navigation";
import { Check } from "lucide-react";
import Image from "next/image";
import { FiCalendar, FiClock ,FiSearch} from "react-icons/fi";

const teachers = Array.from({ length: 38 }).map((_, i) => ({
  id: i,
  name: "Name",
  subject: "Subject",
  detail1: "Detail1",
  detail2: "Detail2",
  avatar: "/teacher-avatar-4.png",
}));

const times = [
  "09:00",
  "10:00",
  "11:00",
  "12:00",
  "13:00",
  "14:00",
  "15:00",
  "16:00",
  "17:00",
];
const days: string[] = ["Mon", "Tue", "Wed", "Thu", "Fri"];
const selectedTime: { [key: string]: string[] } = {
  "Mon": ["11:00"],
  "Tue": ["16:00"],
  "Wed": ["13:00", "16:00"],
  "Thu": ["14:00"],
  "Fri": ["15:00"],
}

export default function LectureForm() {
  const [searchTerm, setSearchTerm] = useState('');
  const router = useRouter();

  return (
    <div className="w-[90vw] px-2 py-4 mx-auto">
      <div className="p-4 bg-white rounded-2xl ">
        <div className="grid grid-cols-1 gap-4 mb-6">
          <div>
            <label className="text-sm font-medium text-zinc-700 mb-1 block">
              Lecture Date
            </label>
            <div className="relative">
              <Input
                placeholder="DD / MM / YYYY"
                className="rounded-full bg-[#f9fafb] pr-10" // extra padding for icon
              />
              <FiCalendar className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500 w-5 h-5 pointer-events-none" />
            </div>
          </div>

          {/* Lecture Time */}
          <div>
            <label className="text-sm font-medium text-zinc-700 mb-1 block">
              Lecture Time
            </label>
            <div className="relative">
              <Input
                placeholder="Time"
                className="rounded-full bg-[#f9fafb] pr-10"
              />
              <FiClock className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500 w-5 h-5 pointer-events-none" />
            </div>
          </div>
          <div>
            <label className="text-sm font-medium text-zinc-700 mb-1 block">
              Select Subject
            </label>
            <Select >
              <SelectTrigger className="rounded-full bg-[#f9fafb]">Option 1</SelectTrigger>
              <SelectContent>
                <SelectItem value="option1">Option 1</SelectItem>
                <SelectItem value="option2">Option 2</SelectItem>
                <SelectItem value="option3">Option 3</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <label className="text-sm font-medium text-zinc-700 mb-1 block">
              Select Group
            </label>
            <Select>
              <SelectTrigger className="rounded-full bg-[#f9fafb]">Option 1</SelectTrigger>
              <SelectContent>
                <SelectItem value="option1">Option 1</SelectItem>
                <SelectItem value="option2">Option 2</SelectItem>
                <SelectItem value="option3">Option 3</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <label className="text-sm font-medium text-zinc-700 mb-1 block">
              Select Class
            </label>
            <Select>
              <SelectTrigger className="rounded-full bg-[#f9fafb]">Option 1</SelectTrigger>
              <SelectContent>
                <SelectItem value="option1">Option 1</SelectItem>
                <SelectItem value="option2">Option 2</SelectItem>
                <SelectItem value="option3">Option 3</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="relative grid grid-cols-3 gap-4">
          {/* Teachers List */}
          <div className="relative bg-[#F9fafb] col-span-1 rounded-[20px] p-4">
            <div className="flex  relative items-center justify-between mb-3 gap-2">
              
                          <FiSearch className="absolute top-1/2 left-3 transform -translate-y-1/2 text-black text-sm" />
                          <input
                            type="text"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            placeholder="Search Teacher"
                            className=" pl-8 pr-4 py-2 border border-[#6b7280] rounded-full w-full focus:outline-none text-sm"
                          />
                        
              <Select>
                <SelectTrigger className="rounded-xl text-[#1e1e1e] w-28 text-sm px-2 py-1 h-9">
                  1st STD
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1st" className="text-[#1e1e1e]">1st STD</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="h-[400px] pr-1 max-h-85 overflow-y-scroll custom-peach-scrollbar">
              {teachers.map((teacher, idx) => (
                <div
                  key={idx}
                  className="flex items-center border justify-between mb-3 p-1 rounded-2xl hover:bg-gray-100"
                >
                  <div className="flex items-center gap-2">
                    <div className="h-16 w-16 relative">
                      <Image src={teacher.avatar} alt="teacher-profile" fill />
                    </div>
                    <div className="text-xs">
                      <p className="text-[#333] font-bold">{teacher.name}</p>
                      <p className="text-[#FF3366] font-medium">
                        {teacher.subject}
                      </p>
                      <p className="text-[#6b7280]">{teacher.detail1}</p>
                      <p className="text-[#6b7280]">{teacher.detail2}</p>
                    </div>
                  </div>
                  <div className="w-5 h-5 rounded-full border-2 border-[#6b7280]"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Time Table */}
          <div className="overflow-x-auto col-span-2 rounded-[20px]">
            <div className="min-w-[600px]">
              <div className="grid grid-cols-[auto_repeat(5,_1fr)] text-sm font-medium text-zinc-700 border-b mb-2">
                <div className="text-left py-2"></div>
                {days.map((day) => (
                  <div key={day} className="text-center py-2">
                    {day}
                  </div>
                ))}
              </div>
              {times.map((time) => (
                <>
                  <div
                    key={time}
                    className="grid grid-cols-[auto_repeat(5,_1fr)] text-sm gap-1 mb-2"
                  >
                    <div className="text-left pr-2 text-gray-600 text-xs">{time}</div>
                    {days.map((day, colIdx) => (
                      <div
                        key={colIdx}
                        className={`h-8 rounded-xl border border-gray-300 flex items-center justify-center ${(selectedTime[day]?.includes(time)) ? "bg-[#3366ff] text-white" : ""
                          }`}
                      >
                        {(selectedTime[day]?.includes(time)) && <Check color="white" size={14} />}
                      </div>
                    ))}
                  </div>
                  <hr className="my-1" />
                </>
              ))}
            </div>
          </div>
        </div>

        <div className="flex justify-center gap-4 mt-6">
          <Button onClick={() => router.push("/principal/teacher-management")} className="bg-[#FFEEF2] rounded-full text-[#FF3366] px-6">Cancel</Button>
          <Button onClick={() => router.push("/principal/teacher-management")} className="bg-[#0049FF] rounded-full text-white px-8">Add</Button>
        </div>
      </div>
    </div>
  );
}
