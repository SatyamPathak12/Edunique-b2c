"use client"
import React, { useState } from 'react';
import clsx from 'clsx';
import AssignPenaltyModal from '../../pop-ups-2/components/AssignPelanty';

type LoginStatus = 'Present' | 'Absent' | 'Leave' | 'Fail';

interface LoginRecord {
  date: string;
  time: string;
  ip: string;
  device: string;
  location: string;
  status: LoginStatus;
}

const loginData: LoginRecord[] = [
  { date: '12/10/25', time: '10:12 AM', ip: '192.168.1.23', device: 'Device Name', location: 'State / City', status: 'Fail' },
  { date: '12/10/25', time: '-', ip: '-', device: '-', location: '-', status: 'Absent' },
  { date: '12/10/25', time: '10:12 AM', ip: '192.168.1.23', device: 'Device Name', location: 'State / City', status: 'Present' },
  { date: '12/10/25', time: '10:12 AM', ip: '192.168.1.23', device: 'Device Name', location: 'State / City', status: 'Present' },
  { date: '12/10/25', time: '10:12 AM', ip: '192.168.1.23', device: 'Device Name', location: 'State / City', status: 'Present' },
  { date: '12/10/25', time: '-', ip: '-', device: '-', location: '-', status: 'Leave' },
  { date: '12/10/25', time: '10:12 AM', ip: '192.168.1.23', device: 'Device Name', location: 'State / City', status: 'Present' },
  { date: '12/10/25', time: '10:12 AM', ip: '192.168.1.23', device: 'Device Name', location: 'State / City', status: 'Present' },
  { date: '12/10/25', time: '10:12 AM', ip: '192.168.1.23', device: 'Device Name', location: 'State / City', status: 'Fail' },
  { date: '12/10/25', time: '10:12 AM', ip: '192.168.1.23', device: 'Device Name', location: 'State / City', status: 'Present' },
];

const TeacherTable: React.FC = () => {
  const [actionTab, setActionTab] = useState(false)
  return (
    <div className="overflow-x-auto rounded-2xl no-scrollbar">
      <table className="min-w-[900px] px-3 py-2 rounded-2xl w-full bg-white text-sm text-center border-separate border-spacing-y-2">
        <thead>
          <tr className="bg-[#3366ff] text-white whitespace-nowrap">
            <th className="px-8 py-5 text-left rounded-tl-2xl rounded-bl-2xl">Login Date</th>
            <th className="px-8 py-5">Login Time</th>
            <th className="px-8 py-5">IP Address</th>
            <th className="px-8 py-5">Device</th>
            <th className="px-8 py-5">State / City</th>
            <th className="px-8 py-5">Status</th>
            <th className="px-8 py-5 text-right rounded-tr-2xl rounded-br-2xl">Action</th>
          </tr>
        </thead>
        <tbody>
          {loginData.map((record, index) => {
            const isFailOrAbsent = record.status === 'Fail' || record.status === 'Absent';

            return (
              <tr
                key={index}
                className={clsx(
                  'text-black whitespace-nowrap',
                  record.status === 'Absent' && 'bg-[#FF33661A]',
                  record.status === 'Leave' && 'bg-[#FFCC001A]',
                  record.status === 'Fail' && 'bg-[#f9fafb]',
                  record.status === 'Present' && 'bg-[#f9fafb]'
                )}
              >
                <td className="px-8 py-4 text-left border-l border-y border-gray-200  rounded-tl-2xl rounded-bl-2xl">{record.date}</td>
                <td className="px-4 py-4 border-y border-gray-200 ">{record.time}</td>
                <td className="px-4 py-4 border-y border-gray-200 ">{record.ip}</td>
                <td className="px-4 py-4 border-y border-gray-200 ">{record.device}</td>
                <td className="px-4 py-4 border-y border-gray-200 ">{record.location}</td>
                <td className="px-4 py-4 border-y border-gray-200 ">
                  <span
                    className={clsx(
                      'font-medium',
                      record.status === 'Present' && 'text-[#28A745]',
                      record.status === 'Fail' && 'text-[#DC3545]',
                      record.status === 'Absent' && 'text-[#DC3545]',
                      record.status === 'Leave' && 'text-[#FFCC00]'
                    )}
                  >
                    {record.status}
                  </span>
                </td>
                <td className="px-4 py-4 border-r border-y border-gray-200  text-right rounded-tr-2xl rounded-br-2xl">
                  {isFailOrAbsent ? (
                    <button className="border w-full bg-white border-gray-300 rounded-full px-4 py-1 text-xs font-medium cursor-pointer hover:bg-gray-100"
                    onClick={() => setActionTab(true)}
                    >
                      Action
                    </button>
                  ) : (
                    <span className="text-black w-full block text-center">-</span>
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    <AssignPenaltyModal 
    isOpen={actionTab} onClose={() => setActionTab(false)}
    />
    </div>
    
  );
};

export default TeacherTable;
