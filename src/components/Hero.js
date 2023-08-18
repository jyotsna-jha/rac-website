import React from "react";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import Robot from "../Robot1.json";
import "./HeroStyles.css";
import videobutton from "../videobutton.json";

const Hero = () => {
  return (
    <div className="hero">
      <div className="text-container">
        <h1 className="hero-text">Robotics And Automation Center</h1>
        <p className="subtext">A team of tech loving minds</p>
      </div>
      <div className="vdobutton">
        <Lottie animationData={videobutton}/>
      </div>
      <div className="robot">
        <Lottie animationData={Robot} />
      </div>
    </div>
  );
};

export default Hero;
