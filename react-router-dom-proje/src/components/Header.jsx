import React from 'react';
import { NavLink } from "react-router-dom";
const Header = () => {
    return (
        <header>
            <div className="container">
                <div className="d-flex justify-content-between align-items-center">
                    <div className="logo">
                        <NavLink to={"/"}>E-Commarce</NavLink>
                    </div>
                    <div className="nav-pills d-flex gap-2">
                        <NavLink
                            to={"/"}
                            className={({ isActive }) =>
                                isActive ? "nav-link active" : "nav-link"
                            }
                        >

                            Home
                        </NavLink>
                        <NavLink
                            to={"/"}
                            className={({ isActive }) =>
                                isActive ? "nav-link active" : "nav-link"
                            }
                        >
                            About
                        </NavLink>
                        <NavLink
                            to={"/about"}
                            className={({ isActive }) =>
                                isActive ? "nav-link active" : "nav-link"
                            }
                        >
                            Products
                        </NavLink>
                        <NavLink
                            to={"/products"}
                            className={({ isActive }) =>
                                isActive ? "nav-link active" : "nav-link"
                            }
                        >
                          Posts
                        </NavLink>
                        <NavLink
                            to={"/posts"}
                            className={({ isActive }) =>
                                isActive ? "nav-link active" : "nav-link"
                            }
                        >

                        </NavLink>
  
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
