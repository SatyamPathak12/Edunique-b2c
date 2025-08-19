"use client";

import Image from "next/image";
import { motion, HTMLMotionProps } from "framer-motion";
import OverImage1 from "@/public/overImage1.png";
import OverImage2 from "@/public/overImage2.png";
import OverImage3 from "@/public/overImage3.png";
import OverImage4 from "@/public/overImage4.png";
import Banner1 from "@/public/Banner1.png";
import Banner2 from "@/public/Banner2.png";
import Banner3 from "@/public/Banner3.png";
import Banner4 from "@/public/Banner4.png";
import Banner5 from "@/public/Banner5.png";
import Testinomials from "@/components/testimonials";
import { ReactNode } from "react";
import Footer from "@/components/footer";
import MaxWidthWrapper from "@/components/admin/max-width-wrapper";
import {
  BookOpen,
  Brain,
  Users,
  Activity,
  UserCheck,
  Layers,
  Clock,
  ChevronRight,
} from "lucide-react";
import { useState, useEffect } from "react";
import StudentNavbar from "@/components/student-navbar";
import { FaPhoneAlt, FaEnvelope, FaFacebookF, FaInstagram, FaTelegramPlane, FaTwitter, FaYoutube } from "react-icons/fa";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};
const cardHover = {
  hover: {
    y: -8,
    boxShadow:
      "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
    transition: { type: "spring", stiffness: 400, damping: 10 },
  },
};
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function Landing() {
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    setIsLoaded(true);
  }, []);
  const blogPosts = [
    {
      id: 1,
      title:
        "Top Non Academic Courses: Paving Way for Successful Youth Development",
      description:
        "You don&apos;t need special tools to make your children talented, just a little nudge in the right direction can do wonders!",
      image: "/cardImage1.png",
      author: "Alex Liones",
      authorImage: "/alexProfile.png",
      date: "28 Aug 2020",
      categories: ["CRAFT", "POTTERY", "YOGA", "THEATRE"],
    },
    {
      id: 2,
      title: "Significance of Early Childhood Educational Programs",
      description:
        "You don&apos;t need special tools to make your children talented, just a little nudge in the right direction can do wonders!",
      image: "/cardImage2.png",
      author: "Alex Liones",
      authorImage: "/alexProfile.png",
      date: "28 Aug 2020",
      categories: [],
    },
    {
      id: 3,
      title: "Importance of Customized & Individualized Learning for Kids",
      description:
        "You don&apos;t need special tools to make your children talented, just a little nudge in the right direction can do wonders!",
      image: "/cardImage3.png",
      author: "Alex Liones",
      authorImage: "/alexProfile.png",
      date: "28 Aug 2020",
      categories: [],
    },
    {
      id: 4,
      title:
        "Top Non Academic Courses: Paving Way for Successful Youth Development",
      description:
        "You don&apos;t need special tools to make your children talented, just a little nudge in the right direction can do wonders!",
      image: "/cardImage4.png",
      author: "Alex Liones",
      authorImage: "/alexProfile.png",
      date: "28 Aug 2020",
      categories: ["CRAFT", "POTTERY", "YOGA", "THEATRE"],
    },
  ];
  const featureCards = [
    {
      id: 1,
      bgColor: "bg-[#ffb3c0]",
      icon: <Brain className="h-5 w-5 text-[#f9326f]" />,
      title: "Cognitive Enrichment Activities",
      items: [
        "Brain games (e.g., puzzles, memory challenges)",
        "Logic and reasoning exercises",
        "STEAM-based projects",
      ],
    },
    {
      id: 2,
      bgColor: "bg-[#a8e1ff]",
      icon: <BookOpen className="h-5 w-5 text-[#3366ff]" />,
      title: "Skill-Based Learning Modules",
      items: [
        "Critical thinking & problem-solving",
        "Communication & collaboration",
        "Creativity & innovation",
        "Time management and organization",
      ],
    },
    {
      id: 3,
      bgColor: "bg-[#b3f0c7]",
      icon: <Users className="h-5 w-5 text-[#22c55e]" />,
      title: "Social-Emotional Development",
      items: [
        "Mindfulness & self-regulation practices",
        "Conflict resolution activities",
        "Empathy-building games and discussions",
      ],
    },
    {
      id: 4,
      bgColor: "bg-[#ffd4b3]",
      icon: <Activity className="h-5 w-5 text-[#f97316]" />,
      title: "Physical & Sensory Engagement",
      items: [
        "Movement breaks (e.g., yoga, dance)",
        "Activities to strengthen motor coordination",
        "Brain-body connection exercises",
      ],
    },
    {
      id: 5,
      bgColor: "bg-[#a8e1ff]",
      icon: <UserCheck className="h-5 w-5 text-[#3366ff]" />,
      title: "Personalized Learning Paths",
      items: [
        "Assessments to identify strengths and needs",
        "Customized learning activities",
        "Progress tracking & feedback sessions",
      ],
    },
    {
      id: 6,
      bgColor: "bg-[#ffb3c0]",
      icon: <Layers className="h-5 w-5 text-[#f9326f]" />,
      title: "Interactive Learning Environment",
      items: [
        "Hands-on experiments and projects",
        "Peer collaboration activities",
        "Use of technology for gamified learning",
      ],
    },
  ];
  const cardData = [
    {
      id: 1,
      title: "Membership Plans",
      description:
        "EduNique Membership Plans provide a wide Academic to extra curricular to Skill Development Programs. Take on the future, step by step.",
      image: "/Card1.png",
      buttonText: "Explore Now!",
    },
    {
      id: 2,
      title: "Parents Choice",
      description:
        "Parents trust Edunique for its balanced approach—combining academics, life skills, & brain development to support their child&apos;s all-round growth.",
      image: "/Card2.png",
      buttonText: "Explore Now!",
    },
    {
      id: 3,
      title: "Child Profiling & Mentor Program",
      description:
        "Unlock Your Child&apos;s True Potential with Deep Personal Insights, Expert Profiling & 1:1 Mentorship Tailored for Holistic Growth.",
      image: "/Card3.png",
      buttonText: "Explore Now!",
    },
    {
      id: 4,
      title: "Subscribe to Self Directed Learning(Worksheets & Videos)",
      description:
        "Learn anytime, anywhere — with content that&apos;s practical, actionable, and made just for you.",
      image: "/Card4.png",
      buttonText: "Explore Now!",
    },
    {
      id: 5,
      title: "Become a Future School",
      description:
        "Lead the in modern, self-driven education. Empower your students with innovative tools, flexible learning, and real-world skills.",
      image: "/Card5.png",
      buttonText: "Explore Now!",
    },
  ];
  interface ActionButtonProps extends HTMLMotionProps<"button"> {
    children: ReactNode;
    className?: string;
  }
  const ActionButton = ({
    children,
    className = "",
    ...props
  }: ActionButtonProps) => (
    <motion.button
      className={`bg-[#f9326f] text-white font-medium px-6 py-2 rounded-full hover:bg-[#c20840] transition-colors duration-300 cursor-pointer ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      {...props}
    >
      {children}
    </motion.button>
  );
  const ViewMoreButton = ({ className = "" }) => (
    <motion.button
      className={`bg-[#f9326f] text-white px-4 py-2 text-sm rounded-full hover:bg-[#ff1a5f] cursor-pointer flex items-center ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      View More <ChevronRight className="ml-1 h-4 w-4" />
    </motion.button>
  );

  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const phoneNumber = '+0931-705-3875'

  return (
    <div>
      <nav className="sticky top-0 left-0 w-full z-50 flex flex-col">
        {/* Top Bar (1/3 of total height => 40px) */}
        <div className="flex-1 bg-[#F9326F] text-white py-[0.3rem] px-[8vw] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-0 min-h-[40px]">
          {/* Left: Contact */}
          <div className="flex flex-col sm:flex-row flex-wrap justify-center items-start sm:items-center gap-2 sm:gap-6">
            {/* Phone */}
            <a href={`tel:${phoneNumber}`} className="flex items-center gap-2 no-underline">
              <div className="w-[28px] h-[28px] rounded-full flex items-center justify-center bg-[#ff5e8e] text-white text-sm shadow-md">
                <FaPhoneAlt />
              </div>
              <span className="font-bold tracking-wide text-xs sm:text-sm break-all">
                {phoneNumber.split('').map((char, index) => (
                  <span key={index} className={`relative px-[0.3px] ${index % 2 === 0 ? '-top-[0.5px]' : 'top-[0.7px]'}`}>
                    {char}
                  </span>
                ))}
              </span>
            </a>

            {/* Email */}
            <a href="mailto:ElizabethJ@jourrapide.com" className="flex items-center gap-2 no-underline">
              <div className="w-[28px] h-[28px] rounded-full flex items-center justify-center bg-[#ff5e8e] text-white text-sm shadow-md">
                <FaEnvelope />
              </div>
              <span className="font-bold tracking-wide text-xs sm:text-sm break-all">ElizabethJ@jourrapide.com</span>
            </a>
          </div>

          {/* Right: Social */}
          <div className="flex justify-center sm:justify-end gap-2 sm:gap-4 items-center">
            {[FaFacebookF, FaInstagram, FaTelegramPlane, FaTwitter, FaYoutube].map((Icon, index) => {
              const bgColors = ['#3b5998', '#E4405F', '#0088cc', '#444', '#FF0000']
              return (
                <a
                  key={index}
                  className="w-[24px] h-[24px] flex items-center justify-center rounded-t-full rounded-bl-full text-white text-xs"
                  style={{ backgroundColor: bgColors[index] }}
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://facebook.com">
                  <Icon />
                </a>
              )
            })}
          </div>
        </div>
      </nav>

      <StudentNavbar isLanding={true} />
      {/* Page 1 - Hero Section */}
      <div
        className="bg-cover bg-center bg-no-repeat"
        style={{
          // minHeight: "calc(100vh - 7.5rem)",
          backgroundImage: "url('/Background1.png')",
        }}
      >
        <MaxWidthWrapper className="flex w-full flex-col items-center justify-between gap-6 px-6 md:flex-row md:gap-3 md:px-[9%]">
          {/* LEFT SECTION */}
          <motion.div
            className="flex w-full flex-col justify-center gap-6 px-4 py-12 text-white md:w-1/2 md:px-12"
            variants={fadeInUp}
          >
            <motion.div
              className="text-3xl leading-snug font-bold md:text-4xl"
              variants={fadeInUp}
            >
              <motion.span
                className="inline-block text-3xl md:text-5xl"
                role="img"
                aria-label="light bulb"
                animate={{
                  rotateZ: [-15, 0, -15],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                💡
              </motion.span>
              <br />
              Knowledge Connection <br />
              Open the Door to <br />
              the Future
            </motion.div>

            <motion.p
              className="text-sm leading-relaxed text-white/90 md:text-base"
              variants={fadeInUp}
            >
              Giving every student the opportunity to access the best education
              and open the door to the world of knowledge.
              <br />
              <br />
              Start your learning journey today with <strong>
                EduNique
              </strong>{" "}
              to become an outstanding student in our learning community.
            </motion.p>

            <motion.div variants={fadeInUp}>
              <ActionButton>Get Started !</ActionButton>
            </motion.div>
          </motion.div>

          {/* RIGHT SECTION */}
          <motion.div
            className="flex w-full items-center justify-center overflow-hidden p-6 md:w-1/2 md:p-12"
            variants={fadeInUp}
          >
            <Image
              src={OverImage1}
              alt="Education illustration"
              className="h-auto w-full max-w-[460px] object-contain"
              priority
            />
          </motion.div>
        </MaxWidthWrapper>
      </div>

      {/* Page 2 - Globally Recognized */}
      <div className="relative flex w-full flex-col overflow-hidden">
        {/* Background Layer */}
        <div
          className="absolute inset-0 z-0 bg-center bg-repeat"
          style={{
            backgroundImage: "url('/Background2.png')",
            backgroundSize: "400px",
            filter: "grayscale(10%) brightness(1.1) blur(0.5px) opacity(0.5)",
            opacity: 0.3,
          }}
        ></div>

        {/* Foreground Content */}
        <div className="relative z-10 flex h-full w-full flex-col items-center gap-6 px-4 pt-12">
          <motion.h1
            className="text-center text-2xl font-semibold text-black md:text-4xl"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Globally Recognized Interactive Education
          </motion.h1>

          {/* Image takes remaining space */}
          <motion.div
            className="flex w-full flex-grow items-center justify-center overflow-hidden"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Image
              src={OverImage2}
              alt="Education Graphic"
              className="h-full max-h-full w-auto object-contain"
              priority
            />
          </motion.div>
        </div>
      </div>

      {/* Page 3 - About Us */}
      <div className="relative flex min-h-[calc(100vh-7.5rem)] w-full flex-col overflow-hidden px-4 md:px-24">
        {/* Background Layer */}
        <div
          className="absolute inset-0 z-0 bg-center bg-repeat"
          style={{
            backgroundImage: "url('/Background2.png')",
            backgroundSize: "400px",
            filter: "grayscale(10%) brightness(1.1) blur(0.5px) opacity(0.5)",
            opacity: 0.3,
          }}
        ></div>

        {/* Foreground Content */}
        <div className="relative z-10 flex h-full w-full flex-col items-center gap-6 p-6 px-0 sm:px-4 md:p-12 md:px-8">
          <motion.h1
            className="mb-6 text-center text-3xl font-bold text-black md:text-4xl"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            About Us
          </motion.h1>

          <motion.div
            className="flex flex-col space-y-4 rounded-xl md:flex-row md:space-y-0 md:space-x-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="md:w-1/3"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src={Banner1}
                alt="Eduunique Card Image"
                width={1100}
                priority
                className="rounded-4xl shadow-md"
              />
            </motion.div>
            <div className="flex flex-col justify-center px-4 md:w-2/3 md:px-12">
              <h2 className="mb-2 text-xl font-bold">{`Welcome to Edunique!`}</h2>
              <p className="mb-4 text-gray-700">{`We are an AI mapped personalised, comprehensive after-school program designed for children aged 3 to 16 years, being a one stop solution for parents we offering a diverse range of 31 programs across Building Academic Foundation , Not so extra circular activities , Skill Development, and Brain Development for a child.`}</p>
              <h3 className="mb-2 text-xl font-semibold">{`What Makes Edunique Unique?`}</h3>
              <p className="text-gray-600">{`Our strength lies in understanding the unique educational needs of each child and parent. We provide individualized education plans, top-class content, world-class test series, and highly trained teachers. Every child receives a perfect blend of academic support and life-skill development to help them excel both in school and beyond.`}</p>
            </div>
          </motion.div>

          <motion.div
            className="flex flex-col space-y-4 rounded-xl md:flex-row md:space-y-0 md:space-x-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col justify-center px-4 md:w-2/3 md:px-12">
              <h2 className="mb-2 text-2xl font-bold">
                Academic Foundation Programs (11 Courses)
              </h2>
              <p className="mb-4 text-gray-700">
                We don&apos;t just help children score well in school exams—we
                build strong foundations for Olympiads, Debates, Quizzes, and
                other competitive platforms.
              </p>
              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-600">
                <li>
                  Classes are 50 minutes, one-on-one or group classes of 60
                  mins, and fully customized.
                </li>
                <li>
                  We use a unique Pedagogy Chart after a child has given a
                  Diagnostic test to design the right path for each student.
                </li>
                <li>
                  Next step? Visit our website and complete the Admission
                  Process form. We&apos;ll take it from there by understanding
                  your needs and setting expectations.
                </li>
              </ul>
            </div>
            <motion.div
              className="md:w-1/3"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src={Banner2}
                alt="Eduunique Card Image"
                width={1100}
                className="rounded-4xl shadow-md"
                priority
              />
            </motion.div>
          </motion.div>

          <motion.div
            className="flex flex-col space-y-4 rounded-xl md:flex-row md:space-y-0 md:space-x-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="md:w-1/3"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src={Banner3}
                alt="Eduunique Card Image"
                width={1100}
                priority
                className="rounded-4xl shadow-md"
              />
            </motion.div>
            <div className="flex flex-col justify-center px-4 md:w-2/3 md:px-12">
              <h2 className="mb-2 text-2xl font-bold">Non-Academic Programs</h2>
              <p className="mb-4 text-gray-700">
                From Art, Craft, Dance, Music, Pottery, and more, we offer
                creative programs tailored to your child&apos;s interests.
              </p>
              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-600">
                <li>
                  Choose from one-on-one sessions or small group batches (5–8
                  students).
                </li>
                <li>
                  Pricing ranges from ₹1500 to ₹2500, depending on course and
                  batch size.
                </li>
                <li>
                  A counsellor will guide you through the right program and
                  pricing after your initial form submission.
                </li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            className="flex flex-col space-y-4 rounded-xl md:flex-row md:space-y-0 md:space-x-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col justify-center px-4 md:w-2/3 md:px-12">
              <h2 className="mb-2 text-2xl font-bold">
                Skill Development Programs
              </h2>
              <p className="mb-4 text-gray-700">
                We offer customized, individual-focused courses in:
              </p>
              <ul className="mb-2 list-disc space-y-2 pl-5 text-gray-600">
                <li>Personality Development</li>
                <li>Technology Programs</li>
                <li>Parent Coaching</li>
                <li>Life Skills Enhancement for Children</li>
              </ul>
              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-600">
                <li>
                  After understanding your goals and expectations, we will share
                  class details, curriculum, and pricing.
                </li>
                <li>
                  Start by booking a counselling session and filling out the
                  interest form.
                </li>
              </ul>
            </div>
            <motion.div
              className="md:w-1/3"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src={Banner4}
                alt="Eduunique Card Image"
                width={1100}
                priority
                className="rounded-4xl shadow-md"
              />
            </motion.div>
          </motion.div>

          <motion.div
            className="flex flex-col space-y-4 rounded-xl md:flex-row md:space-y-0 md:space-x-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="md:w-1/3"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src={Banner5}
                alt="Eduunique Card Image"
                width={1100}
                priority
                className="rounded-4xl shadow-md"
              />
            </motion.div>
            <div className="flex flex-col justify-center px-4 md:w-2/3 md:px-12">
              <h2 className="mb-2 text-2xl font-bold">
                Brain Development Programs
              </h2>
              <p className="mb-4 text-gray-700">
                These programs are designed to boost:
              </p>
              <ul className="mb-2 list-disc space-y-2 pl-5 text-gray-600">
                <li>Memory</li>
                <li>Exam Performance</li>
                <li>Critical Thinking</li>
                <li>Logical Reasoning</li>
              </ul>
              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-600">
                <li>
                  Courses start at ₹2999, and we offer demo sessions every
                  weekend.
                </li>
                <li>
                  A diagnostic + counselling session is required to customize
                  your child&apos;s learning path.
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Page 4 - Quality & Results */}
      <div
        className="flex w-full flex-col items-center justify-between gap-6 bg-cover bg-center bg-no-repeat px-0 sm:px-6 md:flex-row md:gap-3 md:px-[9%]"
        style={{
          backgroundImage: "url('/Background3.png')",
        }}
      >
        <div className="relative z-10 flex h-full w-full flex-col items-center gap-6 px-4 py-6 sm:py-12">
          <h1 className="text-center text-2xl font-semibold text-black md:text-4xl">
            How We Ensure Quality & Guarantee Results!
          </h1>

          {/* Image takes remaining space */}
          <div className="flex w-full items-center justify-center overflow-hidden">
            <Image
              src={OverImage3}
              alt="Quality and Results Banner"
              className="h-auto max-h-[70vh] w-full object-contain"
              priority
            />
          </div>
        </div>
      </div>

      {/* Page 5 - Features */}
      <div
        className="relative flex min-h-[calc(100vh-7.5rem)] w-full flex-col justify-start bg-[#6633ff] px-4 pt-8 pb-8 md:px-[7%]"
        style={{
          backgroundBlendMode: "difference",
          backgroundSize: "calc",
        }}
      >
        {/* Father and child image */}
        <motion.div
          className="absolute bottom-0 left-0 z-10 hidden md:block"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Image
            src="/fatherChild.png"
            alt="Father and child playing"
            width={600}
            height={700}
            className="object-contain"
            priority
          />
        </motion.div>

        {/* Header section */}
        <div className="z-20 mb-4 flex w-full flex-col items-center justify-between md:mb-6 md:flex-row">
          <motion.h1
            className="mb-3 text-4xl font-bold text-white md:mb-0 md:text-5xl"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Our Features
          </motion.h1>
          <ViewMoreButton />
        </div>

        {/* Features grid - no scroll, slight overflow allowed */}
        <motion.div
          className="z-20 pr-2 pb-2 md:ml-auto md:w-3/5"
          initial="hidden"
          whileInView="visible"
          variants={staggerContainer}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {featureCards.map((card) => (
              <motion.div
                key={card.id}
                className={`${card.bgColor} rounded-xl p-4 shadow-lg transition-shadow duration-300 hover:shadow-xl`}
                variants={fadeInUp}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="mb-2 flex items-center">
                  <motion.div
                    className="mr-2 rounded-lg bg-white p-1.5"
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  >
                    {card.icon}
                  </motion.div>
                  <h3 className="text-lg font-semibold">{card.title}</h3>
                </div>
                <ul className="list-disc space-y-1 pl-5 text-sm">
                  {card.items.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Page 6 - Quality & Results (Second) */}
      <div
        className="bg-cover bg-center bg-no-repeat py-10 sm:px-6"
        style={{
          backgroundImage: "url('/Background4.png')",
        }}
      >
        <div className="relative z-10 flex h-full w-full flex-col items-center gap-6 px-4">
          <h1 className="text-center text-2xl font-semibold text-black md:text-4xl">
            Benefits of Online Education
          </h1>

          {/* Image takes remaining space */}
          <div>
            <Image
              src={OverImage4}
              alt="Banner"
              className="h-auto max-h-[70vh] w-full object-contain"
              priority
            />
          </div>
        </div>
      </div>

      {/* page7 */}
      <div className="relative flex min-h-screen w-screen justify-around bg-gradient-to-r from-[#fcdecf] to-[#fdc1d7] pt-16">
        <div className="w-full p-4 pb-20 sm:max-w-5/7">
          {cardData.map((card, index) => (
            <div
              key={card.id}
              className="relative mb-8 w-full overflow-hidden rounded-3xl shadow-lg transition-all duration-300"
            >
              {/* Background Image */}
              <div className="absolute inset-0 h-full w-full">
                <Image
                  src={card.image}
                  alt={`Card background ${index + 1}`}
                  fill
                  className="object-fit"
                  priority
                />
              </div>

              {/* Content */}
              <div className="relative z-10 h-40 p-8 sm:h-64 md:p-12"></div>
            </div>
          ))}
        </div>
        {/* 7 footer */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.3 }}
          className="absolute bottom-0 z-40 flex min-h-36 w-full justify-center text-white"
        >
          <div className="relative top-18 flex min-h-24 w-full max-w-5/7 flex-col items-center justify-between rounded-2xl bg-[#3366ff] p-4 px-6 shadow-xl md:flex-row md:px-16">
            <div className="text-xl md:text-2xl">
              <h1 className="mb-4 text-center md:text-left">
                Not sure where to begin? Talk to an Expert
              </h1>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex cursor-pointer items-center rounded-full bg-[#f9326f] px-4 py-2 text-sm text-white transition-all duration-300 hover:bg-[#ff1a5f]"
              >
                Contact Now <span className="ml-1">›</span>
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* page 8 */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="flex w-screen items-center justify-between bg-white bg-cover bg-center bg-no-repeat pt-24"
        style={{
          minHeight: "calc(100vh - 7.5rem)",
        }}
      >
        <Testinomials />
      </motion.div>

      {/* page 9 */}
      <div
        className="relative flex w-screen flex-col items-center justify-between gap-12 bg-[#a4d9ff] bg-cover bg-center bg-no-repeat px-4 py-16 pb-52 sm:px-12 md:px-28"
        style={{
          minHeight: "calc(100vh - 7.5rem)",
        }}
      >
        <div className="flex w-full flex-col items-center justify-between md:flex-row">
          <div className="mb-6 flex flex-col justify-between gap-4 text-black md:mb-0">
            <h1 className="font-adlam text-3xl font-bold md:text-5xl">
              From Our Blog
            </h1>

            <div className="relative">
              <Image
                src={"/arrow.png"}
                width={306}
                height={329}
                alt="arrow"
                className="absolute -top-9 left-1/3 z-10 h-32 w-32 -translate-x-1/2"
              />
              <p className="relative z-20 mt-4 w-full text-xs md:w-5/7">
                Proin ac lobortis arcu, a vestibulum augue. Vivamus ipsum neque,
                mollis nec ante. Quisque aliquam dictum.
              </p>
            </div>
          </div>
          <motion.button
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
            custom={1}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex cursor-pointer items-center rounded-lg bg-[#f9326f] px-4 py-2 text-sm text-nowrap text-white transition-all duration-300 hover:bg-[#ff1a5f]"
          >
            View More <span className="ml-1">›</span>
          </motion.button>
        </div>
        <div className="mx-auto w-full max-w-7xl">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {blogPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                viewport={{ once: true, amount: 0.3 }}
                custom={index + 2}
                className="overflow-hidden rounded-2xl bg-white shadow-md transition-all duration-300"
              >
                {/* Card image with category overlays */}
                <div className="relative h-48">
                  <Image
                    src={post.image}
                    alt={post.title}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                    priority
                  />
                </div>

                {/* Card content */}
                <div className="flex flex-col items-center p-5">
                  <h3 className="mb-2 line-clamp-2 text-lg font-bold text-gray-900 transition-colors duration-300 hover:text-[#3366ff]">
                    {post.title}
                  </h3>
                  <p className="mb-4 line-clamp-3 text-sm text-gray-600">
                    {post.description}
                  </p>

                  {/* Author and date */}
                  <div className="mt-4 mb-4 flex w-full items-center justify-between border-t">
                    <div className="flex items-center">
                      <div className="mr-2 h-8 w-8 overflow-hidden rounded-full">
                        <Image
                          src={post.authorImage}
                          alt={post.author}
                          width={32}
                          height={32}
                          className="object-cover"
                          priority
                        />
                      </div>
                      <span className="text-sm text-[#F9326F]">
                        {post.author}
                      </span>
                    </div>

                    <div className="flex items-center text-sm text-gray-500">
                      <Clock className="mr-1 h-4 w-4" />
                      <span>{post.date}</span>
                    </div>
                  </div>

                  {/* Read more button */}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex cursor-pointer items-center rounded-lg bg-[#3366ff] px-4 py-2 text-sm text-white transition-all duration-300 hover:bg-[#0040ff]"
                  >
                    Read More
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* page 10 */}
      <Footer />
    </div>
  );
}
