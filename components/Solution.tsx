"use client";
import React from "react";
import Image from "next/image";

const features = [
  {
    title: "Reminders & Alerts",
    description:
      "Keep track of daily tasks with customizable vocalized reminders for medications, appointments, and more.",
    image: "/reminders.svg",
    step: "01",
  },
  {
    title: "3-Axis Fall Detection",
    description:
      "Real-time monitoring to identify falls, monitor jerks, and analyze sleep patterns to ensure patient safety.",
    image: "/fall-detection.svg",
    step: "02",
  },
  {
    title: "GPS & Geofencing",
    description:
      "Tracking with active heatmaps and geofencing alerts ensures safety for aggressive dementia patients.",
    image: "/gps.svg",
    step: "03",
  },
  {
    title: "MiniCog Activated Activities",
    description:
      "Cognitive-level-based vocal and app-guided tasks to engage and stimulate dementia patients.",
    image: "/activities.svg",
    step: "04",
  },
];

const Solution: React.FC = () => {
  return (
    <section className="w-full bg-gradient-to-br from-white to-gray-100 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-blue-800 mb-4">
          Key Features for Advanced Dementia Care
        </h2>
        <p className="text-center text-gray-700 max-w-2xl mx-auto mb-12">
          Explore the range of tools and technologies MemoTag offers to provide personalized care, safety, and support for dementia patients and their caregivers.
        </p>

        <div className="flex overflow-x-auto space-x-6 snap-x snap-mandatory scrollbar-hide">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[260px] h-[420px] bg-white rounded-3xl shadow-lg p-6 snap-start flex flex-col justify-between border border-blue-200"
            >
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-blue-100 text-blue-800 font-bold rounded-full w-10 h-10 flex items-center justify-center text-sm">
                    {feature.step}
                  </div>
                  <h3 className="text-lg font-semibold text-blue-900">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  {feature.description}
                </p>
              </div>

              <div className="flex justify-between items-end mt-auto">
                {/* <Image
                  src={feature.image}
                  alt={feature.title}
                  width={40}
                  height={40}
                  className="object-contain"
                /> */}
                <button className="text-blue-600 text-sm font-medium hover:underline">
                  Read More →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solution;
