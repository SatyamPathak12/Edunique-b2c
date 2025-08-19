// components/PeopleGrid.jsx
"use client"
import React from 'react';
import Link from 'next/link';
export default function StudentGrid ()  {
  const personImageUrl = '/admin/student.png'; 

  const people = Array.from({ length: 100 }, (_, i) => ({
    id: i,
    name: ' Student Name', 
    image: personImageUrl, 
  }));

  return (
    <div className="overflow-y-auto max-h-[80vh] custom-peach-scrollbar mx-auto py-4"> 
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mx-2">
        {people.map((person,index) => (
           <Link href="/admin-b2c/admin-panel/security/student-login-activity" key={index}>
         
          <div
            key={index}
            className="flex items-center bg-[#f3f4f6] rounded-2xl p-2 space-x-4 shadow-sm"
          >
            {/* Image */}
            <img
              src={person.image}
              alt={person.name}
              className="w-14 h-14 sm:w-20 sm:h-16 rounded-2xl object-cover" 
            />
           
            <div className="flex-grow"> 
              <p className="text-base font-semibold text-gray-800">{person.name}</p>
            </div>
          </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

