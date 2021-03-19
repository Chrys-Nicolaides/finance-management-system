import React, { useState, useEffect } from "react";
import { ReactComponent as HeroImage } from "../images/hero-image.svg";
import FetchProfile from "../FetchProfile";
import UpdateProfile from "../UpdateProfile";
import FetchTransactions from "../FetchTransactions";
import SaveTransaction from "../SaveTransaction";

const LandingPage = ({ darkTheme, themeChange }) => {
  const [data, setData] = useState([]);

  const getRequests = async (id, body) => {
    // let response = await FetchProfile(1);
    // let response = await UpdateProfile(1, body);
    // let response = await FetchTransactions(1);
    let response = await SaveTransaction(1, body);
    setData(response);
  };

  useEffect(() => {
    getRequests();
  }, []);

  return (
    <div className="dark:text-gray-100 text-gray-800">
      <div className="temp-navbar flex bg-gray-50 dark:bg-gray-900 h-14 justify-between">
        <div className="flex">
          <div className="w-4 h-4 rounded-lg bg-indigo-500 justify-start self-center ml-7"></div>
          <h3 className="font-display self-center flex justify-start ml-24 font-medium">
            Financer
          </h3>
        </div>
        <div className="self-center">
          <button
            className="button-secondary ml-4 p-1.5"
            onClick={() => themeChange()}
          >
            {darkTheme ? "dark mode" : "light mode"}
          </button>
          <button className="button-primary justify-end mx-10">Login</button>
        </div>
      </div>
      <div className="grid grid-cols-2 p-14 gap-2">
        <div className="ml-20">
          <h1 className="display-primary">Manage your finances on the go.</h1>
          <h2 className="display-secondary pb-10 pt-4">
            Or something nice like that.
          </h2>
          <div className="flex flex-col">
            <button className="button-primary ml-0 self-start">
              Get started
            </button>
            <button
              className="button-secondary p-1.5 mt-24 self-start"
              onClick={() => SaveTransaction}
            >
              Save transaction
            </button>
          </div>
        </div>
        <div className="flex justify-center rounded-lg">
          <HeroImage className="h-4/6" />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
