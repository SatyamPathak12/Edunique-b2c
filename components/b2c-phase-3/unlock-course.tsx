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
import { clsx } from "clsx";
const courses = Array.from({ length: 15 }, (_, i) => `Course Name ${i + 1}`);

const UnlockForm = () => {
  return (
    <div>
      <div className="max-w-[95rem] mx-auto  overflow-hidden  gap-3 flex flex-col sm:flex-row">
        {/* Left Side - Image */}
        <div className="md:w-[65%]  rounded-2xl bg-white flex flex-col lg:flex-row">
          {/* Center - Form */}
          <div className=" p-6 w-full  ">
            <h2 className="text-2xl sm:text-2xl md:text-3xl  text-[#ff3366] font-semibold mb-2">
              Add a Course
            </h2>
            <p className="text-sm md:text-base text-[#6b7280] mb-2">
              No. of Sessions:
            </p>
            <p className="text-sm  md:text-base text-[#6b7280] mb-4">
              Course Validity :
            </p>

            <p className="text-2xl md:text-3xl  tracking-wider font-semibold text-[#3366ff] my-5 md:my-6">
              ₹00,000
            </p>

            {Array.from({ length: 4 }, (_, q) => (
              <div key={q} className="mb-4">
                <h3 className="font-semibold text-[#3366ff]  bg-[#b0b0b0]/8 px-3 py-2 rounded-2xl  my-3">
                  Quarter {q + 1}
                </h3>
                {Array.from({ length: 1 }, (_, i) => (
                  <div key={i} className="mb-3">
                    <label className="block text-sm md:text-md font-medium text-black my-2">
                      Unlock a Course
                    </label>
                    <Select>
                      <SelectTrigger className="w-full rounded-full bg-[#f9fafb] border border-[#d5d5d5]">
                        <SelectValue
                          placeholder="Option 1"
                          className="text-black"
                        />
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
             <label
                      htmlFor="textarea"
                      className="block text-sm md:text-md font-medium text-black my-3"
                    >
                      Reason for adding a course
                    </label>
                    <textarea
                      id="textarea"
                      name="reason"
                      rows={3}
                      className="block w-full rounded-2xl bg-[#f9fafb] border border-[#d5d5d5] px-3 py-2 text-sm md:text-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    ></textarea>

            <div className="flex items-center  flex-row  gap-2 md:gap-3 mt-4">
              <div className="w-[10%]">
                <NumberInput />
              </div>
              <Button className="bg-[#3366ff] rounded-full md:w-[85%] text-white px-6 text-sm md:text-xl font-medium  py-2.5 hover:bg-blue-700">
                Unlock Course
              </Button>
            </div>
          </div>
        </div>
        {/* Right - Course List */}
        <div className="  md:w-[30%] rounded-2xl bg-white p-6">
          <h3 className="text-lg sm:text-xl font-medium mb-3">
            Pick any Course out of the available courses
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

export default UnlockForm;
