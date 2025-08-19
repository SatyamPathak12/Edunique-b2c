'use client'

import type React from 'react'

import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import { Search, ChevronDown, Plus, MoreVertical, Paperclip, Send, X } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogClose } from '@/components/ui/dialog'
import { ScrollArea } from '@/components/ui/scroll-area'
import { cn } from '@/lib/utils'
import StudentSidebarWrapper from '@/components/student-sidebar-wrapper'

interface Contact {
	id: string
	name: string
	avatar: string
	lastMessage: string
	time: string
	isOnline: boolean
	emoji?: string
}

interface Message {
	id: string
	senderId: string
	text: string
	timestamp: Date
	emoji?: string
}

export default function Chat() {
	const [contacts] = useState<Contact[]>([
		{
			id: '1',
			name: 'Elmer Laverty',
			avatar: '/student/settings/chats/image1.png',
			lastMessage: 'Haha oh man 🔥',
			time: '12m',
			isOnline: true,
		},
		{
			id: '2',
			name: 'Florencio Dorrance',
			avatar: '/student/settings/chats/image2.png',
			lastMessage: 'woohoooo',
			time: '24m',
			isOnline: true,
		},
		{
			id: '3',
			name: 'Lavern Laboy',
			avatar: '/student/settings/chats/image3.png',
			lastMessage: "Haha that's terrifying 😂",
			time: '1h',
			isOnline: false,
		},
		{
			id: '4',
			name: 'Titus Kitamura',
			avatar: '/student/settings/chats/image4.png',
			lastMessage: 'omg, this is amazing',
			time: '5h',
			isOnline: false,
		},
		{
			id: '5',
			name: 'Geoffrey Mott',
			avatar: '/student/settings/chats/image5.png',
			lastMessage: 'aww 🧡',
			time: '2d',
			isOnline: false,
		},
		{
			id: '6',
			name: 'Alfonzo Schuessler',
			avatar: '/student/settings/chats/image6.png',
			lastMessage: 'perfect!',
			time: '1m',
			isOnline: false,
		},
	])

	const [selectedContact, setSelectedContact] = useState<Contact | null>(contacts[1])
	const [messages, setMessages] = useState<Message[]>([
		{
			id: '1',
			senderId: '2',
			text: 'omg, this is amazing',
			timestamp: new Date(Date.now() - 1000 * 60 * 30),
		},
		{
			id: '2',
			senderId: '2',
			text: 'perfect! ✅',
			timestamp: new Date(Date.now() - 1000 * 60 * 25),
		},
		{
			id: '3',
			senderId: '2',
			text: 'Wow, this is really epic',
			timestamp: new Date(Date.now() - 1000 * 60 * 20),
		},
		{
			id: '4',
			senderId: 'me',
			text: 'How are you?',
			timestamp: new Date(Date.now() - 1000 * 60 * 15),
		},
		{
			id: '5',
			senderId: '2',
			text: 'just ideas for next time',
			timestamp: new Date(Date.now() - 1000 * 60 * 10),
		},
		{
			id: '6',
			senderId: '2',
			text: "I'll be there in 2 mins ⏰",
			timestamp: new Date(Date.now() - 1000 * 60 * 5),
		},
		{
			id: '7',
			senderId: 'me',
			text: 'woohoooo',
			timestamp: new Date(Date.now() - 1000 * 60 * 3),
		},
		{
			id: '8',
			senderId: 'me',
			text: 'Haha oh man',
			timestamp: new Date(Date.now() - 1000 * 60 * 2),
		},
		{
			id: '9',
			senderId: 'me',
			text: "Haha that's terrifying 😂",
			timestamp: new Date(Date.now() - 1000 * 60 * 1),
		},
	])

	const [newMessage, setNewMessage] = useState('')
	const [searchQuery, setSearchQuery] = useState('')
	const [isAddTeacherOpen, setIsAddTeacherOpen] = useState(false)
	const [isMenuOpen, setIsMenuOpen] = useState(false)

	const messagesEndRef = useRef<HTMLDivElement>(null)

	// Auto-scroll to bottom of messages
	useEffect(() => {
		messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
	}, [messages])

	const handleSendMessage = () => {
		if (newMessage.trim() && selectedContact) {
			const newMsg: Message = {
				id: `msg-${Date.now()}`,
				senderId: 'me',
				text: newMessage,
				timestamp: new Date(),
			}
			setMessages([...messages, newMsg])
			setNewMessage('')
		}
	}

	const handleKeyPress = (e: React.KeyboardEvent) => {
		if (e.key === 'Enter' && !e.shiftKey) {
			e.preventDefault()
			handleSendMessage()
		}
	}

	const handleAddTeacher = (contactId: string) => {
		console.log('Adding teacher:', contactId)
		// Implement add teacher functionality here
	}

	const filteredContacts = contacts.filter(contact => contact.name.toLowerCase().includes(searchQuery.toLowerCase()))

	return (
		<StudentSidebarWrapper>
			<div className="max-w-7xl mx-auto bg-white rounded-xl shadow-sm p-6 h-fit">
				<h1 className="text-2xl font-semibold mb-6">Chat</h1>

				<div className="border rounded-lg overflow-hidden">
					<div className="grid grid-cols-1 md:grid-cols-3">
						{/* Contacts List */}
						<div className="border-r">
							<div className="p-4 border-b flex items-center justify-between">
								<div className="flex items-center">
									<h2 className="font-medium">Messages</h2>
									<ChevronDown className="h-4 w-4 ml-1" />
									<span className="ml-2 text-xs bg-gray-100 px-1.5 py-0.5 rounded-full">12</span>
								</div>
								<Button
									size="icon"
									variant="ghost"
									className="rounded-full bg-pink-500 text-white hover:bg-pink-600"
									onClick={() => setIsAddTeacherOpen(true)}>
									<Plus className="h-4 w-4" />
								</Button>
							</div>

							<div className="p-4">
								<div className="relative mb-4">
									<Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
									<Input
										placeholder="Search..."
										className="pl-9 bg-gray-100 border-0"
										value={searchQuery}
										onChange={e => setSearchQuery(e.target.value)}
									/>
								</div>

								<ScrollArea className="h-[500px] pr-4">
									{filteredContacts.map(contact => (
										<div
											key={contact.id}
											className={cn(
												'flex items-center gap-3 p-2 rounded-lg cursor-pointer mb-2',
												selectedContact?.id === contact.id ? 'bg-blue-50' : 'hover:bg-gray-50'
											)}
											onClick={() => setSelectedContact(contact)}>
											<div className="relative">
												<Image
													src={contact.avatar || '/placeholder.svg'}
													alt={contact.name}
													width={40}
													height={40}
													className="rounded-full"
												/>
												{contact.isOnline && (
													<div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-white"></div>
												)}
											</div>
											<div className="flex-1 min-w-0">
												<div className="flex justify-between items-center">
													<h3 className="font-medium text-sm truncate">{contact.name}</h3>
													<span className="text-xs text-gray-500">{contact.time}</span>
												</div>
												<p className="text-xs text-gray-500 truncate">{contact.lastMessage}</p>
											</div>
										</div>
									))}
								</ScrollArea>
							</div>
						</div>

						{/* Chat Area */}
						<div className="col-span-2 flex flex-col h-[600px]">
							{selectedContact ? (
								<>
									{/* Chat Header */}
									<div className="p-4 border-b flex justify-between items-center">
										<div className="flex items-center gap-3">
											<div className="relative">
												<Image
													src={selectedContact.avatar || '/placeholder.svg'}
													alt={selectedContact.name}
													width={40}
													height={40}
													className="rounded-full"
												/>
												{selectedContact.isOnline && (
													<div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-white"></div>
												)}
											</div>
											<div>
												<h3 className="font-medium">{selectedContact.name}</h3>
												<p className="text-xs text-green-500">{selectedContact.isOnline ? 'Online' : 'Offline'}</p>
											</div>
										</div>
										<div className="relative">
											<Button size="icon" variant="ghost" onClick={() => setIsMenuOpen(!isMenuOpen)}>
												<MoreVertical className="h-5 w-5" />
											</Button>

											{isMenuOpen && (
												<div className="absolute right-0 top-full mt-1 bg-white border rounded-lg shadow-lg w-48 z-10">
													<div className="py-1">
														<button className="w-full text-left px-4 py-2 text-sm text-pink-500 hover:bg-gray-50">
															Mute Conversation
														</button>
														<button className="w-full text-left px-4 py-2 text-sm hover:bg-gray-50">Clear Conversation</button>
														<button className="w-full text-left px-4 py-2 text-sm hover:bg-gray-50">Report Conversation</button>
													</div>
												</div>
											)}
										</div>
									</div>

									{/* Messages */}
									<ScrollArea className="flex-1 p-4">
										<div className="space-y-4">
											{messages.map(message => (
												<div key={message.id} className={cn('flex', message.senderId === 'me' ? 'justify-end' : 'justify-start')}>
													{message.senderId !== 'me' && (
														<Image
															src={selectedContact.avatar}
															alt={selectedContact.name}
															width={32}
															height={32}
															className="rounded-full mr-2 self-end"
														/>
													)}
													<div
														className={cn(
															'max-w-[70%] rounded-lg px-4 py-2 text-sm',
															message.senderId === 'me' ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-800'
														)}>
														{message.text}
													</div>
													{message.senderId === 'me' && (
														<Image
															src="/student/settings/chats/me.png"
															alt="Me"
															width={32}
															height={32}
															className="rounded-full ml-2 self-end"
														/>
													)}
												</div>
											))}
											<div ref={messagesEndRef} />
										</div>
									</ScrollArea>

									{/* Message Input */}
									<div className="p-4 border-t flex gap-2">
										<Button size="icon" variant="ghost">
											<Paperclip className="h-5 w-5" />
										</Button>
										<Input
											placeholder="Type a message"
											value={newMessage}
											onChange={e => setNewMessage(e.target.value)}
											onKeyDown={handleKeyPress}
											className="flex-1"
										/>
										<Button
											size="icon"
											className="bg-blue-500 hover:bg-blue-600 text-white rounded-full"
											onClick={handleSendMessage}
											disabled={!newMessage.trim()}>
											<Send className="h-4 w-4" />
										</Button>
									</div>
								</>
							) : (
								<div className="flex-1 flex items-center justify-center text-gray-500">Select a conversation to start chatting</div>
							)}
						</div>
					</div>
				</div>

				{/* Add Teacher Dialog */}
				<Dialog open={isAddTeacherOpen} onOpenChange={setIsAddTeacherOpen}>
					<DialogContent className="sm:max-w-md">
						<DialogHeader>
							<DialogTitle>Add Teacher</DialogTitle>
							<DialogClose className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
								<X className="h-4 w-4" />
								<span className="sr-only">Close</span>
							</DialogClose>
						</DialogHeader>
						<div className="space-y-4 py-4">
							<div className="relative">
								<Input placeholder="Search..." className="bg-gray-100 border-0" />
							</div>

							{contacts.map(contact => (
								<div key={contact.id} className="flex items-center justify-between">
									<div className="flex items-center gap-3">
										<Image
											src={contact.avatar || '/placeholder.svg'}
											alt={contact.name}
											width={40}
											height={40}
											className="rounded-full"
										/>
										<span>{contact.name}</span>
									</div>
									<Button className="bg-blue-500 hover:bg-blue-600 text-white" onClick={() => handleAddTeacher(contact.id)}>
										Add
									</Button>
								</div>
							))}
						</div>
					</DialogContent>
				</Dialog>
			</div>
		</StudentSidebarWrapper>
	)
}
