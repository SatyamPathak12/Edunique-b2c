"use client";

import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import NumberInput from "./button";
import { clsx } from 'clsx';
import CompulsoryCourses from './component'
const courses = Array.from({ length: 15 }, (_, i) => `Course Name ${i + 1}`);

const MembershipForm = () => {
  return (
    <div>
      <div className="max-w-[95rem] mx-auto  overflow-hidden  gap-3 flex flex-col sm:flex-row">
        {/* Left Side - Image */}
        <div className="md:w-[65%]   flex flex-col lg:flex-row">
          <div className=" p-4 flex flex-col lg:max-w-md md:h-[57rem]">
            <img
              src="/phase-3/alphaers.png"
              alt="Membership"
              className="rounded-2xl  w-full h-full "
            />  <div className="mt-12"><CompulsoryCourses/></div>
          </div>

          {/* Center - Form */}
          <div className=" p-6  rounded-2xl  bg-white lg:max-w-base">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-2">
              Membership Name
            </h2>
            <p className="text-sm md:text-base text-[#6b7280] mb-2">
              No. of Sessions:
            </p>
            <p className="text-sm  md:text-base text-[#6b7280] mb-4">
              Course Validity :
            </p>

            <p className="text-3xl md:text-5xl  font-semibold text-[#3366ff] my-6 md:my-8">
              ₹00,000
            </p>
            <p className="font-medium  text-sm md:text-lg text-black mb-4">
              Pick any X Courses out of Y Courses
            </p>

            {Array.from({ length: 4 }, (_, q) => (
              <div key={q} className="mb-4">
                <h3 className="font-semibold text-[#3366ff]  bg-[#b0b0b0]/8 px-3 py-2 rounded-2xl  mb-2">
                  Quarter {q + 1}
                </h3>
                {Array.from({ length: 2 }, (_, i) => (
                  <div key={i} className="mb-3">
                    <label className="block text-sm md:text-md font-medium text-black mb-2">
                      Select Course {q * 2 + i + 1}*
                    </label>
                    <Select>
                      <SelectTrigger className="w-full rounded-full bg-[#f9fafb] border border-[#d5d5d5]">
                        <SelectValue placeholder="Option 1" />
                      </SelectTrigger>
                      <SelectContent>
                        {courses.map((course, idx) => (
                          <SelectItem key={idx} value={course}>
                            {course}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                ))}
              </div>
            ))}

            <div className="flex items-center  flex-row  gap-2 md:gap-3 mt-4">
               <div className="w-[20%]"><NumberInput/></div>
              <Button className="bg-[#3366ff] rounded-full md:w-[78%] text-white px-6 text-sm md:text-xl font-medium  py-2 hover:bg-blue-700">
                Add to Cart
              </Button>
            </div>
          </div>
        </div>
        {/* Right - Course List */}
        <div className="  lg:w-[25%] rounded-2xl bg-white p-6">
          <h3 className="text-lg sm:text-xl font-medium mb-3">
            Pick any X Courses out of Y Courses
          </h3>
          <p className="text-sm text-center sm:text-lg text-[#6b7280]  mb-2">
            Available Courses
          </p>
          <hr className="border-t-[1px]    border-[#6b7280]"></hr>
          <ul className="text-sm sm:text-base mt-2 text-black space-y-2">
            {courses.map((course, idx) => (
              <li key={idx}>{course}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MembershipForm;
