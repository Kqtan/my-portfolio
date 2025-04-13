import React from "react";

const ExperienceCard = ({ coverColor, profileImg, role, company, duration, summary, description }) => {
  const isCurrent = duration.toLowerCase().includes("present");

  return (
    <div
      className={`w-[350px] rounded-2xl overflow-hidden shadow-lg flex-shrink-0 transition duration-300 ${
        isCurrent ? "bg-gray-100 text-gray-900" : "bg-gray-800 text-white"
      }`}
    >
      {/* Cover Section */}
      <div
        className={`relative h-24 w-full border-b-0 ${
          isCurrent ? "border-gray-900" : "border-white"
        }`}
        style={{ backgroundColor: coverColor }}
      >
        <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 z-10">
          <img
            src={profileImg}
            alt="profile"
            className={`w-20 h-20 rounded-full border-2 border-gray-800 object-cover`}
          />
        </div>
      </div>

      {/* Card Body */}
      <div className="pt-10 pb-8 px-6 text-center">
        <h3 className="text-xl font-semibold">{role}</h3>
        <p className={`text-sm ${isCurrent ? "text-gray-600" : "text-gray-400"}`}>{company}</p>
        <p className={`text-sm mt-1 ${isCurrent ? "text-gray-700" : "text-gray-500"}`}>{duration}</p>
        <p className={`text-m mt-3 ${isCurrent ? "text-gray-700" : "text-gray-300"}`}>{summary}</p>

        {/* Description List */}
        <ul
          className={`text-sm mt-4 space-y-2 text-left ${
            isCurrent ? "text-gray-800" : "text-gray-300"
          }`}
          style={{ textAlign: "justify" }}
        >
          {description.map((point, idx) => (
            <li key={idx} className="leading-relaxed">
              • {point}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ExperienceCard;
