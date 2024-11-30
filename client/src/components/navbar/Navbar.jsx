import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Userfront from "@userfront/core";
import { AuthContext } from "../../context/AuthContext";
import "./navbar.css";

// Initialize Userfront Core JS
Userfront.init("demo1234");

const Navbar = () => {
  const { user, dispatch } = useContext(AuthContext);

  const handleLogout = () => {
    console.log("Logout button clicked");
    Userfront.logout().then(() => {
      // Dispatch the LOGOUT action to update the AuthContext
      dispatch({ type: "LOGOUT" });
    }).catch((error) => {
      console.error("Logout failed", error);
    });
  };

  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <span className="logo">TravelEase</span>
        </Link>
        {user ? (
          <div className="navItems">
            <span>{user.username}</span>
            <Link to="/">
              <button className="navButton" onClick={handleLogout}>
                Log out
              </button>
            </Link>
          </div>
        ) : (
          <div className="navItems">
            <Link to="/login">
              <button className="navButton">Login</button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
