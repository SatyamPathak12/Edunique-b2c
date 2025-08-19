// /popupComponent/UploadFile.tsx
"use client";

import React, { useState } from 'react';
import { X } from 'lucide-react';
import Image from 'next/image';
import { TeacherB2CBaseModal, PopupPropB2CTeacher } from '../page'; // Assuming page.tsx is in the parent directory

const UploadFilePopup: React.FC<PopupPropB2CTeacher> = ({ isOpen, onClose }) => {
    const [url, setUrl] = useState('');
    const [fileName, setFileName] = useState('');

    return (
        <TeacherB2CBaseModal isOpen={isOpen} onClose={onClose} maxWidth="max-w-md">
            <div className="bg-white w-full rounded-2xl p-4 sm:p-5 space-y-2 relative">
                <button onClick={onClose} className="absolute top-4 right-4 p-1 text-black bg-gray-100 rounded-full hover:bg-gray-200 hover:text-black transition-colors">
                    <X size={21} />
                </button>

                <h2 className="text-base font-medium mb-4 sm:mb-6 mr-8">
                    Upload Questionary File
                </h2>

                <div>
                    <label className="block font-medium text-sm mb-2 text-black">Enter URL</label>
                    <input
                        type="text"
                        placeholder="Text"
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                        className="w-full rounded-full px-4 py-2 bg-[#F9FAFB] border border-[#D5D5D5] text-sm text-black focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder:text-[#6B7280]"
                    />
                </div>

                <p className="text-center text-sm text-black font-medium">Or</p>

                <div>
                    <label className="block font-medium text-sm mb-2 text-black">Upload Document</label>
                    <div className="flex items-center gap-3 bg-[#F9FAFB] border border-[#D5D5D5] rounded-full px-3 py-2">
                        <Image src="/teacher/b2c/upload.png" alt="upload" height={24} width={24} />
                        <input
                            type="text"
                            placeholder="Document Name"
                            value={fileName}
                            onChange={(e) => setFileName(e.target.value)}
                            className="bg-transparent outline-none w-full text-sm text-black placeholder:text-[#6B7280]"
                        />
                    </div>
                </div>
                
                <div className="flex flex-row justify-center sm:justify-end gap-3 pt-2">
                    <button onClick={onClose} className="rounded-full px-3.5 py-2 w-full max-w-20 sm:py-3 border border-[#E5E7EB] text-[#6B7280] font-semibold text-sm hover:bg-gray-100 transition-colors">
                        Cancel
                    </button>
                    <button onClick={onClose} className="rounded-full px-3.5 py-2 w-full max-w-20 sm:py-3 bg-[#3366FF] text-white font-semibold text-sm hover:bg-blue-700 transition">
                        Add
                    </button>
                </div>
            </div>
        </TeacherB2CBaseModal>
    );
};

export default UploadFilePopup;