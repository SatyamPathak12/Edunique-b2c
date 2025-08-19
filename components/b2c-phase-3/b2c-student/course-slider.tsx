"use client";

import { useState, useRef, useEffect } from "react";

import { ChevronLeft, ChevronRight, Star } from "lucide-react";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

import Image from "next/image";

import { Button } from "@/components/ui/button";

import { FaCircleCheck } from "react-icons/fa6";

import { useRouter } from "next/navigation";

import CustomSelect from "@/components/student/courses/CustomSelect";
import CategoryTabs from "@/app/b2c-phase-3/b2c-student/student-flow/home/HomeTab";

interface Course {
  id: string;

  title: string;

  category: string;

  image: string;

  features: string[];

  teacher: {
    name: string;

    image: string;
  };

  priceRange: string;
}

const categories = [
  "Academic",

  "Notsoextra - Curricular",

  "Foundation",

  "Skill Development",

  "Brain Development",

  "Door Step Tutoring",

  "Skill Club",
];

const CourseSlider = () => {
  const router = useRouter();

  const [selectedCategory, setSelectedCategory] = useState("Academic");

  const [showLeftArrow, setShowLeftArrow] = useState(false);

  const [showRightArrow, setShowRightArrow] = useState(true);

  const scrollContainerRef = useRef<HTMLDivElement | null>(null);

  const courses: Course[] = [
    {
      id: "academics",

      title: "Academics",

      category: "Notsoextra - Curricular",

      image: "/student/home/acadmics.png",

      features: [
        "Customized Curriculums & Plans",

        "Individualized Classes",

        "Skill Development",

        "Mentoring",
      ],

      teacher: {
        name: "Mrs. Sandeep Kaur",

        image: "/student/home/teacher.png",
      },

      priceRange: "₹2,000.00 - ₹5,000.00",
    },

    {
      id: "copy1",

      title: "copy1h",

      category: "Academic",

      image: "/student/home/foundation.png",

      features: [
        "Customized Curriculums & Plans",

        "Individualized Classes",

        "Skill Development",

        "Mentoring",
      ],

      teacher: {
        name: "Mrs. Sandeep Kaur",

        image: "/student/home/teacher.png",
      },

      priceRange: "₹2,000.00 - ₹5,000.00",
    },

    {
      id: "copy2",

      title: "copy2h",

      category: "Academic",

      image: "/student/home/foundation.png",

      features: [
        "Customized Curriculums & Plans",

        "Individualized Classes",

        "Skill Development",

        "Mentoring",
      ],

      teacher: {
        name: "Mrs. Sandeep Kaur",

        image: "/student/home/teacher.png",
      },

      priceRange: "₹2,000.00 - ₹5,000.00",
    },

    {
      id: "foundation",

      title: "Foundation",

      category: "Academic",

      image: "/student/home/foundation.png",

      features: [
        "Customized Curriculums & Plans",

        "Individualized Classes",

        "Skill Development",

        "Mentoring",
      ],

      teacher: {
        name: "Mrs. Sandeep Kaur",

        image: "/student/home/teacher.png",
      },

      priceRange: "₹2,000.00 - ₹5,000.00",
    },

    {
      id: "brain-development",

      title: "Brain Development",

      category: "Academic",

      image: "/student/home/basic-dev.png",

      features: [
        "Customized Curriculums & Plans",

        "Individualized Classes",

        "Skill Development",

        "Mentoring",
      ],

      teacher: {
        name: "Mrs. Sandeep Kaur",

        image: "/student/home/teacher.png",
      },

      priceRange: "₹2,000.00 - ₹5,000.00",
    },

    {
      id: "skill-development",

      title: "Foundation",

      category: "Public speaking",

      image: "/student/home/learn-peace.png",

      features: [
        "Customized Curriculums & Plans",

        "Individualized Classes",

        "Skill Development",

        "Mentoring",
      ],

      teacher: {
        name: "Mrs. Sandeep Kaur",

        image: "/student/home/teacher.png",
      },

      priceRange: "₹2,000.00 - ₹5,000.00",
    },

    {
      id: "stem-programs",

      title: "STEM Programs",

      category: "Academic",

      image: "/student/home/learn-peace2.png",

      features: [
        "Customized Curriculums & Plans",

        "Individualized Classes",

        "Skill Development",

        "Mentoring",
      ],

      teacher: {
        name: "Mrs. Sandeep Kaur",

        image: "/student/home/teacher.png",
      },

      priceRange: "₹2,000.00 - ₹5,000.00",
    },

    {
      id: "robotics",

      title: "Robotics",

      category: "Academic",

      image: "/student/home/robotics.png",

      features: [
        "Customized Curriculums & Plans",

        "Individualized Classes",

        "Skill Development",

        "Mentoring",
      ],

      teacher: {
        name: "Mrs. Sandeep Kaur",

        image: "/student/home/teacher.png",
      },

      priceRange: "₹2,000.00 - ₹5,000.00",
    },

    {
      id: "phonics",

      title: "Phonics",

      category: "Skill Development",

      image: "/student/home/phonics.png",

      features: [
        "Customized Curriculums & Plans",

        "Individualized Classes",

        "Skill Development",

        "Mentoring",
      ],

      teacher: {
        name: "Mrs. Sandeep Kaur",

        image: "/student/home/teacher.png",
      },

      priceRange: "₹2,000.00 - ₹5,000.00",
    },

    {
      id: "personality-development",

      title: "Personality Development",

      category: "Brain Development",

      image: "/student/home/pers-dev.png",

      features: [
        "Customized Curriculums & Plans",

        "Individualized Classes",

        "Skill Development",

        "Mentoring",
      ],

      teacher: {
        name: "Mrs. Sandeep Kaur",

        image: "/student/home/teacher.png",
      },

      priceRange: "₹2,000.00 - ₹5,000.00",
    },
  ];

  const filteredCourses = courses.filter(
    (course) => course.category === selectedCategory
  );

  const selectOptions = categories.map((category) => ({
    value: category,

    label: category,
  }));

  // Check scroll position and update arrow visibility

  const checkScrollPosition = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } =
        scrollContainerRef.current;

      setShowLeftArrow(scrollLeft > 0);

      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 1);
    }
  };

  // Update arrow visibility on category change

  useEffect(() => {
    checkScrollPosition();
  }, [filteredCourses]);

  // Add scroll event listener

  useEffect(() => {
    const container = scrollContainerRef.current;

    if (container) {
      container.addEventListener("scroll", checkScrollPosition);

      return () => container.removeEventListener("scroll", checkScrollPosition);
    }
  }, []);

  const scroll = (direction: string) => {
    if (scrollContainerRef.current) {
      const scrollAmount = 320; // Width of one card plus gap

      const currentScroll = scrollContainerRef.current.scrollLeft;

      const targetScroll =
        direction === "left"
          ? currentScroll - scrollAmount
          : currentScroll + scrollAmount;

      scrollContainerRef.current.scrollTo({
        left: targetScroll,

        behavior: "smooth",
      });
    }
  };

  const Router = useRouter();

  return (
    <div className="max-w-7xl mx-auto">
      {/* Category Tabs */}
      <CategoryTabs />

      {/* Course Slider */}

      <div className="relative">
        {/* Left Navigation Button */}

        {/* {showLeftArrow && (
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-gray-50 shadow-2xl rounded-full p-3 transition-all duration-300 hover:scale-110 hover:shadow-xl"
          >
            <ChevronLeft className="w-5 h-5 text-gray-700" />
          </button>
        )} */}

        {/* Right Navigation Button */}

        {/* {showRightArrow && (
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-gray-50 shadow-2xl rounded-full p-3 transition-all duration-300 hover:scale-110 hover:shadow-xl"
          >
            <ChevronRight className="w-5 h-5 text-gray-700" />
          </button>
        )} */}

        {/* Scrollable Container */}

        <div
          ref={scrollContainerRef}
          className={`flex gap-6 overflow-x-auto scrollbar-hide py-4 transition-all duration-300 ${showLeftArrow ? "pl-16" : "pl-0"
            } ${showRightArrow ? "pr-16" : "pr-0"}`}
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {filteredCourses.map((course) => (
            <div
              key={course.id}
              onClick={() => Router.push("/b2c-phase-3/b2c-student/student-flow/courses/detail")}
              className="flex-none w-80 bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative p-4">
                <Image
                  src={course.image || "/placeholder.svg"}
                  alt={course.title}
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover rounded-2xl"
                />

                <div className="absolute right-5 top-5 flex items-center gap-2 justify-center p-2 rounded-2xl bg-white z-10">
                  <span className="text-amber-300 text-lg font-bold">4.2</span>

                  <Star className="w-5 h-5 fill-amber-300 stroke-amber-300" />
                </div>
              </div>

              <div className="p-6 pt-0 space-y-2">
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-bold text-gray-900">
                    Course Name
                  </h3>

                  <button
                    className="font-main text-sm text-[#FF3366] w-fit border-b border-b-[#FF3366] cursor-pointer"
                    onClick={() => router.push("/b2c-phase-3/b2c-student/student-flow/know-more")}
                  >
                    Know More
                  </button>
                </div>

                <div className="space-y-2">
                  {["Detail 1", "Detail 2", "Detail 3", "Detail 4"].map(
                    (detail, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <FaCircleCheck className="w-5 h-5 fill-[#99DEFF]" />

                        <span className="text-[#6B7280] text-sm">{detail}</span>
                      </div>
                    )
                  )}
                </div>

                <div className="flex items-center gap-2 mt-3">
                  <Image
                    src={course.teacher.image || "/placeholder.svg"}
                    alt={course.teacher.name}
                    width={24}
                    height={24}
                    className="w-8 h-8 rounded-full"
                  />

                  <div>
                    <p className="text-md font-bold">Mr. Ranvir Ahuja</p>

                    <p className="text-xs text-[#FF3366]">Teacher</p>
                  </div>

                  <div className="ml-auto flex gap-1 text-yellow-400">
                    {[1, 2, 3, 4].map((star) => (
                      <Star key={star} className="w-3 h-3 fill-current" />
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between bg-[#F9FAFB] rounded-xl py-2 w-full mt-2">
                  <span className="text-[#50C878] font-bold">
                    ₹2,000 - ₹5,000
                  </span>

                  <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-4 py-3 text-sm h-fit">
                    Add to cart
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default CourseSlider;
