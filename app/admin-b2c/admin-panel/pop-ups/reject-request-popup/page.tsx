"use client";

import React, { useState } from 'react';

// --- Main Reject Request Popup Component ---
const RejectRequestPopup: React.FC = () => {
    // State to manage the reason text
    const [reason, setReason] = useState('');

    const handleConfirmReject = () => {
        if (!reason.trim()) {
            alert("Please provide a reason for rejection.");
            return;
        }
        console.log("Rejection Confirmed. Reason:", reason);
        alert("Request Rejected! (Check console for reason)");
        // Add API call logic here
    };

    const handleCancel = () => {
        console.log("Cancelled");
        // Add logic to close the modal in a real app
        alert("Cancelled");
    };

    return (
        // The dark background for the entire page
        <div className="bg-[#4a4a4a] min-h-screen w-full flex items-center justify-center p-4 font-sans">
            
            {/* The main popup card */}
            <div className="bg-white w-full max-w-lg rounded-3xl shadow-2xl p-6">
                
                {/* Title */}
                <h1 className="text-2xl font-semibold text-black text-center mb-4">
                    Reject Request
                </h1>
                
                {/* Reason Form */}
                <div className="space-y-2 mb-4 ">
                    <label htmlFor="rejectionReason" className="block text-base text-black">
                        Please provide a reason for rejection:
                    </label>
                    <textarea
                        id="rejectionReason"
                        value={reason}
                        onChange={(e) => setReason(e.target.value)}
                        rows={4}
                        className="w-full p-4 bg-[#F9FAFB] border border-[#D1D5DB] rounded-2xl text-sm placeholder-gray-400
                                   focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none transition-colors"
                    />
                </div>

                {/* Action Buttons */}
                <div className="flex items-center justify-center gap-3 sm:gap-4">
                    {/* Cancel Button */}
                    <button 
                        onClick={handleCancel}
                        className="w-full sm:w-auto px-8 py-3 text-gray-700 font-semibold bg-[#6B72801A] rounded-full 
                                   hover:bg-gray-200 transition-colors text-sm sm:text-base"
                    >
                        Cancel
                    </button>
                    {/* Confirm Reject Button */}
                    <button 
                        onClick={handleConfirmReject}
                        className="w-full sm:w-auto px-8 py-3 text-[#FF3366] font-semibold bg-[#FF33661A] rounded-full 
                                   hover:bg-red-200 transition-colors text-sm sm:text-base"
                    >
                        Confirm Reject
                    </button>
                </div>

            </div>
        </div>
    );
};

export default RejectRequestPopup;