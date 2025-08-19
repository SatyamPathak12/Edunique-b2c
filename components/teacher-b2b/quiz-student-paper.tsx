"use client"; // For useState hooks used in sub-components

import React, { useState } from 'react';
import { IoCheckmarkCircle, IoCloseCircle, IoTimeOutline, IoStar, IoStarOutline } from 'react-icons/io5';
import { FiArrowLeft } from 'react-icons/fi';
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

// --- Data Interfaces ---
interface Option {
  id: string;
  text: string;
  isCorrect?: boolean;
  isSelected?: boolean;
}

interface Question {
  id: string;
  questionNumber: number;
  text: string; // Actual question text (placeholder "Question" in image, but better with real text)
  options: Option[];
}

interface RatingCategory {
  id: string;
  name: string;
  score: number;
  maxScore: number;
}

// interface AssessmentSummaryData {
//   assessmentScore: number;
//   incorrectAnswers: number;
//   ratings: RatingCategory[];
// }

// --- Sample Data ---
const sampleQuestionsData: Question[] = [
  {
    id: 'q1',
    questionNumber: 1,
    text: 'Question',
    options: [
      { id: 'q1o1', text: 'Option 1', isCorrect: true, isSelected: true },
      { id: 'q1o2', text: 'Option 2' },
      { id: 'q1o3', text: 'Option 3' },
      { id: 'q1o4', text: 'Option 4' },
    ],
  },
  {
    id: 'q2',
    questionNumber: 2,
    text: 'Question',
    options: [
      { id: 'q2o1', text: 'Option 1', isSelected: true, isCorrect: false },
      { id: 'q2o2', text: 'Option 2', isCorrect: true }, // User missed this, but it's correct
      { id: 'q2o3', text: 'Option 3' },
      { id: 'q2o4', text: 'Option 4' },
    ],
  },
  {
    id: 'q3',
    questionNumber: 3,
    text: 'Select the capital of France.',
    options: [
      { id: 'q3o1', text: 'Option 1' },
      { id: 'q3o2', text: 'Option 2' },
      { id: 'q3o3', text: 'Option 3', isCorrect: true, isSelected: true },
      { id: 'q3o4', text: 'Option 4' },
    ],
  },
];

const sampleSummaryData: ExtendedAssessmentSummaryData = {
  assessmentScore: 40,
  incorrectAnswers: 3,
  ratings: [
    { id: 'r1', name: 'Concept', score: 4, maxScore: 5 },
    { id: 'r2', name: 'Critical thinking', score: 3, maxScore: 5 },
    { id: 'r3', name: 'Application of Concept', score: 5, maxScore: 5 },
    { id: 'r4', name: 'Retention', score: 4, maxScore: 5 },
    { id: 'r5', name: 'Logical Reasoning', score: 4, maxScore: 5 },
  ], // Using Tailwind orange

 
};

// --- Style Constants (derived from your theme and image) ---
const COLOR_CORRECT_TEXT = 'text-[#8DD9B3]'; // Standard Tailwind green
// const COLOR_CORRECT_ICON = 'text-[#8DD9B3]'; // A slightly different shade for icon if desired, or same
const COLOR_INCORRECT_TEXT = 'text-[#E57373]'; // Standard Tailwind red
const COLOR_INCORRECT_ICON = 'text-[#E57373]';
const COLOR_NEUTRAL_TEXT = 'text-[#6B7280]'; // Lighter gray for neutral options
const COLOR_SCORE_BLUE = 'text-[#3366FF]';
const COLOR_RATING_STARS = 'text-[#FF3366]'; // Pinkish-red from your theme
const COLOR_BUTTON_PRIMARY_BG = 'bg-[#3366FF]';
const COLOR_BUTTON_PRIMARY_TEXT = 'text-white';
const BORDER_GRAY = 'border-[#D5D5D5]'; // Consistent border color

// --- Sub-components ---

