import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { RiAdminFill } from "react-icons/ri";
import "./nav.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const Nav = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [login, setLogin] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("auth-token")) {
      setLogin(true);
    }
  }, []);

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };
  const hamClick = () => {
    setIsMobileMenuOpen(false);
  };
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  const handleLogin = () => {
    navigate("/login");
  };
  const handleLogout = () => {
    localStorage.removeItem("auth-token");
    setLogin("login");
    window.location.replace("/");
  };
  return (
    <div className="nav_bar_container">
      <div className="nav_left_section">
        <ul className="nav_left_list">
          <li
            className={`page_links ${
              activeLink === "home" ? "active_page" : ""
            }`}
            onClick={() => handleLinkClick("home")}
          >
            <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
              Shop
            </Link>
          </li>
          <li
            className={`page_links ${
              activeLink === "men" ? "active_page" : ""
            }`}
            onClick={() => handleLinkClick("men")}
          >
            <Link
              to="/men"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              Men
            </Link>
          </li>
          <li
            className={`page_links ${
              activeLink === "women" ? "active_page" : ""
            }`}
            onClick={() => handleLinkClick("women")}
          >
            <Link
              to="/women"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              Women
            </Link>
          </li>
        </ul>
      </div>
      <div className="nav_center_section">
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          <p>Kloset</p>
        </Link>
      </div>
      <div className="nav_right_section">
        <ul className="nav_right_list">
          <li className="right_list_item">
            <Link
              to="https://kloset-admin.vercel.app"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <RiAdminFill />
            </Link>
          </li>
          <li className={`right_list_item ${login ? "red" : ""}`}>
            <div className="dropdown">
              <Link
                to="/login"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <FaUser />
              </Link>
              {login && (
                <ul className="dropdown-menu">
                  <li
                    onClick={() => {
                      handleLogout();
                    }}
                  >
                    Logout
                  </li>
                </ul>
              )}
            </div>
          </li>
          <li className="right_list_item">
            <Link
              to="/cart"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <FaCartShopping />
            </Link>
          </li>
        </ul>
      </div>
      {/* Hamburger Menu */}
      <div className="hamburger_nav">
        <div className="hamburger_toggle" onClick={toggleMobileMenu}>
          <GiHamburgerMenu />
        </div>
        {isMobileMenuOpen && (
          <ul className="ham_main-nav" id="js-menu" onClick={() => hamClick()}>
            <li>
              <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
                Shop
              </Link>
            </li>
            <li>
              <Link
                to="/men"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Men
              </Link>
            </li>
            <li>
              <Link
                to="/women"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Women
              </Link>
            </li>
            <li>
              <Link
                to="/cart"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Cart
              </Link>
            </li>
            <li>
              <Link
                to="/admin"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Admin
              </Link>
            </li>
            <li
              onClick={
                login
                  ? () => {
                      handleLogout();
                    }
                  : () => {
                      handleLogin();
                    }
              }
            >
              <Link style={{ textDecoration: "none", color: "inherit" }}>
                {login ? "Logout" : "Login"}
              </Link>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Nav;
