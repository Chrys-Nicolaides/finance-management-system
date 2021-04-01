import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./App.css";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain={import.meta.env.REACT_APP_YOUR_DOMAIN}
      clientId={import.meta.env.REACT_APP_YOUR_CLIENT_ID}
      redirectUri={"http://localhost:3000/dashboard"}
      audience="https://finanzer.normans.co.za"
      scope="read:current_user update:current_user_metadata"
    >
      <App />

      {/* <LoginButton /> */}
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById("root")
);