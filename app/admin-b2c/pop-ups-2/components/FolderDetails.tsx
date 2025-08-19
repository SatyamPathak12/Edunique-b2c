'use client';

import { useState } from 'react';

const tabs = [
  { key: 'files', label: 'Select Files' },
  { key: 'details', label: 'Folder Details' },
];

export default function TabSwitcher() {
  const [activeTab, setActiveTab] = useState<'files' | 'details'>('files');

  return (
    <div className="w-full max-w-3xl mx-auto">
      {/* Tab Headers */}
      <div className="flex gap-6 border-b border-gray-200 text-sm font-medium">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key as 'files' | 'details')}
            className={`pb-2 transition-all ${
              activeTab === tab.key
                ? 'text-blue-600 border-b-2 border-blue-600'
                : 'text-gray-500 hover:text-blue-600'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="mt-6">
        {activeTab === 'files' && (
          <div className="text-gray-700">
            <h2 className="font-semibold text-lg mb-2">Upload Files</h2>
            <p>This is where your file upload input or logic will go.</p>
          </div>
        )}

        {activeTab === 'details' && (
          <div className="text-gray-700">
            <h2 className="font-semibold text-lg mb-2">Folder Details</h2>
            <p>Here’s where folder metadata or actions will appear.</p>
          </div>
        )}
      </div>
    </div>
  );
}