const OptionDisplay: React.FC<{ option: Option }> = ({ option }) => {
  let iconComponent = null;
  let optionTextColor = COLOR_NEUTRAL_TEXT;

  // Determine icon and text color based on option state
  if (option.isSelected && option.isCorrect) {
    iconComponent = <IoCheckmarkCircle className={`w-[26px] h-[26px] text-[#8DD9B3] flex-shrink-0`} />;
    optionTextColor = COLOR_CORRECT_TEXT;
  } else if (option.isSelected && !option.isCorrect) {
    iconComponent = <IoCloseCircle className={`w-[26px] h-[26px] ${COLOR_INCORRECT_ICON} flex-shrink-0`} />;
    optionTextColor = COLOR_INCORRECT_TEXT;
  } else if (!option.isSelected && option.isCorrect) {
    // Show the correct answer even if not selected by the user
    iconComponent = <IoCheckmarkCircle className={`w-[26px] h-[26px] text-[#8DD9B3] flex-shrink-0`} />;
    optionTextColor = COLOR_CORRECT_TEXT;
  } else {
    // Neutral, unselected, incorrect option: Provide a placeholder for alignment if icons are present elsewhere
    iconComponent = <div className="w-[26px] h-[26px] flex-shrink-0"></div>;
  }

  return (
    <div className={`w-full flex items-center p-4 bg-white rounded-full`}>
      {iconComponent}
      <span className={`ml-2.5 text-sm sm:text-lg font-medium ${optionTextColor}`}>{option.text}</span>
    </div>
  );
};

const QuestionItem: React.FC<{ question: Question }> = ({ question }) => {
  return (
    // Styling similar to your old QuestionReviewBlock
    <div className="p-5 sm:p-6 bg-[#F9FAFB] rounded-2xl "> {/* Image shows more prominent shadow here */}
      <h3 className="text-md font-semibold text-black mb-4">
        {question.questionNumber}) {question.text || "Question"} {/* Fallback if text is empty */}
      </h3>
      <div className="space-y-3">
        {question.options.map((opt) => (
          <OptionDisplay key={opt.id} option={opt} />
        ))}
      </div>
    </div>
  );
};

const StarRatingDisplay: React.FC<{ currentRating: number; maxRating: number }> = ({
  currentRating,
  maxRating,
}) => {
  return (
    <div className="flex items-center  gap-1 sm:gap-2">
      {Array.from({ length: maxRating }).map((_, index) =>
        index < currentRating ? (
          <IoStar key={index} className={` h-[13px] w-[13px] lg:w-[15px] sm:h-[15px]  tet-wrap ${COLOR_RATING_STARS}`} />
        ) : (
          <IoStarOutline key={index} className={`h-[13px] w-[13px] lg:w-[15px] sm:h-[15px] text-wrap text-gray-300`} />
        )
      )}
    </div>
  );
}


interface IndividualSkillScore {
  id: string;
  skillName: string;
  percentage: number;
  colorClass: string; // Tailwind CSS class for the progress bar color e.g., 'bg-blue-500'
}


interface ExtendedAssessmentSummaryData {
  assessmentScore: number;
  incorrectAnswers: number;
  ratings: RatingCategory[];// incorrectAnswers: number; // This is removed as per the new image
  
}



// --- New Sub-component for Individual Scores ---
;



