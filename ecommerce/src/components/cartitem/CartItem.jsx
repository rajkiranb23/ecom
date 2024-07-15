import React from "react";
import "./cartitem.css";
import { FaCircleMinus } from "react-icons/fa6";
const CartItem = ({ data, quantity }) => {
  const removeFromCart = async (itemId) => {
    try {
      if (localStorage.getItem("auth-token")) {
        const response = await fetch("http://localhost:5000/removefromcart", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "auth-token": localStorage.getItem("auth-token"),
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            itemId: itemId,
          }),
        });

        if (!response.ok) {
          throw new Error("Failed to remove item from cart");
        }

        const data = await response.json();
        console.log(data);

        alert("Item removed from cart successfully");
      }
    } catch (error) {
      console.error("Error removing item from cart:", error.message);

      alert("Failed to remove item from cart. Please try again later.");
    }
  };
  return (
    <div className="cartItem">
      <img src={data.image} alt="" />
      <p>{data.name}</p>
      <p>{data.new_price}</p>
      <p>{quantity}</p>
      <p>{data.new_price * quantity}</p>
      <p>
        <span onClick={() => removeFromCart(data.id)}>
          <FaCircleMinus />
        </span>
      </p>
    </div>
  );
};

export default CartItem;
