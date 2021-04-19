import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Header = () => {
  const { user } = useAuth0();

  return user ? (
    <div className="self-center justify-start  h-14 pt-6">
      <div className="flex">
        <img
          src={user ? user.picture : ""}
          alt=""
          className="border-gray-300 border-2 rounded-lg w-16 h-16"
        />
        <div className="ml-3 mt-1.5">
          <h3 className=" text-gray-400 dark:text-gray-400 text-xs">
            Welcome back,
          </h3>
          <h3 className="text-lg">{user ? user.name : ""}!</h3>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
};

export default Header;
