import React, { useState } from "react";
import LandingPage from "./components/landingPage";
import Navbar from "./components/navbar";
// import Requests from "./components/Requests";

function App() {
  // const [data, setData] = useState([]);

  // dark mode
  const [darkTheme, setDarkTheme] = useState(
    localStorage.darkTheme === "true" ||
      (localStorage.darkTheme === undefined &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
  );

  const themeChange = () => {
    localStorage.darkTheme = !darkTheme;
    setDarkTheme(!darkTheme);
  };

  // rest of code

  return (
    <div
      className={"App min-h-screen fixed inset-0" + (darkTheme ? " dark" : "")}
    >
      <div className="dark:bg-gray-900 dark:text-gray-100 text-gray-800 h-full">
        <Navbar />
        <LandingPage themeChange={themeChange} darkTheme={darkTheme} />
        {/* <Requests /> */}
      </div>
    </div>
  );
}

export default App;
