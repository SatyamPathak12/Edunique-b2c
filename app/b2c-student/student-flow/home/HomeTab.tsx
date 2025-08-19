"use client";

import { useState, useRef, useLayoutEffect, useEffect } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

const categories = [
  "Academic",
  "Notsoextra Curricular",
  "Foundation",
  "Skill Development",
  "Brain Development",
  "Door Step Tutoring",
  "Skill Club",
];

const academicSubmenus = [
  { label: "Subjects", key: "subject", hasSubmenu: true },
  { label: "Boards", key: "board", hasSubmenu: true },
  { label: "Homework", key: "homework", hasSubmenu: false },
];

const subjectsSubmenu = [
  "Math's Tution Class", "English Tution Class", "Science Tution Class",
  "Social Studies Tution Classes", "Hindi Tution Class", "EVS Tution Class",
  "GK & IT Tution Class", "Third Language Tution Classes"
];

const boardsSubmenu = [
  "CBSE All Subject Tution Classes", "ICSE All Subject Tution Classes",
  "IGCSE All Subject Tution Classes", "IB All Subject Tution Classes",
  "State Board All Subject Tution Classes"
];

const CategoryTabs: React.FC = () => {
  const [selected, setSelected] = useState("Academic");
  const [submenuLevel, setSubmenuLevel] = useState<null | "academic" | "subject" | "board">(null);
  const academicRef = useRef<HTMLDivElement | null>(null);

  // Store dropdown position
  const [dropdownPosition, setDropdownPosition] = useState({ top: 0, left: 0 });

  // Auto-close on scroll
  useEffect(() => {
    const handleScroll = () => {
      setSubmenuLevel(null);
    };
    window.addEventListener("scroll", handleScroll, true);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle positioning on layout change
  useLayoutEffect(() => {
    if (academicRef.current) {
      const rect = academicRef.current.getBoundingClientRect();
      setDropdownPosition({ top: rect.bottom, left: rect.left });
    }
  }, [submenuLevel]);

  const handleClick = (category: string) => {
    if (category === "Academic") {
      if (selected === "Academic" && submenuLevel === null) {
        setSubmenuLevel("academic");
      } else if (selected === "Academic" && submenuLevel !== null) {
        setSubmenuLevel(null);
      } else {
        setSelected("Academic");
        setSubmenuLevel("academic");
      }
    } else {
      setSelected(category);
      setSubmenuLevel(null);
    }
  };

  return (
    <div className="relative z-[9999]">
      <div className="flex gap-3  justify-start md:justify-center px-2 rounded-xl whitespace-nowrap overflow-x-auto scrollbar-hide">
        {categories.map((category) => {
          const isAcademic = category === "Academic";
          const isActive = selected === category;
          const showDropdown = isAcademic && selected === "Academic" && submenuLevel;

          const academicLabel =
            submenuLevel === "subject"
              ? "Subjects"
              : submenuLevel === "board"
                ? "Boards"
                : "Academic";

          const isDropdownOpen = submenuLevel !== null;

          return (
            <div key={category} className="relative" ref={isAcademic ? academicRef : null}>
              <button
                onClick={() => handleClick(category)}
                className={`relative text-sm font-medium px-2 py-2 min-w-[150px] focus:outline-none transition ${showDropdown ? "rounded-t-full" : "rounded-full"}`}
              >
                {isActive && (
                  <motion.div
                    layoutId="active-tab"
                    className={`absolute inset-0 bg-[#ff3366] z-0 ${showDropdown ? "rounded-t-xl" : "rounded-full"}`}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
                <div className={`relative z-10 flex px-2 items-center ${isAcademic ? "justify-between gap-2" : "justify-center"} text-sm ${isActive ? "text-white" : "text-gray-500"}`}>
                  {isAcademic ? academicLabel : category}
                  {isAcademic && (
                    isDropdownOpen ? (
                      <FiChevronUp className="w-4 h-4" />
                    ) : (
                      <FiChevronDown className="w-4 h-4" />
                    )
                  )}
                </div>
              </button>

              {/* Dropdown - Animation removed */}
              {showDropdown && (
                <div
                  className="fixed bg-[#ff3366] text-white rounded-b-xl"
                  style={{
                    top: dropdownPosition.top,
                    left: dropdownPosition.left,
                    width: "150px",
                    zIndex: 9999,
                  }}
                >
                  <div className="flex flex-col w-full text-left overflow-hidden">
                    {submenuLevel === "academic" &&
                      academicSubmenus.map((item, index) => (
                        <button
                          key={index}
                          onClick={() => {
                            if (item.hasSubmenu) {
                              setSubmenuLevel(item.key as "subject" | "board");
                            }
                          }}
                          className="flex justify-between items-center text-sm px-4 py-2 hover:bg-[#ff4973] transition whitespace-nowrap overflow-hidden text-ellipsis"
                        >
                          <span className="truncate">{item.label}</span>
                          {item.hasSubmenu && <FiChevronDown className="ml-2 w-4 h-4 flex-shrink-0" />}
                        </button>
                      ))}

                    {submenuLevel === "subject" &&
                      subjectsSubmenu.map((item, index) => (
                        <button
                          key={index}
                          className="text-sm px-4 py-2 hover:bg-[#ff4973] transition text-left whitespace-normal break-words"
                          onClick={() => setSubmenuLevel("academic")}
                        >
                          {item}
                        </button>
                      ))}

                    {submenuLevel === "board" &&
                      boardsSubmenu.map((item, index) => (
                        <button
                          key={index}
                          className="text-sm px-4 py-2 hover:bg-[#ff4973] transition text-left whitespace-normal break-words"
                          onClick={() => setSubmenuLevel("academic")}
                        >
                          {item}
                        </button>
                      ))}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryTabs;