import React from "react";
import CamProfile from "../images/CamProfile.png";

const Header = () => {
  return (
    <div className="self-center justify-start ml-32 h-14 pt-6">
      <div className="flex">
        <img
          src={CamProfile}
          alt=""
          className="border-gray-300 border-2 rounded-lg w-16 h-16"
        />
        <div className="ml-3 mt-1.5">
          <h3 className=" text-gray-400 dark:text-gray-400 text-xs">
            Welcome back,
          </h3>
          <h3 className="text-lg">Cameron Norman!</h3>
        </div>
      </div>
    </div>
  );
};

export default Header;
