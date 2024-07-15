import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer_container">
      <ul className="footer_list">
        <li className="footer_link">About</li>
        <li className="footer_link">Locations</li>
        <li className="footer_link footer_title">Kloset</li>
        <li className="footer_link">Products</li>
        <li className="footer_link">Contact</li>
      </ul>
    </div>
  );
};

export default Footer;
