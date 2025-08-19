// components/ShareVideoPopup.tsx
import { ChevronDown, X } from 'lucide-react';
import { PopupPropB2CTeacher, TeacherB2CBaseModal } from '../../new-pop-ups/page';

const ShareVideo3Popup: React.FC<PopupPropB2CTeacher> = ({
  isOpen,
  onClose,
}) => {
  return (
    <TeacherB2CBaseModal onClose={onClose} isOpen={isOpen} maxWidth='max-w-[400px]'> 
        <div className=" p-6 relative">
      {/* Close Button */}
     <button className="absolute top-4 right-4 p-1 text-black bg-black/5 rounded-full hover:text-black">
        <X size={20} />
      </button>

      {/* Title */}
      <h2 className="text-lg font-semibold mb-6">Share Videos</h2>

      {/* Select Class */}
      <div className="mb-4">
        <label className="block mb-1 text-sm font-medium text-black-300">Select Class</label>
        <div className="relative">
          <select className="w-full appearance-none bg-[#F9FAFB] border border-[#D5D5D5] rounded-full px-4 py-2 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option>Option 1</option>
            <option>Option 2</option>
          </select>
          <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#000000] pointer-events-none" size={18} />
        </div>
      </div>

      {/* Select Group */}
      <div className="mb-6">
        <label className="block mb-1 text-sm font-medium text-black-300">Select Group</label>
        <div className="relative">
          <select className="w-full appearance-none border bg-[#F9FAFB]  border-[#D5D5D5] rounded-full px-4 py-2 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option>Option 1</option>
            <option>Option 2</option>
          </select>
          <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#000000] pointer-events-none" size={18} />
        </div>
      </div>

      {/* Buttons */}
      <div className="flex justify-center sm:justify-end gap-3">
        <button className="px-6 py-2.5 font-medium rounded-full  text-[#6B7280] border border-[#E5E7EB]"
        onClick={onClose}>
          Cancel
        </button>
        <button className="px-6 py-2.5 font-medium rounded-full bg-blue-600 text-white "
        onClick={onClose}>
          Share
        </button>
      </div>
    </div>
    </ TeacherB2CBaseModal>
  );
}

export default ShareVideo3Popup;
