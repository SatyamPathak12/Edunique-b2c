'use client';

import { useState } from 'react';
import Sidebar from '@/components/teacher/layout'; // Adjust import path
import Image from 'next/image';
import Header from '../header';

// --- Sample Notification Data ---
interface Notification {
    id: number;
    title: string;
    message: string;
    iconSrc: string; // Path to the icon image
    // Add other relevant fields like timestamp, read status, link, etc.
}

const loremIpsum = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.";

const initialNotifications: Notification[] = Array.from({ length: 6 }, (_, i) => ({
    id: i + 1,
    title: 'Teacher add comment',
    message: loremIpsum,
    iconSrc: '/placeholder-notification-icon.png', // Replace with your actual bell icon image
}));


export default function NotificationPage() {
    const [notifications] = useState<Notification[]>(initialNotifications);
    // Add state for pagination, filtering, marking as read, etc. if needed

    return (
        <div className="flex min-h-screen bg-gray-100">
            <Sidebar />

            <main className="flex-1 ml-64 p-6 md:p-8"> {/* ml-64 for sidebar */}
                {/* Top Bar */}
                <Header title="Notifications" subtitle="Dashboard" />

                {/* Main Content Area */}
                <div className="p-6 md:p-8">
                    <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
                        <div className="space-y-4">
                            {notifications.map((notification) => (
                                <div
                                    key={notification.id}
                                    // Add cursor-pointer and hover effect if notifications are clickable
                                    className="flex items-start gap-4 p-4 bg-purple-50/30 rounded-lg border border-purple-100"
                                >
                                    <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-sm border border-gray-100">
                                         {/* Use Image component for the icon */}
                                         <Image
                                            src={notification.iconSrc}
                                            alt="Notification Icon"
                                            width={24} // Adjust size as needed
                                            height={24}
                                        />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-sm font-semibold text-gray-800 mb-1">{notification.title}</h3>
                                        <p className="text-xs text-gray-500 leading-relaxed">{notification.message}</p>
                                        {/* Optional: Add timestamp or action buttons here */}
                                        {/* <span className="text-xs text-gray-400 mt-1 block">2 hours ago</span> */}
                                    </div>
                                </div>
                            ))}
                        </div>
                         {/* Optional: Add Load More button or pagination */}
                         {/* <div className="mt-6 text-center">
                            <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">Load More</button>
                         </div> */}
                    </div>
                </div>
            </main>
        </div>
    );
}