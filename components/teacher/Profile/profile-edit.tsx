'use client';

import Sidebar from '@/components/teacher/layout'; // Adjust import path
import Image from 'next/image';
import { useState } from 'react';
import { FiSearch, FiBell, FiChevronDown, FiCalendar, FiMail, FiCamera } from 'react-icons/fi'; // Added FiCamera

// --- Reusable Helper Components (from previous example, slightly adapted) ---

const InputField = ({ id, label, placeholder, type = "text", icon: Icon, value, onChange, wrapperClassName }: { id: string, label: string, placeholder: string, type?: string, icon?: React.ElementType, value?: string, onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void, wrapperClassName?: string }) => (
    <div className={`space-y-1.5 ${wrapperClassName || ''}`}>
        <label htmlFor={id} className="block text-sm font-medium text-gray-700">
            {label}
        </label>
        <div className="relative">
             <input
                id={id}
                name={id}
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                className={`block w-full rounded-md border border-gray-300 bg-white px-3 py-2.5 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 shadow-sm ${Icon ? 'pr-10' : ''}`}
            />
            {Icon && (
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                    <Icon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                </div>
            )}
        </div>
    </div>
);

const SelectField = ({ id, label, placeholder, options = [], value, onChange, wrapperClassName }: { id: string, label: string, placeholder: string, options?: {value: string, label: string}[], value?: string, onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void, wrapperClassName?: string }) => (
     <div className={`space-y-1.5 ${wrapperClassName || ''}`}>
        <label htmlFor={id} className="block text-sm font-medium text-gray-700">
            {label}
        </label>
        <div className="relative">
             <select
                id={id}
                name={id}
                className="appearance-none block w-full rounded-md border border-gray-300 bg-white px-3 py-2.5 text-sm text-gray-900 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 shadow-sm pr-10"
                value={value || ""}
                onChange={onChange}
            >
                 <option value="" disabled hidden={!!value}>{placeholder}</option>
                 {options.map(option => <option key={option.value} value={option.value}>{option.label}</option>)}
            </select>
             <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-400">
                <FiChevronDown className="h-5 w-5" aria-hidden="true" />
            </div>
        </div>
    </div>
);

const TextareaField = ({ id, label, placeholder, rows = 4, value, onChange, wrapperClassName }: { id: string, label: string, placeholder: string, rows?: number, value?: string, onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void, wrapperClassName?: string }) => (
     <div className={`space-y-1.5 ${wrapperClassName || ''}`}>
        <label htmlFor={id} className="block text-sm font-medium text-gray-700">
            {label}
        </label>
        <textarea
            id={id}
            name={id}
            rows={rows}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className="block w-full rounded-md border border-gray-300 bg-white px-3 py-2.5 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 shadow-sm resize-none"
        />
    </div>
);

// --- Edit Profile Page Component ---

