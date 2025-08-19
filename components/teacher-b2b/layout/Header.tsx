
"use client";

import Image from "next/image";
import Link from "next/link";

import {
  FiMessageSquare,
  FiVideo,
  FiBell,
  FiMenu,
  FiX,
} from "react-icons/fi"; // Added FiMenu and FiX
import { FaRegSmile } from "react-icons/fa";
import { GoDatabase, GoPeople } from "react-icons/go";
import { useState } from "react"; // Import useState
import ChatPop from "@/components/common-components/askmeanything";

// Separate NavItem component - Can potentially accept an onClick for mobile menu closing
const NavItem = ({
  icon: Icon,
  label,
  href,
  active = false,
  onLinkClick, // Added prop to close mobile menu
}: {
  icon: React.ElementType;
  label: string;
  href: string;
  active?: boolean;
  onLinkClick?: () => void; // Optional handler for click
}) => (
  <Link
    href={href}
    className={`flex items-center gap-1 px-2 lg:gap-2 lg:px-3 py-2 text-sm font-semibold rounded-full transition-colors ${active ? "text-[#FFCC00]" : "text-white hover:bg-[#3366FF]/70"
      } `}
    onClick={onLinkClick} // Call the handler on click
  >
    <Icon className="w-5 h-5" />
    {label}
  </Link>
);

interface UserProfile {
  name: string;
  role: string;
  avatarSrc?: string;
}

interface HeaderProps {
  user: UserProfile;
  isAskme?: boolean;
  activeState?: string;
}

export default function Header({ user, isAskme = true, activeState = "" }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State for mobile menu
  const [isChatOpen, setIsChatOpen] = useState(false);

  const navItems = [
    {
      icon: FaRegSmile,
      label: "Dashboard",
      href: "/student-b2b/student-dashboard/dashboard",
    },
    {
      icon: GoPeople,
      label: "Students",
      href: "/student-b2b/student-dashboard/my-course",
    },
    {
      icon: GoDatabase,
      label: "Materials",
      href: "/student-b2b/student-dashboard/my-course", // Note: This href is the same as Students
    },
    {
      icon: FiVideo,
      label: "Recordings",
      href: "/student-b2b/student-dashboard/recording",
    },
    {
      icon: FiMessageSquare,
      label: "Chat",
      href: "/student-b2b/student-dashboard/chat",
    },
  ];

  // Function to close mobile menu
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`bg-[#3366FF] text-white sticky top-0 z-50 print:hidden `}>
      <div className={` mx-auto px-4 h-20 flex justify-between items-center max-w-screen-2xl`}>

        <div className=" flex items-center gap-4">

          {/* Mobile Menu Toggle Button (Hamburger) */}
          <div className="flex items-center lg:hidden ">
            {" "}
            {/* Show only on small screens */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="p-2 rounded-full hover:bg-[#3366FF]/70 focus:outline-none cursor-pointer"
              aria-label="Open menu"
            >
              <FiMenu className="w-6 h-6" />
            </button>
          </div>

          {/* Logo */}
          <div className="flex-shrink-0">
            <Image
              src="/page3/student_b2b/Clip path group.svg"
              alt="Edunique Logo"
              width={231}
              height={46}
              className="w-32 sm:w-40"
            />{" "}
            {/* Adjusted logo size for small screens */}
          </div>
        </div>

        {/* Main Navigation (Desktop) */}
        <nav className="hidden lg:flex items-center bg-[#E3F2FD1A] rounded-full sm:gap-2 font-medium px-1 py-2 ">
          {navItems.map(({ icon, label, href }) => (
            // NavItem doesn't need onLinkClick for desktop
            <NavItem
              key={label}
              icon={icon}
              label={label}
              href={href}
              active={label === activeState}
            />
          ))}
        </nav>

        {/* Right Side */}
        <div className="flex items-center space-x-2 lg:space-x-4">
          {isAskme && (
            <>
              <button
                type="button" // ⬅️ Important to prevent default form behavior
                onClick={() => setIsChatOpen(true)}
                className="flex items-center gap-1 py-2 px-2 sm:gap-2 sm:px-3 sm:py-2 bg-[#E3F2FD26] text-white text-xs sm:text-sm font-medium rounded-full hover:bg-white/30 transition-colors"
              >
                <Image
                  src="/page3/student_b2b/AI Button.svg"
                  alt="Ask me bot"
                  width={20}
                  height={20}
                  className="w-5 h-5 sm:w-8 sm:h-8"
                />
                <span className="hidden sm:inline">Ask me!</span>
                <span className="inline sm:hidden">AI</span>
              </button>

              {isChatOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 ">
                  <div className="relative w-[360px]  sm:w-[600px] md:w-[800px] max-w-[90vw]">
                    <ChatPop
                      onClose={() => {
                        console.log("Closing chat");
                        setIsChatOpen(false);
                      }}
                    />
                  </div>
                </div>
              )}
            </>
          )}


          <Link href="/teacher-b2b/teacher-flow/notification">
            <button
              className="p-2 cursor-pointer rounded-full hover:bg-[#3366FF]/70 focus:outline-none"
              aria-label="Notifications"
            >
              <FiBell className="w-5 h-5" />
            </button>
          </Link>

          <Image
            src={user.avatarSrc ?? "/page3/entry/pri.png"}
            alt={user.name}
            width={40}
            height={40}
            className="w-10 h-10 rounded-full object-cover hover:cursor-pointer"
          />
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40 lg:hidden"
          onClick={closeMobileMenu} // Close menu when clicking outside
          aria-hidden="true" // Hide overlay from screen readers
        ></div>
      )}

      {/* Mobile Menu Panel */}
      <div
        className={`fixed top-0 left-0 bottom-0 w-64 bg-[#3366FF] z-50 transition-transform duration-300 ease-in-out lg:hidden
                ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="p-4 border-b border-white/20 flex justify-between items-center">
          <Image
            src="/page3/student_b2b/Clip path group.svg"
            alt="Edunique Logo"
            width={150}
            height={30}
            className="w-32"
          />{" "}
          {/* Logo in menu */}
          <button
            onClick={closeMobileMenu}
            className="p-2 rounded-full hover:bg-white/20 focus:outline-none cursor-pointer"
            aria-label="Close menu"
          >
            <FiX className="w-6 h-6 text-white" />
          </button>
        </div>

        {/* Mobile Nav Items */}
        <nav className="flex flex-col p-4 space-y-2">
          {navItems.map(({ icon, label, href }) => (
            // Pass closeMobileMenu to NavItem for mobile
            <NavItem
              key={label}
              icon={icon}
              label={label}
              href={href}
              active={activeState === label}
              onLinkClick={closeMobileMenu} // Close menu after clicking a link
            />
          ))}
        </nav>

        {/* Optional: Add user info or other links here for mobile */}
        <div className="p-4 border-t border-white/20 mt-auto flex items-center gap-2">
          <Image
            src={user.avatarSrc ?? "/page3/entry/pri.png"}
            alt={user.name}
            width={32}
            height={32}
            className="w-8 h-8 rounded-full object-cover"
          />
          <div>
            <div className="text-sm font-semibold text-white">{user.name}</div>
            <div className="text-sm text-white">{user.role}</div>
          </div>
        </div>
      </div>
    </header>
  );
}
