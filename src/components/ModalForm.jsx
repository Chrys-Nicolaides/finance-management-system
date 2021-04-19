import React, { useState } from "react";
import { IoClose, IoLocationSharp, IoCalendarClear } from "react-icons/io5";
import { CreateTransaction } from "../services/api/Transaction";
import Card from "./Card";
import Modal from "./Modal";

const ModalForm = ({ setShowModal, accessToken, profile }) => {
  const [currency, setCurrency] = useState("");
  const [isRecurring, setIsRecurring] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid] = useState(false);
  const [values, setValues] = useState({
    description: "",
    day: "1",
    amount: "",
    currency: "EUR",
    recurring: false,
    recurringType: "Weekly",
    category: {
      id: "1",
      name: "",
    },
  });

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

  const handleChange = (event, field) => {
    event.preventDefault();
    const tempValues = { ...values };
    tempValues[field] = event.target.value;
    setValues(tempValues);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (values.description && values.amount) {
      setValid(true);
    }
    setSubmitted(true);
  };

  const postNewTransaction = async () => {
    CreateTransaction(profile.id, values, accessToken);
  };

  console.log(profile.id);

  return (
    <Modal>
      <Card fullWidth={false} additionalClasses={"flex-grow sm:max-w-sm"}>
        <form
          className="flex flex-col p-2 w-full"
          onSubmit={handleSubmit}
          method="post"
        >
          <div className="flex justify-between pb-12">
            <h3 className="text-lg font-semibold">Add new transaction</h3>

            <IoClose
              type="button"
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
          <input
            className="form-input mb-6 text-sm focus:text-gray-700 text-gray-600 dark:text-gray-200 dark:focus:text-gray-100"
            type="text"
            id="description"
            name="description"
            value={values.description}
            onChange={() => handleChange(event, "description")}
          />

          <div className="flex flex-row w-full">
            <div className=" amount-div justify-start w-3/5 mr-6">
              <label>Amount</label>
              <div
                className=" mb-2 mt-1.5 relative rounded-md bg-gray-100 dark:bg-gray-700 h-12 
                            hover:border-indigo-400"
              >
                <div className="absolute left-0 pl-3 flex items-center pointer-events-none h-12 mt-0 mb-0 ">
                  <span className="text-gray-400 dark:text-gray-500 text-sm dark:bg-transparent ">
                    {handleCurrency(currency)}
                  </span>
                </div>
                <input
                  type="number"
                  id="amount"
                  name="amount"
                  value={values.amount}
                  onChange={() => handleChange(event, "amount")}
                  className="absolute pl-7 h-full w-full text-sm rounded-md 
                  bg-transparent dark:bg-transparent outline-none focus:outline-none 
                  placeholder-gray-400 dark:placeholder-gray-500 
                  dark:border-transparent dark:ring-opacity-0 dark:hover:border-indigo-400 dark:focus:ring-indigo-600 
                  border-transparent      ring-opacity-0      hover:border-indigo-400      focus:ring-indigo-200 active:border-indigo-400 focus:border-indigo-400  border-2"
                  placeholder="0.00"
                />
              </div>
            </div>
            <div className="currency-div justify-end w-2/5">
              <div className="inline-block w-full">
                <label>Currency</label>
                <div className="mt-1 rounded-md bg-gray-100 dark:bg-gray-700 h-12 text-gray-400 ">
                  <select
                    id="currency"
                    name="currency"
                    value={values.currency}
                    onChange={() => handleChange(event, "currency")}
                    onClick={(event) => setCurrency(event.target.value)}
                    className="form-input content-center w-full pr-8 rounded-md
                    bg-gray-100 dark:bg-gray-700 
                    text-gray-400 focus:text-gray-700 dark:text-gray-400 text-sm"
                  >
                    <option className="appearance-none text-gray-500 bg-gray-100 outline-none py-2 hover:bg-indigo-100">
                      EUR
                    </option>
                    <option>USD</option>
                    <option>ZAR</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <label className="dark:bg-gray-700 bg-gray-100 h-12 rounded-md flex justify-between items-center cursor-pointer mt-8 mb-6 px-3  hover:border-indigo-400 hover:border-2 border-2 border-transparent ">
            <label
              className={
                (isRecurring
                  ? " dark:text-indigo-bright text-indigo-500 font-semibold  "
                  : "dark:text-gray-500 text-gray-400 font-normal dark:font-normal ") +
                " toggle-text text-sm "
              }
            >
              Recurring
            </label>
            <div className="relative mr-1.5">
              <input
                className="toggle-switch hidden"
                type="checkbox"
                id="recurring"
                name="recurring"
                value={values.recurring}
                onChange={() => handleChange(event, "recurring")}
                onClick={() => setIsRecurring(!isRecurring)}
              />
              <div className="toggle-path w-6 h-2.5 bg-gray-400 rounded-full shadow-inner"></div>
              <div className="toggle-circle absolute w-4 h-4 bg-gray-300 rounded-full shadow-sm inset-y-0 left-0"></div>
            </div>
          </label>
          <div
            className={"recurring-container " + (isRecurring ? " active" : "")}
          >
            <div className="recurring-animation">
              <label>Recurring type</label>
              <select
                id="recurringType"
                name="recurringType"
                value={values.recurringType}
                onChange={() => handleChange(event, "recurringType")}
                className="form-input w-full dark:bg-gray-700 bg-gray-100 border-2 border-transparent dark:border-transparent 
                dark:text-gray-400 dark:focus:text-gray-300 text-gray-400 focus:text-gray-600 text-sm
                outline-none focus:outline-none mb-10"
              >
                <option className="hidden" value="">
                  Select type
                </option>
                <option
                  className=" dark:bg-gray-800 dark:text-gray-300 text-gray-500 font-medium text-xs hover:bg-indigo-100 hover:text-indigo-500"
                  value="weekly"
                >
                  Weekly
                </option>
                <option
                  className="dark:bg-gray-800 dark:text-gray-300 text-gray-500 font-medium text-xs hover:bg-indigo-100 hover:text-indigo-500"
                  value="monthly"
                >
                  Monthly
                </option>
                <option
                  className="dark:bg-gray-800 dark:text-gray-300 text-gray-500 font-medium text-xs hover:bg-indigo-100 hover:text-indigo-500"
                  value="quarterly"
                >
                  Quarterly
                </option>
                <option
                  className="dark:bg-gray-800 dark:text-gray-300 text-indigo-500 font-medium text-xs hover:bg-indigo-100 hover:text-indigo-500"
                  value="annually"
                >
                  Annually
                </option>
              </select>
            </div>
          </div>
          <label className="mb-1">Category</label>
          <div className="mb-10">
            <select
              id="category"
              name="category"
              value={values.category.id}
              onChange={() => handleChange(event, "category")}
              onClick={(event) => setCurrency(event.target.value)}
              className="form-input appearance-none content-center w-full pr-8 
              bg-gray-100 dark:bg-gray-700 text-gray-400 dark:text-gray-400 text-sm rounded-md"
            >
              <option value="" className="hidden">
                Select category
              </option>
              <option value="Rent">Rent</option>
              <option value="Utilities">Utilities</option>
              <option value="Internet">Internet</option>
              <option value="Food">Food & Groceries</option>
              <option value="Subscriptions">Subscriptions</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div className="flex flex-row" onClick={() => setShowModal(false)}>
            <button
              type="button"
              className="button-secondary text-sm w-1/2 mr-2 p-0 h-10"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="button-primary font-medium  text-sm w-1/2 ml-2 p-0 h-10"
              onClick={() => postNewTransaction()}
            >
              Save transaction
            </button>
          </div>
        </form>
        {submitted ? <div>New transaction created!</div> : ""}
      </Card>
    </Modal>
  );
};

export default ModalForm;
