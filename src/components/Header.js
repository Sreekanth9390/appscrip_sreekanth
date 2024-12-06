import React, { useState } from "react";
import "./Header.css"; // Assuming you're importing the CSS for styling

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle the menu open or closed
  };

  return (
    <div>
      {/* Header Section */}
      <header style={{
        minWidth:"550px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px 20px",
        background: "#fff",
      }}>
        {/* Left: Menu Icon for Mobile */}
        <span 
          style={{ cursor: "pointer", display: "none" }} 
          onClick={toggleMenu}
          className="menu-icon"
        >
          &#9776; {/* Hamburger Icon */}
        </span>

        {/* Left: Logo */}
        <div style={{ display: "flex", alignItems: "center" }}>
          <img
            src="https://cdn.vectorstock.com/i/1000v/43/44/star-logo-design-vector-15124344.jpg" // Sample PNG image
            alt="Logo"
            style={{ height: "2.5vw", width: "2.5vw", borderRadius:"50%" }}
          />
        </div>

        {/* Center: Title */}
        <h1 style={{ margin: 0, fontSize: "2.5vw", fontWeight: "bold" }}>LOGO</h1>

        {/* Right: Icons */}
        <div style={{ display: "flex", gap: "15px", alignItems: "center", fontSize:"1.5vw"}}>
          <span style={{ cursor: "pointer" }}>🔍</span> {/* Icon 1 */}
          <span style={{ cursor: "pointer" }}>🤍</span> {/* Icon 2 */}
          <span style={{ cursor: "pointer" }}>🛒</span> {/* Icon 3 */}
          <span style={{ cursor: "pointer" }}>👤</span> {/* Icon 4 */}
          {/* Right: Language Dropdown */}
          <span style={{ cursor: "pointer",Size:"2vw" }}>
            <select>
              <option>Eng</option>
              <option>Tel</option>
              <option>Tam</option>
            </select>
          </span> {/* Icon 5 */}
        </div>
      </header>

      {/* Navigation Section */}
      <div
        style={{
          display: "flex",
          minWidth:"550",
          maxWidth:"100%",
          justifyContent: "center",
          padding: "10px 0",
          background: "#fff",
          borderBottom: "1px solid #ddd",
          flexDirection: "column",
          alignItems: "center",
        }}
        className={`nav-section ${isMenuOpen ? "open" : ""}`}
      >
        <ul style={{
          
          display: "flex",
          gap: "50px",
          listStyle: "none",
          padding: 0,
          margin: 0,
          fontSize: "1.2vw",
          fontWeight: "500",
        }}>
          <li style={{ cursor: "pointer" }}>Shop</li>
          <li style={{ cursor: "pointer" }}>Skills</li>
          <li style={{ cursor: "pointer" }}>Stories</li>
          <li style={{ cursor: "pointer" }}>About</li>
          <li style={{ cursor: "pointer" }}>Contact Us</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
