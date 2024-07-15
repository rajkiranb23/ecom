import React from "react";
import "./shopcategory.css";

import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Item from "../../components/item/Item";
const ShopCategory = ({ image, pageCat }) => {
  const [allProducts, setAllProducts] = useState([]);
  const [filter, setFilter] = useState("");

  const fetchInfo = async () => {
    try {
      const response = await fetch("https://rajkiranb23.onrender.com/allproducts", {
        mode: "cors",
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setAllProducts(data);
      console.log(data);
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };
  useEffect(() => {
    fetchInfo();
    // console.log(allProducts);
  }, []);
  return (
    <div className="category_page_container">
      <div className="banner" style={{ backgroundImage: `url(${image})` }}>
        <div className="banner-content">
          <h1>Welcome to Our Shop!</h1>
          <p>Discover the best deals on your favorite products.</p>
          <button className="shop-now-btn">Shop Now</button>
        </div>
      </div>
      <div className="category_filters_container"></div>
      <div className="category_products_container">
        {allProducts.map((item, i) => {
          if (item.gender === pageCat) {
            return <Item key={i} data={item} />;
          }
        })}
      </div>
    </div>
  );
};

export default ShopCategory;
