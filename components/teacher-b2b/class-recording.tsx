// /app/class-recording/page.tsx (or your preferred file path)
"use client";

import React, { useState, useMemo, useEffect } from "react";
import {
  FiSearch,
  FiChevronDown,
  FiShare2,
  FiFilm,
  FiArrowLeftCircle,
  FiArrowRightCircle,
  FiUploadCloud,
  FiX
} from "react-icons/fi";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { CiPlay1 } from "react-icons/ci";
import { AiOutlineDelete } from "react-icons/ai";
import { AnimatePresence, motion } from "framer-motion";
import TeacherB2CWrapper from "../teacher-b2c/common-components/TeacherB2CPageWrapper";
import ShareWithManageVideoPopup from "@/app/b2c-teacher/ct-pop-ups/popupComponent/ShareWithManage";
import ShareVideoPopup from "@/app/b2c-teacher/ct-pop-ups/popupComponent/ShareVideo";
import DeleteRecordingModal from "@/app/b2c-teacher/ct-pop-ups/popupComponent/DeleteRecording";

// --- Style Constants (from your original code) ---
const ACCENT_PINK = "#FF3366";
const PRIMARY_BLUE = "#3366FF";
const LIGHT_BLUE_BUTTON_BG = "bg-[#3366FF1A]";
const LIGHT_BLUE_BUTTON_TEXT = "text-[#3366FF]";
const LIGHT_GREEN_BUTTON_BG = "bg-[#8DD9B333]";
const LIGHT_GREEN_BUTTON_TEXT = "text-[#8DD9B3]";
const LIGHT_RED_BUTTON_BG = "bg-[#FF33661A]";
const LIGHT_RED_BUTTON_TEXT = "text-[#FF3366]";
const FILTER_BG = "bg-[#F9FAFB]";

// --- Data Interfaces ---
interface ClassRecording { id: string; title: string; subjectUnitName: string; periodNumber: string; date: string; isShared: boolean; }
interface FilterOption { value: string; label: string; }

// --- Sample Data ---
const sampleRecordings: ClassRecording[] = [{ id: "rec1", title: "Class 3", subjectUnitName: "Unit Name", periodNumber: "Number", date: "29/5/25", isShared: true, }, { id: "rec2", title: "Class 3", subjectUnitName: "Unit Name", periodNumber: "Number", date: "29/5/25", isShared: true, }, { id: "rec3", title: "Class 3", subjectUnitName: "Unit Name", periodNumber: "Number", date: "29/5/25", isShared: true, }, { id: "rec4", title: "Class 3", subjectUnitName: "Unit Name", periodNumber: "Number", date: "29/5/25", isShared: false, }, { id: "rec5", title: "Class 3", subjectUnitName: "Unit Name", periodNumber: "Number", date: "29/5/25", isShared: false, }];
const sampleBatchOptions: FilterOption[] = [{ value: "batchA", label: "All Batches" }];
const sampleSubjectOptions: FilterOption[] = [{ value: "all", label: "Subject" }, { value: "science", label: "Science" }];








// --- MAIN PAGE UI COMPONENTS ---

const FilterDropdown: React.FC<{ options: FilterOption[]; value: string; onChange: (value: string) => void; }> = ({ options, value, onChange }) => (
  <div className="relative">
    <select value={value} onChange={(e) => onChange(e.target.value)} className={`pl-3 pr-7 py-2 text-sm ${FILTER_BG} border border-[#E5E7EB] rounded-lg focus:ring-1 focus:ring-[${PRIMARY_BLUE}] focus:border-[${PRIMARY_BLUE}] outline-none appearance-none`}>
      {options.map((opt) => (<option key={opt.value} value={opt.value}>{opt.label}</option>))}
    </select>
    <FiChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-black pointer-events-none" />
  </div>
);

const RecordingCard: React.FC<{ recording: ClassRecording; onShared: () => void; onShare: () => void; onDelete: () => void; }> = ({ recording, onShared, onShare, onDelete }) => (
  <div className="bg-[#F9FAFB] border border-[#E5E7EB] rounded-2xl p-2  duration-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
    <div className="flex items-center gap-4 flex-grow min-w-0">
      <div className="bg-[#FFCC001A] w-24 h-24 sm:w-24 sm:h-24 rounded-2xl flex items-center justify-center flex-shrink-0">
        <FiFilm className="w-12 h-12 sm:w-8 sm:h-8 text-[#FFCC00]" />
      </div>
      <div className="min-w-0">
        <h3 className="text-lg  font-semibold text-gray-900 truncate">{recording.title}</h3>
        <p className="text-sm text-gray-500 mt-0.5 truncate">Subject: {recording.subjectUnitName}</p>
        <p className="text-sm text-gray-500 mt-0.5 truncate">Period: {recording.periodNumber}</p>
        <p className="text-sm text-gray-500 mt-0.5 truncate">Date: {recording.date}</p>
      </div>
    </div>
    <div className="flex items-center space-x-2 sm:space-x-4 flex-shrink-0">
      {recording.isShared ? (
        <button onClick={onShared} className={`px-3 py-1.5 text-sm ${LIGHT_BLUE_BUTTON_BG} ${LIGHT_BLUE_BUTTON_TEXT} font-medium rounded-full`}>Shared</button>
      ) : (
        <button onClick={onShare} className={`p-2 rounded-full ${LIGHT_BLUE_BUTTON_BG} hover:bg-blue-200`} aria-label="Share recording"><FiShare2 className={`w-4 h-4 ${LIGHT_BLUE_BUTTON_TEXT}`} /></button>
      )}
      <button className={`p-2 rounded-full ${LIGHT_GREEN_BUTTON_BG} hover:bg-green-200`} aria-label="Play recording"><CiPlay1 className={`w-4 h-4 ${LIGHT_GREEN_BUTTON_TEXT}`} strokeWidth={2} /></button>
      <button onClick={onDelete} className={`p-2 rounded-full ${LIGHT_RED_BUTTON_BG} hover:bg-red-200`} aria-label="Delete recording"><AiOutlineDelete className={`w-4 h-4 ${LIGHT_RED_BUTTON_TEXT}`} /></button>
    </div>
  </div>
);

