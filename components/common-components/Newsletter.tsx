"use client"
import React, { useState } from 'react'

const Newsletter = () => {
    const [newsletterEmail, setNewsletterEmail] = useState('')

    const handleNewsletterSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        console.log('Newsletter Subscription:', newsletterEmail)
        // API call to subscribe
        setNewsletterEmail('')
    }
    return (
        <div
            className="mt-4 rounded-2xl p-8 md:p-12 text-center text-white relative overflow-hidden bg-pink-600 bg-repeat"
            style={{
                backgroundImage: 'url(/pattern-2.png)', // UPDATE PATH
                backgroundSize: '1500px',
            }}>
            <div className="relative z-10">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3">Subscribe to our newsletter</h2>
                <p className="text-xs md:text-sm opacity-90 mb-8 max-w-lg mx-auto">Lorem Ipsum is simply dummy text of the printing.</p>
                <form
                    onSubmit={handleNewsletterSubmit}
                    className="max-w-md mx-auto">
                    <div className=" flex relative items-center bg-white rounded-full p-1.5">
                        <input
                        type="email"
                        value={newsletterEmail}
                        onChange={e => setNewsletterEmail(e.target.value)}
                        placeholder="Email Address"
                        className="w-full px-5 py-2.5 text-gray-700 text-md bg-transparent border-none focus:outline-none placeholder-gray-400"
                        required
                    />
                    <button
                        type="submit"
                        className="px-10 py-2.5 bg-[#FFCC00]   text-white font-semibold text-sm rounded-full hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:ring-offset-2 transition-colors">
                        Send
                    </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Newsletter