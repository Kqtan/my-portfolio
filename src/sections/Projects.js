// import { a } from "framer-motion/client";
import { TbCircleNumber1Filled } from "react-icons/tb";
import { FaAward } from "react-icons/fa";
import { MdSms } from "react-icons/md";
import { RiStockFill } from "react-icons/ri";

export default function Projects() {
  const projects = [
    {
      title: "F1 Race Prediction",
      description:
        "Developed a model to predict drivers into either Podiums, Points, or the rest. Written in Python and React.js.",
      link: "https://github.com/Kqtan/f1-model-react",
      labels: ["Python", "Flask", "Machine Learning", "React"],
      icon: <TbCircleNumber1Filled className="text-yellow-500" />
    },
    {
      title: "Machine Learning for Email Filtering and Categorising",
      description:
        "Developed a system that includes filtering, categorising, and summarising contents. The models featured both Machine Learning and Deep Learning.",
      link: "https://github.com/yourusername/credit-risk-model",
      labels: ["Python", "Tensorflow", "Deep Learning"],
      icon: <FaAward className="text-yellow-500" />
    },
    {
      title: "SMS Filtering UCI",
      description:
        "A case study on UCI SMS Spam data using Scikit-Learn module, studying on multiple machine learning algorithms.",
      link: "https://github.com/Kqtan/SmsSpamFilteringUCI",
      labels: ["Python", "Scikit-Learn", "Machine Learning"],
      icon: <MdSms className="text-green-600"/>
    },
    {
      title: "TESLA stock GARCH model",
      description:
        "A case study on TSLA using GARCH model and perform one step prediction using R.",
      link: "https://github.com/Kqtan/Tesla-stock-GARCH-model",
      labels: ["R", "Explainability"],
      icon: <RiStockFill className="text-red-600"/>
    },
  ];

  const labelColors = {
    Python: "bg-pythonYellow text-black",
    Flask: "bg-red-600 text-white",
    "Machine Learning": "bg-pythonBlue text-white",
    "Deep Learning": "bg-purple-500 text-white",
    "Tensorflow": "bg-tensorFlowBg text-white",
    "Scikit-Learn": "bg-green-600 text-white",
    Explainability: "bg-purple-400 text-white",
    React: "bg-[#61dafb] text-gray-800",
    R: "bg-blue-300 text-black"
  };

  return (
    <section className="py-20 pb-6 px-6 bg-gray-900 text-white">
      <h2 className="text-5xl font-bold text-center text-[#61dafb] mb-10">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
      {projects.map((project, idx) => (
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
        <div
          key={idx}
          className="bg-gray-900 p-4 rounded-2xl shadow-xl hover:shadow-2xl hover:brightness-110 hover:bg-gray-800 transition"
        >
          {/* Badge */}
          <div className="flex flex-wrap gap-2 mb-2">
            {project.labels.map((label, index) => (
              <span
                key={index}
                className={`text-xs font-semibold px-2 py-1 rounded-full ${
                  labelColors[label] || "bg-[#61dafb] text-gray-900"
                }`}
              >
                {label}
              </span>
            ))}
          </div>

          <h3 className="text-xl font-bold flex items-center">
            {project.icon&& (
              <span className="text-xl mr-2">{project.icon}</span>
            )}
            {project.title}
          </h3>
          <p className="text-sm mt-1 mb-3 text-gray-300">{project.description}</p>
          {/* <a
            href={project.link}
            className="text-[#61dafb] hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Project ↗
          </a> */}
        </div>
        </a>
      ))}

      </div>
      <div className="flex justify-center mt-5">
        <a
          href="https://github.com/Kqtan"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#61dafb] text-gray-900 font-semibold px-6 py-3 rounded-full hover:bg-white hover:text-black transition duration-300 shadow-lg"
        >
          View More on GitHub ↗
        </a>
      </div>
    </section>
  );
}
