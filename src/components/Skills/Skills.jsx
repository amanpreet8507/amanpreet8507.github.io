import React from "react";
import "./Skills.scss";
import icon from "../../assets/images/background.jpg";
import SkillsData from "../../assets/data/skills";
import chevron from "../../assets/images/chevron_right-24px.svg";
const Skills = () => {
  return (
    <div className="skills">
      <div className="skills__title">
        <h1>My Skill Set</h1>
        <img src={icon} alt="skills" />
      </div>
      <div className="skills__container">
        {SkillsData.map((skill, index) => {
          return (
            <div className="skills__format">
              <h3>{skill.id}</h3>
              <h2>{skill.area}</h2>
              <p className="skills__format-p">{skill.description}</p>
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
