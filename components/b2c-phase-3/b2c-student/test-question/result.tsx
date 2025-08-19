import React from 'react';
// import { FaStar, FaSmile } from 'react-icons/fa';
import Image from 'next/image';

interface ScoreItem {
  name: string;
  score: number;
  color: string; // Tailwind background color class, e.g., 'bg-blue-500'
}

interface SummaryStat {
  label: string;
  value: number | string;
  colorClass?: string; // Tailwind text color class, e.g., 'text-blue-600'
}

const ResultsCard: React.FC = () => {
  const overallScore = 15;
  const displayScore = 40;

  const individualScores: ScoreItem[] = [
    { name: 'Academic Skills', score: 40, color: 'bg-[#3366FF]' },
    { name: 'Brain Development', score: 60, color: 'bg-[#FFCC00]' },
    { name: 'Personality Development', score: 50, color: 'bg-[#FF99B7]' },
    { name: 'Emotional Intelligence', score: 20, color: 'bg-[#8DD9B3]' }, // Using teal for a nice green
    { name: 'Pedagogy learning', score: 40, color: 'bg-[#FFC79A]' },
  ];

  const summaryStats: SummaryStat[] = [
    { label: 'Total Marks', value: 50 },
    { label: 'Total Questions', value: 50 },
    { label: 'Attempted', value: 40 },
    { label: 'Correct', value: 30, colorClass: 'text-[#3366ff]' },
    { label: 'Incorrect', value: 10, colorClass: 'text-[#ff3366]' },
  ];

  const circumference = 2 * Math.PI * 15.9155; // Radius of the circle in SVG's viewBox

  return (
    <div className="bg-white rounded-4xl shadow-2xl p-6 md:p-8 w-full max-w-4xl font-sans">
      {/* Header */}
      <div className="flex items-center mb-6">

        <Image
          src="/images/Frame.png"
          width={25}
          alt="smille"
          height={25} // Adjust aspect ratio as needed
          className="mr-2 not-odd:w-[25px] object-cover group-hover:scale-105 transition-transform duration-300"
        />

        <h1 className="text-2xl font-bold text-black">Results</h1>
      </div>

      <div className="flex flex-col md:flex-row gap-6 md:gap-8 mb-8">
        {/* Left Pane: Overall Score */}
        <div className=" bg-[#F9FAFB] border border-[#E5E7EB] bg-grey rounded-4xl p-6 flex flex-col items-center justify-center md:w-1/3 space-y-3">
          <div className="relative w-36 h-36">
            <svg className="w-full h-full" viewBox="0 0 36 36">
              {/* Background Circle */}
              <path
                className="text-gray-200"
                d="M18 2.0845
     a 15.9155 15.9155 0 0 1 0 31.831
     a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeDasharray="25, 50"
                strokeLinecap="round"

              />

              {/* Progress Circle */}
              <path
                className="text-blue-500"
                d="M18 2.0845
                  a 15.9155 15.9155 0 0 1 0 31.831
                  a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeDasharray={`${(overallScore / 100) * circumference}, ${circumference}`}
                strokeLinecap="round"
                style={{ transform: 'rotate(-90deg)', transformOrigin: 'center' }}
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <Image
                src="/images/Smile.png"
                width={35}
                alt="smille"
                height={35} // Adjust aspect ratio as needed
                className="mr-2 not-odd:w-[35px] object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
          <div className="text-3xl font-bold text-[#8DD9B3] mt-0 mb-5">{displayScore}%</div>
          <p className="text-base text-black font-semibold text-center max-w-xs">
            Great effort! A little <br />more focus will take <br />you to the top.
          </p>
        </div>

        {/* Right Pane: Individual Scores */}
        <div className="bg-[#F9FAFB] border border-[#E5E7EB] rounded-x2 rounded-4xl p-6 md:w-2/3 flex justify-center flex-col">
          <h2 className="font-bold text-gray-800 mb-5 text-2xl">Individual Scores</h2>
          <div className="space-y-4">
            {individualScores.map((item) => (
              <div key={item.name} className='flex items-center justify-center'>
                <div className="flex justify-end items-center mb-1 pr-3 w-[40%]">
                  <span className="text-sm font-medium text-gray-700">{item.name}</span>
                </div>
                <div className="flex items-center bg-white rounded-full h-2.4 w-[60%] p-[4px]">
                  <div
                    className={`${item.color} h-2.5 rounded-full`}
                    style={{ width: `${item.score}%` }}
                  ></div>
                  <span className="text-xs font-medium text-gray-500 ml-1">{item.score}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar: Summary Stats */}
      <div className="bg-[#F9FAFB] border border-[#E5E7EB] rounded-full p-4 md:p-5 flex flex-wrap justify-around items-center text-center mb-8">
        {summaryStats.map((stat) => (
          <div key={stat.label} className="px-2 min-w-[80px]">
            <p className="text-xs font-bold  text-[#6B7280] uppercase tracking-wider">{stat.label}</p>
            <p className={`text-2xl font-bold ${stat.colorClass || 'text-black'}`}>
              {stat.value}
            </p>
          </div>
        ))}
      </div>

      {/* Button */}
      <div className="text-center">
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-12 rounded-full text-md transition duration-150 ease-in-out shadow-md hover:shadow-lg">
          Next
        </button>
      </div>
    </div>
  );
};

export default ResultsCard;