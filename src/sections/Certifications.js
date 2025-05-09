import React from "react";
import Carousel from "../components/Carousel";

const AwardCard = ({ title, issuer, date, badge, link }) => (
  <div className="bg-gray-800 text-white rounded-xl p-6 shadow-lg text-center">
    {badge && <img src={badge} alt={title} className="w-20 h-20 mx-auto mb-4" />}
    <h3 className="text-xl font-semibold">{title}</h3>
    <p className="text-m text-gray-400">{issuer}</p>
    <p className="text-m text-gray-500 mb-2">{date}</p>
    {link && (
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#61dafb] text-sm hover:underline"
      >
        View Credential
      </a>
    )}
  </div>
);

const certifications = [
  {
    title: "AWS re/Start Graduate",
    issuer: "Amazon Web Services",
    date: "May 2025",
    badge: "aws-re-start-graduate.png",
    link: "https://www.credly.com/badges/9f1e8eef-1ba9-484d-a966-3a6fb4867aec/public_url",
  },
  {
    title: "Introduction to Cloud 101",
    issuer: "Amazon Web Services",
    date: "March 2025",
    badge: "https://images.credly.com/size/340x340/images/8d67bbf4-128b-4141-b5f1-1bc61bbfbaa6/image.png",
    link: "https://www.credly.com/badges/6c03df0c-84a7-4219-9209-17a87d412a9d/public_url",
  },
  {
    title: "JLPT N4",
    issuer: "The Japan Foundation",
    date: "August 2024",
    badge: "https://media.licdn.com/dms/image/v2/C560BAQGhGx8MxIJRxg/company-logo_200_200/company-logo_200_200/0/1630590173065/the_japan_foundation_worldwide_logo?e=1750291200&v=beta&t=bYo7F60EraxuhW51nef8zyHMSOUW2oFEoGQ7JEmcBDg",
  },
  {
    title: "MDT innovations Best Graduate Award",
    issuer: "UTAR",
    date: "March 2024",
    // badge: "https://upload.wikimedia.org/wikipedia/en/f/f1/Universiti_Tunku_Abdul_Rahman_Logo.jpg",
  },
  {
    title: "Introduction to Python Programming",
    issuer: "CloudSwyft",
    date: "February 2022",
    badge: "/assets/Intro_to_Python_badge.png",
    link: "https://www.credential.net/6e7b7019-d2ad-42d9-982c-d047b6766e32#acc.z1x0B8IT/",
  },
  {
    title: "Introduction to Data Science",
    issuer: "CloudSwyft",
    date: "September 2021",
    badge: "/assets/Intro_to_DS_badge.png",
    link: "https://www.credential.net/8951fad4-c47b-4e0c-a987-30d3eb5dceeb#acc.TU7pvbfR",
  },
];

const AwardsCertifications = () => {
  return (
    <section id="certifications" className="py-20 bg-gray-900 text-white">
      <h2 className="text-5xl font-bold text-center text-[#61dafb] mb-10">
        Awards & Certifications
      </h2>

      <div className="w-full max-w-xl mx-auto">
        <Carousel
          className="w-full"
          items={certifications.map((cert, idx) => (
            <AwardCard key={idx} {...cert} />
          ))}
        />
      </div>
    </section>
  );
};

export default AwardsCertifications;
