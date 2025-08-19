"use client";
import mapImage from "@/public/mapImage.png";
import Image from "next/image";
import mainLogo from "@/public/mianLogo2.png";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa";
import { JSX } from "react";

export default function Footer2() {
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
    };

    return icons[type] || null;
  };

  return (
    <div className="w-screen relative flex flex-col bg-[#3466ff] items-center justify-between bg-cover bg-center bg-no-repeat">
      <footer className="text-white pt-6 w-full px-6 md:px-28">
        <div className="container mx-auto py-6 md:py-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-10">
            {/* Logo and Description Column */}
            <div className="md:col-span-1">
              <div className="h-[40px] w-auto object-contain mb-3">
                <Image
                  src={mainLogo}
                  alt="EduNique Logo"
                  className="h-full w-auto object-contain"
                  priority
                />
              </div>
              <p className="text-sm mb-5 text-white/90">
                Lorem ipsum is simply dummy text of the printing and typesetting
                industry. Lorem ipsum has been the industry&apos;s standard
                dummy a type specimen book.
              </p>
              <div className="flex space-x-3">
                {/* Social Media Icons */}
                {[
                  { bg: "bg-white", icon: "facebook", color: "text-blue-600" },
                  {
                    bg: "bg-gradient-to-r from-purple-500 to-pink-500",
                    icon: "instagram",
                    color: "text-white",
                  },
                  { bg: "bg-[#00AFF0]", icon: "twitter", color: "text-white" },
                  { bg: "bg-black", icon: "tiktok", color: "text-white" },
                  { bg: "bg-red-600", icon: "youtube", color: "text-white" },
                ].map((social, index) => (
                  <a
                    key={index}
                    href="#"
                    className={`${social.bg} rounded-full p-1.5 flex items-center justify-center shadow-md hover:shadow-lg transition-shadow`}
                  >
                    <SocialIcon
                      type={social.icon}
                      className={`w-4 h-4 ${social.color}`}
                    />
                  </a>
                ))}
              </div>
            </div>

            {/* Company Column */}
            <div className="ml-0 md:ml-8 md:col-span-1">
              <h3 className="text-xl font-medium mb-3 relative pl-0">
                <span className="relative">
                  Company
                  <span className="absolute bottom-[-5px] left-0 h-[2px] bg-white/60 w-12" />
                </span>
              </h3>
              <ul className="space-y-2">
                {[
                  "About Us",
                  "Blogs",
                  "Courses",
                  "DMIT Test",
                  "Become a Future School",
                  "Subscription Plan",
                ].map((item, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="hover:underline flex items-center group transition-all duration-300"
                    >
                      <span className="text-white/80 mr-2 group-hover:text-white">
                        •
                      </span>{" "}
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support Column */}
            <div className="md:col-span-1">
              <h3 className="text-xl font-medium mb-3 relative pl-0">
                <span className="relative">
                  Support
                  <span className="absolute bottom-[-5px] left-0 h-[2px] bg-white/60 w-12" />
                </span>
              </h3>
              <ul className="space-y-2">
                {["FAQ", "Privacy", "Terms and Conditions", "Contact"].map(
                  (item, index) => (
                    <li key={index}>
                      <a
                        href="#"
                        className="hover:underline flex items-center group transition-all duration-300"
                      >
                        <span className="text-white/80 mr-2 group-hover:text-white">
                          •
                        </span>{" "}
                        {item}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </div>

            {/* Contact Info Column */}
            <div className="md:col-span-1">
              <h3 className="text-xl font-medium mb-3 relative pl-0">
                <span className="relative">
                  Contact Info
                  <span className="absolute bottom-[-5px] left-0 h-[2px] bg-white/60 w-12" />
                </span>
              </h3>
              <div className="mb-3">
                <div className="overflow-hidden rounded-lg mb-2">
                  <Image
                    src={mapImage}
                    alt="Location Map"
                    priority
                    className="w-full rounded-lg transform transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <p className="text-sm text-white/90">
                  Eldeco Centre, Malviya Nagar WeWork Eldeco Centre, Malviya
                  Nagar Eldeco Centre, Block A, Shivalik Colony, Malviya Nagar,
                  Delhi, DL 110017
                </p>
              </div>
              <div className="space-y-2 text-sm">
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
                  <p key={index} className="flex flex-wrap items-start">
                    <strong className="mr-2">{item.label}</strong>
                    <span className="text-white/90 hover:underline cursor-pointer">
                      {item.value}
                    </span>
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Copyright */}
      <div className="border-t w-full text-white border-blue-400">
        <div className="container mx-auto px-4 py-3 text-center">
          <p className="text-white/80 hover:text-white transition-colors duration-300">
            © EDUNIQUE All Right Reserved, 2022-2025
          </p>
        </div>
      </div>
    </div>
  );
}
