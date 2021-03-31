import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Auth0ProviderWithHistory from "./auth/auth0ProviderWithHistory";
import "./index.css";
import "./App.css";
import App from "./App";
import LoginButton from "./components/auth-components/LoginButton";
import LogoutButton from "./components/auth-components/LogoutButton";
import SignUpButton from "./components/auth-components/SignUpButton";
import Profile from "./components/auth-components/Profile";

console.log(process.env.REACT_APP_YOUR_DOMAIN);

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Auth0ProviderWithHistory
      // domain={process.env.REACT_APP_YOUR_DOMAIN}
      // clientId={process.env.REACT_APP_YOUR_CLIENT_ID}
      // redirectUri={"http://localhost:3000/dashboard"}
      // audience="https://finanzer.normans.co.za"
      // scope="read:current_user update:current_user_metadata"
      >
        <LoginButton />
        <LogoutButton />
        <SignUpButton />
        <App />

        <Profile />
      </Auth0ProviderWithHistory>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
