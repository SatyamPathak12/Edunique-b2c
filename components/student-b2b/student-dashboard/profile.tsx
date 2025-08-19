"use client";

import { useState } from "react";
import Image from "next/image";
import Header from "@/components/layout/Header"; // Assuming Header is in this path
import Footer from "@/components/layout/Footer"; // Assuming Footer is in this path
import { FiArrowLeft, FiEdit2 } from "react-icons/fi"; // Edit icon

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
      className="w-full px-4 py-3 bg-[#F9FAFB] border border-[#D5D5D5] rounded-3xl text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:bg-white"
    />
  </div>
);

export default function EditStudentProfilePage() {
  const [formData, setFormData] = useState({
    name: "Shlok Agheda",
    emailAddress: "example@gm.com",
    contactNumber: "1234567890",
    classNum: "8th",
    gender: "Male",
    dob: "00 JAN 0000", // Consider using a proper date format or date picker
    group: "A",
    city: "Mumbai",
    state: "Maharashtra",
    country: "India",
    pinCode: "000000",
  });
  const [newsletterEmail, setNewsletterEmail] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleProfileSave = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Profile Data Saved:", formData);
    // API call to save profile data
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Newsletter Subscription:", newsletterEmail);
    // API call to subscribe
    setNewsletterEmail("");
  };

  // Sample user data for the Header
  const headerUser = {
    name: formData.name,
    role: "Student",
    avatarSrc: "/teacher-b2b/profile.png", // UPDATE PATH
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <Header user={headerUser} />

      <main className="flex-grow container mx-auto p-4 sm:p-6 lg:p-8">
        <div className="bg-white rounded-2xl shadow-xl p-6  md:p-8">
          {/* Profile Header Section */}
          <div className="flex gap-2 ">
            {/* Back Button */}
            <button className="hover:text-blue-600 focus:outline-none">
              <FiArrowLeft className="w-6 h-6" />
            </button>
            <h1 className="text-lg font-semibold ">Edit Profile</h1>
          </div>
          <div className="flex items-center  mt-4 mb-8"
		  style={{
                backgroundImage: "url('/teacher-b2b/profile-back.png')", // UPDATE PATH
                backgroundSize: "auto 600px", // Adjust size for pattern density
              }}
		  >
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
              <button className="absolute bottom-0 right-0 p-1.5 bg-[#E5E7EB] text-[#FF3366] rounded-full shadow-md  focus:outline-none">
                <FiEdit2 className="w-3 h-3" />
              </button>
            </div>
            <div className="mt-3 py-2">
              <h1 className="text-2xl font-medium text-black">
                {formData.name}
              </h1>
              <p className="text-yellow-500 font-medium">Student</p>
            </div>
			</div>

            {/* Decorative Pattern - Right Side */}
            {/* <div
              className="hidden md:block ml-auto w-2/5 h-20 bg-repeat opacity-70 rounded-lg"
              style={{
                backgroundImage: "url('/teacher-b2b/profile-back.png')", // UPDATE PATH
                backgroundSize: "auto 60px", // Adjust size for pattern density
              }}
            ></div> */}
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
                label="Class"
                id="classNum"
                placeholder="8th"
                value={formData.classNum}
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
                label="Group"
                id="group"
                placeholder="A"
                value={formData.group}
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
                label="Country"
                id="country"
                placeholder="India"
                value={formData.country}
                onChange={handleChange}
              />
              <FormInput
                label="Pin code"
                id="pinCode"
                placeholder="000000"
                value={formData.pinCode}
                onChange={handleChange}
              />
              <button
                type="submit"
                className="w-full h-11 md:w-auto  mt-6  rounded-3xl px-10 py-3  bg-blue-600 text-white font-semibold text-sm  hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors shadow-md"
              >
                Save
              </button>
            </div>
          </form>
        </div>

        {/* Newsletter Subscription Section */}
        <div
          className="mt-8 rounded-2xl p-8 md:p-12 text-center text-white relative overflow-hidden bg-pink-600 bg-repeat"
          style={{
            backgroundImage: "url(/pattern-2.png)", // UPDATE PATH
            backgroundSize: "1500px",
          }}
        >
          <div className="relative z-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">
              Subscribe to our newsletter
            </h2>
            <p className="text-sm opacity-90 mb-8 max-w-lg mx-auto">
              Lorem Ipsum is simply dummy text of the printing.
            </p>
            <form
              onSubmit={handleNewsletterSubmit}
              className="max-w-md mx-auto flex items-center bg-white rounded-full p-1.5 shadow-lg"
            >
              <input
                type="email"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                placeholder="Email Address"
                className="flex-grow px-5 py-2.5 text-gray-700 text-md bg-transparent border-none focus:outline-none placeholder-gray-400"
                required
              />
              <button
                type="submit"
                className="px-10 py-2.5 bg-[#FFCC00] text-white font-semibold text-sm rounded-full hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:ring-offset-2 transition-colors"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
