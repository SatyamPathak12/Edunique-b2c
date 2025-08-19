import React from 'react';
import { FiSearch, FiX } from 'react-icons/fi';
import { BaseModal, PopupProp } from '../page';
import Link from 'next/link';


const ExistingDmitModal: React.FC<PopupProp> = ({ isOpen, onClose }) => {
  const testList = Array.from({ length: 5 }).map((_, i) => ({
    name: 'Test Name',
    duration: 'Duration',
    modified: 'Date Modified'
  }));

  return (
    <BaseModal isOpen={isOpen} onClose={onClose} maxWidth="max-w-md">
      <div className="relative bg-white rounded-2xl p-6 w-full max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-full hover:bg-gray-100"
        >
          <FiX size={18} />
        </button>

        {/* Title */}
        <h2 className="text-base font-semibold mb-4">Existing DMIT Test</h2>

        {/* Search */}
        <div className="relative mb-4">
          <input
            type="text"
            placeholder="Search"
            className="w-full border rounded-full py-2 pl-10 pr-4 text-sm outline-none focus:ring-1 focus:ring-gray-300"
          />
          <FiSearch className="absolute top-2.5 left-3 text-gray-400" size={16} />
        </div>

        {/* Test List */}
        <div className="flex flex-col gap-2 max-h-[50vh] overflow-y-auto pr-2 custom-peach-scrollbar">
          {testList.map((test, idx) => (
            <Link href={"/admin-b2c/admin-panel/edit-dmit-test"} key={idx} className="border rounded-xl block bg-gray-50 px-4 py-3">
              <p className="font-medium text-sm">{test.name}</p>
              <p className="text-xs text-gray-500">{test.duration}</p>
              <p className="text-xs text-gray-500">{test.modified}</p>
            </Link>
          ))}
        </div>

        {/* Cancel Button */}
        <div className="mt-6 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 border border-gray-200 text-sm rounded-full text-gray-700 hover:bg-gray-100"
          >
            Cancel
          </button>
        </div>
      </div>
    </BaseModal>
  );
};

export default ExistingDmitModal;
