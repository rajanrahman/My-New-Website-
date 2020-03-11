import React, { useContext } from "react";
import { NavLink } from "react-router-dom";

import "./NavLinks.css";

const NavLinks = props => {
  return (
    <ul className="nav-links">
      <li>
        <a href="/#Projects">Projects</a>
      </li>

      <li>
        <a href="/#Contact">Contact</a>
      </li>
    </ul>
  );
};

export default NavLinks;
