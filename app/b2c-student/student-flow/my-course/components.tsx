// components.tsx
"use client";

import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
// No imports from ui-components.tsx needed for this specific page's structure yet.

// --- Component 1: CourseCard (Major Component) ---
export interface Course { // Exporting interface for use in page.tsx
    id: number;
    status: 'ongoing' | 'upcoming' | 'completed';
    imageSrc: string;
    category?: string;
    name: string;
    domain: string;
    levelGrade: string;
    pendingClasses?: string;
    validity?: string;
    progress?: number;
    isKnowledgeBox?: boolean;
    description?: string;
}

interface CourseCardProps {
    course: Course;
}

export const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
    const isOngoing = course.status === 'ongoing';
    const isUpcoming = course.status === 'upcoming';
    const isCompleted = course.status === 'completed';

    const Router = useRouter();

    if (course.isKnowledgeBox) {
        return (
            <div onClick={() => Router.push("/b2c-student/student-flow/my-class")} className="bg-[#F9FAFB] border-[#E5E7EB] border rounded-2xl p-3 flex flex-col h-full hover:shadow-xl cursor-pointer transition-shadow duration-200">
                <div className="w-full rounded-xl flex items-center justify-center mb-3 sm:mb-4"> {/* Adjusted margin */}
                    <Image src={course.imageSrc} alt={course.name} width={932} height={460} className="w-full h-auto rounded-xl object-cover aspect-[16/9] sm:aspect-video" /> {/* Added aspect ratio */}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-black mb-1">{course.name}</h3>
                <p className="text-xs sm:text-sm text-[#6B7280] tracking-wide line-clamp-3 sm:line-clamp-none"> {/* line-clamp for mobile */}
                    {course.description}
                </p>
            </div>
        );
    }

    return (
        <div onClick={() => {
            if (!isCompleted) Router.push("/b2c-student/student-flow/single-course-detail")
        }} className="bg-[#F9FAFB] border-[#E5E7EB] border rounded-2xl p-2 flex flex-col h-full hover:shadow-xl cursor-pointer transition-shadow duration-200">
            <div className="relative w-full aspect-[16/9] sm:aspect-video rounded-xl overflow-hidden"> {/* Added aspect ratio and overflow hidden for Image */}
                <Image src={course.imageSrc} alt={course.name} layout="fill" objectFit="contain" />
            </div>
            <div className="flex flex-col flex-grow sm:mt-2"> {/* Adjusted margin */}
                <h3 className="text-lg sm:text-xl font-bold text-black sm:my-2 leading-tight">{course.name}</h3>
                <p className="text-xs sm:text-sm text-[#6B7280] mb-0.5">
                    <span className="text-black font-medium">Domain:</span> {course.domain}
                </p>
                <p className="text-xs sm:text-sm text-gray-500 mb-0.5">
                    <span className="text-black font-medium">Level / Grade:</span> {course.levelGrade}
                </p>
                {isOngoing && course.pendingClasses && (
                    <p className="text-xs sm:text-sm text-gray-500 mb-0.5">
                        <span className="text-black font-medium">Pending Class:</span> {course.pendingClasses}
                    </p>
                )}
                {isUpcoming && course.validity && (
                    <p className="text-[10px] sm:text-xs text-gray-500 mb-0.5">
                        <span className="font-medium text-black">Validity to start from:</span> {course.validity}
                    </p>
                )}
                {isCompleted && course.pendingClasses && (
                    <p className="text-[10px] sm:text-xs text-gray-500 mb-0.5">
                        <span className="font-medium text-black">Pending Class:</span> {course.pendingClasses}
                    </p>
                )}

                <div className="mt-auto pt-2 sm:pt-3"> {/* Adjusted padding */}
                    {(isOngoing || isCompleted) && typeof course.progress === 'number' && (
                        <div className="mb-2 p-1.5 sm:p-2 rounded-full sm:rounded-3xl bg-[#F3F4F6] items-center flex justify-start gap-2 sm:gap-3">
                            <div className="w-[50%] sm:w-[55%] bg-gray-300 rounded-full h-2.5 sm:h-3"> {/* Added track bg */}
                                <div
                                    className={`h-2.5 sm:h-3 rounded-full ${isCompleted ? 'bg-[#8DD9B3]' : 'bg-blue-500'}`}
                                    style={{ width: `100%` }}></div>
                            </div>
                            <p className="text-[10px] sm:text-xs text-[#6B7280] text-left flex-grow"> {/* flex-grow for alignment */}
                                {course.progress}% {isCompleted ? 'Completed' : ''} {/* Added 'Progress' for ongoing */}
                            </p>
                        </div>
                    )}
                    {isUpcoming && (
                        <button className="w-full bg-blue-600 text-white text-sm font-medium py-2 sm:py-2.5 rounded-full sm:rounded-3xl hover:bg-blue-700 transition-colors">
                            Start
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};


// --- Component 2: CourseSection (Major Component for Ongoing, Upcoming, Completed) ---
interface CourseSectionProps {
    title: string;
    courses: Course[];
    titleColor?: string;
}
export const CourseSection: React.FC<CourseSectionProps> = ({ title, courses, titleColor = "text-black" }) => (
    <section className="mb-8 md:mb-12">
        <h2 className={`text-lg sm:text-xl font-semibold mb-4 sm:mb-6 ${titleColor}`}>{title}</h2>
        {courses.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {courses.map(course => (
                    <CourseCard key={course.id} course={course} />
                ))}
            </div>
        ) : (
            <p className="text-sm text-gray-500">No courses in this section yet.</p>
        )}
    </section>
);


// --- Component 3: AiSuggestsSection (Major Component) ---
export const AiSuggestsSection: React.FC = () => (
    <section
        className="rounded-2xl sm:rounded-3xl px-4 py-6 sm:px-8 sm:py-4 md:px-12 text-black relative overflow-hidden bg-black/10"
        style={{
            backgroundImage: 'url(/images/ai-suggests-bg-pattern.png)', // UPDATE PATH
            backgroundRepeat: 'repeat',
            backgroundSize: 'auto', // Or 'contain' or fixed size as per original
            backgroundPosition: 'center',
        }}>
        <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-center relative z-10">
            <div className="text-center md:text-left relative z-10 flex-shrink-0 md:w-1/2 lg:w-2/5">
                <div className="flex items-center justify-center md:justify-start gap-2 mb-3 sm:mb-4">
                    <h2 className="text-2xl sm:text-3xl tracking-wider md:text-4xl font-semibold">AI suggests</h2>
                    <Image src="/star.png" alt="star" width={180} height={180} className="w-10 h-10 sm:w-16 sm:h-16 object-contain" />
                </div>
                <p className="text-xs sm:text-sm opacity-90 mb-6 sm:mb-8 max-w-xs sm:max-w-sm md:max-w-none mx-auto md:mx-0 md:w-auto"> {/* Adjusted max-w */}
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque placerat lectus et leo fermentum aliquet.
                    Curabitur sollicitudin tortor at lacus ultricies, quis blandit sem varius.
                </p>
                <button className="px-10 sm:px-22 py-2.5 sm:py-3 bg-blue-600 text-white font-semibold text-xs sm:text-sm rounded-lg sm:rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-pink-600 transition-colors">
                    Explore More
                </button>
            </div>
            <div className="w-full md:w-1/2 lg:w-3/5 py-4 overflow-hidden relative rounded-2xl z-20">
                <Image
                    src="/AI.png"
                    alt="AI suggestions"
                    width={1804} // Original width
                    height={1148} // Original height
                    className="w-full h-auto max-w-full sm:max-w-[70%] md:max-w-full rounded-2xl sm:scale-110 ml-auto object-contain sm:object-cover md:object-contain"
                    priority
                />
            </div>
        </div>
    </section>
);