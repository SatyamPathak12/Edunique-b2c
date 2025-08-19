// components/Navbar.js
import Image from 'next/image';
// You might want to install a React icon library like react-icons
// Example: npm install react-icons
// import { FiUsers, FiFileText, FiVideo, FiMessageSquare, FiBell } from 'react-icons/fi';
// import { FaSmile, FaRobot } from 'react-icons/fa';

function Navbar() {
  return (
    // The main navigation bar with a blue background
    <nav className="bg-blue-600 p-4 flex items-center justify-between shadow-md">

      {/* Logo */}
      <div className="text-white text-3xl font-bold">
        eD<span className="text-pink-500">u</span>niq<span className="text-pink-500">u</span>e {/* Approximate logo styling */}
      </div>

      {/* Navigation Links/Buttons and Right Side Elements */}
      <div className="flex items-center justify-center gap-x-6"> {/* Gap between navigation group and right-side group */}

        {/* Navigation Group (Dashboard, Students, Material, etc.) */}
        <div className="flex items-center space-x-4"> {/* Space between nav items */}

          {/* Dashboard (Active Item - style based on image) */}
          <div className="flex items-center  gap-x-1 bg-blue-700 rounded-full px-4 py-2 text-white font-semibold cursor-pointer">
            {/* Using basic emojis as icon placeholders - replace with actual icons */}
            <span>😊</span>
            <span>Dashboard</span>
          </div>

          {/* Students */}
          <div className="flex items-center gap-x-1 text-blue-200 hover:text-white cursor-pointer">
             {/* Icon placeholder */}
            <span>👥</span>
            <span>Students</span>
          </div>

          {/* Material */}
          <div className="flex items-center gap-x-1 text-blue-200 hover:text-white cursor-pointer">
             {/* Icon placeholder */}
            <span>💾</span>
            <span>Material</span>
          </div>

          {/* Recordings */}
          <div className="flex items-center gap-x-1 text-blue-200 hover:text-white cursor-pointer">
             {/* Icon placeholder */}
            <span>🎥</span>
            <span>Recordings</span>
          </div>

          {/* Chat */}
          <div className="flex items-center gap-x-1 text-blue-200 hover:text-white cursor-pointer">
             {/* Icon placeholder */}
            <span>💬</span>
            <span>Chat</span>
          </div>
        </div>

        {/* Right Side: AI Chat, Notifications, Profile */}
        <div className="flex items-center gap-x-6"> {/* Space between right-side items */}

          {/* Ask me! Button */}
          <button className="bg-white text-blue-800 rounded-full px-4 py-2 flex items-center gap-x-2 font-semibold hover:bg-gray-100">
            {/* Icon placeholder */}
            <span>🤖</span>
            <span>Ask me!</span>
          </button>

          {/* Notifications Bell */}
          <div className="text-white text-xl cursor-pointer">
            {/* Icon placeholder */}
            <span>🔔</span>
          </div>

          {/* Profile Picture */}
          {/* Using a placeholder image URL and basic div for size/shape */}
          <div className="rounded-full w-10 h-10 bg-gray-300 overflow-hidden">
             {/* Replace with an actual Image component or img tag with your user's profile pic */}
             <img src="https://via.placeholder.com/40x40" alt="User Profile" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;