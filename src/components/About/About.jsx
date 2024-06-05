import React from "react";
import "./About.scss";
import profileImg from "../../assets/images/profileImg.png";
import icon from "../../assets/images/background.jpg";

const About = () => {
  return (
    <div id="about" className="about">
      <div className="about__title">
        <h1>About Me</h1>
        <img src={icon} alt="bg" />
      </div>
      <div className="about__sections">
        <div className="about__left">
          <img className="about__profile-img" src={profileImg} alt="myImage" />
        </div>
        <div className="about__right">
          <div className="about__p">
            <p>
              I am a passionate Frontend Developer with over 2 years of
              experience specializing in crafting dynamica & user-centrice
              web-experiences.
            </p>
            <p>
              I love frontend development and it shines through my work showing
              my enthusiasm I bring to every project.
            </p>
          </div>
          <div className="about__skills">
            <div className="about__skill">
              <p>HTML & CSS</p>
              <hr style={{ width: "90%" }} />
            </div>
            <div className="about__skill">
              <p>React JS</p>
              <hr style={{ width: "80%" }} />
            </div>
            <div className="about__skill">
              <p>JavaScript</p>
              <hr style={{ width: "85%" }} />
            </div>
            <div className="about__skill">
              <p>Angular</p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="about__skill">
              <p>Node JS</p>
              <hr style={{ width: "75%" }} />
            </div>
            <div className="about__skill">
              <p>MySQL</p>
              <hr style={{ width: "45%" }} />
            </div>
          </div>
        </div>
      </div>
      <div className="about__achievements">
        <div className="about__achievement">
          <h1>2+</h1>
          <p>YEARS OF EXPERIRNCE</p>
        </div>
        <hr />
        <div className="about__achievement">
          <h1>9+</h1>
          <p>PROJECTS WORKED ON</p>
        </div>
        <hr />
        <div className="about__achievement">
          <h1>2+</h1>
          <p>COMPANIES WORKED</p>
        </div>
        <hr />
        <div className="about__achievement">
          <h1>8+</h1>
          <p>MONTHS TEACHING</p>
        </div>
        <hr />
      </div>
    </div>
  );
};

export default About;
