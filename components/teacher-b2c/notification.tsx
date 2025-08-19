"use client";

import { useState } from "react";
import Header from '@/components/layout/TeacherB2CHeader'
import Footer from "@/components/layout/Footer";
import Image from "next/image";

interface NotificationItemData {
  id: number;
  title: string;
  message: string;
  iconSrc: string;
}

const loremIpsumShort =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book";

const initialNotifications: NotificationItemData[] = Array.from(
  { length: 6 },
  (_, i) => ({
    id: i + 1,
    title: "Notification Title",
    message: loremIpsumShort,
    iconSrc: "/svg/notification.svg",
  })
);

export default function NotificationsPage({ imageSrc }: { imageSrc?: string }) {
  const [notifications] = useState<NotificationItemData[]>(initialNotifications);

  return (
   
    <div className="min-h-screen relative flex flex-col overflow-x-hidden">
      {/* ✅ Background image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/images/brandpatternnoti.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* ✅ Foreground content */}
      <div className="relative z-10">
        <Header />
      </div>

      <main className="relative z-10 flex-grow w-full px-4 sm:px-6 py-6 md:py-12">
        <div className="max-w-5xl mx-auto space-y-3">
          {notifications.map((notification) => (
            <div
              key={notification.id}
              className="flex items-start gap-4 p-4 bg-[#F9FAFB] rounded-2xl hover:shadow-md cursor-pointer border border-[#E5E7EB]"
            >
              <Image
                src={notification.iconSrc}
                alt="Notification Bell"
                width={85}
                height={85}
                className="w-16 h-16"
              />
              <div className="flex-1">
                <h3 className="text-md font-medium text-[#000000] mb-1">
                  {notification.title}
                </h3>
                <p className="text-[0.80rem] text-[#777777] line-clamp-2">
                  {notification.message}
                </p>
              </div>
            </div>
          ))}
        </div>
      </main>
 
      <div className="relative z-10">
        <Footer />
      </div>
    </div>
   
  );
}
