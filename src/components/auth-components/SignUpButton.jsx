import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const SignUpButton = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <button
      className="button-primary ml-0 self-start"
      onClick={() =>
        loginWithRedirect({
          screen_hint: "signup",
        })
      }
    >
      Get Started
    </button>
  );
};

export default SignUpButton;
