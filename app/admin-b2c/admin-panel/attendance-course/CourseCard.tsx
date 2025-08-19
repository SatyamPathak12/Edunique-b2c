"use client";

import Link from "next/link";

import Image from "next/image";
import SearchFilter from "@/components/b2c-admin/common-component/SearchBarFilter";


export default function AttendanceCourseCard() {

const filters = [
    { id: 'f1', label: 'Filter 1' },
    { id: 'f2', label: 'Filter 2' },
    { id: 'f3', label: 'Filter 3' },
];

    const courses = Array.from({ length: 9 }, () => ({
        image: "/personality.png",
        name: "Course Name",
        domain: "Self Dev",
    }));
    return (
        <>
                <main className="py-2 px-4 bg-white rounded-3xl">
                    <SearchFilter filters={filters} />
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 px-4 py-4">
                        {courses.map((course, index) => (
                            <Link href="/admin-b2c/admin-panel/attendance" key={index}>
                                <div className="flex flex-col w-full max-h-[330px] px-2 py-2 border border-[#E5E7EB] bg-[#FAF9FB] rounded-3xl ">
                                    <div className="w-full aspect-auto rounded-2xl overflow-hidden">
                                        <Image
                                            src={course.image}
                                            width={300}
                                            height={200}
                                            alt={course.name}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>

                                    <div className="flex flex-col gap-1 px-1 text-black">
                                        <h2 className="font-semibold text-lg mt-2">{course.name}</h2>
                                        <h4 className="text-sm font-normal">
                                            Domain:{" "}
                                            <span className="text-[#6B7280] font-normal">{course.domain}</span>
                                        </h4>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </main>
        </>
    );
}
