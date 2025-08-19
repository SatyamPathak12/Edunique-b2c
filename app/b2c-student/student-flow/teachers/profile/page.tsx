"use client";

import { Suspense, useEffect, useRef, useState } from "react";
import {
  Play,
  Pause,
  Volume2,
  Maximize,
  Mail,
  Star,
  ChartNoAxesColumn,
  ChevronLeft,
  ChevronRight,
  Armchair,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import StudentWrapper from "@/components/student-wrapper";
import FooterNew from "@/components/footer3";
import { ImLinkedin } from "react-icons/im";
import Image from "next/image";
import { ReviewCard, reviews } from "../../demo/course-details/page";
import { FaCircleCheck } from "react-icons/fa6";
import { useSearchParams } from "next/navigation";
import { courses } from "../../courses/detail/page";
import Footer from "@/components/layout/Footer";
import BackButton from "@/components/common-components/BackButton";

interface Qualification {
  id: string;
  course: string;
  school: string;
  year: string;
  logo: string;
}

const mockQualifications: Qualification[] = [
  {
    id: "1",
    course: "Course / std",
    school: "School / College Name",
    year: "2000",
    logo: "/student/teachers/dc1900369d876eaaee4d4e14b4a750fd71bf1ce2.jpg",
  },
  {
    id: "2",
    course: "Course / std",
    school: "School / College Name",
    year: "2000",
    logo: "/student/teachers/8a8d63b2c52a9a563a29748fef893ba03633b31f.png",
  },
];

function Loading() {
  return (
    <div className="flex justify-center items-center h-screen bg-[#EEEEEE]">
      <div className="animate-pulse text-lg">Loading teacher profile...</div>
    </div>
  );
}

function TeacherProfileContent() {
  const searchParams = useSearchParams();
  const redirectionFlow = searchParams.get("flow");
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration] = useState(300); // 5 minutes

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
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

  return (
    <StudentWrapper>
      <BackButton Heading="Teacher Name"/>
      <div className="p-4 md:p-6 lg:p-10 bg-[#EEEEEE]">
        <div className="max-w-7xl mx-auto space-y-8">
          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
            {/* Left Column - Teacher Profile */}
            <div className="lg:col-span-5 space-y-6 bg-white rounded-3xl py-4 sm:p-4">
              {/* Profile Header */}
              <Card className="w-full border-0">
                <CardContent className="space-y-6">
                  {/* Header Section */}
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-4">
                      <Avatar className="w-20 h-20">
                        <AvatarImage
                          src="/student/educator/educator_male.png"
                          alt="Ronak Mathur"
                        />
                        <AvatarFallback className="text-lg font-semibold">
                          RM
                        </AvatarFallback>
                      </Avatar>

                      <div className=" mt-2">
                        <h1 className="text-lg font-semibold text-gray-900">
                          Ronak Mathur
                        </h1>
                        <p className="text-[#FF3366]">Role</p>

                        {/* Star Rating */}
                        <div className="flex items-center gap-1">
                          {[1, 2, 3, 4].map((star) => (
                            <Star
                              key={star}
                              className="w-3 h-3 fill-yellow-400 text-yellow-400"
                            />
                          ))}
                          <Star className="w-3 h-3 stroke-yellow-400" />
                        </div>
                      </div>
                    </div>

                    {/* LinkedIn Icon */}
                    <ImLinkedin className="w-8 h-8 fill-[#3366FF]" />
                  </div>

                  {/* Info Pills */}
                  <div className="flex flex-col md:flex-row whitespace-nowrap gap-3 justify-start items-start">
                    <div className="flex max-w-48 w-full items-center gap-2 bg-[#99DEFF66] text-[#3366FF] px-4 py-2 rounded-full">
                      <ChartNoAxesColumn className="w-5 h-5" />
                      <span>6 years</span>
                    </div>

                    <div className="flex items-center max-w-48 w-full gap-2 px-2 bg-[#8DD9B366]  py-2 rounded-full">
                      <Mail className="w-5 h-5 text-black" />
                      <span>example@gm.com</span>
                    </div>
                  </div>

                  {redirectionFlow !== "demo" && (
                    <>
                      <button className="w-full bg-[#FF3366] hover:bg-[#ff1a53] text-white flex justify-center items-center rounded-2xl py-3 h-fit gap-2 cursor-pointer font-medium">
                        <ChartNoAxesColumn className="w-5 h-5" />
                        <span>Watch Demo Video</span>
                      </button>

                      <div className="space-y-4">
                        <h2 className="text-xl font-semibold">Availability</h2>

                        <div className="space-y-2 border border-[#E5E7EB] bg-[#F9FAFB] p-4 rounded-3xl gap-2">
                          <div className="flex justify-between items-center">
                            <span className="text-sm font-medium text-[#6B7280]">
                              Monday, Wednesday, Friday
                            </span>
                            <span className="text-sm font-medium text-[#6B7280]">
                              10 AM - 1 PM
                            </span>
                          </div>

                          <div className="flex justify-between items-center">
                            <span className="text-sm font-medium text-[#6B7280]">
                              Saturday
                            </span>
                            <span className="text-sm font-medium text-[#6B7280]">
                              2 PM - 6 PM
                            </span>
                          </div>
                        </div>
                      </div>
                    </>
                  )}

                  {/* About Section */}
                  <div className="space-y-4">
                    <h2 className="text-xl font-semibold">About</h2>

                    <ul className="space-y-1 list-disc pl-5">
                      <li className="text-sm">
                        Mauris feugiat diam non convallis dictum.
                      </li>
                      <li className="text-sm">
                        Integer tempus dolor imperdiet porttitor finibus.
                      </li>
                      <li className="text-sm">
                        Praesent consequat arcu nec diam ultricies, non sodales
                        turpis ornare.
                      </li>
                      <li className="text-sm">
                        Suspendisse vitae tellus varius, dictum tellus pretium,
                        efficitur metus
                      </li>
                      <li className="text-sm">
                        Mauris feugiat diam non convallis dictum.
                      </li>
                      <li className="text-sm">
                        Integer tempus dolor imperdiet porttitor finibus.
                      </li>
                      <li className="text-sm">
                        Praesent consequat arcu nec diam ultricies, non sodales
                        turpis ornare.
                      </li>
                      <li className="text-sm">
                        Suspendisse vitae tellus varius, dictum tellus pretium,
                        efficitur metus
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Middle Column - Qualifications */}
            <div className="lg:col-span-3 space-y-6 bg-white rounded-3xl p-4">
              <div>
                <h2 className="text-lg font-semibold mb-4">Qualification</h2>
                <div className="space-y-4">
                  {mockQualifications.map((qual) => (
                    <Card key={qual.id} className="border-0">
                      <div className="flex items-center gap-3">
                        <Image
                          src={qual.logo}
                          alt="institute"
                          width={80}
                          height={80}
                          className=""
                        />
                        <div className="flex-1">
                          <h3 className="font-medium text-sm mb-2">
                            {qual.course}
                          </h3>
                          <p className="text-sm font-light">{qual.school}</p>
                          <div className="flex items-center gap-2 mt-1">
                            <span className="text-xs text-gray-500">
                              {qual.year}
                            </span>
                            <span className="text-xs text-gray-500">
                              ●&nbsp;&nbsp;{qual.year}
                            </span>
                          </div>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Reviews */}
            <div className="lg:col-span-4 space-y-6 bg-white rounded-3xl p-4">
              <div>
                <h2 className="text-lg font-semibold mb-4">Reviews</h2>
                <div
                  className="h-full overflow-y-auto max-h-[544px] custom-scrollbar-thin pr-2"
                >
                  {reviews.map((review) => (
                    <ReviewCard key={review.id} review={review} />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Teaching Philosophy */}
          <Card className="p-6 rounded-3xl bg-white border-0">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-2 h-[24px] bg-[#3366FF] rounded-full "></div>
              <h2 className="text-lg font-semibold text-[#3366FF]">
                My Core Teaching Philosophy
              </h2>
            </div>
            <p className="text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              tristique rhoncus risus, nec sagittis sapien bibendum non. Aenean
              suscipit, tortor sed tempor ornare, purus enim aliquet sapien,
              vitae fringilla ipsum massa in justo. Maecenas venenatis mauris
              vitae ligula tincidunt volutpat. Fusce id enim velit. Fusce
              ornare, nulla ut malesuada sagittis, libero sem aliquam tortor,
              vel aliquet nisl mauris a nisl. Nam vestibulum egestas nibh sit
              amet malesuada. Proin erat risus, mollis in metus vestibulum,
              auctor maximus metus. Morbi ac dictum sem. Nullam vitae congue
              tellus. Class aptent taciti sociosqu ad litora torquent per
              conubia nostra, per inceptos himenaeos. Etiam aliquam nisl quis
              nisl tincidunt, nec aliquam lectus gravida. Pellentesque varius
              purus vel dignissim pulvinar. Proin viverra elit eget leo dictum
              aliquam. Nam ornare arcu sed pretium ornare. Vestibulum vel
              dignissim dolor.
            </p>
          </Card>

          {/* Pedagogy */}
          <Card className="p-6 rounded-3xl bg-white border-0">
            <h2 className="text-lg font-semibold mb-2">Pedagogy</h2>
            <p className="text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              tristique rhoncus risus, nec sagittis sapien bibendum non. Aenean
              suscipit, tortor sed tempor ornare, purus enim aliquet sapien,
              vitae fringilla ipsum massa in justo. Maecenas venenatis mauris
              vitae ligula tincidunt volutpat. Fusce id enim velit. Fusce
              ornare, nulla ut malesuada sagittis, libero sem aliquam tortor,
              vel aliquet nisl mauris a nisl. Nam vestibulum egestas nibh sit
              amet malesuada. Proin erat risus, mollis in metus vestibulum,
              auctor maximus metus. Morbi ac dictum sem. Nullam vitae congue
              tellus. Class aptent taciti sociosqu ad litora torquent per
              conubia nostra, per inceptos himenaeos. Etiam aliquam nisl quis
              nisl tincidunt, nec aliquam lectus gravida. Pellentesque varius
              purus vel dignissim pulvinar. Proin viverra elit eget leo dictum
              aliquam. Nam ornare arcu sed pretium ornare. Vestibulum vel
              dignissim dolor.
            </p>
          </Card>

          {redirectionFlow === "demo" ? (
            <div className="space-y-4">
              {/* Demo Video Section */}
              <h2 className="font-semibold p-4 bg-[#B0B0B066] rounded-2xl">
                Demo Video
              </h2>
              <Card className="overflow-hidden rounded-3xl">
                <div className="relative aspect-video bg-gray-900">
                  <img
                    src="/placeholder.svg?height=400&width=800"
                    alt="Demo video thumbnail"
                    className="w-full h-full object-cover"
                  />

                  {/* Video Overlay */}
                  <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
                    <Button
                      onClick={togglePlay}
                      size="lg"
                      className="bg-white bg-opacity-90 hover:bg-opacity-100 text-black rounded-full w-16 h-16 p-0"
                    >
                      {isPlaying ? (
                        <Pause className="h-6 w-6" />
                      ) : (
                        <Play className="h-6 w-6 ml-1" />
                      )}
                    </Button>
                  </div>

                  {/* Video Controls */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                    <div className="flex items-center gap-4">
                      <Button
                        onClick={togglePlay}
                        size="sm"
                        variant="ghost"
                        className="text-white hover:bg-white hover:bg-opacity-20 p-2"
                      >
                        {isPlaying ? (
                          <Pause className="h-4 w-4" />
                        ) : (
                          <Play className="h-4 w-4" />
                        )}
                      </Button>

                      <div className="flex-1 flex items-center gap-2">
                        <span className="text-white text-xs">
                          {formatTime(currentTime)}
                        </span>
                        <div className="flex-1 bg-white bg-opacity-30 rounded-full h-1">
                          <div
                            className="bg-red-500 h-1 rounded-full transition-all duration-300"
                            style={{
                              width: `${(currentTime / duration) * 100}%`,
                            }}
                          ></div>
                        </div>
                        <span className="text-white text-xs">
                          {formatTime(duration)}
                        </span>
                      </div>

                      <div className="flex items-center gap-2">
                        <Button
                          size="sm"
                          variant="ghost"
                          className="text-white hover:bg-white hover:bg-opacity-20 p-2"
                        >
                          <Volume2 className="h-4 w-4" />
                        </Button>
                        <Button
                          size="sm"
                          variant="ghost"
                          className="text-white hover:bg-white hover:bg-opacity-20 p-2"
                        >
                          <Maximize className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          ) : (
            <>
              <Card className="p-6 rounded-3xl bg-white border-0">
                <h2 className="text-lg font-semibold mb-2">
                  Browse and enroll in available sessions.
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                  {new Array(5)
                    .fill({
                      batch: "Batch A",
                      day: "Monday",
                      time: "12:00 to 13:00",
                    })
                    .map((batch, index) => (
                      <div
                        key={index}
                        className="flex flex-col justify-start items-start gap-1 border border-[#E5E7EB] bg-[#F9FAFB] rounded-3xl p-4"
                      >
                        <span className="font-semibold">{batch.batch}</span>
                        <span className="text-sm">{batch.day}</span>
                        <span className="text-sm">{batch.time}</span>
                      </div>
                    ))}
                </div>
                <div className="flex justify-center items-center pt-4">
                  <button className="w-fit bg-[#FF3366] hover:bg-[#ff1a53] text-white rounded-full py-3 px-8 h-fit gap-2 cursor-pointer font">
                    <span>Continue</span>
                  </button>
                </div>
              </Card>
              {/* Ongoing Courses */}
              <div className="bg-[#F3F4F680] space-y-4 rounded-2xl p-7">
                <h1 className="text-2xl text-[#FF3366] font-semibold">
                  Ongoing Courses
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
                  {courses.slice(0, 3).map((course) => (
                    <Card
                      key={course.id}
                      className="bg-white rounded-2xl overflow-hidden border border-[#E5E7EB] hover:shadow-md"
                    >
                      <div className="relative p-3 ">
                        <Image
                          src={course.image || "/placeholder.svg"}
                          alt={course.title}
                          width={400}
                          height={200}
                          className="w-full h-48 rounded-2xl object-fill"
                        />
                      </div>
                      <CardContent className="p-6 pt-0 pb-3 space-y-3">
                        <h3 className="text-xl font-bold">Course Name</h3>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Ongoing Batches */}
              <div className="bg-[#F3F4F680] space-y-4 rounded-2xl p-7">
                <h1 className="text-2xl text-[#FF3366] font-semibold">
                  Ongoing Batches
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
                  {courses.slice(0, 3).map((course, cId) => (
                    <Card
                      key={course.id}
                      className="bg-white rounded-2xl overflow-hidden border border-[#E5E7EB] hover:shadow-md"
                    >
                      <div className="p-3 pb-0 rounded-xl">
                        {cId === 2 ? (
                          <div className="bg-[#FF6969] border border-[#FF696978] flex justify-center items-center rounded-xl p-3 font-medium text-white">
                            Batch Full
                          </div>
                        ) : (
                          <div className="bg-[#00B060] border border-[#02A35A78] flex justify-between items-center rounded-xl p-3 font-medium text-white">
                            <span className="inline-flex items-center gap-2">
                              <Armchair className="w-5 h-5" />
                              Seats Available
                            </span>
                            <span className="text-xs">8 seats left</span>
                          </div>
                        )}
                      </div>
                      <div className="relative p-3">
                        <Image
                          src={course.image || "/placeholder.svg"}
                          alt={course.title}
                          width={400}
                          height={200}
                          className="w-full h-48 rounded-2xl object-fill"
                        />
                      </div>
                      <CardContent className="p-6 pt-0 space-y-3">
                        <div>
                          <h3 className="text-xl font-bold text-gray-900">
                            Course Name
                          </h3>
                          <p className="font-light">
                            <strong>Domain:</strong>{" "}
                            <span className="text-[#6B7280]">Self Dev.</span>
                          </p>
                        </div>

                        <div className="space-y-2">
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
                        {cId === 2 ? (
                          <Button
                            disabled={true}
                            className="w-full bg-[#B0B0B0] text-[#6B7280] font-semibold rounded-full h-10 text-lg mt-2"
                          >
                            Batch Full
                          </Button>
                        ) : (
                          <Button className="w-full bg-[#3366FF] hover:bg-blue-600 text-white rounded-full h-10 text-md mt-2">
                            Enroll Now
                          </Button>
                        )}
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Upcoming Batches */}
              <div className="bg-[#F3F4F680] border border-[#E5E7EB] p-4 rounded-3xl space-y-2">
                <h1 className="text-2xl text-[#FF3366] font-semibold">
                  Upcoming Batches
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
                            className="w-full h-48 object-cover rounded-2xl"
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
                            {[
                              "Detail 1",
                              "Detail 2",
                              "Detail 3",
                              "Detail 4",
                            ].map((detail, index) => (
                              <div
                                key={index}
                                className="flex items-center gap-2"
                              >
                                <FaCircleCheck className="w-5 h-5 fill-[#99DEFF]" />
                                <span className="text-[#6B7280] text-sm">
                                  {detail}
                                </span>
                              </div>
                            ))}
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
                            <div className="ml-auto flex gap-1 text-yellow-400">
                              {[1, 2, 3, 4].map((star) => (
                                <Star
                                  key={star}
                                  className="w-3 h-3 fill-current"
                                />
                              ))}
                            </div>
                          </div>

                          <div className="flex items-center justify-between bg-[#F9FAFB] rounded-3xl px-4 py-3 w-full mt-2">
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
            </>
          )}
        </div>
      </div>
      <Footer />
    </StudentWrapper>
  );
}

export default function TeacherProfilePage() {
  return (
    <Suspense fallback={<Loading />}>
      <TeacherProfileContent />
    </Suspense>
  );
}
