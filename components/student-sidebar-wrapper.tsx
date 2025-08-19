"use client";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/student/settings/student-sidebar";

export default function StudentSidebarWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <div className="flex gap-4 justify-center w-full h-fit m-8">
        <AppSidebar />
        <main className="flex-1 h-fit">{children}</main>
      </div>
    </SidebarProvider>
  );
}
