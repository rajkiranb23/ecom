import React from "react";
import "./sidebar.css";
import { Link } from "react-router-dom";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <Link
        to={"/addproduct"}
        style={{ textDecoration: "none" }}
        className="sidebar_item"
      >
        <p>Add Product</p>
      </Link>
      <Link
        to={"/listproduct"}
        style={{ textDecoration: "none" }}
        className="sidebar_item"
      >
        <p>Product List</p>
      </Link>
    </div>
  );
};

export default Sidebar;
