"use client";

import { useEffect, useRef, useState } from "react";
import StudentWrapper from "@/components/student-wrapper";
import Image from "next/image";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  BookOpen,
  ChevronLeft,
  ChevronRight,
  Star,
  Info,
  Brain,
  ChartNoAxesColumn,
  Video,
} from "lucide-react";
import FooterNew from "@/components/footer3";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { FaCircleCheck } from "react-icons/fa6";
import Footer from "@/components/layout/Footer";
import Newsletter from "@/components/common-components/Newsletter";
import BackButton from "@/components/common-components/BackButton";
import Link from "next/link";
import { useRouter } from "next/navigation";
import VideoPlayerPopup from "@/app/b2c-student/pop-ups/popupComponent/VideoPlayerPopup";

interface Review {
  id: number;
  customerName: string;
  type: "Student" | "Parent";
  rating: number;
  description: string;
  profileImage: string;
}

const reviews: Review[] = [
  {
    id: 1,
    customerName: "Customer Name",
    type: "Student",
    rating: 4,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque placerat lectus et leo fermentum aliquet. Curabitur sollicitudin tortor at lacus ultricies, quis blandit sem varius. Fusce turpis enim, hendrerit facilisis nisl nec, dictum faucibus nisl. Aliquam erat volutpat. Duis non molestie augue.",
    profileImage: "/student/courses/detail/profile.png",
  },
  {
    id: 2,
    customerName: "Customer Name",
    type: "Parent",
    rating: 4,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque placerat lectus et leo fermentum aliquet. Curabitur sollicitudin tortor at lacus ultricies, quis blandit sem varius. Fusce turpis enim, hendrerit facilisis nisl nec, dictum faucibus nisl. Aliquam erat volutpat. Duis non molestie augue.",
    profileImage: "/student/courses/detail/profile.png",
  },
];
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

type FormData = {
  batchSize: string;
  classBundle: string;
  batchDays: string;
  batchTime: string;
};

type DropdownOptions = {
  [key in keyof FormData]: string[];
};

type FormField = {
  id: keyof FormData;
  label: string;
};

export const courses: Course[] = [
  {
    id: "academics",
    title: "Academics",
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
    title: "Foundation",
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
    title: "Brain Development",
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
    title: "Skill Development",
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
    title: "Robotics",
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
    title: "Phonics",
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
    title: "Personality Development",
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
const StarRating: React.FC<{ rating: number }> = ({ rating }) => {
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`w-3 h-3 ${star <= rating
            ? "fill-yellow-400 text-yellow-400"
            : "fill-transparent text-transparent"
            }`}
        />
      ))}
    </div>
  );
};

const ReviewCard: React.FC<{ review: Review }> = ({ review }) => {
  return (
    <div className="bg-gray-100 rounded-3xl p-4 mb-3">
      <div className="flex items-start gap-3 mb-2">
        <Avatar className="w-14 h-14 self-center flex-shrink-0">
          <AvatarImage
            src={review.profileImage || "/placeholder.svg"}
            alt={review.customerName}
          />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="flex flex-col gap-1 min-w-0">
          <h3 className="font-medium text-gray-900 truncate">
            {review.customerName}
          </h3>
          <p className="text-[#6B7280] text-xs">{review.type} / Parent</p>
          <StarRating rating={review.rating} />
        </div>
      </div>
      <p className="text-[#6B7280] text-[10px] leading-relaxed line-clamp-5">
        {review.description}
      </p>
    </div>
  );
};

