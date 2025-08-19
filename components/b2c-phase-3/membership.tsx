"use client";

import React, { useState } from "react";

import  Link  from 'next/link';
interface Plan {
  name: string;
  price: string;
  sessions: string;
  description?: string;
  courses: string;
  image: string;
  features?: string[];
}

const PlanCard = ({ plan }: { plan: Plan }) => (
  <div className="w-full sm:w-1/2 lg:w-1/3 px-4">
    <div className="bg-white rounded-2xl max-h-[800px] h-full w-full space-y-2 shadow-md overflow-hidden">
      <div className="w-full h-[1/2] overflow-hidden rounded-t-2xl">
        <img
          src={plan.image}
          alt={plan.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-2 flex  h-[1/2] flex-col items-center text-center">
        <h3 className="text-xl md:text-2xl  lg:text-3xl font-bold text-black mb-1">
          {plan.name}
        </h3>
        <p className="text-lg md:text-2xl  lg:text-3xl font-medium text-black my-2">
          {plan.price}
        </p>
        <p className="text-black font-normal text-sm sm:text-md mb-2">
          No. of Session: {plan.sessions}
        </p>

        {plan.description && (
          <p className="text-black max-w-[35ch] font-normal text-sm sm:text-md mb-2">
            {plan.description}
          </p>
        )}

        <p className="text-black  sm:text-lg  md:text-xl lg:text-[22px] text-md my-2">
          {plan.courses}
        </p>
        <Link href="/b2c-phase-3/membership/course-selection">
        <button className="bg-[#3366ff] hover:bg-blue-700 text-white font-medium py-2 px-4 my-2 rounded-full w-full">
          Select Membership
        </button></Link>
      </div>
    </div>
  </div>
);

const MembershipPlan = () => {
  const [activeTab, setActiveTab] = useState<"recommended" | "otherPlans">(
    "recommended"
  );

  const plans = {
    recommended: [
      {
        name: "Ramp Up Scores",
        price: "₹000,00",
        sessions: "250 Sessions",
        description:
          "All subject tuitions are included in the pack. Lorem ipsum is simply dummy text of the printing and typesetting industry.",
        courses: "Pick any X Courses out of Y Courses",
        image: "/phase-3/rampup.png",
      },
      {
        name: "Alphaers",
        price: "₹000,00",
        sessions: "400 Sessions",
        description:
          "All subject tuitions are included in the pack. Lorem ipsum is simply dummy text of the printing and typesetting industry.",
        courses: "Pick any X Courses out of Y Courses",
        image: "/phase-3/alphaers.png",
      },
    ],
    otherPlans: [
      {
        name: "Ramp Up Scores",
        price: "₹000,00",
        sessions: "250 Sessions",
        description:
          "All subject tuitions are included in the pack. Lorem ipsum is simply dummy text of the printing and typesetting industry.",
        courses: "Pick any X Courses out of Y Courses",
        image: "/phase-3/rampup.png",
      },
      {
        name: "Alphaers",
        price: "₹000,00",
        sessions: "400 Sessions",
        description:
          "All subject tuitions are included in the pack. Lorem ipsum is simply dummy text of the printing and typesetting industry.",
        courses: "Pick any X Courses out of Y Courses",
        image: "/phase-3/alphaers.png",
      },
      {
        name: "Alphaers",
        price: "₹000,00",
        sessions: "400 Sessions",
        description:
          "All subject tuitions are included in the pack. Lorem ipsum is simply dummy text of the printing and typesetting industry.",
        courses: "Pick any X Courses out of Y Courses",
        image: "/phase-3/alphaers.png",
      },
    ],
  };

  return (
    <div className="container max-w-[96rem] mx-auto px-4 py-12">
      <h2 className="text-2xl md:text-3xl text-black font-semibold text-center mb-8">
        Choose the Membership Plan
      </h2>

      {/* Tabs */}
      <div className="flex justify-center mb-8 space-x-4">
        {(["recommended", "otherPlans"] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-2xl font-medium transition ${
              activeTab === tab ? "bg-[#ff3366] text-white" : "text-[#6b7280]"
            }`}
          >
            {tab === "recommended" ? "Recommended" : "Other Plans"}
          </button>
        ))}
      </div>

      {/* Plan Cards */}
      <div className="flex flex-wrap justify-center sm:justify-start lg:justify-center gap-y-8">
        {plans[activeTab].map((plan, index) => (
          <PlanCard key={index} plan={plan} />
        ))}
      </div>
    </div>
  );
};

export default MembershipPlan;
