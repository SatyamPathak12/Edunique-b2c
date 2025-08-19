"use client";

import { useState } from "react";
import { Search, Calendar, Eye, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar as CalendarComponent } from "@/components/ui/calender";
import { format } from "date-fns";
import StudentSidebarWrapper from "@/components/student-sidebar-wrapper";

interface CourseMaterial {
  id: string;
  title: string;
  date: Date;
}

export default function CourseMaterials() {
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [searchQuery, setSearchQuery] = useState("");

  // Group materials by date
  const materialsByDate: Record<string, CourseMaterial[]> = {
    "20 Jun 2025": [
      { id: "1", title: "English Content", date: new Date(2025, 5, 20) },
      { id: "2", title: "English Content", date: new Date(2025, 5, 20) },
      { id: "3", title: "English Content", date: new Date(2025, 5, 20) },
    ],
    "19 Jun 2025": [
      { id: "4", title: "English Content", date: new Date(2025, 5, 19) },
      { id: "5", title: "English Content", date: new Date(2025, 5, 19) },
      { id: "6", title: "English Content", date: new Date(2025, 5, 19) },
    ],
    "17 Jun 2025": [
      { id: "7", title: "English Content", date: new Date(2025, 5, 17) },
      { id: "8", title: "English Content", date: new Date(2025, 5, 17) },
      { id: "9", title: "English Content", date: new Date(2025, 5, 17) },
    ],
  };

  const handleSearch = () => {
    console.log("Searching for:", searchQuery);
    // Implement search functionality here
  };

  const handleView = (id: string) => {
    console.log("Viewing material:", id);
    // Implement view functionality here
  };

  const handleDownload = (id: string) => {
    console.log("Downloading material:", id);
    // Implement download functionality here
  };

  return (
    <StudentSidebarWrapper>
      <div className="max-w-7xl mx-auto bg-white rounded-xl shadow-sm p-6 h-fit">
        <h1 className="text-2xl font-semibold mb-6">Course Materials</h1>

        {/* Search and Date Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-8 justify-between">
          <div className="flex items-center gap-4 ">
            <div className="flex-1 relative min-w-3xs max-w-lg  w-[30vw]">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                placeholder="Search"
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Button
              className="bg-pink-500 hover:bg-pink-600 text-white"
              onClick={handleSearch}
            >
              Search
            </Button>
          </div>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className="w-full md:w-[240px] justify-between text-gray-500 font-normal"
              >
                {date ? format(date, "dd/MM/yyyy") : "DD/MM/YYYY"}
                <Calendar className="ml-2 h-4 w-4" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="end">
              <CalendarComponent
                mode="single"
                selected={date}
                onSelect={setDate}
                initialFocus
              />
            </PopoverContent>
          </Popover>
        </div>

        {/* Materials List */}
        {Object.entries(materialsByDate).map(([dateStr, materials]) => (
          <div key={dateStr} className="mb-8">
            <h2 className="text-lg text-gray-700 mb-4">{dateStr}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {materials.map((material) => (
                <Card
                  key={material.id}
                  className="overflow-hidden border shadow-sm"
                >
                  <CardContent className="p-4 flex items-center gap-4">
                    <div className="bg-yellow-400 rounded-lg p-4 flex-shrink-0">
                      <div className="w-12 h-12 flex items-center justify-center">
                        <div className="w-8 h-8 border-2 border-blue-800 relative">
                          <div className="absolute top-1 left-1 w-full h-[2px] bg-blue-800"></div>
                          <div className="absolute top-3 left-1 w-3/4 h-[2px] bg-blue-800"></div>
                          <div className="absolute top-5 left-1 w-1/2 h-[2px] bg-blue-800"></div>
                        </div>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium mb-4">{material.title}</h3>
                      <div className="flex gap-2">
                        <Button
                          size="sm"
                          className="bg-blue-500 hover:bg-blue-600 text-white rounded-full"
                          onClick={() => handleView(material.id)}
                        >
                          <Eye className="mr-1 h-4 w-4" />
                          View
                        </Button>
                        <Button
                          size="sm"
                          className="bg-pink-500 hover:bg-pink-600 text-white rounded-full"
                          onClick={() => handleDownload(material.id)}
                        >
                          <Download className="mr-1 h-4 w-4" />
                          Download
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </div>
    </StudentSidebarWrapper>
  );
}
