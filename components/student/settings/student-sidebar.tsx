"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  BookOpen,
  MessageSquare,
  User,
  ClipboardList,
  Bell,
  ShoppingBag,
  LogOut,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

export function AppSidebar() {
  const pathname = usePathname();

  const items = [
    { icon: BookOpen, label: "My Course", href: "/student/settings/course" },
    { icon: User, label: "Profile", href: "/student/settings/profile" },
    {
      icon: ClipboardList,
      label: "Tests",
      href: "/student/settings/tests",
      badge: "10",
    },
    {
      icon: BookOpen,
      label: "Course Materials",
      href: "/student/settings/materials",
    },
    {
      icon: Bell,
      label: "Notification",
      href: "/student/settings/notifications",
    },
    {
      icon: ShoppingBag,
      label: "Purchase history",
      href: "/student/settings/purchases",
    },
    { icon: MessageSquare, label: "Chat", href: "/student/settings/chat" },
    { icon: LogOut, label: "Logout", href: "/student/settings/logout" },
  ];

  return (
    <div className="sticky left-4 top-4 z-50">
      <div className="h-fit rounded-xl bg-blue-50 shadow-md border border-blue-100 overflow-hidden">
        <Sidebar
          collapsible="none"
          className="h-fit w-[220px] bg-transparent border-none shadow-none"
        >
          <SidebarContent className="p-2">
            <SidebarMenu>
              {items.map(({ icon: Icon, label, href, badge }) => {
                const isActive = pathname === href;
                return (
                  <SidebarMenuItem key={href}>
                    <Link
                      href={href}
                      className={`flex items-center gap-2 rounded-lg px-2 py-2 transition-colors ${
                        isActive
                          ? "bg-blue-600 text-white"
                          : "text-gray-700 hover:bg-blue-100 hover:text-blue-600"
                      }`}
                    >
                      <Icon className="h-5 w-5" />
                      <span>{label}</span>
                      {badge && (
                        <div className="ml-auto bg-yellow-400 text-black text-xs font-medium rounded-md px-1.5">
                          {badge}
                        </div>
                      )}
                    </Link>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarContent>
        </Sidebar>
      </div>
    </div>
  );
}
