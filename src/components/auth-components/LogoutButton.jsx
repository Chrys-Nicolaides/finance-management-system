import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { GoSignOut } from "react-icons/go";

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <li className="nav-item w-full">
      <div className="nav-link">
        <button
          className="nav-link focus:outline-none outline-none w-full"
          onClick={() => logout({ returnTo: "http://localhost:3000/logout" })}
          // onClick={() => logout({ returnTo: window.location.origin })}
        >
          <GoSignOut className="svg-logo" />
          <span className="link-text">Log out</span>
        </button>
      </div>
    </li>
  );
};

export default LogoutButton;
