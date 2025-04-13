import React, { useRef } from "react";
import ExperienceCard from "../components/ExperienceCard";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Experience = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -320 : 320,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="experience" className="pt-10 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-5xl font-bold text-[#61dafb] mb-10">Experience</h2>

        {/* Carousel Container */}
        <div className="relative">
          {/* Scrollable Cards */}
          <div
            ref={scrollRef}
            className="flex overflow-x-auto gap-6 pb-4 no-scrollbar scroll-smooth justify-center"
          >
            <ExperienceCard
              coverColor="#febe10"
              profileImg="/assets/sun_life_logo.jpg"
              role="Data Scientist"
              company="Sun Life Malaysia Assurance"
              duration="2024 Jan - Present"
              summary="Exposure on ML, Business Logic, and Automations."
              description={[
                "Spearheaded the integration of Anaconda Python into the organisation.",
                "Constructed a ML model to predict client miss payment using Scikit-Learn, with 80% accuracy.",
                "Translated and improved the SAS e-miner model into Python with Scikit-Learn.",
                "Performed multiple analyses and forecasting, significantly, Sales Forecast calculator and Claims ratio analysis.",
                "Worked on Amazon Business Q and Bedrock Gen AI POC using company knowledge or RAG.",
                "Automated reporting pipelines using MSSQL.",
              ]}
            />
            {/* #003946 */}
            <ExperienceCard
              coverColor="#FEBE10"
              profileImg="/assets/sun_life_logo.jpg"
              role="Intern, Strategic Analytics"
              company="Sun Life Malaysia Assurance"
              duration="2022 Oct - 2023 Jan"
              summary="Short internship to get from ZERO to HERO!"
              description={[
                "Developed the Campaign Management module for an internal application using Flask and SQLalchemy.",
                "Led the backend team in A/B testing software logic using the tree-node concept.",
                "Constructed a regression duration predictor model for the data extraction process with 90% accuracy.",
              ]}
            />
          </div>

          {/* Left & Right Buttons */}
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 bg-gray-800 p-2 rounded-full shadow-lg hover:bg-gray-700 transition z-10"
          >
            <ChevronLeft className="text-white" />
          </button>
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 bg-gray-800 p-2 rounded-full shadow-lg hover:bg-gray-700 transition z-10"
          >
            <ChevronRight className="text-white" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Experience;
