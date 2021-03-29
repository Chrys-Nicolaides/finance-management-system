import React from "react";
import Dashboard from "../components/Dashboard";
import Navbar from "../components/Navbar";

const HomePage = ({ themeChange, darkTheme }) => {
  return (
    <div className="pl-24">
      <Navbar themeChange={themeChange} darkTheme={darkTheme} />
      <Dashboard />
    </div>
  );
};

export default HomePage;
