"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  FiBookOpen,
  FiGrid,
  FiBriefcase,
  FiBell,
  FiShield,
  FiMenu,
  FiX,
} from "react-icons/fi";
import { FaRegSmile } from "react-icons/fa";

const NavItem = ({
  icon: Icon,
  label,
  href,
  active = false,
  onClick,
}: {
  icon: React.ElementType;
  label: string;
  href: string;
  active?: boolean;
  onClick?: () => void;
}) => (
  <Link
    href={href}
    onClick={onClick}
    className={`flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-full transition-colors ${
      active ? "text-[#FFCC00]" : "text-white hover:bg-[#3366FF]/70"
    }`}
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
}

export default function Navbar({ user, isAskme = true }: HeaderProps) {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    {
      icon: FaRegSmile,
      label: "Dashboard",
      href: "/admin/panel/dashboard",
      match: "/admin/panel/dashboard",
    },
    {
      icon: FiGrid,
      label: "DMIT Test",
      href: "/admin/panel/Test/dmit-test",
      match: "/admin/panel/Test",
    },
    {
      icon: FiBriefcase,
      label: "School MGMT",
      href: "/admin/panel/school-MGMT/school-management",
      match: "/admin/panel/school-MGMT",
    },
    {
      icon: FiBookOpen,
      label: "Course MGMT",
      href: "/admin/panel/course-MGMT/course-management",
      match: "/admin/panel/course-MGMT",
    },
    {
      icon: FiShield,
      label: "Security",
      href: "/admin/panel/security/security-scools",
      match: "/admin/panel/security",
    },
  ];

  return (
    <header className="bg-[#3366FF] text-white sticky top-0 z-50 shadow-md print:hidden">
      <div className="mx-auto px-4 h-20 flex justify-between items-center max-w-screen-2xl">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Image
            src="/page3/student_b2b/Clip path group.svg"
            alt="Edunique Logo"
            width={231}
            height={46}
            className="w-40"
          />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center bg-[#E3F2FD26] rounded-full px-4 py-2 space-x-2">
          {navItems.map(({ icon, label, href, match }) => (
            <NavItem
              key={label}
              icon={icon}
              label={label}
              href={href}
              active={pathname.startsWith(match)}
            />
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden p-2 text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
        </button>

        {/* Right Side */}
        {/* Right Side */}
<div className="flex items-center space-x-2 lg:space-x-4">
  {/* Mobile Menu Toggle - placed here */}
  <button
    className="lg:hidden p-2 text-white"
    onClick={() => setMenuOpen(!menuOpen)}
  >
    {menuOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
  </button>
      </div>

      {/* Mobile Nav Drawer */}
      {menuOpen && (
        <nav className="lg:hidden bg-[#3366FF] px-4 pb-4 space-y-2">
          {navItems.map(({ icon, label, href, match }) => (
            <NavItem
              key={label}
              icon={icon}
              label={label}
              href={href}
              active={pathname.startsWith(match)}
              onClick={() => setMenuOpen(false)}
            />
          ))}
        </nav>
      )}
      </div>
    </header>
  );
}
