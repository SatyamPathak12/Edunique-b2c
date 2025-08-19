
import React, { useState } from 'react';
import { cn } from "@/lib/utils";

interface AddSectionModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (sectionName: string) => void;
  className?: string;
}

const AddSectionModal = ({ isOpen, onClose, onSubmit, className }: AddSectionModalProps) => {
  const [sectionName, setSectionName] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (sectionName.trim()) {
      onSubmit(sectionName);
      setSectionName('');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className={cn("bg-white rounded-lg shadow-lg w-full max-w-md", className)}>
        <div className="flex items-center justify-between px-6 py-4 bg-[#FF3366] rounded-t-lg">
          <h3 className="text-lg font-medium text-white">Add Section</h3>
          <button 
            onClick={onClose} 
            className="text-white hover:text-gray-200"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="w-5 h-5" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <line x1="15" y1="9" x2="9" y2="15" />
              <line x1="9" y1="9" x2="15" y2="15" />
            </svg>
          </button>
        </div>
        <form onSubmit={handleSubmit} className="p-6">
          <div className="mb-6">
            <label className="block mb-2 text-sm font-medium text-gray-700">Section Name</label>
            <input
              type="text"
              placeholder="Enter Section Name"
              value={sectionName}
              onChange={(e) => setSectionName(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <button 
            type="submit" 
            className="w-full py-3 font-medium text-white transition-colors bg-blue-600 rounded-md hover:bg-blue-700"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddSectionModal;
