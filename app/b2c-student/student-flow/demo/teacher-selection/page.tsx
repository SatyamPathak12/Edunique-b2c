"use client";

import { useState, useMemo } from "react";
import { Search, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import StudentWrapper from "@/components/student-wrapper";
import { useRouter } from "next/navigation";
import Footer from "@/components/layout/Footer";
import BackButton from "@/components/common-components/BackButton";
import Image from "next/image";

interface Teacher {
  id: string;
  name: string;
  detail1: string;
  detail2: string;
  avatar: string;
  subjects: string[];
  rating: number;
}

interface TimeSlot {
  time: string;
  date: string;
  available: boolean;
  teacherId: string;
}

const mockTeachers: Teacher[] = [
  {
    id: "1",
    name: "Sarah Johnson",
    detail1: "Mathematics Expert",
    detail2: "5+ years experience",
    avatar: "/student/educator/educator_female.png",
    subjects: ["Mathematics", "Physics"],
    rating: 4.9,
  },
  {
    id: "2",
    name: "Michael Chen",
    detail1: "Science Specialist",
    detail2: "PhD in Chemistry",
    avatar: "/student/educator/educator_female.png",
    subjects: ["Chemistry", "Biology"],
    rating: 4.8,
  },
  {
    id: "3",
    name: "Emily Davis",
    detail1: "English Literature",
    detail2: "Cambridge Graduate",
    avatar: "/student/educator/educator_female.png",
    subjects: ["English", "Literature"],
    rating: 4.7,
  },
  {
    id: "4",
    name: "David Wilson",
    detail1: "Computer Science",
    detail2: "Industry Expert",
    avatar: "/student/educator/educator_female.png",
    subjects: ["Programming", "Computer Science"],
    rating: 4.9,
  },
  {
    id: "5",
    name: "Lisa Anderson",
    detail1: "History Teacher",
    detail2: "10+ years experience",
    avatar: "/student/educator/educator_female.png",
    subjects: ["History", "Geography"],
    rating: 4.6,
  },
];

const generateTimeSlots = (): TimeSlot[] => {
  const dates = ["Mon 15", "Tue 16", "Wed 17", "Thu 18", "Fri 19"];
  const times = [
    "9:00",
    "10:00",
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
    "18:00",
  ];
  const slots: TimeSlot[] = [];

  dates.forEach((date) => {
    times.forEach((time) => {
      mockTeachers.forEach((teacher) => {
        slots.push({
          time,
          date,
          available: Math.random() > 0.3, // 70% availability
          teacherId: teacher.id,
        });
      });
    });
  });

  return slots;
};

export default function TeacherSelection() {
  const router = useRouter();
  const [selectedTeacher, setSelectedTeacher] = useState<string>("1");
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string>("");
  const [searchQuery, setSearchQuery] = useState("");
  const [filterBy, setFilterBy] = useState("all");
  const [timeSlots] = useState<TimeSlot[]>(generateTimeSlots());

  const filteredTeachers = useMemo(() => {
    let filtered = mockTeachers;

    if (searchQuery) {
      filtered = filtered.filter(
        (teacher) =>
          teacher.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          teacher.detail1.toLowerCase().includes(searchQuery.toLowerCase()) ||
          teacher.subjects.some((subject) =>
            subject.toLowerCase().includes(searchQuery.toLowerCase())
          )
      );
    }

    if (filterBy !== "all") {
      filtered = filtered.filter((teacher) =>
        teacher.subjects.some((subject) =>
          subject.toLowerCase().includes(filterBy.toLowerCase())
        )
      );
    }

    return filtered;
  }, [searchQuery, filterBy]);

  const selectedTeacherSlots = useMemo(() => {
    return timeSlots.filter((slot) => slot.teacherId === selectedTeacher);
  }, [timeSlots, selectedTeacher]);

  const dates = ["Mon 15", "Tue 16", "Wed 17", "Thu 18", "Fri 19"];
  const times = [
    "9:00",
    "10:00",
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
    "18:00",
  ];

  const getSlotStatus = (time: string, date: string) => {
    const slot = selectedTeacherSlots.find(
      (s) => s.time === time && s.date === date
    );
    if (!slot) return "unavailable";
    if (!slot.available) return "unavailable";
    if (selectedTimeSlot === `${time}-${date}`) return "selected";
    return "available";
  };

  const handleTimeSlotClick = (time: string, date: string) => {
    const slotKey = `${time}-${date}`;
    const slot = selectedTeacherSlots.find(
      (s) => s.time === time && s.date === date
    );

    if (slot && slot.available) {
      setSelectedTimeSlot(selectedTimeSlot === slotKey ? "" : slotKey);
    }
  };

  const handleContinue = () => {
    if (selectedTeacher && selectedTimeSlot) {
      router.push("/b2c-student/student-flow/demo/review");
    }
  };

  return (
    <StudentWrapper>
      {/* headers */}
      <BackButton Heading="Course Name" />
      <div className="w-full bg-[#EEEEEE] px-2 py-10">
        <div className="max-w-7xl mx-auto p-4  space-y-6 bg-white rounded-3xl">
          <h1 className="text-2xl font-semibold text-[#FF3366] mb-6">
            Teacher Selection
          </h1>

          <div className="flex flex-col lg:flex-row gap-6">
            {/* Left Panel - Teacher List */}
            <div className="lg:w-[40%] space-y-2 border border-[#E5E7EB] bg-[#F9FAFB] rounded-3xl p-4">
              {/* Search and Filter */}
              <div className="flex gap-2">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 z-10 transform -translate-y-1/2 h-4 w-4" />
                  <Input
                    placeholder="Search Teacher"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 rounded-full border border-[#6B7280]"
                  />
                </div>
                <Select value={filterBy} onValueChange={setFilterBy}>
                  <SelectTrigger className="w-24 border border-[#E5E7EB] rounded-xl [&_svg]:z-10 [&_svg]:stroke-black">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Filter</SelectItem>
                    <SelectItem value="mathematics">Math</SelectItem>
                    <SelectItem value="science">Science</SelectItem>
                    <SelectItem value="english">English</SelectItem>
                    <SelectItem value="computer">Computer</SelectItem>
                    <SelectItem value="history">History</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Teacher Cards */}
              <div className="space-y-3 max-h-96 overflow-y-auto pr-2">
                <style jsx>{`
                  div::-webkit-scrollbar {
                    width: 8px;
                  }
                  div::-webkit-scrollbar-track {
                    background: transparent;
                  }
                  div::-webkit-scrollbar-thumb {
                    background: #ffc79a;
                    border-radius: 4px;
                  }
                  div::-webkit-scrollbar-thumb:hover {
                    background: #ff8c00;
                  }
                `}</style>
                {filteredTeachers.map((teacher) => (
                  <Card
                    key={teacher.id}
                    className={`cursor-pointer transition-all duration-200 rounded-3xl ${
                      selectedTeacher === teacher.id
                        ? "bg-blue-500 text-white "
                        : "bg-white "
                    }`}
                    onClick={() => setSelectedTeacher(teacher.id)}
                  >
                    <CardContent className="px-2 py-1">
                      <div className="flex items-center gap-3">
                        <Avatar className="w-18 h-20 rounded-2xl">
                          <AvatarImage
                            src={teacher.avatar || "/placeholder.svg"}
                            alt={teacher.name}
                          />
                          <AvatarFallback>
                            {teacher.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-medium truncate">
                            {teacher.name}
                          </h3>
                          <p
                            className={`text-sm truncate ${
                              selectedTeacher === teacher.id
                                ? "text-blue-100"
                                : "text-gray-600"
                            }`}
                          >
                            {teacher.detail1}
                          </p>
                          <p
                            className={`text-sm truncate ${
                              selectedTeacher === teacher.id
                                ? "text-blue-100"
                                : "text-gray-500"
                            }`}
                          >
                            {teacher.detail2}
                          </p>
                        </div>
                        <div
                          onClick={() =>
                            router.push(
                              "/b2c-student/student-flow/teachers/profile?flow=demo"
                            )
                          }
                          className={`flex flex-col items-center justify-center self-start p-2 rounded-full gap-1 hover:bg-[${
                            selectedTeacher === teacher.id
                              ? "#E5E7EB1A"
                              : "#6B72801A"
                          }]`}
                        >
                          <Info className="h-5 w-5" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Right Panel - Time Slots */}
            <div className="lg:w-[60%]">
              <div className="bg-white rounded-lg p-4">
                {/* Date Headers */}
                <div className="grid grid-cols-6 gap-2 mb-4">
                  <div className="text-center text-sm font-medium text-[#6B7280] "></div>
                  {dates.map((date) => (
                    <div
                      key={date}
                      className="text-center text-sm font-medium text-[#6B7280]"
                    >
                      {date}
                    </div>
                  ))}
                </div>

                {/* Time Slot Grid */}
                <div className="max-h-[400px] overflow-y-auto custom-scrollbar-thin-grey pr-2">
                  {times.map((time, index) => (
                    <div
                      key={time}
                      className={`grid grid-cols-6 gap-2 border border-x-0 ${
                        index === 0 ? "border-t-[#B0B0B0]" : "border-t-0"
                      } border-b-[#B0B0B0] py-1`}
                    >
                      <div className="relative flex items-center justify-end text-sm font-medium text-[#6B7280]">
                        {time}
                        <div
                          className={`absolute bg-white h-2 w-full top-0 left-0 -translate-y-2`}
                        ></div>
                        {index === times.length - 1 && (
                          <div className="absolute bg-white h-2 w-full bottom-0 left-0 translate-y-2"></div>
                        )}
                      </div>
                      {dates.map((date) => {
                        const status = getSlotStatus(time, date);
                        return (
                          <button
                            key={`${time}-${date}`}
                            onClick={() => handleTimeSlotClick(time, date)}
                            disabled={status === "unavailable"}
                            className={`
                          h-10 rounded-xl text-sm font-medium transition-all duration-200 flex justify-center items-center
                          ${
                            status === "available"
                              ? "bg-[#B0B0B01A] hover:bg-gray-200 text-gray-700 border border-[#6B7280]"
                              : status === "selected"
                              ? "bg-blue-500 text-white "
                              : "bg-[#FF33661A] text-red-400 cursor-not-allowed border border-[#FF3366]"
                          }
                        `}
                          >
                            {status === "selected" && (
                              <Image
                                width={16}
                                height={16}
                                src="/svg/check_icon.svg"
                                alt="check icon"
                              />
                            )}
                          </button>
                        );
                      })}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Continue Button */}
          <div className="flex justify-center pt-4">
            <Button
              onClick={handleContinue}
              disabled={!selectedTeacher || !selectedTimeSlot}
              className="px-8 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-full"
            >
              Continue
            </Button>
          </div>

          {/* Selection Summary */}
          {selectedTeacher && selectedTimeSlot && (
            <div className="bg-[#3366FF1A] border border-[#3366FF] rounded-3xl p-4 mt-4">
              <h3 className="font-semibold mb-2">Selection Summary</h3>
              <p>
                <strong>Teacher:</strong>{" "}
                {mockTeachers.find((t) => t.id === selectedTeacher)?.name}
              </p>
              <p>
                <strong>Time:</strong> {selectedTimeSlot.split("-")[0]} on{" "}
                {selectedTimeSlot.split("-")[1]}
              </p>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </StudentWrapper>
  );
}
