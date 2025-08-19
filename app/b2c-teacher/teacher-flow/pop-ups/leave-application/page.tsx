// components/LeaveApplicationPopup.tsx
import { X, Calendar, ChevronDown } from "lucide-react";

export default function LeaveApplicationPopup() {
  return (
    <div className="bg-white mx-auto max-h-[90vh] overflow-y-auto scrollbar-none my-4 rounded-3xl shadow-xl p-4 w-full max-w-lg relative">
      {/* Close Button */}
      <button className="absolute top-4 right-4 text-black p-1 bg-black/5 rounded-full hover:text-black">
        <X size={20} />
      </button>

      {/* Title */}
      <h2 className="text-[20px] font-semibold mb-6">Apply for Leave</h2>

      {/* Teacher Name */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-black mb-1">
          Teacher Name
        </label>
        <input
          type="text"
          placeholder="Text"
          className="w-full text-[#6b7280] px-4 py-2 rounded-full border-[#D5D5D5]  bg-[#F9FAFB] border focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
        />
      </div>

      {/* Email ID */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-black mb-1">
          Email id
        </label>
        <input
          type="email"
          placeholder="Text"
          className="w-full text-[#6b7280] px-4 py-2 rounded-full border bg-[#F9FAFB] border-[#D5D5D5] focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
        />
      </div>

      {/* Leave Type Dropdown */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-black mb-1">
          Leave type
        </label>
        <div className="relative">
          <select className="w-full appearance-none border text-[#6B7280] bg-[#F9FAFB]  border-[#D5D5D5] rounded-full px-4 py-2 pr-10 text-sm text-[#6b7280]focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option>Sick leave</option>
            <option>Casual leave</option>
            <option>Emergency leave</option>
          </select>
          <ChevronDown
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-black pointer-events-none"
            size={18}
          />
        </div>
      </div>

      {/* From Date */}

      <div className="mb-4">
        <label className="block text-sm font-medium text-black mb-1">
          From Date
        </label>
        <div className="relative">
          <input
            type="date"
            className="w-full  px-4 py-2 rounded-full text-[#6B7280] bg-[#F9FAFB]  border-[#D5D5D5] border pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500
        [&::-webkit-calendar-picker-indicator]:opacity-0
        [&::-webkit-calendar-picker-indicator]:absolute
        [&::-webkit-calendar-picker-indicator]:right-3
        [&::-webkit-calendar-picker-indicator]:top-1/2
        [&::-webkit-calendar-picker-indicator]:-translate-y-1/2
        [&::-webkit-calendar-picker-indicator]:h-5
        [&::-webkit-calendar-picker-indicator]:w-5
      "
          />
          <Calendar
            size={18}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none"
          />
        </div>
      </div>

      {/* To Date */}

      <div className="mb-4">
        <label className="block text-sm font-medium text-black mb-1">
          From Date
        </label>
        <div className="relative">
          <input
            type="date"
            className="w-full px-4 py-2 rounded-full text-[#6B7280]  bg-[#F9FAFB] border-[#D5D5D5] border pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500
        [&::-webkit-calendar-picker-indicator]:opacity-0
        [&::-webkit-calendar-picker-indicator]:absolute
        [&::-webkit-calendar-picker-indicator]:right-3
        [&::-webkit-calendar-picker-indicator]:top-1/2
        [&::-webkit-calendar-picker-indicator]:-translate-y-1/2
        [&::-webkit-calendar-picker-indicator]:h-5
        [&::-webkit-calendar-picker-indicator]:w-5
      "
          />
          <Calendar
            size={18}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none"
          />
        </div>
      </div>

      {/* Detailed Reason */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-black mb-1">
          Detailed Reason
        </label>
        <textarea
          placeholder="Text"
          rows={4}
          className="w-full px-4 py-2 rounded-xl text-[#6B7280] bg-[#F9FAFB]  border-[#D5D5D5] border focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm resize-none"
        />
      </div>

      {/* Buttons */}
      <div className="flex justify-end gap-3">
        <button className="px-4 py-2 rounded-full  text-[#6B7280] border border-[#E5E7EB]">
          Cancel
        </button>
        <button className="px-6 py-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 text-sm">
          Apply
        </button>
      </div>
    </div>
  );
}
