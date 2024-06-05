import React from "react";
import "./Skills.scss";
import icon from "../../assets/images/background.jpg";
import SkillsData from "../../assets/data/skills";
import chevron from "../../assets/images/chevron_right-24px.svg";

const Skills = () => {
  return (
    <div id="skills" className="skills">
      <div className="skills__title">
        <h1>My Skill Set</h1>
        <img src={icon} alt="skills" />
      </div>
      <div className="skills__container">
        {SkillsData.map((service, index) => {
          return (
            <div className="skills__format" key={index}>
              <h3>{service.id}</h3>
              <h2>{service.area}</h2>
              <p className="skills__format-p">{service.description}</p>
              <div className="skills__skills-container">
                {service.skills.map((skill, index) => (
                  <p className="skills__skill" key={index}>
                    {skill}
                  </p>
                ))}
              </div>
              <div className="skills__readmore">
                <p>Read More</p>
                <img src={chevron} alt="skills" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
