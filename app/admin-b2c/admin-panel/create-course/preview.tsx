"use client"

import Image from 'next/image';
import React, { useState } from 'react';
import { IoVideocamOutline } from "react-icons/io5";
import { LuBrain } from "react-icons/lu";
import { FiInfo, FiStar, FiBookOpen, FiBarChart2 } from 'react-icons/fi';
import { FaChevronDown } from 'react-icons/fa';
import { motion } from 'framer-motion';

const AboutCourse = () => (
  <>
    <p className="mt-2 text-sm text-black">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed, corporis natus. Voluptatibus aliquam repudiandae assumenda, placeat, maxime fugit tenetur libero eveniet sunt cupiditate iusto aperiam, ipsa eligendi at. Architecto, praesentium.
      Porro corporis laborum magnam non perspiciatis fugiat sed fugit excepturi facilis autem dolor et, pariatur, repellat quis tempore ut assumenda sunt ad rem nisi. Officiis alias ipsum facere ad iusto.
      Cupiditate vero ullam provident distinctio obcaecati voluptate. Obcaecati cum fugit nisi ullam quo. Quae, vero voluptates et sint perspiciatis adipisci, aut id libero porro tempora magni facilis itaque officiis minus.
      Optio repellendus quam eaque architecto porro eligendi magnam atque vel pariatur amet! Sint quis, saepe sequi nam facere rem eius voluptates vitae, nemo fuga quaerat illum quasi voluptatum, facilis perferendis?
    </p>
    <p className="mt-4 text-sm text-black">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi rerum nam velit ullam aliquam quo quibusdam voluptatibus neque, libero, aperiam enim, animi hic nobis reiciendis itaque! Asperiores reprehenderit earum iure!
      Doloremque quidem dolore quibusdam qui nobis facere ipsa voluptas necessitatibus fugit! Enim delectus asperiores, aliquid natus fugit necessitatibus suscipit, magni, harum nostrum dolorem ab ut voluptatem aut at nesciunt. Voluptatibus.
    </p>
  </>
)

// --- Main DetailChecklist Component ---
export const DetailChecklist: React.FC = () => {
  return (
    // Wrapper for the list
    <div className="p-4 space-y-3">
      {[
        "Detail 1", "Detail 2", "Detail 3", "Detail 4",
        "Detail 6", "Detail 7", "Detail 8" // "Detail 5" is missing as per your image
      ].map((detail, index) => (
        <div key={index} className="flex items-center gap-2">
          <div className="flex-shrink-0">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="12" fill="#8dd9b3" fillOpacity="0.5" />
              <path d="M17.3333 8.5L10.4999 15.3333L7.66659 12.5" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <span className="text-sm sm:text-base text-black">
            {detail}
          </span>
        </div>
      ))}
    </div>
  );
};

// --- Main LevelInfo Component ---
const LevelInfoCards: React.FC = () => {
  return (
    <div className="w-full space-y-2 mt-4 h-full overflow-auto custom-scrollbar-blue pr-2 max-h-[378px] sm:max-h-[350px] lg:max-h-[315px] xl:max-h-[300px]">
      {[
        {
          id: 'level-1',
          title: 'Level 1',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum suscipit ex justo, condimentum venenatis odio pellentesque elementum. Aliquam non fringilla nibh. In pulvinar massa at ante placerat lacinia in at turpis.'
        },
        {
          id: 'level-2',
          title: 'Level 2',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum suscipit ex justo, condimentum.'
        },
        {
          id: 'level-3',
          title: 'Level 3',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum suscipit ex justo, condimentum venenatis odio pellentesque elementum.'
        },
        {
          id: 'level-4',
          title: 'Level 4',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum suscipit ex justo, condimentum venenatis odio pellentesque elementum. Aliquam non fringilla nibh. In pulvinar massa at ante placerat lacinia in at turpis.'
        },
      ].map(level => {
        return (
          <div
            key={level.id}
            className={`w-full text-left p-4 rounded-2xl transition-all duration-200 relative border border-[#E5E7EB] overflow-hidden bg-[#F9FAFB]`}
          >
            <h3 className="text-base font-light text-black mb-1 px-1">
              {level.title}
            </h3>
            <p className="text-xs sm:text-sm font-light text-[#6B7280] leading-relaxed">
              {level.description}
            </p>
          </div>
        );
      })}
    </div>
  );
};

