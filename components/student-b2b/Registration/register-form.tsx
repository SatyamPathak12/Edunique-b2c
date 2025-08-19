"use client";

import { useState } from "react";
import Image from "next/image";

// --- Reusable Form Field Components for Clean Code ---

interface FormSelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  id: string;
  label: string;
  children: React.ReactNode;
}

interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label: string;
}
const FormInput: React.FC<FormInputProps> = ({ id, label, ...props }) => (
  <div className="mb-6">
    <label htmlFor={id} className="block text-sm font-medium text-[#333333] mb-2">{label}</label>
    <input
      id={id}
      {...props}
      className="w-full rounded-full border border-[#D5D5D5] bg-[#F9FAFB] py-3 px-4 text-sm text-[#555555] placeholder:text-[#6B7280] transition focus:outline-none focus:ring-2 focus:ring-[#3366FF] focus:bg-white"
    />
  </div>
);

const FormSelect: React.FC<FormSelectProps> = ({ id, label, children, ...props }) => (
  <div className="mb-6">
    <label htmlFor={id} className="block text-sm font-medium text-[#333333] mb-2">{label}</label>
    <div className="relative">
      <select
        id={id}
        {...props}
        className="w-full appearance-none rounded-full border border-[#D5D5D5] bg-[#F9FAFB] py-3 pl-4 pr-10 text-sm text-[#555555] transition focus:outline-none focus:ring-2 focus:ring-[#3366FF] focus:bg-white"
      >
        {children}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
        <svg fill='currentColor' height='16' viewBox='0 0 16 16' width='16' xmlns='http://www.w3.org/2000/svg'><path d='M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z'/></svg>
      </div>
    </div>
  </div>
);

// --- Main Page Component ---

export default function StudentInfoPage() {
  const [formData, setFormData] = useState({
    name: "",
    className: "",
    dob: "",
    guardianName: "",
    email: "",
    mobile: "",
    country: "",
    state: "",
    city: "",
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    console.log("Submitted data:", formData);
  }

  return (
    <div
      className="min-h-screen w-full flex items-center justify-center p-4"
      style={{
        backgroundColor: '#3366FF',
        backgroundImage: "url(/images/background.jpg)",
        backgroundRepeat: "repeat",
      }}
    >
      {/* The main container no longer has a fixed height, allowing the content to define it. */}
      <main className="w-full max-w-7xl flex flex-col md:flex-row gap-8">
        
        {/* --- Left Panel: Form (No longer has overflow or fixed height) --- */}
        <div className="w-full md:w-2/5 lg:w-1/3 bg-white p-6 sm:p-8 lg:p-10 rounded-4xl shadow-2xl">
            <form onSubmit={handleSubmit}>
                <FormInput id="name" name="name" label="Name" type="text" placeholder="Enter Name" value={formData.name} onChange={handleChange} />
                <FormInput id="className" name="className" label="Class" type="text" placeholder="Enter Class" value={formData.className} onChange={handleChange} />
                <FormInput id="dob" name="dob" label="Date of Birth" type="text" placeholder="DD/MM/YY" value={formData.dob} onChange={handleChange} />
                <FormInput id="guardianName" name="guardianName" label="Parent / Guardian Name" type="text" placeholder="Enter Parent / Guardian Name" value={formData.guardianName} onChange={handleChange} />
                <FormInput id="email" name="email" label="Email ID" type="email" placeholder="Enter Email ID" value={formData.email} onChange={handleChange} />
                <FormInput id="mobile" name="mobile" label="Mobile Number" type="tel" placeholder="+91 1234567890" value={formData.mobile} onChange={handleChange} />
                
                <FormSelect id="country" name="country" label="Country" value={formData.country} onChange={handleChange}>
                    <option value="" disabled>Select Country</option>
                    <option value="india">India</option>
                </FormSelect>

                <FormSelect id="state" name="state" label="State" value={formData.state} onChange={handleChange}>
                    <option value="" disabled>Select State</option>
                    <option value="maharashtra">Maharashtra</option>
                </FormSelect>

                {/* Final form select has a larger bottom margin to space it from the button */}
                <div className="mb-8">
                    <FormSelect id="city" name="city" label="City" value={formData.city} onChange={handleChange}>
                        <option value="" disabled>Select City</option>
                        <option value="mumbai">Mumbai</option>
                    </FormSelect>
                </div>

                <button type="submit" className="w-full bg-[#3366FF] text-white font-semibold py-3.5 rounded-full transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                    Submit
                </button>
            </form>
        </div>

        {/* --- Right Panel: Image (Stretches to match the left panel's height automatically) --- */}
        <div className="hidden md:block w-full md:w-3/5 lg:w-2/3 relative rounded-4xl overflow-hidden">
          <div 
            className="absolute inset-0 w-full h-full bg-[#f9fafb]"
            style={{
                backgroundImage: "url(/images/registar_pattern.svg)",
                backgroundSize: 'cover',
            }}
          />
          <Image
            src="/images/Girl_writing.png"
            alt="Child writing"
            layout="fill"
            objectFit="contain"
            objectPosition="bottom center"
            className="z-10 drop-shadow-xl"
          />
        </div>
      </main>
    </div>
  );
}