"use client";

import { useState } from "react";
import Image from "next/image";
import { Clock, Trash2 } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import StudentSidebarWrapper from "@/components/student-sidebar-wrapper";

export default function CourseDashboard() {
  const [activeTab, setActiveTab] = useState("current-upcoming");

  return (
    <StudentSidebarWrapper>
          <div className="max-w-7xl mx-auto bg-white rounded-xl shadow-sm p-6 h-fit">
            <h1 className="text-2xl font-semibold mb-6">My Course</h1>

            <Tabs
              defaultValue="current-upcoming"
              value={activeTab}
              onValueChange={setActiveTab}
              className="w-full"
            >
              <TabsList className="w-full flex justify-start gap-3 bg-white border-b border-t pt-3 mb-8">
                <TabsTrigger
                  value="current-upcoming"
                  className={cn(
                    "data-[state=active]:border-b-2 data-[state=active]:border-rose-500 data-[state=active]:text-rose-500 rounded-none",
                    activeTab === "current-upcoming"
                      ? "border-b-2 border-rose-500 text-rose-500"
                      : ""
                  )}
                >
                  Current Upcoming
                </TabsTrigger>
                <TabsTrigger
                  value="my-course"
                  className={cn(
                    "data-[state=active]:border-b-2 data-[state=active]:border-rose-500 data-[state=active]:text-rose-500 rounded-none",
                    activeTab === "my-course"
                      ? "border-b-2 border-rose-500 text-rose-500"
                      : ""
                  )}
                >
                  My Course
                </TabsTrigger>
                <TabsTrigger
                  value="recorded-class"
                  className={cn(
                    "data-[state=active]:border-b-2 data-[state=active]:border-rose-500 data-[state=active]:text-rose-500 rounded-none",
                    activeTab === "recorded-class"
                      ? "border-b-2 border-rose-500 text-rose-500"
                      : ""
                  )}
                >
                  Recorded Class
                </TabsTrigger>
              </TabsList>

              <TabsContent value="current-upcoming">
                <CurrentUpcomingTab />
              </TabsContent>

              <TabsContent value="my-course">
                <MyCourseTab />
              </TabsContent>

              <TabsContent value="recorded-class">
                <RecordedClassTab />
              </TabsContent>
            </Tabs>
          </div>
    </StudentSidebarWrapper>
  );
}

function CurrentUpcomingTab() {
  return (
    <div className="space-y-8">
      <div>
        <div className="flex items-center gap-2 mb-2">
          <div className="w-2 h-2 rounded-full bg-blue-500"></div>
          <h3 className="text-blue-500 font-medium">Current Class</h3>
        </div>
        <p className="text-gray-500 mb-4">Today</p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <CourseCard
            image="/student/my-course/image.png"
            title="STEM Diploma In Technology Programs"
            subtitle="Programs Basic Class"
            startTime="1:30PM"
            endTime="2:30PM"
            type="current"
          />

          <CourseCard
            image="/student/my-course/image.png"
            title="Scratch Programming And Animation"
            subtitle="Programs Basic Class"
            startTime="2:30PM"
            endTime="3:30PM"
            type="current"
          />
        </div>
      </div>

      <div>
        <div className="flex items-center gap-2 mb-2">
          <div className="w-2 h-2 rounded-full bg-rose-500"></div>
          <h3 className="text-rose-500 font-medium">Upcoming</h3>
        </div>
        <p className="text-gray-500 mb-4">20 Jun, 2025</p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <CourseCard
            image="/student/my-course/image.png"
            title="STEM Diploma In Technology Programs"
            subtitle="Programs Basic Class"
            startTime="1:30PM"
            endTime="2:30PM"
            type="upcoming"
          />

          <CourseCard
            image="/student/my-course/image.png"
            title="Scratch Programming And Animation"
            subtitle="Programs Basic Class"
            startTime="2:30PM"
            endTime="3:30PM"
            type="upcoming"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <CourseCard
          image="/student/my-course/image.png"
          title="STEM Diploma In Technology Programs"
          subtitle="Programs Basic Class"
          startTime="1:30PM"
          endTime="2:30PM"
          type="upcoming"
        />

        <CourseCard
          image="/student/my-course/image.png"
          title="Scratch Programming And Animation"
          subtitle="Programs Basic Class"
          startTime="2:30PM"
          endTime="3:30PM"
          type="upcoming"
        />
      </div>

      <div>
        <p className="text-gray-500 mb-4">21 Jun, 2025</p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <CourseCard
            image="/student/my-course/image.png"
            title="STEM Diploma In Technology Programs"
            subtitle="Programs Basic Class"
            startTime="1:30PM"
            endTime="2:30PM"
            type="upcoming"
          />

          <CourseCard
            image="/student/my-course/image.png"
            title="Scratch Programming And Animation"
            subtitle="Programs Basic Class"
            startTime="2:30PM"
            endTime="3:30PM"
            type="upcoming"
          />
        </div>
      </div>
    </div>
  );
}

