'use client'

import { FiMoreHorizontal } from 'react-icons/fi'
import Image from 'next/image'
import { useState } from 'react'
import Sidebar from '@/components/teacher/layout';
import Header from '../header';

export default function TeacherPedagogyPage() {
  const pedagogyList = new Array(8).fill({
    name: 'STEM Diploma in Technology Programs',
    price: '₹2,000.00 – ₹5,000.00',
    image: '/teacher/dashboard/pedagogy.png', // Replace with actual image path
  })

  const [openMenuIndex, setOpenMenuIndex] = useState<number | null>(null)

  const toggleMenu = (index: number) => {
    setOpenMenuIndex(openMenuIndex === index ? null : index)
  }

  return (
    <div className="flex min-h-screen bg-gray-100">
      
        {/* Sidebar */}
        <Sidebar />
        {/* Sidebar End */}

        {/* Header */}
        
        {/* Main Content Area */}

        {/* Main Content */}
        <main className="flex-1 ml-64 p-6 md:p-8">
          <Header title="Pedagogy" subtitle="Dashboard" />
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold"></h2>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold">
              + Add Pedagogy
            </button>
          </div>

          <div className="bg-white shadow rounded-xl overflow-hidden">
            <div className="p-4">
              <input
                type="text"
                placeholder="Search"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring focus:ring-blue-200 outline-none"
              />
            </div>
            <table className="w-full text-left relative">
              <thead>
                <tr className="bg-blue-100 text-sm font-semibold text-gray-600">
                  <th className="py-3 px-6">Image</th>
                  <th className="py-3 px-6">Course Name</th>
                  <th className="py-3 px-6">Prize</th>
                  <th className="py-3 px-6 text-right">Action</th>
                </tr>
              </thead>
              <tbody>
                {pedagogyList.map((item, index) => (
                  <tr key={index} className="border-t hover:bg-gray-50 relative">
                    <td className="py-3 px-6">
                      <Image
                        src={item.image}
                        alt="Course thumbnail"
                        width={60}
                        height={60}
                        className="rounded-md"
                      />
                    </td>
                    <td className="py-3 px-6 text-sm font-medium text-gray-800">
                      {item.name}
                    </td>
                    <td className="py-3 px-6 text-sm text-gray-600">
                      {item.price}
                    </td>
                    <td className="py-3 px-6 text-right">
                      <div className="relative inline-block">
                        <button
                          onClick={() => toggleMenu(index)}
                          className="text-gray-600 hover:text-blue-600"
                        >
                          <FiMoreHorizontal className="w-6 h-6" />
                        </button>
                        {openMenuIndex === index && (
                          <div className="absolute right-0 mt-2 w-32 bg-white border border-gray-200 shadow-lg rounded-md z-10">
                            <button className="block w-full px-4 py-2 text-sm hover:bg-gray-100 text-left">
                              View
                            </button>
                            <button className="block w-full px-4 py-2 text-sm hover:bg-gray-100 text-left">
                              Edit
                            </button>
                            <button className="block w-full px-4 py-2 text-sm text-red-600 hover:bg-gray-100 text-left">
                              Delete
                            </button>
                          </div>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </main>
      </div>
    
  )
}
