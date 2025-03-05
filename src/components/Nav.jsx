import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/nav.scss";

const Nav = () => {
  const location = useLocation();

  return (
    <nav>
      <ul>
        {[
          { path: "/html", label: "HTML" },
          { path: "/css", label: "CSS" },
          { path: "/javascript", label: "JavaScript" },
          { path: "/react", label: "React" },
          { path: "/sanity", label: "Sanity and headless CMS" },
        ].map(({ path, label }) => (
          <li key={path}>
            <Link to={path} className={location.pathname === path ? "tab active" : "tab"}>
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
