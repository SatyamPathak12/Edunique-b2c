"use client";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaTiktok,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";

import { motion } from "framer-motion";
import type { JSX } from "react";

export default function FooterNew({
  showSuscriptionBlock = true,
}: {
  showSuscriptionBlock?: boolean;
}) {
  const SocialIcon = ({
    type,
    className,
  }: {
    type: string;
    className?: string;
  }) => {
    const icons: Record<string, JSX.Element> = {
      facebook: <FaFacebookF className={className} />,
      instagram: <FaInstagram className={className} />,
      twitter: <FaTwitter className={className} />,
      tiktok: <FaTiktok className={className} />,
      youtube: <FaYoutube className={className} />,
      linkedin: <FaLinkedinIn className={className} />,
    };

    return icons[type] || null;
  };

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
      color: "#93c5fd",
      transition: { duration: 0.2 },
    },
  };

  const socialIconHover = {
    hover: {
      y: -5,
      scale: 1.1,
      transition: { type: "spring" as const, stiffness: 300, damping: 10 },
    },
  };

  // Updated navigation structure to match new design
  const navigationLinks = {
    column1: [
      { name: "Home", href: "#" },
      { name: "About us", href: "#" },
      { name: "Academics", href: "#" },
      { name: "Co - Parent", href: "#" },
      { name: "STEAM", href: "#" },
      { name: "Forum", href: "#" },
      { name: "Franchises", href: "#" },
      { name: "Foundation", href: "#" },
    ],
    column2: [
      { name: "Skill Development", href: "#" },
      { name: "Brain Development", href: "#" },
      { name: "Schools Collaboration", href: "#" },
      { name: "Teacher Collaboration", href: "#" },
      { name: "Skill Development Centers", href: "#" },
      { name: "Notsoextra curricular", href: "#" },
      { name: "Summer Courses", href: "#" },
      { name: "Competitions", href: "#" },
      { name: "Steamnology", href: "#" },
    ],
    column3: [
      { name: "Products", href: "#" },
      { name: "Blogs", href: "#" },
      { name: "Privacy Policy", href: "#" },
      { name: "Shipping Policy", href: "#" },
      { name: "Terms & Conditions", href: "#" },
      { name: "Disclaimers", href: "#" },
    ],
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="w-screen relative flex flex-col bg-[#3366FFD9] items-center justify-between bg-cover bg-center bg-no-repeat"
    >
      {showSuscriptionBlock && (
        <div className="max-w-7xl  mx-auto z-40 min-h-65 w-full pb-4 absolute top-0 translate-y-[-100%] flex justify-center text-white">
          <div className="min-h-24 bg-[#FF3366] w-full p-4 rounded-2xl flex px-16 items-center justify-between overflow-hidden shadow-xl relative">
            {/* Background Layer */}
            <div
              className="absolute inset-0 bg-center bg-repeat z-0"
              style={{
                backgroundImage: 'url("/background6.png")',
                backgroundSize: "cover",
                filter: "brightness(1.2) opacity(.5) blur(0.2px)",
                opacity: 0.3,
              }}
            />
            <div className="absolute inset-0 bg-black/15 z-1" />

            {/* Central content */}
            <div className="absolute inset-0 z-10 flex flex-col mx-auto py-4 items-center justify-center w-full">
              <motion.h2
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="text-2xl md:text-4xl font-semibold mb-3 text-center"
              >
                Subscribe to our newsletter
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.9, duration: 0.6 }}
                className="text-center mb-6 md:mb-12"
              >
                Lorem ipsum is simply dummy text of the printing.
              </motion.p>

              {/* Email input and button */}
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ delay: 1, duration: 0.6 }}
                className="flex w-full max-w-md rounded-full p-2 overflow-hidden bg-white shadow-lg"
              >
                <input
                  type="email"
                  placeholder="Email Address"
                  className="flex-grow py-2 px-6 outline-none placeholder:text-[#6B7280] text-black"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-[#FFCC00] font-medium text-white rounded-full py-2 px-8 transition-all duration-300 hover:bg-[#262623] cursor-pointer"
                >
                  Send
                </motion.button>
              </motion.div>
            </div>
          </div>
        </div>
      )}

      <div
        style={{
          background: "url('/background_footer.png')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          width: "100%",
        }}
      >
        <footer className="text-white mx-auto pt-4 w-full px-6 md:px-0 max-w-7xl">
          <div className="container mx-auto py-8">
            <motion.div
              variants={staggerChildren}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8"
            >
              {/* Navigation Links Section */}
              <div className="lg:col-span-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  {/* Column 1 */}
                  <motion.div variants={fadeInUp}>
                    <motion.ul variants={staggerChildren} className="space-y-3">
                      {navigationLinks.column1.map((link, index) => (
                        <motion.li key={index} variants={fadeInUp}>
                          <motion.a
                            href={link.href}
                            initial="initial"
                            whileHover="hover"
                            variants={linkHover}
                            className="hover:underline flex items-center group transition-all duration-300 font-medium text-white/90 hover:text-white"
                          >
                            {link.name}
                          </motion.a>
                        </motion.li>
                      ))}
                    </motion.ul>
                  </motion.div>

                  {/* Column 2 */}
                  <motion.div variants={fadeInUp}>
                    <motion.ul variants={staggerChildren} className="space-y-3">
                      {navigationLinks.column2.map((link, index) => (
                        <motion.li key={index} variants={fadeInUp}>
                          <motion.a
                            href={link.href}
                            initial="initial"
                            whileHover="hover"
                            variants={linkHover}
                            className="hover:underline flex items-center group transition-all duration-300 font-medium text-white/90 hover:text-white"
                          >
                            {link.name}
                          </motion.a>
                        </motion.li>
                      ))}
                    </motion.ul>
                  </motion.div>

                  {/* Column 3 */}
                  <motion.div variants={fadeInUp}>
                    <motion.ul variants={staggerChildren} className="space-y-3">
                      {navigationLinks.column3.map((link, index) => (
                        <motion.li key={index} variants={fadeInUp}>
                          <motion.a
                            href={link.href}
                            initial="initial"
                            whileHover="hover"
                            variants={linkHover}
                            className="hover:underline flex items-center group transition-all duration-300 font-medium text-white/90 hover:text-white"
                          >
                            {link.name}
                          </motion.a>
                        </motion.li>
                      ))}
                    </motion.ul>
                  </motion.div>
                </div>
              </div>

              {/* Contact Information Section */}
              <motion.div variants={fadeInUp} className="lg:col-span-4">
                <div className="space-y-6">
                  {/* Map Image Placeholder */}
                  <motion.div
                    variants={fadeInUp}
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    className="relative"
                  >
                    <div className="w-full h-32 rounded-3xl overflow-hidden">
                      <div className="w-full h-full flex items-center justify-center">
                        <img
                          className="rounded-3xl h-full w-auto"
                          src="/map.png"
                          alt="map"
                        />
                      </div>
                    </div>
                  </motion.div>

                  {/* Contact Details */}
                  <motion.div variants={staggerChildren} className="space-y-4">
                    <motion.h2
                      variants={fadeInUp}
                      className="text-white font-medium"
                    >
                      Eldeco Centre, Malviya Nagar
                    </motion.h2>

                    <motion.div
                      variants={staggerChildren}
                      className="space-y-2"
                    >
                      <motion.p
                        variants={fadeInUp}
                        className="text-white mb-4  font-medium"
                      >
                        WeWork Eldeco Centre, Malviya Nagar, Eldeco centre,
                        <br />
                        Block A, Shivalik Colony, Malviya Nagar, Delhi, DL
                        110017
                      </motion.p>

                      <motion.p variants={fadeInUp}>
                        <motion.span
                          whileHover={{ color: "#93c5fd" }}
                          className="text-white hover:underline cursor-pointer  font-medium"
                        >
                          Phone: (+91) 922-044-2129
                        </motion.span>
                      </motion.p>

                      <motion.div
                        variants={staggerChildren}
                        className="space-y-1"
                      >
                        <motion.p variants={fadeInUp}>
                          <span className="text-white  font-medium">
                            Email for Queries or Info:
                          </span>{" "}
                          <motion.span
                            whileHover={{ color: "#93c5fd" }}
                            className="text-white hover:underline cursor-pointer  font-medium"
                          >
                            info@edunique.in
                          </motion.span>
                        </motion.p>
                        <motion.p variants={fadeInUp}>
                          <span className="text-white font-medium">
                            Email for Support or Concerns:
                          </span>{" "}
                          <motion.span
                            whileHover={{ color: "#93c5fd" }}
                            className="text-white hover:underline cursor-pointer font-medium"
                          >
                            supportyou@edunique.in
                          </motion.span>
                        </motion.p>
                        <motion.p variants={fadeInUp}>
                          <span className="text-white">Email for Careers:</span>{" "}
                          <motion.span
                            whileHover={{ color: "#93c5fd" }}
                            className="text-white hover:underline cursor-pointer  font-medium"
                          >
                            rightfit@edunique.in
                          </motion.span>
                        </motion.p>
                      </motion.div>
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </footer>

        <div className="max-w-7xl w-full mx-auto space-y-2 flex flex-col">
          {/* Copyright Bar */}
          <motion.div variants={fadeInUp} className="w-full text-white">
            <div className="container mx-auto px-4 border-blue-400 border-t py-2 text-center flex justify-between items-start">
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.5 }}
                className="text-white text-xs  font-medium"
              >
                Edunique All Rights Reserved 2025
              </motion.p>
              <motion.div
                variants={staggerChildren}
                className="flex mt-2 space-x-3 self-end"
              >
                {/* Updated Social Media Icons */}
                {[
                  {
                    bg: "bg-white",
                    icon: "instagram",
                    color: "text-[#3366FF]",
                  },
                  {
                    bg: "bg-white",
                    icon: "twitter",
                    color: "text-[#3366FF]",
                  },
                  {
                    bg: "bg-white",
                    icon: "linkedin",
                    color: "text-[#3366FF]",
                  },
                  {
                    bg: "bg-white",
                    icon: "facebook",
                    color: "text-[#3366FF]",
                  },
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href="#"
                    initial="initial"
                    whileHover="hover"
                    variants={socialIconHover}
                    className={`${social.bg} rounded-lg p-2 flex items-center justify-center shadow-md hover:shadow-lg transition-shadow`}
                  >
                    <SocialIcon
                      type={social.icon}
                      className={`w-6 h-6 ${social.color}`}
                    />
                  </motion.a>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
