import React from "react";
import { motion } from "framer-motion";

const NavBar = () => {
  const navbarItems = (
    <>
      <li className="mx-auto uppercase lg:mr-4">
        <a href="#portfolio ">Projects</a>
      </li>
      <li className="mx-auto lg:mr-4 uppercase">
        <a href="#services">Services</a>
      </li>
      <li>
        <a
          rel="noreferrer"
          href="https://drive.google.com/file/d/1Ea4_6efFUOPZMLzDfgBRbd1sGpREzvP2/view?usp=sharing"
          target="_blank"
          className="btn bg-green-500 text-white"
        >
          Download Resume
        </a>
      </li>
    </>
  );
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      className="navbar bg-base-100 mb-32"
    >
      <div className="navbar-start">
        <p className="normal-case text-xl"></p>
      </div>
      <div className="dropdown flex navbar-end">
        <label tabIndex="0" className="btn btn-ghost lg:hidden self-end">
          <svg
            className="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
        </label>
        <ul
          tabIndex="0"
          className="dropdown-content menu p-2 top-12 shadow bg-base-100"
        >
          {navbarItems}
        </ul>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal p-0">{navbarItems}</ul>
      </div>
    </motion.div>
  );
};

export default NavBar;
