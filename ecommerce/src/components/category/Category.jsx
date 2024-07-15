import React from "react";
import "./category.css";
import male from "../../assets/male.png";
import female from "../../assets/female.png";
import boy from "../../assets/boys.png";
import dresses from "../../assets/dresses.png";
import sneakers from "../../assets/sneakers.png";
import { Link } from "react-router-dom";
const Category = () => {
  return (
    <div className="categories">
      <div className="category">
        <div className="category_img_container">
          <Link to="/mens" style={{ textDecoration: "none", color: "inherit" }}>
            <img src={male} alt="" className="category_img" />
          </Link>
        </div>
        <div className="category_heading">
          <p>Men</p>
        </div>
      </div>
      <div className="category">
        <div className="category_img_container">
          <Link
            to="/women"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <img src={female} alt="" className="category_img" />
          </Link>
        </div>
        <div className="category_heading">
          <p>Women</p>
        </div>
      </div>
      <div className="category">
        <div className="category_img_container">
          <Link to="/kid" style={{ textDecoration: "none", color: "inherit" }}>
            <img src={boy} alt="" className="category_img" />
          </Link>
        </div>
        <div className="category_heading">
          <p>Kids</p>
        </div>
      </div>
      <div className="category">
        <div className="category_img_container">
          <Link
            to="/dresses"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <img src={dresses} alt="" className="category_img" />
          </Link>
        </div>
        <div className="category_heading">
          <p>Dresses</p>
        </div>
      </div>
      <div className="category">
        <div className="category_img_container">
          <Link
            to="/sneaker"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <img src={sneakers} alt="" className="category_img" />
          </Link>
        </div>
        <div className="category_heading">
          <p>Sneakers</p>
        </div>
      </div>
    </div>
  );
};

export default Category;
