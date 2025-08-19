"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Paperclip, SendHorizontal, File } from "lucide-react";
import { useState } from "react";
import MaxWidthWrapper from "@/components/admin/max-width-wrapper";
import BackButton from "@/components/common-components/BackButton";

interface Student {
  id: string;
  name: string;
  classInfo: string;
  avatar: string;
  lastMessageTime: string;
  isActive?: boolean;
}

interface Message {
  id: string;
  content: string;
  timestamp: string;
  isFile?: boolean;
  fileName?: string;
}

Array.from({ length: 600 }, (_, i) => ({
  id: `f${i + 1}`,
  name: "Student Name",
  classInfo: "Class / Batch",
  avatar: "/admin/PFP.png",
  lastMessageTime: "7:00 pm",
  isActive: true,
}));

const students: Student[] = Array.from({ length: 100 }, (_, i) => ({
  id: `f${i + 1}`,
  name: "Student Name",
  classInfo: "Class / Batch",
  avatar: "/admin/PFP.png",
  lastMessageTime: "7:00 pm",
  isActive: true,
}));

export default function ChatInterface() {
  const [selectedStudent, setSelectedStudent] = useState<Student | null>(
    students[0]
  );
  const [messageInput, setMessageInput] = useState("");

  const messages: Message[] = [
    {
      id: "1",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      timestamp: "6:50 pm",
    },
    {
      id: "2",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      timestamp: "6:50 pm",
      isFile: true,
      fileName: "File Name",
    },
  ];

  const handleStudentSelect = (student: Student) => {
    setSelectedStudent(student);
  };

  const handleSendMessage = () => {
    if (messageInput.trim()) {
      // Handle sending message
      console.log("Sending message:", messageInput);
      setMessageInput("");
    }
  };

  return (
    <div>
      <BackButton Heading="Give Suggestions" />
      <MaxWidthWrapper>
        <main className="flex-grow w-full max-w-[90rem] mx-auto px-4 py-10">
          <div className="flex h-screen gap-4">
            {/* Left Sidebar - Students List */}
            <div className="w-80 bg-white border-r border-gray-200 flex flex-col rounded-3xl">
              {/* Header */}
              <div className="p-4 pb-1">
                <h2 className="text-lg font-semibold text-[#FF3366]">
                  Students List
                </h2>
              </div>

              {/* Students List */}
              <div className="flex-1 overflow-y-auto custom-scrollbar-thin-grey p-3">
                {/* Search Bar */}
                <div className="relative mb-4">
                  <Search className="text-black absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 z-10" />
                  <Input
                    placeholder="Search"
                    className="pl-10 rounded-full border-2 border-[#6B7280]"
                  />
                </div>
                {students.map((student) => (
                  <div
                    key={student.id}
                    onClick={() => handleStudentSelect(student)}
                    className={`flex items-center p-4 hover:bg-gray-50 cursor-pointer rounded-2xl ${
                      selectedStudent?.id === student.id ? "bg-blue-50" : ""
                    }`}
                  >
                    <img
                      src={student.avatar || "/placeholder.svg"}
                      alt={student.name}
                      className="w-10 h-10 rounded-full mr-3"
                    />
                    <div className="flex-1">
                      <h2 className="font-medium text-gray-900">
                        {student.name}
                      </h2>
                      <p className="text-xs text-[#6B7280]">
                        {student.classInfo}
                      </p>
                      <div className="text-[8px] text-gray-400 text-right w-full">
                        {student.lastMessageTime}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side - Chat Area */}
            <div
              className="flex-1 flex flex-col p-4 rounded-3xl"
              style={{
                backgroundImage: 'url("/chat_background.png")',
                backgroundSize: "cover",
              }}
            >
              {selectedStudent ? (
                <>
                  {/* Chat Header */}
                  <div className="bg-white rounded-full p-2 flex items-center">
                    <img
                      src={selectedStudent.avatar || "/placeholder.svg"}
                      alt={selectedStudent.name}
                      className="w-10 h-10 rounded-full mr-3"
                    />
                    <h3 className="font-medium text-gray-900">
                      {selectedStudent.name}
                    </h3>
                  </div>

                  {/* Messages Area */}
                  <div className="flex-1 overflow-y-auto py-8 pl-4 pr-0 space-y-4">
                    {messages.map((message) => (
                      <div key={message.id} className="flex justify-end">
                        <div className="max-w-xs lg:max-w-md">
                          <div className="bg-[#3366FF] text-white rounded-2xl p-3">
                            <p className="text-sm text-right pl-10 font-light">
                              {message.content}
                            </p>
                            <p className="text-[8px] text-white text-left">
                              {message.timestamp}
                            </p>
                            {message.isFile && (
                              <Card className="mt-3 bg-white rounded-2xl">
                                <CardContent className="p-3">
                                  <div className="flex items-center justify-between">
                                    <span className="text-sm">
                                      {message.fileName}
                                    </span>
                                    <File className="w-4 h-4" />
                                  </div>
                                  <Button
                                    size="sm"
                                    variant="ghost"
                                    className="text-gray-600 hover:text-gray-800 flex justify-center items-center bg-[#6B72801A] text-xs w-full rounded-xl mt-2"
                                  >
                                    Download
                                  </Button>
                                </CardContent>
                              </Card>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Message Input */}
                  <div className="bg-white p-2 rounded-full">
                    <div className="flex items-center space-x-2">
                      <div className="flex-1 relative">
                        <Input
                          placeholder="Suggest"
                          value={messageInput}
                          onChange={(e) => setMessageInput(e.target.value)}
                          onKeyPress={(e) =>
                            e.key === "Enter" && handleSendMessage()
                          }
                          className="pr-20 rounded-full border border-[#D5D5D5] bg-[#F9FAFB] text-lg text-[#6B7280]"
                        />
                        <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex items-center space-x-1">
                          <Button
                            size="sm"
                            variant="ghost"
                            className="p-1 h-8 w-8"
                          >
                            <Paperclip className="w-5 h-5 text-[#6B7280]" />
                          </Button>
                          <Button
                            size="sm"
                            variant="ghost"
                            className="p-1 h-8 w-8"
                            onClick={handleSendMessage}
                          >
                            <SendHorizontal className="w-5 h-5 text-[#FF3366]" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <div className="flex-1 flex items-center justify-center text-gray-500">
                  <p>Select a student to start chatting</p>
                </div>
              )}
            </div>
          </div>
        </main>
      </MaxWidthWrapper>
    </div>
  );
}