// --- ClassRecordingContent Component with State Management ---
const ClassRecordingContent: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [batchFilter, setBatchFilter] = useState(sampleBatchOptions[0].value);
  const [subjectFilter, setSubjectFilter] = useState(sampleSubjectOptions[0].value);

  const [shareVideoAccess, setShareVideoAccess] = useState(false);
  const [shareVideo, setShareVideo] = useState(false);
  const [deleteRecording, setDeleteRecording] = useState(false);




  const recordings = useMemo(() => sampleRecordings.filter(rec => rec.title.toLowerCase().includes(searchTerm.toLowerCase()) || rec.subjectUnitName.toLowerCase().includes(searchTerm.toLowerCase())), [searchTerm]);
  const recordingsByDate = useMemo(() => {
    const grouped: { [date: string]: ClassRecording[] } = {};
    recordings.forEach((rec) => { (grouped[rec.date] = grouped[rec.date] || []).push(rec); });
    return grouped;
  }, [recordings]);

  return (
    <>
      <div className="bg-white rounded-2xl p-4 sm:p-6">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 flex-grow w-full lg:w-auto">
            <button className={`px-4 py-2 text-sm font-medium whitespace-nowrap text-[${ACCENT_PINK}] border-b-2 border-[${ACCENT_PINK}]`}>Class Recording</button>

            <div className="flex items-center gap-2 sm:gap-4">
              <div className="relative flex-grow">
                <FiSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 sm:w-5 h-4 sm:h-5 text-black pointer-events-none" />
                <input type="text" placeholder="Search" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className={`w-full pl-10 pr-4 py-2.5 border border-[#6B7280] bg-white rounded-full focus:ring-2 focus:ring-[#3366FF] focus:border-transparent outline-none text-sm`} />
              </div>

              <div className="flex items-center gap-2 text-sm border border-[#E5E7EB] text-black bg-[#F9FAFB] px-3 py-2 rounded-xl">
                <FiArrowLeftCircle className="w-4 h-4 cursor-pointer hover:text-black" /><span className="whitespace-nowrap">June 2025</span><FiArrowRightCircle className="w-4 h-4 cursor-pointer hover:text-black" />
              </div>

            </div>
          </div>
          <div className="flex items-center gap-2 flex-wrap sm:flex-nowrap justify-start sm:justify-end lg:justify-start flex-shrink-0">

            <FilterDropdown options={sampleBatchOptions} value={batchFilter} onChange={setBatchFilter} />
            <FilterDropdown options={sampleSubjectOptions} value={subjectFilter} onChange={setSubjectFilter} />
          </div>
        </div>

        {Object.keys(recordingsByDate).length > 0 ? (
          <div className="space-y-6">
            {Object.entries(recordingsByDate).map(([date, recs]) => (
              <div key={date}>
                <h2 className="text-lg font-semibold text-black mb-2 ml-1">Date</h2>
                <div className="space-y-3">
                  {recs.map((rec) => (<RecordingCard key={rec.id} recording={rec} onShared={() => setShareVideoAccess(true)} onShare={() => setShareVideo(true)} onDelete={() => setDeleteRecording(true)} />))}
                </div>
              </div>
            ))}
          </div>
        ) : (<div className="text-center py-12 text-gray-500"><FiFilm className="w-16 h-16 mx-auto mb-4 text-gray-400" /><h3 className="text-xl font-semibold mb-2">No Recordings Found</h3><p className="text-sm">Try adjusting your search or filter criteria.</p></div>)}


      </div>
      <ShareWithManageVideoPopup isOpen={shareVideoAccess} onClose={() => setShareVideoAccess(false)} />
      <ShareVideoPopup isOpen={shareVideo} onClose={() => setShareVideo(false)} />
      <DeleteRecordingModal isOpen={deleteRecording} onClose={() => setDeleteRecording(false)} />
    </>
  );
};


// --- Main Page Export ---
export default function ClassRecordingPage() {

  return (
    <>
      <Header activeState="Recordings" />
      <TeacherB2CWrapper >
        <ClassRecordingContent />
      </TeacherB2CWrapper>
      <Footer />
    </>
  );
}