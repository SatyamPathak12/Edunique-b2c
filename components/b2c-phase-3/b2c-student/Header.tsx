"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {  FiMessageSquare, FiVideo, FiBell, FiMenu, FiX, FiGrid, FiDatabase } from "react-icons/fi";
import { FaRegSmile, FaArrowLeft } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

// --- DATA & TYPES ---
interface UserProfile {
  name: string;
  role: string;
  avatarSrc?: string;
}

interface HeaderProps {
  user: UserProfile;
  isAskme?: boolean;
}

const navItems = [
    { icon: FaRegSmile, label: "My Learnings", href: "/student-b2b/student-dashboard/dashboard" },
    { icon: FiGrid, label: "My course", href: "/student-b2b/student-dashboard/my-course" },
    { icon: FiDatabase, label: "Material", href: "/student-b2b/student-dashboard/material" },
    { icon: FiMessageSquare, label: "Chat", href: "/student-b2b/student-dashboard/chat" },
    { icon: FiVideo, label: "Recordings", href: "/student-b2b/student-dashboard/recording" },
];

// --- SUB-COMPONENTS (For a clean structure) ---

// NavItem for Desktop (Your original component, unchanged)
const NavItem = ({ icon: Icon, label, href, active = false }: { icon: React.ElementType; label: string; href: string; active?: boolean; }) => {
  const isMyCourse = label === "My course";
  const textColor = isMyCourse || active ? "text-[#FFCC00]" : "text-white";
  const hoverClass = isMyCourse ? "" : "hover:bg-[#3366FF]/70";

  return (
    <Link href={href} className={`flex items-center text-nowrap gap-2 sm:px-2 sm:py-2 text-xs sm:text-sm font-semibold rounded-full transition-colors ${textColor} ${hoverClass}`}>
      <Icon className={`w-5 h-3 sm:w-5 sm:h-5 ${isMyCourse ? "text-[#FFCC00]" : ""}`} />
      {label}
    </Link>
  );
};

// NavItem for Tablet (Icon-only)
const NavIconOnly = ({ icon: Icon, href, active = false }: { icon: React.ElementType; href: string; active?: boolean; }) => (
  <Link href={href} className={`p-2 rounded-full transition-colors ${active ? 'bg-[#3366FF]/70' : 'hover:bg-[#3366FF]/70'}`}>
      <Icon className={`w-5 h-5 ${active ? 'text-[#FFCC00]' : 'text-white'}`} />
  </Link>
);


// --- MAIN HEADER COMPONENT ---
export default function Header({ user, isAskme = true }: HeaderProps) {
  const pathname = usePathname();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="bg-[#3366FF] px-4 sm:px-6 text-white sticky top-0 z-50 shadow-md print:hidden">
        <div className="mx-auto h-20 flex justify-between items-center max-w-screen-2xl">
          
          {/* Left: Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <Image
                src="/page3/student_b2b/Clip path group.svg"
                alt="Edunique Logo"
                width={160} // Adjusted for better scaling
                height={32}
                className="w-32 md:w-40"
              />
            </Link>
          </div>

          {/* Center: Navigation (Adapts across screen sizes) */}
          <div className="flex items-center gap-2">
            
            {/* Desktop Navigation (Your exact design) */}
            <div className="hidden lg:flex items-center gap-2">
              <button className="bg-[#E3F2FD26] rounded-full p-3.5 text-white">
                <FaArrowLeft className="w-5 h-5" />
              </button>
              <nav className="flex items-center bg-[#E3F2FD26] rounded-full sm:px-4 sm:py-3">
                {navItems.map((item) => (
                  <NavItem key={item.label} {...item} active={pathname.startsWith(item.href)} />
                ))}
              </nav>
            </div>

            {/* Tablet Navigation (Icon only) */}
            <nav className="hidden md:flex lg:hidden items-center bg-[#E3F2FD26] rounded-full px-2 py-2 gap-1">
              {navItems.map((item) => (
                <NavIconOnly key={item.label} {...item} active={pathname.startsWith(item.href)} />
              ))}
            </nav>
          </div>

          {/* Right: Actions & Profile */}
          <div className="flex items-center space-x-2 md:space-x-4">
            {isAskme && (
              <button className="flex items-center gap-2 px-3 py-2 bg-[#E3F2FD26] text-white text-sm font-medium rounded-full hover:bg-white/30 transition-colors">
                <Image src="/page3/student_b2b/AI Button.svg" alt="Ask me bot" width={24} height={24} className="w-6 h-6"/>
                {/* Text is hidden on tablet, visible on desktop */}
                <span className="hidden lg:inline">Ask me!</span>
              </button>
            )}
            <button className="hidden md:block p-2 rounded-full hover:bg-[#3366FF]/70">
              <FiBell className="w-5 h-5" />
            </button>
            <Image
              src={user?.avatarSrc ?? "/page3/entry/pri.png"}
              alt={user?.name ?? "User"}
              width={40}
              height={40}
              className="w-10 h-10 rounded-full object-cover cursor-pointer"
            />
            {/* Hamburger Menu Button (Mobile/Tablet) */}
            <button className="md:hidden p-2" onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-[#3366FF] text-white p-4 space-y-2 absolute top-20 left-0 w-full z-40 shadow-lg"
          >
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center gap-3 w-full p-3 rounded-lg text-base font-medium ${pathname.startsWith(item.href) ? 'bg-black/20 text-[#FFCC00]' : ''}`}
              >
                <item.icon className={`w-5 h-5 ${pathname.startsWith(item.href) ? 'text-[#FFCC00]' : 'text-white'}`}/>
                {item.label}
              </Link>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}