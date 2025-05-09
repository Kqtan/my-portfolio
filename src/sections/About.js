import React from "react";
import { motion } from "framer-motion";
// import ParticlesBackground from "../components/particlesBackground";

const About = () => {
  return (
    <>
      {/* Hero/Landing Section */}
      <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white px-6 pt-0 z-10">
        <motion.div
          className="max-w-5xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-6xl font-bold text-[#61dafb] mb-8 leading-tight">
            Data Science.<br />
            Machine Learning.<br />
            Analytics. <span className="text-white">KQ Tan.</span>
          </h1>
          <p className="text-xl font-inter text-gray-300 mb-8 max-w-3xl">
            <span><strong>Data Scientist by title, problem solver by instinct.</strong></span>
            <br></br>
            <span>
              I turn data into business wins—in Banking/Insurance industry—with a blend of Machine Learning, Strategy, 
              and the occassional adrenaline-fuelled leap.
            </span>
          </p>

          <motion.img
            // src="https://cdn-6.motorsport.com/images/mgl/6D1XbeV0/s800/max-verstappen-red-bull-racing.jpg"
            src="/Self.jpg"
            alt="KQ Tan"
            className="rounded-full mx-auto w-40 h-40 object-cover shadow-lg"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1 }}
          />
          <div className="flex justify-center mt-5">
            <a
              href="/Tan Kai Qin_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#61dafb] text-gray-900 font-semibold px-6 rounded-full hover:bg-white hover:text-black transition duration-300 shadow-lg"
            >
              My Resume
            </a>
          </div>
        </motion.div>
      </div>

      {/* Divider / Scroll Down Cue */}
      <div className="w-full flex justify-center items-center">
        <div className="h-px w-1/2 bg-gray-700 my-10" />
      </div>
    </>
  );
};

export default About;
