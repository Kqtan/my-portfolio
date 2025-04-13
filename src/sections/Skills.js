import React, { useState } from "react";
import { motion } from "framer-motion";
// import { AnimatePresence } from "framer-motion";
import { FaPython, FaReact, FaAws, FaLinux } from "react-icons/fa";
import { PiMicrosoftExcelLogoBold } from "react-icons/pi";
import { TbFileTypeSql } from "react-icons/tb";
import { SiFlask, SiGoogleanalytics, SiScikitlearn } from "react-icons/si";
// import MotionCard from "../components/MotionCard";

const size = 75;
const skills = [
  {
    name: "Python",
    icon: <FaPython size={size} />,
    description: "Main language. Used for data science, ML, and automation.",
  },
  {
    name: "SQL",
    icon: <TbFileTypeSql size={size}/>,
    description: "SQL to perform data-related operations."
  },
  {
    name: "Excel",
    icon: <PiMicrosoftExcelLogoBold size={size} />,
    description: "Excel and VBA to perform analyses."
  },
  {
    name: "AWS",
    icon: <FaAws size={size} />,
    description: "AWS Re/Start student and worked with Bedrock for GenAI POC project.",
  },
  {
    name: "Analytics",
    icon: <SiGoogleanalytics size={size} />,
    description: "Performed multiple business analyses to deliver outcome for stakeholders.",
  },
  {
    name: "Linux",
    icon: <FaLinux size={size} />,
    description: "Experienced with Linux-based server for Data Science-related setup and configurations.",
  },
  {
    name: "Flask",
    icon: <SiFlask size={size} />,
    description: "Backend web development language used for multiple solutions.",
  },
  {
    name: "Scikit-Learn",
    icon: <SiScikitlearn size={size} />,
    description: "Machine learning library used for Model Engineering.",
  },
  {
    name: "React",
    icon: <FaReact size={size} />,
    description: "Frontend framework used for building modern UIs.",
  },
];

const Skills = () => {
  const [selectedSkill, setSelectedSkill] = useState(null);

  return (
    <div id="skills" className="py-10 px-4 bg-gray-900 text-white text-center">
      <h2 className="text-5xl font-bold text-[#61dafb] mb-10">Areas of Craftsmanship</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            onClick={() => setSelectedSkill(skill)}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            // bg-gradient-to-br from-gray-800 to-gray-900 text-white rounded-2xl shadow-xl p-6
            className={`bg-gray-800 p-4 rounded-2xl shadow-md cursor-pointer transition-colors duration-200 hover:bg-gray-700 flex flex-col items-center justify-center text-white ${
              selectedSkill?.name === skill.name ? "bg-gray-700" : ""
            }`}
          >
            <div className="text-5xl">{skill.icon}</div>

            {selectedSkill?.name === skill.name && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
                className="mt-4 text-center"
              >
                <h3 className="text-lg font-bold">{skill.name}</h3>
                <p className="text-sm text-gray-300 mt-1">{skill.description}</p>
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>
      
      {/* Divider / Scroll Down Cue */}
      {/* <div className="w-full flex justify-center items-center">
        <div className="h-px w-1/2 bg-gray-700 my-10" />
      </div> */}
      {/* <AnimatePresence>
        {selectedSkill && (
          <motion.div
            className="mt-10 max-w-xl mx-auto bg-gray-800 p-6 rounded-xl shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
          >
            <h3 className="text-2xl font-bold text-[#61dafb] mb-2">
              {selectedSkill.name}
            </h3>
            <p className="text-gray-300">{selectedSkill.description}</p>
            <button
              onClick={() => setSelectedSkill(null)}
              className="mt-4 text-sm text-gray-400 hover:text-white"
            >
              Close
            </button>
          </motion.div>
        )}
      </AnimatePresence> */}
    </div>
  );
};

export default Skills;
