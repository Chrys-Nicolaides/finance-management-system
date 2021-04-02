import React, { useState } from "react";
import LandingPage from "./pages/LandingPage";
import HomePage from "./pages/HomePage";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import ProtectedRoute from "../src/auth/ProtectedRoute";
import Profile from "../src/components/auth-components/Profile";
import TransactionsHistoryPage from "./pages/TransactionsHistoryPage";
import ChartsPage from "./pages/ChartsPage";
import LogoutPage from "./pages/LogoutPage"

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
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={LandingPage} />
        <Route path="/logout" exact component={LogoutPage} />
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
    </BrowserRouter>
  );
}

export default App;
