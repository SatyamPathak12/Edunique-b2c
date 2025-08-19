'use client'

import { useState, useRef } from 'react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Image from 'next/image'
import { FiDownload, FiPaperclip, FiSend } from 'react-icons/fi'

// --- Teacher List Item ---
interface TeacherContact {
	id: string
	name: string
	subject: string
	avatarSrc: string
	lastMessageTime?: string // e.g., "7:00 pm"
	isActive?: boolean
}
const TeacherListItem = ({
	teacher,
	onClick,
	isActive,
}: {
	teacher: TeacherContact
	onClick: () => void
	isActive: boolean
}) => (
	<button
		onClick={onClick}
		className={`w-full flex items-center p-3 rounded-3xl transition-colors ${
			isActive ? 'bg-[#FFCC0026]' : 'hover:bg-gray-100'
		}`}>
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
			<span className="text-[10px] text-[#6B7280] ml-2 self-end flex-shrink-0">{teacher.lastMessageTime}</span>
		)}
	</button>
)

// --- Chat Message Component ---
interface ChatMessageData {
	id: string
	sender: 'user' | 'teacher' // Or use sender's name/ID
	text?: string
	imageUrl?: string
	imageName?: string // For download purposes
	timestamp: string // e.g., "6:50 pm"
}

// --- Sample Data ---
const teachersList: TeacherContact[] = Array.from({ length: 10 }, (_, i) => ({
	id: `teacher${i + 1}`,
	name: 'Teacher Name',
	subject: 'Subject',
	avatarSrc: `/teacher-avatar-chat-${(i % 3) + 1}.jpg`, // Cycle through 3 avatar examples
	lastMessageTime: '7:00 pm',
	isActive: i === 0, // First teacher active by default
}))

const initialChatMessages: ChatMessageData[] = [
	{
		id: 'm1',
		sender: 'teacher',
		text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
		timestamp: '6:50 pm',
		imageUrl: '/moon-chat-image.jpg',
		imageName: 'Moon_Surface.jpg',
	}, // UPDATE PATH
	{
		id: 'm2',
		sender: 'user',
		text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
		timestamp: '6:50 pm',
	},
]
const ChatMessage = ({ message }: { message: ChatMessageData }) => {
	const isUser = message.sender === 'user' // Assuming 'user' is the one sending messages from the input

	return (
		<div className={`flex mb-4 ${isUser ? 'justify-end' : 'justify-start'}`}>
			<div
				className={`max-w-[60%] w-full px-4 py-3 rounded-2xl shadow  ${
					isUser ? 'bg-[#3366FF] text-white' : 'bg-[#F9FAFB] text-black'
				}`}>
				{message.text && (
					<div className={`flex gap-2 relative ${isUser ? 'flex-row-reverse' : ''}`}>
						<p className={`text-lg font-light ${isUser ? 'text-right pl-5' : 'pr-5'}`}>
							Lorem ipsum dolor sit amet, consectetur adipiscing <br /> elit. 
						</p>
						<p
							className={`absolute tracking-tight text-[8px] font-normal flex items-center text-nowrap text-xs mt-auto ${
								isUser ? 'text-white/85 text-right left-0 bottom-0' : 'text-[#6B7280] text-left right-0 bottom-1/2 translate-y-1/2'
							}`}>
							{message.timestamp}
						</p>
					</div>
				)}
				{message.imageUrl && (
					<div className="mt-4">
						<Image
							src={message.imageUrl}
							alt={message.imageName || 'Chat image'}
							width={300} // Adjust as needed
							height={200} // Adjust as needed
							className="w-full max-h-[200px] rounded-2xl object-cover"
						/>
						<div className="flex items-center justify-end">
							<button className="mt-2 flex items-center text-black gap-1.5 text-xs bg-[#B0B0B033] hover:text-blue-600 p-3 rounded-full border-gray-200 justify-center">
								<FiDownload className="w-4 h-4" />
							</button>
						</div>
					</div>
				)}
			</div>
		</div>
	)
}

