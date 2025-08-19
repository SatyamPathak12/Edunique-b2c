
"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { FiArrowLeft, FiEdit2 } from 'react-icons/fi';
import { FormInput } from './ui-components';
import SavedToast from '@/components/common-components/SavedToast';


interface ProfileFormData {
  name: string;
  emailAddress: string;
  contactNumber: string;
  classNum: string;
  gender: string;
  dob: string;
  group: string;
  city: string;
  state: string;
  country: string;
  pinCode: string;
}

interface ProfileFormSectionProps {
  formData: ProfileFormData;
  onFormChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onProfileSave: (e: React.FormEvent) => void;
  profileAvatarSrc: string;
}

export const ProfileFormSection: React.FC<ProfileFormSectionProps> = ({
  formData,
  onFormChange,
  onProfileSave,
  profileAvatarSrc,
}) => {
  const [showToast, setShowToast] = useState(false);
  
    const handleDownload = () => {
      // simulate download
      setShowToast(true);
      setTimeout(() => setShowToast(false), 2000);
    };
  const handleBackClick = () => {
    if (typeof window !== "undefined") {
      window.history.back();
    }
  };
  return (
    
    <div className="bg-white rounded-2xl p-4 md:p-6 lg:p-8">
      
    <div className="flex items-center gap-2 mb-4 sm:mb-6">
                <button 
                    onClick={handleBackClick} 
                    className="p-1 text-gray-600 hover:text-blue-600 focus:outline-none"
                    aria-label="Go back"
                >
                  <FiArrowLeft className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>
                <h1 className="text-base sm:text-lg font-semibold text-gray-800">Edit Profile</h1>
            </div>

      {/* This div is the container for the patterned background and the overlaying white card */}
      <div
        className="flex h-[120px] items-center mt-0 mb-6 sm:mb-8 relative bg-repeat" 
        style={{
          backgroundImage: "url('/teacher-b2b/profile-back.png')",
          backgroundSize: "auto 600px", 
          backgroundPosition: "center", 
          borderRadius: "1rem" 
        }}
      >
        {/* This is the white card overlaying the pattern, left-aligned */}
        <div className="h-full flex items-start bg-white rounded-r-3xl px-4 py-3 sm:py-1"> {/* Added shadow-md for slight elevation */}
            <div className="relative mt-3 mr-4 sm:mr-6"> {/* Adjusted margins */}
              <Image
                src={profileAvatarSrc} 
                alt={formData.name}
                width={80}
                height={80}
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover border-2 border-white"
              />
              <button className="absolute bottom-0 right-0 p-1 sm:p-1.5 bg-[#E5E7EB] text-[#FF3366] rounded-full focus:outline-none">
                <FiEdit2 className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
              </button>
            </div>
            <div className="mt-3 py-1 sm:py-2"> {/* Adjusted padding */}
              <h1 className="text-xl sm:text-2xl font-medium text-black">
                {formData.name}
              </h1>
              <p className="text-yellow-500 text-sm sm:text-base font-medium">Student</p>
            </div>
        </div>
        {/* The decorative pattern is now the background of the parent div */}
      </div>

      {/* Profile Form */}
      <form onSubmit={onProfileSave}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 lg:gap-x-8 gap-y-4 sm:gap-y-5 mb-6 sm:mb-8">
          {/* FormInput instances remain the same */}
          <FormInput label="Name" id="name" placeholder="Name" value={formData.name} onChange={onFormChange}/>
          <FormInput label="Email Address" id="emailAddress" placeholder="example@gm.com" type="email" value={formData.emailAddress} onChange={onFormChange}/>
          <FormInput label="Contact Number" id="contactNumber" placeholder="1234567890" type="tel" value={formData.contactNumber} onChange={onFormChange}/>
          <FormInput label="Class" id="classNum" placeholder="8th" value={formData.classNum} onChange={onFormChange}/>
          <FormInput label="Gender" id="gender" placeholder="Male" value={formData.gender} onChange={onFormChange}/>
          <FormInput label="D.O.B." id="dob" placeholder="DD MMM YYYY" value={formData.dob} onChange={onFormChange}/>
          <FormInput label="Group" id="group" placeholder="A" value={formData.group} onChange={onFormChange}/>
          <FormInput label="City" id="city" placeholder="Mumbai" value={formData.city} onChange={onFormChange}/>
          <FormInput label="State" id="state" placeholder="Maharashtra" value={formData.state} onChange={onFormChange}/>
          <FormInput label="Country" id="country" placeholder="India" value={formData.country} onChange={onFormChange}/>
          <FormInput label="Pin code" id="pinCode" placeholder="000000" value={formData.pinCode} onChange={onFormChange}/>
          
          {/* Save Button - Ensure it takes the full width of its grid cell */}
          <div className="md:col-start-auto mt-auto"> {/* Control button position if needed, or let it flow */}
             {/* Forcing it to the next row on md if needed, or just ensure it takes the full width of a column */}
            <button
              type="button"
              onClick={handleDownload} 
              className="w-full h-11 sm:h-12 md:h-auto rounded-full sm:rounded-3xl px-8 sm:px-10 py-2.5 sm:py-3 bg-blue-600 text-white font-semibold text-xs sm:text-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors "
            >
              Save
            </button>
          </div>
        </div>
      </form>
      <SavedToast show={showToast}  />
    </div>
  );
};


interface NewsletterSectionProps {
  newsletterEmail: string;
  onNewsletterEmailChange: (value: string) => void;
  onNewsletterSubmit: (e: React.FormEvent) => void;
}

export const NewsletterSection: React.FC<NewsletterSectionProps> = ({
  newsletterEmail,
  onNewsletterEmailChange,
  onNewsletterSubmit,
}) => {
  return (
    <div
      className="mt-8 rounded-2xl p-6 md:p-10 lg:p-12 text-center text-white relative overflow-hidden bg-pink-600 bg-repeat" 
      style={{
        backgroundImage: "url(/pattern-2.png)", 
        backgroundSize: "1500px", 
        backgroundPosition: "center", 
      }}
    >
      <div className="relative z-10">
        <h2 className="text-2xl md:text-3xl lg:text-3xl font-bold mb-2 sm:mb-3">
          Subscribe to our newsletter
        </h2>
        <p className="text-xs sm:text-sm opacity-90 mb-6 sm:mb-8 max-w-md lg:max-w-lg mx-auto">
          Lorem Ipsum is simply dummy text of the printing.
        </p>
        <form
          onSubmit={onNewsletterSubmit}
          className="max-w-sm md:max-w-md mx-auto flex flex-row items-center bg-white rounded-full p-1 sm:p-1.5 "
        >
          <input
            type="email"
            value={newsletterEmail}
            onChange={(e) => onNewsletterEmailChange(e.target.value)}
            placeholder="Email Address"
            className="w-full sm:flex-grow px-4 sm:px-5 py-2 sm:py-2.5 text-gray-700 text-sm sm:text-base bg-transparent border-none focus:outline-none placeholder-gray-400 rounded-full sm:rounded-none sm:rounded-l-full mb-2 sm:mb-0"
            required
          />
          <button
            type="submit"
            className=" sm:w-auto px-8 sm:px-10 py-2 sm:py-2.5 bg-[#FFCC00] text-white font-semibold text-xs sm:text-sm rounded-full hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:ring-offset-2 transition-colors"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};