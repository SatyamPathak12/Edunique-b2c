
"use client"

import Image from 'next/image';
import React, { useState } from 'react';
import { IoVideocamOutline } from "react-icons/io5";
import { MdBarChart } from "react-icons/md";
import ReviewCard from './review-card';
import { FaLinkedin, FaCheck, FaStar, FaCircle } from 'react-icons/fa';
import { RiSofaLine } from "react-icons/ri";
import { FaRegEnvelope } from "react-icons/fa6";
import Header from './Header2';
import Footer from '@/components/layout/Footer'
import GoBack from "@/components/principal/goback";
import StudentNavbar from '../student-navbar';
import StudentB2CWrapper from './common-components/StudentB2CWrapper';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import VideoPlayerPopup from '@/app/b2c-student/pop-ups/popupComponent/VideoPlayerPopup';
import BackButton from '@/components/common-components/BackButton';

const images = [
    '/b2c-student/card-banner-1.png',
    '/b2c-student/card-banner-2.png',
    '/b2c-student/card-banner-3.png',
    '/b2c-student/card-banner-4.png',
    '/b2c-student/card-banner-1.png',
    '/b2c-student/card-banner-2.png',
];

interface OngoingCoursesCardProps {
    image: string;
    courseName: string;
}
const OngoingClass = Array.from({ length: 3 }, (_, i) => ({
    id: i,
    image: images[i],
    courseName: 'Course Name',
}));
const OngoingClassesCard: React.FC<OngoingCoursesCardProps> = ({
    image,
    courseName,
}) => {
    return (
        <div className="w-full rounded-2xl bg-white border border-gray-200">
            <div className="relative w-full h-56 p-2 rounded-2xl">
                <div className="relative w-full h-full rounded-2xl overflow-hidden">
                    <Image
                        src={image}
                        alt="Course Image"
                        fill
                        className="object-cover rounded-2xl"
                    />
                </div>
            </div>

            <div className="px-4 pb-2 space-y-2">
                <div className="flex justify-between items-baseline">
                    <h2 className="text-base font-semibold text-black">{courseName}</h2>
                </div>

            </div>
        </div>
    );
};

// ongoing batches

interface OngoingBatchesProps {
    image: string;
    domain: string;
    courseName: string;
    available: number;
}

const availableCounts = [8, 8, 0]

const OngoingBatches = Array.from({ length: 3 }, (_, i) => ({
    id: i,
    image: images[i], // update path
    domain: "Self Dev.",
    courseName: 'Course Name',
    available: availableCounts[i],
}));

const OngoingBatchesCard: React.FC<OngoingBatchesProps> = ({
    image,
    available,
    // domain,
    courseName,
}) => {
     const router = useRouter();

  const handleClick = () => {
    if (available > 0) {
      router.push("/b2c-phase-3/b2c-student/student-flow/courses/detail");
    }
  };
    const details = ['Detail 1', 'Detail 2', 'Detail 3', 'Detail 4'];
    return (
        <div className="w-full rounded-2xl bg-white border border-gray-200">
            <div className={`${available === 0 ? "bg-red-400 justify-center" : "bg-[#50c878] justify-between"} rounded-xl mx-2 mt-2 flex px-4 items-center gap-4`}>
                <button className="font-semibold text-white  py-2 flex items-center gap-2">
                    {available === 0 ? (
                        "Batch Full"
                    ) : (
                        <>
                            <RiSofaLine />
                            Seats Available
                        </>
                    )}
                </button>
                {available === 0 ?
                    ""
                    : (

                        <p className="text-xs font-semibold text-white">{`${available} seats left`}</p>
                    )}
            </div>
            <div className="relative w-full h-56 p-2 rounded-2xl">

                <div className="relative w-full h-full rounded-2xl overflow-hidden">
                    <Image
                        src={image}
                        alt="Course Image"
                        fill
                        className="object-cover rounded-2xl"
                    />

                </div>
            </div>

            <div className="px-4 pb-4 space-y-2">
                <div className="flex justify-between items-baseline">
                    <h2 className="text-base font-semibold text-black">{courseName}</h2>

                </div>
                <div className="space-y-3">
                    {details.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                            <div className="w-6 h-6 flex items-center justify-center rounded-full bg-blue-300 text-white text-xs">
                                <FaCheck />
                            </div>
                            <span className="text-gray-500 text-sm">{item}</span>
                        </div>
                    ))}
                </div>
                <div className={`${available === 0 ? "bg-[#b0b0b0] text-[#747a86]" : "bg-blue-600 text-white"} rounded-full mt-2 flex px-4  items-center gap-4 justify-center`}>
                    <button
      className="font-semibold py-2 flex items-center gap-2"
      onClick={handleClick}
      disabled={available === 0}
    >
      {available === 0 ? "Batch Full" : "Enroll Now"}
    </button>

                </div>
            </div>
        </div>
    );
};



