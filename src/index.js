import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./App.css";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";
import LoginButton from "./components/LoginButton";

console.log(process.env.REACT_APP_YOUR_DOMAIN);

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain={process.env.REACT_APP_YOUR_DOMAIN}
      clientId={process.env.REACT_APP_YOUR_CLIENT_ID}
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
