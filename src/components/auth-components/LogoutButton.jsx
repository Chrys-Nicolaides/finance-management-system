import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { GoSignOut } from "react-icons/go";

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <li className="nav-item sm:hover:w-full hover:w-auto">
      <div className="nav-link sm:hover:px-0 hover:px-0">
        <button
          className="nav-link focus:outline-none outline-none "
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
