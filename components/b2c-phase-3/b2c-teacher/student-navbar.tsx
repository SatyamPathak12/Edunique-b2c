"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Bell, ShoppingCart } from "lucide-react";
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import SelectionCard from "@/app/b2c-phase-3/b2c-teacher/new-pop-ups/popupComponent/select-type"

export default function StudentNavbar({ activeState = "Home", isLanding = false }: { activeState?: string, isLanding?: boolean }) {
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

  const navLinks = [
    "/b2c-phase-3/b2c-teacher/teacher-flow/home",
    "/b2c-phase-3/b2c-teacher/teacher-flow/about-us",
    "/b2c-phase-3/b2c-teacher/teacher-flow/educator",
    "/b2c-phase-3/b2c-teacher/teacher-flow/courses",
    "/b2c-phase-3/b2c-teacher/teacher-flow/contact",
    "/b2c-phase-3/b2c-teacher/teacher-flow/dashboard",
  ];

  const navLabels = [
    "Home",
    "About",
    "Instructor List",
    "Courses List",
    "Contact",
    "My learnings",
  ];

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${isScrolled ? "shadow-md" : ""
        }`}
    >
      <nav className="bg-[#3366FF] text-white pt-4 px-8">
        <div className="w-full mx-auto xl:px-12">
          <div className="flex items-center justify-between h-17">
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
            <SelectionCard
              isOpen={openModal === "select"}
              onClose={() => setOpenModal(null)}
            />
            {/* Desktop Navigation */}
            <div className="hidden lg:flex lg:space-x-4 xl:space-x-8">
              {navLinks.map((href, idx) => (
                <Link
                  key={`${href}-${idx}`}
                  href={href}
                  className={`text-sm text-nowrap xl:text-base font-medium hover:text-gray-200 transition-colors duration-200 px-2 py-1.5 lg:px-3 lg:py-2 rounded-full ${navLabels[idx] === activeState ? "bg-white/20 bg-opacity-20" : ""
                    }`}
                >
                  {navLabels[idx]}
                </Link>
              ))}
            </div>

            {/* Right Side - User Actions */}
            <div className="flex items-center space-x-4">
              {!isLanding ?
                <>
                  <button className="group relative p-1.5 rounded-full hover:bg-white hover:bg-opacity-20 transition-colors">
                    <Bell className="h-5 w-5 group-hover:stroke-black" />
                    <span className="absolute top-0 right-0 h-2 w-2 bg-yellow-400 rounded-full"></span>
                  </button>

                  <button className="group relative p-1.5 rounded-full hover:bg-white hover:bg-opacity-20 transition-colors">
                    <ShoppingCart className="h-5 w-5 group-hover:stroke-black" />
                    <span className="absolute -top-1 -right-1 h-5 w-5 bg-yellow-400 rounded-full flex items-center justify-center text-xs text-black font-medium">
                      2
                    </span>
                  </button>

                  <div className="hidden sm:flex items-center gap-2">
                    <div className="relative h-12 w-12 rounded-full overflow-hidden">
                      <Image
                        src="/images/person.jpg"
                        alt="User profile"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </>
                :
                <button className={cn(buttonVariants({ variant: 'default' }), 'hover:bg-black/10 px-6 text-xs bg-[#f9326f] rounded-full')} onClick={() => setOpenModal("select")}>
                  Login
                </button>}

              {/* Mobile menu button */}
              <button
                className="lg:hidden p-2 rounded-md hover:bg-white/10 hover:bg-opacity-20 transition-colors"
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
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden transition-all duration-300 overflow-hidden ${isMobileMenuOpen ? "max-h-96" : "max-h-0"
            }`}
        >
          <div className="px-4 py-2 space-y-1 bg-[#3366FF]">
            <Link
              href="/b2c-student/student-flow/home"
              className="block py-2 hover:bg-black/10 px-3 rounded-md transition-colors duration-200"
            >
              Home
            </Link>
            <Link
              href="/b2c-student/student-flow/about-us"
              className="block py-2 hover:bg-black/10 px-3 rounded-md transition-colors duration-200"
            >
              About
            </Link>
            <Link
              href="/b2c-student/student-flow/educator"
              className="block py-2 hover:bg-black/10 px-3 rounded-md transition-colors duration-200"
            >
              Instructor List
            </Link>
            <Link
              href="/b2c-student/student-flow/courses"
              className="block py-2 hover:bg-black/10 px-3 rounded-md transition-colors duration-200"
            >
              Courses List
            </Link>
            <Link
              href="/b2c-student/student-flow/contact"
              className="block py-2 hover:bg-black/10 px-3 rounded-md transition-colors duration-200"
            >
              Contact
            </Link>
            <Link
              href="/b2c-student/student-flow/dashboard"
              className="block py-2 hover:bg-black/10 px-3 rounded-md transition-colors duration-200"
            >
              My learnings
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
