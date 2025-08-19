// page.tsx (e.g., /app/assessments/page.tsx)
"use client";

import React, { useEffect, useState } from "react";
import Footer from "@/components/layout/Footer";
// Removed FiArrowLeft from here as it's not in page header, but in ui-components if needed
import {
  SubCategorySidebar,
  ContentDisplayArea,
  LearningAccordion,
  AssessmentItem,
  MockPaperItem,
  WorkSheetItem,
  LearningWeek, // Types
  AssessmentItemData,
  MockPaperItemData,
  WorkSheetItemData,
  FillForm,
} from "./components";
import { OptimizedCategoryTabsBar } from "@/components/common-components/topbar";
import { useRouter } from "next/navigation";
import StudentWrapper from "@/components/student-wrapper";
import VideoPlayerPopup from '../../pop-ups/popupComponent/VideoPlayerPopup';
import { AnimatePresence, motion } from "framer-motion";
import { CiMail } from "react-icons/ci";
import { FiInfo, FiStar, FiChevronDown, FiArrowLeft, FiPlayCircle } from "react-icons/fi";
import { IoStatsChartSharp } from "react-icons/io5";
import Image from "next/image";

// --- Sample Data (kept in page.tsx) ---
const mainCategoriesData = [
  "Academics",
  "Skill Development",
  "Brain Function",
  "Sports",
  "STEMnology",
  "Competition",
  "Extra curriculars",
];
const academicSubCategoriesData = [
  "Understanding Unitary Method – Level 1",
  "Numbers in Action – Sheet 1",
  "Everyday Maths – Skill Builder 1",
  "Stepwise Solutions – Worksheet A",
  "Think & Solve – Level 1",
  "Learning Ladder – Level 1",
]; // Added more for scrolling
const academicSubCategoriesData2 = [
  "Addition Mock Test",
  "Subtraction Mock Test",
  "Multiplication Mock Test",
  "Subtraction Mock Test  2",
  "Division Mock Test ",
  "Multiplication Mock Test 2",
]; // Added more for scrolling 
const academicSubCategoriesData3 = ["Math", "Science", "English"];
const contentTabsData = [
  "Learning",
  "Assessments",
  "Mock Papers",
  "Work Sheet",
];

const learningWeeksDataPage: LearningWeek[] = Array.from(
  { length: 5 },
  (_, i) => ({
    id: `week${i + 1}`,
    title: `Learning Videos ( Week 1 )`,
    videoCount: 3,
    videos: Array.from({ length: i === 0 ? 4 : 3 }, (_, j) => ({
      id: `v${i}-${j}`,
      topic: `Topic ${j + 1}`,
    })),
  })
);
const assessmentDataPage: AssessmentItemData[] = Array.from(
  { length: 5 },
  (_, i) => ({ id: `assess${i + 1}`, title: `Title`, resourcesCount: 3 })
);
const mockPapersDataPage: MockPaperItemData[] = Array(6)
  .fill(null)
  .map((_, i) => ({
    id: `mp${i + 1}`,
    title: `${academicSubCategoriesData2[i]}`,
  })); // Example dynamic title
const workSheetDataPage: WorkSheetItemData[] = Array(6)
  .fill(null)
  .map((_, i) => ({
    id: `ws${i + 1}`,
    title: `${academicSubCategoriesData[i]}`,
  }));
// --- End Sample Data ---

