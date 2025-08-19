'use client';

import { useState } from 'react';
import { X } from 'lucide-react';
import Image from 'next/image';

export default function UploadPopup({ onClose }: { onClose: () => void }) {
  const [url, setUrl] = useState('');
  const [fileName, setFileName] = useState('');

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 px-4">
      <div className="bg-white w-full max-w-md rounded-2xl p-5 sm:p-6 space-y-3 relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-8 right-4 p-1 text-black bg-black/5 rounded-full hover:text-black"
        >
          <X size={20} />
        </button>

        <h2 className="text-lg sm:text-xl font-semibold mb-4  sm:mb-8 text-center sm:text-left">
          Upload Questionary File
        </h2>

        {/* URL Input */}
        <div>
          <label className="block font-medium text-sm mb-2 text-black">Enter URL</label>
          <input
            type="text"
            placeholder="Text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="w-full rounded-full px-4 py-2 bg-[#F9FAFB] border border-[#D5D5D5] text-sm text-[#6B7280] focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <p className="text-center text-sm text-black font-medium">Or</p>

        {/* File Upload */}
        <div>
          <label className="block font-medium text-sm mb-2 text-gray-700">Upload Document</label>
          <div className="flex items-center gap-3 bg-[#F9FAFB] border border-[#D5D5D5] rounded-full px-3 py-2">
            <Image src="/teacher/b2c/upload.png" alt="upload" height={24} width={24} />
            <input
              type="text"
              placeholder="Document Name"
              value={fileName}
              onChange={(e) => setFileName(e.target.value)}
              className="bg-transparent outline-none w-full text-sm text-[#6B7280]"
            />
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-row justify-center sm:justify-end gap-3 pt-2">
          <button
            onClick={onClose}
            className="rounded-full px-3 py-3 border border-[#E5E7EB] text-[#6B7280] font-semibold text-sm"
          >
            Cancel
          </button>
          <button className="rounded-full px-6 py-3 bg-blue-600 text-white font-semibold text-sm hover:bg-blue-700 transition">
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
