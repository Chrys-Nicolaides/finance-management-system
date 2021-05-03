import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Header = () => {
  const { user } = useAuth0();

  return user ? (
    <div className="flex justify-between pt-6 w-full content-end">
      <h3 className="sm:flex hidden justify-start items-end ">
        Account Overview
      </h3>
      <div className="flex sm:justify-end justify-start items-end">
        <div className="ml-3 mt-1.5">
          <h3 className=" text-gray-400 dark:text-gray-400 text-sm sm:text-right text-left pb-2">
            Welcome back,
          </h3>
          <h3 className="sm:text-right text-left items-end mb-0">
            {user ? user.name : ""}!
          </h3>
        </div>
        <img
          src={user ? user.picture : ""}
          alt=""
          className="border-gray-300 border-2 rounded-lg w-16 h-16 ml-4 sm:order-last order-first"
        />
      </div>
    </div>
  ) : (
    ""
  );
};

export default Header;
