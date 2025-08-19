"use client"; // For useState hooks used in sub-components

import React, { useState } from 'react';
import { IoCheckmarkCircle,  IoTimeOutline, IoStar, IoStarOutline } from 'react-icons/io5';
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import BackButton from '../common-components/BackButton';
import TeacherB2CWrapper from '../teacher-b2c/common-components/TeacherB2CPageWrapper';

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
      { id: 'q2o2', text: 'Option 2', isCorrect: true, isSelected: true }, // User missed this, but it's correct
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
  individualScores: [
    { id: 'is1', skillName: 'Academic Skills', percentage: 40, colorClass: 'bg-[#3366FF]' },
    { id: 'is2', skillName: 'Brain Development', percentage: 60, colorClass: 'bg-[#FFCC00]' },
    { id: 'is3', skillName: 'Personality Development', percentage: 50, colorClass: 'bg-[#FF99B7]' }, // Using Tailwind pink
    { id: 'is4', skillName: 'Emotional Intelligence', percentage: 20, colorClass: 'bg-[#8DD9B3]' }, // Using Tailwind teal
    { id: 'is5', skillName: 'Pedagogy learning', percentage: 40, colorClass: 'bg-[#FFC79A]' }, // Using Tailwind orange
  ],
  ratings: [
    { id: 'r1', name: 'Concept', score: 4, maxScore: 5 },
    { id: 'r2', name: 'Critical thinking', score: 3, maxScore: 5 },
    { id: 'r3', name: 'Application of Concept', score: 5, maxScore: 5 },
    { id: 'r4', name: 'Retention', score: 4, maxScore: 5 },
    { id: 'r5', name: 'Logical Reasoning', score: 4, maxScore: 5 },
  ],
};

const COLOR_SCORE_BLUE = 'text-[#3366FF]';
const COLOR_RATING_STARS = 'text-[#FF3366]'; // Pinkish-red from your theme
const COLOR_BUTTON_PRIMARY_BG = 'bg-[#3366FF]';
const COLOR_BUTTON_PRIMARY_TEXT = 'text-white';
const BORDER_GRAY = 'border-[#D5D5D5]'; // Consistent border color

// --- Sub-components ---

const OptionDisplay: React.FC<{ option: Option }> = ({ option }) => {
  const [isConfirmedCorrect, setIsConfirmedCorrect] = useState(
    option.isSelected && option.isCorrect
  );

  const toggleCorrect = () => {
    if (option.isCorrect) {
      setIsConfirmedCorrect((prev) => !prev);
    }
  };

  let iconComponent = null;
  let optionTextColor = "#000";

  if (option.isCorrect) {
    iconComponent = isConfirmedCorrect ? (
      <IoCheckmarkCircle
        className="w-[45px] h-[45px] text-[#8DD9B3] flex-shrink-0 cursor-pointer"
        onClick={toggleCorrect}
      />
    ) : (
      <div
        onClick={toggleCorrect}
        className="w-[45px] h-[45px] box-border flex-shrink-0 rounded-full border-[3px] border-gray-400 cursor-pointer"
      />
    );
    optionTextColor = isConfirmedCorrect ? "#1d6b4f" : "#9ca3af";
  } else if (option.isSelected && !option.isCorrect) {
    iconComponent = (
      <IoCheckmarkCircle className="w-[45px] h-[45px] text-red-400 flex-shrink-0" />
    );
    optionTextColor = "#b91c1c";
  } else {
    iconComponent = <div className="w-[45px] h-[45px] flex-shrink-0" />;
  }

  return (
    <div className="w-full flex items-center px-3 py-2 bg-white rounded-full">
      {iconComponent}
      <span
        className="ml-3 text-sm sm:text-base font-medium"
        style={{ color: optionTextColor }}
      >
        {option.text}
      </span>
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

const scores: IndividualSkillScore[] = [
  {
    id: "1",
    skillName: "Academic Skills",
    percentage: 40,
    colorClass: "bg-blue-500",
  },
  {
    id: "2",
    skillName: "Brain Development",
    percentage: 60,
    colorClass: "bg-yellow-400",
  },
  {
    id: "3",
    skillName: "Personality Development",
    percentage: 50,
    colorClass: "bg-pink-300",
  },
  {
    id: "4",
    skillName: "Emotional Intelligence",
    percentage: 20,
    colorClass: "bg-green-300",
  },
  {
    id: "5",
    skillName: "Pedagogy learning",
    percentage: 40,
    colorClass: "bg-orange-300",
  },
];

interface ExtendedAssessmentSummaryData {
  assessmentScore: number;
  // incorrectAnswers: number; // This is removed as per the new image
  individualScores: IndividualSkillScore[];
  ratings: RatingCategory[];
}

// --- New Sub-component for Individual Scores ---
const IndividualScoresPanel: React.FC<{ scores: IndividualSkillScore[] }> = ({ scores }) => {
  return (
    <div className="rounded-3xl p-6 sm:p-4 bg-white">
      <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-black mb-3">Individual Scores</h3>
      <div className="space-y-3">
        {scores.map(score => (
          <div key={score.id} className="grid grid-cols-2 items-center gap-2">
            <p
              className="text-sm sm:text-md font-medium text-black"
              title={score.skillName}
            >
              {score.skillName}
            </p>
            <div className="flex gap-2">


              <div className="flex-grow bg-white rounded-full h-2.5 sm:h-3 relative">
                <div
                  className={`rounded-full h-full ${score.colorClass}`}
                  style={{ width: `${score.percentage}%` }}
                  aria-label={`${score.skillName} 
            score: ${score.percentage}%`}
                  title={`${score.percentage}%`}
                />

              </div>
              <div className="text-sm">{score.percentage}%</div>
            </div>
          </div>
        ))}
      </div>
    </div>

  );
};


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
          <p className="sm:text-lg text-base lg:text-xl text-[#6b7280] mb-2">Assessment Score</p>
          <p className={`text-lg  sm:text-3xl lg:text-5xl font-bold ${COLOR_SCORE_BLUE}`}>{summary.assessmentScore}</p>
        </div>
        <IndividualScoresPanel scores={scores} />

        {/* Individual Scores - NEW */}
        {/* <IndividualScoresPanel scores={summary.individualScores} /> */}

        {/* View Detailed Report Button */}
        <button className={`w-full flex items-center justify-center  gap-1 sm:gap-2  py-3 bg-white rounded-xl hover:bg-gray-200 transition-colors`}>
          <IoTimeOutline className={`w-6 h-6 ${COLOR_RATING_STARS}`} />
          <span className={` text-lg sm:text-md font-medium  ${COLOR_RATING_STARS}`}>View Detailed Report</span>
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
                className={`w-full text-[#6B7280] mr-2 ml-2 p-2 bg-[#F9FAFB] sm:h-40 border ${BORDER_GRAY} rounded-2xl focus:ring-1 focus:ring-[#3366FF] focus:border-[#3366FF] outline-none text-sm resize-none`}
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
    <div className=" bg-white p-3 sm:p-6 rounded-2xl flex  flex-col-reverse sm:flex-row gap-8 justify-between">
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

  return (
    <>
      <Header activeState="Dashboard" />
      <BackButton Heading='Student Name' />
      <TeacherB2CWrapper>
        {/* Back Button and Page Title */}

        <main className=" px-2 py-6 sm:p-6 ">
          <AssessmentReviewPage />
        </main>
      </TeacherB2CWrapper>

      <Footer />
    </>
  );
}