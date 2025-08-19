"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Bell,
  ArrowLeft,
  MessageCircle,
  Video,
  Bot,
  Smile,
  LayoutGrid,
  Database,
} from "lucide-react";
import AskMeAnything from "@/app/b2c-student/pop-ups/popupComponent/AskMeAnything";

export default function StudentNavbarNew({ activeState = "My Learnings" }: { activeState?: string }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openModal, setOpenModal] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    {
      href: "/b2c-phase-3/b2c-student/student-flow/dashboard",
      label: "My Learnings",
      icon: Smile,
    },
    {
      href: "/b2c-phase-3/b2c-student/student-flow/my-course",
      label: "My course",
      icon: LayoutGrid,
    },
    {
      href: "/b2c-phase-3/b2c-student/student-flow/courses/course-material",
      label: "Material",
      icon: Database,
    },
    {
      href: "/b2c-phase-3/b2c-student/student-flow/chat-page",
      label: "Chat",
      icon: MessageCircle,
    },
    {
      href: "/b2c-phase-3/b2c-student/student-flow/recording",
      label: "Recordings",
      icon: Video,
    },
  ];

  return (
    <header
      className={`sticky top-0 z-[999] w-full transition-all duration-300 ${isScrolled ? "shadow-md" : ""
        }`}
    >
      <AskMeAnything
        isOpen={openModal === "AskMeAnything"}
        onClose={() => setOpenModal(null)}
      />
      <nav className="bg-[#3366FF] text-white pt-5">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="flex items-center justify-between gap-2 h-16">
            {/* Left Side - Logo and Back Arrow */}
            <div className="flex items-center space-x-4">
              {/* Logo */}
              <Link href="/" className="flex-shrink-0">
                <div className="relative h-10 w-32">
                  <Image
                    src="/mianLogo2.png"
                    alt="EduHub Logo"
                    fill
                    className="object-contain"
                  />
                </div>
              </Link>
            </div>

            <div className="hidden md:flex items-center space-x-2 xl:space-x-4">
              <button onClick={() => {
                if (typeof window !== "undefined") {
                  window.history.back();
                }
              }} className="p-2 cursor-pointer bg-white/10 rounded-full transition-colors">
                <ArrowLeft className="h-5 w-5" />
              </button>
              {/* Center - Navigation Items */}
              <div className="flex items-center space-x-2 xl:space-x-4 bg-[#E3F2FD26] rounded-full p-1">
                {navItems.map((item) => {
                  const IconComponent = item.icon;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`flex items-center space-x-1 xl:space-x-2 px-2 xl:px-4 py-2 rounded-full transition-all duration-200 ${activeState === item.label
                        ? "text-[#FFCC00]"
                        : "hover:bg-white/10"
                        }`}
                    >
                      <IconComponent className="xl:h-5 xl:w-5 h-4 w-4" />
                      <span className="font-medium text-nowrap lg:block hidden lg:text-sm xl:text-base">{item.label}</span>
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Right Side - Actions */}
            <div className="flex items-center space-x-3">
              {/* Ask me button */}
              <button onClick={()=>setOpenModal("AskMeAnything")} className="hidden sm:flex items-center space-x-2 bg-[#E3F2FD26] text-black px-1 xl:px-2 py-1 xl:py-2 rounded-full font-medium">
                <Image
                  src="/chatbot_icon.png"
                  alt="chatbot icon"
                  width={32}
                  height={32}
                  className=""
                />
                <span className="text-sm xl:text-base text-white">Ask me!</span>
              </button>

              {/* Notification Bell */}
              <Link href="/b2c-phase-3/b2c-student/student-flow/notification">
                <button className="p-2 hover:bg-white/10 rounded-full transition-colors relative">
                  <Bell className="h-5 w-5" />
                </button>
              </Link>

              {/* Profile Picture */}
              <Link href="/b2c-phase-3/b2c-student/student-flow/profile-view" className="relative h-11 w-11 rounded-full overflow-hidden ">
                <Image
                  src="/images/person.jpg"
                  alt="User profile"
                  fill
                  className="object-cover"
                />
              </Link>

              {/* Mobile menu button */}
              <button
                className="md:hidden p-2 rounded-md hover:bg-white/10 transition-colors"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d={
                      isMobileMenuOpen
                        ? "M6 18L18 6M6 6l12 12"
                        : "M4 6h16M4 12h16M4 18h16"
                    }
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div
            className={`md:hidden transition-all duration-300 overflow-hidden ${isMobileMenuOpen ? "max-h-96 pb-4" : "max-h-0"
              }`}
          >
            <div className="space-y-2">
              {navItems.map((item) => {
                const IconComponent = item.icon;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 ${activeState === item.label
                      ? "text-[#FFCC00]"
                      : "hover:bg-white/10"
                      }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <IconComponent className="h-5 w-5" />
                    <span className="font-medium">{item.label}</span>
                  </Link>
                );
              })}

              {/* Mobile Ask me button */}
              <button onClick={()=>setOpenModal("AskMeAnything")} className="flex items-center space-x-3 bg-yellow-400 text-black px-4 py-3 rounded-lg hover:bg-yellow-300 transition-colors font-medium w-full">
                <Bot className="h-5 w-5" />
                <span>Ask me!</span>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
