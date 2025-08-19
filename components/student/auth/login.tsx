"use client";

import MaxWidthWrapper from "@/components/max-width-wrapper";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiEyeOff, FiEye } from "react-icons/fi";

export default function StudentLoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <MaxWidthWrapper>
      {/* This container correctly centers the card vertically and horizontally. */}
      <div className="w-full min-h-screen flex items-center justify-center p-4">
        
        {/* FIXED: Reduced max-width from 6xl to 5xl for a more contained size. */}
        <div className="relative flex flex-col md:flex-row-reverse w-full max-w-5xl bg-white rounded-3xl overflow-hidden">
          
          {/* Decorative Images (Unchanged) */}
          <div className="absolute top-2 -translate-x-12 left-1/2">
            <Image src={"/images/loginimg2.png"} width={70} height={76} alt="decoration" />
          </div>
          <div className="absolute bottom-20 right-2">
            <Image src={"/images/loginimg1.png"} width={140} height={64} alt="decoration" />
          </div>

          {/* Right Column - Image (Unchanged) */}
          <div className="w-full hidden md:block md:w-[55%] p-6">
            <Image
              src={"/student/auth/login/login.png"}
              width={1000}
              height={1000}
              className="w-full h-full object-cover rounded-3xl"
              alt="Login"
            />
          </div>

          {/* Left Column - Login Form */}
          {/* FIXED: Replaced fixed margin 'mt-16' with responsive padding for better balance. */}
          <div className="w-full md:w-[45%] p-8 sm:p-12 flex flex-col justify-center">
            <div className="w-full max-w-sm mx-auto">
              <h2 className="font-Poppins text-3xl font-bold">Login</h2>
              <p className="mt-2 max-w-[50ch] font-normal text-black">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>

              <div className="mt-8 space-y-6 flex flex-col">
                <div>
                  <Label className="font-semibold" htmlFor="email">Email Id</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder=" Enter Email ID"
                    className="rounded-full font-light bg-[#F9FAFB] mt-1"
                  />
                </div>

                <div>
                  <Label className="font-semibold" htmlFor="password">Password</Label>
                  <div className="flex items-center justify-between border bg-[#F9FAFB] rounded-full px-4 mt-1">
                    <Input
                      type={showPassword ? "text" : "password"}
                      placeholder="Password"
                      className="rounded-full font-light bg-transparent border-none focus:ring-0 flex-1"
                      id="password"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="text-gray-500 focus:outline-none"
                    >
                      {showPassword ? <FiEye /> : <FiEyeOff />}
                    </button>
                  </div>
                </div>

                <Button className="self-center rounded-full w-40 mt-4 h-12 text-base">
                  Login
                </Button>
              </div>

              <div className="flex items-center font-Raleway font-medium justify-between mt-6">
                <div className="ml-2 text-sm flex gap-1 text-gray-500/80">
                  <p>Don&apos;t Have An Account?</p>
                  <Link
                    href={"/student/auth/register"}
                    className="text-[#F9326F] hover:underline"
                  >
                    Register
                  </Link>
                </div>
                <Link
                  href={"/student/auth/forgot-password"}
                  className="text-sm text-[#F9326F] hover:underline"
                >
                  Forgot Password?
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
}