import "./Intro.css";
import React from "react";
import IntroImage from "./IntroImage/IntroImage";

function Intro() {
  const items = [
    {
      title: "Web development",
      imageUrl: "web",
      description:
        "We use cutting-edge web development technologies to help our clients fulfill their business goals through functional, reliable solutions.",
    },
    {
      title: "User experience & design",
      imageUrl: "ux",
      description:
        "Our complete web design services will bring your ideas to life and provide you with a sleek, high-performing product that elevates your business.",
    },
    {
      title: "Mobile app development",
      imageUrl: "app",
      description:
        "Our extensive mobile development experience allows us to create custom native and cross-platform iOS and Android mobile solutions for our clients.",
    },
    {
      title: "Blockchain solutions",
      imageUrl: "blockchain",
      description:
        "We conduct market research to determine the optimal blockchain-based solutions to help you grow your company and achieve your business goals.",
    },
  ];

  return (
    <div >
      <IntroImage />
      <div className="center" id="section1">
        <div className="title">
          <div className="dash"></div>
          <p className="case-study-title">What we do</p>
        </div>
        <p className="intro-text">
          We offer a complete range of bespoke design and development services
          to help you turn your ideas into digital masterpieces
        </p>
        <div className="intro-items">
          {items.map((item, index) => (
            <div key={index} className="intro-item">
              <div key={index} className={`${item.imageUrl}-icon`}></div>
              <p className="intro-title">{item.title}</p>
              <p className="intro-description ">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Intro;
