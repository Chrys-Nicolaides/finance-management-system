import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import "./App.css";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain={import.meta.env.VITE_YOUR_DOMAIN}
      clientId={import.meta.env.VITE_CLIENT_ID}
      audience={import.meta.env.VITE_AUDIENCE}
      redirectUri={`${window.location.origin}/dashboard`}
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