export default function EditTeacherProfilePage() {
    // Placeholder state for form fields - In a real app, fetch and manage this data
    const [formData, setFormData] = useState({
        name: "Robert Allen",
        occupation: "teacher",
        subject: "english",
        gender: "male",
        dob: "20/05/1990", // Example, actual date input might need different handling
        address: "123 Main St, Anytown",
        city: "anytown",
        email: "robert.allen@example.com",
        mobile: "9876543210", // Without country code initially
        instagram: "https://instagram.com/robertallen",
        facebook: "https://facebook.com/robertallen",
        twitter: "https://twitter.com/robertallen",
        linkedin: "https://linkedin.com/in/robertallen",
        bio: "Experienced English teacher with a passion for literature and helping students achieve their best."
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Form Data Submitted:", formData);
        // Add API call to save data here
    };


    return (
        <div className="flex min-h-screen bg-gray-100">
            <Sidebar />

            <main className="flex-1 ml-64">
                {/* Top Bar */}
                 <header className="bg-white shadow-sm sticky top-0 z-30">
                    <div className="max-w-full mx-auto px-6 md:px-8 h-16 flex justify-between items-center">
                        <div>
                            <h1 className="text-xl font-semibold text-gray-800">Edit</h1>
                            <p className="text-xs text-gray-500">Dashboard</p>
                        </div>
                        <div className="flex items-center space-x-4">
                            <div className="relative hidden sm:block">
                                <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                <input type="text" placeholder="Search" className="pl-10 pr-4 py-2 w-48 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm" />
                            </div>
                            <button className="p-2 bg-white border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-50 relative"> <FiBell className="w-5 h-5" /> </button>
                            <div className="flex items-center space-x-2 bg-white border border-gray-300 rounded-lg p-1.5 pr-2 cursor-pointer hover:bg-gray-50">
                                <Image src="/placeholder-avatar.jpg" alt="User Avatar" width={28} height={28} className="rounded-full" />
                                <div className="hidden md:block"> <p className="text-xs font-medium text-gray-800">Robert Allen</p> <p className="text-xs text-gray-500">Teacher</p> </div>
                                <FiChevronDown className="w-4 h-4 text-gray-500" />
                            </div>
                        </div>
                    </div>
                </header>

                {/* Edit Form Content */}
                <form onSubmit={handleSubmit} className="p-6 md:p-8 space-y-8">
                    {/* Profile Picture Upload */}
                    <div className="flex flex-col items-center mb-6">
                        <div className="relative group">
                            <Image
                                src="/images/profile-robert-allen.jpg" // <-- Current profile image
                                alt="Profile Picture"
                                width={120}
                                height={120}
                                className="rounded-lg object-cover shadow-md"
                            />
                            <label
                                htmlFor="profile-picture-upload"
                                className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 flex items-center justify-center rounded-lg cursor-pointer transition-opacity duration-200"
                            >
                                <FiCamera className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                            </label>
                            <input type="file" id="profile-picture-upload" className="sr-only" accept="image/*" />
                        </div>
                    </div>

                    {/* Form Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-5">
                        <InputField id="name" label="Name" placeholder="Enter full name" value={formData.name} onChange={handleInputChange} wrapperClassName="md:col-span-3" />

                        <SelectField id="occupation"  label="Occupation" placeholder="Select Occupation" value={formData.occupation} onChange={handleInputChange}
                            options={[{value: 'teacher', label: 'Teacher'}, {value: 'student', label: 'Student'}, {value: 'principal', label: 'Principal'}]} />
                        <SelectField id="subject"  label="Subject" placeholder="Select Subject" value={formData.subject} onChange={handleInputChange}
                            options={[{value: 'english', label: 'English'}, {value: 'math', label: 'Math'}, {value: 'science', label: 'Science'}]} />
                        <SelectField id="gender" label="Gender" placeholder="Select Gender" value={formData.gender} onChange={handleInputChange}
                            options={[{value: 'male', label: 'Male'}, {value: 'female', label: 'Female'}, {value: 'other', label: 'Other'}]} />

                        <InputField id="dob"  label="DOB" placeholder="DD/MM/YYYY" icon={FiCalendar} value={formData.dob} onChange={handleInputChange} />
                        <InputField id="address"  label="Address" placeholder="Enter Address" value={formData.address} onChange={handleInputChange} />
                        <SelectField id="city"  label="City" placeholder="Select City" value={formData.city} onChange={handleInputChange}
                             options={[{value: 'anytown', label: 'Anytown'}, {value: 'othercity', label: 'Other City'}]}/> {/* Add more city options */}


                        <InputField id="email"  label="Email Address" placeholder="Enter Email" icon={FiMail} value={formData.email} onChange={handleInputChange} />
                        {/* Mobile Number with Flag (visual only) */}
                        <div className="space-y-1.5">
                            <label htmlFor="mobile" className="block text-sm font-medium text-gray-700">Mobile Number</label>
                            <div className="relative flex items-center">
                                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    {/* Placeholder for flag icon - Use an actual flag image or SVG */}
                                    <span className="text-sm">🇺🇦</span> {/* Example: Ukrainian Flag Emoji */}
                                    <FiChevronDown className="h-4 w-4 text-gray-400 ml-1" />
                                </div>
                                <input
                                    id="mobile"
                                    name="mobile"
                                    type="tel"
                                    placeholder="9876543210"
                                    value={formData.mobile}
                                    onChange={handleInputChange}
                                    className="block w-full rounded-md border border-gray-300 bg-white pl-[4.5rem] pr-3 py-2.5 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 shadow-sm"
                                />
                            </div>
                        </div>
                        <InputField id="instagram"  label="Instagram Link" placeholder="Enter Instagram Link" value={formData.instagram} onChange={handleInputChange} />

                        <InputField id="facebook"  label="Facebook Link" placeholder="Enter Facebook Link" value={formData.facebook} onChange={handleInputChange} />
                        <InputField id="twitter"  label="Twitter Link" placeholder="Enter Twitter Link" value={formData.twitter} onChange={handleInputChange} />
                        <InputField id="linkedin"  label="LinkedIn Link" placeholder="Enter LinkedIn Link" value={formData.linkedin} onChange={handleInputChange} />

                        <TextareaField id="bio"  label="Bio" placeholder="Enter Bio" rows={5} value={formData.bio} onChange={handleInputChange} wrapperClassName="md:col-span-3" />
                    </div>

                    <div className="flex justify-end pt-4">
                        <button
                            type="submit"
                            className="px-6 py-2.5 bg-blue-600 text-white font-medium text-sm rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
                        >
                            Save
                        </button>
                    </div>
                </form>
            </main>
        </div>
    );
}