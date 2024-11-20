import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import { useTheme } from "../Theme/ThemeContect";


const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();

  const handleLogout = () => {
    console.log("User logged out");
    navigate("/logout");
  };

  return (
    <nav className={`navbar ${theme}`}>
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <img
            src="https://downloadr2.apkmirror.com/wp-content/uploads/2022/11/37/637eec0155d54.png"
            alt="Baby Panda Logo"
            className="navbar-logo-img"
          />
          <h1 className="navbar-logo-text">Baby Panda World</h1>
        </Link>

        <ul className="navbar-links">
          <li><Link to="/" className="navbar-link">Home</Link></li>
          <li><Link to="/games" className="navbar-link">Games</Link></li>
          <li><Link to="/profile" className="navbar-link">Profile</Link></li>
          <li><Link to="/resources" className="navbar-link">Resources</Link></li>
          <li><Link to="/search" className="navbar-link">Search</Link></li>
          <li><Link to="/notifications" className="navbar-link">Notifications</Link></li>
          <li><Link to="/register" className="navbar-link">Register</Link></li>
          {/* <li><Link to="/settings" className="navbar-link">Settings</Link></li> */}
          <li><Link to="/Dashboard" className="navbar-link"> Dashboard</Link> </li>
        </ul>

        <button onClick={toggleTheme} className="theme-toggle-btn">
          {theme === "light" ? "🌙 Dark" : "🌞 Light"} Mode
        </button>

        <button onClick={handleLogout} className="logout-btn">
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
