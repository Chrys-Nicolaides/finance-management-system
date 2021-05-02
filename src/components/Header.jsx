import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Header = () => {
  const { user } = useAuth0();

  return user ? (
    <div className="flex justify-between pt-6 w-full content-end">
      <h3 className="flex justify-start items-end">Account Overview</h3>
      <div className="flex justify-end items-end">
        <div className="ml-3 mt-1.5">
          <h3 className=" text-gray-400 dark:text-gray-400 text-sm text-right pb-2">
            Welcome back,
          </h3>
          <h3 className="text-right items-end mb-0">
            {user ? user.name : ""}!
          </h3>
        </div>
        <img
          src={user ? user.picture : ""}
          alt=""
          className="border-gray-300 border-2 rounded-lg w-16 h-16 ml-4"
        />
      </div>
    </div>
  ) : (
    ""
  );
};

export default Header;
