import React from "react";

const TalkCard = ({ title, summary, postImage, postUrl, date }) => {
  return (
    <div className="bg-gray-800 text-white rounded-2xl p-6 shadow-lg max-w-3xl mx-auto mb-8">
      <h3 className="text-2xl font-semibold mb-2 text-[#61dafb]">{title}</h3>
      <p className="text-sm text-gray-400 mb-2">{date}</p>
      <p className="text-gray-300 mb-4 text-justify">{summary}</p>

      <a href={postUrl} target="_blank" rel="noopener noreferrer">
        <img
          src={postImage}
          alt="LinkedIn post preview"
          className="rounded-lg border border-gray-600 hover:opacity-90 transition"
        />
      </a>
    </div>
  );
};

export default TalkCard;
