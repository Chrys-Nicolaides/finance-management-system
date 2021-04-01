import React from "react";
import { Link } from "react-router-dom";
import LogoutButton from "../components/LogoutButton";
import {
  RiMoonClearFill,
  // RiBarChartBoxFill,
  RiFileListFill,
  RiPieChartBoxFill,
} from "react-icons/ri";
import { GoSignOut } from "react-icons/go";
import {
  IoChevronForwardCircleSharp,
  // IoChevronBackCircleSharp,
} from "react-icons/io5";

const Navbar = ({ themeChange, darkTheme }) => {
  return (
    <div>
      <nav className="navbar fixed bg-gray-800 h-full whitespace-nowrap left-0">
        <ul className="navbar-nav list-none p-0 m-0 flex flex-col items-center text-middle h-full">
          <li className="nav-logo items-center">
            <Link
              className="flex items-center h-14 text-gray-400 font-medium m-1.5"
              to="/"
            >
              <IoChevronForwardCircleSharp className="svg-logo" />
              <span className="nav-heading logo-text absolute ml-4">
                Financer
              </span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/">
              <RiPieChartBoxFill className="svg-logo" />
              <span className="link-text">Charts</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/">
              <RiFileListFill className="svg-logo" />
              <span className="link-text">Transaction history</span>
            </Link>
          </li>
          <li className="nav-item whitespace-nowrap">
            <Link className="nav-link whitespace-nowrap" to="/">
              <GoSignOut className="svg-logo" />
              <LogoutButton className="whitespace-nowrap" to="/" />
            </Link>
          </li>
          <li className="nav-item mt-auto mb-3">
            <Link to="" className="nav-link" onClick={() => themeChange()}>
              <RiMoonClearFill className="svg-logo" />
              <span className="link-text">
                {darkTheme ? "dark mode" : "light mode"}
              </span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;