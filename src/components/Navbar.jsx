import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import LogoutButton from "../components/auth-components/LogoutButton";
import { RiMoonClearLine } from "react-icons/ri";
import { IoChevronForwardCircleSharp } from "react-icons/io5";
import { HiOutlineChartPie, HiOutlineClipboardList } from "react-icons/hi";

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
      <nav className="navbar fixed bg-indigo-300 dark:bg-gray-800 whitespace-nowrap left-0 z-10">
        <ul className="navbar-nav list-none p-0 m-0 flex flex-col items-center text-middle h-full">
          <li className="nav-logo items-center">
            <Link
              className="flex items-center h-14 text-gray-400 font-medium m-1.5"
              to="/dashboard"
            >
              <IoChevronForwardCircleSharp className="svg-logo " />
              <span className="nav-heading absolute ml-4 text-indigo-800 dark:text-gray-400 text-xl font-semibold">
                Finanzer
              </span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/charts">
              <HiOutlineChartPie className="svg-logo" />
              <span className="link-text">Charts</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/transactionshistory">
              <HiOutlineClipboardList className="svg-logo" />
              <span className="link-text">Transactions</span>
            </Link>
          </li>
          <LogoutButton />

          <li className="nav-item sm:hover:w-full hover:w-auto my-auto mb-0">
            <div className="nav-link sm:hover:px-0 hover:px-0">
              <button
                className="focus:outline-none outline-none flex"
                onClick={() => themeChange(!darkTheme)}
              >
                <RiMoonClearLine className="svg-logo" />
                <span className="link-text">
                  {darkTheme ? "light mode" : "dark mode"}
                </span>
              </button>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
