import React from "react";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import Robot from "../Robot1.json";
import "./HeroStyles.css"; // Import the CSS file
import videobutton from "../videobutton.json";

const Hero = () => {
  return (
    <div className="hero">
      <div className="text-container">
        <h1 className="hero-text">Robotics And Automation Center</h1>
        <p className="subtext">A team of tech-loving minds</p>
      </div>
      <div className="content-container">
        <div className="robot">
          <Lottie animationData={Robot} />
        </div>
        <div className="vdobutton">
          {/* Wrap Lottie component in a Link */}
          <Link to="https://youtu.be/UMCdkk1Nf44?si=b4iPMhQXgDItMZdC" target="_blank"  >
            <Lottie animationData={videobutton} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
