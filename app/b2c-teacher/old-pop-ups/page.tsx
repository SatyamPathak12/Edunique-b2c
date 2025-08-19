// /app/showcase/popups/page.tsx (or your preferred path)
"use client";

import React, { useState, useEffect } from "react";

import Image from "next/image";
import {
  FiX,
  FiEye,
  FiEyeOff,
  FiUploadCloud,
  FiChevronDown,
  FiEdit,
  FiTrash2,
} from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion";
import RequestPayRaise from "./components/RequestPayRaise";
import ShiftStudentModal from "./components/ShiftStudent";
import RemoveStudent from "./components/RemoveStudent";
import ShiftStudentConfirmModal from "./components/ConfirmShift";

// --- Base Modal Component (for reuse and professional structure) ---
interface BaseModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
    maxWidth?: string;
}

export interface PopupProp {
    isOpen: boolean;
    onClose: () => void;
}

export const BaseModal: React.FC<BaseModalProps> = ({
    isOpen,
    onClose,
    children,
    maxWidth,
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
                    className="fixed inset-0 bg-[#0000004a] flex items-center justify-center p-4 z-50"
                >
                    <motion.div
                        onClick={(e) => e.stopPropagation()}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className={`bg-white rounded-3xl w-full ${maxWidth} overflow-hidden`}
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
    <label className="block text-sm font-regular text-black mb-2">
      {label}
    </label>
    {children}
  </div>
);

// --- 1. Confirm Password Modal ---
const ConfirmPasswordModal: React.FC<PopupProp> = ({
  isOpen,
  onClose,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <BaseModal isOpen={isOpen} onClose={onClose} maxWidth="max-w-lg">
      <div className="p-6 bg-white rounded-xl shadow-lg">
        <div className="flex justify-between items-start mb-4">
          <h2 className="text-xl font-semibold">Confirm your choice</h2>
          <button
            type="button"
            onClick={onClose}
            className="p-0.5 bg-black/5 rounded-full hover:bg-gray-200"
          >
            <FiX className="w-4 h-4 sm:w-6 sm:h-6 text-black" />
          </button>
        </div>

        <p className="text-[#6B7280]  text-center text-sm mb-6 px-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco.
        </p>

        <FormGroup label="Enter Password">
          <div className="relative ">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="New Password"
              className="w-full bg-[#F9FAFB] border-[#D5D5D5] border rounded-full px-4 py-2.5 pr-10 focus:ring-2 focus:ring-blue-500 outline-none"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-black"
            >
              {showPassword ? <FiEyeOff /> : <FiEye />}
            </button>
          </div>
        </FormGroup>

        <div className="flex justify-end gap-3 mt-4">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-3 border border-[#E5E7EB] text-[#6B7280] font-semibold rounded-full hover:bg-gray-200"
          >
            Cancel
          </button>
          <button
            type="button"
            className="px-4 py-3 bg-[#3366FF] text-white font-semibold rounded-full hover:bg-blue-700"
          >
            Apply
          </button>
        </div>
      </div>
    </BaseModal>
  );
};

// --- 2. Add Video Modal ---
const AddVideoModal: React.FC<BaseModalProps> = ({ isOpen, onClose }) => (
  <BaseModal isOpen={isOpen} onClose={onClose} maxWidth="max-w-md">
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
  <BaseModal isOpen={isOpen} onClose={onClose} maxWidth="max-w-md">
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
    <div className="p-6 ">
      <div className="flex  space-y-3 justify-between items-start mb-6">
        <h2 className="text-lg font-bold text-center w-full pt-1.5">
          Delete Recording
        </h2>
        <button
          onClick={onClose}
          className="p-1.5 bg-black/5 rounded-full hover:bg-gray-200"
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
          className="px-4 py-2.5 border border-[#E5E7EB] text-[#6B7280] font-semibold rounded-full hover:bg-gray-200"
        >
          Cancel
        </button>
        <button className="px-4 py-2.5 bg-[#FF33661A] text-[#FF3366] font-semibold rounded-full hover:bg-pink-200">
          Delete
        </button>
      </div>
    </div>
  </BaseModal>
);

// --- 5. Edit Demo Video Modal ---
const EditDemoVideoModal: React.FC<BaseModalProps> = ({ isOpen, onClose }) => (
  <BaseModal isOpen={isOpen} onClose={onClose} maxWidth="max-w-sm">
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold">Edit Demo Video</h2>
        <button
          onClick={onClose}
          className="p-1.5 bg-[#F9FAFB] rounded-full hover:bg-gray-200"
        >
          <FiX />
        </button>
      </div>
      <FormGroup label="Upload Document">
        <div className="relative flex items-center w-full bg-[#F9FAFB] border-[#D5D5D5] border rounded-full px-4 py-2.5">
          <div className="p-1 rounded-full bg-[#FF33661A] mr-2">
            <FiUploadCloud className="text-[#FF3366] h-5 w-5" />
          </div>
          <span className="text-[#6B7280]">File Name</span>
        </div>
      </FormGroup>
    </div>
  </BaseModal>
);

// --- 7. Schedule Meeting
const ScheduleMeetingModal: React.FC<BaseModalProps> = ({
  isOpen,
  onClose,
}) => {
  return (
    <BaseModal isOpen={isOpen} onClose={onClose}>
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h2 className="text-xl font-bold">Schedule Meeting</h2>
          <button
            onClick={onClose}
            className="p-1.5 bg-[#F9FAFB] rounded-full hover:bg-gray-200"
          >
            <FiX />
          </button>
        </div>
        <FormGroup label=" ">
          <div className="relative">Hola</div>
        </FormGroup>
        <div className="flex justify-end gap-3 mt-4">
          <button
            onClick={onClose}
            className="px-6 py-2.5 border border-[#E5E7EB] text-[#6B7280] font-semibold rounded-full hover:bg-gray-200"
          >
            Cancel
          </button>
          <button className="px-8 py-2.5 bg-[#3366FF] text-white font-semibold rounded-full hover:bg-blue-700">
            Apply
          </button>
        </div>
      </div>
    </BaseModal>
  );
};

// --- 8. Reschedule meeting student

const ReScheduleMeetingStudentModal: React.FC<BaseModalProps> = ({
  isOpen,
  onClose,
}) => {
  return (
    <BaseModal isOpen={isOpen} onClose={onClose}>
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h2 className="text-xl font-bold">Edit Meeting</h2>
          <button
            onClick={onClose}
            className="p-1.5 bg-[#F9FAFB] rounded-full hover:bg-gray-200"
          >
            <FiX />
          </button>
        </div>
        <FormGroup label=" ">
          <div className="relative">Hola</div>
        </FormGroup>
        <div className="flex justify-end gap-3 mt-4">
          <button
            onClick={onClose}
            className="px-6 py-2.5 border border-[#E5E7EB] text-[#6B7280] font-semibold rounded-full hover:bg-gray-200"
          >
            Cancel
          </button>
          <button className="px-8 py-2.5 bg-[#3366FF] text-white font-semibold rounded-full hover:bg-blue-700">
            Apply
          </button>
        </div>
      </div>
    </BaseModal>
  );
};

// --- 9. Reschedule meeting teacher

const ReScheduleMeetingTeacherModal: React.FC<BaseModalProps> = ({
  isOpen,
  onClose,
}) => {
  return (
    <BaseModal isOpen={isOpen} onClose={onClose}>
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h2 className="text-xl font-bold">Edit Meeting</h2>
          <button
            onClick={onClose}
            className="p-1.5 bg-[#F9FAFB] rounded-full hover:bg-gray-200"
          >
            <FiX />
          </button>
        </div>
        <FormGroup label=" ">
          <div className="relative">Hola</div>
        </FormGroup>
        <div className="flex justify-end gap-3 mt-4">
          <button
            onClick={onClose}
            className="px-6 py-2.5 border border-[#E5E7EB] text-[#6B7280] font-semibold rounded-full hover:bg-gray-200"
          >
            Cancel
          </button>
          <button className="px-8 py-2.5 bg-[#3366FF] text-white font-semibold rounded-full hover:bg-blue-700">
            Apply
          </button>
        </div>
      </div>
    </BaseModal>
  );
};

// --- 10. pin
const PinModal: React.FC<BaseModalProps> = ({ isOpen, onClose }) => {
  return (
    <BaseModal isOpen={isOpen} onClose={onClose} maxWidth="max-w-[150px] w-full rounded-xl py-3 cursor-pointer">
        <div className="flex justify-center items-start">
          <h2 className="text-base  font-medium">Pin Chat</h2>
        </div>
    </BaseModal>
  );
};
const UnpinModal: React.FC<BaseModalProps> = ({ isOpen, onClose }) => {
  return (
    <BaseModal isOpen={isOpen} onClose={onClose} maxWidth="max-w-[150px] w-full rounded-xl py-3 cursor-pointer">
        <div className="flex justify-center items-start">
          <h2 className="text-base font-medium">Unpin Chat</h2>
        </div>
    </BaseModal>
  );
};





// --- Main Page Component to trigger modals ---
export default function AllPopupsPage() {
  const [openModal, setOpenModal] = useState<string | null>(null);
  // const [showActionsPopup, setShowActionsPopup] = useState(false);

  const modalButtons = [
    { id: "confirmPassword", label: "Confirm Password" },
    { id: "addVideo", label: "Add Video" },
    { id: "shareVideo", label: "Share Video" },
    { id: "manageAccess", label: "Manage Access" },
    { id: "deleteRecording", label: "Delete Recording" },
    { id: "editDemoVideo", label: "Edit Demo Video" },
    { id: "payRaise", label: "Request Pay Raise" },
    { id: "scheduleMeeting", label: "Schedule Meeting" },
    { id: "reScheduleMeetingTeacher", label: "Reschedule Meeting Teacher" },
    { id: "reScheduleMeetingStudent", label: "Reschedule Meeting Student" },
    { id: "viewMeetingTeacher", label: "View Meeting Teacher" },
    { id: "viewMeetingStudent", label: "View Meeting Student" },
    { id: "pinChat", label: "Pin Chat" },
    { id: "unpinChat", label: "Unpin Chat" },
    { id: "shiftStudent", label: "Shift Student" },
    { id: "confirmShiftStudent", label: "Confirm Shift Student" },
    { id: "confirmRemoveShiftStudent", label: "Confirm Remove Shift Student" },
    { id: "buttons", label: "Buttons" },
    { id: "addNewBatch", label: "Add New Batch" },
    { id: "fileShare", label: "File Share" },
    { id: "createNewGroup", label: "Create New Group" },
    { id: "manageGroup", label: "Manage Group" },
    { id: "uploadVideos", label: "Upload Videos" },
    
  ];

  return (
    <div className="bg-gray-200 min-h-screen p-10 font-sans">
      <h1 className="text-3xl font-bold text-center mb-10 text-[#6B7280]">
        Popup Showcase
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {modalButtons.map((btn) => (
          <button
            key={btn.id}
            onClick={() => setOpenModal(btn.id)}
            className="bg-white text-[#6B7280] font-semibold py-3 px-4 rounded-lg shadow-md transition-all hover:shadow-lg hover:-translate-y-0.5"
          >
            {btn.label}
          </button>
        ))}
      </div>

      <ConfirmPasswordModal
        isOpen={openModal === "confirmPassword"}
        onClose={() => setOpenModal(null)}
      />

      <AddVideoModal
        isOpen={openModal === "addVideo"}
        onClose={() => setOpenModal(null)}
        children={undefined}
      />
      <ShareVideoModal
        isOpen={openModal === "shareVideo"}
        onClose={() => setOpenModal(null)}
        title="Share Videos"
        children={undefined}
      />
      <ShareVideoModal
        isOpen={openModal === "manageAccess"}
        onClose={() => setOpenModal(null)}
        title="Shared With – Manage Access"
        children={undefined}
      />
      <DeleteRecordingModal
        isOpen={openModal === "deleteRecording"}
        onClose={() => setOpenModal(null)}
        children={undefined}
      />
      <EditDemoVideoModal
        isOpen={openModal === "editDemoVideo"}
        onClose={() => setOpenModal(null)}
        children={undefined}
      />
      <RequestPayRaise
        isOpen={openModal === "payRaise"}
        onClose={() => setOpenModal(null)}
      />
      <ShiftStudentModal
        isOpen={openModal === "shiftStudent"}
        onClose={() => setOpenModal(null)}
      />
      <ShiftStudentConfirmModal
        isOpen={openModal === "confirmShiftStudent"}
        onClose={() => setOpenModal(null)}
      />
      <RemoveStudent
        isOpen={openModal === "confirmRemoveShiftStudent"}
        onClose={() => setOpenModal(null)}
      />
      <PinModal
        isOpen={openModal === "pinChat"}
        onClose={() => setOpenModal(null)}
        children={undefined}
      />
      <UnpinModal
        isOpen={openModal === "unpinChat"}
        onClose={() => setOpenModal(null)}
        children={undefined}
      />
     
    </div>
  );
}
