import React from "react";
import "./Navigation.css";

import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div class="navBar">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/profile">Profile</NavLink>
      <NavLink to="/search">Search</NavLink>
    </div>
  );
};

export default Navigation;
