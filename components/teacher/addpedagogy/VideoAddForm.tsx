
import React, { useState } from 'react';
import { cn } from "@/lib/utils";

interface VideoAddFormProps {
  onSubmit: (data: {
    title: string;
    videoLink: string;
    aboutLecture: string;
    status: boolean;
  }) => void;
  onBack?: () => void;
  className?: string;
}

const VideoAddForm = ({ onSubmit, onBack, className }: VideoAddFormProps) => {
  const [title, setTitle] = useState('');
  const [videoLink, setVideoLink] = useState('');
  const [aboutLecture, setAboutLecture] = useState('');
  const [status, setStatus] = useState(true);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      title,
      videoLink,
      aboutLecture,
      status
    });
  };

  return (
    <div className={cn("w-full max-w-3xl mx-auto", className)}>
      <div className="flex items-center mb-8">
        <button 
          onClick={onBack} 
          className="p-2 mr-4 rounded-md hover:bg-gray-100"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            className="w-5 h-5"
          >
            <path d="m12 19-7-7 7-7"/>
            <path d="M19 12H5"/>
          </svg>
        </button>
        <h1 className="text-xl font-bold">Video Add</h1>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">Title</label>
          <input
            type="text"
            placeholder="Enter Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">Video Link</label>
          <input
            type="text"
            placeholder="Video Link"
            value={videoLink}
            onChange={(e) => setVideoLink(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">About this Lecture</label>
          <textarea
            placeholder="Write..."
            value={aboutLecture}
            onChange={(e) => setAboutLecture(e.target.value)}
            className="w-full h-32 px-3 py-2 border border-gray-300 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <span className="text-sm font-medium text-gray-700">Status</span>
            <label className="relative inline-flex items-center cursor-pointer">
              <input 
                type="checkbox" 
                value="" 
                className="sr-only peer" 
                checked={status}
                onChange={(e) => setStatus(e.target.checked)}
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-300 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-500"></div>
            </label>
          </div>
        </div>
        
        <button 
          type="submit" 
          className="w-full py-3 font-medium text-white transition-colors bg-blue-600 rounded-md hover:bg-blue-700"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default VideoAddForm;
