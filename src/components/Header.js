// Kalian bisa menambahkan CSS di src/components/Header.css
import React from "react";
import "./header.css";
const Header = () => {
  return (
    <div className="header-container">
      <h1 className="header-title">Contact App</h1>
      <h2 className="header-subtitle">your friendly contact app</h2>
    </div>
  );
};

export default Header;
