"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Tilt from "react-parallax-tilt";

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    image: "/johnProfile.png",
    rating: 5,
    text: "Praesent non enim sed velit malesuada consectetur id a justo. Fusce quis eros sit amet enim laoreet dignissim.",
  },
  {
    id: 2,
    name: "John Doe",
    image: "/johnProfile.png",
    rating: 4,
    text: "Praesent non enim sed velit malesuada consectetur id a justo. Fusce quis eros sit amet enim laoreet dignissim.",
  },
  {
    id: 3,
    name: "John Doe",
    image: "/johnProfile.png",
    rating: 5,
    text: "Praesent non enim sed velit malesuada consectetur id a justo. Fusce quis eros sit amet enim laoreet dignissim.",
  },
  {
    id: 4,
    name: "John Doe",
    image: "/johnProfile.png",
    rating: 5,
    text: "Praesent non enim sed velit malesuada consectetur id a justo. Fusce quis eros sit amet enim laoreet dignissim.",
  },
  {
    id: 5,
    name: "John Doe",
    image: "/johnProfile.png",
    rating: 4,
    text: "Praesent non enim sed velit malesuada consectetur id a justo. Fusce quis eros sit amet enim laoreet dignissim.",
  },
];

export default function Testimonials() {
  const [cardsToShow, setCardsToShow] = useState(3);
  const [currentIndex, setCurrentIndex] = useState(cardsToShow);
  const [isAnimating, setIsAnimating] = useState(false);

  const totalCards = testimonials.length;
  const duplicatedSlides = [
    ...testimonials.slice(-cardsToShow),
    ...testimonials,
    ...testimonials.slice(0, cardsToShow),
  ];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setCardsToShow(1);
      } else if (window.innerWidth < 1024) {
        setCardsToShow(2);
      } else {
        setCardsToShow(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    // Reset index to avoid out-of-bounds when screen size changes
    setCurrentIndex(cardsToShow);
  }, [cardsToShow]);

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => prev + 1);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => prev - 1);
  };

  const handleTransitionEnd = () => {
    setIsAnimating(false);
    if (currentIndex >= totalCards + cardsToShow) {
      setCurrentIndex(cardsToShow);
    } else if (currentIndex === 0) {
      setCurrentIndex(totalCards);
    }
  };

  return (
    <div className="relative w-full overflow-hidden px-4 py-16 md:px-8 lg:px-16">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-12 flex flex-col items-start justify-between md:flex-row md:items-center">
          <div>
            <h2 className="mb-2 text-4xl font-semibold text-gray-900 md:text-5xl">
              Testimonials
            </h2>
            <p className="text-xl font-medium tracking-wider text-gray-700">
              Don&apos;t just take our word for it.
            </p>
          </div>
          <div className="mt-4 flex space-x-2 md:mt-0">
            <button
              onClick={prevSlide}
              className="cursor-pointer rounded-full bg-blue-100 p-2 text-blue-500 transition-colors hover:bg-blue-200"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5 text-black" />
            </button>
            <button
              onClick={nextSlide}
              className="cursor-pointer rounded-full bg-blue-100 p-2 text-blue-500 transition-colors hover:bg-blue-200"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5 text-black" />
            </button>
          </div>
        </div>

        {/* Main content */}
        <div className="flex flex-col md:flex-row">
          {/* Rating Section */}
          <div className="mb-8 flex flex-col items-center md:mb-0 md:w-1/4 md:items-start">
            <div className="mb-2 text-xl font-bold text-gray-900">
              EXCELLENT
            </div>
            <br />
            <div className="mb-2 text-sm text-gray-600">Based on 7 reviews</div>
            <Image
              src="/Google_logo.png"
              alt="Google"
              width={80}
              height={30}
              className="h-6 w-auto object-contain"
            />
          </div>

          {/* Slider Section */}
          <div className="overflow-hidden md:w-3/4">
            <div
              className={`flex transition-transform duration-500 ease-in-out`}
              onTransitionEnd={handleTransitionEnd}
              style={{
                transform: `translateX(-${(100 / duplicatedSlides.length) * currentIndex}%)`,
                width: `${(duplicatedSlides.length / cardsToShow) * 100}%`,
              }}
            >
              {duplicatedSlides.map((testimonial, index) => (
                <div
                  key={index}
                  className="p-4"
                  style={{ width: `${100 / duplicatedSlides.length}%` }}
                >
                  <Tilt
                    className="parallax-effect-glare-scale"
                    perspective={500}
                    glareEnable={false}
                    glareMaxOpacity={0.45}
                    tiltAngleYInitial={60}
                    scale={1.02}
                  >
                    <div className="h-full rounded-3xl bg-[#8FDDAA] p-6">
                      <div className="mb-4 flex items-center">
                        <div className="relative mr-3 h-12 w-12 overflow-hidden rounded-full border-3 border-[#F9326F]">
                          <Image
                            src={testimonial.image || "/placeholder.svg"}
                            alt={testimonial.name}
                            width={48}
                            height={48}
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <h3 className="font-medium text-black">
                            {testimonial.name}
                          </h3>
                        </div>
                      </div>
                      <p className="text-black">{testimonial.text}</p>
                    </div>
                  </Tilt>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
