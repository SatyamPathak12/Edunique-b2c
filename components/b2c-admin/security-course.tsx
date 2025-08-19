"use client";

import { useState } from "react";

import Footer from "@/components/layout/Footer";
import Image from "next/image";
import MaxWidthWrapper from "../../components/admin/max-width-wrapper";
import { FiArrowLeft } from "react-icons/fi";
import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type Checked = DropdownMenuCheckboxItemProps["checked"];
import Link from "next/link";
// --- Recording Card Component ---
interface Course {
  id: string;
  imageSrc: string;
  // e.g., "PERSONALITY DEVELOPMENT"
  courseName: string;
  noofbatch: string;
  noofBtudents: string; // e.g., "Class"
  // e.g., "00 hrs : 00 mins"
}
interface GeneralFilterOption {
  id: string;
  label: string;
}
import {
  FiChevronDown,
} from "react-icons/fi";
import AdminB2CWrapper from "./common-component/AdminB2CPageWrapper";
import SearchFilter from "./common-component/SearchBarFilter";

export default function SecurityCoursePage() {
  const [showActivityBar, setShowActivityBar] = useState<Checked>(false);

  const Filters = [
    { id: "filter1", label: "Filter 1" },
    { id: "filter2", label: "Filter 2" },
    { id: "filter3", label: "Filter 3" },
  ];
 const courses = Array(9).fill(null).map(() => ({
  image: "/personality.png",
  name: "Course Name",
  domain: "Self Dev",
}));
 
  return (
    <AdminB2CWrapper>
        <main className="p-2 sm:p-6 bg-white  rounded-3xl">
            <SearchFilter filters={Filters}/>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 px-2 sm:px-4 py-4">
            {courses.map((course, index) => (
              <Link
                href="/admin-b2c/admin-panel/security/course-login-activity" 
                key={index}
              >
                <div
                  key={index}
                  className="flex flex-col w-full max-h-[330px] gap-3 px-2 py-2 border border-[#E5E7EB] bg-[#FAF9FB] rounded-3xl"
                >
                  <div className="w-full rounded-xl overflow-hidden">
                    <Image
                      src={course.image}
                      width={300}
                      height={200}
                      alt={course.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Text section */}
                  <div className="flex flex-col gap-1 px-1 text-black">
                    <h2 className="font-bold text-lg">{course.name}</h2>
                    <h3 className="text-sm font-normal">
                      Domain:{" "}
                      <span className="text-[#6B7280] font-normal">{course.domain}</span>
                    </h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </main>
   </AdminB2CWrapper>
  );
}
