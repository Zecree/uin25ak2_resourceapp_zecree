import React from "react";
import { Link } from "react-router-dom";
import "../styles/nav.scss";

const Nav = () => {
  return (
    <nav className="nav">
      <div className="nav-left">
        <Link to="/">Team :c</Link>
      </div>
      <div className="nav-right">
        <Link to="/">Hjem</Link>
        <Link to="/marcus1">Marcus 1</Link>
        <Link to="/marcus2">Marcus 2</Link>
        <Link to="/marcus3">Marcus 3</Link>
        <Link to="/marcus4">Marcus 4</Link>
      </div>
    </nav>
  );
};

export default Nav;