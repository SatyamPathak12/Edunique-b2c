/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"; // needed for client components using hooks

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation"; // App Router hook for current path
import { FiBookOpen, FiMessageSquare, FiVideo, FiBell } from "react-icons/fi";
import { FaRegSmile } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa6";
import { FiDatabase, FiGrid } from "react-icons/fi";
const NavItem = ({
  label,
  href,
  active = false,
}: {
  label: string;
  href: string;
  active?: boolean;
}) => (
  <Link
    href={href}
    className={`flex items-center gap-2 px-4 py-2.5 text-sm text-white font-semibold rounded-full transition-colors hover:bg-white/10 ${
      active ? "bg-[#FFFFFF1A]" : ""
    } `}
  >
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
  currPage?:string
}

export default function Header({ user, isAskme = true , currPage }: HeaderProps) {


  const navItems = [
    {
      icon: FaRegSmile,
      label: "Home",
      href: "/student-b2b/student-dashboard/dashboard",
    },
    {
      icon: FiGrid,
      label: "About",
      href: "/student-b2b/student-dashboard/my-course",
      active: true,
    },
    {
      icon: FiDatabase,
      label: "Instructor List",
      href: "/student-b2b/student-dashboard/chat",
    },
    {
      icon: FiMessageSquare,
      label: "Course List",
      href: "/student-b2b/student-dashboard/course--list",
    },
    {
      icon: FiVideo,
      label: "Contact",
      href: "/student-b2b/student-dashboard/recording",
    },
    {
      icon: FiVideo,
      label: "My Learning",
      href: "/student-b2b/student-dashboard/course",
    },
  ];

  return (
    <header className="bg-[#3366FF] px-6 text-white sticky top-0 z-50 shadow-md print:hidden ">
      <div className="mx-auto px-4 h-20 flex justify-between items-center max-w-screen-2xl">
        {/* Logo */}
        <div className=" flex">
          <Image
            src="/page3/student_b2b/Clip path group.svg"
            alt="Edunique Logo"
            width={231}
            height={46}
            className="w-40"
          />
        </div>

        {/* Main Navigation */}
        <nav className="hidden lg:flex items-center justify-center rounded-full w-[60%] px-4 py-2 space-x-6">
          {navItems.map(({ label, href }) => (
            <NavItem
              key={label}
              label={label}
              href={href}
              active={currPage === label}
            />
          ))}
        </nav>

        {/* Right Side */}
        <div className="flex items-center space-x-2 lg:space-x-4">
          {isAskme && (
            <button className="flex items-center gap-2 px-2 py-2 bg-[#E3F2FD26] text-white text-sm font-medium rounded-full hover:bg-white/30 transition-colors">
              <Image
                src="/page3/student_b2b/AI Button.svg"
                alt="Ask me bot"
                width={231}
                height={46}
                className="w-10"
              />
              Ask me!
            </button>
          )}
          <button className="p-2 rounded-full hover:bg-[#3366FF]/70 focus:outline-none">
            <FiBell className="w-5 h-5" />
          </button>
          <Image
            src={user?.avatarSrc ?? "/page3/entry/pri.png"}
            alt={user?.name ?? "User"}
            width={40}
            height={40}
            className="w-10 h-10 rounded-full object-cover hover:cursor-pointer"
          />
        </div>
      </div>
    </header>
  );
}