export default function MyClassAssesmentPage() {
  const [activeMainCategory, setActiveMainCategory] = useState(
    mainCategoriesData[0]
  );
  const [activeSubCategory, setActiveSubCategory] = useState(
    academicSubCategoriesData3[0]
  );
  const [activeContentTab, setActiveContentTab] = useState(contentTabsData[0]); // Default to Learning
  const [openAccordionIds, setOpenAccordionIds] = useState<string[]>([learningWeeksDataPage[0]?.id]);
  const [openModal, setOpenModal] = useState<string | null>(null);

  const [currentMonth, setCurrentMonth] = useState("June 2025");
  const [currentWeekFilter, setCurrentWeekFilter] = useState("Weekly"); // Matched original select default

  const headerUser = {
    name: "Shlok Agheda",
    role: "Student",
    avatarSrc: "/images/person.jpg",
  };

  const Router = useRouter();

  const handleAccordionToggle = (weekId: string) => {
    setOpenAccordionIds((prev) =>
      prev.includes(weekId)
        ? prev.filter((id) => id !== weekId)
        : [...prev, weekId]
    );
  };

  const getContentTitle = () => {
    if (activeContentTab === "Learning") return `Earth and Space Science`;
    if (activeContentTab === "Assessments") return `Startup Math Part 1`;
    if (activeContentTab === "Mock Papers")
      return `${activeSubCategory} Mock Papers`;
    if (activeContentTab === "Work Sheet")
      return `${activeSubCategory} Work Sheet`;
    return `${activeSubCategory} ${activeContentTab}`;
  };
  const getContentSubTitle = () => {
    if (activeContentTab === "Learning")
      return `Solar system, weather patterns, and basic understanding of the Earth.`;
    return null;
  };

  const renderActiveContent = () => {
    switch (activeContentTab) {
      case "Learning":
        return (
          <div className="space-y-3">
            {learningWeeksDataPage.map((week) => (
              <LearningAccordion
                key={week.id}
                week={week}
                isOpen={openAccordionIds.includes(week.id)}
                onToggle={() => handleAccordionToggle(week.id)}
              />
            ))}
          </div>
        );
      case "Assessments":
        return (
          <div className="space-y-3">
            {assessmentDataPage.map((assessment) => (
              <AssessmentItem key={assessment.id} assessment={assessment} onClick={() => Router.push("/b2c-student/student-flow/startup-math")} />
            ))}
          </div>
        );
      case "Mock Papers":
        return (
          <div className="space-y-3">
            {mockPapersDataPage.map((item) => (
              <MockPaperItem key={item.id} item={item} onClick={() => Router.push("/b2c-student/student-flow/mock-papers-3")} />
            ))}
          </div>
        );
      case "Work Sheet":
        return (
          <div className="space-y-3">
            {workSheetDataPage.map((item) => (
              <WorkSheetItem key={item.id} item={item} onClick={() => Router.push("/b2c-student/student-flow/my-class-worksheet-3")} />
            ))}
          </div>
        );
      default:
        return (
          <div className="text-center py-10 text-gray-500">
            {activeContentTab} content goes here.
          </div>
        );
    }
  };

  return (
    <StudentWrapper>
      <div className="bg-[#eeeeee] min-h-screen flex flex-col">
        <main className="flex-col w-full mx-auto p-3 sm:p-4 md:p-6 lg:p-8">
      <RequestTeacherChangeModal
        isOpen={openModal === "requestChangeSingle"}
        onClose={() => setOpenModal(null)}
        variant={"singleCourse"}
        setOpenModal={setOpenModal}
      />
      <TeacherProfileModal
        isOpen={openModal === "teacherProfile"}
        onClose={() => setOpenModal("requestChangeSingle")}
        setOpenModal={setOpenModal}
      />
      <VideoPlayerPopup
        isOpen={openModal === "videoPlayer"}
        onClose={() => setOpenModal("teacherProfile")}
      />
          <div className="mb-4">
            <OptimizedCategoryTabsBar
              categories={mainCategoriesData}
              activeCategory={activeMainCategory}
              onCategoryClick={(category) => setActiveMainCategory(category)}
            />
          </div>
          <div className="mx-auto max-w-[96rem]">
            <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
              <div className="md:col-span-1 lg:col-span-1 space-y-4">
                {" "}
                {/* Sidebar takes 1 col on md and lg */}
                <SubCategorySidebar
                  subCategories={academicSubCategoriesData3} // This would be dynamic based on activeMainCategory
                  activeSubCategory={activeSubCategory}
                  onSubCategoryClick={setActiveSubCategory}
                />
                {activeContentTab === "Learning" && <FillForm setOpenModal={setOpenModal} />}
              </div>
              <div className="md:col-span-3 lg:col-span-4">
                {" "}
                {/* Content takes remaining cols */}
                <ContentDisplayArea
                  contentTabs={contentTabsData}
                  activeContentTab={activeContentTab}
                  onContentTabClick={setActiveContentTab}
                  currentWeekFilter={currentWeekFilter}
                  onWeekFilterChange={(e) => setCurrentWeekFilter(e.target.value)}
                  currentMonth={currentMonth}
                  contentTitle={getContentTitle()}
                  contentSubtitle={getContentSubTitle()}
                >
                  {renderActiveContent()}
                </ContentDisplayArea>
              </div>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </StudentWrapper>
  );
}


