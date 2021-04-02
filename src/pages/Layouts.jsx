import React from "react";
import Navbar from "../components/Navbar";

export const DefaultLayout = ({ themeChange, darkTheme, children }) => {
  return (<div className="pl-24 mx-6">
    <Navbar themeChange={themeChange} darkTheme={darkTheme} />
    {children}
  </div>)
}
