import dayjs from "dayjs";
import React from "react";

import Card from "../components/Card";
// import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { IoCardOutline, IoCodeWorking } from "react-icons/io5";
import { currencyHelper } from "../helpers";

// number of days left

const getRemainingDays = () => {
  const date = new Date();
  const time = new Date(date.getTime());
  time.setMonth(date.getMonth() + 1);
  time.setDate(0);
  const days =
    time.getDate() > date.getDate() ? time.getDate() - date.getDate() : 0;

  return days;
};

getRemainingDays();

// number of days in month

const totalDaysInMonth = () => {
  const date = new Date();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  const totalDays = new Date(year, month, 0).getDate();

  return totalDays;
};

totalDaysInMonth();

// Day in Month

const dayOfMonth = () => {
  const date = new Date();

  const currentDay = date.getDate();

  return currentDay;
};

dayOfMonth();

//

const Balance = ({ profile }) => {
  const currency = currencyHelper(profile?.currency);

  return (
    <Card fullWidth={false} additionalClasses={"h-full mx-4 md:mx-0 "}>
      <div className="flex justify-between items-center border-b border-gray-500 pt-9 pl-6 pb-5">
        <h3 className="text-gray-500 dark:text-gray-400 text-sm md:text-lg font-medium">
          Savings Account
        </h3>
      </div>
      <div className="flex flex-col h-full px-6 md:pb-6 pb-8">
        <div className="text-center bg-gradient-to-b from-indigo-400 to-indigo-500 mt-12 rounded-xl pt-8 shadow-md ">
          <div className="flex flex-col items-center mx-6">
            <div className="bg-indigo-500 bg-opacity-80 w-16 h-16 rounded-xl flex justify-center items-center">
              <IoCardOutline className="text-indigo-700 w-10 h-10" />
            </div>
            <h3 className="font-display font-medium text-indigo-50 xl:text-3xl text-lg pt-8">
              Net Balance
            </h3>
            <h3 className="font-display font-semibold text-white xl:text-6xl text-4xl pb-1 pt-6">
              {profile?.currency ? `${currency} ${profile.netBalance}` : ""}
            </h3>
            {/* <h3 className="font-display font-medium text-indigo-200 text-base">
            Net Balance
          </h3> */}
            <h3 className="font-display font-semibold text-white text-5xl py-4 h-[3.75rem]">
              {/* {profile.currency ? `${currency} ${profile.balance}` : ""} */}
            </h3>
          </div>
        </div>

        {/* Progress bar  */}

        <div className="progress-bar w-full pt-10">
          <div>
            <div className="flex justify-between mr-2">
              <label className="text-sm text-gray-500 dark:text-gray-500">
                Days left till pay day
              </label>
              <label className="text-lg text-gray-700 dark:text-gray-400">
                {getRemainingDays()} days!
              </label>
            </div>
            <progress
              min="0"
              max={totalDaysInMonth()}
              value={dayOfMonth()}
              className="w-full rounded-full mt-1.5"
            ></progress>
          </div>
        </div>

        {/* Income vs Expenses summary */}

        {/* <div className="w-full  flex-row gap-x-8 content-end sm:flex hidden">
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
        </div> */}
      </div>
    </Card>
  );
};

export default Balance;
