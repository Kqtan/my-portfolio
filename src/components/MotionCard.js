import React from "react";
import { motion } from "framer-motion";
// relative max-w-3xl mx-auto bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-lg p-8 border border-gray-700 overflow-hidden
const MotionCard = ({ children, className = "" }) => {
    const cardVariants = {
      initial: {},
      hover: {},
    };
  
    const underlineVariants = {
      initial: { width: "0%", opacity: 0 },
      hover: { width: "100%", opacity: 1 },
    };
  
    return (
      <motion.div
        className={`relative bg-gradient-to-br from-gray-800 to-gray-900 text-white rounded-2xl shadow-xl p-6 transition-all duration-300 ease-in-out cursor-pointer overflow-hidden ${className}`}
        initial="initial"
        whileHover="hover"
        variants={cardVariants}
      >
        {children}
  
        {/* Shining underline */}
        <motion.div
          className="absolute bottom-0 left-0 h-1 bg-[#61dafb] shadow-[0_0_8px_#61dafb] rounded-full"
          variants={underlineVariants}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        />
      </motion.div>
    );
  };
  
  export default MotionCard;