import React, { useEffect, useState } from "react";
import "./cart.css";
import CartItem from "../cartitem/CartItem";
const Cart = () => {
  const [cartdata, setCartdata] = useState({});
  const [cartarray, setarray] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const fetchInfo = async () => {
    try {
      const response = await fetch(
        "https://rajkiranb23.onrender.com/allproducts",
        {
          mode: "cors",
        }
      );

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
  const fetchCart = async () => {
    try {
      if (localStorage.getItem("auth-token")) {
        fetch("https://rajkiranb23.onrender.com/getCartData", {
          method: "GET",
          headers: {
            Accept: "application/json",
            "auth-token": localStorage.getItem("auth-token"),
            "Content-Type": "application/json",
          },
        })
          .then((response) => response.json())
          .then((data) => setarray(Object.entries(data)));
      }
    } catch (error) {
      console.error("Error fetching cart data:", error);
    }
  };
  useEffect(() => {
    fetchInfo();
    fetchCart();
    console.log(allProducts);
  }, []);

  return (
    <div className="cartItems">
      <div className="cart_item_format_main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      {cartarray.map(([key, value]) => {
        if (value > 0) {
          const product = allProducts.find((item) => item.id == key);
          if (product) {
            return <CartItem data={product} quantity={value} />;
          }
        }
        return null;
      })}
      <hr />
    </div>
  );
};

export default Cart;