const CurriculumCards: React.FC = () => {
  return (
    <div className="w-full space-y-2 mt-4 h-full overflow-auto custom-scrollbar-blue pr-2 max-h-[378px] sm:max-h-[350px] lg:max-h-[315px] xl:max-h-[300px]">
      {[
        {
          id: 'level-1',
          title: 'Module 1',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum suscipit ex justo, condimentum venenatis odio pellentesque elementum. Aliquam non fringilla nibh. In pulvinar massa at ante placerat lacinia in at turpis.'
        },
        {
          id: 'level-2',
          title: 'Module 2',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum suscipit ex justo, condimentum.'
        },
        {
          id: 'level-3',
          title: 'Module 3',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum suscipit ex justo, condimentum venenatis odio pellentesque elementum.'
        },
        {
          id: 'level-4',
          title: 'Module 4',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum suscipit ex justo, condimentum venenatis odio pellentesque elementum. Aliquam non fringilla nibh. In pulvinar massa at ante placerat lacinia in at turpis.'
        },
      ].map(level => {
        return (
          <div
            key={level.id}
            className={`w-full text-left p-4 rounded-2xl transition-all duration-200 relative border border-[#E5E7EB] overflow-hidden bg-[#F9FAFB]`}
          >
            <h3 className="text-base font-light text-black mb-1 px-1">
              {level.title}
            </h3>
            <p className="text-xs sm:text-sm font-light text-[#6B7280] leading-relaxed">
              {level.description}
            </p>
          </div>
        );
      })}
    </div>
  );
};


const Course = () => {
  const [selected, setSelected] = useState<number>(0);
  const buttons = [
    { label: 'About Course', icon: <FiInfo />, desc: <AboutCourse /> },
    { label: 'Benefits', icon: <FiStar />, desc: <DetailChecklist /> },
    { label: 'Pedagogy', icon: <LuBrain />, desc: <AboutCourse /> },
    { label: 'Curriculum', icon: <FiBookOpen />, desc: <CurriculumCards /> },
    { label: 'Levels', icon: <FiBarChart2 strokeWidth={3} />, desc: <LevelInfoCards /> },
  ];
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-7 gap-4">
        <div className="bg-white rounded-2xl p-4 grid grid-cols-1 md:grid-cols-5 gap-4 col-span-1 lg:col-span-5">
          <div className="relative md:h-full md:w-full h-76 md:col-span-3">
            <Image className='rounded-2xl object-cover' src="/b2c-student/b2c-student.png" alt='b2c-student banner' fill />
          </div>
          <div className="md:col-span-2">
            <CourseOptionsCard />
          </div>
        </div>
        <div className="col-span-1 lg:col-span-2">
          <ReviewCard />
        </div>
      </div>

      <div className="bg-white rounded-2xl p-4 my-4">
        <div className="grid grid-cols-1 lg:grid-cols-7 gap-4">
          <div className="rounded-2xl flex flex-col md:flex-row md:items-center md:overflow-x-auto custom-scrollbar-thin md:pb-2 lg:flex-col lg:pb-0 lg:overflow-x-visible gap-3 lg:col-span-1">
            {buttons.map((btn, index) => {
              const isActive = selected === index;
              return (
                <motion.button
                  key={index}
                  onClick={() => setSelected(index)}
                  className="flex lg:w-full items-center justify-start gap-1 rounded-full px-2 py-2 transition-colors duration-50 flex-shrink-0 cursor-pointer"
                  animate={{
                    backgroundColor: isActive ? '#FF3366' : 'transparent',
                    color: isActive ? '#ffffff' : '#9CA3AF',
                  }}
                  whileHover={{
                    backgroundColor: isActive ? '#FF3366' : '#F3F4F6',
                  }}
                >
                  <span className="text-lg">{btn.icon}</span>
                  <span className="text-m font-medium">{btn.label}</span>
                </motion.button>
              );
            })}
          </div>

          <div className="lg:col-span-6">
            <div className="flex flex-wrap w-full gap-2 justify-between items-center">
              <h3 className="text-lg font-semibold">{buttons[selected].label}</h3>
              <button className='rounded-xl p-2 w-fit bg-[#8DD9B3] text-white flex items-center gap-2 text-sm font-medium whitespace-nowrap'><IoVideocamOutline size={25} />Watch demo Video</button>
            </div>
            {buttons[selected].desc}
          </div>
        </div>
      </div>
      <div className="relative py-8 rounded-2xl">
        <div className="relative flex gap-4 items-center flex-col md:flex-row justify-center w-full z-10">
          <h1 className="text-3xl sm:text-[48px] font-bold text-white">Book a Free Demo</h1>
          <button className='bg-white text-nowrap cursor-pointer rounded-full px-8 py-2 text-m font-medium'>Click Here</button>
        </div>
        <div
          className="absolute inset-0 rounded-2xl bg-center bg-repeat z-0"
          style={{
            backgroundImage: "url('/Background6.png')",
            backgroundSize: '900px',
            filter: 'grayscale(10%) brightness(1.1) blur(0.5px)',
            opacity: 0.3,
          }}>

        </div>
        {/* Bluish Overlay */}
        <div
          className="absolute inset-0 rounded-2xl bg-[#3366FF] z-0"
          style={{
            opacity: 0.9,
            mixBlendMode: 'multiply',
          }}>

        </div>
      </div>
    </div>
  )
}

