"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import MaxWidthWrapper from "@/components/max-width-wrapper";
import Link from "next/link";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const Router = useRouter();
  const [selectedBoard, setSelectedBoard] = useState<string>("ICSE");

  return (
    <MaxWidthWrapper>
      <div className="relative w-full min-h-screen flex flex-col overflow-hidden">
        <div className="relative z-10 flex items-center justify-center w-full min-h-screen py-6 sm:px-4 md:py-12 md:px-6">

          <div className="w-full lg:max-w-[630px] mx-auto max-w-xl bg-white rounded-3xl overflow-hidden">
            <div className="flex flex-col px-4 md:px-6 md:flex-row min-h-[400px] md:min-h-[600px] h-full">

              <div className="w-full p-4 sm:p-8 flex flex-col justify-center">

                <div className="flex flex-col gap-2">

                  <div className="flex items-start gap-2 sm:gap-4">
                    <Image
                      src="/student/auth/register.png"
                      alt="teacher and student"
                      width={86}
                      height={86}
                      className="self-center object-contain h-full w-fit"
                      priority
                    />
                    <div>
                      <h2 className="font-adlam text-xl sm:text-2xl lg:text-3xl">
                        Student/Parent Registration
                      </h2>
                      <p className="md:block hidden mt-2 text-sm sm:text-base max-w-[50ch] text-black">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry.
                      </p>
                    </div>
                  </div>

                  <p className="block md:hidden mt-2 text-sm sm:text-base max-w-[50ch] text-black">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>

                </div>

                <div className="mt-8 space-y-4">
                  <div className="flex flex-col gap-1">
                    <label className="text-black" htmlFor="guardian">Name</label>
                    <Input
                      type="text"
                      placeholder="Enter Name"
                      className=" rounded-full bg-[#F9FAFB]"
                    />
                  </div>

                  <div className="flex flex-col gap-1">
                    <label className="text-black" htmlFor="guardian">Class</label>
                    <Input
                      type="text"
                      placeholder="Enter Class"
                      className=" rounded-full bg-[#F9FAFB]"
                    />
                  </div>

                  <div>
                    <label className="text-black" htmlFor="school">Board</label>
                    <Select value={selectedBoard} onValueChange={setSelectedBoard}>
                      <SelectTrigger className="w-full  rounded-full bg-[#F9FAFB]">
                        <SelectValue placeholder="Class" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="ICSE">ICSE</SelectItem>
                        <SelectItem value="CBSE">CBSE</SelectItem>
                        <SelectItem value="RBSE">RBSE</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="flex flex-col gap-1">
                    <label className="text-black" htmlFor="guardian">Date of Birth</label>
                    <Input
                      type="text"
                      placeholder="DD/MM/YY"
                      className=" rounded-full bg-[#F9FAFB]"
                    />
                  </div>

                  {/* <div className="w-full">
                      <label className="text-black" htmlFor="school">Student DOB</label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant={"outline"}
                            className={cn(
                              "w-full rounded-full bg-[#F9FAFB] justify-start text-left font-normal",
                              !date && "text-muted-foreground"
                            )}
                          >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {date ? format(date, "PPP") : <span>DD/MM/YY</span>}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                    </div> */}

                  <div className="flex flex-col gap-1">
                    <label className="text-black" htmlFor="guardian">Parents / Guardian Name</label>
                    <Input
                      type="text"
                      placeholder="Enter Parent/Guardian Name"
                      className=" rounded-full bg-[#F9FAFB]"
                    />
                  </div>

                  <div className="flex flex-col gap-1">
                    <label className="text-black" htmlFor="email">Email Id</label>
                    <Input
                      type="email"
                      placeholder="Enter Email Id"
                      className=" rounded-full bg-[#F9FAFB]"
                    />
                  </div>

                  <div className="flex flex-col gap-1">
                    <label className="text-black" htmlFor="phone">Mobile Number</label>
                    <Input
                      type="text"
                      placeholder="+91 1234567890"
                      className=" rounded-full bg-[#F9FAFB]"
                    />
                  </div>


                  <div className="flex flex-col gap-1">
                    <label className="text-black" htmlFor="country">Country</label>
                    <Select value="Option1">
                      <SelectTrigger className="w-full  rounded-full bg-[#F9FAFB]">
                        <SelectValue placeholder="Select Country" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Option1">Option 1</SelectItem>
                        <SelectItem value="Option2">Option 2</SelectItem>
                        <SelectItem value="Option3">Option 3</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="flex flex-col gap-1">
                    <label className="text-black" htmlFor="state">State</label>
                    <Select value="Option1">
                      <SelectTrigger className="w-full  rounded-full bg-[#F9FAFB]">
                        <SelectValue placeholder="Select State" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Option1">Option 1</SelectItem>
                        <SelectItem value="Option2">Option 2</SelectItem>
                        <SelectItem value="Option3">Option 3</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="flex flex-col gap-1">
                    <label className="text-black" htmlFor="city">City</label>
                    <Select value="Option1">
                      <SelectTrigger className="w-full  rounded-full bg-[#F9FAFB]">
                        <SelectValue placeholder="Select City" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Option1">Option 1</SelectItem>
                        <SelectItem value="Option2">Option 2</SelectItem>
                        <SelectItem value="Option3">Option 3</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="flex flex-col gap-1">
                    <label className="text-black" htmlFor="address">Address</label>
                    <Textarea
                      className="resize-none h-16 rounded-2xl bg-[#F9FAFB]"
                    />
                  </div>

                  <Button
                    className="w-full mt-2 py-2 rounded-full"
                    onClick={()=>{Router.push('/b2c-student/registration/forgot-password-2')}}
                  >
                    Submit
                  </Button>
                </div>

                <div className="flex justify-center items-center mt-4 text-sm">
                  <div className="flex">
                    <p>Already Have an Account?</p>
                    <Link
                      href={"/b2c-student/registration/login"}
                      className="ml-2 text-[#F9326F] hover:underline"
                    >
                      Login
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
}
