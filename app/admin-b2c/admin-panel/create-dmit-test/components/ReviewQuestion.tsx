'use client';
import Link from 'next/link';
import { FiCheck } from 'react-icons/fi';
interface TabProps {
  setSelectedTab: (tab: string) => void;
}

const Review: React.FC<TabProps> = ({ setSelectedTab }) => {
  const question = {
    number: 1,
    question: 'Which part of the plant makes food ?',
    category: 'Academic Skills',
    points: 4,
    options: ['Option', 'Option', 'Option'],
    correctIndex: 0,
  };
  const handleClickBack = () => {
    setSelectedTab("DMIT Test Questionnaire");
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <div className="w-full px-4 md:px-10 lg:px-16 py-8 space-y-8 bg-white">
      {/* Test Info */}
      <div className="space-y-4">
        <h1 className="text-xl font-semibold">Test Title</h1>
        <p className="text-gray-600 text-sm leading-relaxed">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book...
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took...        </p>

        <div className="bg-gray-100 text-sm text-gray-700 px-4 py-2 rounded-2xl w-full space-y-1">
          <p>Duration : 30 Minutes</p>
          <p>Total Point: 100</p>
        </div>

        <button className="px-6 py-2 bg-gray-100 rounded-full text-sm shadow-sm hover:opacity-90"
        onClick={handleClickBack}>
          Edit
        </button>
      </div>

      {/* Question Card */}
      <div className="bg-[#F9F9F9] rounded-3xl pl-4 pr-4 md:pr-16 py-6 space-y-4 max-w-3xl">
        <p className="text-sm font-medium text-gray-500">Question {question.number}</p>

        <div className="flex justify-between items-center">
          <h2 className="text-lg font-semibold">
            {question.question}
          </h2>
          <span className="text-base font-semibold text-gray-400 whitespace-nowrap">{question.points} Points</span>
        </div>

        <p className="text-sm font-medium text-gray-700">
          Question Category: <span className="font-medium">{question.category}</span>
        </p>

        <div className="space-y-2">
          {question.options.map((opt, i) => (
            <div
              key={i}
              className={`w-full px-4  rounded-full flex bg-white items-center gap-3 text-sm 
                ${i === question.correctIndex ? 'text-green-200 font-medium py-3.5' : 'py-4.5 text-gray-700'}`}
            >
              {i === question.correctIndex && (
                <div className="w-8 h-8 flex items-center justify-center rounded-full bg-green-200 text-white">
                  <FiCheck size={15} />
                </div>
              )}
              {opt}
            </div>
          ))}
        </div>

        <button className="mt-2 px-4 py-2 bg-gray-100 rounded-full text-sm hover:opacity-90"
        onClick={handleClickBack}>
          Edit
        </button>
      </div>
      {/* Question Card 2*/}
      <div className="bg-[#F9F9F9] rounded-3xl pl-4 pr-4 md:pr-16 py-6 space-y-4 max-w-3xl">
        <p className="text-sm font-medium text-gray-500">Question {question.number}</p>

        <div className="flex justify-between items-center">
          <h2 className="text-lg font-semibold">
            {question.question}
          </h2>
          <span className="text-base font-semibold text-gray-400 whitespace-nowrap">{question.points} Points</span>
        </div>

        <p className="text-sm font-medium text-gray-700">
          Question Category: <span className="font-medium">{question.category}</span>
        </p>

        <div className="space-y-2">
          {question.options.map((opt, i) => (
            <div
              key={i}
              className={`w-full px-4  rounded-full flex bg-white items-center gap-3 text-sm 
                ${i === question.correctIndex ? 'text-green-200 font-medium py-3.5' : 'py-4.5 text-gray-700'}`}
            >
              {i === question.correctIndex && (
                <div className="w-8 h-8 flex items-center justify-center rounded-full bg-green-200 text-white">
                  <FiCheck size={15} />
                </div>
              )}
              {opt}
            </div>
          ))}
        </div>

        <button className="mt-2 px-4 py-2 bg-gray-100 rounded-full text-sm hover:opacity-90"
        onClick={handleClickBack}>
          Edit
        </button>
      </div>
      <div className="flex justify-center gap-2 mt-4">
        <div className="rounded-[42px] text-base md:text-lg font-semibold border border-[#E5E7EB] text-[#6B7280] px-4 py-3 cursor-pointer inline-block">
          Cancel
        </div>
        <Link href={"/admin-b2c/admin-panel/admin-dmit-test"}>
        <button className="rounded-[42px] text-base md:text-lg font-semibold bg-[#3366ff] text-white px-4 py-3 cursor-pointer inline-block">
          Publish
        </button>
        </Link>
      </div>
    </div>
  );
};

export default Review;
