import React, { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";

import ProtectedRoute from "../src/auth/ProtectedRoute";
import { Switch, Route, BrowserRouter } from "react-router-dom";

import { FetchProfileEmail } from "./services/api/Profile";
import Profile from "../src/components/auth-components/Profile";

import LandingPage from "./pages/LandingPage";
import HomePage from "./pages/HomePage";
import TransactionsHistoryPage from "./pages/TransactionsHistoryPage";
import ChartsPage from "./pages/ChartsPage";
import LogoutPage from "./pages/LogoutPage";
import { BadGatewayPage } from "./pages/ErrorPages";

function App() {
  const [darkTheme, setDarkTheme] = useState(
    localStorage.darkTheme === "true" ||
      (localStorage.darkTheme === undefined &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
  );

  useEffect(() => {
    if (darkTheme) {
      document.body.classList.add("dark");
    }
  }, [darkTheme]);

  const themeChange = () => {
    if (darkTheme) {
      document.body.classList.remove("dark");
      localStorage.darkTheme = "false";
      setDarkTheme(false);
    } else {
      document.body.classList.add("dark");
      localStorage.darkTheme = "true";
      setDarkTheme(true);
    }
  };

  const [accessToken, setAccessToken] = useState(undefined);
  const [profile, setProfile] = useState(undefined);
  const [loading, setLoading] = useState(true);

  const { getAccessTokenSilently, user } = useAuth0();

  React.useEffect(() => {
    const getAccessToken = async () => {
      try {
        const tempToken = await getAccessTokenSilently({
          audience: import.meta.env.VITE_AUDIENCE,
          scopes: ["read:profile"],
        });
        setAccessToken(tempToken);
      } catch (e) {
        setLoading(false);
      }
    };
    getAccessToken();
  }, []);

  useEffect(() => {
    const getProfile = async () => {
      const profileResponse = await FetchProfileEmail(user.email, accessToken);
      setProfile(profileResponse);
    };

    if (accessToken) {
      getProfile();
    }
  }, [accessToken]);
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/502" exact component={BadGatewayPage} />
        <Route
          path="/"
          exact
          component={() => (
            <LandingPage accessToken={accessToken} loading={loading} />
          )}
        />
        <Route path="/logout" exact component={LogoutPage} />
        <ProtectedRoute path="/profile" component={Profile} />
        <ProtectedRoute
          path="/dashboard"
          component={() => (
            <HomePage
              themeChange={themeChange}
              darkTheme={darkTheme}
              accessToken={accessToken}
              setAccessToken={setAccessToken}
              profile={profile}
            />
          )}
        />
        <ProtectedRoute
          path="/transactionshistory"
          component={() => (
            <TransactionsHistoryPage
              accessToken={accessToken}
              profile={profile}
              loading={loading}
            />
          )}
        />
        <ProtectedRoute
          path="/charts"
          component={() => <ChartsPage accessToken={accessToken} />}
        />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
