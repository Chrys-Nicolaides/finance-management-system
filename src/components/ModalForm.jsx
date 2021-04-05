import React, { useState } from "react";
import { IoClose, IoLocationSharp, IoCalendarClear } from "react-icons/io5";
import Card from "./Card";
import Modal from "./Modal";

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
    <Modal>
      <Card fullWidth={false} additionalClasses={"flex-grow sm:max-w-sm"}>
        <form className="flex flex-col p-2 w-full">
          <div className="flex justify-between pb-12">
            <h3 className="text-lg font-semibold">Add new transaction</h3>

            <IoClose
              onClick={() => setShowModal(false)}
              strokeWidth={6}
              className="cursor-pointer stroke-current stroke-4 stroke text-indigo-500 hover:text-indigo-700 dark:text-gray-400 dark:hover:text-gray-200 "
            />
          </div>
          <div>
            <div className="location-container bg-indigo-50 dark:bg-indigo-300 h-14 w-full rounded-md flex items-center">
              <div className="category-container bg-indigo-200 dark:bg-indigo-400 h-10 w-10 p-0 ml-2">
                <IoLocationSharp className="fill-current text-indigo-400 dark:text-indigo-500 w-6 h-6" />
              </div>
              <div className="py-2">
                <h6 className="font-semibold text-indigo-300 dark:text-indigo-400">
                  Location
                </h6>
                <h5 className="font-semibold text-indigo-400 dark:text-indigo-500">
                  Nike
                </h5>
              </div>
            </div>
            <div className="date-container bg-indigo-50 dark:bg-indigo-300 h-14 w-full rounded-md flex items-center mt-3 mb-14">
              <div className="category-container bg-indigo-200 dark:bg-indigo-400 h-10 w-10 p-0 ml-2">
                <IoCalendarClear className="fill-current text-indigo-400 dark:text-indigo-500 w-5 h-5" />
              </div>
              <div className="py-2">
                <h6 className="font-semibold text-indigo-300 dark:text-indigo-400">
                  Date
                </h6>
                <h5 className="font-semibold text-indigo-400 dark:text-indigo-500">
                  Today 01/04/2021
                </h5>
              </div>
            </div>
          </div>
          <label className="">Description</label>
          <input className="form-input mb-6 text-sm" type="text" />

          <div className="flex flex-row w-full">
            <div className=" amount-div justify-start w-3/5 mr-6">
              <label>Amount</label>
              <div className="mt-1 relative rounded-md bg-gray-100 dark:bg-gray-700 h-12">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <span className=" text-gray-400 dark:text-gray-500 text-md dark:bg-transparent items-center self-center">
                    {handleCurrency(currency)}
                  </span>
                </div>
                <input
                  type="number"
                  name="price"
                  id="price"
                  className="align-text-bottom h-12 pl-7 w-full text-sm items-center border-0  hover:border-indigo-400 dark:border-gray-600  dark:hover:border-indigo-400 focus:border-indigo-500 dark:focus:border-indigo-500 rounded-md bg-transparent dark:bg-transparent  outline-none focus:outline-none focus:ring-1 focus:ring-indigo-500 placeholder-gray-400 dark:placeholder-gray-500"
                  placeholder="0.00"
                />
              </div>
            </div>
            <div className="currency-div justify-end w-2/5">
              <div className="">
                <label>Currency</label>
                <div className="mt-1 rounded-md bg-gray-100 dark:bg-gray-700 h-12">
                  <select
                    id="currency"
                    name="currency"
                    onClick={(event) => setCurrency(event.target.value)}
                    className="content-center w-full focus:ring-indigo-400 focus:border-indigo-400 focus:border-2 focus:outline-none pr-8 border-transparent  bg-gray-100 dark:bg-gray-700 h-12 text-gray-500 dark:text-gray-400 sm:text-sm rounded-md"
                  >
                    <option>EUR</option>
                    <option>USD</option>
                    <option>ZAR</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <label className="dark:bg-gray-700 bg-gray-100 h-12 rounded-md flex justify-between items-center cursor-pointer mt-8 mb-3 px-3">
            <label
              className={
                (isRecurring
                  ? " dark:text-indigo-bright text-indigo-500 font-semibold"
                  : "dark:text-gray-500 text-gray-400 font-normal dark:font-normal ") +
                " toggle-text text-sm  "
              }
            >
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
          <div className="flex flex-row" onClick={() => setShowModal(false)}>
            <button className="button-secondary text-sm w-1/2 mr-2 p-0 h-10">
              Cancel
            </button>
            <button
              type="submit"
              className="button-primary font-medium  text-sm w-1/2 ml-2 p-0 h-10"
            >
              Save transaction
            </button>
          </div>
        </form>
      </Card>
    </Modal>
  );
};

export default ModalForm;
