import React from "react";
import logoImg from "../../assets/assets/logo.png";
import btnIcon from "../../assets/assets/icons8.png";
import { Link, Links, NavLink } from "react-router";

const NavBar = () => {
  const handleContribute = () => {
    window.open("https://github.com/rprottoy", "_blank", "noopener,noreferrer");
  };

  return (
    <div className="bg-white shadow-sm ">
      <div className="navbar  font-display lg:max-w-7xl lg:mx-auto lg:h-[78px]">
        <div className="navbar-start ">
          <div className="dropdown text-black">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow text-white font-medium"
            >
              <Link to="/">
                <li>
                  <a>Home</a>
                </li>
              </Link>
              <Link to="/allApps">
                <li>
                  <a>Apps</a>
                </li>
              </Link>
              <li>
                <a>Installation</a>
              </li>
            </ul>
          </div>
          <Link to="/">
            <a className="btn btn-ghost text-xl">
              <img className="w-10 " src={logoImg} alt="" />
              <h1 className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent ">
                HERO.IO
              </h1>
            </a>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-black font-medium">
            <Link to="/">
              <li>
                <a>Home</a>
              </li>
            </Link>
            <Link to="/allApps">
              <li>
                <a>Apps</a>
              </li>
            </Link>
            <li>
              <a>Installation</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end ">
          <a
            onClick={handleContribute}
            className="btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] lg:w-[145px] lg:h-[43px] border-none "
          >
            <img src={btnIcon} alt="" />
            <h2 className="text-white font-semibold">Contribute</h2>
          </a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