// Upcoimg batch card

interface CourseCardProps {
    image: string;
    rating: number;
    courseName: string;
    teacherName: string;
    teacherRole: string;
    teacherImage: string;
}

const CourseCard: React.FC<CourseCardProps> = ({
    image,
    rating,
    courseName,
    teacherName,
    teacherRole,
    teacherImage,
}) => {
    const details = ['Detail 1', 'Detail 2', 'Detail 3', 'Detail 4'];
    return (
        <div className="w-full rounded-2xl bg-white border border-gray-200">
            <div className="relative w-full h-56 p-2 rounded-2xl">
                <div className="relative w-full h-full rounded-2xl overflow-hidden">
                    <Image
                        src={image}
                        alt="Course Image"
                        fill
                        className="object-cover rounded-2xl"
                    />
                    <div className="absolute top-2 right-2 bg-white text-yellow-500 text-sm font-semibold px-2 py-1 rounded-full flex items-center gap-1">
                        {rating} <FaStar className="text-yellow-400" />
                    </div>
                </div>
            </div>

            <div className="px-4 pb-4 space-y-2">
                <div className="flex justify-between items-baseline">
                    <h2 className="text-base md:text-lg font-semibold text-black">{courseName}</h2>
                    <button className='text-[#FF3366] text-sm underline underline-offset-5'>Know more</button>
                </div>
                <div className="space-y-3">
                    {details.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                            <div className="w-6 h-6 flex items-center justify-center rounded-full bg-blue-300 text-white text-xs">
                                <FaCheck />
                            </div>
                            <span className="text-gray-500 text-sm">{item}</span>
                        </div>
                    ))}
                </div>
                <div className="flex items-center gap-3 mt-2">
                    <div className="w-8 h-8 rounded-full relative">
                        <Image
                            src={teacherImage}
                            alt="Teacher"
                            fill
                            className=" object-cover rounded-full"
                        />
                    </div>
                    <div>
                        <h3 className="text-sm font-semibold text-black">{teacherName}</h3>
                        <p className="text-xs text-pink-500">{teacherRole}</p>
                    </div>
                    <div className="ml-auto flex items-center gap-0.5 text-yellow-400">
                        {[...Array(4)].map((_, i) => (
                            <FaStar key={i} className="w-3.5 h-3.5" />
                        ))}
                    </div>
                </div>
                <div className="bg-[#f9fafb] px-2 py-1 rounded-full flex justify-between items-center gap-2">
                    <p className="font-semibold text-lg text-[#50c878]">₹2,000-₹5,000</p>
                    <button className='px-3 py-2 text-white font-medium bg-blue-600 rounded-full'>Add to cart</button>
                </div>
            </div>
        </div>
    );
};

const courses = Array.from({ length: 6 }, (_, i) => ({
    id: i,
    image: images[i], // update path
    rating: 4.2,
    courseName: 'Course Name',
    teacherName: 'Mr. Ranvir Ahuja',
    teacherRole: 'Teacher',
    teacherImage: '/b2c-student/card-profile.jpg', // update path
}));

