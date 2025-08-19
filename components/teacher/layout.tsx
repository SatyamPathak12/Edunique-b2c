import Link from 'next/link';
import {
    FiGrid,
    FiUsers,
    FiMessageSquare, // Placeholder for Pedagogy
    FiPlusCircle,
    FiClipboard,
    FiAward, // Placeholder for Classification
    FiCalendar,
    FiFileText,
    FiBell
} from 'react-icons/fi'; // Using react-icons for example

const navItems = [
    { href: '/teacher/dashboard', label: 'Dashboard', icon: FiGrid, active: true },
    { href: '/teacher/student-list', label: 'Student List', icon: FiUsers },
    { href: '/teacher/pedagogy', label: 'Pedagogy', icon: FiMessageSquare },
    { href: '/teacher/add-pedagogy', label: 'Add Pedagogy', icon: FiPlusCircle },
    { href: '/teacher/dmit-skill-test', label: 'DMIT and Skill Test', icon: FiClipboard },
    { href: '/teacher/classification', label: 'Classification', icon: FiAward },
    { href: '/teacher/bi-weekly-test', label: 'Bi-Weekly Test', icon: FiCalendar },
    { href: '/teacher/edunique-content', label: 'EduNique Content', icon: FiFileText },
    { href: '/teacher/notification', label: 'Notification', icon: FiBell },
];

export default function Sidebar() {
    return (
        <aside className="w-64 h-screen bg-gradient-to-b from-blue-600 to-blue-700 text-white flex flex-col fixed left-0 top-0 z-40">
            <div className="h-20 flex items-center justify-center border-b border-blue-500/30">
                {/* Replace with your actual logo */}
                <span className="text-2xl font-bold italic">EDUNIQUE</span>
                {/* Example using Image if you have one */}
                {/* <Image src="/logo.png" width={150} height={40} alt="EduNique Logo" /> */}
            </div>
            <nav className="flex-1 mt-6 px-4 space-y-2">
                {navItems.map((item) => {
                    const Icon = item.icon;
                    return (
                        <Link
                            key={item.label}
                            href={item.href}
                            className={`flex items-center px-4 py-3 rounded-lg transition-colors duration-150 ${
                                item.active
                                    ? 'bg-blue-700/80 text-white shadow-inner'
                                    : 'text-blue-100 hover:bg-blue-600/50 hover:text-white'
                            }`}
                        >
                            <Icon className="w-5 h-5 mr-3 flex-shrink-0" />
                            <span className="text-sm font-medium">{item.label}</span>
                        </Link>
                    );
                })}
            </nav>
            {/* Optional Footer */}
            {/* <div className="p-4 border-t border-blue-500/30"> Footer Content </div> */}
        </aside>
    );
}