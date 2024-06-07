import React from "react";
import "./Hero.scss";
import hero from "../../assets/images/hero.png";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="hero">
      <img src={hero} alt="hero-image" />
      <h1>
        <span className="hero__span">I'm Amanpreet Kaur,</span> software
        developer based in Canada.
      </h1>
      <p>
        I am a frontend developer from Vancouver, Canada with 2+ years of
        experience
      </p>
      <div className="hero__action">
        <Link to="/contact" className="hero__link">
          <div className="hero__connect">Connect With Me</div>
        </Link>
        <Link to="https://github.com/amanpreet8507/amanpreet8507.github.io-doc-resume.pdf/blob/main/Amanpreet%20Kaur%20Resume.pdf" className="hero__link" target="_blank" rel="noopener noreferrer">
          <div className="hero__resume">My Resume</div>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