function MyCourseTab() {
  return (
    <div className="space-y-8">
      <div>
        <div className="flex items-center gap-2 mb-4">
          <div className="w-2 h-2 rounded-full bg-blue-500"></div>
          <h3 className="text-blue-500 font-medium">Ongoing Course</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((item) => (
            <CourseProgressCard
              key={item}
              image="/student/my-course/image.png"
              title="STEM Diploma In Technology Programs"
              progress={20}
              startTime="1:30PM"
              endTime="2:30PM"
            />
          ))}
        </div>
      </div>

      <div>
        <div className="flex items-center gap-2 mb-4">
          <div className="w-2 h-2 rounded-full bg-green-500"></div>
          <h3 className="text-green-500 font-medium">Completed Course</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((item) => (
            <CourseProgressCard
              key={item}
              image="/student/my-course/image.png"
              title="STEM Diploma In Technology Programs"
              progress={100}
              startTime="1:30PM"
              endTime="2:30PM"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function RecordedClassTab() {
  return (
    <div className="space-y-6">
      <p className="text-gray-500">20 Jun, 2025</p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {[1, 2, 3, 4, 5, 6].map((item, index) => (
          <RecordedClassCard
            key={index}
            image="/student/my-course/image.png"
            title="STEM Diploma In Technology Programs"
            subtitle="Programs Basic Class"
          />
        ))}
      </div>
    </div>
  );
}

function CourseCard({
  image,
  title,
  subtitle,
  startTime,
  endTime,
}: {
  image: string;
  title: string;
  subtitle: string;
  startTime: string;
  endTime: string;
  type?: string;
}) {
  return (
    <div className="bg-white rounded-lg border p-4 flex flex-col">
      <div className="flex gap-4">
        <div className="w-20 h-20 relative flex-shrink-0">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover rounded-md"
          />
        </div>
        <div className="flex-1">
          <a href="#" className="text-blue-500 text-sm hover:underline">
            {title}
          </a>
          <h3 className="font-medium text-lg">{subtitle}</h3>
          <div className="flex items-center gap-1 text-gray-500 text-sm mt-1">
            <Clock className="w-4 h-4" />
            <span>
              {startTime} To {endTime}
            </span>
          </div>
          <p className="text-xs text-gray-400">Class Start Time</p>
        </div>
      </div>

      <div className="flex justify-end gap-2 mt-4">
        <Button variant="outline" className="rounded-md">
          Cancel
        </Button>
        <Button className=" rounded-md">
          Start
        </Button>
      </div>
    </div>
  );
}

function CourseProgressCard({
  image,
  title,
  progress,
  startTime,
  endTime,
}: {
  image: string;
  title: string;
  progress: number;
  startTime: string;
  endTime: string;
}) {
  return (
    <div className="bg-white rounded-lg border overflow-hidden">
      <div className="relative h-40 w-full">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover"
        />
        <div className="absolute top-2 right-2 bg-yellow-400 text-black rounded-full px-2 py-1 text-xs font-medium">
          4.0
        </div>
      </div>

      <div className="p-4">
        <h3 className="font-medium">{title}</h3>

        <div className="flex justify-between text-xs text-gray-500 mt-2">
          <span>{progress}%</span>
          <span>100%</span>
        </div>

        <div className="w-full bg-gray-200 h-1.5 rounded-full mt-1">
          <div
            className="bg-rose-500 h-1.5 rounded-full"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        <div className="flex items-center gap-1 text-gray-500 text-sm mt-4">
          <Clock className="w-4 h-4" />
          <span>
            {startTime} To {endTime}
          </span>
        </div>
        <p className="text-xs text-gray-400">Class Time</p>

        <Button className="w-full mt-4">
          View
        </Button>
      </div>
    </div>
  );
}

function RecordedClassCard({
  image,
  title,
  subtitle,
}: {
  image: string;
  title: string;
  subtitle: string;
}) {
  return (
    <div className="bg-white rounded-lg border p-4 flex gap-4">
      <div className="w-20 h-20 relative flex-shrink-0">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover rounded-md"
        />
      </div>
      <div className="flex-1">
        <a href="#" className="text-blue-500 text-sm hover:underline">
          {title}
        </a>
        <h3 className="font-medium">{subtitle}</h3>

        <div className="flex gap-2 mt-4 justify-between">
          <Button className=" rounded-md">
            Start
          </Button>
          <Button
            variant="ghost"
            className="rounded-full bg-red-100 text-red-500 hover:text-red-600 p-0 h-auto"
          >
            <Trash2 className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </div>
  );
}
