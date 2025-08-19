// components.tsx
"use client"

import React from 'react';
import Image from 'next/image';
import { FiArrowLeft, FiChevronDown, FiDownload, FiSearch } from 'react-icons/fi';
import { ChatInput } from './ui-components'; // Import ChatInput
import SearchFilter from '@/components/b2c-admin/common-component/SearchBarFilter';
import SearchFilterInline from '@/components/b2c-admin/common-component/SearchBarFilterInline';

// --- Data Interfaces (from your original) ---
export interface TeacherContact {
    id: string; name: string; avatarSrc: string;
    lastMessageTime?: string;
    // isActive prop will be passed by parent, not part of core data typically
}
export interface ChatMessageData {
    id: string; sender: 'user' | 'teacher'; text?: string;
    imageUrl?: string; imageName?: string; timestamp: string;
}

// --- Component 1: TeacherListItem ---
interface TeacherListItemProps {
    teacher: TeacherContact; onClick: () => void; isActive: boolean;
}
export const TeacherListItem: React.FC<TeacherListItemProps> = ({ teacher, onClick, isActive }) => (
    // Original: w-full flex items-center p-3 rounded-3xl transition-colors
    <button
        onClick={onClick}
        className={`w-full flex items-start p-2.5 rounded-xl transition-colors 
                   sm:p-3 sm:rounded-2xl 
        ${isActive ? 'bg-[#FFCC0026]' : 'hover:bg-gray-100'}`}
    >
        {/* Original Image: h-10 w-10 rounded-full object-cover mr-3 flex-shrink-0 */}
        <Image src={teacher.avatarSrc} alt={teacher.name} width={40} height={40}
            className="h-8 w-8 rounded-full object-cover mr-2 flex-shrink-0 sm:h-10 sm:w-10 sm:mr-2"
        />
        <div className="flex-1 text-left pt-2  min-w-0">
            {/* Original h4: text-sm font-semibold text-black */}
            <h4 className="text-xs font-semibold text-black truncate sm:text-sm">{teacher.name}</h4>
        </div>
        {teacher.lastMessageTime && (
            // Original span: text-[10px] text-[#6B7280] ml-2 self-end flex-shrink-0
            <span className="text-[9px] text-[#6B7280] ml-1 self-end flex-shrink-0 sm:text-[10px] sm:ml-2">{teacher.lastMessageTime}</span>
        )}
    </button>
);

