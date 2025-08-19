"use client";

import FooterNew from "@/components/footer3";
import Footer from "@/components/layout/Footer";
import StudentWrapper from "@/components/student-wrapper";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function CoursePolicy() {
  const [isAgreed, setIsAgreed] = useState<boolean>(false);
  const router = useRouter()

  const handleAcceptAndProceed = () => {
    if (isAgreed) {
      router.push("/b2c-student/student-flow/new-skill-assessment")
      // Handle navigation or form submission here
    }
  };

  const toggleAgreement = () => {
    setIsAgreed(!isAgreed);
  };

  return (
    <StudentWrapper student >
      {/* Background */}
      {/* <div
        className="fixed inset-0 bg-center bg-repeat z-0"
        style={{
          backgroundImage: "url('/background5.png')",
          backgroundSize: "900px",
          filter: " brightness(1.1) blur(0.3px)",
          opacity: 0.6,
        }}
      ></div> */}
      {/* <div className="bg-black fixed inset-0 bg-center bg-repeat z-1 opacity-40" /> */}
      <div className="bg-[#e3e3e3]" />

      <div className="relative z-10 px-2 py-4 md:p-6 lg:p-10">
        <div className="min-h-fit max-w-7xl mx-auto w-full bg-white py-8 px-4 sm:px-6 lg:px-8 rounded-3xl">
          <div>
            {/* Header */}
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-900 mb-8">
              Course Policy
            </h1>

            {/* Policy Content Card */}
            <Card className="mb-8 border border-[#E5E7EB] p-2 rounded-xl">
              <div className="blue-scrollbar pr-2 max-h-[490px] overflow-y-auto">
                {/* Greeting */}
                <div className="bg-[#E5E7EB] rounded-xl p-2 ">
                  <p className="text-lg mb-6 max-w-5xl">Dear Parents,</p>

                  {/* Welcome Message */}
                  <p className="text-base sm:text-lg leading-relaxed mb-8 max-w-5xl">
                    Welcome to EduNique! We are delighted to have you on board as
                    we embark on your child&#39;s holistic learning journey. To
                    get started, please submit the form on our website along with
                    your preferred payment method to receive a GST receipt. Then,
                    log in to www.learningspace.edunique.in to select class
                    timings and access the content.
                  </p>

                  {/* Course Policies Section */}
                  <div className="max-w-3xl">
                    <h2 className="text-base md:text-lg font-bold mb-6">
                      Course Policies:
                    </h2>

                    <ul className="space-y-6 text-base md:text-lg">
                      {/* Punctuality Policy */}
                      <li className="flex items-start gap-2">
                        <span className="font-extrabold">•</span>
                        <span>
                          <strong>Punctuality Matters:&nbsp;</strong>
                          If a class is joined late, a compensatory session will
                          not be provided.
                        </span>
                      </li>

                      {/* Holiday Policy */}
                      <li className="flex items-start gap-2">
                        <span className="font-extrabold">•</span>
                        <span>
                          <strong>Holiday Policy:&nbsp;</strong>
                          National holidays will not be compensated, but the total
                          number of monthly classes will be covered.
                        </span>
                      </li>

                      {/* Fee Payment Policy */}
                      <li className="flex items-start gap-2">
                        <span className="font-extrabold">•</span>
                        <span>
                          <strong className="font-bold">
                            Timely Fee Payment:&nbsp;
                          </strong>
                          Fees should be paid one week before the current course
                          period ends to ensure a smooth learning experience.
                        </span>
                      </li>
                      {/* Fee Reminders */}
                      <li className="flex items-start gap-2">
                        <span className="font-extrabold">•</span>
                        <span>
                          <strong className="font-bold">Fee Reminders:&nbsp;</strong>
                          Repeated reminders for payments may disrupt the flow of the course.
                        </span>
                      </li>

                      {/* Rescheduling & Cancellations */}
                      <li className="flex items-start gap-2">
                        <span className="font-extrabold">•</span>
                        <span>
                          <strong className="font-bold">Rescheduling & Cancellations:&nbsp;</strong>
                          Requests must be made at least 24 hours in advance; otherwise, the class will be considered attended.
                        </span>
                      </li>

                      {/* Mentor Interaction */}
                      <li className="flex items-start gap-2">
                        <span className="font-extrabold">•</span>
                        <span>
                          <strong className="font-bold">Mentor Interaction:&nbsp;</strong>
                          We encourage parents to connect with mentors on Saturdays & Sundays to discuss their child's progress.
                        </span>
                      </li>

                      {/* Class Cancellations from EduNique */}
                      <li className="flex items-start gap-2">
                        <span className="font-extrabold">•</span>
                        <span>
                          <strong className="font-bold">Class Cancellations from EduNique:&nbsp;</strong>
                          If we need to cancel a session, we will arrange a compensatory session at a convenient time.
                        </span>
                      </li>

                      {/* Student Credentials */}
                      <li className="flex items-start gap-2">
                        <span className="font-extrabold">•</span>
                        <span>
                          <strong className="font-bold">Student Credentials:&nbsp;</strong>
                          Each child must have their unique ID and password before joining a class.
                        </span>
                      </li>
                      {/* Classroom Conduct */}
                      <li className="flex items-start gap-2">
                        <span className="font-extrabold">•</span>
                        <span>
                          <strong className="font-bold">Classroom Conduct:&nbsp;</strong>
                          To maintain a focused learning environment, feedback-related discussions will be addressed only in dedicated Saturday & Sunday slots and not during class.
                        </span>
                      </li>

                      {/* Learning Materials */}
                      <li className="flex items-start gap-2">
                        <span className="font-extrabold">•</span>
                        <span>
                          <strong className="font-bold">Learning Materials:&nbsp;</strong>
                          EduNique will provide all necessary learning content. We request students to maintain a separate notebook for their classes.
                        </span>
                      </li>

                      {/* Batch & Timing Changes */}
                      <li className="flex items-start gap-2">
                        <span className="font-extrabold">•</span>
                        <span>
                          <strong className="font-bold">Batch & Timing Changes:&nbsp;</strong>
                          Parents can request a change in batch, days, or timings once every three months if needed.
                        </span>
                      </li>

                      {/* Tracking Progress */}
                      <li className="flex items-start gap-2">
                        <span className="font-extrabold">•</span>
                        <span>
                          <strong className="font-bold">Tracking Progress:&nbsp;</strong>
                          Please refer to your child’s academic reports and progress chart to monitor their learning journey.
                        </span>
                      </li>
                      {/* Communication Channels */}
                      <li className="flex items-start gap-2">
                        <span className="font-extrabold">•</span>
                        <span>
                          <strong className="font-bold">Communication Channels:&nbsp;</strong>
                          <ul className="list-disc list-inside mt-1 space-y-1">
                            <li>For urgent concerns, contact our WhatsApp helpline: +91 9773743007.</li>
                            <li>Your industry mentor is available for support at +91 9599218488 or via email at info@edunique.in.</li>
                            <li>If you need parenting counseling, please reach out to akanksha@edunique.in.</li>
                          </ul>
                        </span>
                      </li>

                      {/* Homework & Retention Papers */}
                      <li className="flex items-start gap-2">
                        <span className="font-extrabold">•</span>
                        <span>
                          <strong className="font-bold">Homework & Retention Papers:&nbsp;</strong>
                          <ul className="list-disc list-inside mt-1 space-y-1">
                            <li>Completing assigned homework and weekend retention papers is mandatory to continue classes.</li>
                            <li>Teachers have the right to restrict class access if work is incomplete. In such cases, class recordings will be provided.</li>
                          </ul>
                        </span>
                      </li>

                    </ul>
                  </div>
                  <p className="text-base sm:text-lg leading-relaxed mb-8 max-w-5xl">
                    We appreciate your cooperation in creating a structured and enriching learning experience for your child.
                    Thank you for choosing EduNique!
                  </p>
                  <p className="text-base sm:text-lg leading-relaxed mb-8 max-w-5xl">
                    Best regards,<br />
                    Team EduNique
                  </p>
                </div>
              </div>
            </Card>

            {/* Agreement Section */}
            <div className="space-y-6">
              {/* Checkbox Agreement */}
              <div className="flex items-center gap-3">
                <button
                  onClick={toggleAgreement}
                  className={`flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-200 ${isAgreed
                    ? "bg-blue-500 border-blue-500 text-white"
                    : "border-gray-300 hover:border-blue-400 bg-white"
                    }`}
                >
                  {isAgreed && <Check className="h-4 w-4" />}
                </button>
                <p className="text-base sm:text-lg">
                  I have read and agree to the above policies.
                </p>
              </div>

              {/* Accept Button */}
              <div>
                <Button
                  onClick={handleAcceptAndProceed}
                  disabled={!isAgreed}
                  className={`px-6 py-4 text-base font-medium rounded-full transition-all duration-200 cursor-pointer ${isAgreed
                    ? "bg-[#3366FF] hover:bg-blue-600 text-white hover:shadow-lg"
                    : "bg-gray-300 text-gray-500 cursor-not-allowed"
                    }`}
                >
                  Accept and Proceed
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </StudentWrapper>
  );
}
