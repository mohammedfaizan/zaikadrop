import React from "react";
import "./Footer.css";
import Logo from "../../assets/zaikadrop-logo.png";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={Logo} alt="" width={192} />
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil
            animi quas veniam minus, dolor facere praesentium officia ipsa odio
            harum assumenda alias natus neque veritatis numquam at ipsum nemo
            vel?
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>Zaikadrop</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>Get In Touch</h2>
          <ul>
            <li>+19-7459 837 974</li>
            <li>contact@zaikadrop.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright 2025 ZaikaDrop - All Rights Reserved
      </p>
    </div>
  );
};

export default Footer;
