"use client";
import mapImage from "@/public/mapImage.png";
import Image from "next/image";
import { FiSend } from "react-icons/fi";
import mainLogo from "@/public/mianLogo2.png";

import { motion } from "framer-motion";

export default function Footer() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };
  const linkHover = {
    hover: {
      x: 5,
      color: "#fff",
      transition: { duration: 0.2 },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="relative flex w-screen flex-col items-center justify-between bg-[#3466ff] bg-cover bg-center bg-no-repeat"
    >
      <div className="absolute top-0 z-40 flex min-h-80 w-full translate-y-[-100%] justify-center text-white">
        <div className="relative top-40 flex min-h-24 w-full max-w-6xl items-center justify-between overflow-hidden rounded-2xl bg-[#f9346d] p-4 px-16 shadow-xl">
          <svg
            className="absolute top-0 left-0 h-28 w-28 sm:h-40 sm:w-40"
            viewBox="0 0 100 100"
          >
            <motion.circle
              cx="30"
              cy="20"
              r="45"
              fill="none"
              stroke="white"
              strokeWidth="1"
              pathLength="1"
              initial={{ pathOffset: 1 }}
              animate={{ pathOffset: 0 }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear",
              }}
            />
            <motion.circle
              cx="20"
              cy="30"
              r="45"
              fill="none"
              stroke="white"
              strokeWidth="1"
              pathLength="1"
              initial={{ pathOffset: 0 }}
              animate={{ pathOffset: 1 }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          </svg>
          <svg
            className="absolute top-0 right-0 h-28 w-28 sm:h-40 sm:w-40"
            viewBox="0 0 100 100"
          >
            <motion.circle
              cx="90"
              cy="30"
              r="45"
              fill="none"
              stroke="white"
              strokeWidth="1"
              pathLength="1"
              initial={{ pathOffset: 1 }}
              animate={{ pathOffset: 0 }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear",
              }}
            />
            <motion.circle
              cx="80"
              cy="20"
              r="45"
              fill="none"
              stroke="white"
              strokeWidth="1"
              pathLength="1"
              initial={{ pathOffset: 0 }}
              animate={{ pathOffset: 1 }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          </svg>

          {/* Central content */}
          <div className="flex w-full flex-col items-center justify-center">
            <motion.h2
              initial={{ y: -20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="mb-2 text-center text-lg font-bold md:text-3xl"
            >
              Subscribe to our newsletter
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="mb-8 text-center md:mb-12"
            >
              Lorem ipsum is simply dummy text of the printing.
            </motion.p>

            {/* Email input and button */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="xs:max-w-xs mx-auto flex w-full justify-center rounded-full bg-white p-1 shadow-lg sm:max-w-md sm:flex-row md:max-w-md"
            >
              <input
                type="email"
                placeholder="Email Address"
                className="min-w-0 flex-grow rounded-l-full px-3 py-2 text-sm text-gray-800 outline-none sm:rounded-l-full sm:px-6 sm:py-3 sm:text-base"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex flex-shrink-0 cursor-pointer items-center justify-center gap-1 rounded-full bg-[#FFCC00] p-3 text-sm font-bold whitespace-nowrap text-white transition-all duration-300 hover:bg-[#262623] sm:px-8 sm:py-3 sm:text-base"
              >
                <FiSend className="block text-lg sm:hidden" />{" "}
                {/* Icon on mobile */}
                <span className="hidden sm:block">Send</span>{" "}
                {/* Text on larger screens */}
              </motion.button>
            </motion.div>
          </div>

          {/* Right side with light bulb */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="absolute right-12 bottom-12 hidden md:block"
          >
           <Image src={"/bulb.png"}
           alt="bulb"
           height={100}
           width={100}/>
          </motion.div>
        </div>
      </div>
      <footer className="font-main w-full px-6 pt-36 text-white md:px-28 md:pt-40">
        <div className="container mx-auto py-8">
          <motion.div
            variants={staggerChildren}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4"
          >
            {/* Logo and Description Column */}
            <motion.div variants={fadeInUp} className="md:col-span-1">
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="mb-4 h-[40px] w-auto object-contain"
              >
                <Image
                  src={mainLogo}
                  alt="EduNique Logo"
                  className="h-full w-auto object-contain"
                  priority
                />
              </motion.div>
              <motion.p
                variants={fadeInUp}
                className="mb-6 text-sm text-white/90"
              >
                Lorem ipsum is simply dummy text of the printing and typesetting
                industry. Lorem ipsum has been the industry&apos;s standard
                dummy a type specimen book.
              </motion.p>
              <div className="flex space-x-3">
                {/* Social Media Icons */}

                <Image
                  src={"/footer/facebook.png"}
                  alt="facebook"
                  width={66}
                  height={66}
                  className="h-8 w-8 text-blue-600"
                  priority
                />

                <Image
                  src={"/footer/instagram.png"}
                  alt="facebook"
                  width={66}
                  height={66}
                  className="h-8 w-8 text-blue-600"
                  priority
                />

                <Image
                  src={"/footer/telegram.png"}
                  alt="facebook"
                  width={66}
                  height={66}
                  className="h-8 w-8 text-blue-600"
                  priority
                />

                <Image
                  src={"/footer/x.png"}
                  alt="facebook"
                  width={66}
                  height={66}
                  className="h-8 w-8 text-blue-600"
                  priority
                />

                <Image
                  src={"/footer/youtube.png"}
                  alt="facebook"
                  width={66}
                  height={66}
                  className="h-8 w-8 text-blue-600"
                  priority
                />
              </div>
            </motion.div>

            {/* Company Column */}
            <motion.div
              variants={fadeInUp}
              className="ml-0 md:col-span-1 md:ml-8"
            >
              <motion.h3
                variants={fadeInUp}
                className="relative mb-4 pl-0 text-xl font-medium"
              >
                <span className="relative">Company</span>
              </motion.h3>
              <motion.ul variants={staggerChildren} className="space-y-3">
                {[
                  "About Us",
                  "Blogs",
                  "Courses",
                  "DMIT Test",
                  "Become a Future School",
                  "Subscription Plan",
                ].map((item, index) => (
                  <motion.li key={index} variants={fadeInUp}>
                    <motion.a
                      href="#"
                      initial="initial"
                      whileHover="hover"
                      variants={linkHover}
                      className="group flex items-center text-sm text-white/90 transition-all duration-300 hover:underline"
                    >
                      <span className="mr-2 text-white/80 group-hover:text-white">
                        •
                      </span>{" "}
                      {item}
                    </motion.a>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>

            {/* Support Column */}
            <motion.div variants={fadeInUp} className="md:col-span-1">
              <motion.h3
                variants={fadeInUp}
                className="relative mb-4 pl-0 text-xl font-medium"
              >
                <span className="relative">Support</span>
              </motion.h3>
              <motion.ul variants={staggerChildren} className="space-y-3">
                {["FAQ", "Privacy", "Terms and Conditions", "Contact"].map(
                  (item, index) => (
                    <motion.li key={index} variants={fadeInUp}>
                      <motion.a
                        href="#"
                        initial="initial"
                        whileHover="hover"
                        variants={linkHover}
                        className="group flex items-center text-sm text-white/90 transition-all duration-300 hover:underline"
                      >
                        <span className="mr-2 text-white/80 group-hover:text-white">
                          •
                        </span>{" "}
                        {item}
                      </motion.a>
                    </motion.li>
                  ),
                )}
              </motion.ul>
            </motion.div>

            {/* Contact Info Column */}
            <motion.div variants={fadeInUp} className="md:col-span-1">
              <motion.h3
                variants={fadeInUp}
                className="relative mb-4 pl-0 text-xl font-medium"
              >
                <span className="relative">Contact Info</span>
              </motion.h3>
              <motion.div variants={fadeInUp} className="mb-4">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 10 }}
                  className="mb-2 overflow-hidden rounded-lg"
                >
                  <Image
                    src={mapImage}
                    alt="Location Map"
                    priority
                    className="w-full transform rounded-lg transition-transform duration-500 hover:scale-110"
                  />
                </motion.div>
                <motion.p variants={fadeInUp} className="text-sm text-white/90">
                  Eldeco Centre, Malviya Nagar WeWork Eldeco Centre, Malviya
                  Nagar Eldeco Centre, Block A, Shivalik Colony, Malviya Nagar,
                  Delhi, DL 110017
                </motion.p>
              </motion.div>
              <motion.div
                variants={staggerChildren}
                className="space-y-2 text-sm"
              >
                {[
                  { label: "Phone:", value: "(+91) 922-044-2129" },
                  {
                    label: "Email for Queries or Info:",
                    value: "info@edunique.in",
                  },
                  {
                    label: "Email for Support or Concerns:",
                    value: "support@us.edunique.in",
                  },
                  {
                    label: "Email for Careers:",
                    value: "joinus@edunique.in",
                  },
                ].map((item, index) => (
                  <motion.p
                    key={index}
                    variants={fadeInUp}
                    className="flex flex-wrap items-start"
                  >
                    <strong className="mr-2">{item.label}</strong>
                    <motion.span
                      whileHover={{ color: "#f9326f" }}
                      className="cursor-pointer text-[#8FDDAA] hover:underline"
                    >
                      {item.value}
                    </motion.span>
                  </motion.p>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </footer>

      {/* Copyright Bar */}
      <motion.div
        variants={fadeInUp}
        className="w-full border-t border-blue-400 text-white"
      >
        <div className="container mx-auto px-4 py-4 text-center">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.5 }}
            className="text-white/80 transition-colors duration-300 hover:text-white"
          >
            © EDUNIQUE All Right Reserved, 2022-2025
          </motion.p>
        </div>
      </motion.div>
    </motion.div>
  );
}
