import React from "react";
import "./navbar.css";
import { IoCartOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { FaSearch } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="navbar_container">
      <div className="logo_container">Kloset</div>
      <div className="nav_menu_container">
        <ul className="nav_menu_list1">
          <li>Shop</li>
          <li>Men</li>
          <li>Women</li>
        </ul>
      </div>
      <div className="search_bar_container">
        <input type="text" placeholder="Search..." className="search_bar" />
        <button type="submit" class="searchButton">
          <FaSearch />
        </button>
      </div>
      <div className="other_nav_links">
        <ul className="nav_menu_list2">
          <li className="list2_item">
            <CiHeart />
          </li>
          <li className="list2_item">
            <CiUser />
          </li>
          <li className="list2_item">
            <IoCartOutline />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
