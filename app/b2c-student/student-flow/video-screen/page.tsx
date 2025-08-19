"use client";

import React, { useLayoutEffect, useRef, useState } from 'react';
import Footer from '@/components/layout/Footer';

import {
    VideoPlayerSection,
    PlaylistSidebar,
    VideoInfoSection,
    PlaylistItemData,
    QuizResultItemData
} from './components';
import { OptimizedCategoryTabsBar } from '@/components/common-components/topbar';
import { useRouter } from 'next/navigation';
import StudentWrapper from '@/components/student-wrapper';

// --- Sample Data (kept in page.tsx) ---
const mainCategoriesData = ['Academics', 'Skill Development', 'Brain Function', 'Sports', 'STEMnology', 'Competition', 'Extra curriculars'];
const playlistDataPage: PlaylistItemData[] = [
    { id: 'v1', title: 'Title', subtitle: 'Subtitle', date: '23 / 5 / 25', duration: '45 Mins', isActive: true },
    { id: 'v2', title: 'Quiz Name', subtitle: 'Subtitle', date: '23 / 5 / 25' },
    { id: 'v3', title: 'Title', subtitle: 'Subtitle', date: '23 / 5 / 25', duration: '45 Mins', isLocked: true },
    { id: 'v4', title: 'Title', subtitle: 'Subtitle', date: '23 / 5 / 25', duration: '45 Mins', isLocked: true },
    { id: 'v5', title: 'Title', subtitle: 'Subtitle', date: '23 / 5 / 25', duration: '45 Mins', isLocked: true },
    { id: 'v6', title: 'Title', subtitle: 'Subtitle', date: '23 / 5 / 25', duration: '45 Mins', isLocked: true },

];
const upcomingQuizDataPage: QuizResultItemData[] = [
    { id: 'q1', name: 'Quiz', subtitleOrDate: 'Subtitle', date: '23/6/25' },
    { id: 'q2', name: 'Quiz', subtitleOrDate: 'Subtitle', isLocked: true, date: '23/6/25' },
    { id: 'q3', name: 'Quiz', subtitleOrDate: 'Subtitle', isLocked: true, date: '23/6/25' },
];
const resultDataPage: QuizResultItemData[] = [
    { id: 'r1', name: 'Quiz Name', subtitleOrDate: 'Date', scorePercentage: 60 },
    { id: 'r2', name: 'Quiz Name', subtitleOrDate: 'Date', scorePercentage: 60 },
];
const loremIpsumData = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eros sapien, semper id velit quis, sollicitudin egestas sem. In ac bibendum lacus, at luctus nunc. Proin elementum ullamcorper luctus. Aenean nec nulla imperdiet, sodales lacus quis, tempus neque. Vestibulum id purus augue. Fusce vel lectus ac nibh auctor tristique. Aliquam a leo risus. Integer ut gravida risus. Aliquam lobortis tortor at tellus consequat egestas eget ac mi. Suspendisse id ligula accumsan, ullamcorper nibh non, semper felis. Integer efficitur luctus sem, varius vehicula tellus hendrerit nec. Vestibulum ut aliquet turpis. Suspendisse ac semper nisi. Donec tristique ligula a volutpat mollis. Duis vel ligula in mi cursus accumsan vel at quam. Nullam in metus nec turpis mattis ullamcorper sit amet at est. Aliquam fringilla sapien nec arcu faucibus luctus. Nullam elementum aliquam arcu, vitae lacinia erat aliquam nec. Aliquam erat volutpat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In ac lorem vitae urna elementum bibendum sed sit amet neque. Nam quis sem ac augue porta tempor vel non tortor. Etiam sollicitudin odio ligula, vel eleifend nisl viverra quis. Sed sed nunc scelerisque, fringilla magna vitae, condimentum odio. Phasellus sed rutrum ligula, sed interdum lorem. Etiam massa nisi, eleifend ut sollicitudin accumsan, viverra vel ex. Pellentesque id enim tincidunt, consequat felis a, tempor nisi. Cras hendrerit lacinia tellus at sollicitudin. Nullam dolor enim, luctus id auctor ut, ultrices eget nulla. Cras vestibulum quam id sapien efficitur volutpat. Cras tempor magna elementum maximus faucibus.';

export default function CourseVideoPage() {
    const [activeMainCategory, setActiveMainCategory] = useState(mainCategoriesData[0]);
    const [activeInfoTab, setActiveInfoTab] = useState<'Overview' | 'Quiz' | 'Result'>('Result');
    const [currentVideoTime] = useState(30);
    const [activePlaylistItemId] = useState<string | null>(playlistDataPage[0]?.id || null);

    const Router = useRouter();

    const handlePlaylistItemClick = (item: PlaylistItemData) => {
        if (item.title === "Quiz Name") {
            Router.push("/b2c-student/student-flow/quiz-page");
        }
    };

    const handleVideoPlayerBackClick = () => {
        if (typeof window !== "undefined") {
            window.history.back();
        }
    };


    const leftRef = useRef<HTMLDivElement | null>(null)
    const [rightHeight, setRightHeight] = useState<number>(200);

    useLayoutEffect(() => {
        const updateHeight = () => {
            if (leftRef.current) {
                setRightHeight(leftRef.current.offsetHeight);
                console.log(rightHeight);
            }
        }

        updateHeight();

        const observer = new ResizeObserver(updateHeight);

        if (leftRef.current) {
            observer.observe(leftRef.current);
        }

        return () => {
            if (leftRef.current) {
                observer.unobserve(leftRef.current);
            }
            observer.disconnect();
        }
    }, [])

    return (
        <StudentWrapper student activeState='My course'>

            <div className="bg-[#eeeeee] min-h-screen flex flex-col">

                <main className="flex-grow w-full mx-auto p-3 sm:p-4 md:p-6 lg:p-8 space-y-4 md:space-y-6">
                    <div className="mb-4">
                        <OptimizedCategoryTabsBar
                            categories={mainCategoriesData}
                            activeCategory={activeMainCategory}
                            onCategoryClick={(category) => setActiveMainCategory(category)}
                        />
                    </div>

                    <div className="flex flex-col lg:flex-row bg-white rounded-2xl overflow-hidden">
                        <div className="lg:flex-1 lg:min-w-0" ref={leftRef}>
                            <VideoPlayerSection
                                courseTitle="Earth and Space Science"
                                courseSubtitle="Solar system, weather patterns, and basic understanding of the Earth."
                                videoThumbnailSrc="/images/video-image.png"
                                currentVideoTime={currentVideoTime}
                                onBackClick={handleVideoPlayerBackClick}
                            />
                        </div>
                        <PlaylistSidebar
                            playlistItems={playlistDataPage.map(item => ({ ...item, isActive: item.id === activePlaylistItemId }))}
                            onItemClick={handlePlaylistItemClick}
                            rightHeight={rightHeight}
                        />
                    </div>

                    <VideoInfoSection
                        activeTab={activeInfoTab}
                        onTabChange={setActiveInfoTab}
                        overviewContent={loremIpsumData}
                        upcomingQuizzes={upcomingQuizDataPage}
                        results={resultDataPage}
                    />
                </main>

                <Footer />
            </div>
        </StudentWrapper>
    );
}