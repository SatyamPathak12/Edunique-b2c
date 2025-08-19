'use client'

import { useState } from 'react'
import AuthLayout from '@/components/auth-layout' // Adjust path if needed
import { FiEye, FiEyeOff } from 'react-icons/fi'
import { useRouter } from 'next/navigation'

export default function ResetPasswordPage() {
  const [showNewPassword, setShowNewPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

const router = useRouter();
  return (
    <AuthLayout
      leftPanelTitle="Title"
      leftPanelDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry.">
      <h2 className="text-2xl font-bold text-black mb-2">Reset your password</h2>
      <p className="text-xs text-black mb-16 leading-relaxed font-medium">
        Lorem Ipsum is simply dummy text of the printing and typesetting <br /> industry.
      </p>

      <form className="space-y-4 flex flex-col">
        <div>
          <label
            htmlFor="new-password"
            className="block text-sm text-black mb-2">
            New Password
          </label>
          <div className="relative">
            <input
              type={showNewPassword ? 'text' : 'password'}
              id="new-password"
              placeholder="New Password"
              className="w-full px-4 py-1.5 bg-[#F9FAFB] border border-[#D5D5D5] rounded-full focus:outline-none focus:ring-2 focus:ring-[#3366FF]"
            />
            <button
              type="button"
              onClick={() => setShowNewPassword(!showNewPassword)}
              className="absolute inset-y-0 right-0 flex items-center pr-4 text-black">
              {showNewPassword ? <FiEyeOff size={20} /> : <FiEye size={20} />}
            </button>
          </div>
        </div>

        <div>
          <label
            htmlFor="confirm-password"
            className="block text-sm text-black mb-2">
            Confirm Password
          </label>
          <div className="relative">
            <input
              type={showConfirmPassword ? 'text' : 'password'}
              id="confirm-password"
              placeholder="Confirm Password"
              className="w-full px-4 py-1.5 bg-[#F9FAFB] border border-[#D5D5D5] rounded-full focus:outline-none focus:ring-2 focus:ring-[#3366FF]"
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute inset-y-0 right-0 flex items-center pr-4 text-black">
              {showConfirmPassword ? <FiEyeOff size={20} /> : <FiEye size={20} />}
            </button>
          </div>
        </div>

        <button

          type="button"
          
onClick={() => router.push("/admin-b2c/registration/login")} 
          className="self-center w-36 mt-4 bg-[#3366FF] text-white py-3 rounded-full hover:bg-opacity-90 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#3366FF]">
          Set
        </button>
      </form>
    </AuthLayout>
  )
}