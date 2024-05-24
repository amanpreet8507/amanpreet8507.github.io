import React from "react";
import "./MyWork.scss";
import MyWorkData from "../../assets/data/mywork";
import { Tilt } from "react-tilt";
import chevron from "../../assets/images/chevron_right-24px.svg";
import icon from "../../assets/images/background.jpg";

const defaultOptions = {
  reverse: false,
  max: 35,
  perspective: 1000,
  scale: 1.1,
  speed: 1000,
  transition: true,
  axis: null,
  reset: true,
  easing: "cubic-bezier(.03,.98,.52,.99)",
};

const MyWork = () => {
  return (
    <div className="mywork">
      <div className="mywork__title">
        <h1>My latest work</h1>
        <img src={icon} alt="icon" />
      </div>
      <div className="mywork__container">
        {MyWorkData.map((work, index) => {
          return (
            <Tilt key={index} options={defaultOptions} >
              <img
                className="mywork__img"
                src={work.project_img}
                alt="Project Image"
              />
            </Tilt>
          );
        })}
      </div>
      <div className="mywork__showmore">
        <p>Show More</p>
        <img src={chevron} alt="chevron" />
      </div>
    </div>
  );
};

export default MyWork;
