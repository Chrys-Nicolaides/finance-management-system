import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import LogoutButton from "../components/auth-components/LogoutButton";
import {
  RiMoonClearFill,
  // RiBarChartBoxFill,
  RiFileListFill,
  RiPieChartBoxFill,
} from "react-icons/ri";
import {
  IoChevronForwardCircleSharp,
  // IoChevronBackCircleSharp,
} from "react-icons/io5";

const Navbar = () => {
  const [darkTheme, setDarkTheme] = useState(
    localStorage.darkTheme === "true" ||
      (localStorage.darkTheme === undefined &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
  );

  const themeChange = (darkTheme) => {
    if (darkTheme) {
      document.body.classList.add("dark");
      setDarkTheme(true);
    } else {
      document.body.classList.remove("dark");
      setDarkTheme(false);
    }
  };

  useEffect(() => {
    themeChange();
  }, []);

  return (
    <div>
      <nav className="navbar fixed bg-gray-800 whitespace-nowrap left-0 z-10">
        <ul className="navbar-nav list-none p-0 m-0 flex flex-col items-center text-middle h-full">
          <li className="nav-logo items-center">
            <Link
              className="flex items-center h-14 text-gray-400 font-medium m-1.5"
              to="/dashboard"
            >
              <IoChevronForwardCircleSharp className="svg-logo" />
              <span className="nav-heading absolute ml-4">Financer</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/charts">
              <RiPieChartBoxFill className="svg-logo" />
              <span className="link-text">Charts</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/transactionshistory">
              <RiFileListFill className="svg-logo" />
              <span className="link-text">Transactions</span>
            </Link>
          </li>
          <LogoutButton />

          <li className="nav-item sm:mt-auto mt-0 sm:mb-3 mb-0 sm:hover:w-full hover:w-auto ">
            <button
              className="nav-link sm:w-[244px] w-[auto] sm:hover:w-[240px] hover:w-[auto] outline-none focus:outline-none sm:hover:px-0 hover:px-0"
              onClick={() => themeChange(!darkTheme)}
            >
              <RiMoonClearFill className="svg-logo" />
              <span className="link-text">
                {darkTheme ? "light mode" : "dark mode"}
              </span>
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
