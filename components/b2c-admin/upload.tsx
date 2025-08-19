import React, { useState } from 'react';
import { AiOutlineCloudUpload } from "react-icons/ai";
import { IoClose } from "react-icons/io5";
export default function UploadContentPopup() {
  const [isOpen, setIsOpen] = useState(true);
  const [urlText, setUrlText] = useState('');
  const [documentName, setDocumentName] = useState('');

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleCancel = () => {
    setIsOpen(false);
  };

  const handleContinue = () => {
    // Handle continue logic here
    console.log('Continue clicked', { urlText, documentName });
    setIsOpen(false);
  };

  interface FileUploadEvent extends React.ChangeEvent<HTMLInputElement> {}

  const handleFileUpload = (event: FileUploadEvent): void => {
    const file: File | undefined = event.target.files?.[0];
    if (file) {
      setDocumentName(file.name);
    }
  };

//   if (!isOpen) {
//     return (
//       <div className="flex items-center justify-center min-h-screen bg-gray-100">
//         <button
//           onClick={() => setIsOpen(true)}
//           className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
//         >
//           Open Upload Dialog
//         </button>
//       </div>
//     );
//   }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-3xl w-full max-w-lg mx-auto shadow-xl">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-[#e5e7eb]">
          <h2 className="text-lg font-semibold text-gray-900">Upload Content File</h2>
          <button
            onClick={handleClose}
            className="p-1 bg-black/5  cursor-pointer rounded-full transition-colors"
          >
             <IoClose className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          {/* URL Input Section */}
          <div>
            <label className="block text-sm sm:text-lg font-medium text-black mb-2">
              Enter URL
            </label>
            <input
              type="text"
              value={urlText}
              onChange={(e) => setUrlText(e.target.value)}
              placeholder="Text"
              className="w-full px-4 py-3 border border-[#e5e7eb] bg-[#faf9fb] rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            />
          </div>

          {/* Divider */}
          <div className="flex items-center justify-center">
            <span className="text-sm sm:text-lg text-black">Or</span>
          </div>

          {/* Document Upload Section */}
          <div>
            <label className="block text-sm sm:text-lg font-medium text-black mb-2">
              Upload Document
            </label>
            <div className="relative">
              <input
                type="file"
                onChange={handleFileUpload}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                accept=".pdf,.doc,.docx,.txt"
              />
              <div className="w-full px-4 py-3 border border-[#e5e7eb] bg-[#faf9fb] rounded-full flex items-center space-x-3 hover:bg-gray-50 transition-colors cursor-pointer">
                <AiOutlineCloudUpload  className="w-5 sm:w-6 sm:h-6 h-5 text-[#ff3366]" />
                <span className="text-[#6b7280] flex-1">
                  {documentName || 'Document Name'}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-end space-x-3 p-4 ">
          <button
            onClick={handleCancel}
            className="px-4 py-3 text-[#6b7280]  cursor-pointer border border-[#e5e7eb] rounded-full  transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleContinue}
            className="px-3 py-3 bg-[#3366ff] cursor-pointer  text-white rounded-full hover:bg-blue-600 transition-colors"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}