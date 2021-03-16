import React from "react";

const LandingPage = () => {
  return (
    <div className="dark:text-gray-100 text-gray-800">
      <div className="temp-navbar flex bg-gray-300 dark:bg-gray-800 h-14 justify-between">
        <h3 className="self-center flex justify-start ml-7">Financer</h3>
        <div className="self-center">
          <button className="justify-end">Transactions</button>
          <button className="justify-end ml-20">Login</button>
          <button className="justify-end mx-10">Sign up</button>
        </div>
      </div>
      <div className="grid grid-cols-2 p-14 gap-2">
        <div>
          <h1 className="text-6xl">Manage your finances on the go.</h1>
          <h2 className="text-4xl pb-10 pt-4">Or something nice like that.</h2>
          <button>Get started</button>
        </div>
        <div className="border-gray-700 border-2 flex justify-center">
          <h5 className=" self-center">Image goes here</h5>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
