import React from "react";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";

const Balance = () => {
  return (
    <div className="flex justify-end w-full -mt-8 pr-6 mb-6">
      <div className="text-center bg-gradient-to-b from-indigo-500 to-indigo-800 w-72 rounded-xl pt-6 shadow-md">
        <h3 className="font-display font-medium text-indigo-200 text-base">
          Current Balance
        </h3>
        <h3 className="font-display font-semibold text-white text-5xl py-4">
          € 3000.00
        </h3>
        <div className="flex justify-between p-5">
          <div className="text-left flex justify-center items-center">
            <div className="mr-2 mt-2 h-6 w-6 bg-green-300 rounded-md">
              <IoIosArrowUp className="fill-current text-white w-6 h-6" />
            </div>
            <div className="text-left flex items-start justify-start flex-col">
              <h2 className="text-xxs text-indigo-200 font-medium">Income</h2>
              <h2 className="text-sm font-semibold text-white">€ 1500.00</h2>
            </div>
          </div>
          <div className="text-left flex justify-center items-center">
            <div className="mr-2 mt-2 bg-red-300 w-6 h-6 rounded-md">
              <IoIosArrowDown className="fill-current text-white w-6 h-6" />
            </div>
            <div className="text-left flex items-start justify-start flex-col">
              <h2 className="text-xxs text-indigo-200 font-medium">Expenses</h2>
              <h2 className="text-sm font-semibold text-white">€ 1500.00</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Balance;
