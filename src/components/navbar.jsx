import React from "react";
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

const navbar = ({ darkTheme, themeChange }) => {
  return (
    <div>
      <nav className="navbar fixed bg-gray-800 h-full flex-nowrap">
        <ul className="navbar-nav list-none p-0 m-0 flex flex-col items-center text-middle h-full">
          <li className="nav-logo items-center">
            <a
              className="flex items-center h-14 text-gray-400 font-medium m-1.5"
              href="/"
            >
              <IoChevronForwardCircleSharp className="svg-logo" />
              <span className="nav-heading logo-text absolute ml-4">
                Financer
              </span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">
              <RiPieChartBoxFill className="svg-logo" />
              <span className="link-text">Charts</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">
              <RiFileListFill className="svg-logo" />
              <span className="link-text">Transactions</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">
              <GoSignOut className="svg-logo" />
              <span className="link-text">Sign out</span>
            </a>
          </li>
          <li className="nav-item m-auto mb-3">
            <a className="nav-link" href="/" onClick={() => themeChange()}>
              <RiMoonClearFill className="svg-logo" />
              <span className="link-text">
                {darkTheme ? "dark mode" : "light mode"}
              </span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default navbar;
