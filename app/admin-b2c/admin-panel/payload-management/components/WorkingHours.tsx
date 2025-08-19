'use client';

import { FiEdit2 } from "react-icons/fi";
import { BsTrash } from "react-icons/bs";
import { GoPlus } from "react-icons/go";
import { useState } from "react";
import AddWorkingHours from "@/components/b2c-admin/add-working-hours";
import EditWorkingHoursPopup from "@/app/admin-b2c/pop-ups-2/components/editWorkingHours";
const workingHours = [
  {
    day: 'Sunday',
    hours: '11.00 AM – 1.30 AM',
    repeats: 'Weekly',
    location: 'Institute Name',
    city: 'Pune, Maharashtra',
    working: true,
  },
  {
    day: 'Monday',
    hours: 'Not working',
    repeats: 'Repeats',
    location: 'Location',
    city: 'State/City',
    working: false,
  },
  {
    day: 'Tuesday',
    hours: '11.00 AM – 1.30 AM',
    repeats: 'Weekly',
    location: 'Institute Name',
    city: 'Pune, Maharashtra',
    working: true,
  },
  {
    day: 'Wednesday',
    hours: '11.00 AM – 1.30 AM',
    repeats: 'Weekly',
    location: 'Institute Name',
    city: 'Pune, Maharashtra',
    working: true,
  },
  {
    day: 'Thursday',
    hours: '11.00 AM – 1.30 AM',
    repeats: 'Weekly',
    location: 'Institute Name',
    city: 'Pune, Maharashtra',
    working: true,
  },
  {
    day: 'Friday',
    hours: '11.00 AM – 1.30 AM',
    repeats: 'Weekly',
    location: 'Institute Name',
    city: 'Pune, Maharashtra',
    working: true,
  },
];
interface WorkingHoursProps {
  setSelectedTab: (tab: string) => void;
}

const WorkingHours: React.FC<WorkingHoursProps> = ({ setSelectedTab }) => {

  const [addPopup, setAddPopup] = useState(false);
  const [editPopup, setEditPopup] = useState(false);
  const handleClick = () => {
    setSelectedTab("Other Details");
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-wrap gap-2 py-4 md:py-6 border-b-1 border-gray-300 items-center justify-between">
          <div>
            <h2 className="text-lg font-semibold text-gray-800">Working Hours</h2>
            <p className="text-sm text-gray-500">See the days and time this teacher is working.</p>
          </div>
          <button
            onClick={() => setAddPopup(true)}
            className="bg-yellow-400 text-white text-sm font-semibold px-4 py-2 rounded-full hover:opacity-90">
            Add Working Hours
          </button>
        </div>

        {/* Table Header */}
        <div className="overflow-x-auto custom-scrollbar-thin pb-1">
          <div className="min-w-[800px]">
            <div className="grid grid-cols-6 pt-2 pb-6 gap-4 text-sm font-semibold px-4">
              <p className='text-start pl-[25%]'>Day</p>
              <p className='text-center'>Hours</p>
              <p className='text-center'>Repeats</p>
              <p className='text-center'>Location</p>
              <p className='text-center'>State / City</p>
              <p className='text-center'></p>
            </div>

            <div className="space-y-3">
              {workingHours.map((item, idx) => (
                <div
                  key={idx}
                  className="grid grid-cols-6 gap-4 bg-[#f9fafb] border px-4 py-3.5 rounded-2xl items-center text-sm"
                >
                  <div className="font-medium pr-[25%] text-center">{item.day}</div>
                  <div className={item.working ? 'text-center' : 'text-gray-400 text-center'}>{item.hours}</div>
                  <div className='text-center'>{item.repeats}</div>
                  <div className='text-center'>{item.location}</div>
                  <div className='text-center'>{item.city}</div>
                  <div className="flex items-center gap-3 justify-end text-gray-500">
                    {item.working ? (
                      <>
                        <button
                        onClick={() => setEditPopup(true)}
                        className="rounded-full bg-white p-2">
                          <FiEdit2 className="cursor-pointer text-black" />
                        </button>
                        <div className="rounded-full bg-white p-2">
                          <BsTrash className="cursor-pointer text-black" />
                        </div>
                      </>
                    ) : (
                      <div className="rounded-full bg-white p-2 mr-5">
                        <GoPlus className="cursor-pointer text-black" />
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="space-y-2">
          <p className="text-sm font-medium ">Total Working Hours Calculated</p>
          <div className="bg-[#f5f5f5] text-sm text-gray-700 px-4 py-2 rounded-xl max-w-md">
            11.05 Hours Per Month
          </div>
          <button className="bg-[#3366ff] cursor-pointer text-white text-sm px-8 py-2 rounded-full hover:opacity-90"
            onClick={handleClick}>
            Next
          </button>
        </div>
      </div>
      <AddWorkingHours onClose={() => setAddPopup(false)} isOpen={addPopup}/>
        <EditWorkingHoursPopup onClose={() => setEditPopup(false)} isOpen={editPopup}/>
    </>
  );
}

export default WorkingHours;