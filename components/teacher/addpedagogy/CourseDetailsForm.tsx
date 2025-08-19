/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import { cn } from "@/lib/utils";

interface CourseDetailsFormProps {
  onSubmit: (data: any) => void;
  onCancel: () => void;
  className?: string;
}

const CourseDetailsForm = ({ onSubmit, onCancel, className }: CourseDetailsFormProps) => {
  const [courseName, setCourseName] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [batches, setBatches] = useState([
    { id: 1, batch: '', price: '', offerPrice: '' }
  ]);
  const [batchDays, setBatchDays] = useState('monday-thursday');
  const [batchTime, setBatchTime] = useState('afternoon');

  const addBatch = () => {
    setBatches([...batches, { id: batches.length + 1, batch: '', price: '', offerPrice: '' }]);
  };

  const removeBatch = (id: number) => {
    if (batches.length > 1) {
      setBatches(batches.filter(batch => batch.id !== id));
    }
  };

  const updateBatch = (id: number, field: string, value: string) => {
    setBatches(batches.map(batch => 
      batch.id === id ? { ...batch, [field]: value } : batch
    ));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = {
      courseName,
      category: selectedCategory,
      batches,
      batchDays,
      batchTime,
      // Other fields would be added here
    };
    onSubmit(formData);
  };

  return (
    <div className={cn("w-full", className)}>
      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">Course Name</label>
            <input
              type="text"
              placeholder="Course Name"
              value={courseName}
              onChange={(e) => setCourseName(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">Select Category</label>
            <div className="relative">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="" disabled>Select Category</option>
                <option value="category1">Category 1</option>
                <option value="category2">Category 2</option>
                <option value="category3">Category 3</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>

        {batches.map((batch, index) => (
          <div key={batch.id} className="p-4 bg-gray-50 rounded-lg">
            <div className="grid gap-6 md:grid-cols-3">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Select Batch</label>
                <div className="relative">
                  <select
                    value={batch.batch}
                    onChange={(e) => updateBatch(batch.id, 'batch', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="" disabled>Select Batch</option>
                    <option value="batch1">Batch 1</option>
                    <option value="batch2">Batch 2</option>
                    <option value="batch3">Batch 3</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                  </div>
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Price(INR)</label>
                <div className="relative">
                  <select
                    value={batch.price}
                    onChange={(e) => updateBatch(batch.id, 'price', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="" disabled>0</option>
                    <option value="1000">1000</option>
                    <option value="2000">2000</option>
                    <option value="3000">3000</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                  </div>
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Offer Price(INR)</label>
                <div className="relative flex items-center">
                  <div className="relative flex-grow">
                    <select
                      value={batch.offerPrice}
                      onChange={(e) => updateBatch(batch.id, 'offerPrice', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="" disabled>0</option>
                      <option value="800">800</option>
                      <option value="1500">1500</option>
                      <option value="2500">2500</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                      <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                      </svg>
                    </div>
                  </div>
                  
                  {batches.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeBatch(batch.id)}
                      className="p-2 ml-2 text-white bg-red-500 rounded-full hover:bg-red-600"
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
                        <path d="M3 6h18"/>
                        <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/>
                        <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/>
                      </svg>
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
        
        <div className="flex justify-end">
          <button
            type="button"
            onClick={addBatch}
            className="px-4 py-2 text-sm font-medium text-white bg-green-600 rounded-full hover:bg-green-700 focus:outline-none flex items-center"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="w-5 h-5 mr-1" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10"/>
              <path d="M12 8v8"/>
              <path d="M8 12h8"/>
            </svg>
            Add
          </button>
        </div>

        <div className="space-y-4">
          <div>
            <h3 className="mb-3 text-sm font-medium text-gray-700">Select Batch Days</h3>
            <div className="flex flex-wrap gap-4">
              <label className="flex items-center">
                <input 
                  type="radio" 
                  name="batchDays" 
                  value="monday-thursday"
                  checked={batchDays === 'monday-thursday'}
                  onChange={() => setBatchDays('monday-thursday')}
                  className="w-4 h-4 text-blue-600"
                />
                <span className="ml-2 text-sm">Monday - Thursday</span>
              </label>
              <label className="flex items-center">
                <input 
                  type="radio" 
                  name="batchDays" 
                  value="tuesday-friday"
                  checked={batchDays === 'tuesday-friday'}
                  onChange={() => setBatchDays('tuesday-friday')}
                  className="w-4 h-4 text-blue-600"
                />
                <span className="ml-2 text-sm">Tuesday - Friday</span>
              </label>
              <label className="flex items-center">
                <input 
                  type="radio" 
                  name="batchDays" 
                  value="wednesday-saturday"
                  checked={batchDays === 'wednesday-saturday'}
                  onChange={() => setBatchDays('wednesday-saturday')}
                  className="w-4 h-4 text-blue-600"
                />
                <span className="ml-2 text-sm">Wednesday- Saturday</span>
              </label>
              <label className="flex items-center">
                <input 
                  type="radio" 
                  name="batchDays" 
                  value="weekends"
                  checked={batchDays === 'weekends'}
                  onChange={() => setBatchDays('weekends')}
                  className="w-4 h-4 text-blue-600"
                />
                <span className="ml-2 text-sm">Weekends (Saturday - Sunday)</span>
              </label>
              <label className="flex items-center">
                <input 
                  type="radio" 
                  name="batchDays" 
                  value="custom"
                  checked={batchDays === 'custom'}
                  onChange={() => setBatchDays('custom')}
                  className="w-4 h-4 text-blue-600"
                />
                <span className="ml-2 text-sm">Custom Batch Day</span>
              </label>
            </div>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-medium text-gray-700">Select Batch Time</h3>
            <div className="flex gap-4">
              <label className="flex items-center">
                <input 
                  type="radio" 
                  name="batchTime" 
                  value="afternoon"
                  checked={batchTime === 'afternoon'}
                  onChange={() => setBatchTime('afternoon')}
                  className="w-4 h-4 text-blue-600"
                />
                <span className="ml-2 text-sm">Afternoon</span>
              </label>
              <label className="flex items-center">
                <input 
                  type="radio" 
                  name="batchTime" 
                  value="evening"
                  checked={batchTime === 'evening'}
                  onChange={() => setBatchTime('evening')}
                  className="w-4 h-4 text-blue-600"
                />
                <span className="ml-2 text-sm">Evening</span>
              </label>
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <h3 className="text-sm font-medium text-gray-700">Short Descriptions</h3>
          <div className="p-2 border border-gray-300 rounded-md">
            <div className="flex items-center p-1 bg-gray-100 border-b">
              <div className="flex gap-1 flex-wrap">
                {/* This would be a rich text editor toolbar in real implementation */}
                <button type="button" className="p-1 text-gray-600 rounded hover:bg-gray-200">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
                    <path d="M18.5 2.5a2.12 2.12 0 0 1 3 3L12 15l-4 1 1-4Z"/>
                  </svg>
                </button>
                <button type="button" className="p-1 text-gray-600 rounded hover:bg-gray-200">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                    <path d="M14 4v10.54a4 4 0 1 1-4-3.54"/>
                  </svg>
                </button>
              </div>
            </div>
            <div className="p-2 min-h-[100px]">
              {/* Content area */}
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <h3 className="text-sm font-medium text-gray-700">Full Descriptions</h3>
          <div className="p-2 border border-gray-300 rounded-md">
            <div className="flex items-center p-1 bg-gray-100 border-b">
              <div className="flex gap-1 flex-wrap">
                {/* This would be a rich text editor toolbar in real implementation */}
                <button type="button" className="p-1 text-gray-600 rounded hover:bg-gray-200">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
                    <path d="M18.5 2.5a2.12 2.12 0 0 1 3 3L12 15l-4 1 1-4Z"/>
                  </svg>
                </button>
                <button type="button" className="p-1 text-gray-600 rounded hover:bg-gray-200">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                    <path d="M14 4v10.54a4 4 0 1 1-4-3.54"/>
                  </svg>
                </button>
              </div>
            </div>
            <div className="p-2 min-h-[100px]">
              {/* Content area */}
            </div>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-2">
            <h3 className="text-sm font-medium text-gray-700">Thumbnail Image</h3>
            <div className="flex">
              <button
                type="button"
                className="px-4 py-2 text-sm font-medium text-blue-700 bg-blue-100 rounded-l-md hover:bg-blue-200"
              >
                Choose
              </button>
              <span className="flex items-center px-3 text-sm text-gray-500 bg-gray-100 border border-l-0 border-gray-300 rounded-r-md">
                No file chosen
              </span>
            </div>
          </div>
          
          <div className="space-y-2">
            <h3 className="text-sm font-medium text-gray-700">Demo video Link</h3>
            <input
              type="text"
              placeholder="Link"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        <div className="flex items-center justify-between pt-6">
          <button
            type="button"
            onClick={onCancel}
            className="px-6 py-2 text-sm font-medium text-gray-700 transition-colors bg-white border border-gray-300 rounded-md hover:bg-gray-50"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-6 py-2 text-sm font-medium text-white transition-colors bg-blue-600 rounded-md hover:bg-blue-700"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default CourseDetailsForm;
