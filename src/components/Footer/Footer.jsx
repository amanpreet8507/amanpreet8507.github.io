import React from "react";
import "./Footer.scss";
import profileIcon from "../../assets/images/profile_icon.png";
import myIcon from "../../assets/images/Am.png";
import arrowUp from "../../assets/images/upArrow.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__top">
        <div className="footer__top-left">
          <img src={myIcon} alt="my icon" />
          <p>
            I am a frontend developer living in Vancouver, BC, and exploring the
            city.
          </p>
        </div>
        <div className="footer__top-right">
          <div className="footer__email-input">
            <img src={profileIcon} alt="profile icon" />
            <input type="email" placeholder="Enter your email" />
          </div>
          <div className="footer__subscribe">Subscribe</div>
        </div>
      </div>
      <div className="footer__arrow">
        <AnchorLink offset="100" href="#nav">
          <img src={arrowUp} alt="arrow" />
        </AnchorLink>
      </div>
      <hr />
      <div className="footer__bottom">
        <p className="footer__bottom-left">© 2024 Engineered by Amanpreet 👩‍💻</p>
        <div className="footer-bottom-right">
          <p>Email: amanpreet8507@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
