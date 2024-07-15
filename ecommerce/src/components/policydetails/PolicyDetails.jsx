import React from "react";
import "./policy.css";
import del from "../../assets/del.png";
import sup from "../../assets/sup.png";
import pay from "../../assets/pay.png";
const PolicyDetails = () => {
  return (
    <div className="policy_details">
      <div className="policies">
        <div className="img_container">
          <img src={del} alt="" />
        </div>
        <div className="policy_txt_container">
          <p className="policy_txt_main">FREE SHIPPING</p>
          <p className="policy_txt_sub">When you Spend $100+</p>
        </div>
      </div>
      <div className="policies">
        <div className="img_container">
          <img src={sup} alt="" />
        </div>
        <div className="policy_txt_container">
          <p className="policy_txt_main">SUPPORT 24/7</p>
          <p className="policy_txt_sub">Ready to help our clients</p>
        </div>
      </div>
      <div className="policies">
        <div className="img_container">
          <img src={pay} alt="" />
        </div>
        <div className="policy_txt_container">
          <p className="policy_txt_main">SECURED PAYMENTS</p>
          <p className="policy_txt_sub">We are officially registered</p>
        </div>
      </div>
    </div>
  );
};

export default PolicyDetails;
