import React, { useEffect } from "react";
import Navbar from "../components/Navbar";

export const DefaultLayout = ({ themeChange, darkTheme, children }) => {
  return (
    <div className="pl-24 ml-6 pr-6 bg-gray-100 dark:bg-gray-900 dark:text-gray-100 text-gray-800">
      <Navbar themeChange={themeChange} darkTheme={darkTheme} />
      {children}
    </div>
  );
};
