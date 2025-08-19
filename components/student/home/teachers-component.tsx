"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import { cn } from "@/lib/utils";
import Link from "next/link";

type Category =
  | "Technology Programs"
  | "Computer Science"
  | "Science"
  | "English"
  | "Public speaking"
  | "Chess"
  | "AI Explorers"
  | "Abacus";

interface Teacher {
  id: string;
  name: string;
  category: Category;
  image: string;
  role: string;
  experience: string;
  rating: number;
  description: string;
}

const teachers: Teacher[] = [
  {
    id: "kristin-watson",
    name: "Kristin Watson",
    category: "Technology Programs",
    image: "/student/home/prof1.png",
    role: "Programmer",
    experience: "Experience: 6 Year",
    rating: 4.9,
    description:
      "Perceived and knowledge certainly day sweetness why cordiality. Ask a quick six seven offer see among.",
  },
  {
    id: "bessie-cooper",
    name: "Bessie Cooper",
    category: "Technology Programs",
    image: "/student/home/prof2.png",
    role: "Programmer",
    experience: "Experience: 6 Year",
    rating: 4.9,
    description:
      "Perceived and knowledge certainly day sweetness why cordiality. Ask a quick six seven offer see among.",
  },
  {
    id: "jenny-wilson",
    name: "Jenny Wilson",
    category: "Technology Programs",
    image: "/student/home/prof3.png",
    role: "Programmer",
    experience: "Experience: 6 Year",
    rating: 4.9,
    description:
      "Perceived and knowledge certainly day sweetness why cordiality. Ask a quick six seven offer see among.",
  },
  {
    id: "cameron-williamson",
    name: "Cameron Williamson",
    category: "Technology Programs",
    image: "/student/home/prof4.png",
    role: "Programmer",
    experience: "Experience: 6 Year",
    rating: 4.9,
    description:
      "Perceived and knowledge certainly day sweetness why cordiality. Ask a quick six seven offer see among.",
  },
  {
    id: "savannah-nguyen",
    name: "Savannah Nguyen",
    category: "Technology Programs",
    image: "/student/home/prof5.png",
    role: "Programmer",
    experience: "Experience: 6 Year",
    rating: 4.9,
    description:
      "Perceived and knowledge certainly day sweetness why cordiality. Ask a quick six seven offer see among.",
  },
  {
    id: "theresa-webb",
    name: "Theresa Webb",
    category: "Technology Programs",
    image: "/student/home/prof6.png",
    role: "Programmer",
    experience: "Experience: 6 Year",
    rating: 4.9,
    description:
      "Perceived and knowledge certainly day sweetness why cordiality. Ask a quick six seven offer see among.",
  },
  {
    id: "john-doe",
    name: "John Doe",
    category: "Computer Science",
    image: "/student/home/prof1.png",
    role: "Professor",
    experience: "Experience: 8 Year",
    rating: 4.8,
    description:
      "Perceived and knowledge certainly day sweetness why cordiality. Ask a quick six seven offer see among.",
  },
  {
    id: "sarah-johnson",
    name: "Sarah Johnson",
    category: "Science",
    image: "/student/home/prof1.png",
    role: "Researcher",
    experience: "Experience: 7 Year",
    rating: 4.7,
    description:
      "Perceived and knowledge certainly day sweetness why cordiality. Ask a quick six seven offer see among.",
  },
  {
    id: "michael-brown",
    name: "Michael Brown",
    category: "English",
    image: "/student/home/prof1.png",
    role: "Linguist",
    experience: "Experience: 5 Year",
    rating: 4.8,
    description:
      "Perceived and knowledge certainly day sweetness why cordiality. Ask a quick six seven offer see among.",
  },
  {
    id: "emily-clark",
    name: "Emily Clark",
    category: "Public speaking",
    image: "/student/home/prof1.png",
    role: "Communication Expert",
    experience: "Experience: 9 Year",
    rating: 5.0,
    description:
      "Perceived and knowledge certainly day sweetness why cordiality. Ask a quick six seven offer see among.",
  },
  {
    id: "david-miller",
    name: "David Miller",
    category: "Chess",
    image: "/student/home/prof1.png",
    role: "Chess Master",
    experience: "Experience: 10 Year",
    rating: 4.9,
    description:
      "Perceived and knowledge certainly day sweetness why cordiality. Ask a quick six seven offer see among.",
  },
  {
    id: "alice-zhang",
    name: "Alice Zhang",
    category: "AI Explorers",
    image: "/student/home/prof1.png",
    role: "AI Researcher",
    experience: "Experience: 7 Year",
    rating: 4.8,
    description:
      "Perceived and knowledge certainly day sweetness why cordiality. Ask a quick six seven offer see among.",
  },
];

