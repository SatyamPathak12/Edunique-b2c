// class-recording-pop-ups.tsx
import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";
import { FiX, FiChevronDown, FiUploadCloud } from "react-icons/fi";

interface BaseModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  maxWidth?: string;
}
const BaseModal: React.FC<BaseModalProps> = ({
  isOpen,
  onClose,
  children,
  maxWidth = "max-w-md", 
}) => {
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleEsc);
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      window.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "auto";
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          onClick={onClose}
          className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center p-4 z-50"
        >
          <motion.div
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className={`bg-white rounded-2xl shadow-xl w-full ${maxWidth} overflow-hidden`}
          >
            {children}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

// --- Helper Components for Forms ---
const FormGroup: React.FC<{ label: string; children: React.ReactNode }> = ({
  label,
  children,
}) => (
  <div>
    <label className="block text-sm font-semibold text-black mb-2">
      {label}
    </label>
    {children}
  </div>
);


// --- 2. Add Video Modal ---
const AddVideoModal: React.FC<BaseModalProps> = ({ isOpen, onClose }) => (
  <BaseModal isOpen={isOpen} onClose={onClose}>
    <div className="p-6">
      <div className="flex justify-between items-center mb-3">
        <h2 className="text-xl font-bold">Add Videos</h2>
        <button
          onClick={onClose}
          className="p-1.5 bg-[#F9FAFB] rounded-full hover:bg-gray-200"
        >
          <FiX />
        </button>
      </div>
      <div className="space-y-2">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          <FormGroup label="Select Class">
            <div className="relative">
              <select className="w-full appearance-none bg-[#F9FAFB] border-[#D5D5D5] border rounded-full px-4 py-2.5 pr-8 focus:ring-2 focus:ring-blue-500 outline-none">
                <option>Option 1</option>
              </select>
              <FiChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-black pointer-events-none" />
            </div>
          </FormGroup>
          <FormGroup label="Topic Name">
            <input
              type="text"
              placeholder="Text"
              className="w-full bg-[#F9FAFB] border-[#D5D5D5] border rounded-full px-4 py-2.5 focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </FormGroup>
        </div>
        <FormGroup label="Enter URL">
          <input
            type="text"
            placeholder="Text"
            className="w-full bg-[#F9FAFB] border-[#D5D5D5] border rounded-full px-4 py-2.5 focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </FormGroup>
        <div className="text-center text-black my-2">Or</div>
        <FormGroup label="Upload File">
          <div className="relative flex items-center w-full bg-[#F9FAFB] border-[#D5D5D5] border rounded-full px-4 py-2.5">
            <div className="p-1 rounded-full bg-[#FF33661A] mr-2">

              <FiUploadCloud className="text-[#FF3366] h-full" />
            </div>
            <span className="text-[#6B7280]">File Name</span>
          </div>
        </FormGroup>
        <FormGroup label="Description">
          <textarea
            rows={4}
            placeholder="Text"
            className="w-full bg-[#F9FAFB] border-[#D5D5D5] border rounded-xl px-4 py-2.5 focus:ring-2 focus:ring-blue-500 outline-none resize-none"
          ></textarea>
        </FormGroup>
      </div>
      <div className="flex justify-end gap-3 mt-4">
        <button
          onClick={onClose}
          className="px-6 py-2.5 border border-[#E5E7EB] text-[#6B7280] font-semibold rounded-full hover:bg-gray-200"
        >
          Cancel
        </button>
        <button className="px-8 py-2.5 bg-[#3366FF] text-white font-semibold rounded-full hover:bg-blue-700">
          Add
        </button>
      </div>
    </div>
  </BaseModal>
);

// --- 3. Share Video / Manage Access Modal ---
interface ShareModalProps extends BaseModalProps {
  title: string;
}
const ShareVideoModal: React.FC<ShareModalProps> = ({
  isOpen,
  onClose,
  title,
}) => (
  <BaseModal isOpen={isOpen} onClose={onClose}>
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold">{title}</h2>
        <button
          onClick={onClose}
          className="p-1.5 bg-[#F9FAFB] rounded-full hover:bg-gray-200"
        >
          <FiX />
        </button>
      </div>
      <div className="space-y-4">
        <FormGroup label="Select Class">
          <div className="relative">
            <select className="w-full appearance-none bg-[#F9FAFB] border-[#D5D5D5] border rounded-full px-4 py-2.5 pr-8 focus:ring-2 focus:ring-blue-500 outline-none">
              <option>Option 1</option>
            </select>
            <FiChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-[#6B7280] pointer-events-none" />
          </div>
        </FormGroup>
        <FormGroup label="Select Group">
          <div className="relative">
            <select className="w-full appearance-none bg-[#F9FAFB] border-[#D5D5D5] border rounded-full px-4 py-2.5 pr-8 focus:ring-2 focus:ring-blue-500 outline-none">
              <option>Option 1</option>
            </select>
            <FiChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-[#6B7280] pointer-events-none" />
          </div>
        </FormGroup>
      </div>
      <div className="flex justify-end gap-3 mt-4">
        <button
          onClick={onClose}
          className="px-6 py-2.5 border border-[#E5E7EB] text-[#6B7280] font-semibold rounded-full hover:bg-gray-200"
        >
          Cancel
        </button>
        <button className="px-8 py-2.5 bg-[#3366FF] text-white font-semibold rounded-full hover:bg-blue-700">
          Share
        </button>
      </div>
    </div>
  </BaseModal>
);

// --- 4. Delete Recording Modal ---
const DeleteRecordingModal: React.FC<BaseModalProps> = ({
  isOpen,
  onClose,
}) => (
  <BaseModal isOpen={isOpen} onClose={onClose} maxWidth="max-w-lg">
    <div className="p-6">
      <div className="flex justify-between items-start mb-6">
        <h2 className="text-xl font-bold text-center w-full pt-1.5">
          Delete Recording
        </h2>
        <button
          onClick={onClose}
          className="p-1.5 bg-[#F9FAFB] rounded-full hover:bg-gray-200"
        >
          <FiX />
        </button>
      </div>
      <div className="mb-3">
        <h3 className="text-base font-semibold mb-2">Recording Name</h3>
        <p className="text-[#6B7280] text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
          mattis magna vitae odio ullamcorper vestibulum. Maecenas semper leo ac
          tellus lobortis, vel vehicula urna posuere.
        </p>
      </div>
      <div className="flex justify-end gap-3 mt-4">
        <button
          onClick={onClose}
          className="px-6 py-2.5 border border-[#E5E7EB] text-[#6B7280] font-semibold rounded-full hover:bg-gray-200"
        >
          Cancel
        </button>
        <button className="px-8 py-2.5 bg-[#FF33661A] text-[#FF3366] font-semibold rounded-full hover:bg-pink-200">
          Delete
        </button>
      </div>
    </div>
  </BaseModal>
);