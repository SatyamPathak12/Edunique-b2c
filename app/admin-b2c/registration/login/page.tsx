'use client'

import { useState } from 'react'
import AuthLayout from '@/components/auth-layout' // Adjust path if needed
import { FiEye, FiEyeOff } from 'react-icons/fi'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)
  const Router = useRouter();

  return (
    <AuthLayout
      leftPanelTitle="Title"
      leftPanelDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry.">
      <h2 className="text-2xl font-bold text-black mb-2">Login</h2>
      <p className="text-xs text-black mb-16 leading-relaxed font-medium">
        Lorem Ipsum is simply dummy text of the printing and typesetting <br /> industry.
      </p>

      <form className="space-y-4 flex flex-col">
        <div>
          <label htmlFor="email" className="block text-sm text-black mb-2">
            Email ID
          </label>
          <input
            type="email"
            id="email"
            placeholder="Email"
            className="w-full px-4 py-1.5 bg-[#F9FAFB] border border-[#D5D5D5] rounded-full focus:outline-none focus:ring-2 focus:ring-[#3366FF]"
          />
        </div>
        <div>
          <div className="flex justify-between items-center mb-2">
            <label
              htmlFor="password"
              className="block text-sm text-black">
              Password
            </label>
          </div>
          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              placeholder="Password"
              className="w-full px-4 py-1.5 bg-[#F9FAFB] border border-[#D5D5D5] rounded-full focus:outline-none focus:ring-2 focus:ring-[#3366FF]"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-0 flex items-center pr-4 text-black">
              {showPassword ? <FiEyeOff size={20} /> : <FiEye size={20} />}
            </button>
          </div>
          <div className="flex justify-end items-center my-2">
            <Link href="/admin-b2c/registration/forgot-password" className="text-xs font-medium text-[#6B7280] hover:underline">
              Forgot Password?
            </Link>
          </div>
        </div>

        <button
          type="button"
          onClick={()=>{
            Router.push('/admin-b2c/admin-panel/dashboard')
          }}
          className="self-center w-36 bg-[#3366FF] text-white py-3 rounded-full hover:bg-opacity-90 transition-all cursor-pointer duration-200 focus:outline-none focus:ring-2 focus:ring-[#3366FF]">
          Login
        </button>

        <div className="self-center text-center text-[9px] w-fit text-[#6B7280] border-b-2 border-black px-1">
          <Link href="#" className=" text-[#6B7280]">
            Create a new account
          </Link>
        </div>
      </form>
    </AuthLayout>
  )
}