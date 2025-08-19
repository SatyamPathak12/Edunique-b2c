'use client';

import MaxWidthWrapper from '@/components/max-width-wrapper';
import Image from 'next/image';
import { FiMail, FiEyeOff } from 'react-icons/fi';

export default function TeacherLoginForm() {
  return (
    <MaxWidthWrapper className="p-0">
      <div className="min-h-screen bg-blue-600 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-xl flex flex-col-reverse lg:flex-row w-full max-w-6xl overflow-hidden">
          
          {/* Left side: Form */}
          <div className="w-full lg:w-1/2 px-8 py-12 sm:px-12 flex flex-col justify-center">
            <h1 className="text-3xl font-bold text-gray-800 mb-3">Teacher Login</h1>
            <p className="text-sm text-gray-500 mb-8">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>

            <form onSubmit={(e) => e.preventDefault()}>
              <div className="mb-5">
                <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="email">
                  Email Address
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 right-0 flex items-center pr-4">
                    <FiMail className="h-5 w-5 text-gray-400" />
                  </span>
                  <input
                    id="email"
                    type="email"
                    placeholder="Email Address"
                    className="appearance-none border border-gray-300 rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent placeholder-gray-400"
                    required
                  />
                </div>
              </div>

              <div className="mb-8">
                <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="password">
                  Password
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 right-0 flex items-center pr-4">
                    <FiEyeOff className="h-5 w-5 text-gray-400" />
                  </span>
                  <input
                    id="password"
                    type="password"
                    placeholder="******"
                    className="appearance-none border border-gray-300 rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent placeholder-gray-400"
                    required
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg focus:outline-none transition duration-150"
                onClick={() => window.location.href = '/teacher/dashboard'}
              >
                Login
              </button>
            </form>
          </div>

          {/* Right side: Image */}
          <div className="relative w-full lg:w-1/2 bg-white hidden lg:flex items-center justify-center p-8">
            <Image
              src="/teacher/auth/login/star.png"
              width = {100}
              height={100}
              alt="Decoration"
              className="absolute inset-0 w-full h-full object-cover opacity-90"
              priority
            />
            <Image
              src="/teacher/auth/login/login.png"
              width = {1920}
              height={1080}
              alt="Teacher Login"
              className="relative z-10 object-contain max-h-[90%]"
            />
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
}
