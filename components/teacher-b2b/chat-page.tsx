"use client";

import { useState, useRef } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Image from "next/image";
import { FiDownload, FiPaperclip, FiSend } from "react-icons/fi";
import MaxWidthWrapper from "../admin/max-width-wrapper";
import TeacherB2CWrapper from "../teacher-b2c/common-components/TeacherB2CPageWrapper";

// --- Teacher List Item ---
interface TeacherContact {
  id: string;
  name: string;
  subject: string;
  avatarSrc: string;
  lastMessageTime?: string; // e.g., "7:00 pm"
  isActive?: boolean;
}
const TeacherListItem = ({
  teacher,
  onClick,
  isActive,
}: {
  teacher: TeacherContact;
  onClick: () => void;
  isActive: boolean;
}) => (
  <button
    onClick={onClick}
    className={`w-full flex items-center p-3 rounded-2xl transition-colors ${
      isActive ? "bg-[#FFCC0026]" : "hover:bg-gray-100"
    }`}
  >
    <Image
      src={teacher.avatarSrc}
      alt={teacher.name}
      width={40}
      height={40}
      className="h-10 w-10 rounded-full object-cover mr-3 flex-shrink-0"
    />
    <div className="flex-1 text-left">
      <h4 className="text-sm font-semibold text-black">{teacher.name}</h4>
      <p className="text-[14px] text-[#6B7280]">{teacher.subject}</p>
    </div>
    {teacher.lastMessageTime && (
      <span className="text-[10px] text-[#6B7280] ml-2 self-end flex-shrink-0">
        {teacher.lastMessageTime}
      </span>
    )}
  </button>
);

// --- Chat Message Component ---
interface ChatMessageData {
  id: string;
  sender: "user" | "teacher"; // Or use sender's name/ID
  text?: string;
  imageUrl?: string;
  imageName?: string; // For download purposes
  timestamp: string; // e.g., "6:50 pm"
}

// --- Sample Data ---
const teachersList: TeacherContact[] = Array.from({ length: 10 }, (_, i) => ({
  id: `teacher${i + 1}`,
  name: "Student Name",
  subject: "Subject",
  avatarSrc: `/teacher-b2b/chat-profile.jpg`, // Cycle through 3 avatar examples
  lastMessageTime: "7:00 pm",
  isActive: i === 0, // First teacher active by default
}));

const initialChatMessages: ChatMessageData[] = [
  {
    id: "m1",
    sender: "teacher",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    timestamp: "6:50 pm",
    imageUrl: "/teacher-b2b/chat.png",
    imageName: "Moon_Surface.jpg",
  }, // UPDATE PATH
  {
    id: "m2",
    sender: "user",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    timestamp: "6:50 pm",
  },
];

