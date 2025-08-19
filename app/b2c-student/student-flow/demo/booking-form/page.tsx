"use client";

import type React from "react";

import { useState } from "react";
import { useRouter } from "next/navigation";
import StudentWrapper from "@/components/student-wrapper";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Footer from "@/components/layout/Footer";
import BackButton from "@/components/common-components/BackButton";

interface FormData {
  studentName: string;
  studentAge: string;
  studentGrade: string;
  parentName: string;
  parentEmail: string;
  parentPhone: string;
}

export default function DemoBookingForm() {
  const router = useRouter();
  const [formData, setFormData] = useState<FormData>({
    studentName: "",
    studentAge: "",
    studentGrade: "",
    parentName: "",
    parentEmail: "",
    parentPhone: "",
  });

  const formFields = [
    { key: "studentName", label: "Student Name", type: "text" },
    { key: "studentAge", label: "Student Age", type: "text" },
    { key: "studentGrade", label: "Student Grade", type: "text" },
    { key: "parentName", label: "Parent Name", type: "text" },
    { key: "parentEmail", label: "Parent Email ID", type: "email" },
    { key: "parentPhone", label: "Parent Phone Number", type: "tel" },
  ];

  const handleInputChange = (key: keyof FormData, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/b2c-student/student-flow/demo/teacher-selection");
  };

 

  return (
    <StudentWrapper>
      <div className="relative z-10 bg-[#E3E3E3]">
      
      <BackButton Heading="Course Name" />

        <section className="px-4 sm:px-8 lg:px-16 py-8">
          <div className="rounded-3xl max-w-7xl mx-auto bg-white space-y-4 p-4">
            <h1 className="text-3xl font-semibold text-[#FF3366]">
              Registration
            </h1>
            <form onSubmit={handleSubmit}>
              <div className="md:grid md:grid-cols-[1fr_1fr] p-4 gap-16">
                <div className="space-y-8 pl-1">
                  {formFields.map((field, index) => (
                    <div
                      key={index}
                      className="flex flex-col items-start gap-2"
                    >
                      <Label htmlFor={field.key} className="font-medium">
                        {field.label}
                      </Label>
                      <Input
                        id={field.key}
                        type={field.type}
                        value={formData[field.key as keyof FormData]}
                        onChange={(e) =>
                          handleInputChange(
                            field.key as keyof FormData,
                            e.target.value
                          )
                        }
                        className="w-full py-2.5 rounded-full bg-[#F9FAFB] placeholder:text-[#6B7280] border transition-colors border-[#D5D5D5]"
                        placeholder={
                          field.type === "email"
                            ? "Text"
                            : field.type === "tel"
                            ? "Text"
                            : field.type === "number"
                            ? "Text"
                            : "Text " 
                        }
                        required
                      />
                    </div>
                  ))}

                  {/* Continue button - only visible when form is complete and valid */}
                  <div className="flex items-center justify-center animate-in fade-in duration-300">
                    <Button
                      type="submit"
                      className="bg-[#3366ff] text-white px-8 py-6 hover:bg-[#0c45f0] hover:text-white rounded-full ml-6 transition-all duration-200 transform cursor-pointer disabled:opacity-50"
                    >
                      Continue
                    </Button>
                  </div>
                </div>

                <div className="space-y-2 mt-4 sm:mt-0">
                  <img
                    alt="course pack image"
                    src="/student/courses/detail/hero.png"
                    className="block mx-auto rounded-3xl"
                  />
                  <div className="border border-zinc-200 bg-[#F9FAFB] rounded-3xl text-center gap-2 p-6">
                    Pellentesque ac sapien quis ipsum
                    <br /> faucibus ullamcorper sed eu enim.
                    <br /> Mauris id ornare metus.
                  </div>
                </div>
              </div>
            </form>
          </div>
        </section>
      </div>

      <Footer/>
    </StudentWrapper>
  );
}
