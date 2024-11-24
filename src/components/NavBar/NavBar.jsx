import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";
import { MdFavoriteBorder } from "react-icons/md";

const NavBar = () => {
  const location = useLocation();
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const updateCartCount = () => {
      const savedCartCount = localStorage.getItem("cartCount");
      setCartCount(savedCartCount ? parseInt(savedCartCount) : 0);
    };

    updateCartCount();
    window.addEventListener("storage", updateCartCount);

    return () => {
      window.removeEventListener("storage", updateCartCount);
    };
  }, []);

  useEffect(() => {
    let title;
    switch (location.pathname) {
      case "/":
        title = "Home | Gadget Heaven";
        break;
      case "/statistics":
        title = "Statistics | Gadget Heaven";
        break;
      case "/dashboard/cart":
        title = "Dashboard | Gadget Heaven";
        break;
        case "/about":
          title = "About Us | Gadget Heaven";
          break;
      default:
        title = "Gadget Heaven";
    }
    document.title = title;
  }, [location.pathname]);

  const isHomePage =
    location.pathname === "/" ||
    location.pathname === "/products" ||
    location.pathname === "/computers" ||
    location.pathname === "/phones" ||
    location.pathname === "/smartwatches" ||
    location.pathname === "/chargers" ||
    location.pathname === "/macbooks" ||
    location.pathname === "/powerbanks" ||
    location.pathname === "/accessories";

  const buttonBgClass = isHomePage ? "bg-white text-black" : "text-black";

  return (
    <nav
      className={`navbar pt-7 relative z-10 transition-colors ${
        isHomePage ? "bg-transparent text-white" : " text-black"
      }`}
    >
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className={`menu menu-sm dropdown-content ${
              isHomePage
                ? "bg-[#9538E2] bg-transparent-0"
                : "bg-white bg-transparent-0"
            } rounded-box z-[1] mt-3 w-28 p-5 shadow gap-2`}
          >
            <NavLink to="/">Home</NavLink>
            <NavLink to="/statistics">Statistics</NavLink>
            <NavLink to="/dashboard">Dashboard</NavLink>
            <NavLink to="/about">About Us</NavLink>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">Gadget Heaven</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-10 font-bold">
          <NavLink
            className={({ isActive }) => (isActive ? "underline" : "")}
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? " text-[#9538E2]" : "")}
            to="/statistics"
          >
            Statistics
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? " text-[#9538E2]" : "")}
            to="/dashboard"
          >
            Dashboard
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? " text-[#9538E2]" : "")}
            to="/about"
          >
            About Us
          </NavLink>
        </ul>
      </div>
      <div className="navbar-end gap-4 md:gap-5">
        <button className={`border p-2 ${buttonBgClass} rounded-full relative`}>
          <IoCartOutline className="size-5" />
          {cartCount > 0 && (
            <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
              {cartCount}
            </span>
          )}
        </button>
        <button className={`border p-2 ${buttonBgClass} rounded-full`}>
          <MdFavoriteBorder className="size-5" />
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
