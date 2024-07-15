import React from "react";
import prdimg1 from "../../assets/prd_img1.png";
import "./item.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Item = ({ data }) => {
  const navigate = useNavigate();
  const addToCart = async (itemId) => {
    try {
      if (localStorage.getItem("auth-token")) {
        const response = await fetch(
          "https://rajkiranb23.onrender.com/addToCart",
          {
            method: "POST",
            headers: {
              Accept: "application/json",
              "auth-token": localStorage.getItem("auth-token"),
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              itemId: itemId,
            }),
          }
        );

        if (!response.ok) {
          throw new Error("Failed to add item to cart");
        }

        const data = await response.json();
        console.log(data);

        alert("Item successfully added to cart");
      }
    } catch (error) {
      console.error("Error adding item to cart:", error.message);
      // Example: Show an error message to the user
      alert("Failed to add item to cart. Please try again later.");
    }
  };

  return (
    <div className="na_product_card">
      <Link
        to={`/product/${data._id}`}
        className="link"
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <div className="product_img_container">
          <img src={data.image} alt="" />
        </div>
        <div className="product_info_container">
          <div className="name_container">
            <p>{data.name}</p>
          </div>
          <div className="price_container">
            <div className="item_price_new">${data.new_price}</div>
            <div className="item_price_old">${data.old_price}</div>
          </div>
        </div>
      </Link>
      <div className="button_container">
        <button
          className="add_to_cart_button"
          onClick={() => {
            addToCart(data.id);
          }}
        >
          Add to Cart
        </button>
        <button
          className="view_button"
          onClick={() => navigate(`/product/${data._id}`)}
        >
          View
        </button>
      </div>
    </div>
  );
};

export default Item;
