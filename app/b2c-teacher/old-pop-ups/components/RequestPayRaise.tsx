// app/request-pay-raise/page.tsx

'use client';

import React, { useState } from 'react';
import { BaseModal, PopupProp } from '../page';

const RequestPayRaise: React.FC<PopupProp> = ({
    isOpen,
    onClose,
}) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        experience: '',
        monthsServed: '',
        currentRate: '',
        expectedRate: '',
        reason: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(formData); // Replace with your API call
    };

    return (
        <BaseModal isOpen={isOpen} onClose={onClose} maxWidth="max-w-xl">
            <div className="max-h-[95vh] overflow-y-auto custom-scrollbar-thin-grey flex items-start justify-center bg-white mr-1 ">
                <form
                    onSubmit={handleSubmit}
                    className="bg-white rounded-2xl py-2 my-4 px-8 w-full space-y-4"
                >
                    <h2 className="text-xl font-semibold text-center">Request a Pay Raise</h2>

                    <div>
                        <label className="text-sm md:text-lg font-medium">Full Name</label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Name"
                            className="w-full mt-1 px-4 py-2 rounded-full bg-[#F9FAFB] border text-sm md:text-lg"
                            value={formData.name}
                            onChange={handleChange}
                        />
                    </div>

                    <div>
                        <label className="text-sm md:text-lg font-medium">Email ID</label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            className="w-full mt-1 px-4 py-2 rounded-full bg-[#F9FAFB] border text-sm md:text-lg"
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </div>

                    <div>
                        <label className="text-sm md:text-lg font-medium">
                            Your Total Teaching Experience (in years)
                        </label>
                        <input
                            type="text"
                            name="experience"
                            placeholder="6 years"
                            className="w-full mt-1 px-4 py-2 rounded-full bg-[#F9FAFB] border text-sm md:text-lg"
                            value={formData.experience}
                            onChange={handleChange}
                        />
                    </div>

                    <div>
                        <label className="text-sm md:text-lg font-medium">
                            Time Served at Edunique (in months)
                        </label>
                        <input
                            type="text"
                            name="monthsServed"
                            placeholder="18 Months"
                            className="w-full mt-1 px-4 py-2 rounded-full bg-[#F9FAFB] border text-sm md:text-lg"
                            value={formData.monthsServed}
                            onChange={handleChange}
                        />
                    </div>

                    <div>
                        <label className="text-sm md:text-lg font-medium">Current Hourly Rate (₹)</label>
                        <input
                            type="number"
                            name="currentRate"
                            placeholder="20000"
                            className="w-full mt-1 px-4 py-2 rounded-full bg-[#F9FAFB] border text-sm md:text-lg"
                            value={formData.currentRate}
                            onChange={handleChange}
                        />
                    </div>

                    <div>
                        <label className="text-sm md:text-lg font-medium">Expected New Hourly Rate (₹)</label>
                        <input
                            type="number"
                            name="expectedRate"
                            placeholder="40000"
                            className="w-full mt-1 px-4 py-2 rounded-full bg-[#F9FAFB] border text-sm md:text-lg"
                            value={formData.expectedRate}
                            onChange={handleChange}
                        />
                    </div>

                    <div>
                        <label className="text-sm md:text-lg font-medium">Why are you requesting a raise?</label>
                        <textarea
                            name="reason"
                            placeholder=""
                            rows={3}
                            className="w-full mt-1 px-4 py-2 rounded-3xl bg-[#F9FAFB] border text-sm md:text-lg resize-none"
                            value={formData.reason}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="flex justify-center">
                        <button
                        type="submit"
                        className="max-w-32 mx-auto text-center w-full text-white py-2.5 rounded-full bg-[#3366ff] text-lg font-medium cursor-pointer"
                    >
                        Submit
                    </button>
                    </div>
                </form>
            </div>
        </BaseModal>
    );
};

export default RequestPayRaise;
