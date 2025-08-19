'use client';
import { useState } from 'react';

interface TopicData {
  topic: string;
  subtopics: string[];
}

const DashboardOverview = () => {
  const [selectedBatch, setSelectedBatch] = useState(1);

  const batchData: Record<number, TopicData[]> = {
    1: [
      { topic: 'Topic', subtopics: ['Subtopic', 'Subtopic', 'Subtopic', 'Subtopic'] },
      { topic: 'Topic', subtopics: ['Subtopic', 'Subtopic', 'Subtopic', 'Subtopic'] },
      { topic: 'Topic', subtopics: ['Subtopic', 'Subtopic', 'Subtopic', 'Subtopic'] },
    ],
    2: [
      { topic: 'Topic', subtopics: ['Subtopic', 'Subtopic', 'Subtopic', 'Subtopic'] },
      { topic: 'Topic', subtopics: ['Subtopic', 'Subtopic', 'Subtopic', 'Subtopic'] },
      { topic: 'Topic', subtopics: ['Subtopic', 'Subtopic', 'Subtopic', 'Subtopic'] },
    ],
    3: [
      { topic: 'Topic', subtopics: ['Subtopic', 'Subtopic', 'Subtopic', 'Subtopic'] },
      { topic: 'Topic', subtopics: ['Subtopic', 'Subtopic', 'Subtopic', 'Subtopic'] },
      { topic: 'Topic', subtopics: ['Subtopic', 'Subtopic', 'Subtopic', 'Subtopic'] },
    ],
  };

  return (
    <div className="p-4 space-y-4 bg-white rounded-2xl">
      {/* Top Stats */}
      <div className="grid grid-cols-2 gap-3">
        <div className="bg-[#FF99B7] rounded-xl px-4 py-2">
          <p className="text-sm font-medium mb-2">Students Assigned</p>
          <p className="text-xl font-semibold">85</p>
        </div>
        <div className="bg-[#8DD9B3] rounded-xl px-4 py-2">
          <p className="text-sm font-medium mb-2">Total Batches</p>
          <p className="text-xl font-semibold">3</p>
        </div>
        <div className="bg-[#99DEFF] rounded-xl px-4 py-2">
          <p className="text-sm font-medium mb-2">Classes Remaining</p>
          <p className="font-semibold text-sm mb-2">Batch 1: 12</p>
          <p className="font-semibold text-sm mb-2">Batch 2: 16</p>
          <p className="font-semibold text-sm">Batch 3: 11</p>
        </div>
        <div className="bg-[#FFC79A] rounded-xl px-4 py-2">
          <p className="text-sm font-medium mb-2">Requested On</p>
          <p className="font-semibold text-[16px] mt-1">24 June 2025</p>
        </div>
      </div>

      {/* Topics & Subtopics Section */}
      <div className="space-y-4">
        <p className="font-semibold text-base">Topics & Subtopics Remaining</p>

        {/* Tabs */}
        <div className="flex gap-2 bg-white px-2 py-1.5 rounded-2xl w-full justify-center border">
          {[1, 2, 3].map((batch) => (
            <button
              key={batch}
              onClick={() => setSelectedBatch(batch)}
              className={`px-4 py-2.5 rounded-2xl text-sm font-medium transition ${selectedBatch === batch
                  ? 'bg-pink-300 text-white'
                  : 'text-gray-600 hover:bg-gray-100'
                }`}
            >
              Batch {batch}
            </button>
          ))}
        </div>

        {/* Topics */}
        <div className="space-y-4">
          {batchData[selectedBatch].map((item, idx) => (
            <div key={idx} className="bg-white p-4 rounded-xl border text-sm space-y-2">
              <p className="font-semibold">{item.topic}</p>
              <ul className="list-disc list-inside text-gray-700">
                {item.subtopics.map((sub, i) => (
                  <li key={i}>{sub}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashboardOverview;
