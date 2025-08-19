import React from 'react';

type LoginStatus = 'Present' | 'Absent';

interface LoginRecord {
  date: string;
  time: string;
  ip: string;
  device: string;
  location: string;
  status: LoginStatus;
}

const loginData: LoginRecord[] = Array.from({ length: 10 }).map((_, i) => ({
  date: '12/10/25',
  time: '10:12 AM',
  ip: '192.168.1.23',
  device: 'Device Name',
  location: 'State / City',
  status: i % 3 === 0 ? 'Absent' : 'Present', // alternating some Absents
}));

const StudentTable: React.FC = () => {
  return (
    <div className="rounded-2xl  overflow-x-auto custom-scrollbar-thin ">
        <table className="min-w-[900px] w-full bg-white px-3 rounded-2xl py-2 text-sm text-center border-separate border-spacing-y-2">
          <thead>
            <tr className="bg-[#3366ff] whitespace-nowrap text-white">
              <th className="px-8 py-5 text-left rounded-tl-2xl rounded-bl-2xl">Login Date</th>
              <th className="px-8 py-5">IP Address</th>
              <th className="px-8 py-5">Login Time</th>
              <th className="px-8 py-5">Device</th>
              <th className="px-8 py-5">State / City</th>
              <th className="px-8 py-5 text-right rounded-tr-2xl rounded-br-2xl">Status</th>
            </tr>
          </thead>
          <tbody>
            {loginData.map((record, index) => (
              <tr key={index} className="bg-[#f9fafb] whitespace-nowrap">
                <td className="px-10 py-3 text-left border-l border-y  rounded-tl-2xl rounded-bl-2xl">{record.date}</td>
                <td className="px-4 py-4 border-y">{record.time}</td>
                <td className="px-4 py-4 border-y">{record.ip}</td>
                <td className="px-4 py-4 border-y">{record.device}</td>
                <td className="px-4 py-4 border-y">{record.location}</td>
                <td className="px-8 py-4 text-right border-r border-y rounded-tr-2xl rounded-br-2xl">
                  <span className={` ${record.status === 'Present' ? 'text-[#28A745]' : 'text-[#DC3545]'}`}>
                    {record.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

  );
};

export default StudentTable;
