"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { LayoutDashboard, FileText, Users, FileSpreadsheet, Video, ClipboardCheck, Award } from "lucide-react"

const navItems = [
  {
    title: "Dashboard",
    href: "/page3/teacher/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Bi-Weekly & Retention Test",
    href: "/page3/teacher/test",
    icon: FileText,
  },
  {
    title: "Student List",
    href: "/page3/teacher/students",
    icon: Users,
  },
  {
    title: "Worksheets",
    href: "/page3/teacher/worksheets",
    icon: FileSpreadsheet,
    hasDropdown: true,
  },
  {
    title: "Video content",
    href: "/page3/teacher/videos",
    icon: Video,
    hasDropdown: true,
  },
  {
    title: "Assessments",
    href: "/page3/teacher/assessments",
    icon: ClipboardCheck,
  },
  {
    title: "DMIT and Skill Test Results",
    href: "/results",
    icon: Award,
  },
]

export function MainNav() {
  const pathname = usePathname()

  return (
    <div className="flex items-center pl-12 border-b w-full bg-white">
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={cn(
            "flex items-center px-4 py-3 text-sm font-medium transition-colors",
            pathname === item.href
              ? "border-b-2 border-blue-500 text-blue-500"
              : "text-muted-foreground hover:text-primary",
          )}
        >
          <item.icon className="mr-2 h-4 w-4" />
          <span>{item.title}</span>
          {item.hasDropdown && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="ml-1 h-4 w-4"
            >
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          )}
        </Link>
      ))}
    </div>
  )
}
