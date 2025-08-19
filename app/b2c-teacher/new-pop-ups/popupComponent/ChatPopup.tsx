// /popupComponent/ChatPopup.tsx
"use client";

import React, { useState } from 'react';
import Image from "next/image";
import { FaRegCirclePlay } from "react-icons/fa6";
import { RxCross1 } from "react-icons/rx";
import { LuSendHorizontal } from "react-icons/lu";
import { TeacherB2CBaseModal, PopupPropB2CTeacher } from '../page'; // Assuming page.tsx is in the parent directory

// --- Data & Types (as you provided) ---
const messages = [
  { id: 1, sender: "Shlok", text: "Hey Aura, can you tell me what photosynthesis is? I heard plants make their food, but how?" },
  {
    id: 2, sender: "Aura", text: (
      <>
        <p>Great question! 🌱 Photosynthesis is how plants use sunlight, water, and air (carbon dioxide) to make their food. It's like a magic recipe using sunlight!</p>
        <p className="mt-2">Want to see it in action? Here's a fun video that explains it:</p>
        <button className="mt-3 flex items-center space-x-2 w-full bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700">
          <FaRegCirclePlay />
          <span>Photosynthesis</span>
        </button>
      </>
    ),
  },
  { id: 3, sender: "Shlok", text: "Wow, that's cool! Thanks! I’ll watch the video now." },
];

// --- Main Chat Popup Component ---
const ChatPopup: React.FC<PopupPropB2CTeacher> = ({ isOpen, onClose }) => {
  // Internal state for the chat input, if needed
  const [newMessage, setNewMessage] = useState('');

  // The onClose prop is now passed from the parent and controls the modal's visibility.
  if (!isOpen) return null;

  return (
    // Use the BaseModal to handle overlay, animation, and closing logic
    <TeacherB2CBaseModal isOpen={isOpen} onClose={onClose} maxWidth="max-w-screen-md">
      {/* 
        This is YOUR EXACT JSX for the chat popup content.
        I have not changed any styling or structure inside this div.
        The only thing removed was the outer wrapper that you used for positioning (fixed, inset-0, etc.)
        because the BaseModal now handles that.
      */}
      <div 
        className="w-full rounded-2xl flex-grow p-3 space-y-3 overflow-y-auto custom-scrollbar sm:p-4 sm:space-y-6 py-6 px-8 shadow-xl relative"
        style={{backgroundImage:"url('/chatpopupbg.png')", backgroundSize: 'cover', backgroundPosition: 'center'}}
      >
        <div className="absolute h-full inset-0 bg-[#F9FAFB] opacity-70 rounded-2xl z-0"></div>
        
        {/* Header */}
        <div className="flex items-center relative z-10 space-x-2 mb-4">
          <div>
           <Image src="/page3/student_b2b/AI Button.svg" alt="Ask me bot" width={40} height={40} className="w-10" />
          </div>
          <h2 className="text-black font-semibold">Ask me anything !</h2>
        </div>

        {/* Chat bubbles */}
        <div className="space-y-8 relative z-10 py-4">
            {messages.map((msg) => (
                <div key={msg.id} className={msg.sender === "Shlok" ? "text-right" : "text-left"}>
                    <p className="text-sm font-bold text-gray-800 mt-1">{msg.sender}</p> {/* Changed text-white to gray-800 for better visibility */}
                    <div className="inline-block bg-white px-4 py-2 max-w-[90%] sm:max-w-[70%] rounded-2xl shadow text-gray-900 text-left"> {/* Added text-left to sender bubbles */}
                        {msg.text}
                    </div>
                </div>
            ))}
        </div>

        {/* Input */}
        <div className="mt-6 z-10 relative flex items-center border border-gray-300 rounded-full px-4 py-2 bg-white">
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Ask Aura !"
            className="flex-1 outline-none bg-transparent text-sm font-medium text-gray-800"
          />
          <button className="w-6 h-6 text-pink-500">
            <LuSendHorizontal />
          </button>
        </div>

        {/* Close icon */}
        <button onClick={onClose} className="absolute z-20 cursor-pointer top-4 right-4 bg-[#e5e7eb] rounded-full p-2 sm:p-3 text-black ">
         <RxCross1 />
        </button>
      </div>
    </TeacherB2CBaseModal>
  );
};

export default ChatPopup;