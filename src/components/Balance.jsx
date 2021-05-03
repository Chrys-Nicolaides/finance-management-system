import React from "react";
import Card from "../components/Card";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { IoCardOutline } from "react-icons/io5";
import { currencyHelper } from "../helpers";

const Balance = ({ profile }) => {
  const currency = currencyHelper(profile?.currency);

  return (
    <Card
      fullWidth={false}
      additionalClasses={"h-full mx-4 md:mx-0 p-0 md:p-4"}
    >
      <div className="flex justify-between items-center border-b border-gray-500 pt-9 p-5 pb-5">
        <h3 className="text-gray-500 dark:text-gray-400 text-sm md:text-lg font-medium">
          Savings Account
        </h3>
      </div>
      <div className="flex flex-col place-content-between h-full px-6 md:pb-6 pb-8">
        <div className="text-center bg-gradient-to-b from-indigo-400 to-indigo-500 mt-12 rounded-xl pt-8 shadow-md ">
          <div className="flex flex-col items-center mx-6">
            <div className="bg-indigo-500 bg-opacity-80 w-16 h-16 rounded-xl flex justify-center items-center">
              <IoCardOutline className="text-indigo-700 w-10 h-10" />
            </div>
            <h3 className="font-display font-medium text-indigo-50 md:text-3xl text-xl pt-8">
              Net Balance
            </h3>
            <h3 className="font-display font-semibold text-white md:text-6xl text-5xl pb-1 pt-6">
              {profile?.currency ? `${currency} ${profile.balance}` : ""}
            </h3>
            {/* <h3 className="font-display font-medium text-indigo-200 text-base">
            Net Balance
          </h3> */}
            <h3 className="font-display font-semibold text-white text-5xl py-4 h-[3.75rem]">
              {/* {profile.currency ? `${currency} ${profile.balance}` : ""} */}
            </h3>
          </div>
        </div>
        <div className="w-full  flex-row gap-x-8 content-end sm:flex hidden">
          <div className="flex justify-between p-5 bg-white dark:bg-gray-700 dark:bg-opacity-70 shadow-md rounded-xl w-1/2">
            <div className="flex flex-col items-center w-full">
              <h2 className="text-lg text-gray-500 dark:text-gray-400 font-medium ">
                Income
              </h2>

              <div className=" mt-2 h-14 w-14 bg-teal-400 rounded-md">
                <IoIosArrowUp className="fill-current text-white w-14 h-14" />
              </div>
              <div className="flex items-start justify-start flex-col">
                <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-300 pt-4">
                  € 1500.00
                </h2>
              </div>
            </div>
          </div>
          <div className="flex  justify-between p-5 bg-white dark:bg-gray-700 dark:bg-opacity-70 shadow-md rounded-xl w-1/2">
            <div className="flex flex-col items-center w-full">
              <h2 className="text-lg text-gray-500 dark:text-gray-400 font-medium">
                Expenses
              </h2>

              <div className="mt-2 bg-red-300 w-14 h-14 rounded-md">
                <IoIosArrowDown className="fill-current text-white w-14 h-14" />
              </div>
              <div className="flex items-start justify-start flex-col">
                <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-300 pt-4">
                  - € 1500.00
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default Balance;