export default function ChatPage() {
	const [activeTeacherId, setActiveTeacherId] = useState<string | null>(teachersList[0]?.id || null)
	const [messages, setMessages] = useState<ChatMessageData[]>(initialChatMessages)
	const [newMessage, setNewMessage] = useState('')
	const chatEndRef = useRef<HTMLDivElement>(null) // For scrolling to bottom

	const headerUser = {
		name: 'Student Name',
		role: 'Student',
		avatarSrc: '/teacher-b2b/profile.png',
	}
	const selectedTeacher = teachersList.find(t => t.id === activeTeacherId)

	const handleTeacherSelect = (teacherId: string) => {
		setActiveTeacherId(teacherId)
		// Here you would typically fetch chat history for the selected teacher
		setMessages(initialChatMessages) // Reset to initial messages for demo
	}

	const handleSendMessage = (e: React.FormEvent) => {
		e.preventDefault()
		if (newMessage.trim() === '') return

		const messageToSend: ChatMessageData = {
			id: `m${messages.length + 1}`,
			sender: 'user', // Assuming the current user is sending
			text: newMessage,
			timestamp: new Date()
				.toLocaleTimeString([], {
					hour: '2-digit',
					minute: '2-digit',
					hour12: true,
				})
				.toLowerCase(),
		}
		setMessages(prevMessages => [...prevMessages, messageToSend])
		setNewMessage('')
	}

	return (
		<div className="bg-gray-100 min-h-screen flex flex-col">
			<Header user={headerUser} />

			<main className="flex-grow container mx-auto p-4 sm:p-6 lg:p-8 flex gap-5 items-start">
				{/* Left Column: Teacher List */}
				<div className="w-full sm:w-[30%] bg-white rounded-3xl shadow-xl p-4 self-stretch">
					{' '}
					{/* self-stretch */}
					<h2 className="text-lg tracking-wide font-popp font-semibold text-[#FF3366] mb-4 px-2">Teachers</h2>
					<div className="space-y-1 max-h-[calc(100vh-12rem)] overflow-y-auto custom-scrollbar pr-2">
						{/* Scrollable list */}
						{[
							...teachersList,
							...teachersList,
							...teachersList,
							...teachersList,
							...teachersList,
							...teachersList,
							...teachersList,
							...teachersList,
							...teachersList,
							...teachersList,
							...teachersList,
							...teachersList,
						].map((teacher, indx) => (
							<TeacherListItem
								key={indx}
								teacher={teacher}
								isActive={activeTeacherId === teacher.id}
								onClick={() => handleTeacherSelect(teacher.id)}
							/>
						))}
					</div>
				</div>

				{/* Right Column: Chat Interface */}
				<div className="w-full sm:w-[70%] bg-white rounded-3xl shadow-xl flex flex-col h-[calc(100vh-4rem)]">
					{selectedTeacher ? (
						<>
							{/* Chat Header */}
							<div className="p-4 flex items-center gap-3 shrink-0">
								<Image
									src={selectedTeacher.avatarSrc}
									alt={selectedTeacher.name}
									width={40}
									height={40}
									className="h-10 w-10 rounded-full object-cover"
								/>
								<h3 className="text-lg font-semibold text-black">{selectedTeacher.name}</h3>
							</div>

							{/* Chat Messages Area */}
							<div className="flex-grow p-4 space-y-4 overflow-y-auto custom-scrollbar">
								{messages.map(msg => (
									<ChatMessage key={msg.id} message={msg} />
								))}
								<div ref={chatEndRef} />
							</div>

							{/* Message Input Area */}
							<div className="p-4 shrink-0">
								<form
									onSubmit={handleSendMessage}
									className="flex items-center justify-center bg-[#F9FAFB] border-[#D5D5D5] border rounded-full">
									<input
										type="text"
										value={newMessage}
										onChange={e => setNewMessage(e.target.value)}
										placeholder="Message"
										className="flex-grow bg-transparent px-3 py-2 text-sm text-[#6B7280] focus:outline-none placeholder-gray-400"
									/>
									<button type="button" className="p-2 text-[#6B7280] cursor-pointer hover:text-blue-600 focus:outline-none">
										<FiPaperclip className="w-5 h-5" />
									</button>
									<button
										type="submit"
										className="p-2.5 mr-2 text-[#FF3366] rounded-full cursor-pointer focus:outline-none"
										disabled={!newMessage.trim()}>
										<FiSend className="w-5 h-5 transform rotate-45" />
									</button>
								</form>
							</div>
						</>
					) : (
						<div className="flex-grow flex items-center justify-center text-gray-400">Select a teacher to start chatting.</div>
					)}
				</div>
			</main>

			<Footer />
		</div>
	)
}
