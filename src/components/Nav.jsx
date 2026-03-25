import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="navbar">
      <div className="logo">Pentagon</div>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/addstudent">Add</Link>
        <Link to={"/viewstudent"}>View</Link>
      </div>
    </nav>
  );
};

export default Nav;
