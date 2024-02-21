import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container" style={{ height: 200 }}>
        <nav className="d-flex justify-content-center border-2">
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Home
          </NavLink>
          <NavLink
            to={"/about"}
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            About
          </NavLink>
          <NavLink
            to={"/products"}
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Products
          </NavLink>
          <NavLink
            to={"/posts"}
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Posts
          </NavLink>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;