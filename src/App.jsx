import React, { useState } from "react";
import LandingPage from "./components/landingPage";

function App() {
  const [darkTheme, setDarkTheme] = useState(
    localStorage.darkTheme === "true" ||
      (localStorage.darkTheme === undefined &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
  );
  const themeChange = () => {
    localStorage.darkTheme = !darkTheme;
    setDarkTheme(!darkTheme);
  };

  return (
    <div className={"App" + (darkTheme ? " dark" : "")}>
      <div className="dark:bg-black dark:text-gray-100 text-gray-800">
        <button onClick={() => themeChange()}>
          {darkTheme ? "dark mode" : "light mode"}
        </button>
        <LandingPage />
      </div>
    </div>
  );
}

export default App;
