"use client";

import { useState } from "react";
import { Calendar, Lock, Play, Search } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import StudentSidebarWrapper from "@/components/student-sidebar-wrapper";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Table as CustomTable,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";

export default function SettingsTestResult() {
  const [activeTab, setActiveTab] = useState("Upcoming");

  return (
    <StudentSidebarWrapper>
      <div className="max-w-7xl mx-auto bg-white rounded-xl shadow-sm p-6 h-fit">
        <h1 className="text-2xl font-semibold mb-6">My Course</h1>

        <Tabs
          defaultValue="Upcoming"
          value={activeTab}
          onValueChange={(value) => setActiveTab(value)}
          className="w-full"
        >
          <TabsList className="w-full flex justify-start gap-3 bg-white border-b border-t pt-3 mb-8">
            <TabsTrigger
              value="Upcoming"
              className={cn(
                "data-[state=active]:border-b-2 data-[state=active]:border-rose-500 data-[state=active]:text-rose-500 rounded-none",
                activeTab === "Upcoming" ? "border-b-2 border-rose-500 text-rose-500" : ""
              )}
            >
              Upcoming
            </TabsTrigger>
            <TabsTrigger
              value="Result"
              className={cn(
                "data-[state=active]:border-b-2 data-[state=active]:border-rose-500 data-[state=active]:text-rose-500 rounded-none",
                activeTab === "Result" ? "border-b-2 border-rose-500 text-rose-500" : ""
              )}
            >
              Result
            </TabsTrigger>
          </TabsList>

          <TabsContent value="Upcoming">
            <Upcoming />
          </TabsContent>

          <TabsContent value="Result">
            <Result />
          </TabsContent>
        </Tabs>
      </div>
    </StudentSidebarWrapper>
  );
}

function Upcoming() {
  return (
    <div className="space-y-8">
      <div className="w-full p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <MathTestCard status="unlocked" />
          <MathTestCard status="locked" />
          <MathTestCard status="locked" />
          <MathTestCard status="locked" />
          <MathTestCard status="locked" />
          <MathTestCard status="locked" />
        </div>
      </div>
    </div>
  );
}

const MathTestCard = ({
  status = "unlocked",
  date = "20 Jun 2025",
}: {
  status?: "unlocked" | "locked";
  date?: string;
}) => {
  return (
    <Card className="w-full border rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
      <CardContent className="p-4">
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0 bg-yellow-400 rounded-lg p-3">
            <div className="w-8 h-8 flex items-center justify-center text-white">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-6 h-6"
              >
                <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2" />
                <path d="M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                <path d="M9 14l2 2 4-4" />
              </svg>
            </div>
          </div>

          <div className="flex-grow">
            <h3 className="font-bold text-lg">Mathematics Test</h3>
            <div className="flex items-center mt-1 text-blue-500">
              <Calendar className="w-4 h-4 mr-1" />
              <span className="text-sm">{date}</span>
            </div>
          </div>
        </div>
      </CardContent>

      <CardFooter className="px-4 pb-4 pt-0">
        {status === "unlocked" ? (
          <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center gap-2">
            <Play className="w-4 h-4" />
            <span>Start</span>
          </Button>
        ) : (
          <div className="w-full flex justify-center">
            <Lock className="w-8 h-8 text-blue-200" />
          </div>
        )}
      </CardFooter>
    </Card>
  );
};

const testData = [
  {
    id: 1,
    name: "Mathematics test",
    dateFrom: "04/01/2025",
    dateTo: "04/07/2025 04:30 pm",
    totalQuestions: 100,
    attempted: 60,
    score: 80,
    status: "Pass",
  },
  {
    id: 2,
    name: "Mathematics test",
    dateFrom: "04/01/2025",
    dateTo: "04/07/2025 04:30 pm",
    totalQuestions: 100,
    attempted: 60,
    score: 80,
    status: "Failed",
  },
  {
    id: 3,
    name: "Mathematics test",
    dateFrom: "04/01/2025",
    dateTo: "04/07/2025 04:30 pm",
    totalQuestions: 100,
    attempted: 60,
    score: 80,
    status: "Pass",
  },
  {
    id: 4,
    name: "Mathematics test",
    dateFrom: "04/01/2025",
    dateTo: "04/07/2025 04:30 pm",
    totalQuestions: 100,
    attempted: 60,
    score: 80,
    status: "Failed",
  },
  {
    id: 5,
    name: "Mathematics test",
    dateFrom: "04/01/2025",
    dateTo: "04/07/2025 04:30 pm",
    totalQuestions: 100,
    attempted: 60,
    score: 80,
    status: "Pass",
  },
  {
    id: 6,
    name: "Mathematics test",
    dateFrom: "04/01/2025",
    dateTo: "04/07/2025 04:30 pm",
    totalQuestions: 100,
    attempted: 60,
    score: 80,
    status: "Failed",
  },
  {
    id: 7,
    name: "Mathematics test",
    dateFrom: "04/01/2025",
    dateTo: "04/07/2025 04:30 pm",
    totalQuestions: 100,
    attempted: 60,
    score: 80,
    status: "Pass",
  },
  {
    id: 8,
    name: "Mathematics test",
    dateFrom: "04/01/2025",
    dateTo: "04/07/2025 04:30 pm",
    totalQuestions: 100,
    attempted: 60,
    score: 80,
    status: "Failed",
  },
];

const Result = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState(testData);

  const handleSearch = () => {
    const filtered = testData.filter((test) =>
      test.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredData(filtered);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="w-full px-4">
      <div className="flex flex-col sm:flex-row gap-4 mb-6 w-lg">
        <div className="relative flex-grow">
          <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <Input
            className="pl-10 border rounded-md w-full"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyPress={handleKeyPress}
          />
        </div>
        <Button
          className="bg-pink-500 hover:bg-pink-600 text-white px-8"
          onClick={handleSearch}
        >
          Search
        </Button>
      </div>

      <div className="overflow-x-auto">
        <CustomTable className="w-full">
          <TableHeader className="bg-blue-50">
            <TableRow>
              <TableHead className="text-gray-700 font-medium">Test Name</TableHead>
              <TableHead className="text-gray-700 font-medium">Date From</TableHead>
              <TableHead className="text-gray-700 font-medium">Date To</TableHead>
              <TableHead className="text-gray-700 font-medium">Total Questions</TableHead>
              <TableHead className="text-gray-700 font-medium">Attempted</TableHead>
              <TableHead className="text-gray-700 font-medium">Score</TableHead>
              <TableHead className="text-gray-700 font-medium">Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredData.map((test) => (
              <TableRow key={test.id} className="even:bg-gray-50">
                <TableCell className="text-gray-600">{test.name}</TableCell>
                <TableCell className="text-gray-600">{test.dateFrom}</TableCell>
                <TableCell className="text-gray-600">{test.dateTo}</TableCell>
                <TableCell className="text-gray-600">{test.totalQuestions}</TableCell>
                <TableCell className="text-gray-600">{test.attempted}</TableCell>
                <TableCell className="text-green-600 font-medium">{test.score} <span className="text-gray-700">/100</span></TableCell>
                <TableCell>
                  <span
                    className={`font-medium ${
                      test.status === "Pass" ? "text-green-500" : "text-red-500"
                    }`}
                  >
                    {test.status}
                  </span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </CustomTable>
      </div>
    </div>
  );
};
