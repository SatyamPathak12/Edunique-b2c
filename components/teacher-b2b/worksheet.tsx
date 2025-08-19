"use client";

import React, { useState, useMemo } from 'react';
import { FiArrowLeft, FiFolder, } from 'react-icons/fi';
import Header from "@/components/layout/Header"; // Adjust path as needed
import Footer from "@/components/layout/Footer"; // Adjust path as needed

// --- Data Interfaces ---
interface Category {
  id: string;
  name: string;
}

interface Folder {
  id: string;
  name: string;
  fileCount: number;
  categoryId: string; // To link folder to a category
}

// --- Sample Data ---
const sampleCategories: Category[] = [
  { id: 'cat1', name: 'Category 1' },
  { id: 'cat2', name: 'Category 2' },
  { id: 'cat3', name: 'Category 3' },
  { id: 'cat4', name: 'Category 4' },
  { id: 'cat5', name: 'Category 5' },
];

const sampleFolders: Folder[] = [
  { id: 'f1', name: 'Folder Name', fileCount: 100, categoryId: 'cat1' },
  { id: 'f2', name: 'Folder Name', fileCount: 100, categoryId: 'cat1' },
  { id: 'f3', name: 'Folder Name', fileCount: 100, categoryId: 'cat1' },
  { id: 'f4', name: 'Folder Name', fileCount: 100, categoryId: 'cat3' },
  { id: 'f5', name: 'Folder Name', fileCount: 100, categoryId: 'cat3' },
  { id: 'f6', name: 'Folder Name', fileCount: 100, categoryId: 'cat4' },
  { id: 'f7', name: 'Folder Name', fileCount: 100, categoryId: 'cat2' },
  { id: 'f8', name: 'Folder Name', fileCount: 100, categoryId: 'cat2' },
];

// --- Sub-components ---

interface CategoryTabProps {
  category: Category;
  isActive: boolean;
  onClick: () => void;
}

const CategoryTab: React.FC<CategoryTabProps> = ({ category, isActive, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`px-3.5 py-2 sm:px-5 sm:py-2.5 rounded-2xl text-xs sm:text-sm font-medium transition-all duration-200 whitespace-nowrap
        ${isActive
          ? 'bg-[#FF3366] text-white '
          : 'bg-transparent text-[#6B7280] hover:bg-gray-100'
        }`}
    >
      {category.name}
    </button>
  );
};

interface FolderCardProps {
  folder: Folder;
}

const FolderCard: React.FC<FolderCardProps> = ({ folder }) => {
  return (
    <div className="bg-slate-50 rounded-2xl p-3 transition-shadow duration-200 relative flex flex-col sm:flex-row sm:items-center gap-4 max-w-lg">
      {/* Info Icon */}
      

      {/* Folder Icon Area */}
      <div className="bg-[#99DEFF] w-24 h-24 sm:w-26 sm:h-26 rounded-2xl flex items-center justify-center flex-shrink-0">
        <FiFolder className="w-10 h-10 sm:w-12 sm:h-12 text-black opacity-80" strokeWidth={1.5} />
      </div>

      {/* Folder Details */}
      <div className="flex flex-col flex-grow w-full">
        <h3 className="text-md font-semibold text-black mb-0.5">{folder.name}</h3>
        <p className="text-xs text-[#6B7280] mb-4">{folder.fileCount} Files</p>
        
      </div>
    </div>
  );
};


// --- Main Content Component ---
const UploadExistingTestContent: React.FC = () => {
  const [categories] = useState<Category[]>(sampleCategories);
  const [allFolders] = useState<Folder[]>(sampleFolders);
  const [activeCategoryId, setActiveCategoryId] = useState<string>(sampleCategories[0]?.id || '');

  const filteredFolders = useMemo(() => {
    if (!activeCategoryId) return allFolders; // Or an empty array if no default selection
    return allFolders.filter(folder => folder.categoryId === activeCategoryId);
  }, [allFolders, activeCategoryId]);

  return (
    <div className="bg-white rounded-2xl  min-h-screen p-4 sm:p-6 lg:p-8">
      {/* Category Tabs */}
      <div className="p-1 rounded-2xl flex items-center justify-center mb-6 border border-gray-200">
        <nav className="flex space-x-1 sm:space-x-4 overflow-x-auto custom-scrollbar-thin">
          {categories.map(cat => (
            <CategoryTab
              key={cat.id}
              category={cat}
              isActive={activeCategoryId === cat.id}
              onClick={() => setActiveCategoryId(cat.id)}
            />
          ))}
        </nav>
      </div>

      {/* Folders Grid */}
      {filteredFolders.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 max-w-4xl gap-x-4 gap-y-2 sm:gap-6">
          {filteredFolders.map(folder => (
            <FolderCard key={folder.id} folder={folder} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12 text-gray-500">
          <FiFolder className="w-16 h-16 mx-auto mb-4 text-gray-400" />
          <h3 className="text-xl font-semibold mb-2">No Tests Found</h3>
          <p className="text-sm">There are no tests available in this category.</p>
        </div>
      )}
    </div>
  );
};


export default function SelectExistingTestPage() {
  const headerUser = {
    name: "Shlok Agheda", // Example, should be dynamic or from context
    role: "Teacher",    // Example role
    avatarSrc: "/teacher-b2b/profile.png", // UPDATE THIS PATH
  };

  const handleBackClick = () => {
    if (typeof window !== "undefined") {
      window.history.back();
    }
  };

  return (
    <div className="bg-[#eeeeee] min-h-screen flex flex-col">
      <Header user={headerUser} />
    
      <div className="bg-gray-100">

      <div className='bg-white'>
        <div className="flex items-center gap-3 max-w-[96rem] mx-auto py-3.5  sticky top-0 z-40"> {/* Made title bar sticky */}
        <button
          onClick={handleBackClick}
          className="p-1.5 text-gray-700 hover:text-[#FF3366] focus:outline-none rounded-md"
          aria-label="Go back"
        >
          <FiArrowLeft className="w-5 h-5" />
        </button>
      
      </div>
      </div>

      <main className="flex-grow container mx-auto p-4 sm:p-6 lg:p-8">
        <UploadExistingTestContent />
      </main>
      </div>
    

      <Footer />
    </div>
  );
}