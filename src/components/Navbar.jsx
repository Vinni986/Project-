import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <nav
      style={{
        backgroundColor: theme === "light" ? "#e9d5d5ff" : "#222",
        color: theme === "light" ? "#000" : "#fff",
        padding: "10px 20px",
      }}
    >
    
      <div>
      
        <ul style={{ display: "flex", gap: "15px", listStyle: "none" }}>

          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
    </div> 
    </nav>
  );
};

export default Navbar;

