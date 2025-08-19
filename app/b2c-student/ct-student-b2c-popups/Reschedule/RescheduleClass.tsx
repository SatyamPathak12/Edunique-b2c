'use client';

import React, { useState } from 'react';
import { FaCheck } from 'react-icons/fa';
import { PopupPropB2CStudent, StudentB2CBaseModal } from '../page';
import SelectLectureToReschedule from './SelectLectureToReschedule';

const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
const dates = [14, 15, 16, 17, 18];
const hours = Array.from({ length: 10 }, (_, i) => 9 + i); // 9 to 18

type Slot = {
  title: string;
  subtitle: string;
  time: string;
};

const mockSchedule: Record<string, Record<number, Slot[]>> = {
  Mon: {
    9: [{ title: 'Title', subtitle: 'Sub title', time: '9:00 AM' }],
    11: [{ title: 'Title', subtitle: 'Sub title', time: '9:00 AM' }],
    13: [{ title: 'Title', subtitle: 'Sub title', time: '9:00 AM' }],
  },
  Tue: {
    11: [{ title: 'Title', subtitle: 'Sub title', time: '9:00 AM' }],
    14: [{ title: 'Title', subtitle: 'Sub title', time: '9:00 AM' }],
    15: [{ title: 'Title', subtitle: 'Sub title', time: '9:00 AM' }],
    17: [{ title: 'Title', subtitle: 'Sub title', time: '9:00 AM' }],
  },
  Wed: {
    11: [{ title: 'Title', subtitle: 'Sub title', time: '9:00 AM' }],
    13: [{ title: 'Title', subtitle: 'Sub title', time: '9:00 AM' }],
    15: [{ title: 'Title', subtitle: 'Sub title', time: '9:00 AM' }],
    17: [{ title: 'Title', subtitle: 'Sub title', time: '9:00 AM' }],
  },
  Thu: {
    9: [{ title: 'Title', subtitle: 'Sub title', time: '9:00 AM' }],
    12: [{ title: 'Title', subtitle: 'Sub title', time: '9:00 AM' }],
    16: [{ title: 'Title', subtitle: 'Sub title', time: '9:00 AM' }],
  },
  Fri: {
    9: [{ title: 'Title', subtitle: 'Sub title', time: '9:00 AM' }],
    11: [{ title: 'Title', subtitle: 'Sub title', time: '9:00 AM' }],
    13: [{ title: 'Title', subtitle: 'Sub title', time: '9:00 AM' }],
    14: [{ title: 'Title', subtitle: 'Sub title', time: '9:00 AM' }],
    16: [{ title: 'Title', subtitle: 'Sub title', time: '9:00 AM' }],
  },
};

const RescheduleClass: React.FC<PopupPropB2CStudent> = ({ isOpen, onClose }) => {
  const [selectedCells, setSelectedCells] = useState<string[]>(['Mon-9']);
  const [lecture, setLecture] = useState(false)
  const toggleCell = (day: string, hour: number) => {
    const key = `${day}-${hour}`;
    // Prevent toggling on cells without slot and not selected already
    const hasSlot = mockSchedule[day]?.[hour] || key === 'Mon-9';

    if (!hasSlot) return;

    setSelectedCells((prev) =>
      prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key]
    );
  };

  return (
    <>
      <StudentB2CBaseModal isOpen={isOpen} onClose={onClose} maxWidth="max-w-4xl">
        <div className="overflow-x-auto px-4 py-6 text-sm min-w-[800px]">
          <h2 className="text-2xl font-semibold mb-4">Request Class Rescheduling</h2>
          <div className="flex flex-col gap-1">
            <label htmlFor="StudentName" className='mb-2 text-base'>Student Name</label>
            <input type="text" id='StudentName' placeholder='Text' className='w-full rounded-full border px-4 py-2.5 bg-[#f9fafb]' />
            <label htmlFor="StudentEmail" className='my-2 text-base'>Student Email</label>
            <input type="text" id='StudentEmail' placeholder='email' className='w-full rounded-full border px-4 py-2.5 bg-[#f9fafb]' />
          </div>

          <h2 className="text-xl font-semibold mt-4">Available Time</h2>
          {/* Header */}
          <div className="grid  grid-cols-[60px_repeat(5,1fr)] border-b border-gray-200 text-center font-medium mb-1">
            <div></div>
            {dates.map((date, i) => (
              <div key={i} className="py-2">
                <div className="text-sm font-medium">{date}</div>
                <div className="text-gray-500 text-xs">{days[i]}</div>
              </div>
            ))}
          </div>

          {/* Rows */}
          {hours.map((hour) => (
            <div
              key={hour}
              className="grid grid-cols-[60px_repeat(5,1fr)] border-b border-gray-200 min-h-[45px]"
            >
              {/* Time Label */}
              <div className="text-right pr-2 py-3 text-gray-500 font-medium text-sm">{`${hour}:00`}</div>

              {/* Cells */}
              {days.map((day) => {
                const key = `${day}-${hour}`;
                const isSelected = selectedCells.includes(key);
                const slots = mockSchedule[day]?.[hour];

                const shouldRender = isSelected || (slots && slots.length);

                return (
                  <div
                    key={key}
                    className={`px-2 py-1 w-full h-full flex items-center justify-center ${shouldRender ? 'cursor-pointer' : ''}`}
                    onClick={() => {
                      if (shouldRender) toggleCell(day, hour);
                    }}
                  >
                    {isSelected ? (
                      <div className="bg-[#3366ff] text-white w-full h-[50px] flex items-center justify-center rounded-xl px-2 py-1">
                        <FaCheck className="text-xs" />
                      </div>
                    ) : (
                      slots &&
                      slots.length > 0 && (
                        <div className="w-full bg-[#3366FF1A] border border-[#3366ff] rounded-xl px-2 py-1 text-left">
                          <div className="flex items-center justify-between">
                            <div className="text-sm font-semibold text-black">{slots[0].title}</div>
                            <div className="text-xs text-right text-black">{slots[0].time}</div>
                          </div>
                          <div className="text-xs text-black mt-1">{slots[0].subtitle}</div>
                        </div>
                      )
                    )}
                  </div>
                );
              })}
            </div>
          ))}
        </div>
        <div className="flex justify-center items-center gap-4 pt-4 pb-3">
          <button onClick={onClose} className="max-w-32 font-medium w-full rounded-full text-[#ff3366] bg-[#ff33661a] py-2.5">Cancel</button>
          <button onClick={() => {
            onClose();
            setTimeout(() => {
              setLecture(true);
            }, 300); // 300ms delay after close
          }}
            className="max-w-32 font-medium w-full rounded-full text-white bg-[#3366ff] py-2.5">Request</button>
        </div>
      </StudentB2CBaseModal>
      <SelectLectureToReschedule isOpen={lecture} onClose={() => setLecture(false)} />
    </>
  );
};

export default RescheduleClass;
