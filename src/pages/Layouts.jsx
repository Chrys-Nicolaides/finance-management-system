import React from "react";
import Navbar from "../components/Navbar";

export const DefaultLayout = ({ themeChange, darkTheme, children }) => {
  return (
    <div className="sm:pl-24 pl-0 sm:ml-6 ml-0 sm:pr-12 pr-0 bg-gray-100 dark:bg-gray-900 dark:text-gray-100 text-gray-800">
      <Navbar themeChange={themeChange} darkTheme={darkTheme} />
      {children}
    </div>
  );
};
