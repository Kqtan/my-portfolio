import { FaEnvelope, FaLinkedin, FaGithub, FaMapMarkerAlt } from "react-icons/fa";
import { HiDocument } from "react-icons/hi2";

const contactItems = [
  {
    icon: <FaEnvelope className="text-xl group-hover:text-gray-900" />,
    label: "kqtan99@gmail.com",
    link: "mailto:kqtan99@gmail.com",
    tooltip: "Email",
  },
  {
    icon: <FaLinkedin className="text-xl group-hover:text-gray-900" />,
    label: "LinkedIn",
    link: "https://www.linkedin.com/in/kai-qin-tan/",
    tooltip: "LinkedIn",
  },
  {
    icon: <FaGithub className="text-xl group-hover:text-gray-900" />,
    label: "Visit Me!",
    link: "https://github.com/Kqtan",
    tooltip: "GitHub",
  },
  {
    icon: <HiDocument className="text-xl group-hover:text-gray-900" />,
    label: "Resume",
    link: "/Tan Kai Qin_Resume.pdf",
    tooltip: "Download Resume",
    download: true,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-10 px-6 bg-gray-900 text-white text-center">
      <h2 className="text-5xl font-bold text-[#61dafb] mb-6">Let's Connect!</h2>
      <p className="text-lg text-gray-300 max-w-xl mx-auto mb-5">
        I'm always open to discussing new Data Science opportunities, or just chatting about data, tech, and finance.
        Feel free to reach out!
      </p>

      {/* Location */}
      <div className="flex text-lg items-center justify-center gap-2 mb-10 text-gray-400">
        <FaMapMarkerAlt className="text-[#61dafb]" />
        <span>Kuala Lumpur, Malaysia</span>
      </div>

      {/* Contact Icons */}
      <div className="flex justify-center gap-6 flex-wrap">
        {contactItems.map((item, index) => (
          <a
            key={index}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            download={item.download || undefined}
            className="group relative"
          >
            <div className="w-14 h-14 flex items-center justify-center rounded-full bg-gray-800 hover:bg-[#61dafb] transition">
              {item.icon}
            </div>
            <span className="absolute bottom-[-28px] left-1/2 transform -translate-x-1/2 text-xs bg-gray-800 px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition text-gray-300">
              {item.label}
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
