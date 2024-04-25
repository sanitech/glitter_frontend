import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbartest = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <ul className="flex justify-between">
        <li>
          <NavLink exact to="/" activeClassName="text-white">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" activeClassName="text-white">
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" activeClassName="text-white">
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbartest;
