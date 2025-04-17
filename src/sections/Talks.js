import React from "react";
import TalkCard from "../components/TalkCard";
import Carousel from "../components/Carousel";

const items = [
  {
    title: "Actuarial Science Sharing: Talk Series",
    summary: "Gave a talk to the foundation students on Actuarial Science.",
    date: "Jun 2023 – UTAR Sg Long Campus",
    postImage: "/assets/Talk_Screenshot.jpg",
    postUrl: "https://www.linkedin.com/posts/kai-qin-tan_universitytalk-utar-lkcfesdmas-activity-7085869691709116416-2rAU?utm_source=share&utm_medium=member_desktop&rcm=ACoAADQ2rYcBxzHQ6eoHUT8aBlFqx5niY8l0f-Y"
  },
  {
    title: "Bachelor's Degree Thesis",
    summary: "Machine Learning for Email Filtering and Categorising in the University's repository.",
    date: "2023 - UTAR",
    postImage: "/assets/FYP_report.jpg",
    postUrl: "http://eprints.utar.edu.my/6154/"
  },
];

const Talks = () => {
  return (
    <div className="p-8 pt-10 max-w-6xl mx-auto">
      <h2 className="text-5xl font-bold text-[#61dafb] text-center mb-10">Talks & Publications</h2>

      <Carousel className="w-full max-w-2xl mx-auto" items={items.map((item, idx) => (
        <TalkCard key={idx} {...item} />
      ))} />
    </div>
  );
};


export default Talks;
