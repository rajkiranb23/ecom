import React, { useState, useEffect } from "react";
import "./productpage.css";
import prdimg1 from "../../assets/prd_img1.png";
import { FaStar } from "react-icons/fa6";
import { MdOutlineArrowRight } from "react-icons/md";
import NewArrivals from "../../components/newarrivals/NewArrivals";
import { useParams } from "react-router-dom";
import ProductDisplay from "../../components/productdisplay/ProductDisplay";

const ProductPage = () => {
  const [product, setProduct] = useState({});
  const { productId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log(productId);
        const response = await fetch(
          `http://localhost:5000/productdata/${productId}`
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error("Failed to fetch product data:", error);
      }
    };
    fetchData();
  }, [productId]);

  return (
    <div className="product_page">
      <div className="breadcrum_container">
        <div className="crum_container">
          <p>shop</p>
          <MdOutlineArrowRight className="arrow" />
        </div>
        <div className="crum_container">
          <p>men</p>
          <MdOutlineArrowRight className="arrow" />
        </div>
        <div className="crum_container">
          <p>jacket</p>
          <MdOutlineArrowRight className="arrow" />
        </div>
      </div>
      <div className="product_display">
        <div className="left_side">
          <div className="main_display_img_container">
            <img src={product.image} alt="" />
          </div>
          <div className="sub_img_container">
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
          </div>
        </div>
        <div className="right_side">
          <div className="product_name_container">
            <p>{product.name}</p>
          </div>
          <div className="prdt_rating_container">
            <FaStar className="star_icon" />
            <FaStar className="star_icon" />
            <FaStar className="star_icon" />
            <FaStar className="star_icon" />
            <FaStar className="star_icon" />
            <FaStar className="star_icon" />
          </div>
          <div className="prdt_decription">
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </p>
          </div>
          <div className="prdt_sizes">
            <h1>Select Size</h1>
            <div className="product_sizes">
              <div className="size">S</div>
              <div className="size">M</div>
              <div className="size">L</div>
              <div className="size">XL</div>
              <div className="size">XXL</div>
            </div>
          </div>
          <div className="prodt_disp_right_prices">
            <div className="old_price">${product.old_price}</div>
            <div className="new_price">${product.new_price}</div>
          </div>
          <button>ADD TO CART</button>
        </div>
      </div>
      <NewArrivals />
    </div>
  );
};

export default ProductPage;
