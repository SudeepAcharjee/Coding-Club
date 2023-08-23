import React from "react";
// import styled from "styled-components";
// import { Button } from "./button";
// import { NavLink } from "react-router-dom";
// import { FaDiscord, FaInstagram, FaWhatsapp } from "react-icons/fa";
import "./navbar.css";
const Footer = () => {
  return (
   <>
   <footer>
  <div className="content">
    <div className="top">
      <div className="logo-details">
        <i className="fab fa-slack" />
        <span className="logo_name">CodingClub</span>
      </div>
      <div className="media-icons">
        <a href="#">
          <i className="fab fa-facebook-f" />
        </a>
        <a href="#">
          <i className="fab fa-twitter" />
        </a>
        <a href="#">
          <i className="fab fa-instagram" />
        </a>
        <a href="#">
          <i className="fab fa-linkedin-in" />
        </a>
        <a href="#">
          <i className="fab fa-youtube" />
        </a>
      </div>
    </div>
    <div className="link-boxes">
      <ul className="box">
        <li className="link_name">Company</li>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Contact us</a>
        </li>
        <li>
          <a href="#">About us</a>
        </li>
        <li>
          <a href="#">Get started</a>
        </li>
      </ul>
    
    
      <ul className="box input-box">
        <li className="link_name">Get Free Access</li>
        <li>
          <input type="button" defaultValue="Login" />
        </li>
        <li>
          <input type="button" defaultValue="Sign-in" />
        </li>
      </ul>
    </div>
  </div>
  <div className="bottom-details">
    <div className="bottom_text">
      <span className="copyright_text">
        Copyright © 2021 <a href="#">CodingLab.</a>All rights reserved
      </span>
      <span className="policy_terms">
        <a href="#">Privacy policy</a>
        <a href="#">Terms &amp; condition</a>
      </span>
    </div>
  </div>
</footer>

   </>
  );
};


export default Footer;