import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { HiOutlineLogout } from "react-icons/hi";

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <li className="nav-item sm:hover:w-full hover:w-auto cursor-pointer">
      <div className="nav-link sm:hover:px-0 hover:px-0">
        <button
          className=" focus:outline-none outline-none flex"
          onClick={() =>
            logout({ returnTo: `${window.location.origin}/logout` })
          }
        >
          <HiOutlineLogout className="svg-logo" />
          <span className="link-text">Log out</span>
        </button>
      </div>
    </li>
  );
};

export default LogoutButton;