export default Course;

const NumberStepper = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(prev => (prev < 99 ? prev + 1 : 99));
  const decrement = () => setCount(prev => (prev > 0 ? prev - 1 : 0));

  return (
    <div className="relative inline-flex items-center justify-center bg-[#F9FAFB] border border-[#E5E7EB] rounded-full  w-[90px] h-[42px]">
      <span className="text-lg text-black font-sans">
        {String(count).padStart(2, '0')}
      </span>

      {/* Buttons Container */}
      <div className="absolute right-3 flex flex-col h-full">
        {/* Up Button */}
        <button onClick={increment} className="flex-grow flex items-end pb-0.5 text-[#6B7280] hover:text-black">
          <svg width="12" height="7" viewBox="0 0 12 7" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 0.5L11.1962 6.5H0.803848L6 0.5Z" />
          </svg>
        </button>
        {/* Down Button */}
        <button onClick={decrement} className="flex-grow flex items-start pt-0.5 text-[#6B7280] hover:text-black">
          <svg width="12" height="7" viewBox="0 0 12 7" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 6.5L0.803847 0.5L11.1962 0.5L6 6.5Z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

function CourseOptionsCard() {
  const options = ['Option 1', 'Option 2', 'Option 3'];

  return (
    <div className="bg-white rounded-2xl">
      <h2 className="text-4xl font-bold">Course Name</h2>
      <p className="text-[#6B7280] mt-1">Category</p>

      <p className="text-3xl font-bold text-[#3366FF] mt-4">₹2,000</p>

      {/* Dropdown Fields */}
      <div className="mt-6 space-y-4">
        {[
          'Batch Size',
          'Class Bundle',
          'Batch Days',
          'Select Batch Time',
        ].map((label, idx) => (
          <div key={idx}>
            <label className="block text-sm text-black">
              {label}
              <span className="text-[#FF3366]">*</span>
            </label>
            <div className="relative">
              <select className="mt-1 w-full border  rounded-full border-[#D5D5D5] bg-[#F9FAFB] py-2 px-4 pr-8 text-sm text-black appearance-none">
                {options.map((opt, i) => (
                  <option key={i}>{opt}</option>
                ))}
              </select>
              <FaChevronDown className="absolute right-3 top-[55%] transform -translate-y-1/2 text-[#6B7280] text-xs pointer-events-none" />
            </div>
          </div>
        ))}
      </div>

      {/* Quantity + Button */}
      <div className="mt-6 flex items-center gap-3">
        <NumberStepper />

        <button className="flex-1 bg-[#3366FF] hover:bg-blue-700 text-white text-sm py-3 rounded-full font-medium transition cursor-pointer">
          Add to Cart
        </button>
      </div>
    </div>
  );
}

type Review = {
  name: string;
  role: string;
  image: string;
  rating?: number;
  review: string;
};

const reviews: Review[] = [
  {
    name: 'Customer Name',
    role: 'Student / Parent',
    image: "/images/profile2.jpg",
    rating: 4,
    review:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque placerat lectus et leo fermentum aliquet. Curabitur sollicitudin tortor at lacus ultricies, quis blandit sem varius. Fusce turpis enim, hendrerit facilisis nisl nec, dictum faucibus nisl. Aliquam erat volutpat. Duis non molestie augue.',
  },
  {
    name: 'Customer Name',
    role: 'Student / Parent',
    image: "/images/profile2.jpg",
    rating: 3,
    review:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque placerat lectus et leo fermentum aliquet. Curabitur sollicitudin tortor at lacus ultricies, quis blandit sem varius. Fusce turpis enim, hendrerit facilisis nisl nec, dictum faucibus nisl. Aliquam erat volutpat. Duis non molestie augue.',
  },
  {
    name: 'Customer Name',
    role: 'Student / Parent',
    image: "/images/profile2.jpg",
    rating: 4,
    review:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque placerat lectus et leo fermentum aliquet. Curabitur sollicitudin tortor at lacus ultricies, quis blandit sem varius. Fusce turpis enim, hendrerit facilisis nisl nec, dictum faucibus nisl. Aliquam erat volutpat. Duis non molestie augue.',
  },
  {
    name: 'Customer Name',
    role: 'Student / Parent',
    image: "/images/profile2.jpg",
    rating: 4,
    review:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque placerat lectus et leo fermentum aliquet. Curabitur sollicitudin tortor at lacus ultricies, quis blandit sem varius. Fusce turpis enim, hendrerit facilisis nisl nec, dictum faucibus nisl. Aliquam erat volutpat. Duis non molestie augue.',
  },
  {
    name: 'Customer Name',
    role: 'Student / Parent',
    image: "/images/profile2.jpg",
    rating: 4,
    review:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque placerat lectus et leo fermentum aliquet. Curabitur sollicitudin tortor at lacus ultricies, quis blandit sem varius. Fusce turpis enim, hendrerit facilisis nisl nec, dictum faucibus nisl. Aliquam erat volutpat. Duis non molestie augue.',
  },
];

function ReviewCard() {
  return (
    <div className="bg-white rounded-2xl">
      <h2 className="text-xl font-semibold mb-4">Reviews</h2>
      <div className="space-y-3 max-h-90 lg:max-h-125 overflow-y-auto custom-scrollbar-thin pr-1">
        {reviews.map((myreview, index) => (
          <div key={index}>
            <FeedbackCard name={myreview.name} role={myreview.role} review={myreview.review} image={myreview.image} />
          </div>
        ))}
      </div>
    </div>
  );
}


const FeedbackCard: React.FC<Review> = ({ name, role, image, review }) => (
  <div className="bg-[#F3F4F6] p-4 rounded-2xl flex flex-col h-full">
    <div className="flex items-center mb-2">
      <Image src={image} alt={name} width={70} height={70} className="w-16 h-16 rounded-full object-cover mr-4" />
      <div>
        <h4 className="font-semibold text-black mb-1">{name}</h4>
        <p className="text-xs text-[#6B7280] mb-0.5">{role}</p>
        <div className="flex items-center gap-1.5">
          {[...Array(4)].map((_, i) => <FiStar key={i} className={`w-3.5 h-3.5 text-[#FFCC00] fill-current `} />)}
        </div>
      </div>
    </div>
    <p className="text-[10px] text-[#6B7280] leading-tight flex-grow mb-1 ">{review}</p>
  </div>
);