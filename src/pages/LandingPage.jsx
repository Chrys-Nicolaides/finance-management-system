import React, { useEffect } from "react";
import { ReactComponent as HeroImage } from "../images/hero-image.svg";
import FetchProfile from "../FetchProfile";
import UpdateProfile from "../UpdateProfile";
import FetchTransactions from "../FetchTransactions";
import LoginButton from "../components/auth-components/LoginButton";
import SignUpButton from "../components/auth-components/SignUpButton";

const LandingPage = () => {
  const getRequests = async () => {
    let putBody = {
      balance: 200,
      currency: "euros",
    };
    // let postBody = {
    //   amount: 1000000,
    //   description: "One million Euros!!!",
    //   day: 6,
    //   recurring: false,
    //   recurringType: "monthly",
    //   currency: "euros",
    // };
    await FetchProfile(1);
    await UpdateProfile(1, putBody);
    await FetchTransactions(1);
    // await SaveTransaction(1, postBody);
  };

  useEffect(() => {
    getRequests();
  }, []);

  return (
    <div className="dark:text-gray-100 text-gray-800">
      <div className="temp-navbar flex bg-gray-100 dark:bg-gray-900 h-16 justify-between">
        <div className="flex">
          <div className="w-4 h-4 rounded-lg bg-indigo-500 justify-start self-center ml-7"></div>
          <h3 className="self-center flex justify-start ml-24">Finanzer</h3>
        </div>
        <div className="self-center mr-12">
          <LoginButton />
        </div>
      </div>
      <div className="grid grid-cols-2 p-14 gap-2">
        <div className="ml-20">
          <h1 className="display-primary dark:text-white">
            Manage your finances on the go.
          </h1>
          <h2 className="display-secondary pb-14 pt-4 dark:text-gray-400 text-gray-500">
            Or something nice like that.
          </h2>
          <div className="flex flex-col">
            <SignUpButton />
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
