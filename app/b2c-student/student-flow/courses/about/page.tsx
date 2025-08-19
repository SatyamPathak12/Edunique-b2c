"use client";

import { useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  ArrowLeft,
  CircleArrowLeft,
  CircleArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import StudentWrapper from "@/components/student-wrapper";
import FooterNew from "@/components/footer3";
import { useRouter } from "next/navigation";

interface Unit {
  number: string;
  name: string;
  marks: number;
}

interface QuestionPaperRow {
  sNo: string;
  topology: string;
  totalMarks: number;
  weightage: number;
}

interface LearningObjective {
  color: "WHITE" | "PINK" | "PURPLE";
  objectives: string[];
}

interface ClassFlowStep {
  number: number;
  title: string;
  description: string;
}

const units: Unit[] = [
  { number: "I", name: "Number Systems", marks: 10 },
  { number: "II", name: "Algebra", marks: 20 },
  { number: "III", name: "Coordinate Geometry", marks: 4 },
  { number: "IV", name: "Geometry", marks: 27 },
  { number: "V", name: "Mensuration", marks: 13 },
  { number: "VI", name: "Statistics", marks: 6 },
];

const questionPaperData: QuestionPaperRow[] = [
  {
    sNo: "1.",
    topology:
      "Remembering: Exhibit memory of previously learned material by recalling facts, terms, basic concepts, and answers. Understanding: Demonstrate understanding of facts and ideas by organizing, comparing, translating, interpreting, giving descriptions, and stating main ideas",
    totalMarks: 43,
    weightage: 54,
  },
  {
    sNo: "2.",
    topology:
      "Applying: Solve problems to new situations by applying acquired knowledge, facts, techniques and rules in a different way.",
    totalMarks: 19,
    weightage: 24,
  },
  {
    sNo: "3.",
    topology:
      "Analysing: Examine and break information into parts by identifying motives or causes. Make inferences and find evidence to support generalizations. Evaluating: Present and defend opinions by making judgments about information, validity of ideas, or quality of work based on a set of criteria. Creating: Compile information together in a different way by combining elements in a new pattern or proposing alternative solutions",
    totalMarks: 18,
    weightage: 22,
  },
];

const learningObjectives: LearningObjective[] = [
  {
    color: "WHITE",
    objectives: [
      "Recall addition and subtraction of like proper and improper fractions.",
      "Recall expressing mixed numbers as improper fractions.",
      "Recall the addition and subtraction of mixed numbers.",
      "Interpret the meaning of words like 'Sum total', 'In all' or altogether 'how much left or remaining', 'which is more or less', etc, and correlate them to symbols of addition and subtraction ie,+ and - signs, in order to solve the word problem.",
      "Attempt to solve 5 to 10 questions with or without support.",
    ],
  },
  {
    color: "PINK",
    objectives: [
      "Recall addition and subtraction of like proper and improper fractions.",
      "Recall expressing mixed numbers as improper fractions.",
      "Recall the addition and subtraction of mixed numbers.",
      "Interpret the meaning of words like 'Sum total', in all 'how much left', 'which is more or less', etc, and correlate them to symbols of addition and subtraction ie, + and - signs, in order to solve the word problem.",
      "Attempt to solve 5 to 10 questions with or without support.",
    ],
  },
  {
    color: "PURPLE",
    objectives: [
      "Recall addition and subtraction of like proper and improper fractions.",
      "Recall expressing mixed numbers as improper fractions.",
      "Recall the addition and subtraction of mixed numbers.",
      "Interpret the meaning of words like 'Sum total', in all 'how much left', 'which is more or less', etc, and correlate them to symbols of addition and subtraction ie, + and - signs, in order to solve the word problem.",
      "Attempt to solve 5 to 10 questions with or without support.",
    ],
  },
];

const classFlowSteps: ClassFlowStep[] = [
  {
    number: 1,
    title: "Warm-up (5 min): Quick recap of proper/improper fractions.",
    description: "",
  },
  {
    number: 2,
    title: "Intro (5 min): Today's goal: Identify & compare fractions.",
    description: "",
  },
  {
    number: 3,
    title:
      "Interactive (20 min): Show fraction visuals, have students guess values.",
    description: "",
  },
  {
    number: 4,
    title:
      "Activity (10 min): Pair exercise: convert improper to mixed numbers.",
    description: "",
  },
  {
    number: 5,
    title: "Wrap-up (5 min): Assign short worksheet + prep for next session",
    description: "",
  },
];

export default function CurriculumComponent() {
  const router = useRouter();
  const [activeMainTab, setActiveMainTab] = useState<
    "pedagogy" | "curriculum" | "learning-intent"
  >("learning-intent");
  const [activeSubTab, setActiveSubTab] = useState<"pedagogy" | "class-flow">(
    "pedagogy"
  );
  const [activeCategory, setActiveCategory] = useState(1);
  const [openSessions, setOpenSessions] = useState<number[]>([]);
  const [openChapters, setOpenChapters] = useState<number[]>([]);
  const [openLectures, setOpenLectures] = useState<number[]>([]);

  const toggleSession = (index: number) => {
    setOpenSessions((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const toggleChapter = (index: number) => {
    setOpenChapters((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const toggleLecture = (index: number) => {
    setOpenLectures((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const renderCurriculumContent = () => (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
      {/* Left Side */}
      <div className="lg:col-span-7 bg-white p-5 rounded-3xl">
        {/* Session Section */}
        <div className="mb-6">
          <div className="flex justify-between items-center gap-4 mb-4">
            <h3 className="text-blue-600 font-medium border-b-2 border-blue-600 pb-1">
              Session
            </h3>
            <div className="flex items-center gap-4 text-sm text-gray-600">
              <select className="border rounded-xl px-2 py-1 border-[#E5E7EB] bg-[#F9FAFB]">
                <option>Weekly</option>
                <option>Monthly</option>
              </select>
              <div className="flex justify-center items-center gap-2 border rounded-xl px-2 py-1 border-[#E5E7EB] bg-[#F9FAFB]">
                <CircleArrowLeft className="w-4 h-4 cursor-pointer" />
                <span>June 2025</span>
                <CircleArrowRight className="w-4 h-4 cursor-pointer" />
              </div>
            </div>
          </div>

          {/* Unit Card */}
          <Card className="mb-4 bg-[#E5E7EB] rounded-3xl">
            <CardContent
              className="p-4 rounded-3xl"
              style={{
                backgroundImage: 'url("/student/my-course/Ciricular.png")',
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            >
              <div className="flex justify-between items-center mb-3 bg-white rounded-3xl px-4 py-3">
                <h4 className="font-medium text-lg">Unit Name</h4>
                <div className="text-xs flex items-center text-gray-500">
                  <span>Periods: 18</span>
                  <span className="ml-4">Marks: 20</span>
                </div>
              </div>

              <div className="space-y-4 text-sm text-gray-700 bg-white rounded-3xl px-4 py-3">
                <h5 className="font-medium mb-2">1. REAL NUMBERS</h5>
                <p className="font-xs text-[#6B7280]">
                  1. Review of representation of natural numbers, integers, and
                  rational numbers on the number line. Rational numbers as
                  recurring/terminating decimals. Operations on real numbers.
                </p>
                <p className="font-xs text-[#6B7280]">
                  2. Examples of non-recurring/non-terminating decimals.
                  Existence of non-rational numbers (irrational numbers) such
                  as, and their representation on the number line. Explaining
                  that every real number is represented by a unique point on the
                  number line and conversely, viz. every point on the number
                  line represents a unique real number.
                </p>
                <p className="font-xs text-[#6B7280]">
                  3. Definition of nth root of a real number.
                </p>
                <p className="font-xs text-[#6B7280]">
                  4. Rationalization (with precise meaning) of real numbers of
                  the type
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Expandable Sessions */}
          <div className="space-y-2">
            {Array.from({ length: 7 }, (_, i) => (
              <Collapsible
                key={i}
                open={openSessions.includes(i)}
                onOpenChange={() => toggleSession(i)}
              >
                <CollapsibleTrigger className="w-full">
                  <Card className="hover:shadow-md transition-shadow border border-[#E5E7EB] bg-[#F9FAFB] rounded-3xl">
                    <CardContent className="p-4">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">
                          Session Name / Number
                        </span>
                        {openSessions.includes(i) ? (
                          <ChevronUp className="h-4 w-4" />
                        ) : (
                          <ChevronDown className="h-4 w-4" />
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </CollapsibleTrigger>
                <CollapsibleContent className="mt-2">
                  <Card className="border border-[#E5E7EB] bg-[#F9FAFB] rounded-3xl">
                    <CardContent className="p-4 text-sm text-gray-700">
                      <p>Session content would go here...</p>
                    </CardContent>
                  </Card>
                </CollapsibleContent>
              </Collapsible>
            ))}
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className="lg:col-span-5">
        {/* Course Structure Table */}
        <Card className="bg-white rounded-3xl mb-6">
          <CardContent className="p-5">
            <div className="text-[#3366FF] text-center py-2 font-medium">
              COURSE STRUCTURE CLASS - IX
            </div>
            <table className="w-full">
              <thead className="bg-[#99DDFF]">
                <tr>
                  <th className="border border-black px-3 py-2 text-sm font-medium">
                    Units
                  </th>
                  <th className="border border-black px-3 py-2 text-sm font-medium">
                    Unit Name
                  </th>
                  <th className="border border-black px-3 py-2 text-sm font-medium">
                    Marks
                  </th>
                </tr>
              </thead>
              <tbody>
                {units.map((unit, index) => (
                  <tr key={index}>
                    <td className="border border-black px-3 py-2 text-sm text-center">
                      {unit.number}
                    </td>
                    <td className="border border-black px-3 py-2 text-sm">
                      {unit.name}
                    </td>
                    <td className="border border-black px-3 py-2 text-sm text-center">
                      {unit.marks}
                    </td>
                  </tr>
                ))}
                <tr className="bg-[#99DDFF] font-medium">
                  <td
                    className="border border-black px-3 py-2 text-sm text-center"
                    colSpan={2}
                  >
                    Total
                  </td>
                  <td className="border border-black px-3 py-2 text-sm text-center">
                    80
                  </td>
                </tr>
              </tbody>
            </table>
          </CardContent>
        </Card>

        <div className="space-y-5 bg-white p-5 rounded-3xl">
          {/* Question Paper Design */}
          <Card className="border-0">
            <CardContent className="p-0">
              <div className="text-center mb-4">
                <h4 className="font-bold">MATHEMATICS</h4>
                <h4 className="font-bold">QUESTION PAPER DESIGN</h4>
                <h4 className="font-bold">CLASS - IX</h4>
              </div>
              <div className="flex justify-between mb-4 text-sm">
                <span>Time: 3 Hrs.</span>
                <span>Max. Marks: 80</span>
              </div>
              <table className="w-full text-xs">
                <thead className="bg-[#99DDFF]">
                  <tr>
                    <th className="border border-black px-2 py-1">S. No.</th>
                    <th className="border border-black px-2 py-1">
                      Typology of Questions
                    </th>
                    <th className="border border-black px-2 py-1">
                      Total Marks
                    </th>
                    <th className="border border-black px-2 py-1">
                      % Weightage (approx)
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {questionPaperData.map((row, index) => (
                    <tr key={index}>
                      <td className="border border-black px-2 py-1 text-center">
                        {row.sNo}
                      </td>
                      <td className="border border-black px-2 py-1">
                        {row.topology}
                      </td>
                      <td className="border border-black px-2 py-1 text-center">
                        {row.totalMarks}
                      </td>
                      <td className="border border-black px-2 py-1 text-center">
                        {row.weightage}
                      </td>
                    </tr>
                  ))}
                  <tr className="bg-[#99DDFF] font-medium">
                    <td
                      className="border border-black px-2 py-1 text-center"
                      colSpan={2}
                    >
                      Total
                    </td>
                    <td className="border border-black px-2 py-1 text-center">
                      80
                    </td>
                    <td className="border border-black px-2 py-1 text-center">
                      100
                    </td>
                  </tr>
                </tbody>
              </table>
            </CardContent>
          </Card>

          {/* Internal Assessment */}
          <Card className="border-0">
            <CardContent className="p-0">
              <table className="w-full text-xs">
                <thead className="bg-[#99DDFF]">
                  <tr>
                    <th className="border border-black px-2 py-1">
                      INTERNAL ASSESSMENT
                    </th>
                    <th className="border border-black px-2 py-1">20 Marks</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-black px-2 py-1 text-center">
                      Pen Paper Test and Multiple Assessment (5+5)
                    </td>
                    <td className="border border-black px-2 py-1">10 Marks</td>
                  </tr>
                  <tr>
                    <td className="border border-black px-2 py-1 text-center">
                      Portfolio
                    </td>
                    <td className="border border-black px-2 py-1">05 Marks</td>
                  </tr>
                  <tr>
                    <td className="border border-black px-2 py-1 text-center">
                      Lab Practical (Lab activities to be done from the
                      prescribed books)
                    </td>
                    <td className="border border-black px-2 py-1">05 Marks</td>
                  </tr>
                </tbody>
              </table>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );

  const renderLearningIntentContent = () => (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
      {/* Left Side */}
      <div className="lg:col-span-7 bg-white p-5 rounded-3xl">
        {/* Sub-tabs */}
        <div className="flex justify-center items-center gap-2 mb-6 border border-[#E5E7EB] rounded-full p-2">
          <Button
            onClick={() => setActiveSubTab("pedagogy")}
            variant={activeSubTab === "pedagogy" ? "default" : "outline"}
            className={`rounded-2xl px-4 py-3 text-sm curosr-pointer border-0 ${
              activeSubTab === "pedagogy"
                ? "bg-[#FF3366] hover:bg-[#FF3366] text-white"
                : "text-gray-600 hover:text-gray-800"
            }`}
          >
            Pedagogy
          </Button>
          <Button
            onClick={() => setActiveSubTab("class-flow")}
            variant={activeSubTab === "class-flow" ? "default" : "outline"}
            className={`rounded-2xl px-4 py-3 text-sm cursor-pointer border-0 ${
              activeSubTab === "class-flow"
                ? "bg-[#FF3366] hover:bg-[#FF3366] text-white"
                : "text-gray-600 hover:text-gray-800"
            }`}
          >
            Class Flow
          </Button>
        </div>

        {activeSubTab === "pedagogy" ? (
          <>
            {/* Chapter Card */}
            <Card className="mb-4 bg-[#E5E7EB] rounded-3xl">
              <CardContent
                className="p-4 rounded-3xl"
                style={{
                  backgroundImage: 'url("/student/my-course/Pedagogy.png")',
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
              >
                <div className="flex justify-between items-center mb-3 bg-white rounded-3xl px-4 py-3">
                  <h4 className="font-medium text-lg">Chapter Name</h4>
                  <div className="text-xs flex items-center text-gray-500">
                    <span>Duration: 5 Hrs/Mins</span>
                    <span className="ml-4">Topic Name: Name</span>
                  </div>
                </div>

                <div className="space-y-4 text-sm text-gray-700 bg-white rounded-3xl px-4 py-3">
                  <div>
                    <h5 className="font-medium mb-2">Before the class</h5>
                    <p className="mb-2 font-xs text-[#6B7280]">
                      1. Study the Lesson Plan Prepare a list of students
                      according to their groups. Keep the printouts of the next
                      homework assignment ready and answers of the previous home
                      assignment.
                    </p>
                    <p className="mb-2 font-xs text-[#6B7280]">
                      1. Encourage the students to speak up and participate in
                      the discussion. Getting the answer right is not the
                      purpose, trying and thinking about the concept is more
                      important. You can use statements like excellent, you are
                      thinking in the right direction.
                    </p>
                    <p className="mb-2 font-xs text-[#6B7280]">
                      1. Definition of nth root of a real number.
                    </p>
                    <p className="mb-2 font-xs text-[#6B7280]">
                      1. Basically, before introducing today&#39;s topic you
                      first need to revise the addition and subtraction of
                      proper and improper fractions, and mixed numbers.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Expandable Chapters */}
            <div className="space-y-2">
              {Array.from({ length: 5 }, (_, i) => (
                <Collapsible
                  key={i}
                  open={openChapters.includes(i)}
                  onOpenChange={() => toggleChapter(i)}
                >
                  <CollapsibleTrigger className="w-full">
                    <Card className="hover:shadow-md transition-shadow border border-[#E5E7EB] bg-[#F9FAFB] rounded-3xl">
                      <CardContent className="p-4">
                        <div className="flex justify-between items-center">
                          <span className="font-medium">Chapter Name</span>
                          {openChapters.includes(i) ? (
                            <ChevronUp className="h-4 w-4" />
                          ) : (
                            <ChevronDown className="h-4 w-4" />
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  </CollapsibleTrigger>
                  <CollapsibleContent className="mt-2">
                    <Card className="border border-[#E5E7EB] bg-[#F9FAFB] rounded-3xl">
                      <CardContent className="p-4 text-sm">
                        <p>Chapter content would go here...</p>
                      </CardContent>
                    </Card>
                  </CollapsibleContent>
                </Collapsible>
              ))}
            </div>
          </>
        ) : (
          <>
            {/* Lecture Card */}
            <Card className="mb-4 bg-[#E5E7EB] rounded-3xl">
              <CardContent className="p-4">
                <div className="flex justify-between items-center mb-3 bg-white rounded-3xl px-4 py-3">
                  <h4 className="font-medium text-lg">Lecture Number</h4>
                  <div className="text-xs flex items-center text-gray-500">
                    <span>Duration: 5 Hrs/Mins</span>
                    <span className="ml-4">Chapter Name: Name</span>
                  </div>
                </div>

                <div className="space-y-4 text-sm bg-white rounded-3xl px-4 py-3">
                  {classFlowSteps.map((step) => (
                    <div key={step.number} className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-[#3366FF] text-white rounded-full flex items-center justify-center text-xs font-medium flex-shrink-0">
                        {step.number}
                      </div>
                      <p className="text-sm">{step.title}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Expandable Lectures */}
            <div className="space-y-2">
              {Array.from({ length: 7 }, (_, i) => (
                <Collapsible
                  key={i}
                  open={openLectures.includes(i)}
                  onOpenChange={() => toggleLecture(i)}
                >
                  <CollapsibleTrigger className="w-full">
                    <Card className="hover:shadow-md transition-shadow border border-[#E5E7EB] bg-[#F9FAFB] rounded-3xl">
                      <CardContent className="p-4">
                        <div className="flex justify-between items-center">
                          <span className="font-medium">Lecture Number</span>
                          {openLectures.includes(i) ? (
                            <ChevronUp className="h-4 w-4" />
                          ) : (
                            <ChevronDown className="h-4 w-4" />
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  </CollapsibleTrigger>
                  <CollapsibleContent className="mt-2">
                    <Card className="border border-[#E5E7EB] bg-[#F9FAFB] rounded-3xl">
                      <CardContent className="p-4 text-sm text-gray-700">
                        <p>Lecture content would go here...</p>
                      </CardContent>
                    </Card>
                  </CollapsibleContent>
                </Collapsible>
              ))}
            </div>
          </>
        )}
      </div>

      {/* Right Side - Learning Objectives */}
      <div className="lg:col-span-5 space-y-6">
        <Card className="border-0 bg-white p-5 rounded-3xl">
          <CardContent className="p-0">
            <h4 className="text-blue-600 font-semibold text-lg mb-4">
              Learning Objectives
            </h4>

            {learningObjectives.map((section, index) => (
              <div key={index} className="mb-6">
                <h5 className="font-bold mb-3">{section.color}:</h5>
                <ul className="space-y-2 text-sm">
                  {section.objectives.map((objective, objIndex) => (
                    <li key={objIndex} className="flex items-start gap-2">
                      <span className="mt-1 font-extrabold">•</span>
                      <span>{objective}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="border-0 bg-white p-5 rounded-3xl">
          <CardContent className="p-4">
            <h4 className="text-blue-600 font-semibold text-lg mb-4">
              Material required:
            </h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-gray-400 mt-1">•</span>
                <span>Worksheets for each group</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gray-400 mt-1">•</span>
                <span>A performance record/map for the students</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gray-400 mt-1">•</span>
                <span>Prescribed textbook</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );

  return (
    <StudentWrapper>
      <section className="w-full bg-[#EEEEEE]">
        {/* headers */}
        <div className="bg-white border-b">
          <div className="w-full px-4 sm:px-6 lg:px-8">
            <div className="flex items-center py-4">
              <ArrowLeft
                className="w-6 h-6 text-gray-600 mr-3 cursor-pointer hover:text-gray-800"
                onClick={() => router.push("/student/courses")}
              />
              <h1 className="text-xl font-medium text-[#FF3366]">
                About Course
              </h1>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
          {/* Main Tabs */}
          <div className="flex gap-8 mb-8 border-b">
            <button
              onClick={() => setActiveMainTab("learning-intent")}
              className={`pb-2 px-1 font-medium ${
                activeMainTab === "learning-intent"
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              Learning Intent
            </button>
            <button
              onClick={() => setActiveMainTab("curriculum")}
              className={`pb-2 px-1 font-medium ${
                activeMainTab === "curriculum"
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              Curriculum
            </button>
          </div>

          {activeMainTab === "curriculum" && (
            <div className="flex justify-center items-center flex-wrap gap-4 mb-6 bg-white px-4 py-3 rounded-full">
              {[1, 2, 3, 4, 5].map((category) => (
                <Button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  variant={activeCategory === category ? "default" : "outline"}
                  className={`rounded-2xl px-4 py-3 text-sm cursor-pointer border-0 ${
                    activeCategory === category
                      ? "bg-[#FF3366] hover:bg-[#FF3366] text-white"
                      : "text-gray-600 hover:text-gray-800"
                  }`}
                >
                  Category {category}
                </Button>
              ))}
            </div>
          )}

          {/* Content */}
          {activeMainTab === "learning-intent" && renderLearningIntentContent()}
          {activeMainTab === "curriculum" && renderCurriculumContent()}
          {activeMainTab === "pedagogy" && (
            <div className="text-center py-12 text-gray-500">
              Pedagogy content would go here...
            </div>
          )}
        </div>
      </section>
      <div className="z-10 absolute">
        <FooterNew showSuscriptionBlock={false} />
      </div>
    </StudentWrapper>
  );
}
