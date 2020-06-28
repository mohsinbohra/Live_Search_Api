import React from "react";
import {NavLink} from 'react-router-dom'
const Navbar = () => {
  return (
    <>
      <nav className="mainMenu">
        <NavLink to="/" activeClassName="menu_link" className="menu_style">Home</NavLink>
        <NavLink to="/about" activeClassName="menu_link" className="menu_style">About</NavLink>
        <NavLink to="/search" activeClassName="menu_link" className="menu_style">Search</NavLink>
        <NavLink to="/contact" activeClassName="menu_link" className="menu_style">Contact</NavLink>


      </nav>
    </>
  );
};
export default Navbar;