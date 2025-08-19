"use client";
import Link from "next/link";
import { CiPower } from "react-icons/ci";
const actions = [
  {
    label: 'Profile Management',
    icon: <CiPower className="text-[#6b7280] w-5 h-5" />,
    href: '/admin-b2c/admin-panel/student-profile-management',
  },
];
const StudentPanel = () => {
  return (
    <div className="bg-white my-4 p-4 rounded-2xl">
      <h2 className="font-semibold text-lg mb-4">Student Control Panel</h2>
      <div className="flex flex-wrap gap-4">
      {actions.map((action, index) => (
        <Link href={action.href} passHref key={index}>
          <button className="flex items-center gap-2 cursor-pointer border border-[#e5e7eb] px-2 py-3.5 rounded-xl text-sm bg-[#faf9fb] hover:bg-[#f0f0f0] transition">
            {action.icon}
            {action.label}
          </button>
        </Link>
      ))}
    </div>
    </div>
  );
};

export default StudentPanel;
