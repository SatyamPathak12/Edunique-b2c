"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuSeparator,
  DropdownMenuItem,
} from "@radix-ui/react-dropdown-menu";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? "shadow-md" : ""
      }`}
    >
      <nav className="bg-[#3366FF] text-white">
        <div className="container mx-auto px-16">
          <div className="flex items-center justify-between h-15">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
              <div className="relative h-10 w-32">
                {/* Replace src below with your logo path */}
                <Image
                  src="/page3/navbarLogo.png"
                  alt="EduHub Logo"
                  fill
                  className="object-contain"
                />
              </div>
            </Link>

            {/* Right Side - User Actions */}
            <div className="flex items-center space-x-4">
              <div className="hidden sm:flex items-center gap-2">
                <div className="relative h-10 w-10 rounded-full overflow-hidden">
                  <Image
                    src="/student/home/student-profile.jpg"
                    alt="User profile"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col text-xs">
                  <span className="text-pink-200">Student</span>
                  <span className="font-medium">Jane Cooper</span>
                </div>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="ghost"
                      className="flex items-center gap-2 text-white hover:bg-[#ff749e]"
                    >
                      <ChevronDown className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="bg-[#2d000d] p-2 rounded-lg w-48 flex flex-col gap-0.5">
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                      <Link href="/dashboard" className="w-full">
                        Dashboard
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />

                    <DropdownMenuItem>
                      <Link href="/dashboard" className="w-full">
                        Profile Settings
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                      <Link href="/dashboard" className="w-full">
                        Logout
                      </Link>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>

              {/* Mobile menu button */}
              <button
                className="md:hidden p-2 rounded-md hover:bg-pink-600 transition-colors"
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
          className={`md:hidden transition-all duration-300 overflow-hidden ${
            isMobileMenuOpen ? "max-h-96" : "max-h-0"
          }`}
        >
          <div className="px-4 py-2 space-y-1 bg-[#f9326f]">
            <Link
              href="/"
              className="block py-2 hover:bg-[#ff749e] px-3 rounded-md"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="block py-2 hover:bg-[#ff749e] px-3 rounded-md"
            >
              About
            </Link>
            <Link
              href="/instructors"
              className="block py-2 hover:bg-[#ff749e] px-3 rounded-md"
            >
              Instructor list
            </Link>
            <Link
              href="/courses"
              className="block py-2 hover:bg-[#ff749e] px-3 rounded-md"
            >
              Courses List
            </Link>
            <Link
              href="/contact"
              className="block py-2 hover:bg-[#ff749e] px-3 rounded-md"
            >
              Contact
            </Link>
            <Link
              href="/dashboard"
              className="block py-2 hover:bg-[#ff749e] px-3 rounded-md"
            >
              Dashboard
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
