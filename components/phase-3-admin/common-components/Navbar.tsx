"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import {
  FaRegSmile,
  FaBell,
  FaBars,
  FaTimes
} from "react-icons/fa";
import { BiCoinStack } from "react-icons/bi";
import {
  FiBookOpen,
  FiGrid,
  FiShield,
  FiMessageCircle,
  FiUsers
} from "react-icons/fi";
import { IoVideocamOutline } from "react-icons/io5";

const basePath = "/b2c-phase-3/admin-phase-3/admin-panel";
const secondaryRoutes = ["/inventory", "/extra-lecture-manager"];

export const adminNavItems = [
  {
    label: "Dashboard",
    icon: <FaRegSmile className="text-lg sm:text-2xl" />,
    key: "dashboard",
    href: "/b2c-phase-3/admin-phase-3/admin-panel/dashboard",
    paths: ["/dashboard", "/inventory", "/manage-teacher-leave", "extra-lecture-manager", "/attendance-course", "/request-drop-course", "/request-teach-more", "/review-list", "/teacher-attendence", "/student-attendence"],
  },
  {
    label: "DMIT Test",
    icon: <FiGrid className="text-lg sm:text-2xl" />,
    key: "dmit",
    href: "/b2c-phase-3/admin-phase-3/admin-panel/edit-dmit-test",
    paths: ["/admin-dmit-test", "/create-dmit-test", "/edit-dmit-test"],
  },
  {
    label: "Material",
    icon: <BiCoinStack className="text-lg sm:text-2xl" />,
    key: "material",
    href: "/b2c-phase-3/admin-phase-3/admin-panel/content-management",
    paths: ["/content-management", "/content-management-files"],
  },
  {
    label: "Course MGMT",
    icon: <FiBookOpen className="text-lg sm:text-2xl" />,
    key: "course",
    href: `/b2c-phase-3/admin-phase-3/admin-panel/course-management`,
    paths: ["/course-management", "/all-mentors", "/all-teachers", "/all-students", "/all-institutions", "/institute-profile", "/course-management-teacher", "/admin-course-management", "/remove-courses", "/know-more", "/create-course"]
  },
  {
    label: "Security",
    icon: <FiShield className="text-lg sm:text-2xl" />,
    key: "security",
    href: `${basePath}/security/security-course`,
    paths: ["/security/course-login-activity", "/security/security-course", "/security/student-login-acitvity"],
  },
  {
    label: "Chat",
    icon: <FiMessageCircle className="text-lg sm:text-2xl" />,
    key: "chat",
    href: "/b2c-phase-3/admin-phase-3/admin-panel/chat",
    paths: ["/chat"],
  },
];

export const secondaryNavItems = [
  {
    label: "Dashboard",
    icon: <FaRegSmile className="text-lg sm:text-2xl" />,
    key: "dashboard",
    href: "/b2c-phase-3/admin-phase-3/admin-panel/dashboard",
    paths: ["/dashboard", "/extra-lecture-manager", "/inventory"],
  },
  {
    label: "Student",
    icon: <FiUsers className="text-lg sm:text-2xl" />,
    key: "student",
    href: "/b2c-phase-3/admin-phase-3/admin-panel/student-profile",
    paths: [""],
  },
  {
    label: "Material",
    icon: <BiCoinStack className="text-lg sm:text-2xl" />,
    key: "material",
    href: "/b2c-phase-3/admin-phase-3/admin-panel/content-management",
    paths: ["/content-management", "/content-management-files"],
  },
  {
    label: "Recordings",
    icon: <IoVideocamOutline className="text-lg sm:text-2xl" />,
    key: "course",
    href: `#`,
    paths: [""],
  },
  {
    label: "Chat",
    icon: <FiMessageCircle className="text-lg sm:text-2xl" />,
    key: "chat",
    href: "/b2c-phase-3/admin-phase-3/admin-panel/chat",
    paths: ["/chat"],
  },
];

const getNavItemsForRoute = (pathname: string) => {
  const subpath = pathname.replace(basePath, "") || "/";
  const isSecondary = secondaryRoutes.some((r) => subpath.startsWith(r));
  return isSecondary ? secondaryNavItems : adminNavItems;
};


