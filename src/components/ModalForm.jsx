import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import Card from "./Card";

const ModalForm = ({ setShowModal }) => {
  const [currency, setCurrency] = useState("");
  const [isRecurring, setIsRecurring] = useState(false);

  const handleCurrency = (input) => {
    switch (input) {
      case "ZAR":
        return "R";
      case "USD":
        return "$";
      case "EUR":
      default:
        return "€";
    }
  };

  return (
    <div className="fixed inset-0 z-10 bg-black bg-opacity-50 flex items-center justify-center">
      <Card fullWidth={false} additionalClasses={" px-14"}>
        <form className="flex flex-col pb-6">
          <div className="flex justify-between pb-6">
            <h3>Add new transaction</h3>

            <IoClose
              onClick={() => setShowModal(false)}
              strokeWidth={6}
              className="cursor-pointer stroke-current stroke-4 stroke text-indigo-500 hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-200 "
            />
          </div>
          <label className="">Transaction description</label>
          <input className="form-input mb-6" type="text" />

          <div className="flex flex-col w-full">
            <label>Amount</label>
            <div className="mt-1 relative rounded-md bg-transparent w-full">
              <div className=" absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <span className=" text-gray-500 dark:text-gray-400 text-md dark:bg-transparent items-center self-center">
                  {handleCurrency(currency)}
                </span>
              </div>
              <input
                type="number"
                name="price"
                id="price"
                className="pl-6 w-full text-sm items-center border-2 border-gray-300  hover:border-indigo-400 dark:border-gray-600  dark:hover:border-indigo-400 focus:border-indigo-500 dark:focus:border-indigo-500 rounded-md bg-transparent dark:bg-transparent  outline-none focus:outline-none focus:ring-1 focus:ring-indigo-500 placeholder-gray-400 dark:placeholder-gray-600"
                placeholder="0.00"
              />
              <div className="absolute inset-y-0 right-0 flex justify-end items-center">
                <select
                  id="currency"
                  name="currency"
                  onClick={(event) => setCurrency(event.target.value)}
                  className="focus:ring-indigo-400 focus:border-indigo-400 focus:border-2 focus:outline-none h-9 pr-8 border-transparent bg-transparent text-gray-500 dark:text-gray-400 sm:text-sm rounded-md"
                >
                  <option>EUR</option>
                  <option>USD</option>
                  <option>ZAR</option>
                </select>
              </div>
            </div>
          </div>
          <label className="flex justify-between items-center cursor-pointer mt-8 mb-3 ">
            <label className="text-sm dark:text-gray-300 text-gray-800">
              Recurring
            </label>
            <div className="relative mr-1.5">
              <input
                className="toggle-switch hidden"
                type="checkbox"
                onClick={() => setIsRecurring(!isRecurring)}
              />
              <div className="toggle-path w-6 h-2.5 bg-gray-400 rounded-full shadow-inner"></div>
              <div className="toggle-circle absolute w-4 h-4 bg-gray-300 rounded-full shadow-sm inset-y-0 left-0"></div>
            </div>
          </label>
          <div
            className={"recurring-container" + (isRecurring ? " active" : "")}
          >
            <div className="recurring-animation">
              <label>Recurring type</label>
              <select className="bg-transparent dark:text-gray-400 dark:focus:text-gray-300 text-gray-600 focus:text-gray-800 form-input border-2 dark:border-400 font-base w-full">
                <option className="hidden" value="">
                  Please select
                </option>
                <option
                  className="dark:bg-gray-800 dark:text-gray-300 text-gray-500 font-medium"
                  value="weekly"
                >
                  Weekly
                </option>
                <option
                  className="dark:bg-gray-800 dark:text-gray-300 text-gray-500 font-medium"
                  value="monthly"
                >
                  Monthly
                </option>
                <option
                  className="dark:bg-gray-800 dark:text-gray-300 text-gray-500 font-medium"
                  value="quarterly"
                >
                  Quarterly
                </option>
                <option
                  className="dark:bg-gray-800 dark:text-gray-300 text-gray-500 font-medium"
                  value="annually"
                >
                  Annually
                </option>
              </select>
            </div>
          </div>
          <label className="pt-4">Category</label>
          <input type="text" className="form-input mb-10" />
          <div
            className="flex justify-between"
            onClick={() => setShowModal(false)}
          >
            <button className="button-secondary">Cancel</button>
            <button type="submit" className="button-primary ml-8 self-end">
              Save transaction
            </button>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default ModalForm;
