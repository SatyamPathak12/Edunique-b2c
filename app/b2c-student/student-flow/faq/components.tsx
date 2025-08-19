// components.tsx
"use client";

import React from 'react';
import Image from 'next/image';
// Assuming Shadcn UI Accordion components are globally available or imported in page.tsx
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';


// --- Data Interfaces ---
export interface FAQItemData { // For FAQ Section
    question: string;
    answer: string;
}

// --- Component 1: FAQSection ---
interface FAQSectionProps {
    questions: FAQItemData[];
    imageSrc: string; // For the student image
    imageAlt?: string;
}
export const FAQSection: React.FC<FAQSectionProps> = ({ questions, imageSrc, imageAlt = "Illustration" }) => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 "> 
        <div className="w-full">
            <Accordion type="single" collapsible className="w-full space-y-3 sm:space-y-4">
                {questions.map((item, index) => (
                    <AccordionItem
                        value={`item-${index}`}key={index}
                        className="px-3 py-1.5 rounded-lg bg-[#F9FAFB] border border-[#E5E7EB]
                                   sm:px-4 sm:py-2 sm:rounded-xl"
                    >
                        {/* Original Trigger: text-[#1A1A1A] */}
                        <AccordionTrigger className="text-sm font-medium text-left text-[#1A1A1A] hover:no-underline sm:text-base"> {/* text-left to ensure */}
                            {item.question}
                        </AccordionTrigger>
                        {/* Default AccordionContent styling from shadcn/ui will apply */}
                        <AccordionContent className="text-xs text-gray-600 pt-2 sm:text-sm sm:pt-3">
                            {item.answer}
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </div>
        {/* Original: sm:w-3/5 */}
        <div className="w-full">
            {/* Original Image: src={'/student.png'} width={200} height={200} alt="student" className="w-full h-full" */}
            {/* For responsiveness, provide intrinsic size and let Tailwind control display size.
                object-contain or object-cover depending on desired image behavior. */}
            <Image src={imageSrc} width={500} height={500} alt={imageAlt} className="w-full h-auto max-h-[400px] sm:max-h-[500px] object-contain rounded-lg" />
        </div>
    </div>
);


interface NewsletterSectionProps {
  newsletterEmail: string;
  onNewsletterEmailChange: (value: string) => void;
  onNewsletterSubmit: (e: React.FormEvent) => void;
}

export const NewsletterSection: React.FC<NewsletterSectionProps> = ({
  newsletterEmail,
  onNewsletterEmailChange,
  onNewsletterSubmit,
}) => {
  return (
    <div
      className="rounded-2xl p-6 md:p-10 lg:p-12 text-center text-white relative overflow-hidden bg-pink-600 bg-repeat" 
      style={{
        backgroundImage: "url(/pattern-2.png)", 
        backgroundSize: "1500px", 
        backgroundPosition: "center", 
      }}
    >
      <div className="relative z-10">
        <h2 className="text-2xl md:text-3xl lg:text-3xl font-bold mb-2 sm:mb-3">
          Subscribe to our newsletter
        </h2>
        <p className="text-xs sm:text-sm opacity-90 mb-6 sm:mb-8 max-w-md lg:max-w-lg mx-auto">
          Lorem Ipsum is simply dummy text of the printing.
        </p>
        <form
          onSubmit={onNewsletterSubmit}
          className="max-w-sm md:max-w-md mx-auto flex flex-row items-center bg-white rounded-full p-1 sm:p-1.5 shadow-lg"
        >
          <input
            type="email"
            value={newsletterEmail}
            onChange={(e) => onNewsletterEmailChange(e.target.value)}
            placeholder="Email Address"
            className="w-full sm:flex-grow px-4 sm:px-5 py-2 sm:py-2.5 text-gray-700 text-sm sm:text-base bg-transparent border-none focus:outline-none placeholder-gray-400 rounded-full sm:rounded-none sm:rounded-l-full mb-2 sm:mb-0"
            required
          />
          <button
            type="submit"
            className=" sm:w-auto px-8 sm:px-10 py-2 sm:py-2.5 bg-[#FFCC00] text-white font-semibold text-xs sm:text-sm rounded-full hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:ring-offset-2 transition-colors"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};