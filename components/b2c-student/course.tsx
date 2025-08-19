"use client"
import { motion } from 'framer-motion';
import Image from 'next/image';
import React, { useState } from 'react';
import { FaCheck, FaStar } from 'react-icons/fa';
import { IoVideocamOutline } from "react-icons/io5";
import { LuInfo, LuBrain } from "react-icons/lu";
import { CiStar } from "react-icons/ci";
import { MdBarChart } from "react-icons/md";
import { IoBookOutline } from "react-icons/io5";
import ReviewCard from './review-card';
import GoBack from "@/components/principal/goback";
import Header from '@/components/b2c-student/Header2';
import Footer from '@/components/layout/Footer'

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
                    <h2 className="text-base font-semibold text-black">{courseName}</h2>
                    <button className='text-[#FF3366] text-xs underline underline-offset-4'>Know more</button>
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
                <div className="bg-gray-100 px-2 py-1 rounded-full flex justify-between items-center gap-2">
                    <p className="font-semibold text-lg text-[#4BC4B6]">₹2,000-₹5,000</p>
                    <button className='px-3 py-2 text-white font-medium bg-blue-600 rounded-full'>Add to cart</button>
                </div>
            </div>
        </div>
    );
};
const images = [
    '/b2c-student/card-banner-1.png',
    '/b2c-student/card-banner-2.png',
    '/b2c-student/card-banner-3.png',
    '/b2c-student/card-banner-4.png',
    '/b2c-student/card-banner-1.png',
    '/b2c-student/card-banner-2.png',
];
const courses = Array.from({ length: 6 }, (_, i) => ({
    id: i,
    image: images[i], // update path
    rating: 4.2,
    courseName: 'Course Name',
    teacherName: 'Mr. Ranvir Ahuja',
    teacherRole: 'Teacher',
    teacherImage: '/b2c-student/card-profile.jpg', // update path
}));

