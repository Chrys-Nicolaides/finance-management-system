import React, { useState } from "react";
import LandingPage from "./pages/LandingPage";
import HomePage from "./pages/HomePage";
import { Switch, Route, BrowserRouter } from "react-router-dom";

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
    <div
      className={
        "App min-h-full fixed inset-0 overflow-y-scroll" +
        (darkTheme ? " dark" : "")
      }
    >
      <BrowserRouter>
        <Switch>
          <Route path="/">
            <div className="bg-gray-100 dark:bg-gray-900  dark:text-gray-100 text-gray-800">
              <LandingPage />
              <HomePage themeChange={themeChange} darkTheme={darkTheme} />
            </div>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
