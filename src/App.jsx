import React, { useState, useEffect } from "react";
import LandingPage from "./components/landingPage";

function App() {
  const [data, setData] = useState([]);
  const [darkTheme, setDarkTheme] = useState(
    localStorage.darkTheme === "true" ||
      (localStorage.darkTheme === undefined &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
  );

  const themeChange = () => {
    localStorage.darkTheme = !darkTheme;
    setDarkTheme(!darkTheme);
  };

  const getTransactions = async () => {
    const response = await fetch("https://finanzer.normans.co.za/transactions");
    const data = await response.json();
    return data;
  };

  useEffect(() => {
    getTransactions().then((data) => setData(data));
  }, []);

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
