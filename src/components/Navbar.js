import React from "react";
import { Link } from "react-router-dom";
import logo from "./4oImLF6k_400x400.jpg";
import "./Navbar.css";
import { useSelector } from "react-redux";

const Navbar = () => {
  const isAuth = useSelector((state) => state.auth.isAuthenticated);
  return (
    <div
      className="nav-bar shadow-sm p-3 mb-5 bg-body rounded"
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        height: "70px",
      }}
    >
      <div className="logo">
        <img src={logo} alt="company" style={{ width: "7%" }}></img>
      </div>
      <div className="nav-item">
        <ul
          style={{
            listStyle: "none",
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <li>
            <Link to="/" style={{ textDecoration: "none", color: "black" }}>
              Services
            </Link>
          </li>
          <li>
            <Link
              to="/projects"
              style={{ textDecoration: "none", color: "black" }}
            >
              Our Work
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              style={{ textDecoration: "none", color: "black" }}
            >
              App
            </Link>
          </li>
          <li>
            <Link
              to="/deals"
              style={{ textDecoration: "none", color: "black" }}
            >
              My Deals
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              style={{ textDecoration: "none", color: "black" }}
            >
              Contact Us
            </Link>
          </li>
          {!isAuth ? (
            <li>
              <Link
                to="/login"
                style={{ textDecoration: "none", color: "black" }}
              >
                Seller Log in
              </Link>
            </li>
          ) : (
            <></>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