// --- Component 2: ChatMessage ---
interface ChatMessageProps { message: ChatMessageData; }
export const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => {
    const isUser = message.sender === 'user';
    return (
        // Original wrapper: flex mb-4 ${isUser ? 'justify-end' : 'justify-start'}
        <div className={`flex mb-3 sm:mb-4 ${isUser ? 'justify-end' : 'justify-start'}`}>
            <div
                // Original bubble: max-w-[60%] w-full px-4 py-3 rounded-2xl shadow
                className={`max-w-[70%] sm:max-w-[60%] w-auto px-3 py-2 rounded-xl shadow
                           sm:px-4 sm:py-3 sm:rounded-2xl
                ${isUser ? 'bg-[#3366FF] text-white' : 'bg-[#F9FAFB] text-black'}`}
            >
                {message.text && (
                    // Original text container: flex gap-2 relative ${isUser ? 'flex-row-reverse' : ''}
                    <div className={`flex gap-1.5 relative ${isUser ? 'flex-row-reverse' : ''}`}> {/* Reduced gap */}
                        {/* Original p: text-lg font-light ${isUser ? 'text-right pl-5' : 'pr-5'} */}
                        <p className={`text-sm font-light break-words sm:text-lg ${isUser ? 'text-right sm:pl-6' : 'sm:pr-8'}`}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing <br /> elit. {/* Exact text with <br /> */}
                        </p>
                        {/* Original timestamp: absolute tracking-tight text-[8px] font-normal flex items-center text-nowrap text-xs mt-auto ... */}
                        <p
                            className={`absolute tracking-tight text-[7px] font-normal flex items-center whitespace-nowrap mt-auto
                                       sm:text-[8px] 
                            ${isUser ? 'text-white/85 text-right left-0 bottom-0'
                                    : 'text-[#6B7280] text-left right-0 bottom-0 sm:bottom-1/2 sm:translate-y-1/2'
                                }`}
                        >
                            {message.timestamp}
                        </p>
                    </div>
                )}
                {message.imageUrl && (
                    // Original image div: mt-4
                    <div className="mt-2 sm:mt-4">
                        <Image
                            src={message.imageUrl} alt={message.imageName || 'Chat image'}
                            width={300} height={200} // These are max if not constrained by parent
                            className="w-full max-h-32 rounded-xl object-cover sm:max-h-40 md:max-h-[200px] sm:rounded-2xl"
                        />
                        <div className="flex items-center justify-end mt-1 sm:mt-2">
                            {/* Original button: mt-2 flex items-center text-black gap-1.5 text-xs bg-[#B0B0B033] hover:text-blue-600 p-3 rounded-full border-gray-200 justify-center */}
                            <button className="flex items-center text-black gap-1 text-[10px] bg-[#B0B0B033] hover:text-blue-600 p-2 rounded-full justify-center sm:text-xs sm:gap-1.5 sm:p-3">
                                <FiDownload className="w-3 h-3 sm:w-4 sm:h-4" />
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

// --- Component 3: TeacherListSidebar ---
interface TeacherListSidebarProps {
    teachers: TeacherContact[];
    activeTeacherId: string | null;
    onTeacherSelect: (teacherId: string) => void;
}
const filter = [
    {id: "t1", label: "Teachers"}
]
export const TeacherListSidebar: React.FC<TeacherListSidebarProps> = ({ teachers, activeTeacherId, onTeacherSelect }) => (
    <div className="w-full lg:w-[35%] bg-white rounded-2xl sm:rounded-3xl  p-3 sm:p-4 self-stretch flex flex-col">
        {/* Original h2: text-lg tracking-wide font-popp font-semibold text-[#FF3366] mb-4 px-2 */}
        <h2 className="text-md tracking-wide font-semibold text-[#FF3366] mb-3 px-1 sm:text-lg sm:mb-4 sm:px-2"> {/* Assuming font-popp is global */}
            Recent Chats
        </h2>
        <div className="w-full bg-white text-black flex gap-4 items-center py-2 rounded-xl">
            {/* Search Input */}
            <SearchFilterInline bg={"bg-white"} filters={filter}/>
        </div>
        {/* Original div: space-y-1 max-h-[calc(100vh-12rem)] overflow-y-auto custom-scrollbar pr-2 */}
        <div className="flex-grow space-y-0.5 sm:space-y-1 max-h-[calc(100vh-10rem)] sm:max-h-[calc(100vh-12rem)] overflow-y-auto custom-scrollbar-thin-grey pr-1 sm:pr-2">
            {/* Your original repetition for scroll testing */}
            {[...teachers, ...teachers, ...teachers, ...teachers, ...teachers, ...teachers, ...teachers, ...teachers, ...teachers, ...teachers, ...teachers, ...teachers].map((teacher, indx) => (
                <TeacherListItem
                    key={`${teacher.id}-${indx}`} // Ensure unique key with repeated data
                    teacher={teacher}
                    isActive={activeTeacherId === teacher.id && indx < teachers.length} // Only highlight first set if ids are repeated
                    onClick={() => onTeacherSelect(teacher.id)}
                />
            ))}
        </div>
    </div>
);

// --- Component 4: ChatArea ---
interface ChatAreaProps {
    selectedTeacher: TeacherContact | undefined; messages: ChatMessageData[]; newMessage: string;
    onNewMessageChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onSendMessage: (e: React.FormEvent) => void;
    onBackClick?: () => void;
}
export const ChatArea: React.FC<ChatAreaProps> = ({ selectedTeacher, messages, newMessage, onNewMessageChange, onSendMessage, onBackClick, }) => (
    // Original wrapper: w-full sm:w-[70%] bg-white rounded-3xl shadow-xl flex flex-col h-[calc(100vh-4rem)]
    <div className="w-full relative z-0 lg:w-[65%] bg-[#EEEEEE] rounded-2xl sm:rounded-3xl flex flex-col 
                   h-[calc(80vh)] sm:h-[calc(100vh-10rem)] lg:h-[calc(100vh-8rem)]"
    >
        <div className=" absolute -z-10 opacity-10 rounded-2xl inset-0" style={{
            backgroundImage: "url('/images/brandpatternchat.png')",
            backgroundRepeat: "none",
            backgroundSize: "cover",
            filter: "grayscale(100%)"


        }}></div>
        {/* Responsive height: 80vh for mobile, then your calculation for sm+ */}
        {selectedTeacher ? (
            <>
                {/* Original header: p-4 flex items-center gap-3 shrink-0 */}
                <div className="p-2 mt-4 justify-between z-20 relative flex items-center gap-2 rounded-full bg-white  sm:gap-3">
                    <div className="flex items-center gap-2 sm:gap-3">
                        <Image src={selectedTeacher.avatarSrc} alt={selectedTeacher.name} width={40} height={40} className="h-8 w-8 rounded-full object-cover sm:h-10 sm:w-10" />
                        <h3 className="text-md font-semibold text-black sm:text-lg">{selectedTeacher.name}</h3>
                    </div>
                    {onBackClick && (
                        <div className="p-3 border-b flex items-center bg-white z-30 lg:hidden">
                            <button onClick={onBackClick} className="text-blue-600 font-medium flex items-center gap-2">
                                <FiArrowLeft size={20} />
                            </button>
                        </div>
                    )}
                </div>
                {/* Original messages: flex-grow p-4 space-y-4 overflow-y-auto custom-scrollbar */}
                <div className="flex-grow p-3 space-y-3 overflow-y-auto custom-scrollbar sm:p-4 sm:space-y-4">
                    {messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}
                    <div />
                </div>
                {/* Original input: p-4 shrink-0 */}
                <div className='bg-white rounded-full p-2 mb-4'>
                    <div className="  border-t border-gray-100">
                        <ChatInput value={newMessage} onChange={onNewMessageChange} onSend={onSendMessage} />
                    </div>
                </div>
            </>
        ) : (
            <div className="flex-grow flex items-center justify-center text-gray-400 p-4 text-sm text-center">Select a teacher to start chatting.</div>
        )}
    </div>
);