const Course = () => {
    const [selected, setSelected] = useState<number | null>(0);
    const buttons = [
        { label: 'About Course', icon: <LuInfo /> },
        { label: 'Benefits', icon: <CiStar /> },
        { label: 'Pedagogy', icon: <LuBrain /> },
        { label: 'Curriculum', icon: <MdBarChart /> },
        { label: 'Levels', icon: <IoBookOutline /> },
    ];

    const headerUser = {
		name: 'Shlok Agheda',
		role: 'Student',
		avatarSrc: '/images/person.jpg',
	}
    return (   
        <>
        <StudentNavbar activeState="Courses List"/>
        <BackButton Heading="Course Name" />
        <div className="py-2 px-4 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-[2.5fr_1fr] bg-gray-100 md:p-4 gap-4 rounded-2xl">
                <div className="bg-white rounded-2xl p-4 grid grid-cols-1 lg:grid-cols-[2.5fr_1.5fr]">
                    <div className="relative lg:h-full lg:w-full h-76 ">
                        <Image className='rounded-2xl' src="/b2c-student/b2c-student.png" alt='b2c-student banner' fill />
                    </div>
                    <CourseOptionsCard /> 
                    </div>
                <ReviewCard />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-[1fr_6fr] bg-white rounded-2xl p-4 gap-4 my-4">
                <div className="px-2 py-4 rounded-2xl flex flex-col gap-3 ">
                    {buttons.map((btn, index) => {
                        const isActive = selected === index;

                        return (
                            <motion.button
                                key={index}
                                onClick={() => setSelected(index)}
                                className="flex items-center gap-1 cursor-pointer rounded-full px-2 py-2 transition-colors duration-300"
                                animate={{
                                    backgroundColor: isActive ? '#FF3366' : 'transparent', // blue-600
                                    color: isActive ? '#ffffff' : '#9CA3AF', // white : gray-400
                                }}
                                whileHover={{
                                    backgroundColor: isActive ? '#FF3366' : '#F3F4F6', // hover bg-gray-100
                                }}
                                transition={{ duration: 0.3 }}
                            >
                                <span className="text-lg">{btn.icon}</span>
                                <span className="text-m font-medium">{btn.label}</span>
                            </motion.button>
                        );
                    })}
                </div>
                <div className="">
                    <div className="flex w-full justify-between">
                        <h3 className="font-semibold">About Course</h3>
                        <button className='rounded-xl p-2 bg-[#8DD9B3] text-white flex items-center gap-2 text-sm font-medium'><IoVideocamOutline size={25} />Watch demo Video</button>
                    </div>
                    <p className="mt-2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed, corporis natus. Voluptatibus aliquam repudiandae assumenda, placeat, maxime fugit tenetur libero eveniet sunt cupiditate iusto aperiam, ipsa eligendi at. Architecto, praesentium.
                        Porro corporis laborum magnam non perspiciatis fugiat sed fugit excepturi facilis autem dolor et, pariatur, repellat quis tempore ut assumenda sunt ad rem nisi. Officiis alias ipsum facere ad iusto.
                        Cupiditate vero ullam provident distinctio obcaecati voluptate. Obcaecati cum fugit nisi ullam quo. Quae, vero voluptates et sint perspiciatis adipisci, aut id libero porro tempora magni facilis itaque officiis minus.
                        Optio repellendus quam eaque architecto porro eligendi magnam atque vel pariatur amet! Sint quis, saepe sequi nam facere rem eius voluptates vitae, nemo fuga quaerat illum quasi voluptatum, facilis perferendis?
                    </p>
                    <p className="mt-4">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi rerum nam velit ullam aliquam quo quibusdam voluptatibus neque, libero, aperiam enim, animi hic nobis reiciendis itaque! Asperiores reprehenderit earum iure!
                        Doloremque quidem dolore quibusdam qui nobis facere ipsa voluptas necessitatibus fugit! Enim delectus asperiores, aliquid natus fugit necessitatibus suscipit, magni, harum nostrum dolorem ab ut voluptatem aut at nesciunt. Voluptatibus.
                    </p>
                </div>
            </div>
            <div className="relative py-8 rounded-2xl">
                <div className="relative flex gap-4 items-center flex-col md:flex-row justify-center w-full z-9">
                    <h1 className="text-3xl sm:text-[48px] font-bold text-white">Book a Free Demo</h1>
                    <button className='bg-white cursor-pointer rounded-full px-8 py-2 text-m font-medium'>Click Here</button>
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

            <div className="my-4 rounded-2xl overflow-x-auto custom-scrollbar bg-[#f1f1f2] border px-3 py-2">
                <h2 className={`text-[#FF3366] font-bold text-m`}>Related Courses</h2>
                <div className="flex gap-4 px-2 overflow-x-auto custom-scrollbar pb-4 pt-2 whitespace-nowrap">
                    {courses.map((course, index) => (
                        <div key={index} className="min-w-[325px]">
                            <CourseCard {...course} />
                        </div>
                    ))}
                </div>
            </div>
            <div className="my-4 rounded-2xl overflow-x-auto custom-scrollbar bg-[#f1f1f2] border px-3 py-2">
                <h2 className={`text-[#FF3366] font-bold text-m`}>Recommended Courses</h2>
                <div className="flex gap-4 px-2 overflow-x-auto custom-scrollbar pb-4 pt-2 whitespace-nowrap">
                    {courses.map((course, index) => (
                        <div key={index} className="min-w-[325px]">
                            <CourseCard {...course} />
                        </div>
                    ))}
                </div>
            </div>
            <div className="my-4 rounded-2xl overflow-x-auto custom-scrollbar bg-[#f1f1f2] border px-3 py-2">
                <h2 className={`text-[#FF3366] font-bold text-m`}>Our Best Sellers</h2>
                <div className="flex gap-4 px-2 overflow-x-auto custom-scrollbar pb-4 pt-2 whitespace-nowrap">
                    {courses.map((course, index) => (
                        <div key={index} className="min-w-[325px]">
                            <CourseCard {...course} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
        <Footer/>
    </>
    )
}

export default Course;



import { FaChevronDown, FaMinus, FaPlus } from 'react-icons/fa';
import StudentNavbar from '../student-navbar';
import BackButton from '../common-components/BackButton';

export function CourseOptionsCard() {
  const [quantity, setQuantity] = useState(0);

  const options = ['Option 1', 'Option 2', 'Option 3'];

  return (
    <div className="bg-white rounded-2xl p-6">
      <h2 className="text-4xl font-bold">Course Name</h2>
      <p className="text-gray-400 mt-1">Category</p>

      <p className="text-3xl font-bold text-blue-600 mt-4">₹2,000</p>

      {/* Dropdown Fields */}
      <div className="mt-6 space-y-4">
        {[
          'Batch Size',
          'Class Bundle',
          'Batch Days',
          'Select Batch Time',
        ].map((label, idx) => (
          <div key={idx}>
            <label className="block text-sm font-semibold text-gray-700">
              {label}
              <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <select className="mt-1 w-full border font-semibold rounded-full border-gray-300 bg-gray-100 py-2 px-4 pr-8 text-sm text-gray-700 appearance-none">
                {options.map((opt, i) => (
                  <option key={i}>{opt}</option>
                ))}
              </select>
              <FaChevronDown className="absolute right-3 top-3 text-gray-400 text-xs pointer-events-none" />
            </div>
          </div>
        ))}
      </div>

      {/* Quantity + Button */}
      <div className="mt-6 flex items-center gap-3">
        <div className="flex items-center bg-gray-100 px-3 py-2 rounded-full">
          <button
            onClick={() => setQuantity(Math.max(0, quantity - 1))}
            className="text-sm text-gray-600"
          >
            <FaMinus />
          </button>
          <span className="mx-3 text-sm font-medium w-6 text-center">
            {quantity.toString().padStart(2, '0')}
          </span>
          <button
            onClick={() => setQuantity(quantity + 1)}
            className="text-sm text-gray-600"
          >
            <FaPlus />
          </button>
        </div>

        <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-sm py-2 rounded-full font-medium transition">
          Add to Cart
        </button>
      </div>
    </div>

  );
}
