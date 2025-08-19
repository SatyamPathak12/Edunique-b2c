"use client";
import StudentWrapper from "@/components/student-wrapper";
import Image from "next/image";
import { Search, Star } from "lucide-react";
import FooterNew from "@/components/footer3";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useEffect, useRef, useState } from "react";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { BsFillPlayCircleFill } from "react-icons/bs";
import { FaCircleCheck } from "react-icons/fa6";
import { useRouter } from "next/navigation";
import CourseSlider from "./course-slider";
import Footer from "@/components/layout/Footer";

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

const courses: Course[] = [
  {
    id: "academics",
    title: "Course Name",
    category: "Science",
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
    id: "foundation",
    title: "Course Name",
    category: "Technology Programs",
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
    title: "Course Name",
    category: "Science",
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
    title: "Course Name",
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
    title: "Course Name",
    category: "Technology Programs",
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
    title: "Course Name",
    category: "Technology Programs",
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
    title: "Course Name",
    category: "English",
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
    title: "Course Name",
    category: "Public speaking",
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

export default function StudentHome() {
  const Router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const startingCourses = courses.slice(0, 3);
  return (
    <StudentWrapper activeState="Home">
      <main className="min-h-[calc(100vh-80px)]">
        {/* Hero Section */}
        <section className="relative h-full">
          {/* Background Pattern */}
          <div
            className="absolute inset-0 bg-center bg-repeat z-0"
            style={{
              backgroundImage: "url('/Background2.png')",
              backgroundSize: "400px",
              filter: "grayscale(10%) brightness(1.1) blur(0.5px) opacity(0.5)",
              opacity: 0.3,
            }}
          ></div>

          {/* Main content */}
          <div className="max-w-7xl w-full mx-auto p-16 md:p-12 flex flex-col md:flex-row items-center justify-between h-full gap-16">
            {/* Left Content */}
            <div className="w-full md:w-[55%] z-10 gap-y-6 flex flex-col justify-center h-full">
              <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-[54px] font-bold leading-tight">
                Limitless learning at <br />
                your{" "}
                <span
                  style={{
                    backgroundImage: "url('/student/home/brush_stroke.svg')",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "contain",
                    backgroundPositionY: "10px",
                  }}
                >
                  Fingertips
                </span>
              </h1>

              <p className="text-sm">
                Online learning and teaching mar ketplace with 5K+ courses & 10M
                students. Taught by experts to help you acquire new skills.
              </p>

              <div className="flex justify-center items-center gap-2 w-fit">
                <RiVerifiedBadgeFill className="w-5 h-5" />
                <span className="text-xs">
                  Learn with experts
                </span>
              </div>

              <div className="relative w-fit overflow-visible pt-4">
                <button className="rounded-full md:pl-1 flex items-center gap-4 transition-all cursor-pointer">
                  <BsFillPlayCircleFill className="w-10 h-10 fill-[#F8BD00]" />
                  <div className="font-bold text-xl">How to Work</div>
                </button>
                <div className="absolute scale-50 hidden md:block md:scale-75 w-[400px] h-[400px] bottom-0 right-0 z-10 translate-x-full translate-y-3/6">
                  <Image
                    src="/student/home/arrow.svg"
                    alt="arrow"
                    fill
                    className="w-[400px] h-[400px]"
                  />
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="w-full md:w-[45%] flex justify-center items-center z-10 h-full">
              <div className="relative aspect-square max-w-[600px] w-full">
                <img
                  src="/student/home/hero_image.png"
                  alt="Students learning with robot"
                  className="rounded-full object-contain"
                />
              </div>
            </div>
          </div>
        </section>

        <div className="relative z-10 w-full py-8 bg-[#EEEEEE] px-4 sm:px-8 lg:px-16 pb-70 border">
          <section className="max-w-7xl mx-auto space-y-12">
            {/* Explore Section */}
            <div className="space-y-6">
              <h1
                className="text-4xl md:text-7xl font-bold "
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(37,99,235,0.6), rgba(37,99,235,0.6)), url('/Background2.png')",
                  backgroundSize: "300px",
                  backgroundPosition: "center",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Explore EduNique Courses
              </h1>

              {/* Search Bar */}
              <div className="w-full  bg-[#FFCC00] rounded-2xl p-4 flex items-center gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute z-10 left-3 top-1/2 transform -translate-y-1/2 text-black w-5 h-5 stroke-[#6B7280]" />
                  <Input
                    placeholder="Search"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 border-0 bg-white rounded-full h-12 text-lg"
                  />
                </div>
                <Select defaultValue="popular">
                  <SelectTrigger className="w-fit bg-[#FFDB4C] border-0 rounded-full h-12 text-white font-medium" downArrowColor="white">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="popular">Popular</SelectItem>
                    <SelectItem value="newest">Newest</SelectItem>
                    <SelectItem value="rating">Rating</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Starting Cards Section */}
            <div className="bg-[#F9FAFB] space-y-4 rounded-2xl p-4 lg:p-7">
              <div className="space-y-4 max-w-7xl mx-auto pb-3">
                <h2 className="text-4xl leading-[1.5] font-bold text-black">
                  Start Your Learning <br /> Adventure!
                </h2>
                <p className="text-xl font-semibold text-[#6B7280]">
                  Discover skills, spark curiosity, and grow with every step.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
                {startingCourses.map((course) => (
                  <Card
                    key={course.id}
                    onClick={() => Router.push("/b2c-student/student-flow/courses/detail")}
                    className="bg-white rounded-2xl overflow-hidden hover:shadow-md border-0 hover:border"
                  >
                    <div className="relative p-3">
                      <Image
                        src={course.image || "/placeholder.svg"}
                        alt={course.title}
                        width={400}
                        height={200}
                        className="w-full h-48 object-cover rounded-2xl"
                      />
                    </div>
                    <CardContent className="p-6 pt-0 space-y-3">
                      <div className="flex justify-between items-center">
                        <h3 className="text-xl font-bold text-gray-900">
                          Course Name
                        </h3>
                        <button
                          className="font-main text-sm text-[#FF3366] w-fit border-b border-b-[#FF3366] cursor-pointer"
                          onClick={() =>
                            Router.push("/student/courses/know-more")
                          }
                        >
                          Know More
                        </button>
                      </div>

                      <div className="space-y-1">
                        {["Detail 1", "Detail 2", "Detail 3", "Detail 4"].map(
                          (detail, index) => (
                            <div
                              key={index}
                              className="flex items-center gap-2"
                            >
                              <FaCircleCheck className="w-5 h-5 fill-[#99DEFF]" />
                              <span className="text-[#6B7280] text-sm">
                                {detail}
                              </span>
                            </div>
                          )
                        )}
                      </div>

                      <div className="flex flex-wrap items-center gap-2">
                        <div className="flex items-center gap-1 bg-[#F3F4F6] rounded-xl px-3 py-1">
                          <span className="font-bold">4.2</span>
                          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        </div>
                        <span className="text-gray-600 bg-[#F3F4F6] rounded-xl px-3 py-1">
                          <span className="font-bold text-black mr-1">
                            4.4K
                          </span>
                          Ratings
                        </span>
                        <span className="text-gray-600 bg-[#F3F4F6] rounded-xl px-3 py-1">
                          <span className="font-bold text-black mr-1">6</span>
                          Months
                        </span>
                      </div>

                      <Button className="w-full bg-[#FF3366] hover:bg-pink-600 text-white rounded-full h-10 text-lg mt-2">
                        Explore More
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Courses Slider with Tabs */}
            <CourseSlider />

            {/* Overlaying Cards Section */}
            <div className="max-w-7xl mx-auto relative h-fit bg-gray-100 overflow-hidden rounded-3xl p-10">
              {/* Background Layer */}
              <div
                className="absolute inset-0 bg-center bg-repeat z-0"
                style={{
                  backgroundImage: 'url("/background5.png")',
                  backgroundSize: "cover",
                  filter: "opacity(0.4) grayscale(5%) blur(0.4px)",
                  opacity: 0.3,
                }}
              />

              {/* Main Content Container */}
              <div className="relative z-10 flex items-center h-fit">
                <div className="w-full">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Side - Content */}
                    <div className="space-y-8 mx-auto lg:mx-0">
                      <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                        Title
                      </h1>

                      <p className="text-lg text-gray-600 leading-relaxed max-w-md">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Pellentesque placerat lectus et leo fermentum aliquet.
                        Curabitur sollicitudin tortor at lacus ultricies, quis
                        blandit sem varius.
                      </p>

                      <button
                        onClick={() => Router.push("/b2c-student/student-flow/courses")}
                        className="bg-[#3366FF] hover:bg-blue-700 text-white max-w-md w-full py-3 cursor-pointer rounded-2xl text-lg transition-colors duration-300 shadow-lg hover:shadow-xl">
                        Explore More
                      </button>
                    </div>

                    {/* Right Side - Stacked Cards */}
                    <div className="relative flex justify-center lg:justify-end pr-44">
                      <div className="relative w-96 h-96">
                        {/* Third Card (Back) - Coding/Programming */}
                        <div
                          className="absolute w-72 h-full rounded-2xl shadow-2xl transform translate-x-70  "
                          style={{
                            zIndex: 1,
                          }}
                        >
                          <img
                            src="/student/home/card.png"
                            alt="card"
                            className="w-full h-full object-cover rounded-[18px]"
                          />
                        </div>

                        {/* Second Card (Middle) - App Design */}
                        <div
                          className="absolute w-72 h-full rounded-2xl shadow-2xl transform translate-x-35 "
                          style={{
                            zIndex: 2,
                          }}
                        >
                          <img
                            src="/student/home/card2.png"
                            alt="card"
                            className="w-full h-full object-cover rounded-[18px]"
                          />
                        </div>

                        {/* First Card (Front) - AR/VR/3D */}
                        <div
                          className="absolute w-72 h-full rounded-2xl shadow-2xl transform -\"
                          style={{
                            zIndex: 3,
                          }}
                        >
                          <img
                            src="/student/home/card1.png"
                            alt="card"
                            className="w-full h-full object-cover rounded-[18px]"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* footer */}
        <Footer />
      </main>
    </StudentWrapper>
  );
}

