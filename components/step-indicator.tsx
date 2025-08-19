import React from 'react';

type StepIndicatorProps = {
  currentStep: number;
  totalSteps: number;
  setStep: Function,
};

export default function StepIndicator({ currentStep, totalSteps, setStep }: StepIndicatorProps) {
  return (
    <div className="bg-white rounded-full flex items-center justify-start gap-2 mb-4 px-2 py-1">
      {Array.from({ length: totalSteps }, (_, i) => i + 1).map((step) => (
        <div
          key={step}
          onClick={() => setStep(step)}
          className={`w-8 h-8 flex items-center justify-center rounded-full font-bold text-sm transition-all duration-300 cursor-pointer ${
            step === currentStep
              ? 'bg-[#F9FAFB] text-[#3366FF] border border-[#E5E7EB]'
              : 'bg-white text-[#6B7280]'
          }`}
        >
          {step}
        </div>
      ))}
    </div>
  );
}