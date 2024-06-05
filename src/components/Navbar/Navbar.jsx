import React, { useState } from "react";
import myIcon from "../../assets/images/Am.png";
import { Link } from "react-router-dom";
import "./Navbar.scss";

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  return (
    <div className="nav" id="nav">
      <Link to="/">
        <img src={myIcon} alt="my icon" onClick={() => setMenu("home")} />
      </Link>
      <ul className="nav__menu">
        <li className={menu === "home" ? "nav__menu-li" : ""}>
          <Link className="nav__menu-link" to="/">
            <p onClick={() => setMenu("home")}>Home</p>
          </Link>
        </li>
        <li className={menu === "about" ? "nav__menu-li" : ""}>
          <Link className="nav__menu-link" to="/about">
            <p onClick={() => setMenu("about")}>About Me</p>
          </Link>
        </li>
        <li className={menu === "skills" ? "nav__menu-li" : ""}>
          <Link className="nav__menu-link" to="/skills">
            <p onClick={() => setMenu("skills")}>Skill Set</p>
          </Link>
        </li>
        <li className={menu === "portfolio" ? "nav__menu-li" : ""}>
          <Link className="nav__menu-link" to="/projects">
            <p onClick={() => setMenu("portfolio")}>Portfolio</p>
          </Link>
        </li>
        <li className={menu === "contact" ? "nav__menu-li" : ""}>
          <Link className="nav__menu-link" to="/contact">
            <p onClick={() => setMenu("contact")}>Contact</p>
          </Link>
        </li>
      </ul>
      <Link className="nav__menu-link" to="/contact" >
        <div className="nav__connect" onClick={() => setMenu("")}>Connect with me</div>
      </Link>
    </div>
  );
};

export default Navbar;