export default function CourseDetail() {
  const [activeTab, setActiveTab] = useState("about");

  const [watchVideo, setWatchVideo] = useState(false)
  const router = useRouter();
  const menuItems = [
    { id: "about", label: "About Course", icon: Info },
    { id: "benefits", label: "Benefits", icon: Star },
    { id: "pedagogy", label: "Pedagogy", icon: Brain },
    { id: "curriculum", label: "Curriculum", icon: BookOpen },
    { id: "levels", label: "Levels", icon: ChartNoAxesColumn },
  ];

  const contentMap = {
    about: {
      title: "About Course",
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tristique rhoncus risus, nec sagittis sapien bibendum non. Aenean suscipit, tortor sed tempor ornare, purus enim aliquet sapien, vitae fringilla ipsum massa in justo. Maecenas venenatis mauris vitae ligula tincidunt volutpat. Fusce id enim velit. Fusce ornare, nulla ut malesuada sagittis, libero sem aliquam tortor, vel aliquet nisl mauris a nisl. Nam vestibulum egestas nibh sit amet malesuada. Proin erat risus, mollis in metus vestibulum, auctor maximus metus. Morbi ac dictum sem. Nullam vitae congue tellus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam aliquam nisl quis nisl tincidunt, nec aliquam lectus gravida. Pellentesque varius purus vel dignissim pulvinar. Proin viverra elit eget leo dictum aliquam. Nam ornare arcu sed pretium ornare. Vestibulum vel dignissim dolor.

Etiam ornare arcu in lorem mollis eleifend. Curabitur blandit tortor vitae augue cursus, eu efficitur tellus rhoncus. Aenean vestibulum enim ac lobortis pharetra. Vestibulum aliquet nisl a odio lacinia, a porttitor mi bibendum. Maecenas non auctor ante. In pulvinar erat nulla, ac vehicula mauris semper a. Nullam posuere tortor vitae odio venenatis, quis imperdiet neque placerat.`,
    },
    benefits: {
      title: "Benefits",
      content: `Discover the numerous advantages this course offers. From skill development to career advancement, you'll gain valuable insights and practical knowledge that will benefit you professionally and personally. Our comprehensive approach ensures you get the most out of your learning experience.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
    },
    pedagogy: {
      title: "Pedagogy",
      content: `Our teaching methodology is designed to maximize learning outcomes through interactive sessions, hands-on practice, and real-world applications. We employ modern educational techniques that cater to different learning styles and preferences.

Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
    },
    curriculum: {
      title: "Curriculum",
      content: `The curriculum is carefully structured to provide a progressive learning path. Starting with fundamentals and gradually building up to advanced concepts, each module is designed to reinforce previous learning while introducing new challenges.

Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.`,
    },
    levels: {
      title: "Levels",
      content: `This course is designed for multiple proficiency levels, from beginners to advanced learners. Each level has specific objectives and outcomes, ensuring that every participant can progress at their own pace while meeting established benchmarks.

Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.`,
    },
  };

  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const [formData, setFormData] = useState<FormData>({
    batchSize: "",
    classBundle: "",
    batchDays: "",
    batchTime: "",
  });
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
  }, [courses]);

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

  // Options for each dropdown with type safety
  const dropdownOptions: DropdownOptions = {
    batchSize: ["Small (10-15)", "Medium (15-20)", "Large (20-30)"],
    classBundle: ["Starter Pack", "Standard Pack", "Premium Pack"],
    batchDays: ["Weekdays (Mon-Fri)", "Weekends (Sat-Sun)", "Mixed"],
    batchTime: [
      "Morning (9AM-12PM)",
      "Afternoon (1PM-4PM)",
      "Evening (5PM-8PM)",
    ],
  };

  const formFields: FormField[] = [
    { id: "batchSize", label: "Batch Size" },
    { id: "classBundle", label: "Class Bundle" },
    { id: "batchDays", label: "Batch Days" },
    { id: "batchTime", label: "Select Batch Time" },
  ];

  const handleSelectChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <StudentWrapper>
      <BackButton Heading="Course Name" />

      <div className="bg-[#EEEEEE] mx-auto w-full py-8 space-y-6 px-2 md:px-8 lg:px-12 xl:px-16">
        <div className="mx-auto">
          <div className="grid lg:grid-cols-11 gap-4">
            {/* Left Section */}
            <div className="bg-[#FFFFFF] rounded-2xl p-3 lg:col-span-8">
              <div className="flex flex-col lg:flex-row gap-6">
                {/* Course Image */}
                <div className="flex-[1.75]">
                  <div className="rounded-2xl overflow-hidden">
                    <Image
                      src="/student/courses/detail/hero.png"
                      alt="Technology Course"
                      width={500}
                      height={700}
                      className="w-full h-[600px] object-cover"
                    />
                  </div>
                </div>

                {/* Course Details */}
                <div className="flex-1 flex flex-col justify-start px-3 py-3 gap-4">
                  <h1 className="text-4xl font-semibold text-gray-900 pb-2">
                    Course Name
                  </h1>
                  <p className="text-gray-600 pb-2">Category</p>
                  <div className="text-5xl font-semibold text-[#3366FF] pb-2">
                    ₹2,000
                  </div>
                  <form className="space-y-4">
                    <div className="space-y-5">
                      {formFields.map((field) => (
                        <div key={field.id}>
                          <Label
                            htmlFor={field.id}
                            className="text-sm font-medium"
                          >
                            {field.label}
                            <span className="text-red-500 -translate-x-1 font-medium">
                              *
                            </span>
                          </Label>
                          <Select
                            value={formData[field.id]}
                            onValueChange={(value: string) =>
                              handleSelectChange(field.id, value)
                            }
                          >
                            <SelectTrigger
                              id={field.id}
                              className="w-full bg-[#F9FAFB] border border-[#D5D5D5] rounded-2xl py-1 [&>svg]:text-black"
                            >
                              <SelectValue placeholder="Choose an option" />
                            </SelectTrigger>
                            <SelectContent className="bg-white shadow-lg rounded-xl">
                              {dropdownOptions[field.id].map(
                                (option, index) => (
                                  <SelectItem
                                    key={index}
                                    value={option
                                      .toLowerCase()
                                      .replace(/\s+/g, "-")}
                                  >
                                    {option}
                                  </SelectItem>
                                )
                              )}
                            </SelectContent>
                          </Select>
                        </div>
                      ))}
                    </div>
                    <div className="w-full flex items-center gap-4 justify-between pt-2">
                      <Input
                        type="number"
                        min={0}
                        placeholder="00"
                        className="w-full bg-[#F9FAFB] border border-[#D5D5D5] rounded-2xl"
                      />
                      <button
                        className="bg-[#3366FF] hover:bg-blue-700 text-white text-base font-medium py-1.5 whitespace-nowrap px-12 rounded-full h-fit"
                        
                      >
                        Add to Cart
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            {/* Right Section - Reviews */}
            <div className="bg-[#FFFFFF] rounded-2xl p-3 lg:col-span-3">
              <h2 className="text-2xl font-medium text-gray-900 mb-4">
                Reviews
              </h2>
              <div
                className="max-h-[550px] h-full overflow-y-auto"
                style={{
                  scrollbarWidth: "thin",
                  scrollbarColor: "#FFA500 transparent",
                }}
              >
                <style jsx>{`
                  div::-webkit-scrollbar {
                    width: 8px;
                  }
                  div::-webkit-scrollbar-track {
                    background: transparent;
                  }
                  div::-webkit-scrollbar-thumb {
                    background: #ffa500;
                    border-radius: 4px;
                  }
                  div::-webkit-scrollbar-thumb:hover {
                    background: #ff8c00;
                  }
                `}</style>
                {reviews.map((review) => (
                  <ReviewCard key={review.id} review={review} />
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl relative flex flex-col lg:flex-row bg-[#FFFFFF] rounded-2xl mx-auto overflow-hidden">

          <button onClick={() => setWatchVideo(true)} className="bg-[#8DD9B3] flex items-center gap-2 px-4 py-3 text-white text-left rounded-[14px] lg:absolute z-10 mt-2 mx-4 lg:m-0 top-5 right-6 cursor-pointer">
            <Video />
            Watch Demo Video
          </button>
          {/* Fixed Sidebar */}
          <div className="w-64 flex-shrink-0">
            <div className="px-4 pt-4 lg:p-6">
              <nav className="space-y-4">
                {menuItems.map((item) => {
                  const IconComponent = item.icon;
                  const isActive = activeTab === item.id;

                  return (
                    <button
                      key={item.id}
                      onClick={() => setActiveTab(item.id)}
                      className={`
                    w-full flex items-center gap-3 px-4 py-2 rounded-full text-left transition-all duration-200
                    ${isActive
                          ? "bg-[#FF3366] text-white"
                          : "text-[#6B7280] hover:bg-gray-100 hover:text-gray-900"
                        }
                  `}
                    >
                      <IconComponent size={20} />
                      <span className="">{item.label}</span>
                    </button>
                  );
                })}
              </nav>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="flex-1 overflow-auto">
            <div className="px-4 lg:pl-8 lg:pr-4 py-4">
              <h1 className="text-xl lg:pr-4 font-semibold mb-6">
                {contentMap[activeTab as keyof typeof contentMap].title}
              </h1>

              <div className="max-w-none">
                <p className="leading-relaxed text-sm sm:text-base whitespace-pre-line text-black">
                  {contentMap[activeTab as keyof typeof contentMap].content}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative py-14 rounded-2xl">
          <div className="relative flex gap-4 items-center flex-col md:flex-row justify-center w-full z-9">
            <h1 className="text-3xl sm:text-[48px] font-bold text-white">Book a Free Demo</h1>
            <button

              onClick={() => router.push("/b2c-student/student-flow/demo/booking-form")} className='bg-white cursor-pointer rounded-full px-8 py-2 text-m font-medium'>Click Here</button>
          </div>
          <div
            className="absolute inset-0 rounded-2xl bg-center bg-repeat z-0"
            style={{
              backgroundImage: "url('/Background2.png')",
              backgroundSize: '400px',
              filter: 'grayscale(10%) brightness(1.1) blur(0.5px)',
              opacity: 0.3,
            }}>

          </div>
          {/* Bluish Overlay */}
          <div
            className="absolute inset-0 rounded-2xl bg-[#517dfe] z-0"
            style={{
              opacity: 0.78, // increase to make it more blue
              mixBlendMode: 'multiply', // try "multiply" or "soft-light" too
            }}>

          </div>
        </div>

        <div className="bg-[#F3F4F680] border border-[#E5E7EB] p-4 rounded-3xl space-y-2">
          <h1 className="text-2xl text-[#FF3366] font-semibold">
            Related Courses
          </h1>
          {/* Course Slider */}
          <div className="relative">
            {/* Left Navigation Button */}
            {showLeftArrow && (
              <button
                type="button"
                onClick={() => scroll("left")}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-gray-50 shadow-lg rounded-full p-3 transition-all duration-300 hover:scale-110 hover:shadow-xl"
              >
                <ChevronLeft className="w-5 h-5 text-gray-700" />
              </button>
            )}

            {/* Right Navigation Button */}
            {showRightArrow && (
              <button
                type="button"
                onClick={() => scroll("right")}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-gray-50 shadow-lg rounded-full p-3 transition-all duration-300 hover:scale-110 hover:shadow-xl"
              >
                <ChevronRight className="w-5 h-5 text-gray-700" />
              </button>
            )}

            {/* Scrollable Container */}
            <div
              ref={scrollContainerRef}
              className={`flex gap-6 overflow-x-auto scrollbar-hide py-4 transition-all duration-300 ${showLeftArrow ? "pl-16" : "pl-0"
                } ${showRightArrow ? "pr-16" : "pr-0"}`}
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {courses.map((course) => (
                <div
                  key={course.id}
                  className="flex-none w-80 bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="relative p-3">
                    <Image
                      src={course.image || "/placeholder.svg"}
                      alt={course.title}
                      width={400}
                      height={200}
                      className="w-full h-48 object-cover rounded-xl"
                    />
                    <div className="absolute right-4 top-4 flex items-center gap-2 justify-center p-2 rounded-2xl bg-white z-10">
                      <span className="text-[#FFCC00] text-lg font-bold">
                        4.2
                      </span>
                      <Star className="w-5 h-5 fill-[#FFCC00] stroke-[#FFCC00]" />
                    </div>
                  </div>

                  <div className="p-3 pt-0 space-y-3">
                    <div className="flex justify-between items-center">
                      <h3 className="text-xl font-bold text-gray-900">
                        Course Name
                      </h3>
                      <Link href={"/b2c-student/student-flow/know-more"} className="font-main text-sm text-[#FF3366] relative z-10 w-fit border-b border-b-[#FF3366] cursor-pointer">
                        Know More
                      </Link>
                    </div>

                    <div className="space-y-1">
                      {["Detail 1", "Detail 2", "Detail 3", "Detail 4"].map(
                        (detail, index) => (
                          <div key={index} className="flex items-center gap-2">
                            <FaCircleCheck className="w-5 h-5 fill-[#99DEFF]" />
                            <span className="text-[#6B7280] text-sm">
                              {detail}
                            </span>
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
                        <p className="text-md font-semibold">
                          Mr. Ranvir Ahuja
                        </p>
                        <p className="text-xs text-[#FF3366]">Teacher</p>
                      </div>
                      <div className="ml-auto flex gap-1 text-[#FFCC00]">
                        {[1, 2, 3, 4].map((star) => (
                          <Star key={star} className="w-3 h-3 fill-current" />
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center justify-between bg-[#F9FAFB] rounded-3xl px-4 py-3 w-full mt-2">
                      <span className="text-[#50C878] font-bold">
                        ₹2,000 - ₹5,000
                      </span>
                      <button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-4 py-3 text-sm">
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-[#F3F4F680] border border-[#E5E7EB] p-4 rounded-3xl space-y-2">
          <h1 className="text-2xl text-[#FF3366] font-semibold">
            Recommended Courses
          </h1>
          {/* Course Slider */}
          <div className="relative">
            {/* Left Navigation Button */}
            {showLeftArrow && (
              <button
                type="button"
                onClick={() => scroll("left")}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-gray-50 shadow-lg rounded-full p-3 transition-all duration-300 hover:scale-110 hover:shadow-xl"
              >
                <ChevronLeft className="w-5 h-5 text-gray-700" />
              </button>
            )}

            {/* Right Navigation Button */}
            {showRightArrow && (
              <button
                type="button"
                onClick={() => scroll("right")}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-gray-50 shadow-lg rounded-full p-3 transition-all duration-300 hover:scale-110 hover:shadow-xl"
              >
                <ChevronRight className="w-5 h-5 text-gray-700" />
              </button>
            )}

            {/* Scrollable Container */}
            <div
              ref={scrollContainerRef}
              className={`flex gap-6 overflow-x-auto scrollbar-hide py-4 transition-all duration-300 ${showLeftArrow ? "pl-16" : "pl-0"
                } ${showRightArrow ? "pr-16" : "pr-0"}`}
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {courses.map((course) => (
                <div
                  key={course.id}
                  className="flex-none w-80 bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="relative p-3">
                    <Image
                      src={course.image || "/placeholder.svg"}
                      alt={course.title}
                      width={400}
                      height={200}
                      className="w-full h-48 object-cover rounded-xl"
                    />
                    <div className="absolute right-4 top-4 flex items-center gap-2 justify-center p-2 rounded-2xl bg-white z-10">
                      <span className="text-[#FFCC00] text-lg font-bold">
                        4.2
                      </span>
                      <Star className="w-5 h-5 fill-[#FFCC00] stroke-[#FFCC00]" />
                    </div>
                  </div>

                  <div className="p-3 pt-0 space-y-3">
                    <div className="flex justify-between items-center">
                      <h3 className="text-xl font-bold text-gray-900">
                        Course Name
                      </h3>
                      <button className="font-main text-sm text-[#FF3366] w-fit border-b border-b-[#FF3366] cursor-pointer">
                        Know More
                      </button>
                    </div>

                    <div className="space-y-1">
                      {["Detail 1", "Detail 2", "Detail 3", "Detail 4"].map(
                        (detail, index) => (
                          <div key={index} className="flex items-center gap-2">
                            <FaCircleCheck className="w-5 h-5 fill-[#99DEFF]" />
                            <span className="text-[#6B7280] text-sm">
                              {detail}
                            </span>
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
                        <p className="text-md font-semibold">
                          Mr. Ranvir Ahuja
                        </p>
                        <p className="text-xs text-[#FF3366]">Teacher</p>
                      </div>
                      <div className="ml-auto flex gap-1 text-[#FFCC00]">
                        {[1, 2, 3, 4].map((star) => (
                          <Star key={star} className="w-3 h-3 fill-current" />
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center justify-between bg-[#F9FAFB] rounded-3xl px-4 py-3 w-full mt-2">
                      <span className="text-[#50C878] font-bold">
                        ₹2,000 - ₹5,000
                      </span>
                      <button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-4 py-3 text-sm">
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-[#F3F4F680] border border-[#E5E7EB] p-4 rounded-3xl space-y-2 mb-2">
          <h1 className="text-2xl text-[#FF3366] font-semibold">
            Our Best Sellers
          </h1>
          {/* Course Slider */}
          <div className="relative">
            {/* Left Navigation Button */}
            {showLeftArrow && (
              <button
                type="button"
                onClick={() => scroll("left")}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-gray-50 shadow-lg rounded-full p-3 transition-all duration-300 hover:scale-110 hover:shadow-xl"
              >
                <ChevronLeft className="w-5 h-5 text-gray-700" />
              </button>
            )}

            {/* Right Navigation Button */}
            {showRightArrow && (
              <button
                type="button"
                onClick={() => scroll("right")}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-gray-50 shadow-lg rounded-full p-3 transition-all duration-300 hover:scale-110 hover:shadow-xl"
              >
                <ChevronRight className="w-5 h-5 text-gray-700" />
              </button>
            )}

            {/* Scrollable Container */}
            <div
              ref={scrollContainerRef}
              className={`flex gap-6 overflow-x-auto scrollbar-hide py-4 transition-all duration-300 ${showLeftArrow ? "pl-16" : "pl-0"
                } ${showRightArrow ? "pr-16" : "pr-0"}`}
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {courses.map((course) => (
                <div
                  key={course.id}
                  className="flex-none w-80 bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="relative p-3">
                    <Image
                      src={course.image || "/placeholder.svg"}
                      alt={course.title}
                      width={400}
                      height={200}
                      className="w-full h-48 object-cover rounded-xl"
                    />
                    <div className="absolute right-4 top-4 flex items-center gap-2 justify-center p-2 rounded-2xl bg-white z-10">
                      <span className="text-[#FFCC00] text-lg font-bold">
                        4.2
                      </span>
                      <Star className="w-5 h-5 fill-[#FFCC00] stroke-[#FFCC00]" />
                    </div>
                  </div>

                  <div className="p-3 pt-0 space-y-3">
                    <div className="flex justify-between items-center">
                      <h3 className="text-xl font-bold text-gray-900">
                        Course Name
                      </h3>
                      <button className="font-main text-sm text-[#FF3366] w-fit border-b border-b-[#FF3366] cursor-pointer">
                        Know More
                      </button>
                    </div>

                    <div className="space-y-1">
                      {["Detail 1", "Detail 2", "Detail 3", "Detail 4"].map(
                        (detail, index) => (
                          <div key={index} className="flex items-center gap-2">
                            <FaCircleCheck className="w-5 h-5 fill-[#99DEFF]" />
                            <span className="text-[#6B7280] text-sm">
                              {detail}
                            </span>
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
                        <p className="text-md font-semibold">
                          Mr. Ranvir Ahuja
                        </p>
                        <p className="text-xs text-[#FF3366]">Teacher</p>
                      </div>
                      <div className="ml-auto flex gap-1 text-[#FFCC00]">
                        {[1, 2, 3, 4].map((star) => (
                          <Star key={star} className="w-3 h-3 fill-current" />
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center justify-between bg-[#F9FAFB] rounded-3xl px-4 py-3 w-full mt-2">
                      <span className="text-[#50C878] font-bold">
                        ₹2,000 - ₹5,000
                      </span>
                      <button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-4 py-3 text-sm">
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-4">
          <Newsletter />
        </div>
      </div>
      <Footer />

      <VideoPlayerPopup isOpen={watchVideo} onClose={() => setWatchVideo(false)} />
    </StudentWrapper>
  );
}
