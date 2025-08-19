"use client";


import SearchFilter from "@/components/b2c-admin/common-component/SearchBarFilter";
import Image from "next/image";
import { useState } from "react";
import RemoveCourseModal from "../../pop-ups-2/components/RemoveCourseModal";

export default function RemoveCourse() {

  const [removeCourse, setRemoveCourse] = useState(false)

  const filter = [
    { id: "filter1", label: "Filter 1" },
    { id: "filter2", label: "Filter 2" },
    { id: "filter3", label: "Filter 3" },
  ];
  const courses = Array.from({ length: 9 }, () => ({
  image: "/personality.png",
  name: "Course Name",
  domain: "Self Dev",
}));

 
  return (
    <>
      <div className="bg-white w-full rounded-2xl">
        <div className="pt-2 px-4">
            <SearchFilter filters={filter} />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 px-2 sm:px-4 py-4">
            {courses.map((course, index) => (
             
                <div className="flex flex-col w-full max-h-[330px] px-2 py-2 border border-[#E5E7EB] bg-[#FAF9FB] rounded-3xl"
                key={index}
                >
                  <div className="w-full aspect-auto rounded-2xl overflow-hidden">
                    <Image
                      src={course.image}
                      width={300}
                      height={200}
                      alt={course.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="flex flex-col gap-1 px-1 pt-2 text-black">
                    <h2 className="font-semibold text-lg">{course.name}</h2>
                    <h3 className="text-sm font-normal">
                      Domain:{" "}
                      <span className="text-[#6B7280]">{course.domain}</span>
                    </h3>
                  </div>

                  <button className="rounded-full w-full px-4 py-2 cursor-pointer text-[#ff3366] bg-[#ff33661a] font-medium mt-2"
                  onClick={() => setRemoveCourse(true)}>Remove</button>
                </div>
            ))}
          </div>
      </div>
      <RemoveCourseModal
      isOpen={removeCourse} onClose={() => setRemoveCourse(false)} 
      />
    </>
  );
}
