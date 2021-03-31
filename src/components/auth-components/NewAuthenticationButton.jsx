import React from "react";
import LoginButton from "./login-button";
import SignUpButton from "./SignUpButton-button";
import { useAuth0 } from "@auth0/auth0-react";

const NewAuthenticationButton = () => {
  const { isAuthenticated } = useAuth0();

  return isAuthenticated ? <LoginButton /> : <SignUpButton />;
};

export default NewAuthenticationButton;
