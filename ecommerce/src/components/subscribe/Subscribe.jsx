import React from "react";
import "./style.css";
const Subscribe = () => {
  return (
    <div className="subscribe">
      <p className="subs_heading">Subscribe to the News Letter !</p>
      <div className="input_box_container">
        <input
          type="text"
          name=""
          id=""
          className="input_box"
          placeholder="yourname@email.com"
        />
        <button className="subs_btn">Subscribe!</button>
      </div>
    </div>
  );
};

export default Subscribe;