const categories: Category[] = Array.from(
  new Set(teachers.map((teacher) => teacher.category))
) as Category[];

export default function TeachersList({
  masked,
  className = "",
}: {
  masked?: boolean;
  className?: string;
}) {
  const [selectedCategory, setSelectedCategory] = useState<Category>(
    "Technology Programs"
  );
  const [hoveredTeacher, setHoveredTeacher] = useState<string | null>(null);

  const filteredTeachers = teachers.filter(
    (teacher) => teacher.category === selectedCategory
  );

  const visibleTeachers =
    !masked ? filteredTeachers.slice(0, 6) : filteredTeachers;

  return (
    <div
      className={cn(
        "relative min-h-screen w-full overflow-hidden bg-white px-16",
        className
      )}
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-center bg-repeat z-0"
        style={{
          backgroundImage: "url('/Background2.png')",
          backgroundSize: "400px",
          filter: "grayscale(10%) brightness(1.1) blur(0.5px)",
          opacity: 0.1,
        }}
      ></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-12 pb-40">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 text-gray-800">
            Teacher List
          </h1>

          {/* Category Tabs */}
          {/* Top Tabs Bar */}
          <div className="mb-8 overflow-x-auto pb-2">
            <Tabs defaultValue="All" className="w-full">
              <TabsList className="flex flex-nowrap mb-2 bg-transparent h-auto p-1 border-b border-pink-300">
                {categories.map((category) => (
                  <TabsTrigger
                    key={category}
                    value={category}
                    onClick={() => setSelectedCategory(category)}
                    className="px-4 py-2 whitespace-nowrap data-[state=active]:bg-pink-100 data-[state=active]:text-pink-600 rounded-t-lg"
                  >
                    {category}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </div>

          {/* Teachers Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {visibleTeachers.map((teacher) => (
              <motion.div
                key={teacher.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                onMouseEnter={() => setHoveredTeacher(teacher.id)}
                onMouseLeave={() => setHoveredTeacher(null)}
                className="bg-white rounded-3xl overflow-hidden shadow-md border border-gray-100"
              >
                <div className="flex p-6 gap-6">
                  {/* Left side with image */}
                  <div className="relative h-64 w-64 flex-shrink-0 bg-gray-100 rounded-2xl overflow-hidden">
                    <Image
                      src={teacher.image}
                      alt={teacher.name}
                      className="w-full h-full object-cover transition-transform duration-300 ease-in-out"
                      style={{
                        transform:
                          hoveredTeacher === teacher.id
                            ? "scale(1.05)"
                            : "scale(1)",
                      }}
                      width={300}
                      height={300}
                    />
                  </div>
                  
                  {/* Right side with content */}
                  <div className="flex flex-col flex-grow">
                    {/* Role */}
                    <span className="text-pink-500 font-medium text-sm mb-1">
                      {teacher.role}
                    </span>
                    
                    {/* Name */}
                    <h3 className="text-2xl font-bold mb-2 text-gray-800">
                      {teacher.name}
                    </h3>
                    
                    {/* Experience */}
                    <p className="text-sm text-gray-500 mb-2">
                      {teacher.experience}
                    </p>

                    {/* Rating with colored badge */}
                    <div className="flex items-center mb-4">
                      <div className="bg-green-100 px-2 py-0.5 rounded-md flex items-center">
                        <Star className="h-4 w-4 text-green-500 fill-current mr-1" />
                        <span className="text-sm font-medium text-green-600">
                          {teacher.rating}
                        </span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 text-sm mb-6">
                      {teacher.description}
                    </p>
                    
                    {/* Social Media Icons */}
                    <div className="flex mt-auto gap-2">
                      <a href="#" className="rounded-lg p-2 bg-blue-500 flex items-center justify-center hover:bg-blue-600 transition-colors">
                        <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                        </svg>
                      </a>
                      <a href="#" className="rounded-lg p-2 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 flex items-center justify-center hover:opacity-90 transition-opacity">
                        <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                        </svg>
                      </a>
                      <a href="#" className="rounded-lg p-2 bg-blue-400 flex items-center justify-center hover:bg-blue-500 transition-colors">
                        <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                        </svg>
                      </a>
                      <a href="#" className="rounded-lg p-2 bg-blue-600 flex items-center justify-center hover:bg-blue-700 transition-colors">
                        <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Show All Button */}
          {!masked && (
            <div className="flex justify-center mt-10">
              <Link href="/courses" passHref>
                <div className="flex justify-center mt-8">
                  <Button
                    className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-3"
                    size="lg"
                  >
                    View All
                  </Button>
                </div>
              </Link>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}