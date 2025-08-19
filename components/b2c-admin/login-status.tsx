import React from 'react';

type LoginStatus = 'Success' | 'Fail';

interface LoginRecord {
  date: string;
  time: string;
  ip: string;
  device: string;
  location: string;
  status: LoginStatus;
  action:string;
}

const loginData: LoginRecord[] = [
  { date: '12/10/25', time: '10:12 AM', ip: '192.168.1.23', device: 'Device Name', location: 'State / City', status: 'Fail' ,action:'Active'},
  { date: '12/10/25', time: '10:12 AM', ip: '192.168.1.23', device: 'Device Name', location: 'State / City', status: 'Success',action:'-' },
  { date: '12/10/25', time: '10:12 AM', ip: '192.168.1.23', device: 'Device Name', location: 'State / City', status: 'Success',action:'-' },
  { date: '12/10/25', time: '10:12 AM', ip: '192.168.1.23', device: 'Device Name', location: 'State / City', status: 'Fail',action:'-' },
  { date: '12/10/25', time: '10:12 AM', ip: '192.168.1.23', device: 'Device Name', location: 'State / City', status: 'Fail',action:'-' },
  { date: '12/10/25', time: '10:12 AM', ip: '192.168.1.23', device: 'Device Name', location: 'State / City', status: 'Success' ,action:'-'},
  { date: '12/10/25', time: '10:12 AM', ip: '192.168.1.23', device: 'Device Name', location: 'State / City', status: 'Success',action:'-' },
  { date: '12/10/25', time: '10:12 AM', ip: '192.168.1.23', device: 'Device Name', location: 'State / City', status: 'Fail', action:'-' },
  { date: '12/10/25', time: '10:12 AM', ip: '192.168.1.23', device: 'Device Name', location: 'State / City', status: 'Success',action:'-' },
  { date: '12/10/25', time: '10:12 AM', ip: '192.168.1.23', device: 'Device Name', location: 'State / City', status: 'Success',action:'-' },
];

const LoginTable: React.FC = () => {
  return (
    <div className="overflow-x-auto px-4 rounded-2xl pb-4">
      <table className="min-w-full bg-white px-3 py-2 rounded-2xl border-separate border-spacing-y-2 text-sm">
        <thead>
          <tr className="bg-blue-600  text-white text-left">
            <th className="px-4 py-4 rounded-tl-2xl rounded-bl-2xl">Login Date</th>
            <th className="px-4 py-4">Login Time</th>
            <th className="px-4 py-4">IP Address</th>
            <th className="px-4 py-4">Device</th>
            <th className="px-4 py-4">State / City</th>
            <th className="px-4 py-4 ">Status</th>
            <th className='px-4 py-4 rounded-tr-2xl rounded-br-2xl'>Active</th>
          </tr>
        </thead>
        <tbody>
          {loginData.map((record, index) => (
            <tr key={index} className="bg-gray-100">
              <td className="px-4 py-3 rounded-tl-2xl rounded-bl-2xl">{record.date}</td>
              <td className="px-4 py-3">{record.time}</td>
              <td className="px-4 py-3">{record.ip}</td>
              <td className="px-4 py-3">{record.device}</td>
              <td className="px-4 py-3">{record.location}</td>
              <td className="px-4 py-3 ">
                <span className={`font-medium ${record.status === 'Success' ? 'text-green-500' : 'text-red-500'}`}>
                  {record.status}
                </span>
              </td>
              <td className='px-4 py-3 rounded-tr-2xl rounded-br-2xl'>
                <span className='rounded-2xl bg-white px-2 py-2'> {record.action}</span>
               
                </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LoginTable;