const getActiveNavKey = (
  pathname: string,
  navItems: typeof adminNavItems
): string => {
  const subpath = pathname.replace(basePath, "") || "/";
  const match = navItems.find((item) =>
    item.paths.some((p) => subpath.startsWith(p))
  );
  return match?.key ?? "";
};


interface NavbarProps {
  user: {
    avatarSrc: string;
    name: string;
    role: string;
  };
}

const Navbar = ({ user }: NavbarProps) => {
  const pathname = usePathname();
  const navItems = getNavItemsForRoute(pathname);
  const activeTab = getActiveNavKey(pathname, navItems);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };


  return (
    <div className="bg-[#3366ff]">
      <nav className="text-white px-2 py-2 sm:px-4 max-w-[96rem] mx-auto sm:py-6 relative">
        <div className="flex items-center gap-4 justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Image
              src="/page3/student_b2b/Clip path group.svg"
              alt="Edunique Logo"
              width={231}
              height={46}
              className="w-32 sm:w-40"
            />
          </div>

          {/* Desktop Nav */}
          <div className="bg-[#e3f2fd]/15 rounded-full px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 hidden lg:flex items-center justify-center gap-4 sm:gap-5 md:gap-6 overflow-x-auto  no-scrollbar max-w-full">
            {navItems.map((item) => (
              <Link key={item.key} href={item.href}>
                <button
                  className={`flex items-center cursor-pointer gap-2 text-sm sm:text-md transition-all whitespace-nowrap ${
                    activeTab === item.key
                      ? "text-[#ffcc00] font-semibold"
                      : "text-white"
                  }`}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </button>
              </Link>
            ))}
          </div>

          {/* Right Side + Mobile Menu Toggle */}
          <div className="flex items-center gap-4 relative">
            <button
              className="lg:hidden text-white text-xl focus:outline-none z-50"
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
            </button>

            <FaBell className="text-xl sm:text-2xl" />

            <Image
              src={user.avatarSrc || "/admin/usernav.jpg"}
              alt={user.name}
              width={40}
              height={40}
              className="rounded-full w-10 h-10 object-cover"
            />
          </div>
        </div>

        {/* Mobile Overlay */}
        {isMobileMenuOpen && (
          <div
            className="fixed inset-0 bg-black/40 z-30 sm:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-hidden="true"
          />
        )}

        {/* Mobile Menu Slide-In */}
        <div
          className={`fixed top-0 left-0 bottom-0 w-64 bg-[#3366FF] z-40 transition-transform duration-300 ease-in-out sm:hidden ${
            isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="p-4 border-b border-white/20 flex justify-between items-center">
            <Image
              src="/page3/student_b2b/Clip path group.svg"
              alt="Edunique Logo"
              width={150}
              height={30}
              className="w-32"
            />
            <button
              onClick={toggleMobileMenu}
              className="p-2 rounded-full hover:bg-white/20 focus:outline-none"
              aria-label="Close menu"
            >
              <FaTimes className="w-6 h-6 text-white" />
            </button>
          </div>

          <nav className="flex flex-col p-4 space-y-2">
            {navItems.map((item) => (
              <Link key={item.key} href={item.href}>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`flex items-center gap-2 px-4 py-2 text-sm text-left transition-all ${
                    activeTab === item.key
                      ? "bg-blue-700 text-[#ffcc00] font-semibold"
                      : "text-white hover:bg-blue-700"
                  }`}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </button>
              </Link>
            ))}
          </nav>

          {/* Optional: User Info at bottom */}
          <div className="p-4 border-t border-white/20 mt-auto flex items-center gap-2">
            <Image
              src={user.avatarSrc || "/admin/usernav.jpg"}
              alt={user.name}
              width={32}
              height={32}
              className="w-8 h-8 rounded-full object-cover"
            />
            <div>
              <div className="text-sm font-semibold text-white">{user.name}</div>
              <div className="text-xs text-white/80">{user.role}</div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
