import React from "react";
// import { motion } from "framer-motion";
import MotionCard from "../components/MotionCard";
import { FaMedal, FaGraduationCap, FaAward } from "react-icons/fa";
import { TbCircleNumber1Filled } from "react-icons/tb";

const Education = () => {
  return (
    <section id="education" className="py-10 px-6 bg-gray-900 text-white">
      <h2 className="text-5xl font-bold text-center text-[#61dafb] mb-12">Education</h2>

      <MotionCard 
        className="relative max-w-3xl mx-auto"
      >
        {/* University Logo */}
        <img
          src="https://upload.wikimedia.org/wikipedia/en/f/f1/Universiti_Tunku_Abdul_Rahman_Logo.jpg"
          alt="University Logo"
          className="w-25 h-20 object-contain absolute top-6 right-6 opacity-80"
        />

        <h3 className="text-2xl font-semibold text-white mb-2 flex items-center gap-2">
          <FaGraduationCap className="text-[#61dafb]" />
          Bachelor of Science (Hons.) Actuarial Science
        </h3>
        <p className="text-lg text-gray-400 mb-4">Universiti Tunku Abdul Rahman, 2020 - 2023</p>

        <div className="text-gray-300 space-y-2">
          <p><span className="font-semibold text-white">CGPA:</span> 3.97 / 4.00</p>
          <p><span className="font-semibold text-white">Awards:</span></p>
          <ul className="list-inside pl-2 space-y-1">
            <li className="flex items-center gap-2">
              <TbCircleNumber1Filled className="text-yellow-500" /> Top Graduate 2024
            </li>
            <li className="flex items-center gap-2">
              <FaMedal className="text-yellow-400" /> President’s List (All Semesters)
            </li>
            <li className="flex items-center gap-2">
              <FaAward className="text-yellow-500" /> Best Final Year Project: Machine Learning for Email Filtering and Categorising
            </li>
          </ul>
        </div>
      </MotionCard>
    </section>
  );
};

export default Education;
