"use client";

import StudentWrapper from "@/components/student-wrapper";
import { FaCircleCheck } from "react-icons/fa6";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import Footer from "@/components/layout/Footer";

export default function CourseDetail() {
  const router = useRouter();
  const loremIpsumLines = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "Sed nec nunc id purus malesuada pretium id ut ante.",
    "Fusce eget dolor congue, finibus neque quis, interdum sem.",
    "Nullam porta felis vitae dui malesuada, maximus auctor lectus pharetra.",
    "Quisque hendrerit dui quis orci cursus fringilla.",
    "Sed eget ipsum vel turpis rutrum vehicula et eget mi.",
    "Proin eget elit laoreet eros hendrerit placerat.",
    "Duis facilisis elit a erat pretium porttitor.",
    "Sed vitae nunc fermentum, dictum dui quis, mattis purus.",
    "Proin id elit in diam tincidunt rutrum.",
    "Cras porttitor tellus ut libero placerat rhoncus.",
    "Nam elementum elit nec sollicitudin ultrices.",
  ];

  return (
    <StudentWrapper>
      <div className="relative z-10 bg-[#E3E3E3]">
        {/* headers */}
        <div className="bg-white border-b">
          <div className="w-full px-4 sm:px-6 lg:px-8">
            <div
              className="flex items-center py-4"
              onClick={() => router.push("/student/courses")}
            >
              <ArrowLeft className="w-6 h-6 text-gray-600 mr-3 cursor-pointer hover:text-gray-800" />
              <h1 className="text-2xl font-semibold text-[#FF3366]">
                Course Name
              </h1>
            </div>
          </div>
        </div>

        <section className="sm:px-4 md:px-8 lg:px-16 py-8">
          <div className="rounded-xl bg-white">
            <div className="md:grid md:grid-cols-[1fr_0.6fr] p-4 gap-16">
              <div className="space-y-4">
                <div className="space-y-2">
                  <h2 className="px-3 py-4 rounded-2xl bg-[#99DEFF] font-bold">
                    Short Description
                  </h2>
                  <p className="text-base leading-[20px] font-[400]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec odio sem, convallis a augue vel, lobortis aliquam
                    tellus. Nullam sagittis nisi non eleifend vulputate.
                    Vestibulum tristique scelerisque eleifend. Donec volutpat
                    tempor feugiat. Curabitur mollis dictum orci, eget elementum
                    ipsum vestibulum at. Aliquam viverra ex non enim maximus,
                    sed eleifend lorem convallis. Curabitur nibh est, maximus
                    vel nulla vel, viverra posuere lectus. Phasellus ac lacus
                    urna. Integer facilisis massa sit amet rutrum porttitor.
                    Fusce sollicitudin iaculis varius.
                  </p>
                </div>
                <div className="space-y-3">
                  <h2 className="px-3 py-4 rounded-2xl bg-[#FF99B7] font-bold">
                    Overview
                  </h2>
                  <p className="text-base leading-[20px] font-[400]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec odio sem, convallis a augue vel, lobortis aliquam
                    tellus. Nullam sagittis nisi non eleifend vulputate.
                    Vestibulum tristique scelerisque eleifend. Donec volutpat
                    tempor feugiat. Curabitur mollis dictum orci, eget elementum
                    ipsum vestibulum at. Aliquam viverra ex non enim maximus,
                    sed eleifend lorem convallis. Curabitur nibh est, maximus
                    vel nulla vel, viverra posuere lectus. Phasellus ac lacus
                    urna. Integer facilisis massa sit amet rutrum porttitor.
                    Fusce sollicitudin iaculis varius.
                  </p>
                  <p className="text-base leading-[20px] font-[400]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec odio sem, convallis a augue vel, lobortis aliquam
                    tellus. Nullam sagittis nisi non eleifend vulputate.
                    Vestibulum tristique scelerisque eleifend. Donec volutpat
                    tempor feugiat. Curabitur mollis dictum orci, eget elementum
                    ipsum vestibulum at. Aliquam viverra ex non enim maximus,
                    sed eleifend lorem convallis. Curabitur nibh est, maximus
                    vel nulla vel, viverra posuere lectus. Phasellus ac lacus
                    urna. Integer facilisis massa sit amet rutrum porttitor.
                    Fusce sollicitudin iaculis varius.
                  </p>
                  <p className="text-base leading-[20px] font-[400]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec odio sem, convallis a augue vel, lobortis aliquam
                    tellus. Nullam sagittis nisi non eleifend vulputate.
                    Vestibulum tristique scelerisque eleifend. Donec volutpat
                    tempor feugiat. Curabitur mollis dictum orci, eget elementum
                    ipsum vestibulum at. Aliquam viverra ex non enim maximus,
                    sed eleifend lorem convallis. Curabitur nibh est, maximus
                    vel nulla vel, viverra posuere lectus. Phasellus ac lacus
                    urna. Integer facilisis massa sit amet rutrum porttitor.
                    Fusce sollicitudin iaculis varius.
                  </p>
                </div>
                <div className="space-y-2">
                  <h2 className="px-3 py-4 rounded-2xl bg-[#8DD9B3] font-bold">
                    Characteristics{" "}
                  </h2>
                  <p className="text-base leading-[20px] font-[400]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec odio sem, convallis a augue vel, lobortis aliquam
                    tellus. Nullam sagittis nisi non eleifend vulputate.
                    Vestibulum tristique scelerisque eleifend. Donec volutpat
                    tempor feugiat. Curabitur mollis dictum orci, eget elementum
                    ipsum vestibulum at. Aliquam viverra ex non enim maximus,
                    sed eleifend lorem convallis. Curabitur nibh est, maximus
                    vel nulla vel, viverra posuere lectus. Phasellus ac lacus
                    urna. Integer facilisis massa sit amet rutrum porttitor.
                    Fusce sollicitudin iaculis varius.
                  </p>
                  <ul className="list-disc list-inside pl-5 space-y-2">
                    {loremIpsumLines.map((elem, index) => (
                      <li key={index}>{elem}</li>
                    ))}
                  </ul>
                </div>
                <div className="space-y-2">
                  <h2 className="px-3 py-4 rounded-2xl bg-[#FFCC00] font-bold">
                    Benefits{" "}
                  </h2>
                  <p className="text-base leading-[20px] font-[400]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec odio sem, convallis a augue vel, lobortis aliquam
                    tellus. Nullam sagittis nisi non eleifend vulputate.
                    Vestibulum tristique scelerisque eleifend. Donec volutpat
                    tempor feugiat. Curabitur mollis dictum orci, eget elementum
                    ipsum vestibulum at. Aliquam viverra ex non enim maximus,
                    sed eleifend lorem convallis. Curabitur nibh est, maximus
                    vel nulla vel, viverra posuere lectus. Phasellus ac lacus
                    urna. Integer facilisis massa sit amet rutrum porttitor.
                    Fusce sollicitudin iaculis varius.
                  </p>
                  <ul className="space-y-2 pl-5">
                    {loremIpsumLines.map((elem, index) => (
                      <li key={index}>
                        <FaCircleCheck className="w-4 h-4 fill-[#3366FF] inline mr-2" />
                        {elem}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="space-y-4">
                <img
                  alt="course pack image"
                  src="/student/courses/image_586.png"
                  className="block mx-auto"
                />
                <div className="border border-zinc-200 bg-[#F9FAFB] rounded-2xl flex flex-col justify-center items-center gap-2 p-6">
                  <span className="text-2xl font-bold">₹15000</span>
                  <span className="font-semibold">3 Sessions</span>
                  <span className="text-lg">90 Mins</span>
                </div>
              </div>
            </div>
            <div className="p-4 space-y-4">
              <h2 className="text-xl font-bold pl-2">Banner Title</h2>
              <img
                alt="course poster"
                src="/student/courses/Frame_1000008877.png"
              />
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <img
                  alt="course pack image"
                  src="/student/courses/image_586.png"
                />
                <img
                  alt="course pack image"
                  src="/student/courses/image_586.png"
                />
                <img
                  alt="course pack image"
                  src="/student/courses/image_586.png"
                />
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="z-10 absolute">
        <Footer/>
      </div>
    </StudentWrapper>
  );
}
