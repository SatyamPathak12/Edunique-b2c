"use client";

import MaxWidthWrapper from "@/components/max-width-wrapper";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function ForgotPassword() {
  const Router = useRouter();
  return (
	<MaxWidthWrapper> 
	  {/* This container correctly centers the card vertically and horizontally. */}
	  <div className="w-full min-h-screen flex flex-col md:flex-row items-center justify-center p-4">

		{/* FIXED: Reduced max-width from 6xl to 5xl for a more contained size. */}
		<div className="relative flex flex-col md:flex-row-reverse gap-2 sm:gap-6 w-full max-w-6xl p-3 md:p-6 bg-white rounded-2xl overflow-hidden">

		  {/* Decorative Images (Unchanged) */}
		  <div className="hidden md:block absolute top-2 -translate-x-12 left-1/2">
			<Image src={"/images/loginimg2.png"} width={70} height={76} alt="decoration" />
		  </div>
		  <div className="hidden md:block absolute bottom-20 right-2">
			<Image src={"/images/loginimg1.png"} width={140} height={64} alt="decoration" />
		  </div>

		  {/* Right Column - Image (Unchanged) */}
		  <div className="w-full hidden md:block md:w-[55%]">
			<Image
			  src={"/student/auth/forgot-password/forgot.png"}
			  width={1000}
			  height={1000}
			  className="w-full h-full object-cover rounded-2xl"
			  alt="Login"
			/>
		  </div>

		  {/* Left Column - Login Form */}
		  <div className="w-full md:w-[45%] py-2 md:py-8 md:mt-12 px-2 md:px-6 flex flex-col">
			<div className="w-full ">
			  <h2 className="font-Poppins text-2xl font-bold">Forgot password</h2>
			  <p className="mt-2 text-xs md:text-sm max-w-[50ch] font-medium text-black">
				Lorem Ipsum is simply dummy text of the printing and typesetting
				industry.
			  </p>

			  <div className="w-full md:hidden block md:w-[55%] mt-4">
				<Image
				  src={"/student/auth/forgot-password/forgot.png"}
				  width={1000}
				  height={1000}
				  className="w-full h-full object-cover rounded-2xl"
				  alt="Login"
				/>
			  </div>

			  <div className="mt-6 space-y-4 sm:space-y-5 flex flex-col">
				<div>
				  <Label className="font-medium text-[16px]" htmlFor="email">Email Id</Label>
				  <Input
					id="email"
					type="email"
					placeholder=" Enter Email ID"
					className="rounded-full font-light bg-[#F9FAFB] mt-1"
				  />
				</div>

				<Button className="self-center rounded-full w-36 h-12 font-light text-base text-white" onClick={()=>{Router.push("/b2c-student/registration/forgot-password-2")}}>
				  Proceed
				</Button>
			  </div>

			</div>
		  </div>
		</div>
	  </div>
	</MaxWidthWrapper>
  );
}