const SummaryPanel: React.FC<{ summary: ExtendedAssessmentSummaryData }> = ({ summary }) => {
  const [feedbackText, setFeedbackText] = useState('');

  const handleFeedbackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would send this feedback to a server
    console.log('Feedback submitted:', feedbackText);
    alert(`Feedback submitted: ${feedbackText}`); // Placeholder
    setFeedbackText('');
  };

  return (
    <div className="relative  rounded-2xl p-4 space-y-5 overflow-hidden"
  style={{
    backgroundImage: "url('/images/brandpatternnoti.png')",
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }}>
    <div className="absolute inset-0 h-full bg-black/40 z-0 rounded-2xl"></div>
    <div className="  relative z-10 rounded-2xl space-y-5">
      {/* Assessment Score */}
      <div className={`bg-white p-4 sm:p-6  rounded-2xl text-center`}>
        <p className="sm:text-lg text-md text-[#6b7280] mb-2">Assessment Score</p>
        <p className={`text-lg  sm:text-3xl font-bold ${COLOR_SCORE_BLUE}`}>{summary.assessmentScore}</p>
      </div>
     <div className={`bg-white p-4 rounded-xl text-center`}>
        <p className="text-lg text-gray-500 mb-1">Incorrect Answers</p>
        <p className={`text-4xl font-bold ${COLOR_SCORE_BLUE}`}>{summary.incorrectAnswers}</p>
      </div>


      {/* Individual Scores - NEW */}
      {/* <IndividualScoresPanel scores={summary.individualScores} /> */}

      {/* View Detailed Report Button */}
      <button className={`w-full flex items-center justify-center  gap-1 sm:gap-2  py-2 bg-white rounded-xl hover:bg-gray-200 transition-colors`}>
        <IoTimeOutline className={`w-6 h-6 ${COLOR_RATING_STARS}`} />
        <span className={` text-2xl sm:text-md font-medium  ${COLOR_RATING_STARS}`}>View Detailed Report</span>
      </button>

      {/* Ratings Section */}
     <div className='bg-white sm:px-2  px-4 rounded-xl space-y-2 overflow-x-hidden  py-2'>
       <div className="sm:space-y-6 mt-6 mb-1 pt-1"> {/* Reduced top padding for tighter spacing */}
        {summary.ratings.map((rating) => (
          <div key={rating.id} className="flex justify-between gap-1 items-center">
            <p className="text-xs sm:text-sm lg:text-md text-black font-medium">{rating.name}</p>
            <StarRatingDisplay currentRating={rating.score} maxRating={rating.maxScore} />
          </div>
        ))}
      </div>
    

      {/* Write a Feedback Form */}
      <form onSubmit={handleFeedbackSubmit} className="space-y-3 pt-1">
        <div className='mt-2'>
          <label htmlFor="feedback" className="block text-sm  sm:text-md font-medium text-black mb-1.5">
            Write a Feedback
          </label>
          <textarea
            id="feedback"
            rows={4}
            value={feedbackText}
            onChange={(e) => setFeedbackText(e.target.value)}
            placeholder="Text"
            className={`w-full text-[#6B7280] p-2 bg-[#F9FAFB] sm:h-40 border ${BORDER_GRAY} rounded-2xl focus:ring-1 focus:ring-[#3366FF] focus:border-[#3366FF] outline-none text-sm resize-none`}
          />
        </div>
        <button
          type="submit"
          className={`w-28 py-2 sm:py-2.5 ${COLOR_BUTTON_PRIMARY_BG} ${COLOR_BUTTON_PRIMARY_TEXT} rounded-full font-medium hover:opacity-90 transition-opacity text-sm`}
        >
          Submit
        </button>
      </form>
       </div>
    </div>
    </div>
  );
};

// --- Main AssessmentReviewPage Component ---
const AssessmentReviewPage: React.FC = () => {
  // Data would typically come from props, context, or an API call
  const [questionsData] = useState<Question[]>(sampleQuestionsData);
  const [summaryData] = useState<ExtendedAssessmentSummaryData>(sampleSummaryData);

  return (
    // This div acts as the content area for the page, to be placed inside your <main> tag
    // It uses a responsive grid layout
    <div className=" bg-white p-6 rounded-2xl flex  flex-col sm:flex-row gap-8 justify-between">
      {/* Left Column: Questions List */}
      <div className="sm:w-[55%] space-y-6">
        {questionsData.map((question) => (
          <QuestionItem key={question.id} question={question} />
        ))}
      </div>

      {/* Right Column: Summary Panel */}
      <div className="sm:w-[40%]">
        <SummaryPanel summary={summaryData} />
      </div>
    </div>
  );
};

export default function StudentPaperPage() {
  const headerUser = {
    name: "Shlok Agheda",
    role: "Student",
    avatarSrc: "/teacher-b2b/profile.png",
  }; // UPDATE PATH

  return (
    <div className="bg-[#eeeeee] min-h-screen flex flex-col">
      <Header user={headerUser} />
      
        <div className="bg-gray-100">
          {/* Back Button and Page Title */}
          <div className='bg-white '>
                <div className="flex max-w-[96rem] mx-auto items-center gap-2 px-6 py-4">
                <button className="px-1.5 text-black hover:text-[#3366FF] focus:outline-none">
                  <FiArrowLeft className="w-5 h-5 font-extrabold cursor-pointer" />
                </button>
                <h1 className="text-lg font-bold text-[#FF3366]">Student Name</h1> {/* Or dynamic course name */}
              </div>
              </div>
          <main className=" max-w-[96rem]  mx-auto p-4 sm:p-6 lg:p-8 space-y-8">
            <AssessmentReviewPage />
          </main>
        </div>
      
      <Footer />
    </div>
  );
}