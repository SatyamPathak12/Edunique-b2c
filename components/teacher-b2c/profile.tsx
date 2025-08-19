"use client";

import { useState } from "react";
import Image from "next/image";
import Header from "@/components/layout/TeacherB2CHeader"; // Assuming Header is in this path
import Footer from "@/components/layout/Footer"; // Assuming Footer is in this path
import { FiArrowLeft, FiEdit2 } from "react-icons/fi"; // Edit icon
import { Button } from "../ui/button";
import Newsletter from "../common-components/Newsletter";
import { useRouter } from "next/navigation";
// import MaxWidthWrapper from '../max-width-wrapper'

// Helper Input Component
const FormInput = ({
	label,
	id,
	placeholder,
	type = "text",
	value,
	onChange,
}: {
	label: string;
	id: string;
	placeholder: string;
	type?: string;
	value: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => (
	<div className="w-full">
		<label htmlFor={id} className="block text-sm text-black mb-2">
			{label}
		</label>
		<input
			type={type}
			id={id}
			name={id}
			value={value}
			onChange={onChange}
			placeholder={placeholder}
			className="w-full px-4 py-2 bg-[#F9FAFB] border border-[#D5D5D5] rounded-3xl text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:bg-white"
		/>
	</div>
);

export default function EditStudentProfilePage() {
	const [formData, setFormData] = useState({
		name: "",
		emailAddress: "",
		contactNumber: "",
		gender: "",
		dob: "",
		country: "",
		city: "",
		state: "",
		pinCode: "",
	});

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleProfileSave = (e: React.FormEvent) => {
		e.preventDefault();
		console.log("Profile Data Saved:", formData);
		// API call to save profile data
	};



	const router = useRouter();
	
		const handleBack = () => {
			router.push('/b2c-teacher/teacher-flow/dashboard');
		};

	return (
		<>
			<Header />
			<div className="bg-[#eeeeee] min-h-screen flex flex-col">
				<main className="flex-grow w-full max-w-screen-xl mx-auto p-4 sm:p-6">
					<div className="bg-white rounded-2xl p-6  md:p-8">
						{/* Profile Header Section */}
						<div className="flex gap-2 ">
							{/* Back Button */}
							<button className="hover:text-blue-600 focus:outline-none"
							onClick={handleBack}>
								<FiArrowLeft className="w-6 h-6" />
							</button>
							<h1 className="text-md font-semibold ">Edit Profile</h1>
						</div>
						<div className="flex items-center mt-4 mb-8 bg-none sm:bg-[url('/teacher-b2b/profile-back.png')] sm:bg-[auto_600px]">
							<div className="flex items-start bg-white rounded-r-3xl px-4 py-1">
								{/* Avatar and Name */}
								<div className="relative mt-3   mr-6">
									<Image
										src="/teacher-b2b/profile.png"
										alt={formData.name}
										width={80}
										height={80}
										className="w-20 h-20 rounded-full object-cover"
									/>
									<button className="absolute bottom-0 right-0 p-1.5 bg-[#E5E7EB] text-[#FF3366] rounded-full  focus:outline-none">
										<FiEdit2 className="w-3 h-3" />
									</button>
								</div>
								<div className="mt-3 py-2">
									<h1 className="text-2xl font-medium text-black">
										Ronak Mathur
									</h1>
									<p className="text-[#FFCC00] font-medium">Teacher</p>
								</div>
							</div>
						</div>

						<div className="flex flex-col gap-2 my-6">
							<h1 className="text-[#3366FF] font-semibold">
								Your Unique Referral Code
							</h1>
							<div className="flex flex-wrap gap-2 items-center justify-between p-3 bg-[#f9f9f9] rounded-2xl">
								<h2 className="text-[#FF3366] text-base sm:text-xl font-medium sm:font-bold">
									EDUNIQUE-TEACHER-RONAK23
								</h2>
								<div className=" bg-[#3366FF33] text-[#3366FF] rounded-2xl px-4 py-3 flex items-center justify-center gap-1">
									<svg
										width={16}
										height={16}
										viewBox="0 0 24 25"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M16 4.5H18C18.5304 4.5 19.0391 4.71071 19.4142 5.08579C19.7893 5.46086 20 5.96957 20 6.5V20.5C20 21.0304 19.7893 21.5391 19.4142 21.9142C19.0391 22.2893 18.5304 22.5 18 22.5H6C5.46957 22.5 4.96086 22.2893 4.58579 21.9142C4.21071 21.5391 4 21.0304 4 20.5V6.5C4 5.96957 4.21071 5.46086 4.58579 5.08579C4.96086 4.71071 5.46957 4.5 6 4.5H8"
											stroke="#3366FF"
											strokeWidth={2}
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
										<path
											d="M15 2.5H9C8.44772 2.5 8 2.94772 8 3.5V5.5C8 6.05228 8.44772 6.5 9 6.5H15C15.5523 6.5 16 6.05228 16 5.5V3.5C16 2.94772 15.5523 2.5 15 2.5Z"
											stroke="#3366FF"
											strokeWidth={2}
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
									</svg>
									<h3 className="text-xs md:text-sm whitespace-nowrap font-light">Copy Code</h3>
								</div>
							</div>
						</div>

						{/* Profile Form */}
						<form onSubmit={handleProfileSave}>
							<div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-5 mb-8">
								<FormInput
									label="Name"
									id="name"
									placeholder="Name"
									value={formData.name}
									onChange={handleChange}
								/>
								<FormInput
									label="Email Address"
									id="emailAddress"
									placeholder="example@gm.com"
									type="email"
									value={formData.emailAddress}
									onChange={handleChange}
								/>
								<FormInput
									label="Contact Number"
									id="contactNumber"
									placeholder="1234567890"
									type="tel"
									value={formData.contactNumber}
									onChange={handleChange}
								/>

								<FormInput
									label="Gender"
									id="gender"
									placeholder="Male"
									value={formData.gender}
									onChange={handleChange}
								/>
								<FormInput
									label="D.O.B."
									id="dob"
									placeholder="00 JAN 0000"
									value={formData.dob}
									onChange={handleChange}
								/>
								<FormInput
									label="Country"
									id="country"
									placeholder="India"
									value={formData.country}
									onChange={handleChange}
								/>
								<FormInput
									label="City"
									id="city"
									placeholder="Mumbai"
									value={formData.city}
									onChange={handleChange}
								/>
								<FormInput
									label="State"
									id="state"
									placeholder="Maharashtra"
									value={formData.state}
									onChange={handleChange}
								/>

								<FormInput
									label="Pin code"
									id="pinCode"
									placeholder="000000"
									value={formData.pinCode}
									onChange={handleChange}
								/>
							</div>
						</form>
						<div className="w-full flex pt-6 justify-center">
							<Button className="px-[15%] rounded-full text-xl h-10 mx-auto"
							onClick={handleBack}>
								Save
							</Button>
						</div>
					</div>

					{/* Newsletter Subscription Section */}
					<Newsletter />
				</main>
			</div>
			<Footer />
		</>
	);
}
