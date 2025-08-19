"use client";

import React, { useState, useEffect } from "react";
import { StepperStep, TestDetailsData, TestQuestion, sampleClassesData, sampleGroupsData, Stepper, PRIMARY_BLUE, YELLOW_BUTTON_BG } from "@/components/teacher-b2b/create-test/CreateTestPage";
import TestDetailsStep from "@/components/teacher-b2c/create-test/TestDetailsStep";
import TestQuestionnaireStep from "@/components/teacher-b2c/create-test/TestQuestionnaireStep";
import TestReviewStep from "@/components/teacher-b2c/create-test/TestReviewStep";
import UploadFilePopup from "@/app/b2c-teacher/new-pop-ups/popupComponent/UploadFile";

const CreateBWTestContent: React.FC<{ currentStep: number, setCurrentStep: React.Dispatch<React.SetStateAction<number>>, testType: string, handleSaveClick: () => void }> = ({ currentStep, setCurrentStep, testType, handleSaveClick }) => {
  const stepperSteps: StepperStep[] = [
    { id: 1, name: `${testType} Details` },
    { id: 2, name: `${testType} Questionnaire` },
    { id: 3, name: 'Review' },
  ];

  const [testDetails, setTestDetails] = useState<TestDetailsData>({
    testName: '', description: '', selectedClasses: sampleClassesData[0]?.value || '', selectedGroup: sampleGroupsData[0]?.value || '',
    testDate: '', expiryDate: '', durationHours: '00', durationMinutes: '00', totalPoints: '00', passPoints: '00',
    selectedUnitaryId: null, studentAssignType: 'selective', selectedStudentIds: [],
  });

  const [questions, setQuestions] = useState<TestQuestion[]>([]);
  const [openModal, setOpenModal] = useState<string | null>(null);

  const handleTestDetailsChange = <K extends keyof TestDetailsData>(
    name: K,
    value: TestDetailsData[K]
  ) => {
    setTestDetails((prev: TestDetailsData) => ({ ...prev, [name]: value }));
  };
  useEffect(() => {
    const calculatedTotalPoints = questions.reduce((sum, q) => sum + (parseInt(q.points) || 0), 0);
    handleTestDetailsChange('totalPoints', String(calculatedTotalPoints).padStart(2, '0'));
  }, [questions]);

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return <TestDetailsStep
          testDetails={testDetails}
          onDetailsChange={handleTestDetailsChange}
          testType={testType}
        />;
      case 2:
        return <TestQuestionnaireStep />;
      case 3:
        return <TestReviewStep testType={testType} setCurrentStep={setCurrentStep}/>;
      default: return <div>Invalid Step</div>;
    }
  };

  const renderActionButtons = () => {
    switch (currentStep) {
      case 1:
        return (
          <>
            <button type="button" className="w-full sm:w-auto px-5 py-2.5 text-sm sm:px-6 sm:py-3 sm:text-md font-medium text-gray-700 border border-[#E5E7EB] hover:bg-gray-200 rounded-full transition-colors">
              Cancel
            </button>
            <button type="button" onClick={() => currentStep < stepperSteps.length && setCurrentStep(currentStep + 1)} className={`w-full sm:w-auto px-5 py-2.5 sm:py-3 text-sm font-medium text-white bg-[${PRIMARY_BLUE}] hover:opacity-90 rounded-full transition-opacity`}>
              Continue
            </button>
          </>
        );
      case 2:
        return (
          <div className="grid grid-cols-2 w-full gap-2 sm:flex sm:justify-center sm:items-center sm:gap-4">
            <button type="button" className="w-full sm:w-auto px-3 py-2.5 text-sm sm:px-6 sm:py-3 sm:text-md font-medium text-gray-700 border border-[#E5E7EB] hover:bg-gray-200 rounded-full transition-colors">
              Cancel
            </button>
            <button type="button" onClick={handleSaveClick} className={`w-full sm:w-auto px-3 py-2.5 text-sm sm:px-6 sm:py-3 sm:text-md font-medium text-white bg-[${PRIMARY_BLUE}] hover:opacity-90 rounded-full transition-opacity`}>
              Save
            </button>
            <button type="button" onClick={() => currentStep < stepperSteps.length && setCurrentStep(currentStep + 1)} className={`w-full sm:w-auto px-3 py-2.5 text-sm sm:px-6 sm:py-3 sm:text-md font-medium text-white bg-[${PRIMARY_BLUE}] hover:opacity-90 rounded-full transition-opacity`}>
              Preview
            </button>
            <button type="button" onClick={()=>setOpenModal("uploadFile")} className={`${YELLOW_BUTTON_BG} col-start-2 row-start-1 w-full sm:w-auto text-white px-3 py-2.5 text-sm sm:px-6 sm:py-3 sm:text-md font-medium hover:opacity-90 rounded-full transition-opacity`}>
              Upload File
            </button>
          </div>
        );
      case 3:
        return (
          <>
            <button type="button" className="w-full sm:w-auto px-5 py-2.5 text-sm sm:px-6 sm:py-3 sm:text-md font-medium text-gray-700 border border-[#E5E7EB] hover:bg-gray-200 rounded-full transition-colors">
              Cancel
            </button>
            <button type="button" onClick={handleSaveClick} className={`w-full sm:w-auto px-5 py-2.5 text-sm sm:px-6 sm:py-3 sm:text-md font-medium text-white bg-[${PRIMARY_BLUE}] hover:opacity-90 rounded-full transition-opacity`}>
              Save
            </button>
            <button type="button" className={`w-full sm:w-auto px-6 py-2.5 sm:py-3 text-sm sm:px-8 font-medium text-white bg-[${PRIMARY_BLUE}] hover:opacity-90 rounded-full transition-opacity`}>
              Publish
            </button>
          </>
        );
      default: return null;
    }
  };

  return (
    <div className="bg-white rounded-2xl p-4 md:px-6 lg:px-16">
      <UploadFilePopup
        isOpen={openModal === "uploadFile"}
        onClose={() => setOpenModal(null)}
      />
      <Stepper steps={stepperSteps} currentStep={currentStep} setCurrentStep={setCurrentStep} isClickable={true} />
      {renderStepContent()}
      <div className="mt-8 flex justify-center items-center gap-2 sm:gap-4">
        {renderActionButtons()}
      </div>
    </div>
  );
};

export default CreateBWTestContent;