// --- Base Modal Component (for reuse) ---
interface BaseModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  maxWidth?: string; // e.g., 'max-w-md', 'max-w-4xl'
}

// this can be import as a prop
const BaseModal: React.FC<BaseModalProps> = ({
  isOpen,
  onClose,
  children,
  maxWidth,
}) => {
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleEsc);
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      window.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "auto";
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          onClick={onClose}
          className="fixed inset-0 z-50 bg-[#0000004a] overflow-y-auto"
        >
          <div className="flex flex-col min-h-screen justify-center items-center p-4">
            <motion.div
              onClick={(e) => e.stopPropagation()}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className={`bg-white rounded-3xl w-full ${maxWidth} overflow-hidden h-fit my-auto`}
            >
              {children}
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>

  );
};

// --- 1. Request Teacher Change Modal ---
interface RequestTeacherChangeModalProps {
  isOpen: boolean;
  onClose: () => void;
  variant: "singleCourse" | "knowledgeBox";
  setOpenModal: React.Dispatch<React.SetStateAction<string | null>>
}
const RequestTeacherChangeModal: React.FC<RequestTeacherChangeModalProps> = ({
  isOpen,
  onClose,
  variant,
  setOpenModal
}) => {
  const [selectedTeacherId, setSelectedTeacherId] = useState<string | null>(
    "t1"
  );
  const teachers = [
    {
      id: "t1",
      name: "Teacher Name",
      specialty: "Specialty",
      description: "Description",
      education: "Education",
      rating: 4,
    },
    {
      id: "t2",
      name: "Teacher Name",
      specialty: "Specialty",
      description: "Description",
      education: "Education",
      rating: 5,
    },
    {
      id: "t3",
      name: "Teacher Name",
      specialty: "Specialty",
      description: "Description",
      education: "Education",
      rating: 4,
    },
  ];

  const FormGroup: React.FC<{ label: string; children: React.ReactNode }> = ({
    label,
    children,
  }) => (
    <div>
      <label className="block text-sm font-semibold text-gray-800 mb-2">
        {label}
      </label>
      {children}
    </div>
  );

  const TeacherCard: React.FC<
    (typeof teachers)[0] & { isSelected: boolean; onSelect: () => void, setOpenModal: React.Dispatch<React.SetStateAction<string | null>> }
  > = ({
    name,
    specialty,
    description,
    education,
    rating,
    isSelected,
    onSelect,
    setOpenModal
  }) => (
      <div
        onClick={onSelect}
        className={`bg-[#F9FAFB] px-4  h-[360px] py-4 relative rounded-3xl border-2 transition-all cursor-pointer text-center ${isSelected
          ? "bg-blue-500 text-white shadow-lg"
          : "border-gray-200 hover:border-gray-300"
          }`}
      >
        {" "}
        <button
          onClick={() => setOpenModal("teacherProfile")}
          className={`absolute  right-2 w-8 h-8 bg-[#E5E7EB] rounded-full flex items-center justify-center shadow  ${isSelected
            ? "bg-blue-500 text-white shadow-lg"
            : "bg-[#E5E7EB]  text-[#6B7280] "
            }`}
        >
          <FiInfo className="   w-6 h-6" />
        </button>
        <div className="relative w-28 h-28 mx-auto">
          <Image
            src="/images/person.jpg"
            alt={name}
            layout="fill"
            className="rounded-full object-cover"
          />
        </div>
        <div
          className={`flex flex-col font-poppins items-start ${isSelected ? "bg-blue-500 text-white" : "  "
            }`}
        >
          <h4 className="text-[32px] font-medium mt-3">{name}</h4>
          <p
            className={`text-[22px]  mt-1 ${isSelected ? " text-yellow-400 " : " text-pink-500 "
              }`}
          >
            {specialty}
          </p>
          <p className="text-[22px] text-gray-500">{description}</p>
          <p className="text-[22px] text-gray-500">{education}</p>

          <div className="flex justify-center mt-2">
            {[...Array(5)].map((_, i) => (
              <FiStar
                key={i}
                className={`w-4 h-4 ${i < rating ? "text-yellow-400 fill-current" : "text-gray-300"
                  }`}
              />
            ))}
          </div>
        </div>
      </div>
    );

  return (
    <BaseModal isOpen={isOpen} onClose={onClose} maxWidth="max-w-4xl">
      <div className="p-8">
        <h2 className="text-2xl font-bold text-center mb-8">
          Request Teacher Change
        </h2>
        <div className="flex flex-col space-y-4">
          <FormGroup label="Course Name">
            <input
              type="text"
              disabled
              className="w-full bg-gray-100 border border-gray-300 rounded-full px-4 py-2.5"
              value="Course Name"
            />
          </FormGroup>
          <FormGroup label="Subject">
            <div className="relative">
              <select className="w-full appearance-none bg-gray-100 border border-gray-300 rounded-full px-4 py-2.5 pr-8">
                <option>Maths</option>
                <option>Science</option>
              </select>
              <FiChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" />
            </div>
          </FormGroup>
          <FormGroup label="Current Teacher">
            <input
              type="text"
              disabled
              className="w-full bg-gray-100 border border-gray-300 rounded-full px-4 py-2.5"
              value="Text"
            />
          </FormGroup>
        </div>
        <div className="mt-4">
          <h3 className="text-sm font-semibold text-gray-800 mb-4">
            Select New Teacher
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {teachers.map((teacher) => (
              <TeacherCard
                key={teacher.id}
                {...teacher}
                isSelected={selectedTeacherId === teacher.id}
                onSelect={() => setSelectedTeacherId(teacher.id)}
                setOpenModal={setOpenModal}
              />
            ))}
          </div>
        </div>
        <div className="mt-8">
          <FormGroup label="Reason for Change">
            <textarea
              placeholder="Briefly describe why you're requesting a change..."
              rows={4}
              className="w-full  border text-[#6B7280] border-[#D5D5D5] rounded-2xl px-4 py-2.5 resize-none"
            ></textarea>
          </FormGroup>
        </div>
        <div className="flex justify-center gap-4 mt-8">
          <button
            onClick={onClose}
            className="px-10 py-3 bg-gray-200 text-gray-800 font-semibold rounded-full hover:bg-gray-300 transition-colors"
          >
            Discard
          </button>
          <button
            onClick={onClose}
            className="px-10 py-3 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition-colors">
            Submit
          </button>
        </div>
      </div>
    </BaseModal>
  );
};

