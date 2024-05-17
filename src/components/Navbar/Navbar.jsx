import React from "react";
import "./Navbar.scss";
const Navbar = () => {
  return (
    <div className="nav">
    <img src="" alt=""></img>
      <ul className="nav__menu">
        <li>Home</li>
        <li>About Me</li>
        <li>Services</li>
        <li>Portfolio</li>
        <li>Contact</li>
      </ul>
      <div className="nav__connect">Connect with me</div>
    </div>
  );
};

export default Navbar;
