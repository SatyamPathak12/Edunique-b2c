"use client";
import React, { useState } from "react";
import { Edit } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { DatePicker } from "@/components/ui/date-picker";
import Image from "next/image";

export default function ProfileFormComponent() {
    const [formData, setFormData] = useState({
        studentName: "Jane Cooper",
        email: "jane@gamil.com",
        contactNumber: "9876543210",
        countryCode: "+91",
        class: "8th",
        gender: "Male",
        dob: new Date("2007-05-15"),
        city: "Jaipur",
        state: "Rajasthan",
        country: "India",
        pincode: "302028",
      });
    
      const handleChange = (field: keyof typeof formData, value: string | number | Date) => {
        setFormData({
          ...formData,
          [field]: value,
        });
      };
    
      const handleSave = () => {
        console.log("Saving profile data:", formData);
        // Add your save logic here
      };
    
    return (
        <div className="max-w-7xl mx-auto bg-white rounded-xl shadow-sm p-6 h-fit">
        <h1 className="text-2xl font-semibold mb-6">Profile</h1>

        <div className="w-full max-w-6xl mx-auto p-4">
          {/* Profile Picture */}
          <div className="mb-6 flex justify-start">
            <div className="relative">
              <div className="w-32 h-32 rounded-full bg-blue-100 overflow-hidden">
                <Image
                  src="/student/settings/profile.png"
                  alt="Student profile"
                  className="w-full h-full object-cover"
                  priority
                  width={120}
                  height={120}
                />
              </div>
              <div className="absolute bottom-0 right-0 bg-pink-500 rounded-full p-2 cursor-pointer">
                <Edit className="w-4 h-4 text-white" />
              </div>
            </div>
          </div>

          {/* Form Fields */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Student Name */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Student Name
              </label>
              <Input
                type="text"
                value={formData.studentName}
                onChange={(e) => handleChange("studentName", e.target.value)}
                className="w-full p-3 border rounded"
              />
            </div>

            {/* Email Address */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Email Address
              </label>
              <Input
                type="text"
                value={formData.email}
                onChange={(e) => handleChange("email", e.target.value)}
                className="w-full p-3 border rounded"
              />
            </div>

            {/* Contact Number */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Contact Number
              </label>
              <div className="flex">
                <Select
                  value={formData.countryCode}
                  onValueChange={(value) => handleChange("countryCode", value)}
                >
                  <SelectTrigger className="w-20 p-3 border rounded-l">
                    <SelectValue placeholder="Code" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="+91">+91</SelectItem>
                    <SelectItem value="+1">+1</SelectItem>
                    <SelectItem value="+44">+44</SelectItem>
                    <SelectItem value="+61">+61</SelectItem>
                  </SelectContent>
                </Select>
                <Input
                  type="text"
                  value={formData.contactNumber}
                  onChange={(e) =>
                    handleChange("contactNumber", e.target.value)
                  }
                  className="w-full p-3 border border-l-0 rounded-r"
                />
              </div>
            </div>

            {/* Class */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Class
              </label>
              <Select
                value={formData.class}
                onValueChange={(value) => handleChange("class", value)}
              >
                <SelectTrigger className="w-full p-3 h-12 border rounded flex justify-between items-center">
                  <SelectValue placeholder="Select class" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="6th">6th</SelectItem>
                  <SelectItem value="7th">7th</SelectItem>
                  <SelectItem value="8th">8th</SelectItem>
                  <SelectItem value="9th">9th</SelectItem>
                  <SelectItem value="10th">10th</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Gender */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Gender
              </label>
              <Select
                value={formData.gender}
                onValueChange={(value) => handleChange("gender", value)}
              >
                <SelectTrigger className="w-full p-3 h-12 border rounded flex justify-between items-center">
                  <SelectValue placeholder="Select gender" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Male">Male</SelectItem>
                  <SelectItem value="Female">Female</SelectItem>
                  <SelectItem value="Other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* DOB */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                DOB
              </label>
              <DatePicker
                selected={formData.dob}
                onChange={(date) => handleChange("dob", date ?? new Date())}
                className="w-full"
              />
            </div>

            {/* City */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                City
              </label>
              <Input
                type="text"
                value={formData.city}
                onChange={(e) => handleChange("city", e.target.value)}
                className="w-full p-3 border rounded"
              />
            </div>

            {/* State */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                State
              </label>
              <Input
                type="text"
                value={formData.state}
                onChange={(e) => handleChange("state", e.target.value)}
                className="w-full p-3 border rounded"
              />
            </div>

            {/* Country */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Country
              </label>
              <Input
                type="text"
                value={formData.country}
                onChange={(e) => handleChange("country", e.target.value)}
                className="w-full p-3 border rounded"
              />
            </div>

            {/* Pincode */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Pincode
              </label>
              <Input
                type="text"
                value={formData.pincode}
                onChange={(e) => handleChange("pincode", e.target.value)}
                className="w-full p-3 border rounded"
              />
            </div>
          </div>

          {/* Save Button */}
          <div className="mt-6 flex justify-end">
            <Button
              className="px-10 py-3 bg-blue-600 hover:bg-blue-700 text-white text-lg font-medium rounded"
              onClick={handleSave}
            >
              Save
            </Button>
          </div>
        </div>
      </div>
    );
};
