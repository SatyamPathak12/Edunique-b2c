"use client";

import StudentSidebarWrapper from "@/components/student-sidebar-wrapper";
import Image from "next/image";


interface Notification {
  id: string;
  title: string;
  content: string;
  date: string;
}

export default function Notifications() {
  // Sample notifications data
  const notifications: Notification[] = [
    {
      id: "1",
      title: "Teacher add comment",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      date: "28-4-2025",
    },
    {
      id: "2",
      title: "Teacher add comment",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      date: "28-4-2025",
    },
    {
      id: "3",
      title: "Teacher add comment",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      date: "28-4-2025",
    },
    {
      id: "4",
      title: "Teacher add comment",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      date: "28-4-2025",
    },
    {
      id: "5",
      title: "Teacher add comment",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      date: "28-4-2025",
    },
    {
      id: "6",
      title: "Teacher add comment",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      date: "28-4-2025",
    },
  ];

  return (
    <StudentSidebarWrapper>
      <div className="max-w-7xl mx-auto bg-white rounded-xl shadow-sm p-6 h-fit">
        <h1 className="text-2xl font-semibold mb-6">Notification</h1>

        <div className="space-y-4">
          {notifications.map((notification) => (
            <div
              key={notification.id}
              className="bg-amber-50 rounded-md p-4 flex gap-4"
            >
              <div className="flex-shrink-0">
                <div className="bg-amber-200 rounded-full p-4 flex items-center justify-center">
                  <Image src={"/student/settings/bell.png"} alt="bell" priority height={40} width={40}/>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="font-medium mb-1">{notification.title}</h3>
                <p className="text-gray-600 text-sm mb-1">
                  {notification.content}
                </p>
                <p className="text-gray-500 text-xs">{notification.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </StudentSidebarWrapper>
  );
}
