import React from "react";
import "./banner.css"; // Import the CSS file for styling
import bannerimg2 from "../../assets/bannerimg2.jpg";
const Banner = () => {
  return (
    <div className="banner" style={{ backgroundImage: `url(${bannerimg2})` }}>
      <div className="banner-content">
        <h1>Welcome to Our Shop!</h1>
        <p>Discover the best deals on your favorite products.</p>
        <button className="shop-now-btn">Shop Now</button>
      </div>
    </div>
  );
};

export default Banner;
