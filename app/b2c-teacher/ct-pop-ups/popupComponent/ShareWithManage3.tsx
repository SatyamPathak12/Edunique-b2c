// components/ShareVideoPopup.tsx
import { ChevronDown, X } from 'lucide-react';
import { PopupPropB2CTeacher, TeacherB2CBaseModal } from '../../new-pop-ups/page';
import DropdownOptions5 from '@/components/common-components/Dropdown/DropdownOptions';

const ShareWithManage3VideoPopup: React.FC<PopupPropB2CTeacher> = ({
  isOpen,
  onClose,
}) => {
  return (
    <TeacherB2CBaseModal onClose={onClose} isOpen={isOpen} maxWidth='max-w-[400px]'> 
        <div className=" p-6 relative">
      {/* Close Button */}
     <button onClick={onClose} className="absolute top-4 right-4 p-1 text-black bg-black/5 rounded-full hover:text-black">
        <X size={20} />
      </button>

      {/* Title */}
      <h2 className="text-lg font-semibold mb-6">Share With - Manage Access</h2>

      {/* Select Class */}
      <div className="mb-4">
       <DropdownOptions5 label='Select Class' options='Option 1'/>
      </div>

      {/* Select Group */}
      <div className="mb-6">
        <DropdownOptions5 label='Select Group' options='Option 1'/>
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

export default ShareWithManage3VideoPopup;
