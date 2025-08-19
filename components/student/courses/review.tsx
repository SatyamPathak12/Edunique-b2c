"use client";

import {
  Star,
  ChevronLeft,
  ChevronRight,
  InfoIcon,
  VerifiedIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { useRef } from "react";

interface Review {
  id: string;
  name: string;
  date: string;
  rating: number;
  text: string;
  initial: string;
}

const mockReviews: Review[] = [
  {
    id: "1",
    name: "Name",
    date: "9/6/25",
    rating: 5,
    text: "Pellentesque ac sapien quis ipsum faucibus ullamcorper sed eu enim. Mauris id ornare metus. Aliquam urna libero, luctus vulputate. Aliquam urna libero, luctus vulputate. Pellentesque ac sapien quis ipsum faucibus ullamcorper sed eu enim. Mauris id ornare metus. Aliquam urna libero, luctus vulputate. Aliquam urna libero, luctus vulputate. Pellentesque ac sapien quis ipsum faucibus ullamcorper sed eu enim. Mauris id ornare metus. Aliquam urna libero, luctus vulputate. Aliquam urna libero, luctus vulputate.",
    initial: "S",
  },
  {
    id: "2",
    name: "Name",
    date: "9/6/25",
    rating: 5,
    text: "Pellentesque ac sapien quis ipsum faucibus ullamcorper sed eu enim. Mauris id ornare metus. Aliquam urna libero, luctus vulputate. Aliquam urna libero, luctus vulputate. Pellentesque ac sapien quis ipsum faucibus ullamcorper sed eu enim. Mauris id ornare metus. Aliquam urna libero, luctus vulputate. Aliquam urna libero, luctus vulputate. Pellentesque ac sapien quis ipsum faucibus ullamcorper sed eu enim. Mauris id ornare metus. Aliquam urna libero, luctus vulputate. Aliquam urna libero, luctus vulputate.",
    initial: "S",
  },
  {
    id: "3",
    name: "Name",
    date: "9/6/25",
    rating: 5,
    text: "Pellentesque ac sapien quis ipsum faucibus ullamcorper sed eu enim. Mauris id ornare metus. Aliquam urna libero, luctus vulputate. Aliquam urna libero, luctus vulputate. Pellentesque ac sapien quis ipsum faucibus ullamcorper sed eu enim. Mauris id ornare metus. Aliquam urna libero, luctus vulputate. Aliquam urna libero, luctus vulputate. Pellentesque ac sapien quis ipsum faucibus ullamcorper sed eu enim. Mauris id ornare metus. Aliquam urna libero, luctus vulputate. Aliquam urna libero, luctus vulputate.",
    initial: "S",
  },
  {
    id: "4",
    name: "Name",
    date: "9/6/25",
    rating: 5,
    text: "Pellentesque ac sapien quis ipsum faucibus ullamcorper sed eu enim. Mauris id ornare metus. Aliquam urna libero, luctus vulputate. Aliquam urna libero, luctus vulputate. Pellentesque ac sapien quis ipsum faucibus ullamcorper sed eu enim. Mauris id ornare metus. Aliquam urna libero, luctus vulputate. Aliquam urna libero, luctus vulputate.",
    initial: "S",
  },
];

export default function ReviewsComponent() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -320, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 320, behavior: "smooth" });
    }
  };

  const renderStars = (rating: number, size: string = "6") => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-${size} w-${size} ${
          i < rating
            ? "fill-yellow-400 text-yellow-400"
            : "fill-gray-200 text-gray-200"
        }`}
      />
    ));
  };

  const GoogleLogo = () => (
    <div className="flex items-center text-4xl font-normal tracking-tight">
      <span className="text-blue-500">G</span>
      <span className="text-red-500">o</span>
      <span className="text-yellow-500">o</span>
      <span className="text-blue-500">g</span>
      <span className="text-green-500">l</span>
      <span className="text-red-500">e</span>
    </div>
  );

  const GoogleIcon = () => (
    <div className="flex items-center justify-center w-8 h-8">
      <svg viewBox="0 0 24 24" className="w-6 h-6">
        <path
          fill="#4285F4"
          d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
        />
        <path
          fill="#34A853"
          d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
        />
        <path
          fill="#FBBC05"
          d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
        />
        <path
          fill="#EA4335"
          d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
        />
      </svg>
    </div>
  );

  return (
    <div className="w-full bg-[#F9FAFB] py-12 px-4 sm:px-6 lg:px-8 mt-16">
      <div className="max-w-7xl mx-auto">
        {/* Title Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            Title
          </h1>
          <p className="text-lg sm:text-xl max-w-6xl mx-auto">
            Aliquam bibendum tempor ante, vel dictum quam porta sit amet
          </p>
        </div>

        {/* Reviews Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Fixed Section */}
          <div className="lg:col-span-4 xl:col-span-3">
            <div className="text-center flex flex-col justify-start items-center gap-4">
              <h2 className="text-3xl sm:text-4xl font-semibold mb-4">
                EXCELLENT
              </h2>
              <div className="flex justify-center lg:justify-center gap-3 mb-3">
                {renderStars(5)}
              </div>
              <p className="text-gray-600 text-lg mb-6">Based on 7 reviews</p>
              <div className="mb-6 flex justify-center items-center scale-150">
                <GoogleLogo />
              </div>
              <div className="inline-flex items-center bg-[#00B060] text-white px-4 py-2 rounded-full text-sm font-medium">
                <InfoIcon className="w-5 h-5 bg-[#00B060] rounded-full mr-2" />
                Verified by Trustindex
              </div>
            </div>
          </div>

          {/* Right Scrollable Reviews Section */}
          <div className="lg:col-span-8 xl:col-span-9">
            <div className="relative">
              {/* Scroll Buttons */}
              <div className="hidden sm:flex absolute -left-4 top-1/2 transform -translate-y-1/2 z-10">
                <Button
                  onClick={scrollLeft}
                  variant="outline"
                  size="sm"
                  className="rounded-full w-10 h-10 p-0 bg-white shadow-lg border-gray-200 hover:bg-gray-50"
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
              </div>
              <div className="hidden sm:flex absolute -right-4 top-1/2 transform -translate-y-1/2 z-10">
                <Button
                  onClick={scrollRight}
                  variant="outline"
                  size="sm"
                  className="rounded-full w-10 h-10 p-0 bg-white shadow-lg border-gray-200 hover:bg-gray-50"
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>

              {/* Scrollable Container */}
              <div
                ref={scrollContainerRef}
                className="flex gap-6 overflow-x-auto scrollbar-hide pb-4"
                style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
              >
                {mockReviews.map((review) => (
                  <Card key={review.id} className="flex-shrink-0 w-80 border-0">
                    <CardContent className="p-6">
                      {/* Review Header */}
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <Avatar className="h-10 w-10 bg-[#3366FF]">
                            <AvatarFallback className="bg-[#3366FF] text-white font-semibold">
                              {review.initial}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-semibold text-gray-900">
                              {review.name}
                            </p>
                            <p className="text-sm text-gray-500">
                              {review.date}
                            </p>
                          </div>
                        </div>
                        <GoogleIcon />
                      </div>

                      {/* Rating */}
                      <div className="w-full flex items-center justify-between gap-2 mb-4">
                        <div className="flex gap-2">
                          {renderStars(review.rating, "4")}
                        </div>
                        <VerifiedIcon className="fill-[#3366FF] stroke-white w-6 h-6" />
                      </div>

                      {/* Review Text */}
                      <p className="text-xs font-meduim mb-4 line-clamp-10">
                        {review.text}
                      </p>

                      {/* Read More Link */}
                      <button className="text-[#6B7280] text-xs font-medium transition-colors">
                        Read More
                      </button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .line-clamp-6 {
          display: -webkit-box;
          -webkit-line-clamp: 6;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
}
