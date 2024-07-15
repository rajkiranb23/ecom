import React from "react";
import "./offers.css";
import men_offers from "../../assets/men_offers.png";
import women_offers from "../../assets/women_offers.png";
import { Link } from "react-router-dom";
const Offers = () => {
  return (
    <div className="offers_section_container">
      <div className="offers_section">
        <div className="girls_offers">
          <div className="offer_info_container">
            <p className="offer_heading heading_1">Collection</p>
            <p className="offer_heading">For Girls</p>
            <p className="offer_sub">
              Up TO <span>40%</span> Off
            </p>

            <button className="offers_shopnow_btn">
              <Link
                to="/women"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Shop Now
              </Link>
            </button>
          </div>
          <div className="offer_img_container">
            <img src={women_offers} alt="" />
          </div>
        </div>
        <div className="mens_offers">
          <div className="offer_info_container">
            <p className="offer_heading heading_1">Collection</p>
            <p className="offer_heading">For Men</p>
            <p className="offer_sub">
              Up TO <span>30%</span> Off
            </p>
            <button className="offers_shopnow_btn">
              <Link
                to="/men"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Shop Now
              </Link>
            </button>
          </div>
          <div className="offer_img_container">
            <img src={men_offers} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offers;
