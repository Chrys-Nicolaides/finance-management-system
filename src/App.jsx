import React, { useState } from "react";
// import LandingPage from "./components/landingPage";
import Navbar from "./components/navbar";
import Dashboard from "./components/Dashboard";
import { Switch, Route, BrowserRouter } from "react-router-dom";

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
      className={
        "App min-h-full fixed inset-0 overflow-y-scroll" +
        (darkTheme ? " dark" : "")
      }
    >
      <BrowserRouter>
        <Switch>
          <Route path="/">
            <div className="bg-gray-100 dark:bg-gray-900  dark:text-gray-100 text-gray-800">
              <Navbar themeChange={themeChange} darkTheme={darkTheme} />
              {/* <LandingPage themeChange={themeChange} darkTheme={darkTheme} /> */}
              <Dashboard />
            </div>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