const ChatMessage = ({ message }: { message: ChatMessageData }) => {
  const isUser = message.sender === "user"; // Assuming 'user' is the one sending messages from the input

  return (
    <div className={`flex mb-4 ${isUser ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-[70%] lg:max-w-[60%] w-auto px-4 py-3 rounded-2xl   ${
          isUser ? "bg-[#3366FF] text-white " : "bg-[#F9FAFB] text-black"
        }`}
      >
        {message.text && (
          <div
            className={`flex gap-2 justify-between ${
              isUser ? "flex-row-reverse" : ""
            }`}
          >
            <p
              className={`text-sm font-light break-words sm:text-lg ${
                isUser ? "text-right sm:pl-6" : "sm:pr-8"
              }`}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing <br /> elit.{" "}
              {/* Exact text with <br /> */}
            </p>
            <p
              className={`text-[10px] font-normal flex items-center text-nowrap text-xs mt-auto ${
                isUser ? "text-white/85 text-right" : "text-[#6B7280] text-left"
              }`}
            >
              {message.timestamp}
            </p>
          </div>
        )}
        {message.imageUrl && (
          <div className="mt-2">
            <Image
              src={message.imageUrl}
              alt={message.imageName || "Chat image"}
              width={300} // Adjust as needed
              height={200} // Adjust as needed
              className="w-full max-h-[240px] rounded-xl object-cover"
            />
            <div className="flex items-center justify-end">
              <button className="mt-2 flex items-center text-black gap-1.5 text-xs bg-[#B0B0B033] hover:text-blue-600 p-2 rounded-full shadow border border-gray-200 justify-center">
                <FiDownload className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default function ChatPage() {
  const [activeTeacherId, setActiveTeacherId] = useState<string | null>(
    teachersList[0]?.id || null
  );
  const [messages, setMessages] =
    useState<ChatMessageData[]>(initialChatMessages);
  const [newMessage, setNewMessage] = useState("");
  const chatEndRef = useRef<HTMLDivElement>(null); // For scrolling to bottom

  const selectedTeacher = teachersList.find((t) => t.id === activeTeacherId);

  const handleTeacherSelect = (teacherId: string) => {
    setActiveTeacherId(teacherId);
    // Here you would typically fetch chat history for the selected teacher
    setMessages(initialChatMessages); // Reset to initial messages for demo
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (newMessage.trim() === "") return;

    const messageToSend: ChatMessageData = {
      id: `m${messages.length + 1}`,
      sender: "user", // Assuming the current user is sending
      text: newMessage,
      timestamp: new Date()
        .toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        })
        .toLowerCase(),
    };
    setMessages((prevMessages) => [...prevMessages, messageToSend]);
    setNewMessage("");
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <Header activeState="Chat" />
      <TeacherB2CWrapper>
        <div className="">
          <main className=" py-2 flex gap-5 items-start">
            {/* Left Column: Teacher List */}
            <div className="w-full hidden md:block md:w-1/3 lg:w-1/4 bg-white rounded-3xl  p-4 self-stretch">
              {" "}
              {/* self-stretch */}
              <h2 className="text-lg font-bold text-[#FF3366] mb-4 px-2">
                Students
              </h2>
              <div className="space-y-1 max-h-[calc(100vh-10rem)] overflow-y-auto custom-scrollbar pr-1">
                {" "}
                {/* Scrollable list */}
                {teachersList.map((teacher) => (
                  <TeacherListItem
                    key={teacher.id}
                    teacher={teacher}
                    isActive={activeTeacherId === teacher.id}
                    onClick={() => handleTeacherSelect(teacher.id)}
                  />
                ))}
              </div>
            </div>

            {/* Right Column: Chat Interface */}
            <div
               className="w-full relative z-0 lg:w-[70%] xl:w-3/4 bg-[#EEEEEE] rounded-2xl sm:rounded-3xl flex flex-col 
                   h-[85vh] sm:h-[calc(100vh-10rem)] lg:h-[calc(100vh-6rem)]">
              <div
                className=" absolute -z-10 opacity-10 rounded-2xl inset-0"
                style={{
                  backgroundImage: "url('/images/brandpatternchat.png')",
                  backgroundRepeat: "none",
                  backgroundSize: "cover",
                  filter: "grayscale(100%)",
                }}
              ></div>
              {selectedTeacher ? (
                <>
                  {/* Chat Header */}
                  <div className="p-2 mt-4  z-20 relative flex items-center gap-2 rounded-full bg-white  sm:gap-3">
                    <Image
                      src={selectedTeacher.avatarSrc}
                      alt={selectedTeacher.name}
                      width={40}
                      height={40}
                      className="h-10 w-10 rounded-full object-cover"
                    />
                    <h3 className="text-lg font-semibold text-black">
                      Student Name
                    </h3>
                  </div>

                  {/* Chat Messages Area */}
                  <div className="flex-grow p-4 space-y-4 overflow-y-auto custom-scrollbar">
                    {messages.map((msg) => (
                      <ChatMessage key={msg.id} message={msg} />
                    ))}
                    <div ref={chatEndRef} />
                  </div>

                  {/* Message Input Area */}
                  <div className="bg-white mx-4 rounded-full mb-4">
                    <div className="p-2 ">
                      <form
                        onSubmit={handleSendMessage}
                        className="flex items-center bg-[#F9FAFB] border-[#D5D5D5] border rounded-full p-0.5 sm:p-0"
                      >
                        <input
                          type="text"
                          value={newMessage}
                          onChange={(e) => setNewMessage(e.target.value)}
                          placeholder="Message"
                          className="flex-grow bg-transparent px-2.5 py-1.5 text-xs text-[#6B7280] focus:outline-none placeholder-gray-400
                       sm:px-3 sm:py-2 sm:text-sm"
                        />
                        <button
                          type="button"
                          className="p-1.5 text-[#6B7280] cursor-pointer hover:text-blue-600 focus:outline-none sm:p-2"
                        >
                          <FiPaperclip className="w-4 h-4 sm:w-5 sm:h-5" />
                        </button>
                        {/* Original button: p-2.5 mr-2 text-[#FF3366] rounded-full cursor-pointer focus:outline-none */}
                        <button
                          type="submit"
                          className="p-2 text-[#FF3366] rounded-full cursor-pointer focus:outline-none disabled:opacity-50
																   sm:p-2.5 sm:mr-2"
                          aria-label="Send message"
                        >
                          <FiSend className="w-4 h-4 sm:w-5 sm:h-5 transform rotate-45" />
                        </button>
                      </form>
                    </div>
                  </div>
                </>
              ) : (
                <div className="flex-grow flex items-center justify-center text-gray-400">
                  Select a teacher to start chatting.
                </div>
              )}
            </div>
          </main>
        </div>
      </TeacherB2CWrapper>
      <Footer />
    </div>
  );
}
