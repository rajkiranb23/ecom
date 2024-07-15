import React from "react";
import "./newarrivals.css";
import prdimg1 from "../../assets/prd_img1.png";
import { useState } from "react";
import Item from "../item/Item";
import { useEffect } from "react";
const NewArrivals = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [filter, setFilter] = useState("all");
  const [activeLink, setActiveLink] = useState("all");
  const handleLinkClick = (link) => {
    setActiveLink(link);
    setFilter(link);
  };
  const fetchInfo = async () => {
    try {
      const response = await fetch("http://localhost:5000/allproducts", {
        mode: "cors",
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setAllProducts(data);
      // console.log(data);
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };

  useEffect(() => {
    fetchInfo();
    // console.log(allProducts);
  }, []);

  return (
    <div className="new_arrivals_sec">
      <div className="na_heading_container">
        <p className="na_heading">New Arrivals</p>
      </div>
      <div className="na_dec_container">
        <p>Check out the most promising product by our buyers</p>
      </div>
      <div className="na_filters_container">
        <p
          className={`filter  ${activeLink === "all" ? "active" : ""}`}
          onClick={() => handleLinkClick("all")}
        >
          All
        </p>
        <p
          className={`filter  ${activeLink === "men" ? "active" : ""}`}
          onClick={() => handleLinkClick("men")}
        >
          Men
        </p>
        <p
          className={`filter  ${activeLink === "women" ? "active" : ""}`}
          onClick={() => handleLinkClick("women")}
        >
          Women
        </p>
        <p
          className={`filter  ${activeLink === "boy" ? "active" : ""}`}
          onClick={() => handleLinkClick("boy")}
        >
          Kids
        </p>
      </div>
      <div className="na_arrivals_container">
        {allProducts.map((item, i) => {
          if (filter === "all") {
            return <Item cardImg={prdimg1} key={i} data={item} />;
          }
          if (filter === item.gender) {
            return <Item cardImg={prdimg1} key={i} data={item} />;
          }
        })}
      </div>
    </div>
  );
};

export default NewArrivals;
