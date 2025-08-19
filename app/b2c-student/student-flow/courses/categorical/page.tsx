"use client";
import StudentWrapper from "@/components/student-wrapper";
import Image from "next/image";
import FooterNew from "@/components/footer3";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, ChevronDown } from "lucide-react";
import { useState } from "react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import ReviewsComponent from "@/components/student/courses/review";
import Footer from "@/components/layout/Footer";
import { useRouter } from "next/navigation";
import CategoryTabs from "./CategoricalTab";

const features = [
  {
    icon: "/student/courses/categorical/feature_icon.png",
    title: "Title",
    description:
      "Pellentesque ac sapien quis ipsum faucibus ullamcorper sed eu enim. Mauris id ornare metus.",
  },
  {
    icon: "/student/courses/categorical/feature_icon.png",
    title: "Title",
    description:
      "Pellentesque ac sapien quis ipsum faucibus ullamcorper sed eu enim. Mauris id ornare metus.",
  },
  {
    icon: "/student/courses/categorical/feature_icon.png",
    title: "Title",
    description:
      "Pellentesque ac sapien quis ipsum faucibus ullamcorper sed eu enim. Mauris id ornare metus.",
  },
  {
    icon: "/student/courses/categorical/feature_icon.png",
    title: "Title",
    description:
      "Pellentesque ac sapien quis ipsum faucibus ullamcorper sed eu enim. Mauris id ornare metus.",
  },
  {
    icon: "/student/courses/categorical/feature_icon.png",
    title: "Title",
    description:
      "Pellentesque ac sapien quis ipsum faucibus ullamcorper sed eu enim. Mauris id ornare metus.",
  },
  {
    icon: "/student/courses/categorical/feature_icon.png",
    title: "Title",
    description:
      "Pellentesque ac sapien quis ipsum faucibus ullamcorper sed eu enim. Mauris id ornare metus.",
  },
];

const benefits = ["Benefit", "Benefit", "Benefit", "Benefit"];

const faqItems = [
  { question: "Question 1", answer: "Answer to question 1 goes here." },
  { question: "Question 1", answer: "Answer to question 1 goes here." },
  { question: "Question 1", answer: "Answer to question 1 goes here." },
  { question: "Question 1", answer: "Answer to question 1 goes here." },
  { question: "Question 1", answer: "Answer to question 1 goes here." },
  { question: "Question 1", answer: "Answer to question 1 goes here." },
  { question: "Question 1", answer: "Answer to question 1 goes here." },
  { question: "Question 1", answer: "Answer to question 1 goes here." },
];

