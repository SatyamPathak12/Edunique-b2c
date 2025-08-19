"use client";

import { useState } from "react";
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
import { BookOpen, Star, Info, Brain, ChartNoAxesColumn } from "lucide-react";
import FooterNew from "@/components/footer3";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import Footer from "@/components/layout/Footer";
import { useRouter } from "next/navigation";

interface Review {
  id: number;
  customerName: string;
  type: "Student" | "Parent";
  rating: number;
  description: string;
  profileImage: string;
}

export const reviews: Review[] = [
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

export const ReviewCard: React.FC<{ review: Review }> = ({ review }) => {
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

export default function DemoCourseDetail() {
  const [activeTab, setActiveTab] = useState("about");
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

  const [formData, setFormData] = useState<FormData>({
    batchSize: "",
    classBundle: "",
    batchDays: "",
    batchTime: "",
  });

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
      <div className="bg-[#EEEEEE] mx-auto w-full py-8 space-y-6 px-2 md:px-8 lg:px-12 xl:px-16">
        <div className="max-w-7xl mx-auto">
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
                    <div className="space-y-4">
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
                    <div className="w-full flex items-center gap-4 justify-between pt-4">
                      <Input
                        type="number"
                        min={0}
                        placeholder="00"
                        className="w-full bg-[#F9FAFB] border border-[#D5D5D5] rounded-2xl"
                      />
                      <button
                        onClick={(e) => {
                          e.preventDefault(); // <-- block form submit
                          router.push("/b2c-student/student-flow/demo/checkout");
                        }}
                        className="bg-[#3366FF] whitespace-nowrap font-medium hover:bg-blue-700 text-white text-base py-1.5 px-16 rounded-full"
                      >
                        Buy Now
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

        <div className="max-w-7xl flex flex-col lg:flex-row bg-[#FFFFFF] rounded-2xl mx-auto overflow-hidden">
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
      </div>
      <Footer />
    </StudentWrapper>
  );
}
