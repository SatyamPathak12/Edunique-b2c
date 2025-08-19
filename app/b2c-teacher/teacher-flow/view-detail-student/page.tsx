
import React from "react";
import Image from 'next/image';
type CardData = {
  id: number;
  name: string;
  role: string;
  course: string;
  level: string;
  group: string;
  image: string;
};
const students = Array.from({ length: 5 }, (_, i) => ({
  id: i + 1,
  name: 'Student Name',
  role: 'student' as const,
  course: 'Course Name',
  level: 'Level / Grade',
  group: 'Group',
  image: '/student-avatar-1.png', // Use same image or add logic to vary if needed
}));
export const sampleData: CardData[] = [...students];

const viewDetailStudent=()=> {

  return (
    <>
    <h1 className = "text-center mt-4 mb-4">Meeting Details</h1>
    
    <div className="flex">
      <div className="mb-4 mt-4 p-4 w-70 ml-12">
        <input type="text" placeholder="Lecure title" className="rounded-3xl w-150 p-2 bg-white mb-8"/>
       <input type="text" placeholder="URL" className="rounded-3xl w-150 p-2 bg-white mb-8"/>
       <input type="text" placeholder="DD/MM/YY" className="rounded-3xl w-150 p-2 bg-white mb-8"/>
       <input type="text" placeholder="16:00" className="rounded-3xl w-150 p-2 bg-white mb-8"/>
       <button className="rounded-3xl w-150 p-2 bg-white mb-6" >Course Name</button>
       <button className="rounded-3xl w-150 p-2 bg-white mb-6" >Batch Name</button>
      
      </div>
      {/* <div className="w-100">
          {sampleData.map((item) => (
                <div key={item.id} className=" items-center border border-gray-300 gap-4 bg-gray-50 rounded-2xl px-2 py-1 shadow-sm">
                  <div className= "w-10 h-10 rounded-xl overflow-hidden mb-4">
                    <Image src={item.image} alt={item.name} fill className="object-cover" />
                  </div>
                </div>
              ))}
      </div> */}

    </div>
    <div className="flex justify-center mb-4">
    <button className="rounded-3xl px-8 py-1 bg-[#3366ff] ml-2 text-white">Edit</button>
    <button className="rounded-3xl p-4">Discard</button>
    </div>
       </>
  );
}
export default viewDetailStudent;