export default function CategoricalCoursePage() {
  const [openFaqItems, setOpenFaqItems] = useState<number[]>([]);
const router = useRouter();
  const toggleFaqItem = (index: number) => {
    setOpenFaqItems((prev) =>
      prev.includes(index)
        ? prev.filter((item) => item !== index)
        : [...prev, index]
    );
  };

  return (
    <StudentWrapper>
      <main className="min-h-[calc(100vh-80px)]">
        <CategoryTabs />
        <div className="w-full">
          {/* Hero Section */}
          <section className="relative h-full overflow-hidden">
            {/* Background Pattern */}
            <div
              className="absolute inset-0 bg-center bg-repeat z-0"
              style={{
                backgroundImage: "url('/background6.png')",
                backgroundSize: "cover",
                filter:
                  "grayscale(10%) brightness(1.1) blur(0.5px) opacity(0.5)",
                opacity: 0.3,
              }}
            ></div>

            {/* Main content */}
            <div className="w-full max-w-7xl mx-auto p-4 md:p-6 lg:p-16 md:p-12 flex flex-col md:flex-row items-center justify-between h-full gap-16">
              {/* Left Content */}
              <div className="w-full md:w-[55%] z-10 gap-y-10 flex flex-col justify-center h-full">
                <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold leading-tight">
                  Title
                </h1>

                <p className="text-sm md:text-md lg:text-[15px] xl:text-lg font-medium">
                  Aliquam bibendum tempor ante, vel dictum quam porta sit amet.
                  Aliquam erat volutpat. Aenean elit ex, varius quis sapien
                  vitae, facilisis scelerisque purus. Fusce a nunc cursus,
                  posuere est at, vestibulum nisi. In hac habitasse platea
                  dictumst.
                </p>

                <Button className="px-6 py-4 w-fit bg-[#FFCC00] hover:bg-[#E6B800] text-black rounded-full cursor-pointer">
                  Get Started
                </Button>
              </div>

              {/* Right Image */}
              <div className="w-full md:w-[45%] flex justify-center items-center z-10 h-full">
                <div className="relative aspect-square max-w-[600px] w-full">
                  <Image
                    src="/student/courses/categorical/dbbac704ba16fcaa70549dc7cc2a1303ccb2e2dd.png"
                    alt="Students learning with robot"
                    className="rounded-full object-cover"
                    fill
                    priority
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-center text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                Title
              </h2>
              <p className="text-center text-blck mb-12 max-w-6xl mx-auto text-lg">
                Pellentesque non augue at nulla lobortis elementum. Mauris non
                quam nunc. Praesent ligula ultricies odio. Nam lorem tortor,
                vehicula quis ultricies nulla. Proin lorem lorem, facilisis sed
                hendrerit non, imperdiet at augue. Integer ut elit facilisis
                ante pellentesque pulvinar et sit amet ligula.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {features.map((feature, index) => (
                  <Card
                    key={index}
                    className="text-center p-6 rounded-3xl border border-[#E5E7EB] bg-[#F9FAFB]"
                  >
                    <CardContent className="pt-6">
                      <div className="flex items-center justify-center mx-auto mb-4">
                        <img
                          src={feature.icon}
                          className="w-16 h-16 rounded-full"
                          alt="feature icon"
                        ></img>
                      </div>
                      <h3 className="text-xl font-semibold mb-3">
                        {feature.title}
                      </h3>
                      <p className="text-black ">{feature.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Benefits Section */}
          <section className="py-16 bg-[#F9FAFB]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold leading-tight mb-8">
                Benefits
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-8">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-[#8DD9B3] rounded-full flex items-center justify-center">
                        <Check className="h-4 w-4 text-white" />
                      </div>
                      <span className="text-lg text-[#8DD9B3]">{benefit}</span>
                    </div>
                  ))}
                </div>
                <div className="flex justify-center">
                  <div className="w-80 h-80 rounded-full overflow-hidden">
                    <img
                      src="/student/courses/categorical/0eee57832b290f8e7b0be7f055efd660b571b66e.png"
                      alt="Parent and child learning"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <div className="p-8">
            <section className="max-w-7xl mx-auto py-12 bg-[#3366FF] rounded-3xl">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_0.5fr] gap-4 items-center content-center">
                  <div>
                    <h2 className="text-2xl lg:text-3xl font-medium text-white mb-6">
                      Start Excelling Today Join Our Homework Heroes!
                    </h2>
                    <Button 
                    
                      onClick={() => router.push("/b2c-student/student-flow/courses/detail")} 
                    className="px-6 py-4 w-fit bg-[#FFCC00] hover:bg-[#E6B800] text-white rounded-full cursor-pointer">
                      Enroll Now
                    </Button>
                  </div>
                  <div className="flex justify-end">
                    <div className="relative">
                      <img
                        src="/student/courses/categorical/9013772eb7bda128ee0f545b88c39db0159ac954.png"
                        alt="Learning illustration"
                        className="w-full max-w-md scale-[0.8]"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Overlaying Cards Section */}
          <div className="z-10 p-4 md:p-6 lg:p-10">
            <div className="max-w-7xl mx-auto w-full">
              <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.25fr] gap-12 items-center">
                {/* Left Side - Content */}
                <div className="space-y-8 mx-auto lg:mx-0">
                  <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                    Title
                  </h1>

                  <p className="text-lg text-gray-600 leading-relaxed">
                    Pellentesque nec augue at nulla lobortis elementum. Mauris
                    non quam sem. Phasellus eget ultricies nulla. Proin lacus
                    tortor, facilisis vel hendrerit non, imperdiet at augue.
                    Integer ut odio facilisis nibh pellentesque pulvinar at sit
                    amet ligula.
                  </p>
                </div>

                {/* Right Side - Stacked Cards */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 overflow-hidden">
                  <img
                    src="/student/courses/categorical/Frame 1000008910.png"
                    alt="marketing image"
                    className="w-96"
                  />
                  <img
                    src="/student/courses/categorical/Frame 1000008911.png"
                    alt="marketing image"
                    className="w-96"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <section className="pt-16">
            <div className="max-w-7xl mx-auto px-4 lg:px-8 space-y-8">
              <h2 className="text-left text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold leading-tight">
                FAQ
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {faqItems.map((item, index) => (
                  <Card
                    key={index}
                    className="overflow-hidden border border-[#E5E7EB] rounded-xl bg-[#F9FAFB]"
                  >
                    <Collapsible
                      open={openFaqItems.includes(index)}
                      onOpenChange={() => toggleFaqItem(index)}
                    >
                      <CollapsibleTrigger className="w-full p-4 text-left flex items-center justify-between hover:bg-gray-50">
                        <span className="font-medium">{item.question}</span>
                        <ChevronDown
                          className={`h-4 w-4 transition-transform ${
                            openFaqItems.includes(index) ? "rotate-180" : ""
                          }`}
                        />
                      </CollapsibleTrigger>
                      <CollapsibleContent className="px-4 pb-4">
                        <p className="text-gray-600">{item.answer}</p>
                      </CollapsibleContent>
                    </Collapsible>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          <ReviewsComponent />
        </div>

        {/* footer */}
        <Footer />
      </main>
    </StudentWrapper>
  );
}
