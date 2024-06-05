import React, { useState } from "react";
import my_icon from "../../assets/images/Am.png";
import { Link } from "react-router-dom";
import "./Navbar.scss";
import menu_open from "../../assets/images/menu_open.png";
import menu_close from "../../assets/images/menu_close.png";
import { useRef } from "react";

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = "0";
  };
  const closeMenu = () => {
    menuRef.current.style.right = "-350px";
  };

  return (
    <div className="nav" id="nav">
      <Link to="/">
        <img
          className="nav__icon"
          src={my_icon}
          alt="my icon"
          onClick={() => setMenu("home")}
        />
      </Link>
      <img
        src={menu_open}
        alt="open"
        className="nav__mob-open"
        onClick={openMenu}
      />
      <ul className="nav__menu" ref={menuRef}>
        <img
          src={menu_close}
          alt="close"
          className="nav__mob-close"
          onClick={closeMenu}
        />
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
      <Link className="nav__menu-link" to="/contact">
        <div className="nav__connect" onClick={() => setMenu("")}>
          Connect with me
        </div>
      </Link>
    </div>
  );
};

export default Navbar;