type batches = {
    Day: string,
    Time: string,
    Batch: string
};

const batch: batches[] = [
    {
        Day: "Monday",
        Time: "12:00 to 13:00",
        Batch: "A"
    },
    {
        Day: "Monday",
        Time: "12:00 to 13:00",
        Batch: "A"
    },
    {
        Day: "Monday",
        Time: "12:00 to 13:00",
        Batch: "A"
    },
    {
        Day: "Monday",
        Time: "12:00 to 13:00",
        Batch: "A"
    },
    {
        Day: "Monday",
        Time: "12:00 to 13:00",
        Batch: "A"
    },
]


type Qualification = {
    logo: string;
    course: string;
    school: string;
    from: string;
    to: string;
};

const qualifications: Qualification[] = [
    {
        logo: "/b2c-student/school-logo-1.jpg", // Replace with actual path
        course: "Course / std",
        school: "School / College Name",
        from: "2000",
        to: "2000",
    },
    {
        logo: "/b2c-student/school-logo-2.png", // Replace with actual path
        course: "Course / std",
        school: "School / College Name",
        from: "2000",
        to: "2000",
    },
];

const Profile = () => {
    const [selectedIndexes, setSelectedIndexes] = useState<number[]>([]);

    const handleSelect = (index: number) => {
        setSelectedIndexes((prev) =>
            prev.includes(index)
                ? prev.filter((i) => i !== index)
                : [...prev, index]
        );
    };
     const router = useRouter();

  const handleContinue = () => {
    router.push("/b2c-phase-3/b2c-student/student-flow/time-table"); // <-- yahan apna route daal
  };
  const [watchVideo, setWatchVideo] = useState(false)
    return (
        <>
            <StudentNavbar activeState='Home' />
            <BackButton Heading="Teacher Name" />
            <StudentB2CWrapper>


                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[4fr_3fr_3fr] my-4 gap-4">
                    <div className="bg-white rounded-2xl p-6 sm:col-span-2 lg:col-span-1">
                        {/* Top section */}
                        <div className="flex items-start justify-between">
                            <div className="flex gap-4">
                                <div className="w-24 h-24 relative">
                                    <Image
                                        src="/b2c-student/profile.jpg"
                                        alt="Instructor"
                                        fill
                                        className="rounded-full object-cover"
                                    />
                                </div>
                                <div className="flex gap-1 justify-center flex-col">
                                    <h2 className="text-lg font-semibold">Ronak Mathur</h2>
                                    <p className="text-sm text-[#FF3366]">Role</p>
                                    <div className="flex mt-1 text-yellow-400">
                                        {Array.from({ length: 5 }).map((_, i) => (
                                            <FaStar key={i} className={i < 4 ? '' : 'text-gray-300'} />
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <FaLinkedin size={28} className="text-blue-600 rounded-xl text-xl" />
                        </div>

                        {/* Badges */}
                        <div className="flex gap-2 mt-4 w-full justify-center flex-wrap">
                            <div className="bg-[#dbeafe] w-full sm:w-[40%] text-[#5c89ff] text-m px-3 py-2 rounded-full flex items-center gap-2">
                                <MdBarChart className="text-m" />
                                6 years
                            </div>
                            <div className="bg-[#d1f0e1] w-full sm:w-[50%] text-zinc-900 text-m px-3 py-2 rounded-full flex items-center gap-2">
                                <FaRegEnvelope className="text-m" />
                                example@gm.com
                            </div>
                        </div>

                        {/* Demo Button */}
                        <button onClick={() => setWatchVideo(true)} className="w-full mt-4 bg-[#FF3366] text-white font-semibold py-3 rounded-2xl flex items-center justify-center gap-2 text-sm">
                            <IoVideocamOutline />
                            Watch Demo Video
                        </button>

                        {/* Availability */}
                        <div className="mt-6">
                            <h3 className="font-semibold mb-2">Availability</h3>
                            <div className="bg-[#f9fafb] border rounded-2xl p-4 text-sm space-y-2">
                                <div className="flex justify-between">
                                    <span className="text-gray-600">Monday, Wednesday, Friday</span>
                                    <span className="text-gray-500">10 AM – 1 PM</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-600">Saturday</span>
                                    <span className="text-gray-500">2 PM – 6 PM</span>
                                </div>
                            </div>
                        </div>

                        {/* About */}
                        <div className="mt-6">
                            <h3 className="font-semibold mb-2">About</h3>
                            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                                <li>Mauris feugiat diam non convallis dictum.</li>
                                <li>Integer tempus dolor imperdiet porttitor finibus.</li>
                                <li>Praesent consequat arcu nec diam ultricies, non sodales turpis ornare.</li>
                                <li>Suspendisse vitae tellus varius, dictum tellus pretium, efficitur metus</li>
                                <li>Mauris feugiat diam non convallis dictum.</li>
                                <li>Integer tempus dolor imperdiet porttitor finibus.</li>
                                <li>Praesent consequat arcu nec diam ultricies, non sodales turpis ornare.</li>
                                <li>Suspendisse vitae tellus varius, dictum tellus pretium, efficitur metus</li>
                            </ul>
                        </div>
                    </div>
                    <div className="bg-white rounded-2xl p-5">
                        <h2 className="text-sm font-semibold mb-4">Qualification</h2>
                        <div className="space-y-4">
                            {qualifications.map((q, i) => (
                                <div
                                    key={i}
                                    className="flex items-center bg-[#f9fafb] p-3 rounded-2xl gap-4"
                                >
                                    <div className="relative w-16 h-16">
                                        <Image
                                            fill
                                            src={q.logo}
                                            alt="logo"
                                            className="object-cover rounded-2xl"
                                        />
                                    </div>

                                    <div className="flex-1">
                                        <h3 className="font-semibold text-m">{q.course}</h3>
                                        <p className="text-sm ">{q.school}</p>
                                        <div className="flex items-center text-sm text-gray-500 gap-2 mt-1">
                                            <span>{q.from}</span>
                                            <FaCircle className="text-[5px]" />
                                            <span>{q.to}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <ReviewCard />
                </div>
                <div className="bg-white rounded-2xl p-6">
                    <div className="flex items-center gap-2 mb-2">
                        <div className="w-1 h-5 bg-blue-500 rounded-full"></div>
                        <h3 className="text-blue-500 font-semibold">My core teaching philosophy</h3>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi architecto saepe reprehenderit exercitationem labore aliquam nobis itaque deserunt quo necessitatibus possimus dolor a aut, quas accusamus, magni obcaecati repellat voluptas!
                        Quaerat consequatur, veniam unde hic maxime odit, illo nulla sapiente, ratione doloremque voluptas dicta magnam nesciunt autem sunt! Optio iure beatae quo dolorem quaerat debitis illo quia quam necessitatibus molestiae!
                        olores fugiat eaque velit cumque sint porro quibusdam hic dolor laboriosam, facilis expedita cum? Deserunt, sunt voluptate neque rerum officiis porro saepe nobis vitae est.
                        Minus itaque numquam rem accusamus praesentium beatae ipsum doloribus impedit molestiae mollitia. Laborum dolore ducimus officiis? Velit exercitationem assumenda impedit suscipit maiores, quasi similique dignissimos nemo reprehenderit ea magnam consequatur.
                        soluta nulla tenetur consectetur adipisci cumque incidunt, sapiente molestias alias temporibus maxime neque dolores magni perspiciatis. Nemo, quis obcaecati.</p>

                </div>
                <div className="bg-white rounded-2xl p-6 mt-4">
                    <h3 className='text-black-500 mb-2'>Pedology</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi architecto saepe reprehenderit exercitationem labore aliquam nobis itaque deserunt quo necessitatibus possimus dolor a aut, quas accusamus, magni obcaecati repellat voluptas!
                        Quaerat consequatur, veniam unde hic maxime odit, illo nulla sapiente, ratione doloremque voluptas dicta magnam nesciunt autem sunt! Optio iure beatae quo dolorem quaerat debitis illo quia quam necessitatibus molestiae!
                        olores fugiat eaque velit cumque sint porro quibusdam hic dolor laboriosam, facilis expedita cum? Deserunt, sunt voluptate neque rerum officiis porro saepe nobis vitae est.
                        Minus itaque numquam rem accusamus praesentium beatae ipsum doloribus impedit molestiae mollitia. Laborum dolore ducimus officiis? Velit exercitationem assumenda impedit suscipit maiores, quasi similique dignissimos nemo reprehenderit ea magnam consequatur.
                        soluta nulla tenetur consectetur adipisci cumque incidunt, sapiente molestias alias temporibus maxime neque dolores magni perspiciatis. Nemo, quis obcaecati.</p>

                </div>
                <div className="bg-white rounded-2xl p-6 mt-4">
                    <h2 className="font-semibold text-lg">Browse and Enroll in available sessions</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
                        {batch.map((batches, index) => {
                            const isSelected = selectedIndexes.includes(index);
                            return (
                                <div
                                    key={index}
                                    onClick={() => handleSelect(index)}
                                    className={`border py-5 px-5 rounded-xl mt-4 cursor-pointer transition ${isSelected ? "bg-[#3366ff] text-white" : "bg-[#f9fafb] text-black"
                                        }`}
                                >
                                    <h3 className="font-medium">Batch: {batches.Batch}</h3>
                                    <h4>Day: {batches.Day}</h4>
                                    <h4>Time: {batches.Time}</h4>
                                </div>
                            );
                        })}
                    </div>
                    <div className="flex justify-center w-full">
                        <button   onClick={handleContinue} className="px-8 py-3 text-white font-semibold my-4 rounded-full bg-[#FF3366]">Continue</button>
                    </div>
                </div>

                <div className="my-4 rounded-2xl overflow-x-auto bg-[#f1f1f2] border px-3 py-2">
                    <h2 className={`text-[#FF3366] font-semibold mb-2 text-m`}>Ongoing Courses</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-2 pb-4 pt-2">
                        {OngoingClass.map((course, index) => (
                            <Link href={"/b2c-phase-3/b2c-student/student-flow/about-courses"} key={index} className="">
                                <OngoingClassesCard {...course} />
                            </Link>
                        ))}
                    </div>
                </div>

                <div className="my-4 rounded-2xl overflow-x-auto bg-[#f1f1f2] border px-3 py-2">
                    <h2 className={`text-[#FF3366] font-semibold mb-2 text-m`}>Ongoing Batches</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-2 pb-4 pt-2">
                        {OngoingBatches.map((course, index) => (
                            <div key={index} className="">
                                <OngoingBatchesCard {...course} />
                            </div>
                        ))}
                    </div>
                </div>

                <div className="my-4 rounded-2xl overflow-x-auto custom-scrollbar bg-[#f1f1f2] border px-3 py-2">
                    <h2 className={`text-[#FF3366] font-semibold mb-2 text-m`}>Upcoming Batches</h2>
                    <div className="flex gap-4 px-2 overflow-x-auto custom-scrollbar pb-4 pt-2 whitespace-nowrap">
                        {courses.map((course, index) => (
                            <Link href={"/b2c-phase-3/b2c-student/student-flow/courses/detail"} key={index} className="min-w-[325px]">
                                <CourseCard {...course} />
                            </Link>
                        ))}
                    </div>
                </div>




            </StudentB2CWrapper>
            <Footer />
        <VideoPlayerPopup isOpen={watchVideo} onClose={() => setWatchVideo(false)} />
        </>

    )
}

export default Profile;