// --- 3. Teacher Profile Modal ---
interface TeacherProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  setOpenModal: React.Dispatch<React.SetStateAction<string | null>>
}
const TeacherProfileModal: React.FC<TeacherProfileModalProps> = ({
  isOpen,
  onClose,
  setOpenModal
}) => {
  // Sub-components for clarity

  const InfoTag = ({
    icon1,
    text1,
    icon2,
    text2,
  }: {
    icon1: React.ReactNode;
    text1: string;
    icon2: React.ReactNode;
    text2: string;
  }) => {
    return (
      <div className="flex items-center gap-3">
        {/* Tag 1: Experience */}
        <div className="flex items-center gap-1 bg-[#DFF3FF] text-[#3B82F6] px-4 py-1.5 rounded-full text-sm font-medium">
          {icon1}
          <span>{text1}</span>
        </div>

        {/* Tag 2: Email */}
        <div className="flex items-center gap-1 bg-[#D4F5E7] text-black px-4 py-1.5 rounded-full text-sm font-medium">
          {icon2}
          <span>{text2}</span>
        </div>
      </div>
    );
  };
  const Section: React.FC<{
    title: string;
    children: React.ReactNode;
    className?: string;
  }> = ({ title, children, className }) => (
    <div className={className}>
      <div className="flex gap-1">
        <button className="py-2 px-1 text-[#3366FF]"></button>
        <h3 className="text-base text-[#3366FF] font-bold mb-3 flex items-center gap-2">
          {title}
        </h3>
      </div>
      <div className="text-gray-600 text-sm leading-relaxed space-y-2">
        {children}
      </div>
    </div>
  );
  const QualificationItem: React.FC<{
    course: string;
    school: string;
    year: string;
    logo: string;
  }> = ({ course, school, year }) => (
    <div className="flex items-center gap-4">
      <Image
        src={"/images/popups/std1.png"}
        alt="school logo"
        width={40}
        height={40}
        className="w-10 h-10 object-contain"
      />
      <div>
        <p className="font-semibold text-black">{course}</p>
        <p className="text-black">{school}</p>
        <p className="text-xs text-gray-400">{year}</p>
      </div>
    </div>
  );
  const ReviewItem: React.FC<{
    name: string;
    role: string;
    review: string;
  }> = ({ name, role, review }) => (
    <div className="bg-[#F3F4F6] p-4 rounded-2xl shadow-md">
      <div className="flex items-start gap-4">
        <img
          src="/images/popups/usergirl.png"
          alt="customer"
          className="w-14 h-14 rounded-full object-cover"
        />
        <div className="flex-1">
          <p className="text-sm font-semibold text-gray-900">{name}</p>
          <p className="text-xs text-gray-500 mb-1">{role}</p>
          <div className="flex items-center text-yellow-400 mb-2">
            {[...Array(5)].map((_, i) => (
              <FiStar key={i} className="w-4 h-4 fill-current" />
            ))}
          </div>
        </div>
      </div>
      <div>
        {" "}
        <p className="text-xs text-gray-600 leading-relaxed">{review}</p>
      </div>
    </div>
  );

  return (
    <BaseModal isOpen={isOpen} onClose={onClose} maxWidth="max-w-6xl">
      <div className="p-6">
        <button
          onClick={onClose}
          className="flex items-center font-Poppins gap-2 font-semibold text-[#FF3366] mb-6 hover:text-black"
        >
          <FiArrowLeft /> Back
        </button>

        {/* Profile Header */}
        <div className="flex gap-4">
          <div className="flex flex-col space-y-6 w-1/2  rounded-2xl px-4 py-4  bg-white">
            {/* Left side of header */}
            <div className="flex flex-col    items-center lg:items-start text-center lg:text-left">
              <div className=" flex gap-6 ">
                <Image
                  src="/images/person.jpg"
                  alt="Ronak Mathur"
                  width={100}
                  height={100}
                  className="rounded-full mb-4"
                />
                <div className="flex flex-col">
                  <h2 className="text-2xl  font-Poppins font-bold">
                    Ronak Mathur
                  </h2>
                  <p className="text-pink-500 mb-2">Role</p>
                  <div className="flex text-yellow-400 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <FiStar key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex justify-center gap-2 mb-4">
                <InfoTag
                  icon1={<IoStatsChartSharp size={16} />}
                  text1="6 years"
                  icon2={<CiMail size={16} />}
                  text2="example@ggm.com"
                />
              </div>
              <button onClick={() => setOpenModal("videoPlayer")} className="w-full bg-[#FF3366] text-white font-semibold py-3 rounded-full flex items-center justify-center gap-2">
                <FiPlayCircle /> Watch Demo Video
              </button>
            </div>
            {/* Right side of header */}
            <div className="space-y-6">
              <h3 className="font-bold mb-3">Availability</h3>
              <div className="bg-[#F9FAFB] p-4 text-[#6B7280] rounded-xl">
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Monday, Wednesday, Friday</span>
                    <span>10 AM - 1 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span>2 PM - 5 PM</span>
                  </div>
                </div>
              </div>
              <div className=" p-4 rounded-xl">
                <h3 className="font-bold mb-3">About</h3>
                <ul className="list-disc list-inside text-sm text-black space-y-1">
                  <li>Mauris feugiat diam non convallis dictum.</li>
                  <li>Integer tempor dolor imperdiet porttitor finibus.</li>
                  <li>Mauris feugiat diam non convallis dictum.</li>
                  <li>Integer tempor dolor imperdiet porttitor finibus.</li>
                  <li>Mauris feugiat diam non convallis dictum.</li>
                  <li>Integer tempor dolor imperdiet porttitor finibus.</li>
                </ul>
              </div>
            </div>
          </div>
          {/* flex box -2 */}

          <div className="bg-white rounded-2xl p-4  w-1/4 ">
            <h3 className="font-bold mb-4">Qualification</h3>
            <div className="space-y-4">
              <QualificationItem
                course="Course / std"
                school="School / College Name"
                year="2000 - 2000"
                logo="/images/school-logo-1.png"
              />
              <QualificationItem
                course="Course / std"
                school="School / College Name"
                year="2000 - 2000"
                logo="/images/school-logo-2.png"
              />
            </div>
          </div>
          <div className="bg-white p-4 rounded-xl  w-1/4 flex flex-col min-h-0">
            <h3 className="font-bold mb-4">Reviews</h3>
            <div className="flex-1 space-y-3 overflow-y-auto custom-scrollbar -mr-2 pr-2">
              <ReviewItem
                name="Customer Name"
                role="Student / Parent"
                review="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin fringilla, enim rhoncus tincidunt facilisis."
              />
              <ReviewItem
                name="Customer Name"
                role="Student / Parent"
                review="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin fringilla, enim rhoncus tincidunt facilisis."
              />
            </div>
          </div>
        </div>

        {/* Main Content Body */}

        <div className="space-y-6 bg-white rounded-2xl p-4 ">
          <Section title="My Core Teaching Philosophy">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              tristique rhoncus risus, nec sagittis sapien bibendum non. Aenean
              suscipit, tortor sed tempor ornare, purus enim aliquet sapien,
              vitae fringilla ipsum massa in justo. Maecenas venenatis mauris
              vitae ligula tincidunt volutpat. Fusce id enim velit. Fusce
              ornare, nulla ut malesuada sagittis, libero sem aliquam tortor,
              vel aliquet nisi mauris a nisl. Nam vestibulum egestas nibh sit
              amet malesuada. Proin erat risus, mollis in metus vestibulum,
              auctor maximus metus. Morbi ac dictum sem. Nullam vitae congue
              tellus. Class aptent taciti sociosqu ad litora torquent per
              conubia nostra, per inceptos himenaeos. Etiam aliquam nisi quis
              nisi tincidunt, nec aliquam lectus gravida. Pellentesque varius
              purus vel dignissim pulvinar. Proin viverra elit eget leo dictum
              aliquam. Nam ornare arcu sed pretium ornare. Vestibulum vel
              dignissim dolor.
            </p>
          </Section>{" "}
        </div>
        <div className="bg-white rounded-2xl mt-4">
          <Section title="Pedagogy">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              tristique rhoncus risus, nec sagittis sapien bibendum non. Aenean
              suscipit, tortor sed tempor ornare, purus enim aliquet sapien,
              vitae fringilla ipsum massa in justo. Maecenas venenatis mauris
              vitae ligula tincidunt volutpat. Fusce id enim velit. Fusce
              ornare, nulla ut malesuada sagittis, libero sem aliquam tortor,
              vel aliquet nisi mauris a nisl. Nam vestibulum egestas nibh sit
              amet malesuada. Proin erat risus, mollis in metus vestibulum,
              auctor maximus metus. Morbi ac dictum sem. Nullam vitae congue
              tellus. Class aptent taciti sociosqu ad litora torquent per
              conubia nostra, per inceptos himenaeos. Etiam aliquam nisi quis
              nisi tincidunt, nec aliquam lectus gravida. Pellentesque varius
              purus vel dignissim pulvinar. Proin viverra elit eget leo dictum
              aliquam. Nam ornare arcu sed pretium ornare. Vestibulum vel
              dignissim dolor.
            </p>
          </Section>
        </div>
      </div>
    </BaseModal>
  );
};