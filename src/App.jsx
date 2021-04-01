import React, { useState } from "react";
import LandingPage from "./pages/LandingPage";
import HomePage from "./pages/HomePage";
import { Switch, Route } from "react-router-dom";
import ProtectedRoute from "../src/auth/ProtectedRoute";
import Profile from "../src/components/auth-components/Profile";
import TransactionsHistoryPage from "./pages/TransactionsHistoryPage";
import ChartsPage from "./pages/ChartsPage";

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

  console.log(process.env.REACT_APP_YOUR_DOMAIN);

  return (
    <div
      className={
        "App min-h-full fixed inset-0 overflow-y-scroll" +
        (darkTheme ? " dark" : "")
      }
    >
      <div className="bg-gray-100 dark:bg-gray-900  dark:text-gray-100 text-gray-800 min-h-full">
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route path="/logout" exact component={LandingPage} />
          <ProtectedRoute path="/profile" component={Profile} />
          <ProtectedRoute
            path="/dashboard"
            component={() => (
              <HomePage themeChange={themeChange} darkTheme={darkTheme} />
            )}
          />
          <ProtectedRoute
            path="/transactionshistory"
            component={TransactionsHistoryPage}
          />
          <ProtectedRoute path="/charts" component={ChartsPage} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
