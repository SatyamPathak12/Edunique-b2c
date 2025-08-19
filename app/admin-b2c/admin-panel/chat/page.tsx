// page.tsx (e.g. /app/chat/page.tsx)
"use client";

import React, { useState } from 'react';
import {
    TeacherListSidebar,
    ChatArea,
    TeacherContact, // Import type
    ChatMessageData // Import type
} from './components';
import { motion, AnimatePresence } from 'framer-motion';

// --- Sample Data (Strictly from your original) ---
const teachersListData: TeacherContact[] = Array.from({ length: 10 }, (_, i) => ({ // Kept 10 distinct teacher entries
    id: `teacher${i + 1}`,
    name: 'Name', // All are "Teacher Name"
    avatarSrc: `/teacher-avatar-chat-${(i % 3) + 1}.jpg`,
    lastMessageTime: '7:00 pm',
    // isActive is handled by activeTeacherId state
}));

const initialChatMessagesData: ChatMessageData[] = [ // Exactly two messages
    {
        id: 'm1', sender: 'teacher', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        timestamp: '6:50 pm', imageUrl: '/images/earth.png', imageName: 'Moon_Surface.jpg',
    },
    {
        id: 'm2', sender: 'user', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        timestamp: '6:50 pm',
    },
];
// --- End Sample Data ---

export default function ChatPage() {
    const [activeTeacherId, setActiveTeacherId] = useState<string | null>(teachersListData[0]?.id || null);
    const [messages, setMessages] = useState<ChatMessageData[]>(initialChatMessagesData);
    const [newMessage, setNewMessage] = useState('');


    const selectedTeacher = teachersListData.find(t => t.id === activeTeacherId);

    const handleTeacherSelect = (teacherId: string) => {
        setActiveTeacherId(teacherId);
        setMessages(initialChatMessagesData); // Reset to initial 2 messages for demo as per original
    };

    const handleSendMessage = (e: React.FormEvent) => {
        e.preventDefault();
        if (newMessage.trim() === '') return;
        const messageToSend: ChatMessageData = {
            id: `m${messages.length + 1}`, sender: 'user', text: newMessage,
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true }).toLowerCase(),
        };
        setMessages(prevMessages => [...prevMessages, messageToSend]);
        setNewMessage('');
    };
    const [showChatOnMobile, setShowChatOnMobile] = useState(false);

    const handleSelect = (id: string) => {
        handleTeacherSelect(id);
        setShowChatOnMobile(true);
    };

    return (
        <div className="min-h-screen bg-[#EEEEEE] flex flex-col">
            <main className="z-20 relative flex-grow container mx-auto p-2 flex flex-col gap-3 sm:p-4 md:p-6 lg:p-8 sm:gap-5 lg:flex-row lg:items-start">
                {/* 🖥️ Desktop Layout */}
                <div className="hidden lg:flex w-full gap-5">
                    <TeacherListSidebar
                        teachers={teachersListData}
                        activeTeacherId={activeTeacherId}
                        onTeacherSelect={handleTeacherSelect}
                    />
                    <ChatArea
                        selectedTeacher={selectedTeacher}
                        messages={messages}
                        newMessage={newMessage}
                        onNewMessageChange={(e) => setNewMessage(e.target.value)}
                        onSendMessage={handleSendMessage}
                    />
                </div>

                {/* 📱 Mobile / Tablet Layout */}
                {/* 📱 Mobile / Tablet Layout */}
                <div className="lg:hidden relative w-full min-h-[400px]"> {/* <-- Give it a min height to prevent blank */}
                    <AnimatePresence mode="sync" initial={false}>
                        {!showChatOnMobile ? (
                            <motion.div
                                key="list"
                                initial={{ x: 0 }}
                                animate={{ x: 0 }}
                                exit={{ x: '-100%' }}
                                transition={{ duration: 0.25 }}
                                className="absolute top-0 left-0 w-full h-full z-10"
                            >
                                <TeacherListSidebar
                                    teachers={teachersListData}
                                    activeTeacherId={activeTeacherId}
                                    onTeacherSelect={(id) => {
                                        handleSelect(id);
                                        setShowChatOnMobile(true); // trigger animation
                                    }}
                                />
                            </motion.div>
                        ) : (
                            <motion.div
                                key="chat"
                                initial={{ x: '100%' }}
                                animate={{ x: 0 }}
                                exit={{ x: '100%' }}
                                transition={{ duration: 0.4 }}
                                className="absolute top-0 left-0 w-full h-full z-20 bg-white"
                            >

                                <ChatArea
                                    selectedTeacher={selectedTeacher}
                                    messages={messages}
                                    newMessage={newMessage}
                                    onNewMessageChange={(e) => setNewMessage(e.target.value)}
                                    onSendMessage={handleSendMessage}
                                    onBackClick={() => setShowChatOnMobile(false)}
                                />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

            </main>
        </div>
    );
}